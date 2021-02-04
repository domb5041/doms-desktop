import { connect } from 'react-redux';
import actions from '../actions';
import ListView from './ListView';

const mapDispatchToProps = dispatch => ({
    randomMessageBox: () => dispatch(actions.randomMessageBox()),
});

export default connect(null, mapDispatchToProps)(ListView);
