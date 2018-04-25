import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import withAuthorization from './withAuthorization';


class AruandedPage extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div className="example">
      
        <button className="button" onClick={this.onOpenModal}>
          Ava modal
        </button>{' '}
        
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. react-responsive-modal
          </p>
          <button className="button" onClick={this.onCloseModal}>Sulge</button>
        </Modal>
      </div>
    );
  }
  
}
  
const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AruandedPage);