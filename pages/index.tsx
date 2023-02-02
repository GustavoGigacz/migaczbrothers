import Carousel from "../components/Carousel/Carousel";
import LandingPage from "../components/LandingPage";
import PaymentMethods from "../components/PaymentMethods";
import Payment from "../components/PaymentSection";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Services />
      <Carousel />
      <PaymentMethods />
      <Payment />
    </>
  );
}
