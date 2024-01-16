import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PerksCard({ title, description, icon }) {
  return (
    <div className="group p-10 flex items-center justify-center flex-col text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2">
      <FontAwesomeIcon
        className="w-20 max-w-full h-20 align-middle group-hover:text-primary group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-ease-in-out group-hover:animate-alternate-reverse"
        icon={icon}
      />

      <h4 className="m-0 capitalize mt-10 transform transition-colors duration-500 group-hover:text-primary">
        {title}
      </h4>

      <p className="mt-10 text-lg">{description}</p>
    </div>
  );
}
