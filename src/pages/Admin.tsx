import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, Settings, Save, LogOut, Eye, EyeOff } from "lucide-react";

const ADMIN_PASSWORD_KEY = "admin_auth";
const CV_SETTINGS_KEY = "cv_settings";

// Admin password - set VITE_ADMIN_PASSWORD in your hosting platform for security
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "khanzada";

interface CVSettings {
  cvPassword: string;
  cvUrl: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCvPassword, setShowCvPassword] = useState(false);
  const { toast } = useToast();

  const [settings, setSettings] = useState<CVSettings>({
    cvPassword: "",
    cvUrl: "",
  });

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem(ADMIN_PASSWORD_KEY);
    if (auth === "true") {
      setIsAuthenticated(true);
    }

    // Load existing settings
    const savedSettings = localStorage.getItem(CV_SETTINGS_KEY);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_PASSWORD_KEY, "true");
      toast({
        title: "Welcome, Admin",
        description: "You are now logged in.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect admin password.",
        variant: "destructive",
      });
    }
    setAdminPassword("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(ADMIN_PASSWORD_KEY);
    toast({
      title: "Logged Out",
      description: "You have been logged out.",
    });
  };

  const handleSaveSettings = () => {
    localStorage.setItem(CV_SETTINGS_KEY, JSON.stringify(settings));
    toast({
      title: "Settings Saved",
      description: "CV settings have been updated successfully.",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-heading">Admin Access</CardTitle>
            <CardDescription>
              Enter admin password to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin password"
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
            <Button onClick={handleLogin} className="w-full" disabled={!adminPassword}>
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero p-6">
      <div className="container max-w-2xl mx-auto pt-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-foreground">Admin Panel</h1>
              <p className="text-sm text-muted-foreground">Manage CV download settings</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">CV Download Settings</CardTitle>
            <CardDescription>
              Update the password and download link for your CV
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cvPassword">CV Download Password</Label>
              <p className="text-xs text-muted-foreground">
                Visitors need this password to download your CV
              </p>
              <div className="relative">
                <Input
                  id="cvPassword"
                  type={showCvPassword ? "text" : "password"}
                  placeholder="Enter CV password"
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
              <Label htmlFor="cvUrl">Google Drive Direct Download Link</Label>
              <p className="text-xs text-muted-foreground">
                Use format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
              </p>
              <Input
                id="cvUrl"
                type="url"
                placeholder="https://drive.google.com/uc?export=download&id=..."
                value={settings.cvUrl}
                onChange={(e) => setSettings({ ...settings, cvUrl: e.target.value })}
              />
            </div>

            <Button onClick={handleSaveSettings} className="w-full gap-2">
              <Save size={18} />
              Save Settings
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Settings are stored in browser localStorage. They persist on this device only.
        </p>
      </div>
    </div>
  );
};

export default Admin;
