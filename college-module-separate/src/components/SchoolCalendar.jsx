import { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/index.css';

const SchoolCalendar = ({selectedDates}) => {
    // State to manage the selected date
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Array of dates to mark on the calendar
    const markedDates = selectedDates;

    // Function to generate class names for marked dates
    const tileClassName = ({ date }) => {
        if (markedDates.some((markedDate) => date.toDateString() === markedDate.toDateString())) {
        return 'active-date-bg text-white';
        }
        return '';
    };

  return (
    <div className="flex items-center justify-center">
      <Calendar onChange={setSelectedDate} value={selectedDate} tileClassName={tileClassName}/>
    </div>
  );
};

// PropTypes for prop validation
SchoolCalendar.propTypes = {
    // selectedDates: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedDates: PropTypes.arrayOf(PropTypes.string),
};

export default SchoolCalendar;
