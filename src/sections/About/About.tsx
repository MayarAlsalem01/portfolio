import Button from "@mui/material/Button";
import { primaryColor } from "../../pages/color/colors";
import SendIcon from '@mui/icons-material/Send';
import { Content } from "../../pages/Home/home";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import './about.css'
const About = ()=>{
    const About = styled.div`
            padding-bottom: 85px;
    `
    return(
        <About>
            <h1>Mayar Alsalem</h1>
                        <span className='title'>Web Devloper</span>
                        <p> I am currently working on developing api for websites using <span className='special'>Asp Net Core</span>  and <span className="special">Sql Server</span> and also building web pages using <span className="special">React & typescript</span></p>
                        <Content className="btns">
                        <Link to='/contact'>
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
                        
                       
                        </Content>
        </About>
    );
}
export default About;