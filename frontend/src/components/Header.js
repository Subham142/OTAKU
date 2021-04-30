import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
//import GoogleAuth from './googleAuth'
import { logout } from '../actions/userActions'
import Logo from '../pics/logo.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const navDropdownAdmin = (<i class="fas fa-user-shield">  Admin</i>)
  let demo =""
  if(userInfo){
     demo = (<i class="fas fa-user"> {userInfo.name}</i>)
  }
  return (
    <header  style={{marginBottom:"44.5px"}}>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed="top" >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
         <h4>🅾🆃🅰🅺🆄</h4>
           
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Route render={({ history }) => <SearchBox history={history} />} />
          {/* <GoogleAuth/> */}
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (           
                <NavDropdown title={demo} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item><i class="fas fa-user-edit"></i>  Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                  <i class="fas fa-sign-out-alt"></i>  Logout
                  </NavDropdown.Item>
                </NavDropdown>
               
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
               {userInfo && userInfo.isAdmin && (
                <NavDropdown title={navDropdownAdmin} id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item><i class="fas fa-users"></i> Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item><i class="fas fa-box-open"></i>  Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item><i class="fas fa-receipt"></i>  Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header