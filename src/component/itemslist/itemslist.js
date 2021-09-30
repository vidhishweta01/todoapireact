import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetItems } from '../../redux/action/todoAction';
import Item from '../Items';
import ItemForm from '../ItemForm/itemForm';

const ItemList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.GetItemsReducer);

  useEffect(() => {
    dispatch(GetItems());
  }, []);

  const renderItemList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const Items = todoReducer.items;
      return (Items.map((item) => <Item key={item.id} item={item} />));
    }
    return <h1>cannot get list try again</h1>;
  };
  return (
    <div>
      <ItemForm />
      {renderItemList()}
    </div>
  );
};

export default ItemList;
