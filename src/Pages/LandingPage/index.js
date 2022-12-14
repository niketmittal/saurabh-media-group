import React from "react";
import { Fullwidth, Wrapper } from "../../style/commonstyle";
// COMPONENTS
import Bannerslider from "../../Components/Bannerslider";
import Corevalue from "../../Components/corevalue";
import Comheading from "../../Components/comheading";
import Latestnews from "../../Components/latestnews";
import Upcomingevents from "../../Components/upevents";

function LandingPage() {
    return (
        <>
            <Fullwidth>
                <Fullwidth>
                    <Bannerslider />
                </Fullwidth>

                <Fullwidth mp="2%" bgcolor="#ECECEC">
                    <Wrapper>
                        <Fullwidth mp="2%">
                            <Comheading Heading="Latest News" />
                        </Fullwidth>
                        <Fullwidth mp="1%"></Fullwidth>
                        <Latestnews />
                    </Wrapper>
                </Fullwidth>

                <Fullwidth mp="2%" bgcolor="#ECECEC">
                    <Wrapper>
                        <Fullwidth mp="2%">
                            <Comheading Heading="Upcoming Events" />
                        </Fullwidth>
                        <Fullwidth mp="1%"></Fullwidth>
                        <Fullwidth>
                            <Upcomingevents/>
                        </Fullwidth>
                    </Wrapper>
                </Fullwidth>

            </Fullwidth>


        </>
    )
}
export default LandingPage;