import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CookieConsent } from "@/components/legal/CookieConsent";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="min-h-[60dvh]">
        {children}
      </main>
      <Footer />
      <WhatsAppFloating />
      <CartDrawer />
      <CookieConsent />
    </>
  );
}
