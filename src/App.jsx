import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import TryOut from "./components/TryOut";

const App = () => {
  return (
    <div className="bg-black1 text-white overflow-hidden ">
      <Header />
      <Main />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <TryOut />
      <Footer />
    </div>
  );
};

export default App;
