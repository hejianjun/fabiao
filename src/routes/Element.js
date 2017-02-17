import React from 'react';
import { connect } from 'dva';
import styles from './Element.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ElementComponent from '../components/Element/Element';

function Element() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ElementComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(Element);
