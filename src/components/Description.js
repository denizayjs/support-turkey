import React from "react";

export default function Description() {
  return (
    <section className="p-4 lg:p-8 bg-gray-50">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://www.diken.com.tr/wp-content/uploads/2023/02/20230205-hatay-deprem.jpg"
            alt="help-turkey"
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 border-2 shadow-gray-400">
            <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h3>
            <p className="my-6 dark:text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button
              type="button"
              className="block w-24 text-center rounded bg-red-600  py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              Donate
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://static.birgun.net/resim/haber-detay-resim/2023/02/07/deprem-sonrasi-kahramanmaras-taki-buyuk-yikim-havadan-goruntulendi-1123403-5.jpg"
            alt="help-turkey-people"
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 border-2 shadow-gray-400">
            <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h3>
            <p className="my-6 dark:text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button
              type="button"
              className="block w-24 text-center rounded bg-red-600  py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              Donate
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.cnnturk.com/i/cnnturk/75/0x555/63e0ca2fb57f152bacfa66d2"
            alt="help-turkey-child"
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 border-2 shadow-gray-400">
            <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h3>
            <p className="my-6 dark:text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button
              type="button"
              className="block w-24 text-center rounded bg-red-600  py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
