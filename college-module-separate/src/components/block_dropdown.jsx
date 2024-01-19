import React, { useState } from 'react';

const Dropdown5 = () => {
 const [selectedOption, setSelectedOption] = useState('Option 1');

 const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
 };

 return (
    <div className="dropdown3" display flex> 

      <select value={selectedOption} onChange={handleOptionChange}>
      
        <option value="Option 1">Block ID #1</option>
        <option value="Option 2">Block ID #2</option>
        <option value="Option 3">Block ID #3</option>
      </select>
    </div>
 );
};

export default Dropdown5;