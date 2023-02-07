import React from "react";
import { Fullwidth, HH4, PP2, Widthonefourth, Widthseventyfive, Wrapper } from "../style/commonstyle";
function Fotter() {
    return (
        <>
            <div className="fotter">

                <Fullwidth>
                    <Wrapper>
                        <Fullwidth mp="1%">
                            <Widthonefourth>
                                <Wrapper>
                                    <img src="..\images\logo.png" alt="Logo" />
                                </Wrapper>
                            </Widthonefourth>
                            <Widthseventyfive>
                                <Widthonefourth>
                                    <Wrapper>
                                        <Fullwidth>
                                            <HH4 color="#fff">Who We Are</HH4>
                                            <PP2 color="#fff">History</PP2>
                                        </Fullwidth>
                                    </Wrapper>
                                </Widthonefourth>
                            </Widthseventyfive>
                        </Fullwidth>
                    </Wrapper>
                </Fullwidth>
            </div>
        </>
    )
}
export default Fotter;