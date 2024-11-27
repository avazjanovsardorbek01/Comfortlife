import AOS from "aos";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SettingsProvider } from "./contexts/setting-context";
import routes from "./routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "aos/dist/aos.css";
import "./scss/style.scss";
import "react-slideshow-image/dist/styles.css";
import FilterProvider from "./contexts/search-filter";
import AttachedContacts from "./components/attachedContacts";
import QuickContact from "./components/quickContact/QuickContact";

const queryClient = new QueryClient();
function App() {
  const content = useRoutes(routes);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <Navbar />
          <AttachedContacts />
          <FilterProvider>{content}</FilterProvider>
          <QuickContact />
          <Footer />
        </SettingsProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
