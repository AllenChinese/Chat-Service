export default function currentTime() {
  var cDate = new Date();
  return (
    cDate.getFullYear() +
    '.' +
    cDate.getMonth() +
    '.' +
    cDate.getDay() +
    ' ' +
    cDate.getHours() +
    ':' +
    cDate.getMinutes() +
    ':' +
    cDate.getSeconds()
  );
}
