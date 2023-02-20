import React from "react";
import { Fullwidth, HH3, HH4, Moreinfo, PP2 } from "../style/commonstyle";
import event1 from "../assets/arijit.png"
import event2 from "../assets/holi.jpeg"
import event3 from "../assets/grandfair.jpg"

function Upcomingevents() {
    return(
        <>
        <div className="upcomingevents">
            <ul>
                <li>
                    <Fullwidth>
                        <Fullwidth>
                            <img src={event1} />
                        </Fullwidth>
                        <Fullwidth>
                            <HH4>Arijit Singh Concert</HH4>
                            <PP2 color="#606060">venue - City Garden      <br></br>
                             Date - 12-3-2023 <br></br>
                             Time - 9:00 PM  <br></br>
                             Duration - 2 hours
                             </PP2>
                            <a href="https://saurabhadvertisement.netlify.app/">Book</a>
                        </Fullwidth>
                    </Fullwidth>
                </li>
                <li>
                    <Fullwidth>
                        <Fullwidth>
                            <img src={event2} />
                        </Fullwidth>
                        <Fullwidth>
                            <HH4>Holi Celebration</HH4>
                            <PP2 color="#606060">venue - Sarswati Garden      <br></br>
                             Date - 8-3-2023 <br></br>
                             Time - 9:00 AM  <br></br>
                             Duration - 3 hours</PP2>
                            <a href="https://saurabhadvertisement.netlify.app/">Book</a>
                        </Fullwidth>
                    </Fullwidth>
                </li>
                <li>
                    <Fullwidth>
                        <Fullwidth>
                            <img src={event3} />
                        </Fullwidth>
                        <Fullwidth>
                            <HH4>Grand Fair</HH4>
                            <PP2 color="#606060">venue - sukharia circle      <br></br>
                             Starting Date - 1-3-2023 <br></br>
                             End Date - 12-3-2023 <br></br>
                             Time - 9:00 AM   to 9:00 PM <br></br>
                             </PP2>
                            <a href="https://saurabhadvertisement.netlify.app/">Book</a>
                        </Fullwidth>
                    </Fullwidth>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Upcomingevents; 