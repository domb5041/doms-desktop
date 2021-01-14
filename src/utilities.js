export const formatDate = (timestamp, format) => {
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
    const date = timestamp ? new Date(timestamp * 1000) : new Date();
    const map = {
        www: dayOfWeek[date.getDay()],
        mmm: months[date.getMonth()],
        dd: date.getDate(),
        hh: date.getHours(),
        mm:
            date.getMinutes() < 10
                ? '0' + date.getMinutes()
                : date.getMinutes(),
    };
    const formattedDate = format.replace(
        /www|dd|mmm|hh|mm/gi,
        matched => map[matched]
    );
    return formattedDate;
};
