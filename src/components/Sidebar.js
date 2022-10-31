import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as FcIcons from "react-icons/fc";
import {  Link } from "react-router-dom";

function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            <Button variant="dark" onClick={handleShow}>
                <FcIcons.FcMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Growpital</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc. */}
                    <ul>
                        <p>
                            <Link to='/users'>Users</Link>
                        </p>
                        <p>
                            <Link to='/investment'>Invesments</Link>
                        </p>
                        <p>
                            <Link to='/transaction'>Transactions</Link>
                        </p>
                        <p>
                            <Link to='/plans'>Plans</Link>
                        </p>
                    </ul>
            </Offcanvas.Body>
        </Offcanvas>

        </>
    );
}

// render(<SideBar />);
export default SideBar;