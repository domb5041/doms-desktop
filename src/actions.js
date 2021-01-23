export default {
    closeMessageBox: () => ({
        type: 'CLOSE_MESSAGE_BOX',
    }),
    openMessageBox: () => ({
        type: 'OPEN_MESSAGE_BOX',
    }),
    setMessageBoxText: text => ({
        type: 'SET_MESSAGE_BOX_TEXT',
        text: text,
    }),
};
