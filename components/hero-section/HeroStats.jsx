const HeroStats = ({ title, num }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h5 className="text-gray-800 font-bold text-xl mb-2">{num}</h5>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default HeroStats;
