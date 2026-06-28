import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition">

          <div className="flex items-center gap-4 mb-6">
            <FaGraduationCap className="text-4xl text-blue-500" />

            <div>
              <h3 className="text-2xl font-semibold">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-gray-400">
                Computer Science & Engineering
              </p>
            </div>
          </div>

          <div className="space-y-3 text-gray-300">

            <p>
               <span className="font-semibold">College:</span>{" "}
                <abbr
                    title="Indian Institute of Information Technology"
                    className="cursor-help underline decoration-dotted"
                >
                    IIIT
                </abbr>{" "}
  Bhopal
            </p>

            <p>
              <span className="font-semibold">Year:</span>
              {" "}2024 – 2028
            </p>

            <p>
              <span className="font-semibold">CGPA:</span>
              {" "}7.47
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}