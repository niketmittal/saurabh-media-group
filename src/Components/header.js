import React from "react";
import { Fullwidth, Widthfifty, Widthonefourth, Widthseventyfive } from "../style/commonstyle";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">

                <Fullwidth>
                    <Widthfifty>
                        <Widthonefourth>
                            <Link to="/">
                                <img src="..\images\logo.png" alt="Logo" />
                            </Link>
                        </Widthonefourth>
                    </Widthfifty>
                    <Widthfifty>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/aboutus">ABOUT US</Link></li>
                            <li><Link to="/contactus">CONTACT US</Link></li>
                        </ul>
                    </Widthfifty>
                </Fullwidth>

            </div>

        </>
    )
}
export default Header;