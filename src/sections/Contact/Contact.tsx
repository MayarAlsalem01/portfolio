import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { Content } from "../../pages/Home/home";
import '../Contact/contact.css'
import { primaryColor } from "../../pages/color/colors";
const Form = styled.form`
        display: flex;
    flex-direction: column;
    color: #ffffffc4;
    @media (max-width:767px) {
        width: 100%;
        overflow: hidden;
    }
`
const BackGround = '#fefefe08'
const Label= styled.label`
    font-size: 18px;
    margin-bottom: 20px;
    @media (max-width:767px) {
      
    }
`
const Label2= styled.label`
    font-size: 18px;
    margin-bottom: 20px;
    @media (max-width:767px) {
      margin-top: 10px;
      margin-bottom: 0;
    }
    `
const TextArea = styled.textarea`
   resize: none;
    width: 80%;
    height: 300px;
    padding: 10 !important;
    @media (max-width:767px) {
        height: 150px;
        margin-bottom: 10px;
        width: 100%;
    }
    border-color: #ffffff24;
    background: ${BackGround};
    color: #fff;
    padding: 10px;
    border-radius:5px;
    transition: all .3s;
    :focus{
        outline: none;
        box-shadow : #90939f0f 0px 7px 29px 0px;
    }
    margin-bottom: 20px;
    `
    
    const CustomTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#ffffff24', // change this to the desired border color
            background:`${BackGround}`,
            color:'#fff'
          },
          '&:hover fieldset': {
            borderColor: '#fff', // change this to the desired border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: `${primaryColor}`, // change this to the desired border color when focused
          },
          
        },
        '&  .MuiInputLabel-root': {
            color: 'inherit', // change this to the desired label color
          },
          '& .MuiInputBase-input': {
            color: '#fff', // change this to the desired input color
          },
          '& .MuiInputLabel-root': {
            color: '#ffffffc4', // change to desired label color
            '&.Mui-focused': {
              color: '#ffffffc4', // change to desired label color on focus
            },
          },
          
      });
function Contact() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [message, setmessage] = useState('');
  

  function handleSubmit(event :React.FormEvent) {
    event.preventDefault();

    

    emailjs.send("service_f8kmvsb","template_zcx24uc",{
      from_name: fullName,
      to_name: "Mayar Alsalem",
      message:`Company Name: ${companyName} \n Position: ${position} \n message :\n ${message}`,
      reply_to: emailAddress,
      },"mQpqaqD0yQoq95ZYK")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setCompanyName("");
    setEmailAddress("");
    setFullName("");
    setPosition("");
    setmessage("");
  }
  function handleChange (event:React.ChangeEvent<HTMLInputElement>)  {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
        case 'message':
        setFullName(value);
        break;
      case 'emailAddress':
        setEmailAddress(value);
        break;
      case 'companyName':
        setCompanyName(value);
        break;
      case 'position':
        setPosition(value);
        break;
      default:
        break;
    }
  };
  const handleTextAreaChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setmessage(event.target.value)
  }

  return (
    <div className="contact">
        <Form onSubmit={handleSubmit}>
        <Label >
            Your Message Here 
        </Label>
        <TextArea name="message" value={message} onChange={handleTextAreaChange}>

        </TextArea>
        <Label2>About You </Label2>
        <Content className="inputs">
        <div className="input-btn" >
        <CustomTextField
          id="full-name"
          label="Full Name"
          variant="outlined"
          name="fullName"
          value={fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-btn">
        <CustomTextField
          id="email-address"
          label="Email Address"
          variant="outlined"
          name="emailAddress"
          value={emailAddress}
          onChange={handleChange}
        />
      </div>
      <div className="input-btn">
        <CustomTextField
          id="company-name"
          label="Company Name"
          variant="outlined"
          name="companyName"
          value={companyName}
          onChange={handleChange}
        />
      </div>
      <div className="input-btn">
        <CustomTextField
          id="position"
          label="Position"
          variant="outlined"
          name="position"
          value={position}
          onChange={handleChange}
        />
      </div>
       
        </Content>
        <Button variant="contained" type="submit" size="medium" sx={{
          width:'25%',
          background:`${primaryColor}`,
          padding:'13px 0 ',
          marginBottom:'20px',
          ":hover":{
            background:'#f94fa7',
          }
        }}>Send</Button>
    </Form>
    
    </div>
  );
 
}
export default Contact
