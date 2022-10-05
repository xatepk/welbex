export const filterData = (data, { namespace, condition, value }) => {
  if(!value) {
    return data;
  }

  const preparedValue = cellTypeUtil(/^\d+$/.test(value) ? parseInt(value) : value);

  return data.filter((item) => {
    let dataValue = item[namespace];
    if (namespace === 'date') {
      dataValue = new Date(dataValue).toLocaleDateString();
    }

    switch(condition) {
      case 'equals': {
        return cellTypeUtil(dataValue) === preparedValue;
      }
      case 'contains': {
        return dataValue.toString().indexOf(value) > -1;
      }
      case 'more': {
        return cellTypeUtil(dataValue) > preparedValue;
      }
      case 'less': {
        return cellTypeUtil(dataValue) < preparedValue;
      }
    }
  })


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

const cellTypeUtil = (value) => {
  if (typeof value === 'number') {
    return value;
  }
  return value.toLowerCase();
}

export const sortData = (data, { field, direction }) => {
  const sorted = [...data];
  switch(direction) {
    case 'ASC': {
      return sorted.sort((rowA, rowB) => cellTypeUtil(rowA[field]) > cellTypeUtil(rowB[field]) ? 1: -1);
    }
    case 'DESC': {
      return sorted.sort((rowA, rowB) => cellTypeUtil(rowA[field]) < cellTypeUtil(rowB[field]) ? 1: -1);
    }
    default: {
      return data;
    }
  }
}