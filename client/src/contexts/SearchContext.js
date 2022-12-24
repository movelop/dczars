import { createContext, useReducer, useEffect } from 'react';
const initialDate = JSON.parse(localStorage.getItem('dates'));
const newEndDate = new Date();
newEndDate.setDate(newEndDate.getDate() + 1);
newEndDate.setHours(12, 59, 0, 0);
const INITIAL_STATE = {
    dates: initialDate
      ? [
          {
            startDate:
              new Date(initialDate[0]?.startDate) > new Date()
                ? new Date(initialDate[0]?.startDate)
                : new Date(),
            endDate:
              new Date(initialDate[0]?.endDate) > new Date()
                ? new Date(initialDate[0]?.endDate)
                : new Date(newEndDate),
            key: "selection",
          },
        ]
      : [
          {
            startDate: new Date(),
            endDate: new Date(newEndDate),
            key: "selection",
          },
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