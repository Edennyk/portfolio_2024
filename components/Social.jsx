import Link from "next/link";
import {FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub/>, path:"https://github.com/Edennyk" },
  { icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/edennyk/" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((social, index)=>{
      return(
        <Link key={index} href={social.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </Link>
      )
    })}
  </div>
}

export default Social