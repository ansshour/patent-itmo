import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./MyDatePicker.css";
import calendar from "./res/calendar.svg"

export const MyDatePicker = ({ placeholder, date, setDate }) => {

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className="datepicker-container">
            <label className="placeholder-datePicker">{placeholder}</label>
            <button className="custom-input-datepicker" onClick={onClick} ref={ref}>
                <span className="datepicker_value">
                    {value}
                </span>
            </button>
            <img src={calendar} alt="calendar" className="datepicker-calendar" />
        </div>
    ));

    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const locale = {
        localize: {
            day: n => days[n],
            month: n => months[n]
        },
        formatLong: {
            date: () => 'mm.dd.yyyy'
        }
    }


    return (
        <DatePicker
            locale={locale}
            selected={date}
            onChange={(date) => setDate(date)}
            customInput={<ExampleCustomInput />}
            dateFormat='dd.MM.yyyy'
        />
    )
}