const processCSV = (str, delim = ",") => {
  const headers = str.slice(0, str.indexOf("\r\n")).split(delim);
  const rows = str.slice(str.indexOf("\r\n") + 1).split("\r\n");

  const newArray = rows.map((row) => {
    const values = row.split(delim);
    const eachObject = headers.reduce((obj, header, i) => {
      obj[header] = values[i];
      return obj;
    }, {});
    return eachObject;
  });

  return newArray;
};

export const data = fetch("./foodData.csv")
  .then((response) => response.text())
  .then((text) => processCSV(text));
