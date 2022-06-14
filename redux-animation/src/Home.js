import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppNavbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <h1 className="d-flex text-left m-5">Select Component</h1>
          <Button className='m-5 nav bg-light'>
                        <Link 
                            to='/barchart'
                            className='nav-link'
                        >Bar Chart</Link>
          </Button>
          <Button className='m-5 nav bg-light'>
                        <Link 
                            to='/tree'
                            className='nav-link'
                        >Tree</Link>
          </Button>
          <Button className='m-5 nav bg-light'>
                        <Link 
                            to='/lightorb'
                            className='nav-link'
                        >Light Torb</Link>
          </Button>
        </Container>
      </div>
    )
  }
}

export default Home;