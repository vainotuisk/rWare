import React, {Component} from 'react';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
class AsjadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asjad: null,
    };
  }
  componentDidMount() {
    db.onceGetAsjad().then(snapshot =>
      this.setState(() => ({ asjad: snapshot.val() }))
    );
  }
 render() {
   const {asjad} = this.state;
   return (
    <div>
    { !!asjad && <AsjadList asjad={asjad} /> }
  </div>
   )
 }

}
const AsjadList = ({asjad}) =>
  <div>
   <p class="subtitle is-4">Asjad </p>
    <table class="table" is-bordered is-striped is-narrow is-hoverable is-fullwidth>
  <thead>
  <th>Kood</th><th>Ruum</th><th>Kirjeldus</th><th>Liik</th><th>Lisatud</th><th></th><th></th>
  </thead>
    {Object.keys(asjad).map(key =>
      <tr>
        <td key={key}><a href="#">{asjad[key].asjaruum}</a></td>
        <td key={key}>{asjad[key].asjaruum}</td>
        <td key={key}>{asjad[key].asjakirjeldus}</td>
        <td key={key}>{asjad[key].asjatyyp}</td>
        <td key={key}>{asjad[key].timestamp}</td>
        <td><i class="fas fa-pencil-alt"></i></td>
        <td><div style={{color:'Tomato'}}><i class="far fa-times-circle"></i></div></td>
      </tr>
    )}
  </table> 
  </div>
const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AsjadPage);
