const paragraphs = [
  {
    id: 1,
    optional: "Who I am:",
    subject: "Introduction",
    paragraph:
      "I am a 22 year old living out of Austin, Texas. I've been working at Dell EMC for the last few months, and I have recently taken a bootcamp to build my knowledge around HTML, CSS, Javascript, MySQL, React JS, MongoDB, and Node JS. I love to play basketball, read, and watch sports. My dream job is to be the CEO of my own company.",
    link: "",
  },
  {
    id: 2,
    optional: "",
    subject: "What Do You Want To Eat?",
    paragraph:
      "This project was made to help you decide what you want to eat based on your mood for going out or coooking. By using a questionnaire, my team and I were able to show results based on the preferences of the user. Click the box to go to the project.",
    link: "https://cyashasvi.github.io/What-Do-You-Want-to-Eat-/",
  },
  {
    id: 3,
    optional: "API",
    subject: "Weather App",
    paragraph:
      "This app was built in order to check the weather in any location in the world by using the Weather API.",
    link: "https://cyashasvi.github.io/Homework-3/",
  },
  {
    id: 4,
    optional: "Full Stack Application",
    subject: "Anime Generator",
    paragraph:
      "To help make it easier to discover new anime, my team and I built a full stack application that would render different anime based on the questionnaire the user would take. They would also have a way of storing their different anime interests through their own account, for which they would have to create a username and password.",
    link: "https://cyashasvi.github.io/Anime-Full-Stack-Application/",
  },
  {
    id: 5,
    optional: "Final Project",
    subject: "Counsel Central",
    paragraph:
      "This app was built in order to help facilities around the country have an affordable solution to keep track of their residents and their behaviors in rehab facilities.",
    link: "https://counselcentral.org",
  },

  {
    id: 5,
    optional: "Final Project",
    subject: "Counsel Central",
    paragraph:
      "This app was built in order to help facilities around the country have an affordable solution to keep track of their residents and their behaviors in rehab facilities.",
    link: "https://counselcentral.org",
  },

  {
    id: 6,
    optional: "",
    subject: "Password Generator",
    paragraph:
      "This app was built in order to help you create a strong password and meet the requirements the user needs.",
    link: "https://cyashasvi.github.io/Homework-3/",
  },

  // More messages...
];

export default function Body() {
  return (
    <ul className="divide-y divide-gray-200">
      {paragraphs.map((paragraph) => (
        <li
          key={paragraph.id}
          className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3 font-mono">
            <div className="min-w-0 flex-1">
              <a href={paragraph.link} className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-lg font-medium text-gray-900 truncate">
                  {paragraph.subject}
                </p>
                <p className="text-sm text-gray-2 truncate font-extrabold">
                  {paragraph.optional}
                </p>
              </a>
            </div>
          </div>
          <div className="mt-1 font-mono text-center w-1/3 ml-144">
            <p className="line-clamp-100 text-md text-black-600">
              {paragraph.paragraph}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
