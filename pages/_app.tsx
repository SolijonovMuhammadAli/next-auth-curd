import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../src/api/posts";
import { AuthProvider } from "../src/hooks/useAuth";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={apiSlice}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApiProvider>
  );
}

export default MyApp;
