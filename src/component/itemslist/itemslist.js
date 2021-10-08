/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Item from '../Items';
import { GetItems } from '../../redux/action/todoAction';
import ItemForm from '../ItemForm/itemForm';
import styles from './itemlist.module.css';

const ItemList = () => {
  const history = useHistory();
  const res = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    DeleteItemsReducer, UpdateItemsReducer, PostItemsReducer, GetItemsReducer,
  } = state;
  const { loading, items, error } = GetItemsReducer;
  useEffect(() => {
    dispatch(GetItems(res.id));
  }, [DeleteItemsReducer, UpdateItemsReducer, PostItemsReducer]);

  const renderItemList = () => {
    const { error: deleteError } = DeleteItemsReducer;
    const { error: postError } = PostItemsReducer;

    if (loading) {
      return 'Loading data .............';
    }
    if (items) {
      return (items.map((el) => <Item key={el.id} item={el} />));
    }
    if (deleteError) {
      return `${deleteError}`;
    }
    if (postError) {
      return `${postError}`;
    }

    return error;
  };

  return (
    <main className={styles.main}>
      <button type="button" onClick={() => history.goBack()}>GoBack</button>
      <ItemForm />
      {renderItemList()}
    </main>
  );
};

export default ItemList;
