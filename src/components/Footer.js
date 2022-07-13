import React from "react";
import { TwitterShareButton } from "react-share";
import { TwitterIcon } from "react-share"


export default function Footer() {
    return (
        <footer>
            <p>Share:</p>
            <TwitterShareButton
                url="https://tvshow-gif-generator.netlify.app/"
                title="Hello check out my first react project!!!" via="voshtty">
                <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
            </TwitterShareButton>
        </footer>

    )
}
