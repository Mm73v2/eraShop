import Link from "next/link";
const HeroService = ({ icon, title, desc }) => {
  return (
    <div className="bg-white p-6 shadow rounded-md">
      <div className="bg-blue-200 w-fit p-2 rounded-md">{icon}</div>
      <h3 className="text-gray-800 text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <Link
        href="#"
        className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4"
      >
        Learn more
      </Link>
    </div>
  );
};

export default HeroService;
