export const formatDate = (date, format) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const map = {
        www: dayOfWeek[date.getDay()],
        mmm: months[date.getMonth()],
        dd: date.getDate(),
        hh: date.getHours(),
        mm: date.getMinutes(),
    };
    const formattedDate = format.replace(
        /www|dd|mmm|hh|mm/gi,
        matched => map[matched]
    );
    return formattedDate;
};
