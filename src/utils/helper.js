// prettify a date / time
// TAKES A JAVASCRIPT DATE OBJECT
export const prettifyDate = (jsDateObj) => {
  return jsDateObj === 'no date' ? 'no date' : jsDateObj.toString();
};

export const getShortDate = (str) => {
  const date = new Date(str);
  return date.toLocaleString('default');
};

//              2017-12-24T05:38:51.240Z
