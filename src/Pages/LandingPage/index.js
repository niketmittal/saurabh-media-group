import React from "react";
import { Fullwidth, Wrapper } from "../../style/commonstyle";
// COMPONENTS
import Bannerslider from "../../Components/Bannerslider";
import Aboutus from "../../Components/about";
import Corevalue from "../../Components/corevalue";

function LandingPage() {
    return (
        <>
            <Fullwidth>
                <Fullwidth>
                    <Bannerslider />
                </Fullwidth>
                <Wrapper>
                    <Fullwidth mp="2%">
                        <Aboutus/>
                    </Fullwidth>
                    <Fullwidth mp="5%">
                        <Corevalue/>
                    </Fullwidth>
                </Wrapper>
            </Fullwidth>


        </>
    )
}
export default LandingPage;