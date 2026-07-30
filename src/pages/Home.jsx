import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import { Element } from "react-scroll";
export default function Home() {
  return (
    <Element name="home">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </Element>
  );
}