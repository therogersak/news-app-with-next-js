import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { toggleState } from "../Atom/toggle";
function Menu() {
  const [toggle, setToggle] = useRecoilState(toggleState);
  console.log(toggle);
  return (
    <>
      <ul
        className={`absolute top-0 bottom-0 left-0 right-0 bg-black text-white flex items-center justify-center flex-col space-y-10 overflow-hidden transition-all duration-300 ${
          toggle ? "w-full h-screen" : "w-0 h-0"
        }`}
      >
        {/* Close Button */}
        <XMarkIcon
          onClick={() => setToggle(false)}
          className="h-6 text-white absolute top-10 right-10 cursor-pointer"
        />
        <li>
          <Link href="#">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Global</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Subcription</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
