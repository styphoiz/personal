import React from "react";
import image from "../images/kakashi.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Kakashi from Naruto"
        className="absolute object-cover w-full h-full opacity-30"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-500 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, I'm Mohammed
        </h1>
      </section>
    </main>
  );
}
