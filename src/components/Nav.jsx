import { useSelector, useDispatch } from "react-redux";
import { Container } from ".";
import { NavLink, useNavigate } from "react-router-dom";

import AuthorIcon from "./author/AuthorIcon";

const Nav = () => {
  const navLists = [
    {
      item: "Home",
      path: "/",
    },
    {
      item: "About",
      path: "/about",
    },
  ];

  return (
    <nav className="px-2 py-3 border">
      <Container className="flex justify-between items-center">
        <h1>Logo</h1>
        {/* nav list */}
        <ul className="flex items-center gap-5">
          {navLists.map((item) => (
            <li key={item.item} className="">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `px-3 py-2 bg-zinc-100/50 cursor-pointer`
                    : "px-3 py-2 cursor-pointer"
                }
              >
                {item.item}
              </NavLink>
            </li>
          ))}
          <li>
            <AuthorIcon />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
