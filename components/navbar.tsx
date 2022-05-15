import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between px-3 w-full bg-black/30  sticky top-0 z-20 h-14 items-center md:px-20">
      <div>logo</div>
      <div>
        <ul className="flex justify-center gap-x-3 md:gap-x-14 opacity-100">
          <li
            onClick={() => router.push("/allcollabs")}
            className="cursor-pointer text-white font-bold hover:text-yellow-300 hover:border border border-transparent hover:border-yellow-300 p-2 rounded-lg"
          >
            All Collabs
          </li>
          <li
            onClick={() => router.push("/mycollab")}
            className="cursor-pointer text-white font-bold hover:text-yellow-300 border border-transparent hover:border hover:border-yellow-300 p-2 rounded-lg"
          >
            My Collabs
          </li>
          <li
            onClick={() => router.push("/")}
            className="cursor-pointer text-white font-bold hover:text-yellow-300 hover:border border border-transparent hover:border-yellow-300 p-2 rounded-lg"
          >
            Create Offer
          </li>
        </ul>
      </div>
    </div>
  );
};
