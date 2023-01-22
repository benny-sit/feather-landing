import React from "react";


import ficon from '../../public/ficon64.png'

export default function NavBar() {
  return (
    <div className="navbar bg-base-200/50 text-gray-700 z-10 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <a>Platform</a>
            </li>
            <li>
              <a>FEATHER</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <a className="ml-5"><img src={ficon} className="h-10" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Platform</a>
          </li>
          <li tabIndex={0}>
            <a className="font-north">FEATHER</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
