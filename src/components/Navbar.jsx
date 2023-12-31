import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

  const [nav,setNav] =useState("")

  const setActive =(value)=> {
      setNav(value)
  }

  const navItems =[
    {
      key:"all",
      text:"ALL"
    },
    {
      key:"fsd",
      text:"FULL STACK DEVELOPMENT"
    },
    {
      key:"datascience",
      text:"DATA SCIENCE"
    },
    {
      key:"cybersecurity",
      text:"CYBER SECURITY"
    },
    {
      key:"career",
      text:"CAREER"
    },
  ]

  return (

    <Nav style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"white",width:"100%",height:"50px",borderBottom:"3px solid red"}} activeKey="/" >  

        {navItems.map((item)=>
        {
        return(
            <Nav.Item onClick={()=>setActive(item.key)} className={nav===item.key ? "active": "inactive"}>
            <Link id={item.key} class="nav-link" role="button" tabindex="0" to={`/${item.key}`}>{item.text}</Link>
            </Nav.Item>
        )}
        )}
    </Nav>
    
  );
}



export default NavBar;