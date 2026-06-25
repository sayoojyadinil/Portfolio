import photo from "./Gallery/3dbgremove.png";
import threed from "./Gallery/3dbgremove.png";
import homeimg from "./Gallery/homeimage.png";
import ListGroup from 'react-bootstrap/ListGroup';
import project from "./Gallery/projectimage.webp";
import { SiJavascript, SiMysql, SiNodedotjs } from "react-icons/si";
import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,FaMapMarkerAlt, FaCircle,FaReact, FaBootstrap
} from "react-icons/fa";
import {useRef} from "react";
function app(){
   const projectsRef = useRef(null);
    const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
   const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return(
    <div className="container-fluid px-3" style={{ backgroundColor: "#DFE6DA"}}>

      <div className="row">
        <div className="col-md-2 min-vh-100 rounded text-center p-3" style={{backgroundColor:"#ffffff"}}>
          <div className="sticky-top">
          <img
  src={photo}
  alt="photo"
  className="rounded-circle mb-3 mx-auto d-block"
  width="100"
  height="120"
/>
          
          <h6 className="fw">React JS Developer</h6>
        <ListGroup className="text-center gap-3 pt-4">
         <button className="btn btn-outline-success" onClick={() => scrollToSection(aboutRef)}>
              <FaUser className="me-2" />
              About
            </button>
            <button className="btn btn-outline-success" onClick={() => scrollToSection(educationRef)}>
              <FaGraduationCap className="me-2" />
              Education
            </button>
            <button className="btn btn-outline-success" onClick={() => scrollToSection(skillsRef)}>
               <FaCode className="me-2" />
              Skills
            </button>
            <button className="btn btn-outline-success" onClick={() => scrollToSection(projectsRef)}>
               <FaBriefcase className="me-2" />
              Projects
            </button>
             <button className="btn btn-outline-success" onClick={() => scrollToSection(contactRef)}>
               <FaEnvelope className="me-2" />
              Contact
            </button>
         
           
        </ListGroup>
        
      </div>
      </div>
          <div className="col-md-10 min-vh-100 text-start ps-2" ref={aboutRef} style={{ backgroundColor: "#DFE6DA"}}>
            <div className="card shadow px-4 mb-1">
              <div className="row align-items-center pb-3 ">
                <div className="col-md-6">           
              <span className="badge mb-2 text-success  mt-4" style={{ backgroundColor: "#dee8d7"}}>
        👋 Hello, I'm
      </span>
       <h6 className="display-6 fw-bold">
        Sayoojya
      </h6>
      <h6 className="text-success">
        React JS Developer
      </h6>
      <p style={{fontSize: 14}} className="text-muted">
    <FaMapMarkerAlt color="green" /> Kerala, India <FaCircle color="green" size={10} />  Available for Work
  </p>

 
              <p className="mt-4" style={{fontSize:14, textAlign:"justify", lineHeight: "1.8"}}>
                Hi, I'm Sayoojya, a React JS Developer passionate 
                about creating modern, responsive, and 
                userfriendly web applications.  
                I enjoy turning ideas into interactive digital experiences 
                through clean and efficient code.
                </p>

            <button type="button" className="btn btn-outline-success m-1">Download Resume</button>
            <button type="button" className="btn btn-outline-success m-1">
                  Contact Me
                </button>
            </div>
            <div className="col-md-6 pt-5">
            <img src={homeimg} alt="homeimg" className="rectangle" height="300" width="375" />
              
              </div>
            </div>
            </div>
            <div className="card shadow border-0 p-4" ref={educationRef}>
  <div className="row align-items-center">

    {/* Education */}
    <div className="col-md-4">
      <div className="p-2 rounded h-100" style={{background:"#DFE6DA"}}>
        <div className="d-flex">

          <div
            className="text-white me-3"
            style={{ width: "60px", height: "60px" }}
            
          >
            
          </div>

          <div>
            
            <h6 className="text-success fw"> <FaGraduationCap className="me-2 text-success " />BTECH</h6>
            <p className="mb-0" style={{fontSize:12}}>
              Computer Science and Engineering
            </p>
            <p className="mb-0" style={{fontSize:12}}>
              VTU Mangalore
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* Center Text */}
    <div className="col-md-3 text-center border-start border-end">
     

      <h4 className="fw">Education</h4>
      <h2 className="text-success fw">&</h2>
      <h4 className="fw">Experience</h4>
    </div>

    {/* Experience */}
    <div className="col-md-5">
      <div className="p-3 rounded h-100" style={{background:"#DFE6DA"}}>
        <div className="d-flex">

          <div
            className="text-white"
            style={{ width: "60px", height: "60px" }}
          >
            
          </div>

          <div>
            <h6 className="text-success fw" > <FaBriefcase className="me-2 text-success " />
              Full Stack Developer
            </h6>

            <p className="mb-0" style={{fontSize: 14}}>
              Spinox Innovations
            </p>

            <p className="mb-0" style={{fontSize: 12}}>
              Kannur
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>  
              <div className="card mt-1 p-4" ref={skillsRef}>
                <div className="row align-items-center">
                  <h6 className="text text-center">My Skills</h6>
                  <div className="col-md-2">
                    <div className="card text-center shadow p-2 align-items-center">
                      <FaReact  size={50} className="mx-auto text-info p-2"></FaReact>
                    <h5 style={{fontSize:14}}> Vite React JS</h5>
                  </div>
                </div>
                <div className="col-md-2">
               <div className="card text-center shadow p-2 align-items-center">
                      <SiJavascript  size={50} className="mx-auto text-info p-2"></SiJavascript>
                    <h5 style={{fontSize:14}}>JavaScript</h5>
                  </div>
                </div>
                <div className="col-md-2">
                <div className="card text-center shadow p-2 align-items-center">
                      <FaBootstrap  size={50} className="mx-auto text-info p-2"></FaBootstrap>
                    <h5 style={{fontSize:14}}>Bootstrap</h5>
                  </div>
              </div>
              <div className="col-md-2">
            <div className="card text-center shadow p-2 align-items-center">
                      <SiMysql  size={60} className="mx-auto text-info p-2"></SiMysql>
                    <h5 style={{fontSize:14}}>SQL</h5>
                  </div>
                  
        </div>
        <div className="col-md-2">
                  <div className="card text-center shadow p-2 align-items-center">
                      <FaGithub  size={50} className="mx-auto text-info p-2"></FaGithub>
                    <h5 style={{fontSize:14}}>Git</h5>
                    </div>
                  </div>
                  <div className="col-md-2">
                  <div className="card text-center shadow p-2 align-items-center">
                      <SiNodedotjs  size={50} className="mx-auto text-info p-2"></SiNodedotjs>
                    <h5 style={{fontSize:14}}>Node.js</h5>
                    </div>
                  </div> 
      </div>
    </div>
    <section ref={projectsRef}>
      <h6 className="text-center mt-3">Projects</h6>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow mt-1 text-center p-2">
          <img src={project} alt="Project" className="rounded mx-auto d-block mb-3" height={225} width={260}/>
          <h6>Hello</h6>
          <button className=" btn btn-success btn-sm mb-2">
              Read more
            </button>
          </div>
      </div>
      <div className="col-md-4">
          <div className="card shadow mt-1 text-center p-2">
          <img src={project} alt="Project" className="rounded mx-auto d-block mb-3" height={225} width={260}/>
          <h6>Hello</h6>
          <button className=" btn btn-success btn-sm mb-2">
              Read more
            </button>
          </div>
      </div>
      <div className="col-md-4">
         <div className="card shadow mt-1 text-center p-2">
          <img src={project} alt="Project" className="rounded mx-auto d-block mb-3" height={225} width={260}/>
          <h6>Hello</h6>
          <button className=" btn btn-success btn-sm mb-2">
              Read more
            </button>
          </div>
        </div>
        </div>
        </section>
    <div className="card shadow mt-1 text-center p-2" ref={contactRef}>
      <div className="container bg-white rounded p-4">
  <h3 className="text-center mb-4">Contact Me</h3>

  <form>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your Name"
      />
    </div>

    <div className="mb-3">
      <input
        type="email"
        className="form-control"
        placeholder="Enter Your Email"
      />
    </div>

    <div className="mb-3">
      <textarea
        className="form-control"
        rows="5"
        placeholder="Enter Your Message"
      ></textarea>
    </div>

    <button className="btn btn-success">
      Send Message
    </button>
  </form>
</div>  
</div>
  </div>
</div>
</div>
);
}export default app;