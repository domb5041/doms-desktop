const randomErrors = [
    {
        text: 'Simulation boundary breach - commencing incineration.',
        icon: 'fas fa-fire-extinguisher',
    },
    { text: 'UNDER CONSTRUCTION', icon: 'fas fa-tools' },
    { text: "This doesn't do anything yet.", icon: 'fas fa-cat' },
    { text: 'FATAL ERROR', icon: 'fas fa-skull-crossbones' },
    { text: 'Closed for cleaning', icon: 'fas fa-soap' },
];

export default {
    closeMessageBox: () => ({
        type: 'CLOSE_MESSAGE_BOX',
    }),
    setMessageBox: (text, icon) => ({
        type: 'SET_MESSAGE_BOX',
        text: text,
        icon: icon || 'fas fa-info-circle',
    }),
    randomMessageBox: () => {
        const i = Math.floor(Math.random() * randomErrors.length);
        return {
            type: 'SET_MESSAGE_BOX',
            text: randomErrors[i].text,
            icon: randomErrors[i].icon,
        };
    },
};
