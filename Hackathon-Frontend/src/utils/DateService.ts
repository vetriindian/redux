export function numberToTime(time?: number): string {
    if (time === null || time === undefined) {
        return '';
    }
    const prefixZero = (timeStamp: number): string => {
        return `${timeStamp < 10 ? `0${timeStamp}` : timeStamp}`;
    };
    let hours = Math.floor((time * 60) / 60);
    const session = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    const minutes = Math.floor((time * 60) % 60);
    return `${prefixZero(hours === 0 ? 12 : hours)} : ${prefixZero(minutes)} ${session}`;
}
