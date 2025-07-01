import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you! Reach out anytime.
        </p>
      </div>

      <div className="bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md text-white space-y-4 text-center">
        <div>
          <p className="text-lg font-medium">📧 Email</p>
          <p className="text-purple-400">patelsimolee12@gmail.com</p>
        </div>
        <div>
          <p className="text-lg font-medium">📱 Phone</p>
          <p className="text-purple-400">+61 435264567</p>
        </div>
        <div>
          <p className="text-lg font-medium">💼 LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/simolee-patel-6a72971b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            simolee-patel
          </a>
        </div>
        <div>
          <p className="text-lg font-medium">🌐 Github</p>
          <a
            href="https://github.com/simolee-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            simolee-patel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
