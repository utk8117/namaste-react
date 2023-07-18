import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";

const Header = () => {
  const onlineStatus = useOnline();
  return (
    <div className="flex justify-between p-1 border-b-2 ">
      <div className="logo-container">
        <img className="w-16" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="p-2 m-2 font-semibold">
            Online Status : {onlineStatus ? "online":"offline"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/cart">Cart</Link>
          </li>

          <button className="p-2 px-3 m-2 bg-green-500 rounded-md">Login</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
