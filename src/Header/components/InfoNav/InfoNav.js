import './InfoNav.scss';
import { React } from 'react';
import { Container } from 'react-bootstrap';

const InfoNav = () => {
  return (
    <div className="InfoNav">
      <Container>
        <span className="p-2">
          <p className="pCurrencie">Cryptocurrencies:</p>
          <a className="aCurrencie" href="/cryptocurrencies">
            Bitcoins
          </a>
        </span>
        <span className="p-2">
          <p className="pCurrencie">Exchanges:</p>
          <a className="aCurrencie" href="/exchanges"></a>
        </span>
        <span className="p-2">
          <p className="pCurrencie">Wallets:</p>
          <a className="aCurrencie" href="/wallets">
            $1459
          </a>
        </span>
      </Container>
    </div>
  );
};

export default InfoNav;
