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
    const leadingZero = d => {
        if (d < 10) return '0' + d;
        return d;
    };
    const date = timestamp ? new Date(timestamp * 1000) : new Date();
    const map = {
        www: dayOfWeek[date.getDay()],
        mmm: months[date.getMonth()],
        yyyy: date.getFullYear(),
        dd: date.getDate(),
        hh: leadingZero(date.getHours()),
        mm: leadingZero(date.getMinutes()),
    };
    const formattedDate = format.replace(
        /www|dd|mmm|hh|mm|yyyy/gi,
        matched => map[matched]
    );
    return formattedDate;
};
