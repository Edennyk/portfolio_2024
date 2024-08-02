'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {SiTailwindcss , SiNextdotjs  } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Link from "next/link";

const about = {
  title:"About me",
  description: " I am a junior front-end developer with practical experience and expertise in HTML, CSS,JavaScript, and React. Demonstrating a steadfast commitment to ongoing professional development, I aspire to collaborate with forward-thinking enterprises, contributing to cuttingedge front-end solutions.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Eden kim"
    },
    {
      fieldName: "Experience",
      fieldValue: "2years"
    },
    {
      fieldName: "Email",
      fieldValue: "edennyk@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Korean"
    },
  ]
};

const experience = {
  title:'Work Expericence',
  description:'Implemented new website functionalities to meet client demands and enhance user experience, successfully achieving business objectives. Developed a portal website using React, integrating advanced features such as member management (CRUD), RESTful API for server-side data display, and dynamic charting.',
  items:[
    {
      company:"Ubix innovations",
      position:"Frontend Developer",
      duration:"2022-2024",

    }
  ]
};

const education = {
  title:'Education',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu',
  institution:"Centennial College",
  program:"Software Engineering Technology",
  degree:"Advanced Diploma",
  duration:"2022-2024",
};

const skills = {
  title:'Skills',
  skillList:[
    {
      icon:<FaHtml5 />,
      name:"html5",
    },
    {
      icon:<FaCss3 />,
      name:"css3",
    },
    {
      icon:<FaJs />,
      name:"Javascript",
    },
    {
      icon:<FaReact />,
      name:"react.js",
    },
    {
      icon:<SiNextdotjs />,
      name:"next.js",
    },
    {
      icon:<SiTailwindcss />,
      name:"tailwind.css",
    },
  ]
};

const download = {
  title:'Download Resume',
  description:'To download the PDF resume, please click the button below',
  link:'https://drive.google.com/file/d/1WZ3LRxs5RC43O4tE4OwoyXVsnIzaRs8r/view?usp=sharing',
}

const Resume = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition: {delay:2.4, duration:0.4, ease:"easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="download">Download Resume</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                   {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#2323] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                      );
                   })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] bg-[#4762B4] rounded-lg flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
          
                <div className="grid grid-cols-1  max-w-[620px] mx-auto xl:mx-0">
                  <span className="text-accent lg:text-left">{education.duration}</span>
                  <h2 className="text-sm  min-h-[20px] text-center lg:flex-row lg:text-left">{education.degree}</h2>
                  <h2 className="text-sm  min-h-[50px] text-center lg:flex-row lg:text-left">{education.program}</h2>
                  <div className="flex items-center justify-center xl:justify-start gap-2">
                    <p>{education.institution}</p>
                  </div>
                </div>
                {/* <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                   {education.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#2323] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h2 className="text-sm max-w-[200px] min-h-[50px] text-center lg:text-left">{item.program}</h2>
                        <h3 className="text-xs max-w-[260px] min-h-[20px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                      );
                   })}
                  </ul>
                </ScrollArea> */}
              </div>
            </TabsContent>

             {/* Download*/}
             <TabsContent value="download" className="w-full">
              <div className="flex flex-col gap-[30px] items-center text-center xl:text-left">
                <h3 className="text-4xl font-bold">{download.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {download.description}
                </p>
                <Link href={download.link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download Resume</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;