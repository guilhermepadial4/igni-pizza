import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/theme-provider";
import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="ignipizza-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | igni.pizza" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
