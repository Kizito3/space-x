import { NavItems } from "../data";
import Logo from "/Logo.png";

export default function Nav() {
  return (
    <div>
      <header className="absolute z-10 w-full">
        <nav className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} className="pl-10" alt="Logo space" />
          </a>
          <div className="before:content-[''] before:absolute before:top-12 before:left-60 before:bg-[rgba(255,255,255,0.05)] before:w-1/3 before:h-1">
            <ul className="flex gap-16 text-white bg-[rgba(255,255,255,0.05)] px-16 py-10">
              {NavItems.map((item) => (
                <li key={item.label} className="font-[barlow] font-thin">
                  {" "}
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
