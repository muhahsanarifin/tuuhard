"use client";

import React from "react";
import Image from "next/image";
import * as auth from "../utils/others/auth";
import { useRouter } from "next/navigation";

export const Register: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <section className="h-full flex">
        <div className="flex gap-x-4 h-full m-auto">
          <div className="flex w-1/2">
            <Image
              alt="Tuuhard Logo"
              src="https://res.cloudinary.com/dgdhrpj1r/image/upload/v1692054717/tuuhard-image-static/tuuhard-logo_pnd7gc.png"
              className="h-60 w-80 opacity-80 bg-transparent m-auto"
              width={500}
              height={500}
              priority
            />
          </div>
          <main className="flex h-full w-1/2">
            <div className="max-w-xl lg:max-w-3xl flex flex-col gap-y-4">
              <div className="mt-auto flex flex-col gap-y-2">
                <h1 className="text-2xl font-bold text-[#2f80ec] sm:text-3xl md:text-4xl">
                  Welcome to Tuuhard
                </h1>
              </div>
              <div className="flex gap-y-2">
                <ul className="flex flex-col gap-y-4 w-full">
                  {auth.register.map((el, idx) => (
                    <li key={idx} className="flex flex-col gap-y-2">
                      <label
                        htmlFor={el.htmlFor}
                        className="text-sm text-gray-700"
                      >
                        {el.title}
                      </label>

                      <input
                        type={el.type}
                        id={el.id}
                        name={el.name}
                        className="w-full rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 border-2 border-solid border-gray-200 transition focus:outline-none focus:border-blue-500"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label
                  htmlFor="registeringAccept"
                  className="flex gap-x-4 items-start"
                >
                  <input
                    type="checkbox"
                    id="registeringAccept"
                    name="registeringAccept"
                    className="h-6 w-6 rounded-md shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="text-gray-700 underline">
                    terms and conditions{" "}
                  </a>
                  and{" "}
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="flex items-center gap-x-2 mb-auto">
                <button className="text-sm text-white p-3 rounded-lg bg-[#63a0f1] transition hover:scale-105">
                  Create an account
                </button>

                <p className=" text-sm text-gray-500 mr-auto">
                  Already have an account ?{" "}
                  <button
                    className="text-gray-700 underline"
                    onClick={() => router.push("/login")}
                  >
                    Sign in
                  </button>
                  .
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export const Login: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex h-full">
      <div className="m-auto w-1/2 px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="absolute -z-50 bottom-0 top-0 left-0 right-0">
          <Image
            alt="Tuuhard Logo"
            src="https://res.cloudinary.com/dgdhrpj1r/image/upload/v1692054717/tuuhard-image-static/tuuhard-logo_pnd7gc.png"
            className="w-full h-full opacity-10 bg-transparent"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-center text-2xl font-bold text-[#2f80ec] sm:text-3xl">
              Tuuhard
            </h1>

            {!true ? (
              <p className="mt-4 text-gray-500 text-sm">
                Welcome back to Tuuhard
              </p>
            ) : (
              <p className="mx-auto mt-4 max-w-md text-sm text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati sunt dolores deleniti inventore quaerat mollitia?
              </p>
            )}
          </div>

          <div className=" mx-auto mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg w-4/5">
            <p className="text-center text-lg font-semibold">
              Sign in to your account
            </p>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-2 border-solid border-gray-200 p-4 pe-12 text-sm shadow-sm transition delay-200 focus:outline-none focus:border-blue-500"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-2 border-solid border-gray-200 p-4 pe-12 text-sm shadow-sm transition delay-200 focus:outline-none focus:border-blue-500"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account ?{" "}
                <button
                  className="underline"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </button>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
