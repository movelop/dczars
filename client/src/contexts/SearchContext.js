import { createContext, useReducer, useEffect } from 'react';
const initialDate = JSON.parse(localStorage.getItem('dates'))
const newDate = new Date();

// Set the time components to 0
newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0);

// Add one day to the date
newDate.setDate(newDate.getDate() + 1);

// Get the timestamp for the date
const newEndDate = newDate.getTime();
const INITIAL_STATE = {
    dates: initialDate ? [
        {
            startDate: new Date(initialDate[0]?.startDate) > new Date() ? new Date(initialDate[0]?.startDate): new Date() ,
            endDate: new Date(initialDate[0]?.endDate) ,
            key: 'selection'
        }
    ] : [
        {
            startDate: new Date(),
            endDate: new Date(newEndDate),
            key: 'selection'
        }
    ],
    options: JSON.parse(localStorage.getItem('options')) || {
        adults: 1,
        children: 0,
        rooms: 1,
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children}) => {
    const [ state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('dates', JSON.stringify(state.dates));
    }, [state.dates]);

    useEffect(() => {
        localStorage.setItem('options', JSON.stringify(state.options));
    }, [state.options]);
    

    const search = (dates, options) => {
        dispatch({ type: "NEW_SEARCH", payload: { dates, options} });
    }

    return (
        <SearchContext.Provider
            value={{
                dates: state.dates,
                options: state.options,
                search,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}