import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Menu from "./Menu";
import { useRecoilState } from "recoil";
import { toggleState } from "../Atom/toggle";
function Header() {
  const [toggle, setToggle] = useRecoilState(toggleState);
  return (
    <div>
      <div className=" max-w-7xl mx-auto flex items-center justify-between px-5">
        <div className="w-[150px]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ABC_News_logo_2021.svg/2560px-ABC_News_logo_2021.svg.png"
            alt="logo"
            width={200}
            height={100}
            objectFit="contain"
          />
        </div>

        <div className="lg:block hidden">
          <h3>Call Us (91+)843,342 / news@abcnews.com</h3>
        </div>

        <div className="flex items-center gap-5">
          <button>Login</button>
          <button className="btn">Get 1 year for $50 USD</button>
          <button
            className="flex items-center gap-1"
            onClick={() => {
              setToggle(true);
            }}
          >
            <span>Menu</span>
            <Bars2Icon className="h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Menu JS */}
      <Menu />
    </div>
  );
}

export default Header;
