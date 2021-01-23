import { connect } from 'react-redux';
import MessageBox from './MessageBox';
import actions from '../actions';

const mapStateToProps = state => ({
    message: state.messageBoxText,
    isOpen: state.messageBoxIsOpen,
});

const mapDispatchToProps = dispatch => ({
    close: () => dispatch(actions.closeMessageBox()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
