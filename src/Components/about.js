import React from "react";
import { Fullwidth, HH1, HH2, PP1, Widthfifty, Wrapper } from "../style/commonstyle";

function Aboutus() {
    return (
        <>
            <Fullwidth>
                <Widthfifty>
                    <HH1>ABOUT</HH1>
                    <HH2>DAINIK BHASKAR</HH2>
                    <Wrapper>
                        <PP1>Dainik Bhaskar Group is Urban India's #1 newspaper group and has 5 newspapers with 61 editions. The group has a readership of 6.63 crores (Source: TR | IRS 19 Q4, U+R). The group has a strong presence in the radio business. 94.3 MY FM, the radio brand of the group is the largest radio network in India, with presence in 30 cities across 7 states. The digital arm of the group, DB Digital has 4 portals and 3 apps in Hindi, Gujarati and Marathi.</PP1>
                    </Wrapper>
                </Widthfifty>
                <Widthfifty>
                    <img src="https://www.dainikbhaskargroup.com/images/ramesh-chandra.jpg" />
                </Widthfifty>
            </Fullwidth>
        </>
    )
}
export default Aboutus