import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({currentValue, values, setOptionValue}) => (

  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.id}
          checked={currentValue.includes(value.id) ? true : false}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}
        ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionCheckboxes;