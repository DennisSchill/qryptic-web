import './Main.css';
import Start from './Start';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Register from './Register';
import Login from './Login';
import AboutUs from './AboutUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './TermsOfUse/TermsOfUse';
import Cryptocurrencies from './Cryptocurrencies/Cryptocurrencies';
import Exchanges from './Exchanges';
import Wallets from './Wallets';
import { Breadcrumb } from 'react-bootstrap';
// import CryptoCurrencySearch from './components/CryptoCurrencySearch/CryptoCurrencySearch'

const Main = () => (
  <div className="Main">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/cryptocurrencies" component={Cryptocurrencies} />
        <Route path="/exchanges" component={Exchanges} />
        <Route path="/wallets" component={Wallets} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Main;
