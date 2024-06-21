"use client";
import Script from "next/script";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";

const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function Home() {
  return (
    <main className="flex min-w-min min-h-screen bg-bgPrimary w-full justify-center">
      <div className="flex flex-col container max-w-5xl min-h-screen">
        <NavBar />
        <InputField />
        <Footer
          text="Copyright © 2023 | Made with ❤️ by "
          url="https://lakshanrukantha.github.io/"
        />
      </div>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
        `}
      </Script>
    </main>
  );
}
