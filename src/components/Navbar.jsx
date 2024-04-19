import { useState } from "react";
import jsonData from '../restApi.json';
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const data = jsonData.data;

  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">Aswaad</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/> 
                {/* this is use to show the icon of menu */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;