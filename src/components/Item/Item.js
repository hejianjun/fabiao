import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Item.css';
import { PAGE_SIZE } from '../../constants';

function Item({ dispatch, list: dataSource, loading, total, page: current }) {
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/Item',
      query: { page },
    }));
  }
  const columns = [
    {
      title: '代码',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '说明',
      dataIndex: 'explain',
      key: 'explain',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '编号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '父级代码',
      dataIndex: 'parent_code',
      key: 'parent_code',
    },
  ];
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record._id}
        pagination={false}
        />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        onChange={pageChangeHandler}
        />
    </div>
  );
}

function mapStateToProps(state) {
  const { hits, total, page } = state.elastic;
  return {
    loading: state.loading.models.elastic,
    list: hits.map(function (hits) {
      return {
        ...hits._source,
        _id: hits._id,
      };
    }),
    total,
    page,
  };
}

export default connect(mapStateToProps)(Item);
