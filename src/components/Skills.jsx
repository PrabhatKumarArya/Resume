import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 hover:-translate-y-2 duration-300 shadow-lg"
            >

              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (

                  <span
                    key={item}
                    className="bg-slate-700 px-4 py-2 rounded-full text-gray-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}