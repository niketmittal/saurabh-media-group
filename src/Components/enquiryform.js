import React from "react";
import { Fullwidth, HH2, PP1, Widthmargina, Wrapper } from "../style/commonstyle";

function Enquiryform() {
    return (
        <>
            <div className="enquiryform">
                <Fullwidth>
                    <Wrapper>
                        <Fullwidth bgcolor="rgba(189, 82, 36, 0.95);">
                            <Wrapper>
                                <HH2>ENQUIRY</HH2>
                                <PP1>E-mail your queries to : dbcorpqueries@dbcorp.in</PP1>
                                <p>All fields are mandatory *</p>
                            </Wrapper>
                            <form>
                                <ul>
                                    <li>
                                        <input type="text" placeholder="Name" />
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Phone number" />
                                    </li>
                                    <Fullwidth mp="5%">
                                        <Widthmargina width="35%">
                                            <input type="submit" id="submit" />
                                        </Widthmargina>
                                    </Fullwidth>
                                </ul>
                            </form>
                        </Fullwidth>
                    </Wrapper>
                </Fullwidth>
            </div>
        </>
    )
}
export default Enquiryform; 