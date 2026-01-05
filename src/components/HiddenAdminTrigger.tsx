import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, Save, Eye, EyeOff } from "lucide-react";

const CV_SETTINGS_KEY = "cv_settings";
// Encoded admin password for basic obfuscation
const ENCODED_PASSWORD = "a2hhbnphZGE="; // Base64 encoded
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || atob(ENCODED_PASSWORD);
const LOGIN_TIMEOUT = 10; // seconds

interface CVSettings {
  cvPassword: string;
  cvUrl: string;
}

const HiddenAdminTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCvPassword, setShowCvPassword] = useState(false);
  const [timeLeft, setTimeLeft] = useState(LOGIN_TIMEOUT);
  const [settings, setSettings] = useState<CVSettings>({ cvPassword: "", cvUrl: "" });
  const { toast } = useToast();
  
  const clickCount = useRef(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);
  const loginTimer = useRef<NodeJS.Timeout | null>(null);

  // Load settings
  useEffect(() => {
    const savedSettings = localStorage.getItem(CV_SETTINGS_KEY);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Login timeout countdown
  useEffect(() => {
    if (isOpen && !isAuthenticated) {
      setTimeLeft(LOGIN_TIMEOUT);
      
      loginTimer.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (loginTimer.current) clearInterval(loginTimer.current);
      };
    }
  }, [isOpen, isAuthenticated]);

  const handleTriggerClick = () => {
    clickCount.current += 1;
    
    if (clickTimer.current) clearTimeout(clickTimer.current);
    
    // Require 3 clicks within 1 second
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1000);

    if (clickCount.current >= 3) {
      clickCount.current = 0;
      setIsOpen(true);
      setIsAuthenticated(false);
      setAdminPassword("");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAuthenticated(false);
    setAdminPassword("");
    if (loginTimer.current) clearInterval(loginTimer.current);
  };

  const handleLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      if (loginTimer.current) clearInterval(loginTimer.current);
      toast({
        title: "Welcome, Admin",
        description: "You can now manage CV settings.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password.",
        variant: "destructive",
      });
    }
    setAdminPassword("");
  };

  const handleSaveSettings = () => {
    localStorage.setItem(CV_SETTINGS_KEY, JSON.stringify(settings));
    toast({
      title: "Settings Saved",
      description: "CV settings updated successfully.",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      {/* Hidden trigger - triple click on copyright */}
      <span 
        onClick={handleTriggerClick}
        className="cursor-default select-none"
      >
        © 2025 Reazul Islam
      </span>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          {!isAuthenticated ? (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Admin Access
                </DialogTitle>
                <DialogDescription>
                  Enter password within {timeLeft} seconds
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Admin password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                
                {/* Timer bar */}
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-linear"
                    style={{ width: `${(timeLeft / LOGIN_TIMEOUT) * 100}%` }}
                  />
                </div>
                
                <Button onClick={handleLogin} className="w-full" disabled={!adminPassword}>
                  Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>CV Settings</DialogTitle>
                <DialogDescription>
                  Manage password and download link
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="cvPassword">CV Download Password</Label>
                  <div className="relative">
                    <Input
                      id="cvPassword"
                      type={showCvPassword ? "text" : "password"}
                      placeholder="Password for visitors"
                      value={settings.cvPassword}
                      onChange={(e) => setSettings({ ...settings, cvPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCvPassword(!showCvPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showCvPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvUrl">Google Drive Link</Label>
                  <Input
                    id="cvUrl"
                    type="url"
                    placeholder="https://drive.google.com/uc?export=download&id=..."
                    value={settings.cvUrl}
                    onChange={(e) => setSettings({ ...settings, cvUrl: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">
                    Format: https://drive.google.com/uc?export=download&id=FILE_ID
                  </p>
                </div>

                <Button onClick={handleSaveSettings} className="w-full gap-2">
                  <Save size={18} />
                  Save Settings
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HiddenAdminTrigger;
