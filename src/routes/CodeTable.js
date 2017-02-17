import React from 'react';
import { connect } from 'dva';
import styles from './SimpleType.css';
import MainLayout from '../components/MainLayout/MainLayout';
import CodeTableComponent from '../components/CodeTable/CodeTable';

function CodeTable() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <CodeTableComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(CodeTable);
