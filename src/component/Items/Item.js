import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DeleteItem, UpdateItem } from '../../redux/action/todoAction';
import styles from './Item.module.css';

const Item = ({ item }) => {
  const res = useParams();
  const { todoId } = res;
  const dispatch = useDispatch();
  const {
    name, description, priority, done, id,
  } = item;
  const [selected, setSelected] = useState(priority);
  const [Done, setDone] = useState(done);
  const [Name, setName] = useState(name);
  const [Description, setDescription] = useState(description);
  const obj = {
    todo_id: todoId,
    name: Name,
    description: Description,
    priority: selected,
    done: Done,
  };
  const EditItem = () => {
    const inputs = document.getElementsByClassName(id);
    inputs[0].disabled = false;
    inputs[1].disabled = false;
    inputs[2].disabled = false;
    inputs[3].disabled = false;
  };

  const True = () => {
    if (Done) {
      return true;
    }
    return '';
  };

  return (
    <div className={styles.card}>
      <span>{id}</span>
      <input className={id} type="checkbox" checked={True()} disabled value={Done} onChange={() => setDone(!Done)} />
      <input className={id} type="text" value={Name} disabled onChange={(e) => setName(e.target.value)} />
      <input className={id} type="text" value={Description} disabled onChange={(e) => setDescription(e.target.value)} />
      <select className={id} type="text" value={selected} disabled onChange={(e) => setSelected(e.target.value)}>
        <option disabled defaultValue hidden>{selected}</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="button" onClick={() => EditItem()}>Edit</button>
      <button type="button" onClick={() => dispatch(UpdateItem(todoId, id, obj))}>Save</button>
      <button type="button" onClick={() => dispatch(DeleteItem(todoId, id))}>Delete</button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Item;
