import { connect } from 'react-redux';
import actions from '../actions';
import ListView from './ListView';

const mapDispatchToProps = dispatch => ({
    setMessageBox: text => dispatch(actions.setMessageBox(text)),
});

export default connect(null, mapDispatchToProps)(ListView);
