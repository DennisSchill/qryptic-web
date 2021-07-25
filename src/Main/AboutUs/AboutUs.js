import './AboutUs.css'
import { Container, Row } from 'react-bootstrap';


const AboutUs = () => 
    <div className='AboutUs'>
        <Container>
            <Row>
                <h1>About Us</h1>
            </Row>
            <Row>
                <p>CoinShark is a place for crypto enthusiasts and investors to learn more about the space of crypto.</p>
                <p>If you value our work and would like to make a contribution to keep our servers running use the following addresses below:</p>
            </Row>
            <Row>
                <p>BTC: bc1ql97dlhhexma7agkk7gmg76t7ljycuqc9xgr4vl</p>
            </Row>
            <Row>
                <p>ETH: 0x03A049028B673Cc5EF676695f442eC5614877335</p>
            </Row>
        </Container>
    </div>

export default AboutUs