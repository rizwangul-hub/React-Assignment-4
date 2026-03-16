import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProductCard from "./component/ProductCard";
import headphone from "../public/headphone.jpg";
import smartphone from "../public/smartphone.jpg";
import laptop from "../public/laptop.jpg";

function App() {
  return (
    <>
    <div className="product-container"> 
      <ProductCard
        image={laptop}
        title="Laptop"
        price={999}
        description="High performance laptop "
      >
        Click me
      </ProductCard>

      <ProductCard
        image={smartphone}
        title="Smartphone"
        price={399}
        description="High performance Mobile "
      >
        click me
      </ProductCard>
      <ProductCard
        image={headphone}
        title="Headphones"
        price={59}
        description="High performance headphone "
      >
        Click me
      </ProductCard>
    </div>
    </>
    
  );
}

export default App;
