import React from 'react';
import InstagramQR from "./InstagramQR.png"
import LinkedinImage from "./LinkedInLogo.png"
import GithubImage from "./GithubLogo.png"
import {Link} from "react-router-dom";

export default function ContactInformation() {
  const phoneNumber = '123-456-7891'
  return (
      <div>
        <h3>Hey, this is "My Contacts Page"!</h3>
        <p>Phone Number: {phoneNumber}</p>
        <p>My Instagram QR code: </p><img src = {InstagramQR} alt="Instagram QR picture" width = "200" height = "200"/>
        <p>My Linkedin: </p><a href = "https://www.linkedin.com/in/carmenchau12/"><img src = {LinkedinImage} alt="Instagram QR picture" width = "200" height = "200"/></a>
        <p>My Github: </p><a href = "https://github.com/carmen-chau"><img src = {GithubImage} alt="Github Picture" width = "200" height = "200"/></a>
        <Link to="/"><h3>back</h3></Link>
      </div>

  )
}
