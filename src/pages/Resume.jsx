import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center px-6 pt-28 flex-1">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Resume
        </h2>

        {/* Download Button */}
        <a
          href="/resume.pdf" // Make sure resume.pdf is in the public folder
          download
          className="mb-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition"
        >
          Download Resume
        </a>

        {/* PDF Viewer */}
        <div className="w-full max-w-5xl h-[80vh] mb-12">
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg"
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a href="/resume.pdf" className="text-yellow-400 underline">
                Download the PDF
              </a>
              .
            </p>
          </iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}