import React from 'react'

const TableSearch = (items, keys, value = '') => {
  const [searchValue, setSearchValue] = React.useState(value)

  const filteredItems = React.useMemo(() => {
    let filterableItems = [...items];

    if (searchValue !== '') filterableItems = items.filter( el => 
      keys.some(key => el[key].toUpperCase().includes(searchValue.toUpperCase()))
      ) 
    return filterableItems;
  }, [items, searchValue, keys]);

  const requestSearch = (value) => {
    setSearchValue(value);
  };
  return { itemsfiltered: filteredItems, requestSearch, searchValue };
};

export default TableSearch