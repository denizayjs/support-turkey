import React from "react";

export default function Description() {
  return (
    <section className="p-4 lg:p-8 bg-gray-50">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-sm lg:flex-row">
          <img
            src="https://before-sunset-assets.nyc3.digitaloceanspaces.com/help-turkey/turkey3.png"
            alt="help-turkey"
            className="h-80  dark:bg-gray-500 aspect-video object-cover"
          />
          <div className="flex flex-col justify-center flex-1 p-6 border-2 shadow-gray-400">
            <h3 className="text-3xl font-bold">Why was it so deadly?</h3>
            <p className="my-6 text-base dark:text-gray-500">
              The first earthquake was significant with an official magnitude
              was 7.8. It broke along a fault line that was approximately 100 km
              (62 miles) long, seriously damaging buildings close to the fault.
              <br />
              The region had not had a large earthquake or warning signs in over
              200 years, thus it was less prepared than a more earthquake-prone
              zone.
              <br />
              The sturdiness of buildings and timing also play a role in
              disaster impact. The earthquake hit in the early morning when
              people were inside their homes, asleep.
            </p>
            <button
              type="button"
              className="block w-24 text-center rounded bg-red-600  py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              <a href="#donate">Donate</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-sm lg:flex-row-reverse">
          <img
            src="https://before-sunset-assets.nyc3.digitaloceanspaces.com/help-turkey/turkey2.png"
            alt="help-turkey-people"
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 border-2 shadow-gray-400">
            <h3 className="text-3xl font-bold">
              One of the deadliest earthquakes in history
            </h3>
            <p className="my-6 dark:text-gray-500 text-base">
              More than 14 million, which is more than Belgium&lsquo;s
              population, were affected with more than 9,000 people have been
              reported dead, with tens of thousands injured and hundreds of
              structures destroyed. By offering your help and support, you can
              make a tangible difference in the lives of those who have been
              affected by this tragedy and bring hope and comfort to those who
              are in need.
            </p>
            <button
              type="button"
              className="block w-24 text-center rounded bg-red-600  py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              <a href="#donate">Donate</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-sm lg:flex-row">
          <img
            src="https://before-sunset-assets.nyc3.digitaloceanspaces.com/help-turkey/turkey1.png"
            alt="help-turkey-child"
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 border-2 shadow-gray-400">
            <h3 className="text-3xl font-bold">Why should you help?</h3>
            <p className="my-6 dark:text-gray-500 text-base">
              The loss of life and the extent of damage caused by the earthquake
              are overwhelming and have left many people in need of basic
              necessities such as food, shelter, and medical care.
              <br />
              Offer your support to the people of Turkey during this traumatic
              time.
            </p>
            <button
              type="button"
              className="block w-24 text-center rounded bg-red-600  py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              <a href="#donate">Donate</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
