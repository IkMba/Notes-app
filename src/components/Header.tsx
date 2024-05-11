import { NavLink, useParams } from "react-router-dom";
// import { GoPlus } from "react-icons/go";

import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { useSelector } from "react-redux";
import { getUser } from "../store/noteSlice";

const navlinks = ["all", "projects", "family", "meetings", "personal"];

export default function Header() {
  const { tags } = useParams();
  const user = useSelector(getUser);

  return (
    <header className="flex justify-between px-4 py-2 m-4  bg-white text-sm text-stone-900 items-center">
      <div className="flex items-center gap-2">
        <img
          src="/profileM1.jpg"
          alt="user"
          className="w-10 h-8 rounded-[50%]"
        />
        <h3>{user}</h3>
      </div>
      <nav className=" hidden md:flex gap-4 items-center font-bold text-black ">
        {navlinks.map((item, i) => (
          <div
            className={`gap-4 lg:gap-8 flex capitalize ${
              item === tags || (tags === undefined && i === 0)
                ? "bg-blue py-1 px-2 rounded-md"
                : ""
            }`}
            key={item}
          >
            <NavLink to={`${item === "all" ? "/" : `/${item}`}`}>
              {item}
            </NavLink>
          </div>
        ))}
        {/* <button className="bg-grey p-1 m-auto ">
          <GoPlus className=" text-black" />
        </button> */}
      </nav>
      <Link to="/new">
        <button className="flex gap-1 bg-orange px-3 py-1.5 rounded-md items-center">
          <GiNotebook />
          New note
        </button>
      </Link>
    </header>
  );
}
