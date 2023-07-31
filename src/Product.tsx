import { useState } from "react"
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { Cart } from "./Cart";

const Main = styled.div`
  width: 99%;
  height: 100%;
  position: absolute;
  /* background-color:lightcyan; */
`;
const Nav = styled.div`
  width: 100%;
  height: 10%;

  h1 {
    font-size: 200%;
    text-align: center;
    display: grid;

    width: 30%;
    height: 10%;
    margin-left: 35%;
    Button {
      width: 20%;
      margin-left: 40%;
      margin-top: 1%;
      border: none;
      padding: 1%;
      border-radius: 10%;
      background-color: lightblue;
      &:hover {
        background-color: lightgreen;
      }
    }
  }
`;
const Car = styled.div`
 width:100%;
 height:50%;

 position:relative;

 
`; 
const D1= styled.div`
 width:20%;
position:absolute ;
height:100%;
border-style:solid;
text-align:center;
margin-left:10%;
`
const D2= styled.div`
 width:20%;
position: absolute;
margin-left:40%;
height:100%;
border-style:solid;
text-align:center;
`
const D3= styled.div`
text-align:center;
 width:20%;
position: absolute;
margin-left:70%;
border-style:solid;
height:100%;
`

export interface FileProps {
  cart: any;
  add: any;
  type: any;
}



export const Front: React.FC = (FileProps) => {
    const [cart,setCart]=useState(0)
    const[add,setAdd]=useState(0)
    const[watch,setWatch]=useState(0)
    const [view,setView]=useState(false)
    console.log(view)
    return (
      <Main className="App">
        <Nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>
              E- cart<Button onClick={()=>setView(!view)}>{view==true? <>View product</>:<>View cart</>}</Button>
            </h1>
          </nav>
        </Nav>
        <hr></hr> 
        
      {view==true?<div>
         {cart==1? <div>

        <pre><img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" width="10%"/>
         <h6>$ 10</h6></pre> 

         </div>:<p>Cart is empty</p>}
       




      </div>:
      <Car >
      <D1>
    <Card >
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" width="100%"/>
    <Card.Body>
      <Card.Title>Rolex Watch</Card.Title>
      <Card.Text>
      <h6>Watch for sale</h6>
      <h6>$ 10</h6>
      </Card.Text>
      <Button variant="primary" onClick={()=>setCart(1) }>Add Cart</Button>
    </Card.Body>
  </Card>
  </D1>
  <D2>
    <Card >
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/04/15/11/21/watches-4129074_1280.jpg" width="100%" />
    <Card.Body>
      <Card.Title>Watch</Card.Title>
      <Card.Text>
        <h6>Watch for sale</h6>
      <h6>$ 10</h6>
      
       </Card.Text>
      <Button variant="primary" onClick={()=>setAdd(1) }>Add Cart</Button>
    </Card.Body>
  </Card>
  </D2>
  <D3>
    <Card >
    <Card.Img variant="top" src="https://media.istockphoto.com/id/1364375129/photo/dslr-camera-on-a-photographers-desk.jpg?s=2048x2048&w=is&k=20&c=KeyxtSZ7-mMXYtSeGXywqP0JyTdIcJJNh1imWZ0cIwE=" width="100%" />
    <Card.Body>
      <Card.Title>Camera</Card.Title>
      <Card.Text>
      <h6>Watch for sale</h6>
      <h6>$ 10</h6>
      </Card.Text>
      <Button variant="primary" onClick={()=>setWatch(1) }>Add Cart</Button>
    </Card.Body>
  </Card>
  </D3>
    </Car>}
      
        
       
      </Main>
    );
  }














