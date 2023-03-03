import Button from "@mui/material/Button";
import { primaryColor } from "../../pages/color/colors";
import SendIcon from '@mui/icons-material/Send';
import { Content } from "../../pages/Home/home";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import './about.css';
import { motion } from 'framer-motion';
const About = ()=>{
    const About = styled.div`
            padding-bottom: 85px;
    `
    return(

     <motion.div initial={{ y: '-100%' }}
     animate={{ y: 0 }}
     transition={{ duration: 0.5 }}>
           <About>
            <h1>Mayar Alsalem</h1>
                        <span className='title'>Web Developer</span>
                        <p> I am currently working on developing api for websites using <span className='special'>Asp Net Core</span>  and <span className="special">Sql Server</span> and also building web pages using <span className="special">React & typescript</span></p>
                        <Content className="btns">
                        <Link to='/portfolio/contact'>
                        <Button variant='contained' endIcon={<SendIcon fontSize='small'></SendIcon>} size='large' sx={
                            {
                                background:primaryColor,
                                boxShadow:'none',
                                transition:'all .3s',
                                ":hover":{
                                    background:'#ee429b'
                                }
                            }
                        }>Hire Me</Button>
                       </Link>
                       
                      <Link to='/portfolio/Skills'>
                      <Button variant='contained' size='large' sx={
                            {
                                background:'#ffffff12',
                                boxShadow:'none',
                                transition:'all .3s',
                                ":hover":{
                                        background:'#ffffff38',
                                }
                            }
                        }>Know More</Button>
                      </Link>
                        
                       
                        </Content>
        </About>
     </motion.div>
    );
}
export default About;