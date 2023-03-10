
import styled from "@emotion/styled";
import { ProgressBar } from "react-bootstrap";
import { motion } from 'framer-motion'
import './skills.css'
const Skill = styled.div`
    display: flex;
    width: 80%;
    
    gap: 80px;
    @media (max-width:767px) {
        flex-direction: column;
        gap: 20px;
        width: 95%;
    }
`
const Backend = styled.section`
flex: 1;

`
const FrontEnd = styled.section`
    flex: 1;
`
const Prog = styled.div`
    margin-bottom: 20px;
`
const Skills = () => {
    const now = 95;
    return (
        <motion.div
           
        >
            <Skill className="skills">
                <motion.div className="backend-section" initial={{ opacity: 0, x: '-50%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>

                    <Backend >
                        <h2>
                            Back-End
                        </h2>
                        <Prog className="prog">
                            <label>C#</label>
                            <ProgressBar now={now} label={`${now}%`} />
                        </Prog>

                        <Prog className="prog">
                            <label>Asp Net Core</label>
                            <ProgressBar now={85} label={`${85}%`} />
                        </Prog>

                        <Prog className="prog">
                            <label>Sql</label>
                            <ProgressBar now={75} label={`${75}%`} />
                        </Prog>
                    </Backend>

                </motion.div>
                <motion.div  className="frontend-section"
                
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                >
                <FrontEnd>
                    <h2>
                        Front-End
                    </h2>
                    <Prog className="prog">
                        <label>Html</label>
                        <ProgressBar now={80} label={`${80}%`} />
                    </Prog>
                    <Prog className="prog">
                        <label>Css</label>
                        <ProgressBar now={90} label={`${90}%`} />
                    </Prog>
                    <Prog className="prog">
                        <label>Javascript</label>
                        <ProgressBar now={65} label={`${65}%`} />
                    </Prog>
                    <Prog className="prog">
                        <label>React TypeScirpt</label>
                        <ProgressBar now={65} label={`${65}%`} />
                    </Prog>
                </FrontEnd>
                </motion.div>
               

            </Skill>
        </motion.div>
    );
}
export default Skills;