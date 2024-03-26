import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", address: "/" },
    { id: 2, name: "About", address: "/about" },
    { id: 3, name: "Services", address: "/services" },
    { id: 4, name: "Contact", address: "/contact" },
    { id: 5, name: "Blog", address: "/blog" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="p-6">
      <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
        {!open ? <HiMenuAlt1 /> : <IoMdClose />}
      </div>
      <ul
        className={`md:flex gap-12 justify-center items-center absolute md:static bg-purple-400 p-6 ${
          open ? "block" : "hidden"
        } `}
      >
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
