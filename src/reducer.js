import _ from 'lodash';

const initialState = {
    messageBoxText: 'from redux',
    messageBoxIsOpen: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_MESSAGE_BOX': {
            return _.assign({}, state, {
                messageBoxIsOpen: false,
            });
        }
        default:
            return state;
    }
}
