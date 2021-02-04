import { connect } from 'react-redux';
import actions from '../actions';
import Dock from './Dock';

const mapDispatchToProps = dispatch => ({
    setMessageBox: text => dispatch(actions.setMessageBox(text)),
});

export default connect(null, mapDispatchToProps)(Dock);
