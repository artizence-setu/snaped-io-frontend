import SaleBanner from "./components/sale-banner";
import LandingPageHeader from "./components/landing-page-header";
import LandingPageFooter from "./components/landing-page-footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <SaleBanner />
      <LandingPageHeader />
      {children}
      <LandingPageFooter />
    </div>
  );
};

export default LandingLayout;
