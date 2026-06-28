import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Have an internship opportunity or want to collaborate?
          Let's connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 p-4 rounded-xl">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>

                  <a
                    href="mailto:prabhatkumararya9@gmail.com"
                    className="text-lg hover:text-blue-400"
                  >
                    prabhatkumararya9@gmail.com
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 p-4 rounded-xl">
                  <FaPhone size={22} />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>

                  <p className="text-lg">
                    +91 6206361454
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 p-4 rounded-xl">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>

                  <p className="text-lg">
                    India
                  </p>
                </div>

              </div>

            </div>

            <div className="flex gap-6 mt-12">

              <a
                href="https://github.com/PrabhatKumarArya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/prabhat-kumar-arya-883a79324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <form className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}