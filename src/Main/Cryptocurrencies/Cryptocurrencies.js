import './Cryptocurrencies.css'
import { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Table } from 'react-bootstrap';
import CryptoCurrencyService from '../../services/CryptoCurrencyService'


const Cryptocurrencies = () => {
    let match = useRouteMatch()
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        retrieveAllCurrencies()
    }, [])
 
    const retrieveAllCurrencies = async () => {
        try {
            const response = await CryptoCurrencyService.getAll()
            setCurrencies(response.data.cryptocurrencies)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className='Cryptocurrencies'>
            <Switch>
                <Route path={`${match.path}/:currencyId`}>
                    test
                </Route>
                <Route path={match.path}>

                <Container className="cc-container">

                    <Row>
                        <h1>Cryptocurrencies</h1>
                    </Row>
            

                    <Row>
                        <Table hover className="cc-table">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h %</th>
                            <th>7d %</th>
                            <th>Volume (24h)</th>
                            </tr>
                        </thead>

                        {currencies &&
                            currencies.map((item, index) =>
                                <tbody key="{item.index}-{item.name}">
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                        </Table>
                    </Row>
                </Container>
                
                
                </Route>
            </Switch>
        </div>
    )
}
  
  

export default Cryptocurrencies