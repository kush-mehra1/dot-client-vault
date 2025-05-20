
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getClientById, getCategoriesByClientId } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Folder } from "lucide-react";

const ClientDetailsPage = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const navigate = useNavigate();
  
  if (!clientId) {
    return <div>No client ID provided</div>;
  }

  const client = getClientById(clientId);
  const categories = getCategoriesByClientId(clientId);

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <div className="bg-dot-light min-h-screen">
      <Header title={client.name} />
      
      <div className="dot-container dot-section">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center text-dot-primary hover:text-dot-accent"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Clients
        </Button>
        
        <div className="mb-6">
          <h2 className="text-xl font-medium text-dot-primary mb-2">Client Information</h2>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-dot-muted">Email</p>
                <p className="font-medium">{client.email}</p>
              </div>
              <div>
                <p className="text-sm text-dot-muted">Phone</p>
                <p className="font-medium">{client.phone}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-medium text-dot-primary mb-4">Document Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                to={`/client/${clientId}/category/${category.id}`} 
                key={category.id}
              >
                <Card className="cursor-pointer transition-all duration-300 hover:scale-[1.02] card-shadow">
                  <CardContent className="p-6 flex items-center">
                    <Folder className="h-10 w-10 text-dot-accent mr-4" />
                    <CardTitle className="text-xl font-medium">{category.name}</CardTitle>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsPage;
