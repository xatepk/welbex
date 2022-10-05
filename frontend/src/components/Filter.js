import React, { useEffect, useState } from 'react';
import { columnName } from '../data/data';

export const Filter = ({ doFilter }) => {
  const [value, setValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [contidionValue, setContidionValue] = useState('');

  useEffect(() => {
    doFilter(value, nameValue, contidionValue);
  },[value, nameValue, contidionValue])


  return(
    <div className="filter">
      <div className="input-field col s12">
      <select defaultValue={nameValue}
              className="browser-default"
              required
              onChange={(e) => setNameValue(e.target.value)}>
        <option value="" disabled>Выбор колонки</option>
        {columnName.map((name, i) => <option key={i} value={i}>{name}</option>)}
      </select>
      </div>
      <div className="input-field col s12">
      <select defaultValue={contidionValue}
              className="browser-default"
              required
              onChange={(e) => setContidionValue(e.target.value)}>
        <option value="" disabled>Выбор условия</option>
        <option value="equals">Равно</option>
        <option value="contains">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </select>
      </div>
      <div className="input-field col s6 filter__button">
        <input placeholder="Значение"
            id="meaning"
            type="text"
            className="validate"
            value={value}
            onChange={(e) => setValue(e.target.value)}>
        </input>
      </div>
    </div>


  )
}