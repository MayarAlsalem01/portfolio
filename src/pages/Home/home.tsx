
import styled from '@emotion/styled';
import { Menu } from '@mui/icons-material';

import { createRef } from 'react';
import backgroundImage from '../../asset/glassy-effect-clicp.png'
import CloseIcon from '@mui/icons-material/Close';
import avatar from './../../asset/avatar.png'
import './home.css'
import { IconButton } from '@mui/material';
import logo from '../../asset/Logo.png'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from '../../sections/About/About';
import Contact from '../../sections/Contact/Contact';
import Stars from '../../sections/anime/Anime';
import Skills from '../../sections/skills/Skills';
const refSide = createRef<HTMLDivElement>();
const refHero = createRef<HTMLDivElement>();
const refHeader = createRef<HTMLDivElement>();
const refSpan = createRef<HTMLSpanElement>();
window.onload = ()=>{
    const pathname = window.location.pathname; // get the pathname
const parts = pathname.split('/'); // split the pathname into an array of parts
const page = parts.pop(); // 

if(refSpan.current && page){
    refSpan.current.textContent=page
}
}
const HomePage = styled.div`
    display: grid;    
    min-height: 100vh;
    background-image: url(${backgroundImage});
    
    background-size:cover;
    background-repeat: no-repeat;
    
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr)) ;
    grid-template-rows: auto auto auto auto auto auto auto ;
    position: relative;
`
const SideBar = styled.div`
    grid-area: side;
    grid-column-start: 1;
    grid-column-end:1;
    grid-row-start: 1;
    grid-row-end: 9;
    transition: all .3s;
    /* position: absolute; */
    @media (max-width:767px) {
       background: linear-gradient(176deg, rgba(9,16,42,1) 0%, rgb(223 53 141 / 51%) 100%)
    }
    ::before{
        content: '';
        background-color: #09102a73;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    
`
const Header = styled.div`
    grid-area: head;
    display: flex;
    align-items: center;
    padding: 0 20px;
    grid-column-start: 2;
    grid-column-end:10;
    grid-row-start: 1;
    grid-row-end:3;
    @media (max-width:767px) {
        grid-column-start: 1;
    }
`
const Hero = styled.div`
    grid-area: hero;
    padding: 0 20px;
    grid-column-start: 2;
    grid-column-end:10;
    grid-row-start: 3;
    grid-row-end: 9;
    background-image: url(${avatar});
    background-repeat: no-repeat;
    background-position-x: 70%;
    @media (max-width:767px) {
        grid-column-start: 1;
        background-size: 200px;
        background-position-y:100% ;
        background-position-x: 100%;
       
    }
    display: flex;
        align-items: center;
`
export const  Content = styled.div`
    z-index: 23;
    width: 100%;
    @media (max-width:767px) {
        
    padding: 20px 0;

    }
`

const UL = styled.ul`
        display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 0;
`
const ulRef=createRef<HTMLUListElement>();
const Li = styled.li`

margin: 5px 0 ;
padding: 15px;
width: 100%;
position: relative;
transition: all .3s;
:hover{
    padding-left: 25px;
    color: #FF4BA8;
}
`
const Home = () => {
    
    
    function OnClickHandel() {
        if (refSide.current) {
            refSide.current.classList.toggle('visable');

            if(refHeader.current && refHero.current){
                if(refSide.current.classList.contains('visable')){
                        refHeader.current.classList.add('blur');
                        refHero.current.classList.add('blur')
                }
                else{
                    refHeader.current.classList.remove('blur');
                    refHero.current.classList.remove('blur')
                }
            }
            
        }
    }

    function LinkOnClickHandle(event :React.MouseEvent<HTMLAnchorElement>){
        
        const li = ulRef.current?.querySelectorAll('li');
        li?.forEach(l=>l.classList.remove('active'))
        const parent = event.currentTarget.parentElement;
        parent?.classList.add('active');
        if(refSpan.current){

            refSpan.current.textContent=event.currentTarget.textContent;
        }
        if(refHeader.current && refHero.current && refSide.current){

            refHeader.current.classList.remove('blur');
            refHero.current.classList.remove('blur')
            refSide.current.classList.remove('visable')
        }
    }
    
    return (
        <>
         <BrowserRouter>
         <HomePage className='home'>
                <Stars/>
                <SideBar ref={refSide} id='sidebar'>
                    <Content>
                      
                      <UL ref={ulRef}>
                            
                            <img alt='logo' src={logo}/>
                    
                              
                              <Li className='active'  >
                                <Link to='/' onClick={LinkOnClickHandle}>About</Link>
                                    
                            </Li>
                            <Li>
                                <Link to='/Skills' onClick={LinkOnClickHandle}>Skllis</Link>                                            
                            </Li>
                            <Li>
                                <Link to='/Contact' onClick={LinkOnClickHandle}>Contact</Link>
                            </Li>
                              
                          
                    </UL>
                    </Content>
                    <IconButton onClick={OnClickHandel}><CloseIcon></CloseIcon></IconButton>
                </SideBar>
                <Header ref={refHeader} className='header'>
                    <Content className='text'>
                        <span ref={refSpan}>About</span>
                        <IconButton onClick={OnClickHandel}><Menu></Menu></IconButton>
                    </Content>
                </Header>
                <Hero ref={refHero} className='hero'>
                    <Content>
                       
                           <Routes>
                           <Route    path='/'  element={<About/>}/>
                            <Route   path='/Contact' element={<Contact/>}/>
                            <Route   path='/Skills' element={<Skills/>}/>
                            <Route   path='*' element={<About/>}/>
                           </Routes>
                            
                        
                    </Content>
                        
                </Hero>

            </HomePage></BrowserRouter>
        </>
    );
}
export default Home;

