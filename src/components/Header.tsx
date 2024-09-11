"use client";
import Link from "next/link";

import { useState } from "react";

function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <div className="bar">
        <div className="barinter">
          <Link className="logo" href="/">
            InteriorBr
          </Link>
          <div className="navbar">
            <div className="navbar_inter">
              <Link className="link" href="/sobre">
                Sobre
              </Link>
              <Link className="link" href="/trabalho">
                Trabalhos
              </Link>
              <Link className="link" href="/#Processo">
                Processo
              </Link>
              <Link className="link" href="/#Opinioes">
                Opiniões
              </Link>
              <Link className="link" href="/#Contato">
                Contato
              </Link>
            </div>
          </div>
          <button className="open_nav" onClick={toggleNavbar}>
            {isClick ? (
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_LG">
                    {" "}
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="40px"
                height="40px"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.336"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
        </div>
        {isClick && (
          <div className="hidden_nav">
            <ul className="barinter2">
              <li>
                <Link className="link" onClick={toggleNavbar} href="/">
                  InteriorBr
                </Link>
              </li>
              <li>
                <Link className="link" onClick={toggleNavbar} href="/sobre">
                  Sobre
                </Link>
              </li>
              <li>
                <Link className="link" onClick={toggleNavbar} href="/trabalho">
                  Trabalhos
                </Link>
              </li>
              <li>
                <Link className="link" onClick={toggleNavbar} href="/#Processo">
                  Processo
                </Link>
              </li>
              <li>
                <Link className="link" onClick={toggleNavbar} href="/#Opinioes">
                  Opiniões
                </Link>
              </li>
              <li>
                <Link className="link" onClick={toggleNavbar} href="/#Contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
