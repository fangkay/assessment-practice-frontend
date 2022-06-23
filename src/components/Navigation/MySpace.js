import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function MySpace(props) {
  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to="/me">
        My Space
      </Nav.Link>
    </Nav.Item>
  );
}
