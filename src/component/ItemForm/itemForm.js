import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostItems } from '../../redux/action/todoAction';
import styles from './itemForm.module.css';

const ItemForm = () => {
  const res = useParams();
  console.log(res); // eslint-disable-line
  const dispatch = useDispatch();
  const [name, SetName] = useState('');
  const [description, SetDescription] = useState('');
  const [proirity, setProirity] = useState('');
  const obj = {
    todo_id: res.id,
    name,
    description,
    proirity,
  };
  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(PostItems(res.id, obj));
          SetName('');
          SetDescription('');
          setProirity('');
        }}
      >
        <div className={styles.w100}>
          <label htmlFor="Name">
            Name:
            <input placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)} id="name" className={styles.w100} />
          </label>

        </div>
        <div className={styles.w100}>
          <label htmlFor="Description">
            Description:
            <input placeholder="Description" value={description} onChange={(e) => SetDescription(e.target.value)} id="Description" className={styles.w100} />
          </label>
        </div>
        <div className={styles.w100}>
          <label htmlFor="Proirity">
            proirity:
            <select
              value={proirity}
              onChange={(e) => setProirity(e.target.value)}
              className={styles.w100}
            >
              <option disabled defaultValue hidden>Proirity</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
        </div>

        <button className={`${styles.btn} ${styles.w100}`} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ItemForm;
