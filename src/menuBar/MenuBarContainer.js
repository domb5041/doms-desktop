import { connect } from 'react-redux';
import actions from '../actions';
import MenuBar from './MenuBar';

const mapDispatchToProps = dispatch => ({
    setMessageBox: text => dispatch(actions.setMessageBox(text)),
});

export default connect(null, mapDispatchToProps)(MenuBar);
