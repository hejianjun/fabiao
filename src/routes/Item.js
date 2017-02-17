import React from 'react';
import { connect } from 'dva';
import styles from './Item.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ItemComponent from '../components/Item/Item';

function Item() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ItemComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(Item);
