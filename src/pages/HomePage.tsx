
import React from "react";
import { Link } from "react-router-dom";
import { clients } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null; // This will be caught by our protected route
  }

  return (
    <div className="bg-dot-light min-h-screen">
      <Header title="Existing Clients" />
      
      <div className="dot-container dot-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <Link to={`/client/${client.id}`} key={client.id}>
              <Card className="cursor-pointer transition-all duration-300 hover:scale-[1.02] card-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-medium">{client.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-dot-muted">
                    <p>{client.email}</p>
                    <p>{client.phone}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
