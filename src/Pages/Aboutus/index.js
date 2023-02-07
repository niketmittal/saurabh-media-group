import React from "react";
import { Fullwidth, HH2, PP1, Widthfifty, Wrapper } from "../../style/commonstyle";

function Aboutus() {
    return (
        <>
            <Fullwidth>
                <Wrapper>
                    <h1>OUR HISTORY</h1>
                    <Fullwidth>
                        <Widthfifty>
                            <img src="..\images\logo.jpg" />
                        </Widthfifty>
                        <Widthfifty>
                            <Wrapper>
                                <Fullwidth mp="1%"></Fullwidth>
                                <HH2>About Saurav Media</HH2>
                                <PP1>It serves the purpose of material even though the version is not meaningful. Replacing the actual content with placeholder text allows designers to design the layout properly even before the content itself has been produced. It is used to create documents or paragraphs as required according to your content requirement.
                                    Also though there is not much importance in the variety of such placeholders, you can try some different styles of it.</PP1>
                                    <Fullwidth mp="2%"></Fullwidth>
                                <PP1>The ‘lorem ipsum’ text is from a famous passage by Cicero of Ancient Rome and words are added, altered and removed to make it nonsensical in improper Latin. It has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.</PP1>
                            </Wrapper>
                        </Widthfifty>
                    </Fullwidth>
                </Wrapper>
            </Fullwidth>
        </>
    )
}
export default Aboutus; 