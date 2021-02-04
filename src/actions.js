
const randomErrors = [
    {text: 'a', icon: 'fas fa-star'},
    {text: 'b', icon: 'fas fa-star'},
    {text: 'c', icon: 'fas fa-star'},
    {text: 'd', icon: 'fas fa-star'},
    {text: 'e', icon: 'fas fa-star'},
]

export default {
    closeMessageBox: () => ({
        type: 'CLOSE_MESSAGE_BOX',
    }),
    setMessageBox: (text, icon) => ({
        type: 'SET_MESSAGE_BOX',
        text: text,
        icon: icon || 'fas fa-info-circle'
    }),
    randomMessageBox: (i) => ({
        type: 'SET_MESSAGE_BOX',
        text: randomErrors[i].text,
        icon: randomErrors[i].icon
    }),
};
