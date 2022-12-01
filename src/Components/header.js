import React from "react";
import { Fullwidth, Widthfifty, Widthonefourth, Widthseventyfive } from "../style/commonstyle";
import Bannerslider from "./Bannerslider";

function Header() {
    return (
        <>
            <div className="header">

                <Fullwidth>
                    <Widthfifty>
                        <Widthonefourth>
                            <img src="..\images\logo.png" alt="Logo" />
                        </Widthonefourth>
                    </Widthfifty>
                    <Widthfifty>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                        </ul>
                    </Widthfifty>
                </Fullwidth>
                
            </div>

        </>
    )
}
export default Header;