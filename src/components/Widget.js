import React from "react";

export default function Widget() {
  const widgetCode = `<a
    href="https://www.supportturkey.org/"
    style="
      text-align: center;
      margin: 0;
      background: #DC2638;
      width: 150px;
      color: #fff;
      padding: 5px 20px;
      border-radius: 5px 5px 0px 0px;
      text-decoration: none;
      font-size: 16px;
      position: fixed;
      top: calc(50vh - 150px);
      right: 0px;
      transform: rotate(-90deg);
      transform-origin: bottom right;
    "
    target="_blank"
    rel="noopener noreferrer"
    >#SupportTurkey</a
  >`;

  const widgetCodeToReact = `<a
  href="https://www.supportturkey.org/"
  style={{
    textAlign: "center",
    margin: "0",
    background: ""#DC2638",
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
</a>`;

  return (
    <section
      className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 lg:h-screen lg:items-center lg:flex"
      id="widget-code"
    >
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="text-3xl font-bold">
              Adding a Widget to Your Website
            </h3>
            <p className="my-6 dark:text-gray-400">
              Make a difference for Turkey by adding a dynamic widget to your
              website. Simply paste this code within the body tag of your HTML
              to show your support:
            </p>
            <p className="my-6 text-white border-gray-50 border-2 rounded lg:py-8 lg:px-16 py-4 px-8 break-words">{`${widgetCode}`}</p>
            <p className="my-6 dark:text-gray-400">For React.js and Next.js:</p>
            <p className="my-6 text-white border-gray-50 border-2 rounded lg:py-8 lg:px-16 py-4 px-8 break-words">{`${widgetCodeToReact}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
