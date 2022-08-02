import React from 'react'
import '../App.css';

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Date = () => {
    return (
      <div>
        <DatePickerComponent placeholder="Date of Birth" required></DatePickerComponent>
      </div>
    );
  }
export default Date;
