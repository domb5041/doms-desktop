import _ from 'lodash';

const initialState = {
    messageBoxText: '',
    messageBoxIcon: 'fa-info-circle',
    messageBoxIsOpen: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_MESSAGE_BOX': {
            return _.assign({}, state, {
                messageBoxIsOpen: false,
            });
        }
        case 'SET_MESSAGE_BOX': {
            return _.assign({}, state, {
                messageBoxIsOpen: true,
                messageBoxText: action.text,
                messageBoxIcon: action.icon
            });
        }
        default:
            return state;
    }
}
