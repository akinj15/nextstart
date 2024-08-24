import Link from "next/link";

export function Navbar() {
  return (
    <div className="w-full">
      <nav className="h-16 flex" >
        <div className="sm:flex hidden text-center flex-none items-center p-2 font-bold" >
          <h1>Acme</h1>
        </div>
        <div className="flex-1 flex sm:justify-center items-center font-bold" >
          <Link href="/home" className="mx-2" >
            <div className="text-xl tracking-wide">home</div>
          </Link>
          <Link href="/home" className="mx-2" >
            <div className="text-xl tracking-wide">shop</div>
          </Link>
        </div>
        <div className="sm:flex hidden text-center flex-none items-center p-2 font-bold" >
          <Link href="/home" className="mx-2" >
            Login
          </Link>
        </div>
        <div className="sm:hidden flex text-center flex-none items-center p-2 font-bold" >
          <Link href="/home" className="mx-2" >
            menu
          </Link>
        </div>
      </nav>
    </div>
  );
}
