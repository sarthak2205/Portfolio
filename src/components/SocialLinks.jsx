import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs"

function SocialLinks() {

    const Links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/sarthak-nirmal-27a54420b/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/sarthak2205",
        },
        {
            id: 3,
            child: (
                <>
                    Resume <BsFillPersonLinesFill  size={30} />
                </>
            ),
            href: "/Sarthak-Resume.pdf",
            download: true
        },
        {
            id: 4,
            child: (
                <>
                    Mail <HiOutlineMail  size={30} />
                </>
            ),
            style: "rounded-br-md",
            href: "mailto:nsaarthak22@gmail.com",
            download: true
        },
    ]


  return (
    <div className='lg:flex flex-col hidden top-[35%] fixed'>
        <ul>
            {Links.map((link) => (
                <li 
                key={link.id} 
                className={`flex justify-between items-center px-4 w-40 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}
                >
                    <a
                        href={link.href ? link.href : "/"}
                        download={link.download}
                        target={"_blank"}
                        rel="noreferrer"
                        className='flex justify-between items-center w-full'
                    >
                        {link.child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks