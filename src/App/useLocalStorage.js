import { useState } from "react";

function useLocalStorate(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }
    const [item, setItem] = useState(parsedItem);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    //Los custome hooks deben retornar la estructura que nosotros queremos trabajar.
    return [item, saveItem]
}

export { useLocalStorate };