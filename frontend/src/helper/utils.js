export const filter = (value, nameValue, contidionValue, tableData) => {
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

export const switchDirection = (direction) => {
  switch(direction) {
    case 'ASC': {
      return 'DESC';
    }
    case 'DESC': {
      return 'NONE';
    }
    case 'NONE': {
      return 'ASC';
    }
  }
}

const typeUtil = (value) => {
  if (typeof value === 'number') {
    return value;
  }
  return value.toLowerCase();
}

export const sortData = (data, { field, direction }) => {
  const sorted = [...data];
  switch(direction) {
    case 'ASC': {
      return sorted.sort((rowA, rowB) => typeUtil(rowA[field]) > typeUtil(rowB[field]) ? 1: -1);
    }
    case 'DESC': {
      return sorted.sort((rowA, rowB) => typeUtil(rowA[field]) < typeUtil(rowB[field]) ? 1: -1);
    }
    default: {
      return data;
    }
  }
}