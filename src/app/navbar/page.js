import Link from "next/link";
import GetIn from "../buttons/getin/page";

function Navbar() {
  return (
    <div className="grid grid-cols-3 mt-16 ">
      <div className="font-rakkas  px-14 text-3xl font-bold leading-tight tracking-normal text-left">
        <span className="text-yellow-500">iS</span>
        <span className="text-black">hami</span>
      </div>
      <ul className="grid grid-cols-4 text-center">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/invest">Invest</Link>
        </li>
        <li>
          <Link href="/propose">Propose</Link>
        </li>
        <li>
          <Link href="/saving">Saving</Link>
        </li>
      </ul>
      <div className="grid justify-items-end px-14">
        <GetIn />
      </div>
    </div>
  );
}

export default Navbar;
