import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import  logo from "../assets/Amir_logo.png"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">

          

          <a href="https://github.com/choudharyaamir828"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Github">
            <FaGithub/>
          </a>

          <a href="https://www.instagram.com/aamir_choudhary168/"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram">
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/mohd-amir-b828b41b9/"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Linkedin">
            <FaLinkedin/>
          </a>

        </div>
    </nav>
  )
}

export default Navbar