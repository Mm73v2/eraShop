import Link from "next/link";
const HeaderLink = ({ href, text, liClasses, linkClasses }) => {
  return (
    <li
      className={`${liClasses} max-lg:border-b border-gray-300 max-lg:py-3 px-3`}
    >
      <Link
        href={href}
        className={
          linkClasses
            ? "auth-link"
            : "hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
        }
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
