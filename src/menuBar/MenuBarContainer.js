import { connect } from 'react-redux';
import actions from '../actions';
import MenuBar from './MenuBar';

const mapDispatchToProps = dispatch => ({
    randomMessageBox: randomNumber =>
        dispatch(actions.randomMessageBox(randomNumber)),
});

export default connect(null, mapDispatchToProps)(MenuBar);
