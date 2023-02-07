import React from "react";
import { Fullwidth, Widthfifty, Wrapper } from "../../style/commonstyle";
import Contactus from "../../Components/contactus";
import Enquiryform from "../../Components/enquiryform";

function Contactuspage() {
    return (
        <>
            <Fullwidth>
                <Widthfifty>
                    <Fullwidth>
                        <Wrapper>
                            <Contactus />
                        </Wrapper>
                    </Fullwidth>
                </Widthfifty>
                <Widthfifty>
                    <Fullwidth>
                        <Enquiryform />
                    </Fullwidth>
                </Widthfifty>
            </Fullwidth>
        </>
    )
}
export default Contactuspage; 