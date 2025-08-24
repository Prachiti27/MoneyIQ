"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-28 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Smarter Financial Decisions,
          <span className="text-gray-600"> Powered by AI</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Harness the power of artificial intelligence to manage your money smarter with
          MoneyIQ. Track spending, forecast trends, and make confident financial choices — all in one place.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href={"/dashboard"}>
            <Button
              size="lg"
              className="px-8 bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200"
            >
              Get Started
            </Button>
          </Link>

          <Link href="/features">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              Explore Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
