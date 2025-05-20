
// Mock data for the DOT application

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Category {
  id: string;
  name: string;
  clientId: string;
}

export interface DocumentFile {
  id: string;
  name: string;
  categoryId: string;
  clientId: string;
  url: string;
  type: string;
  size: string;
  uploadDate: string;
}

// Mock Clients
export const clients: Client[] = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "contact@acmecorp.com",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "2",
    name: "Globex Industries",
    email: "info@globex.com",
    phone: "+1 (555) 987-6543",
  },
  {
    id: "3",
    name: "Stark Enterprises",
    email: "hello@stark.com",
    phone: "+1 (555) 456-7890",
  },
  {
    id: "4",
    name: "Wayne Industries",
    email: "contact@wayne.com",
    phone: "+1 (555) 246-8101",
  },
  {
    id: "5",
    name: "Umbrella Corporation",
    email: "info@umbrella.com",
    phone: "+1 (555) 369-2580",
  },
];

// Mock Categories for each client
export const categories: Category[] = [
  // Acme Corporation Categories
  { id: "c1", name: "GST", clientId: "1" },
  { id: "c2", name: "ITR", clientId: "1" },
  { id: "c3", name: "Others", clientId: "1" },
  
  // Globex Industries Categories
  { id: "c4", name: "GST", clientId: "2" },
  { id: "c5", name: "ITR", clientId: "2" },
  { id: "c6", name: "Others", clientId: "2" },
  
  // Stark Enterprises Categories
  { id: "c7", name: "GST", clientId: "3" },
  { id: "c8", name: "ITR", clientId: "3" },
  { id: "c9", name: "Others", clientId: "3" },
  
  // Wayne Industries Categories
  { id: "c10", name: "GST", clientId: "4" },
  { id: "c11", name: "ITR", clientId: "4" },
  { id: "c12", name: "Others", clientId: "4" },
  
  // Umbrella Corporation Categories
  { id: "c13", name: "GST", clientId: "5" },
  { id: "c14", name: "ITR", clientId: "5" },
  { id: "c15", name: "Others", clientId: "5" },
];

// Mock documents
export const documents: DocumentFile[] = [
  // Acme Corporation - GST Documents
  {
    id: "d1",
    name: "GST Return Q1 2025.pdf",
    categoryId: "c1",
    clientId: "1",
    url: "#",
    type: "PDF",
    size: "2.4 MB",
    uploadDate: "2025-04-15",
  },
  {
    id: "d2",
    name: "GST Invoice March 2025.pdf",
    categoryId: "c1",
    clientId: "1",
    url: "#",
    type: "PDF",
    size: "1.2 MB",
    uploadDate: "2025-03-30",
  },
  
  // Acme Corporation - ITR Documents
  {
    id: "d3",
    name: "ITR Filing FY 2024-25.pdf",
    categoryId: "c2",
    clientId: "1",
    url: "#",
    type: "PDF",
    size: "3.1 MB",
    uploadDate: "2025-05-01",
  },
  {
    id: "d4",
    name: "Income Statement 2024.xlsx",
    categoryId: "c2",
    clientId: "1",
    url: "#",
    type: "XLSX",
    size: "1.8 MB",
    uploadDate: "2025-02-15",
  },
  
  // Acme Corporation - Others
  {
    id: "d5",
    name: "Agreement Draft.docx",
    categoryId: "c3",
    clientId: "1",
    url: "#",
    type: "DOCX",
    size: "780 KB",
    uploadDate: "2025-04-10",
  },
  
  // Globex Industries - GST Documents
  {
    id: "d6",
    name: "GST Return Q1 2025.pdf",
    categoryId: "c4",
    clientId: "2",
    url: "#",
    type: "PDF",
    size: "2.2 MB",
    uploadDate: "2025-04-12",
  },
  
  // Globex Industries - ITR Documents
  {
    id: "d7",
    name: "ITR Filing FY 2024-25.pdf",
    categoryId: "c5",
    clientId: "2",
    url: "#",
    type: "PDF",
    size: "2.9 MB",
    uploadDate: "2025-04-25",
  },
  
  // More mock documents can be added as needed for all clients and categories
];

// Helper functions to get data
export const getClientById = (id: string): Client | undefined => {
  return clients.find(client => client.id === id);
};

export const getCategoriesByClientId = (clientId: string): Category[] => {
  return categories.filter(category => category.clientId === clientId);
};

export const getDocumentsByCategoryAndClient = (categoryId: string, clientId: string): DocumentFile[] => {
  return documents.filter(doc => doc.categoryId === categoryId && doc.clientId === clientId);
};
