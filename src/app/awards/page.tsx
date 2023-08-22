import { Award } from "@/assets/icons";

export default function Awards() {
  return (
    <div className="animate-slide-in-right w-full">
      <h1 className="header-large mb-6">AWARDS & CERTIFICATIONS</h1>
      <div className="flex details items-center py-2">
        <Award />
        <span className="pl-4">
          Best employee of the month- Conrad Bengaluru
        </span>
      </div>
      <div className="flex details items-center py-2">
        <Award />
        <span className="pl-4">
          Valuable employee of the year- Pace wisdom solution
        </span>
      </div>
      <div className="flex details items-center py-2">
        <Award />
        <span className="pl-4">MongoDB certification</span>
      </div>
    </div>
  );
}
