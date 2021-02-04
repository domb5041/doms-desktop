import { connect } from 'react-redux';
import actions from '../actions';
import Dock from './Dock';

const mapDispatchToProps = dispatch => ({
    randomMessageBox: () => dispatch(actions.randomMessageBox()),
});

export default connect(null, mapDispatchToProps)(Dock);
