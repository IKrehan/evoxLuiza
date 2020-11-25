import React from "react";

import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav activeKey={window.location.pathname}>
      <Nav.Item>
        <Nav.Link href={process.env.PUBLIC_URL + "/"}>
          <span className="navlink">Listagem</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href={process.env.PUBLIC_URL + "/produto/add"}>
          <span className="navlink">Adicionar Produto</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
