import "@/styles/globals.scss";
import "@/styles/Header.scss";
import "@/styles/Hero.scss";
import "@/styles/Amenities2.scss";
import "@/styles/Residencies.scss";
import "@/styles/Amenities.scss";
import "@/styles/Gallery.scss";
import "@/styles/Testimonials.scss";
import "@/styles/Contact.scss";
import "@/styles/Location.scss";
import "@/styles/Footer.scss";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    // <AnimatePresence initial={false} mode="popLayout">
      <Component {...pageProps} />
    // </AnimatePresence> 
  );
}
