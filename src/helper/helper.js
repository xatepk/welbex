export const filter = (value, nameValue, contidionValue, tableData) => {
  // debugger;
  const lowerTerm = String(value).toLowerCase();
  let filterRows = [];
  if(contidionValue === 'equals') {
    filterRows = tableData
                .filter((item) => {
                  const lowerName = String(item[Object.keys(item)[nameValue]]).toLowerCase();
                  return lowerName === lowerTerm;
                });
  } else if(contidionValue === 'contains'){
    filterRows = tableData
                .filter((item) => {
                  const lowerName = String(item[Object.keys(item)[nameValue]]).toLowerCase();
                  return lowerName.indexOf(lowerTerm) > -1;
                });
  } else if (contidionValue === 'more') {
    filterRows = tableData
                .filter((item) => {
                  return item[Object.keys(item)[nameValue]] > value;
                });
  } else if (contidionValue === 'less') {
    filterRows = tableData
                .filter((item) => {
                  return item[Object.keys(item)[nameValue]] < value;
                });
  }

  return { filterRows }

}