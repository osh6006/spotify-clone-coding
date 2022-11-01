import { useState } from "react";

const Navbar = () => {
  [user, setUser] = useState(true);
  return <>{user ? <div></div> : <div></div>}</>;
};

export default Navbar;
