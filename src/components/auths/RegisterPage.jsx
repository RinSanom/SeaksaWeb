import React from 'react'

export default function RegisterPage() {
  return (
  <>
  <div class="relative mt-60">
      <div class="relative -mt-40 m-4">
        <form class="bg-white max-w-xl w-full mx-auto p-6 sm:p-8 rounded-2xl">
          <div class="mb-12">
            <h3 class="text-gray-800 text-3xl text-center font-black">Sign Up</h3>
            <p class="text-gray-700 text-1sm text-center p-2">Let's get you all st up so you can access your personal account.</p>
          </div>

          <div>
            <label class="text-gray-800 text-xs block mb-1">Full Name</label>
            <div class="relative flex items-center">
              <input name="name" type="text" required class="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none" placeholder="Enter name" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div class="mt-5">
            <label class="text-gray-800 text-xs block mb-1">Email</label>
            <div class="relative flex items-center">
              <input name="email" type="text" required class="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>

          <div class="mt-5">
            <label class="text-gray-800 text-xs block mb-1">Password</label>
            <div class="relative flex items-center">
              <input name="password" type="password" required class="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div class="flex items-center mt-8">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
            <div class="flex items-center">
            <label for="remember-me" class="ml-3 block text-sm flex items-center">
            I agree to all the 
           <p class="text-red-600 ml-1">Terms and Privacy Policies.</p>
           </label>
            </div>

          </div>

          <div class="mt-8">
            <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
              Register
            </button>
            <p class="text-gray-800 text-sm mt-4 text-center">Already have an account? <a href="javascript:void(0);" class="text-blue-500 font-semibold hover:underline ml-1">Login here</a></p>
          </div>
        </form>
      </div>
    </div>
  <div></div>
  </>
  )
}
