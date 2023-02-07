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
                            <HH4>Produt Launches</HH4>
                            <PP2 color="#606060">It serves the purpose of material even though the version is not meaningful. Replacing the actual content with placeholder text allows designers to design the layout properly even before the content itself has been produced. It is used to create documents or paragraphs as required according to your content requirement.</PP2>
                            <Moreinfo>More Info</Moreinfo>
                        </Fullwidth>
                    </Fullwidth>
                </li>
                <li>
                    <Fullwidth>
                        <Fullwidth>
                            <img src={event2} />
                        </Fullwidth>
                        <Fullwidth>
                            <HH4>Produt Launches</HH4>
                            <PP2 color="#606060">It serves the purpose of material even though the version is not meaningful. Replacing the actual content with placeholder text allows designers to design the layout properly even before the content itself has been produced. It is used to create documents or paragraphs as required according to your content requirement.</PP2>
                            <Moreinfo>More Info</Moreinfo>
                        </Fullwidth>
                    </Fullwidth>
                </li>
                <li>
                    <Fullwidth>
                        <Fullwidth>
                            <img src={event3} />
                        </Fullwidth>
                        <Fullwidth>
                            <HH4>Produt Launches</HH4>
                            <PP2 color="#606060">It serves the purpose of material even though the version is not meaningful. Replacing the actual content with placeholder text allows designers to design the layout properly even before the content itself has been produced. It is used to create documents or paragraphs as required according to your content requirement.</PP2>
                            <Moreinfo>More Info</Moreinfo>
                        </Fullwidth>
                    </Fullwidth>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Upcomingevents; 