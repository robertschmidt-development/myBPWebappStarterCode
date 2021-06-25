import React from 'react'

const TableSearch = (items, keys, value = '') => {
  const [searchValue, setSearchValue] = React.useState(value);

  const writeCondition = (keys) => {
    let str = ''
    for (let i = 0; i < keys.length; i++) {
        str += 'el.' + keys[i] + '.includes(searchValue)'
        if(i < keys.length - 1) str += ' || '
    }
    return str
  }

  const filteredItems = React.useMemo(() => {
    let filterableItems = [...items];
    if (searchValue !== '') filterableItems = items.filter( el => 
        eval(writeCondition(keys))
        // el.key1.includes(searchValues) || el.key2.includes(searchValue) || ...
        ) 
    return filterableItems;
  }, [items, searchValue, keys]);

  const requestSearch = (value) => {
    setSearchValue(value);
  };
  return { itemsfiltered: filteredItems, requestSearch, searchValue };
};

export default TableSearch