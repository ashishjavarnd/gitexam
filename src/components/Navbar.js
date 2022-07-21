import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Prodcut Managment
        </a>
        <span className="navbar-brand">
          {localStorage.token && localStorage.getItem("username")}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
