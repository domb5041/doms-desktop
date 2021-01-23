import { connect } from 'react-redux';
import actions from '../actions';
import ListView from './ListView';

const mapDispatchToProps = dispatch => ({
    openMessageBox: () => dispatch(actions.openMessageBox()),
    setMessageBoxText: text => dispatch(actions.setMessageBoxText(text)),
});

export default connect(null, mapDispatchToProps)(ListView);
