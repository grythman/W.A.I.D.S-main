// lms/app/containers/SignIn/index.js
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import './style.css';
import './styleM.css';

export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      snack: false,
      msg: "",
      app: this.props.app
    };
  }

  componentWillReceiveProps(app) {
    this.setState({
      app: app.app
    }, function() {
      this.forceUpdate();
    });
  }

  handleRequestClose = () => { this.setState({ snack: false, msg: "" }); };
  showSnack = (msg) => { this.setState({ snack: true, msg: msg }); };

  render() {
    return (
      <div className="container">
        <Helmet title="SignIn" meta={[{ name: 'description', content: 'Description of SignIn' }]} />
        <header>
          <Navbar app={this.state.app} />
        </header>
        <main className="lmsSignInMain">
          <div className="lmsAuthContainer">
            <div className="lmsAuthHeader">Sign In to LMS</div>
            <TextField floatingLabelText="E-mail" fullWidth={true} value={this.state.app.state.email} onChange={this.props.app.handleEmail} />
            <TextField floatingLabelText="Password" fullWidth={true} value={this.state.app.state.password} onChange={this.props.app.handlePassword} type="password" />
            <FlatButton label="Sign In" fullWidth={true} backgroundColor="#6fc13e" hoverColor="#4cc498" style={{ margin: '15px', color: '#FFFFFF' }} onClick={this.props.app.signIn} />
            <Link to="/signup" style={{ marginTop: '5px', width: '80%' }}><FlatButton label="Sign Up" backgroundColor="#EEEEEE" hoverColor="#DDDDDD" style={{ color: '#222222', width: '100%' }} /></Link>
          </div>
        </main>
        <Footer />
        <Snackbar open={this.state.snack} message={this.state.msg} autoHideDuration={3000} onRequestClose={this.handleRequestClose} />
      </div>
    );
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object
};
