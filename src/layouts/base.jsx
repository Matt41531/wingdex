import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/common/MainSidebar";
import PropTypes from "prop-types";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useEffect, useState } from "react";
import { CardsContext } from "@/hooks/cardsContext";

function Base({ children }) {
  const [mounted, setMounted] = useState(false);
  const [cardResults, setCardResults] = useState(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <SidebarProvider>
      <MainSidebar />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <CardsContext.Provider value={{ cardResults, setCardResults }}>
          <Header />
          {children}
          <Footer />
        </CardsContext.Provider>
      </div>
    </SidebarProvider>
  );
}

export default Base;

Base.propTypes = {
  children: PropTypes.node.isRequired,
};
