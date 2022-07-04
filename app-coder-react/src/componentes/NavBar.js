import React from "react";
import styled from "styled-components";

function NavBar(){
    return(
<>
<NavConteiner style={{display:"flex",justifyContent:"space-between",alignContent:"center",backgroundColor:"black"}}>
   
<h2 style={{color:"white"}}><span>Titulo E-comerce</span></h2>
<div style={{margin:15,letterSpacing:3,fontSize:20,}}>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Home</a>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Product</a>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Us</a>
<a href="#" style={{textDecoration:"none", margin:9, color:"violet"}}>Contact</a>
</div>

</NavConteiner>
</>
    );
}
export default NavBar
const NavConteiner = styled.nav`
h2{
    font-weight:400;
    span{
        font-weight:bold; 
    }
}
padding:1rem;
background-color:'red':
display:flex:
justify-content:space-between:
a{
    text-decoration:'none';
    color:white;
    font-size:400;
}
`