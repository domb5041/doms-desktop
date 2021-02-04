import { connect } from 'react-redux';
import actions from '../actions';
import MenuBar from './MenuBar';

const mapDispatchToProps = dispatch => ({
    randomMessageBox: () => dispatch(actions.randomMessageBox()),
});

export default connect(null, mapDispatchToProps)(MenuBar);
