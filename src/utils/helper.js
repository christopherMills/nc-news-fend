// prettify a date / time
export const prettifyDate = (jsDateObj) => {
  return jsDateObj === 'no date' ? 'no date' : jsDateObj.toString();
};

// get a shorter date
export const getShortDate = (str) => {
  const date = new Date(str);
  return date.toLocaleString('default');
};
