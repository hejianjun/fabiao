import React from 'react';
import { connect } from 'dva';
import styles from './SimpleType.css';
import MainLayout from '../components/MainLayout/MainLayout';
import SimpleTypeComponent from '../components/SimpleType/SimpleType';

function SimpleType() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <SimpleTypeComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(SimpleType);
