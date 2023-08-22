import {
  HtmlIcon,
  CSS3Icon,
  JSIcon,
  ReactIcon,
  NextJsIcon,
  SCSSIcon,
  NodejsIcon,
  NPMIcon,
  RightMarkIcon,
} from "@/assets/icons";

export default function Skills() {
  return (
    <div className="animate-slide-in-right">
      <h1 className="header-large mb-6">SKILLS</h1>
      <h1 className="subHeader mb-6">PROGRAMMING LANGUAGES & TOOLS</h1>
      <div className="flex justify-between items-center sm:flex-wrap">
        <span className="">
          <HtmlIcon />
        </span>
        <span className="p-2">
          <CSS3Icon />
        </span>
        <span className="px-2">
          <JSIcon />
        </span>
        <span className="px-2">
          <ReactIcon />
        </span>
        <span className="px-2">
          <NextJsIcon />
        </span>
        <span className="px-2">
          <SCSSIcon />
        </span>
        <span className="px-2">
          <NodejsIcon />
        </span>
        <span className="px-2">
          <NPMIcon />
        </span>
      </div>
      <div>
        <h1 className="subHeader my-6">WORKFLOW</h1>
        <div className="flex details items-center">
          <RightMarkIcon />
          <span className="pl-4">Responsive Design</span>
        </div>
        <div className="flex details items-center pt-1">
          <RightMarkIcon />
          <span className="pl-4">Cross Browser Testing & Debugging</span>
        </div>
        <div className="flex details items-center pt-1">
          <RightMarkIcon />
          <span className="pl-4">Cross Functional Teams</span>
        </div>
        <div className="flex details items-center pt-1">
          <RightMarkIcon />
          <span className="pl-4">Cross Functional Teams</span>
        </div>
        <div className="flex details items-center pt-1">
          <RightMarkIcon />
          <span className="pl-4">Agile Development & Scrum</span>
        </div>
      </div>
    </div>
  );
}
