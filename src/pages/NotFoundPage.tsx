
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dot-light p-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-dot-primary mb-6">404</h1>
        <h2 className="text-2xl font-medium text-dot-dark mb-4">Page Not Found</h2>
        <p className="text-dot-muted mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-dot-accent hover:bg-blue-700">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
