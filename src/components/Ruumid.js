import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
const INITIAL_STATE = {
  ruumikood: '',
  ruumikirjeldus: '',
  ruumiaeg: '',
  ruumilisaja: '',
  error: null,
};
class RuumidPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ruumid: null,
      open: false,
    };
  }
  componentDidMount() {
    db.onceGetRuums().then(snapshot =>
      this.setState(() => ({ ruumid: snapshot.val() }))
    );
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  
 render() {
   const {ruumid} = this.state;
   const { open } = this.state;
   const {
    ruumikood,
    ruumikirjeldus,
    ruumiaeg,
    ruumilisaja,
    error,
    } = this.state;
   return (
    <div>
      <p class="subtitle is-4">Ruumid</p><a class="button is-text" onClick={this.onOpenModal}>Lisa</a>
      {' '}
        <Modal open={open} onClose={this.onCloseModal} little>
        
        <p class="subtitle is-4">
    Lisa ruum
  </p>
        <form onSubmit={this.onSubmit}>
      <div className="column">
     
      <label className="label">Ruumi kood</label>
      <div className="control">
<input    className="input is-info"
          value={ruumikood}
          type="text"
          placeholder="kood"
        /></div>
        <div className="field">
        <label className="label">Kirjeldus</label>
        <input
          className="input is-info"
          value={ruumikirjeldus}
   //       onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="kirjeldus"
        />
        </div>
        
        

        { error && <p>{error.message}</p> }
        </div>
      </form>
          <button className="button" onClick={this.onCloseModal}>Sulge</button>
          
        </Modal>
    { !!ruumid && <RuumidList ruumid={ruumid} /> }
  </div>
   )
 }

}
const RuumidList = ({ruumid}) =>
  <div>
    
    <table class="table" is-bordered is-striped is-narrow is-hoverable is-fullwidth>
  <thead>
  <th>Ruum</th><th>Kirjeldus</th><th>Lisatud</th><th></th><th></th>
  </thead>
    {Object.keys(ruumid).map(key =>
      <tr><td key={key}>{ruumid[key].ruumikood}</td><td key={key}>{ruumid[key].ruumikirjeldus}</td><td key={key}>{ruumid[key].timestamp}</td><td><i class="fas fa-pencil-alt"></i></td><td><div style={{color:'Tomato'}}><i class="far fa-times-circle"></i></div></td></tr>
    )}
  </table> 
  </div>
const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(RuumidPage);
