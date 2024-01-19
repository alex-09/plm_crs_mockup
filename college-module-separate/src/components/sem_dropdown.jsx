import React, { useState } from 'react';

const Dropdown = () => {
 const [selectedOption, setSelectedOption] = useState('Option 1');

 const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
 };

 return (
    <div className="dropdown" display flex> 

      <select value={selectedOption} onChange={handleOptionChange}>
      
        <option value="Option 1">1st, 2023 - 2024</option>
        <option value="Option 2">2nd, 2023 - 2024</option>
        <option value="Option 3">Summer, 2023 - 2024</option>
      </select>
    </div>
 );
};

export default Dropdown;