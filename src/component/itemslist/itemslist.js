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
  console.log(history);
  const res = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { DeleteItemsReducer, UpdateItemsReducer, PostItemsReducer } = state;

  useEffect(() => {
    dispatch(GetItems(res.id));
  }, [DeleteItemsReducer, UpdateItemsReducer, PostItemsReducer]);

  const renderData = () => {
    const { GetItemsReducer } = state;
    const { loading, items, error } = GetItemsReducer;
    const ItemsLen = items.length;
    const { error: deleteError } = DeleteItemsReducer;
    const { error: postError } = PostItemsReducer;

    if (loading) {
      return 'Loading data .............';
    }
    if (ItemsLen > 0) {
      return items.map((el) => <Item key={el.id} item={el} />);
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
      {/* <button type="button" onClick={() => history.goBack()}>GoBack</button> */}
      <ItemForm />
      {renderData()}
    </main>
  );
};

export default ItemList;
