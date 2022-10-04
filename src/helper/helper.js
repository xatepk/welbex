export const filter = (value, nameValue, contidionValue, tableData) => {
  const lowerTerm = value.toLowerCase();
  let filterRows = [];
  if(contidionValue === 'equals') {
    filterRows = tableData
                .filter((item) => {
                  const lowerName = String(item[nameValue]).toLowerCase();
                  return lowerName === lowerTerm;
                });
  } else if(contidionValue === 'contains'){
    filterRows = tableData
                .filter((item) => {
                  const lowerName = String(item[nameValue]).toLowerCase();
                  return lowerName.indexOf(lowerTerm) > -1;
                });
  } else if (contidionValue === 'more') {
    filterRows = tableData
                .filter((item) => {
                  return item[nameValue] > value;
                });
  } else if (contidionValue === 'less') {
    filterRows = tableData
                .filter((item) => {
                  return item[nameValue] < value;
                });
  }

  return { filterRows }

}