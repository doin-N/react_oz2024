import { useEffect, useState } from "react";

export const useDebounce = (value, dalay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(value)
      }, dalay);
    
      return () => {
        clearTimeout(handler)
      }
    }, [value, dalay])

    return debounceValue
    
}
