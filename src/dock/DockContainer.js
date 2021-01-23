import { connect } from 'react-redux';
import actions from '../actions';
import Dock from './Dock';

const mapDispatchToProps = dispatch => ({
    openMessageBox: () => dispatch(actions.openMessageBox()),
    setMessageBoxText: text => dispatch(actions.setMessageBoxText(text)),
});

export default connect(null, mapDispatchToProps)(Dock);
