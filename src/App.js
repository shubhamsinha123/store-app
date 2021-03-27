// import logo from './logo.svg';
import './App.css';
import { Row, Col,Container } from 'react-bootstrap';
import React from 'react';
import imag1 from './images/HongKong.jpg';
import imag2 from './images/japan.jpg';
import imag3 from './images/macauu.jpg';
import imag4 from './images/mauritius.jpg';
import imag5 from './images/taiwan.jpg'
import ReactFilter from './component/ReactFilter';

const people = [
  {
    name: 'James',
    price: '200',
    imageUrl: "./images/HongKong.jpg"
  },
  {
    name: 'John',
    price: '350',
    images: './images/japan.jpg'
  },
  {
    name: 'Paul',
    price: '400',
    images: './images/HongKong.jpg'
  },
  {
    name: 'Ringo',
    price: '300',
    images: './images/HongKong.jpg'

  },
  {
    name: 'George',
    price: '500',
    images: '{imag5}'

  }
];


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      input: '',
    }
  }
  render(){
  return (

    <div>

<ReactFilter />

      
      MIN
      <input
      value={this.state.input}
      type = "number"
      />
      MAX
      <input
      type = "number"
      />
      <button>FILTER</button>
      {people.filter(name => name.price <= 500).map(filteredName => (
        <ul>
          <li>
          {filteredName.name}
        </li>
        <li>
          {filteredName.images}
        </li>
        <li>
          {filteredName.price}
        </li>
        </ul>
      ))}
    </div>
  );
}
}

export default App;

// const product  = [


// function App() {
//   return (
//     <div className = 'container'>
//     <div className = 'row'>
//       <div className = 'col'>
//         <div className = 'header'>
//           <h1>Store</h1> 
//       </div>
//        <h1>Product</h1>
//     </div>
//     </div>
//     </div>
//     // <Container>
//     //   <Row>
//     //     <Col>
//     //     <h1>Store</h1>
//     //     </Col>
//     //   </Row>
//     // </Container>
  
//   );
// }
