import React, { useState, useContext } from 'react';
import { BsFillCalendar2EventFill, BsFillPersonFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

import { SearchContext } from '../../contexts/SearchContext';
import './HeadingSearch.css';

const HeadingSearch = () => {
    const { search, dates, options } = useContext(SearchContext);  
    const [openDate, setOpenDate] = useState(false);
    const [searchDates, setSearchDates] = useState(dates);
    const [opensearchOptions, setOpensearchOptions] = useState(false);
    const [searchOptions, setSearchOptions] = useState(options);
    const navigate = useNavigate();
    const location = useLocation();

    const handlesearchOptions = (name, operation) => {
        setSearchOptions((prev) => {
        return {
            ...prev,
            [name]: operation === 'increment' ? searchOptions[name] + 1 : searchOptions[name] - 1
        }
        })
    }

    const handleSearch = () => {
        if(location.pathname !== '/booking') {
            navigate('/booking');
        }
        search( searchDates, searchOptions);
        
    }
    
    return (
        <div className="headerSearchContainer">
            <div className="headerSearchItem" >
                <BsFillCalendar2EventFill className='headerIcon' />
                <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                {`${format(new Date(searchDates[0].startDate), "dd/MM/yyyy")} to ${format(new Date(searchDates[0].endDate), "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                    <div className="date" onMouseLeave={() => setOpenDate(false)}>
                        <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setSearchDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={searchDates}
                        minDate={new Date()}
                        />
                    </div>
                )}
            </div>
            <div className="headerSearchItem">
                <BsFillPersonFill className='headerIcon' />
                <span className="headerSearchText" onClick={() => setOpensearchOptions(!opensearchOptions)}>
                {`${searchOptions.adult} adult · ${searchOptions.children} children · ${searchOptions.rooms} room`}
                </span>
                {opensearchOptions && (
                    <div className="searchOptions" onMouseLeave={() => setOpensearchOptions(false)}>
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button
                                    disabled={searchOptions.adult <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handlesearchOptions('adult', 'decrement')}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">
                                    {searchOptions.adult}
                                </span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handlesearchOptions('adult', 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button
                                    disabled={searchOptions.children <= 0}
                                    className="optionCounterButton"
                                    onClick={() => handlesearchOptions('children', 'decrement')}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">
                                    {searchOptions.children}
                                </span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handlesearchOptions('children', 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button
                                    disabled={searchOptions.rooms <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handlesearchOptions('rooms', 'decrement')}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">
                                    {searchOptions.rooms}
                                </span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handlesearchOptions('rooms', 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                )} 
            </div>
            <div className="headerSearchItem">
                <button className="headingButton" onClick={handleSearch}>Check Availability</button>
            </div>
        </div>   
    )
}

export default HeadingSearch