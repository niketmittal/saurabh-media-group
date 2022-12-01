import React from "react";
import { Fullwidth, Widthonefourth, Widthseventyfive, Wrapper } from "../style/commonstyle";
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
                                    <Fullwidth>
                                        <p>One</p>

                                    </Fullwidth>
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