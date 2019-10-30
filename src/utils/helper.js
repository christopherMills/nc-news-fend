// prettify a date / time
// TAKES A JAVASCRIPT DATE OBJECT
export const prettifyDate = (jsDateObj) => {
  return jsDateObj === 'no date' ? jsDateObj : String(jsDateObj);
};
