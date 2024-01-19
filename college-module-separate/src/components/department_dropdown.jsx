import React, { useState } from 'react';

const Dropdown2 = () => {
 const [selectedOption, setSelectedOption] = useState('Option 1');

 const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
 };

 return (
    <div className="dropdown2" display flex> 

      <select value={selectedOption} onChange={handleOptionChange}>
      
        <option value="Option 1">Dept 1</option>
        <option value="Option 2">Dept 2</option>
        <option value="Option 3">Dept 3</option>
      </select>
    </div>
 );
};

export default Dropdown2;