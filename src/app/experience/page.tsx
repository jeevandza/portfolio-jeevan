import { RightMarkIcon } from "@/assets/icons";

const paceWisdom = [
  {
    id: 1,
    title: "Designed and developed sharing leads platform.",
  },
  {
    id: 2,
    title:
      "Developed a complete social media network application purely focused on dating applications.",
  },
  {
    id: 3,
    title:
      "Worked on the co-working platform, and was a key member of and supporting lead of the project.",
  },
  {
    id: 4,
    title:
      "Developed complete Figma plug-in, with all interactions with Figma.",
  },
  {
    id: 5,
    title:
      "Designing and developing complex web applications with responsiveness.",
  },
  {
    id: 6,
    title: "Application pre-development configurations.",
  },
  {
    id: 7,
    title: "Produce clean, efficient code based on specifications.",
  },
  {
    id: 8,
    title: "Familiarity with Agile development methodologies.",
  },
  {
    id: 9,
    title: "Webpack and es-build configuration.",
  },
];

const conradBengaluru = [
  {
    id: 1,
    title: "Day-to-day operations.",
  },
  {
    id: 2,
    title: "Crow control CCTV configuration and testing all equipment.",
  },
  {
    id: 3,
    title: "Conducting safety and security drills.",
  },
  {
    id: 4,
    title: "Communication and problem-solving.",
  },
  {
    id: 5,
    title: "Programming safety tools i.e. fire system hydrant etc.",
  },
];

const textportIndustries = [
  {
    id: 1,
    title: "Surveillance and security control.",
  },
  {
    id: 2,
    title: "Maintaining and configuration of fire control systems.",
  },
  {
    id: 3,
    title: "Safety and security training.",
  },
  {
    id: 4,
    title: "Conducting security and safety training.",
  },
];

export default function Experience() {
  return (
    <div className="animate-slide-in-right h-screen py-8 sm:w-screen lg:w-full">
      <h1 className="header-large mb-6">Experience</h1>
      <div className="py-4">
        <h1 className="header-medium"> Software developer</h1>
        <h1 className="subHeader">Pace wisdom solutions</h1>
        <div className="py-2">
          {paceWisdom.map((role) => {
            return (
              <div key={role.id} className="flex details items-center">
                <RightMarkIcon />
                <span className="pl-4">{role.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        <h1 className="header-medium">Surveillance and safety</h1>
        <h1 className="subHeader">Conrad Bengaluru</h1>
        <div className="py-2">
          {conradBengaluru.map((role) => {
            return (
              <div key={role.id} className="flex details items-center">
                <RightMarkIcon />
                <span className="pl-4">{role.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        <h1 className="header-medium">Safety and security officer</h1>
        <h1 className="subHeader">Texport industries pvt ltd.</h1>
        <div className="py-2">
          {textportIndustries.map((role) => {
            return (
              <div key={role.id} className="flex details items-center">
                <RightMarkIcon />
                <span className="pl-4">{role.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
