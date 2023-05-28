import React from "react";

const Navbar = ({ count,  onAdd }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="d-flex justify-content-center align-items-center ms-3 ">
          <p className="fs-1">Navbar</p>{" "}
          <span className="m-3 mb-4 fs-6 badge text-bg-secondary ">{count}</span>
        </div>
          <button onClick={onAdd} className="btn btn-dark me-4">Add Counter</button>
      </nav>
    </>
  );
};

export default Navbar;
