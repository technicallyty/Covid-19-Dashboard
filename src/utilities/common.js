const formatDate = (date) => {

  date = date.toString();

  var year = date.substring(0,4);
  var month = date.substring(4,6);
  var day = date.substring(6,8);
  var theDate = new Date(year, month-1, day);

  var theYear = theDate.getFullYear();
  var theMonth = theDate.getMonth();
  var theDay = theDate.getDay();

  return theMonth + "/" + theDay + "/" + theYear;
}

export {formatDate};