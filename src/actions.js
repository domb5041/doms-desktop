export default {
    closeMessageBox: () => ({
        type: 'CLOSE_MESSAGE_BOX',
    }),
    setMessageBox: (text, icon) => ({
        type: 'SET_MESSAGE_BOX',
        text: text,
        icon: icon || 'fas fa-info-circle'
    }),
};
