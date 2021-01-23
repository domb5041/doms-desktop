import _ from 'lodash';

const initialState = {
    messageBoxText: '',
    messageBoxIsOpen: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_MESSAGE_BOX': {
            return _.assign({}, state, {
                messageBoxIsOpen: false,
            });
        }
        case 'OPEN_MESSAGE_BOX': {
            return _.assign({}, state, {
                messageBoxIsOpen: true,
            });
        }
        case 'SET_MESSAGE_BOX_TEXT': {
            return _.assign({}, state, {
                messageBoxText: action.text,
            });
        }
        default:
            return state;
    }
}
