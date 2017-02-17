import React from 'react';
import { connect } from 'dva';
import styles from './ComplexType.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ComplexTypeComponent from '../components/ComplexType/ComplexType';

function ComplexType() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ComplexTypeComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(ComplexType);
