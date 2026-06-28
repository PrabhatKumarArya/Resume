import { FaCode, FaLaptopCode, FaTrophy } from "react-icons/fa";

export default function Achievements() {
  return (
    <section  id="achievements" className="py-24">

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Achievements</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:-translate-y-2 transition">

            <FaCode className="text-5xl mx-auto text-blue-500 mb-5" />

            <h3 className="text-3xl font-bold">
              350+
            </h3>

            <p className="text-gray-400 mt-2">
              DSA Problems Solved
            </p>

          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:-translate-y-2 transition">

            <FaLaptopCode className="text-5xl mx-auto text-green-500 mb-5" />

            <h3 className="text-3xl font-bold">
              1
            </h3>

            <p className="text-gray-400 mt-2">
              Full Stack Projects
            </p>

          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-center hover:-translate-y-2 transition">

            <FaTrophy className="text-5xl mx-auto text-yellow-400 mb-5" />

            <h3 className="text-3xl font-bold">
              Internship Ready
            </h3>

            <p className="text-gray-400 mt-2">
              MERN + DSA
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}