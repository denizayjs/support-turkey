import React from "react";

export default function Donate() {
  return (
    <section className="bg-gray-50" id="donate">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl font-bold">
            Make a Difference: Donate Now
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-500">
            Your generosity has the power to transform lives. Donate below and
            help create a brighter future for those in need. Be the light in
            someone&lsquo;s life - donate now.
          </p>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="https://donate.tpfund.org/campaign/tpf-turkiye-earthquake/c465112"
            className="max-w-sm mx-auto hover:shadow-2xl rounded-lg group hover:no-underline focus:no-underline bg-gray-50 border-2"
            target="_blank"
          >
            <img
              role="presentation"
              className="object-fix w-full rounded h-44 dark:bg-gray-500"
              src="https://assets.classy.org/7058786/37e79ac2-a706-11ed-b3f2-0a58a9feac02.png"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                TURKISH PHILANTHROPY FUNDS
              </h3>
              <span className="text-xs px-2 py-1 font-bold rounded bg-red-600 text-white mr-1">
                US
              </span>
              <span className="text-xs px-2 py-1 font-bold rounded bg-red-600 text-white mr-1">
                Worldwide
              </span>
              <p>
                Make a life-saving impact for earthquake victims in Turkey. Your
                donation provides aid. Donate today.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://bagis.ahbap.org/bagis?currency=USD"
            className="max-w-sm mx-auto hover:shadow-2xl rounded-lg group hover:no-underline focus:no-underline bg-gray-50 border-2"
            target="_blank"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://cdn.fonzip.com/public/reseau/img/donation/blob-1675804636838.png"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                AHBAP
              </h3>
              <span className="text-xs px-2 py-1 font-bold rounded bg-red-600 text-white mr-1">
                Turkey
              </span>
              <span className="text-xs px-2 py-1 font-bold rounded bg-red-600 text-white mr-1">
                Worldwide
              </span>
              <p>
                Help earthquake victims in Turkey. Your donation provides aid
                like shelter, food and medical supplies. Make a difference in
                someone&lsquo;s life. Donate now. Thank you.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://turkeymozaik.org.uk/donate/"
            className="max-w-sm mx-auto hover:shadow-2xl rounded-lg group hover:no-underline focus:no-underline bg-gray-50 border-2"
            target="_blank"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ytimg.com/vi/QTwxMr9MGjA/mqdefault.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                TURKEY MOZAIK FOUNDATION
              </h3>
              <span className="text-xs px-2 py-1 font-bold rounded bg-red-600 text-white mr-1">
                UK
              </span>
              <span className="text-xs px-2 py-1 font-bold rounded bg-red-600 text-white mr-1">
                Worldwide
              </span>
              <p>
                Be a part of the relief effort for earthquake victims in Turkey.
                Your donation brings comfort. Donate now.
              </p>
            </div>
          </a>
        </div>
        <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="p-4 lg:p-8 border-2 rounded-lg break-words text-center shadow-lg">
          <h2 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            AHBAP Crypto Address
          </h2>
          <div className="font-bold text-lg my-4">
            <h3 className="mb-4 text-red-600">BEP20:</h3>

            <p className="dark:text-gray-500">
              {" "}
              0xB67705398fEd380a1CE02e77095fed64f8aCe463
            </p>
          </div>

          <div className="font-bold text-lg my-4">
            <h3 className="mb-4 text-red-600">ERC20:</h3>

            <p className="dark:text-gray-500">
              {" "}
              0xe1935271D1993434A1a59fE08f24891Dc5F398Cd
            </p>
          </div>
          <div className="font-bold text-lg my-4">
            <h3 className="mb-4 text-red-600">Avalanche:</h3>

            <p className="dark:text-gray-500">
              {" "}
              0x868D27c361682462536DfE361f2e20B3A6f4dDD8
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
