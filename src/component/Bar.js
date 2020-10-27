import React from 'react'
import fire from '../config/fire'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { MDBBtn } from 'mdbreact'

const NaBar = props => {
  const logout = () => {
    fire.auth().signOut()
  }

  return (
    <div id='classicformpage'>
      <div>
        <Navbar style={{backgroundColor:'#DEEBF7'}}>
          <Navbar.Brand href='/page_home'>หน้าแรก</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/page_covid'>Covid-19</Nav.Link>
            <Nav.Link href='/page_table'>สถิติแบ่งตามหมวดหมู่</Nav.Link>
            <Nav.Link href='/page_contact'>ติดต่อเรา</Nav.Link>
            
          </Nav>

          <Form inline>
            <MDBBtn rounded color='danger' onClick={logout}>
              logout
            </MDBBtn>
          </Form>
        </Navbar>
      </div>
    </div>
  )
}

export default NaBar
