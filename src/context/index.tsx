import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { QueryClientProvider, QueryClient } from "react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};
