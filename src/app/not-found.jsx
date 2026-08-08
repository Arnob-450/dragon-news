import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#1B1B1B] flex flex-col">
      {/* Breaking bar */}
      <div className="bg-black flex items-center">
        <span className="bg-[#C81E3A] text-white text-xs font-bold px-4 py-2 shrink-0">
          404
        </span>
        <p className="text-gray-200 text-sm px-4 truncate">
          This page could not be found in the archive
        </p>
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <p className="text-xs tracking-widest uppercase text-[#C81E3A] font-bold mb-2">
          Corrections &amp; Missing Pages
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          This Page Has Vanished
        </h2>

        <div className="text-6xl font-serif font-black border-4 border-black rounded-full w-40 h-40 flex items-center justify-center mb-6">
          404
        </div>

        <p className="max-w-md text-gray-600 mb-8">
          We searched the newsroom top to bottom and could not find the story you are
          looking for. It may have moved, or the address may be wrong.
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-[#C81E3A] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-black transition-colors"
          >
            Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;