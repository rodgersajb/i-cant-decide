import "@/styles/globals.css";
import Layout from "Components/Layout";
import { AuthProvider } from "Context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
