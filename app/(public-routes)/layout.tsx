import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageWrapper from "@/components/animations/PageWrapper";

// WHAT: Shared layout for all public routes.
// WHY: Ensures consistency across the main site navigation areas.
// HOW: Wrapping children with Navbar, Footer, and PageWrapper.
// IMPACT: Simplifies page creation and handles core layout logic once.

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer />
    </>
  );
}
