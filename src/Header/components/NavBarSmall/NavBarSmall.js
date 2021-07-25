import React, { useEffect, useState } from 'react'
import './NavBarSmall.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import CryptoCurrencyService from '../../../services/CryptoCurrencyService'
import ExchangeService from '../../../services/ExchangeService'
import WalletService from '../../../services/WalletService'


const NavBarSmall = () => {
  const [amountCurrencies, setAmountCurrencies] = useState([])
  const [amountExchanges, setAmountExchanges] = useState([])
  const [amountWallets, setAmountWallets] = useState([])

  useEffect(() => {
    retrieveAmountOfCurrencies()
    retrieveAmountOfExchanges()
    retrieveAmountOfWallets()
  }, [])

  const retrieveAmountOfCurrencies = async () => {
      try {
          const response = await CryptoCurrencyService.getAll()
          setAmountCurrencies(response.data.totalItems)
      } catch (err) {
          console.log(err)
      }
  }

  const retrieveAmountOfExchanges = async () => {
    try {
        const response = await ExchangeService.getAll()
        setAmountExchanges(response.data.totalItems)
    } catch (err) {
        console.log(err)
    }
  }

  const retrieveAmountOfWallets = async () => {
    try {
        const response = await WalletService.getAll()
        setAmountWallets(response.data.totalItems)
    } catch (err) {
        console.log(err)
    }
  }

  return(
    <div className="NavBarSmall">
        <Navbar bg="light" variant="light" className="cs-navbar-small">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/cryptocurrencies">Cryptocurrencies: {amountCurrencies}</Nav.Link>
                    <Nav.Link href="/exchanges">Exchanges: {amountExchanges}</Nav.Link>
                    <Nav.Link href="/wallets">Wallets: {amountWallets}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

        </Container>
      
      </Navbar>
  </div>
  )
}
  
export default NavBarSmall