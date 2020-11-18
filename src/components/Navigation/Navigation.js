import React from 'react';

import Nav from "react-bootstrap/Nav";



const Navigation = () => {
    return (
        <Nav activeKey="/">
            <Nav.Item>
                <Nav.Link href="/">
                    <span className="navlink active">Listagem</span>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="add">
                    <span className="navlink">Adicionar Produto</span>
                    </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;