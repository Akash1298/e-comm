"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-100 py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-fuchsia-700 mb-4 drop-shadow">Contact Us</h2>
          <p className="text-gray-700 mb-6">We'd love to hear from you! Fill out the form or reach us directly at:</p>
          <div className="mb-4">
            <span className="block text-lg font-semibold text-fuchsia-600">Email:</span>
            <a href="mailto:support@stylehub.com" className="text-indigo-600 hover:underline">support@stylehub.com</a>
          </div>
          <div>
            <span className="block text-lg font-semibold text-fuchsia-600">Phone:</span>
            <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a>
          </div>
        </div>
        {/* Contact Form */}
        <form className="md:w-1/2 bg-gradient-to-br from-fuchsia-100 via-orange-100 to-yellow-100 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-fuchsia-700 mb-2">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-gray-900 shadow-sm"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-gray-900 shadow-sm"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-gray-900 shadow-sm resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 px-8 py-3 bg-gradient-to-r from-fuchsia-500 via-orange-400 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:from-fuchsia-600 hover:to-yellow-500 transition-colors text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
