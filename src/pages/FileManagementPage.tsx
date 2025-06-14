
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getClientById, getDocumentsByCategoryAndClient } from "@/data/mockData";
import { categories } from "@/data/mockData";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft, Download, Eye, Home } from "lucide-react";

const FileManagementPage = () => {
  const { clientId, categoryId } = useParams<{ clientId: string; categoryId: string }>();
  const navigate = useNavigate();
  
  if (!clientId || !categoryId) {
    return <div>Missing parameters</div>;
  }

  const client = getClientById(clientId);
  const category = categories.find(cat => cat.id === categoryId);
  const documents = getDocumentsByCategoryAndClient(categoryId, clientId);

  if (!client || !category) {
    return <div>Client or category not found</div>;
  }

  // Mock functions for the file actions
  const handleDownload = (fileId: string, fileName: string) => {
    alert(`Downloading: ${fileName}`);
    // In a real application, this would initiate a file download
  };

  const handleViewOnline = (fileId: string, fileName: string) => {
    alert(`Viewing online: ${fileName}`);
    // In a real application, this would open the file in a viewer
  };

  return (
    <div className="bg-dot-light min-h-screen">
      <Header title={`${client.name} - ${category.name}`} />
      
      <div className="dot-container dot-section">
        <div className="flex gap-4 mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-dot-primary hover:text-dot-accent"
            onClick={() => navigate(`/client/${clientId}`)}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
          
          <Button 
            variant="ghost" 
            className="flex items-center text-dot-primary hover:text-dot-accent"
            onClick={() => navigate('/')}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Clients
          </Button>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-medium text-dot-primary mb-2">Files</h2>
          {documents.length === 0 ? (
            <div className="bg-white rounded-lg p-8 shadow text-center">
              <p className="text-dot-muted">No documents found in this category</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((document) => (
                    <TableRow key={document.id}>
                      <TableCell className="font-medium">{document.name}</TableCell>
                      <TableCell>{document.type}</TableCell>
                      <TableCell>{document.size}</TableCell>
                      <TableCell>{document.uploadDate}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-dot-accent border-dot-accent hover:bg-dot-accent hover:text-white"
                          onClick={() => handleDownload(document.id, document.name)}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleViewOnline(document.id, document.name)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileManagementPage;
