import React from "react";

const Header = ({ caption, title, subtitle, location }) => (
    <>
        <strong>{caption}</strong>
        <div className="header">
            <span>{title}</span>
            <h3>{subtitle}</h3>
            <span>{location}</span>
        </div>
    </>
);

export default Header;
