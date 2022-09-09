import React, { useEffect, useState } from "react";
import { Input, Dropdown, Menu, Space } from "antd";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { FaRegUserCircle, FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import MobileSidebar from "../sidebars/mobileSidebar";
import useDebounce from "../../hooks/useDebounse";
import useScrollTop from "../../hooks/useScrollTop";
import LogoImg from "../../assets/images/logo-img.svg";
import LogoText from "../../assets/images/logo-text.svg";
import LogoMobile from "../../assets/images/logo-mobile.svg";

const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setsearch] = useState("");
  const { width } = useWindowSize();
  const debounse = useDebounce(search, 1200);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollPosition = useScrollTop();

  useEffect(() => {
    if (width > 992) {
      setIsOpen(false);
    }
  }, [width]);

  useEffect(() => {
    if (search) {
      navigate("/search-result");
    }
    // if(!search && location.pathname == '/search-result') {
    //     navigate(-1)
    // }
  }, [debounse]);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a rel="noopener noreferrer" href="#">
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a rel="noopener noreferrer" href="#">
              2st menu item
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a rel="noopener noreferrer" href="#">
              3st menu item
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a rel="noopener noreferrer" href="#">
              4st menu item
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a rel="noopener noreferrer" href="#">
              1st menu item
            </a>
          ),
        },
        {
          key: "6",
          label: (
            <a rel="noopener noreferrer" href="#">
              2st menu item
            </a>
          ),
        },
        {
          key: "7",
          label: (
            <a rel="noopener noreferrer" href="#">
              3st menu item
            </a>
          ),
        },
        {
          key: "8",
          label: (
            <a rel="noopener noreferrer" href="#">
              4st menu item
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <div className={scrollPosition > 120 ? "header header-onscroll" : "header"}>
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-none">
          <div className="d-flex justify-content-between align-items-center">
            <FaBars
              onClick={() => setIsOpen(!isOpen)}
              className="user-icon me-3 desctop-d-none"
            />
            <Link to="/">
              {width > 576 ? (
                <div className="d-flex justify-content-start align-items-center">
                  <img className="logo-img" src={LogoImg} alt="" />
                  <img className="logo-text" src={LogoText} alt="" />
                </div>
              ) : (
                <img className="logo-mobile" src={LogoMobile} alt="" />
              )}
            </Link>
            <Input
              style={{ borderRadius: "30px" }}
              placeholder="Search..."
              suffix={<FiSearch style={{ color: "rgba(0,0,0,.45)" }} />}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-start align-items-center mobile-d-none ms-2">
            <Dropdown overlay={menu}>
              <p
                className="mb-0 header-text"
                to="/selected-products"
                style={{ whiteSpace: "nowrap" }}
              >
                Магазины <FiChevronDown />
              </p>
            </Dropdown>

            <Dropdown overlay={menu}>
              <p
                className="mb-0 header-text"
                to="/selected-products"
                style={{ whiteSpace: "nowrap" }}
              >
                Все категории <FiChevronDown />
              </p>
            </Dropdown>

            <NavLink
              className={({ isActive }) =>
                isActive ? "mb-0 header-text active-link" : "mb-0 header-text"
              }
              to="/selected-products"
              style={{ whiteSpace: "nowrap" }}
            >
              Популярные продукты
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mb-0 header-text active-link" : "mb-0 header-text"
              }
              to="/offer-products"
              style={{ whiteSpace: "nowrap" }}
            >
              Выгодные предложения
            </NavLink>
            <FaRegUserCircle className="user-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComp;
