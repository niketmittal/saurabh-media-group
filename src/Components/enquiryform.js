import React from "react";
import { Fullwidth, HH2, PP1, Widthmargina, Wrapper } from "../style/commonstyle";

function Enquiryform() {
    return (
        <>
            <div className="enquiryform">
                <Fullwidth>
                    <Wrapper>
                        <Fullwidth>
                            <HH2>ENQUIRY</HH2>
                            <PP1>E-mail your queries to : dbcorpqueries@dbcorp.in</PP1>
                            <p>All fields are mandatory *</p>
                            <form>
                                <ul>
                                    <li>
                                        <input type="text" placeholder="First Name" />
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Last Name" />
                                    </li>
                                    <li>
                                        <input type="email" placeholder="Email" />
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Mobile Number" />
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Message" />
                                    </li>
                                    <Fullwidth mp="5%">
                                        <Widthmargina width="20%">
                                            <input type="submit" />
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