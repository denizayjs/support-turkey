import "@/styles/globals.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-9M84Y3BPY6" });
  }, []);
  return <Component {...pageProps} />;
}
