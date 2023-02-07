import React from "react";
import { Fullwidth, HH4, PP2, Widthonefourth, Widthseventyfive, Wrapper } from "../style/commonstyle";
function Fotter() {
    return (
        <>
            <div className="fotter">

                <Fullwidth>
                    <Wrapper>
                        <Fullwidth >
                            <Widthonefourth>
                                <Wrapper>
                                    <img src="..\images\logo.jpg" alt="Logo" style={{borderRadius: "50%", width: "200px"}} />
                                </Wrapper>
                            </Widthonefourth>
                            <Widthseventyfive>
                                <Widthonefourth>
                                    <Wrapper>
                                        <Fullwidth>
                                            <HH4 color="#fff">Who We Are</HH4>
                                            <PP2 color="#fff">History</PP2>
                                            <PP2 color="#fff">Values</PP2>
                                            <PP2 color="#fff">Directors</PP2>
                                            <PP2 color="#fff">Culture</PP2>
                                            <PP2 color="#fff">Technologies</PP2>
                                        </Fullwidth>
                                    </Wrapper>
                                </Widthonefourth>
                                <Widthonefourth>
                                    <Wrapper>
                                        <Fullwidth>
                                            <HH4 color="#fff">What We Do</HH4>
                                            <PP2 color="#fff">Business</PP2>
                                            <PP2 color="#fff">Experiences</PP2>
                                            <PP2 color="#fff">Social Initiatives</PP2>
                                            <PP2 color="#fff">Other Ventures</PP2>
                                        </Fullwidth>
                                    </Wrapper>
                                </Widthonefourth>
                                <Widthonefourth>
                                    <br/>
                                </Widthonefourth>
                                <Widthonefourth>
                                    <Wrapper>
                                        <Fullwidth>
                                            <HH4 color="#fff">Connect With Us</HH4>
                                            <PP2 color="#fff"></PP2>
                                            <PP2 color="#fff">Disclaimer | Privacy Policy | Terms & Conditions</PP2>
                                            <PP2 color="#fff">Copyright © All Right Reserved</PP2>
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