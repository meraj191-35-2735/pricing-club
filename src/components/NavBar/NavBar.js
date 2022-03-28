import React from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Coupons", link: "/coupons" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-300">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center w-full bg-indigo-300 absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => {
          return <Link key={route.id} routes={route}></Link>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
