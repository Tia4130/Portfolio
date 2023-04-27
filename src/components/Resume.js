//this part was resume and the tabs 
//I remove it because it is useless 
//but khalayto because maybe one day i can use it

// import React, { useState } from 'react'
// import '../css/Resume.css';

// //COMPONENTS FOR RESUME
// import Education from './resume/Education';
// import Programming from './resume/Programming';
// import Projects from './resume/Projects';
// import Work from './resume/Work';

// import Header from './Header';
// import Footer from './Footer';

// export default function Resume() {

//     const [education, setEducation] = useState(true);
//     const [workhistory, setWorkhistory] = useState(false);
//     const [programmings, setProgrammings] = useState(false);
//     const [projects, setProjects] = useState(false);

//     //creating all false
//     function SetAllFalse() {
//         setEducation(false);
//         setWorkhistory(false);
//         setProgrammings(false);
//         setProjects(false);
//     }

//     //function for change state
//     function ChangeState(function1, state1) {
//         SetAllFalse();
//         function1(state1);
//     }


//     return (
//         <>
//             <Header />
//             <div className='resume-outer-section d-flex flex-column'>

//                 <span className='resume-me-text'>Resume</span>

//                 <div className='resume-new-section row' style={{ width: "70%", marginInline: "auto" }}>
//                     {/* left side */}
//                     <div className='col-lg-4 col-md-4 col-sm-12 resume-left-section px-0 shadow-lg d-flex flex-row' d>
//                         {/* awal row fiyo el icons  */}
//                         <div className='d-flex flex-column bg-new text-white'>
//                             <span className="icons-span">
//                                 <i class="fas fa-user-graduate"></i>{" "}
//                             </span>
//                             <span className="icons-span">
//                                 <i class="fa-solid fa-briefcase"></i>{" "}
//                             </span>
//                             <span className="icons-span">
//                                 <i class="fas fa-user-graduate"></i>{" "}
//                             </span>
//                             <span className="icons-span">
//                                 <i class="fas fa-user-graduate"></i>{" "}
//                             </span>
//                         </div>

//                         {/* tene row fi el aseme  */}
//                         <div className='d-flex flex-column'>
//                             <span className={education === false ? 'resume-options-items' : "selected resume-options-items"}
//                                 onClick={() => {
//                                     ChangeState(setEducation, true);
//                                 }}
//                             >Education</span>
//                             <span className={workhistory === false ? 'resume-options-items' : "selected resume-options-items"}
//                                 onClick={() => {
//                                     ChangeState(setWorkhistory, true);
//                                 }}
//                             >Work Experience</span>
//                             <span className={programmings === false ? 'resume-options-items' : "selected resume-options-items"}
//                                 onClick={() => {
//                                     ChangeState(setProgrammings, true);
//                                 }}
//                             >Programming</span>
//                             <span className={projects === false ? 'resume-options-items' : "selected resume-options-items"}
//                                 onClick={() => {
//                                     ChangeState(setProjects, true);
//                                 }}
//                             >Projects</span>

//                         </div>
//                     </div>

//                     {/* right side  */}
//                     <div className='col-lg-8 col-md-8 col-sm-12 resume-right-section'>
//                         {/* hon eza kabast aa shi whde men education ... yhatele el education  */}

//                         {education === true && <Education />}
//                         {workhistory === true && <Work />}
//                         {programmings === true && <Programming />}
//                         {projects === true && <Projects />}

//                     </div>
//                 </div>
//             </div>
//             <Footer />

//         </>
//     )
// }
