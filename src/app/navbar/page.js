import Link from "next/link";
import GetIn from "../buttons/getin/page";

function Navbar() {
  return (
    <div className="grid grid-cols-3 py-4">
      <div className="px-14">Logo</div>
      <ul className="grid grid-cols-4">
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
