import React from 'react'

export default function AskingAi() {
  return (<>
      <section className='flex'>
        <div className="flex h-screen flex-col justify-between border-e bg-slate-100">
  <div className="px-4 py-6">
    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
      Logo
    </span>

    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
         Dashboard
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
        Start new chat
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
      Ai chat
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
       Ai text gernerator
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
      Ai image gernerator
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
      Ai coding
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
     Ai text to speech
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
       Ai computer use
        </a>
      </li>
      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Account </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Details
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Security
              </a>
            </li>

            <li>
              <form action="#">
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="size-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Your Name</strong>

          <span> account </span>
        </p>
      </div>
    </a>
  </div>
</div>
<div>
  
</div>
<div className='h-[800px] w-[80%]  bg-gray-300-slate-400 flex justify-center items-center'>
{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="relative">
<label htmlFor="Search" className="block text-2xl  font-medium text-gray-800"> How can i help you? </label>

  <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="mt-1 p-5  w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-xs sm:text-sm"
  />

  <span className="absolute inset-y-5 end-0 grid w-10 place-content-center">
    <button type="button" className="text-indigo-500 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>
</div>
 </section>
  </>

  )
}

