import React, { useState } from "react";
import { Button, Card, CardGroup ,Col,Row} from "react-bootstrap";
import { styled } from "styled-components";
import { Cart } from "./Cart";
import { Front } from "./Product";



function App(){
  
  return (
//     <Main className="App">
//       <Nav>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <h1>
//             E- cart<Button onClick={()=>setView(!view)}>{view==true? <>View product</>:<>View cart</>}</Button>
//           </h1>
//         </nav>
//       </Nav>
//       <hr></hr> 
      
//     {view==true?<Cart watch={watch} add={add}/>:
//     <Car >
//     <D1>
//   <Card >
//   <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" width="100%"/>
//   <Card.Body>
//     <Card.Title>Rolex Watch</Card.Title>
//     <Card.Text>
//     <h6>Watch for sale</h6>
//     <h6>$ 10</h6>
//     </Card.Text>
//     <Button variant="primary" onClick={()=>setCart(1) }>Add Cart</Button>
//   </Card.Body>
// </Card>
// </D1>
// <D2>
//   <Card >
//   <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/04/15/11/21/watches-4129074_1280.jpg" width="100%" />
//   <Card.Body>
//     <Card.Title>Watch</Card.Title>
//     <Card.Text>
//       <h6>Watch for sale</h6>
//     <h6>$ 10</h6>
    
//      </Card.Text>
//     <Button variant="primary" onClick={()=>setAdd(1) }>Add Cart</Button>
//   </Card.Body>
// </Card>
// </D2>
// <D3>
//   <Card >
//   <Card.Img variant="top" src="https://media.istockphoto.com/id/1364375129/photo/dslr-camera-on-a-photographers-desk.jpg?s=2048x2048&w=is&k=20&c=KeyxtSZ7-mMXYtSeGXywqP0JyTdIcJJNh1imWZ0cIwE=" width="100%" />
//   <Card.Body>
//     <Card.Title>Camera</Card.Title>
//     <Card.Text>
//     <h6>Watch for sale</h6>
//     <h6>$ 10</h6>
//     </Card.Text>
//     <Button variant="primary" onClick={()=>setWatch(1) }>Add Cart</Button>
//   </Card.Body>
// </Card>
// </D3>
//   </Car>}
    
      
     
//     </Main>
<Front/>
  );
}

export default App;
