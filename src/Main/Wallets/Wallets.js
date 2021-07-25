import './Wallets.css'
import { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Table, Image } from 'react-bootstrap';
import WalletService from '../../services/WalletService'


const Wallets = () => {
    let match = useRouteMatch()
    const [wallets, setWallets] = useState([])

    useEffect(() => {
        retrieveAllWallets()
    }, [])

    const retrieveAllWallets = async () => {
        try {
            const response = await WalletService.getAll()
            setWallets(response.data.wallets)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className='Wallets'>
            <Switch>
                <Route path={`${match.path}/:walletId`}>
                    test
                </Route>
                <Route path={match.path}>

                <Container className="cc-container">

                    <Row>
                        <h1>Wallets</h1>
                    </Row>
            
                    <Row>
                        <Table hover className="cc-table">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Hardware/Software Wallet</th>
                            <th>Hot/Cold Storage</th>
                            <th>Platforms</th>
                            </tr>
                        </thead>

                        {wallets &&
                            wallets.map((item, index) =>
                                <tbody key="{item.name}_{index + 1}">
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <a href={item.website_url} className="text-dark" target="_blank" rel="noreferrer">
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

export default Wallets
