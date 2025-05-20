
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="dot-container py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-dot-primary">{title}</h1>
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="text-dot-muted hover:text-dot-primary flex items-center"
            onClick={logout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
