import './Profile.css'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import logo from '../../default_avatar.png';


const Profile = () => 
    <div className='Profile'>

        <Container>
        <Row>
            <Col xs={6} md={4}>
            <Image src={logo} height="50%" roundedCircle className="avatar" />
            </Col>

            <Col xs={6} md={4}>
                <h1>Joe Doe <Badge variant="secondary">New</Badge></h1>
                <h3>About: </h3>
                <h3>Investments: </h3>
                <Row>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                    <Col xs={3} md={2}>
                        Test
                    </Col>
                </Row>
                <h3>Social: </h3>
                <Row>
                    
                </Row>
            </Col>
        </Row>
        </Container>

    </div>

export default Profile