import React, { useEffect, useState } from 'react';

import { columnsNames, rowItemMapping } from '../constants/constants';

export const Filter = ({ doFilter }) => {
  const [value, setValue] = useState('');
  const [namespace, setNamespace] = useState('');
  const [condition, setCondition] = useState('');

  useEffect(() => {
    doFilter({ value, namespace, condition });
  },[value, namespace, condition])

  return(
    <div className="filter">
      <div className="input-field col s12">
      <select defaultValue={namespace}
              className="browser-default"
              required
              onChange={(e) => setNamespace(e.target.value)}>
        <option value="" disabled>Выбор колонки</option>
        {columnsNames.map((name, i) => <option key={i} value={rowItemMapping[i === 0 ? 4 : i]}>{name}</option>)}
      </select>
      </div>
      <div className="input-field col s12">
      <select defaultValue={condition}
              className="browser-default"
              required
              onChange={(e) => setCondition(e.target.value)}>
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