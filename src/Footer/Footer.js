import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer fixed-bottom">
      <footer className="container py-5">
        <div className="row">
          <div className="col-6 col-md">
            <p>Place for crypto investors and enthusiasts.</p>
          </div>
          <div className="col-6 col-md">
            <h5>Social</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-muted"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/CoinSharkFin"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/coinsharkfinance/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" rel="noreferrer" href="/about-us">
                  About us
                </a>
              </li>
              <li>
                <a className="text-muted" rel="noreferrer" href="/terms-of-use">
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  rel="noreferrer"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md">
            © 2021 CoinShark. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
