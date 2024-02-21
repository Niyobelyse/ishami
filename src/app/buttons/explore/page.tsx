import Link from "next/link";

function ExploreButton() {
  return (
    <Link href="/">
      <button className="border bg-black text-white rounded px-4">
        Explore Now
      </button>
    </Link>
  );
}

export default ExploreButton;
