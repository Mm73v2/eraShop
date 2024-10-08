import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = memo(({ href, text, liClasses, linkClasses }) => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <li
      className={`${liClasses} max-lg:border-b border-gray-300 max-lg:py-3 px-3`}
    >
      <Link
        href={href}
        className={
          linkClasses
            ? "auth-link"
            : `${
                isActive(href)
                  ? "text-[#007bff] font-bold block text-[15px]"
                  : "hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              }`
        }
      >
        {text}
      </Link>
    </li>
  );
});

export default HeaderLink;
