import React from 'react';
import { connect } from 'dva';
import styles from './Rule.css';
import MainLayout from '../components/MainLayout/MainLayout';
import RuleComponent from '../components/Rule/Rule';

function Rule() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <RuleComponent/>
      </div>
    </MainLayout>
  );
}

export default connect()(Rule);
