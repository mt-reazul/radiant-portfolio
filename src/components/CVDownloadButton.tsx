import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Download, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CV_SETTINGS_KEY = "cv_settings";

interface CVSettings {
  cvPassword: string;
  cvUrl: string;
}

const CVDownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<CVSettings>({ cvPassword: "", cvUrl: "" });
  const { toast } = useToast();

  useEffect(() => {
    // Load settings from localStorage (set by admin)
    const savedSettings = localStorage.getItem(CV_SETTINGS_KEY);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Use localStorage settings first, then env vars as fallback
  const correctPassword = settings.cvPassword || import.meta.env.VITE_CV_PASSWORD || "demo123";
  const cvUrl = settings.cvUrl || import.meta.env.VITE_CV_URL || "/cv.pdf";

  const handleDownload = () => {
    setIsLoading(true);
    
    if (password === correctPassword) {
      // Trigger download
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Md_Mahmudul_Hasan_CV.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started",
        description: "Your CV download has begun.",
      });
      
      setIsOpen(false);
      setPassword("");
    } else {
      toast({
        title: "Incorrect Password",
        description: "Please enter the correct password to download the CV.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleDownload();
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={() => setIsOpen(true)}
        className="gap-2"
      >
        <Download className="w-5 h-5" />
        Download CV
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Password Protected
            </DialogTitle>
            <DialogDescription>
              Enter the password to download the CV. Contact me if you need access.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-4 py-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <Button 
              onClick={handleDownload} 
              disabled={isLoading || !password}
              className="w-full"
            >
              {isLoading ? "Verifying..." : "Download CV"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CVDownloadButton;
