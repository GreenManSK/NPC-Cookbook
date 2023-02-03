import React from 'react';

export const useDebouncedValue = <a>( value: a, waitInMs: number ) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    React.useEffect(() => {
        const id = setTimeout(() => setDebouncedValue(value), waitInMs);
        return () => clearTimeout(id);
    }, [value, waitInMs]);
    return debouncedValue;
};
