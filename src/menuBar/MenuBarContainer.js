import { connect } from 'react-redux';
import actions from '../actions';
import MenuBar from './MenuBar';

const mapDispatchToProps = dispatch => ({
    openMessageBox: () => dispatch(actions.openMessageBox()),
    setMessageBoxText: text => dispatch(actions.setMessageBoxText(text)),
});

export default connect(null, mapDispatchToProps)(MenuBar);
