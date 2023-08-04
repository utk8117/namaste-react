import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import WifiIcon from "@mui/icons-material/Wifi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { green } from "@mui/material/colors";

const Header = () => {
  const onlineStatus = useOnline();
  const { loggedIn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [btnCLick, setBtnClick] = useState(true);
  return (
    <div className="flex justify-between p-1 border-b-2 ">
      <div className="logo-container">
        <img className="w-16" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="p-2 m-2 font-semibold">
            <Badge variant="dot" color={onlineStatus ? "success" : "error"}>
              <WifiIcon />
            </Badge>
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
            <Link to="/cart">
              <Badge badgeContent={cartItems.length} color="info">
                <ShoppingCartIcon sx={{ color: green[500] }} />
              </Badge>
            </Link>
          </li>
          <li className="p-2 m-2">{loggedIn}</li>
          <button
            className="p-2 px-3 m-2 bg-green-500 rounded-md"
            onClick={() => setBtnClick(!btnCLick)}
          >
            {btnCLick ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
