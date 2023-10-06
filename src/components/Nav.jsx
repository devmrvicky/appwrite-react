import { useSelector, useDispatch } from "react-redux";
import { Container } from ".";
import { NavLink, useNavigate } from "react-router-dom";
import { logout as authLogout } from "../features/authSlice";
import authService from "../appwrite/authService";

const Nav = () => {
  const authStatus = useSelector((store) => store.auth.status);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLists = [
    {
      item: "Home",
      path: "/",
      status: true,
    },
    {
      item: "Login",
      path: "/login",
      status: !authStatus,
    },
    {
      item: "Signup",
      path: "/signup",
      status: !authStatus,
    },
  ];

  const logout = async () => {
    try {
      const deleteSession = await authService.logout();

      if (deleteSession) {
        dispatch(authLogout());
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav className="px-2 py-3 border">
      <Container className="flex justify-between items-center">
        <h1>Logo</h1>
        {/* nav list */}
        <ul className="flex items-center gap-5">
          {navLists.map(
            (item) =>
              item.status && (
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
              )
          )}
          {authStatus && (
            <li className="px-3 py-2 hover:bg-zinc-100/50 cursor-pointer">
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
