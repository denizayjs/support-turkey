import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            #SupportTurkey
          </h1>
          <div className="font-extrabold text-red-700 text-xl sm:block pt-6">
            Turkey needs your urgent help after devastating series of
            earthquakes struck.
          </div>

          <p className="mt-4 sm:text-base sm:leading-relaxed">
            A massive earthquake that occurred in the early hours of Monday
            morning near the Syrian border in southeast Turkey claimed the lives
            of over 9,000 people and injured thousands more.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#donate"
              onClick={() => window.gtag("event", "donate-click")}
            >
              Donate Now
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#widget-code"
              onClick={() => window.gtag("event", "add-widget-click")}
            >
              Add Widget
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
