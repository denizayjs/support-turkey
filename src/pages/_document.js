import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <a
          href="https://www.supportturkey.org/"
          style={{
            textAlign: "center",
            margin: "0",
            background: "#DC2638",
            width: "150px",
            color: "#fff",
            padding: "5px 20px",
            borderRadius: "5px 5px 0px 0px",
            textDecoration: "none",
            fontSize: " 16px",
            position: "fixed",
            top: "calc(50vh - 150px)",
            right: "0px",
            transform: "rotate(-90deg)",
            transformOrigin: " bottom right",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          #SupportTurkey
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
