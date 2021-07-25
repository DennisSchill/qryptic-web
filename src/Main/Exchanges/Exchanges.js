import './Exchanges.css'
import { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Table, Image } from 'react-bootstrap';
import ExchangeService from '../../services/ExchangeService'


const Exchanges = () => {
    let match = useRouteMatch()
    const [exchanges, setExchanges] = useState([])

    useEffect(() => {
        retrieveAllExchanges()
    }, [])

    const retrieveAllExchanges = async () => {
        try {
            const response = await ExchangeService.getAll()
            setExchanges(response.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className='Exchanges'>
            <Switch>
                <Route path={`${match.path}/:exchangeId`}>
                    test
                </Route>
                <Route path={match.path}>

                <Container className="cc-container">

                    <Row>
                        <h1>Exchanges</h1>
                    </Row>
            

                    <Row>
                        <Table hover className="cc-table">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            </tr>
                        </thead>

                        {exchanges &&
                            exchanges.map((item, index) =>
                                <tbody key="{item.name}_{index + 1}">
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Image src={item.logo_medium} height="67" />
                                            <a href={item.website} className="text-dark" target="_blank" rel="noreferrer">
                                                {item.name}
                                            </a>
                                        </td>
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

export default Exchanges