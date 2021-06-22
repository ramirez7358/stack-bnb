import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-scroll";
import ButtonWalletConnect from "./ButtonWalletConnect";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceOfBnb, setPriceOfBnb] = useState(100);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const HandleScroll = () => {
    if (window.scrollY >= 60) {
      document.getElementById("Navbar")?.classList.add("darkHeader");
    } else document.getElementById("Navbar")?.classList.remove("darkHeader");
  };

  window.addEventListener("scroll", HandleScroll);
  useEffect(() => {

    const getPriceBNB = async () => {
      const data = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_24hr_change=true');
      const price = await data.json();
      setPriceOfBnb(price.binancecoin.usd);
    }

    setInterval(getPriceBNB, 10000);

    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);

  return (
    <Navbar
      id="Navbar"
      className="navbar navbar-expand-lg navbar-light theme-nav fixed-top"
    >
      <div id="navbar-main" className="container">

        <ButtonWalletConnect />
        <Collapse
          id="navbarSupportedContent"
          className="default-nav"
          isOpen={isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
                active="true"
              >
                home
              </Link>
            </NavItem>
            <NavItem>  
              <Link
                className="nav-link"
                activeClass="active"
                to="price"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                price
              </Link>
            </NavItem>
            {/* <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                about
              </Link>
            </NavItem>
            <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                feature
              </Link>
            </NavItem>
            <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="screenshot"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                screenshot
              </Link>
            </NavItem>
            <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                team
              </Link>
            </NavItem> */}
            <NavItem>
            <Link
                className="nav-link active"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                BNB PRICE ${priceOfBnb}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
