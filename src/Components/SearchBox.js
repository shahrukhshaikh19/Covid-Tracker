import React from 'react';

const SearchBox =({SearchItem})=>{
    return(
    <div>
        <input onChange={SearchItem} className="pa3 ba -green bg-light-gray" type='search' placeholder="Enter Country Name" />
    </div>
    )
}

export default SearchBox;