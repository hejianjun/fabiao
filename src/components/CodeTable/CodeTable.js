import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './CodeTable.css';
import { PAGE_SIZE } from '../../constants';

function CodeTable({ dispatch, list: dataSource, loading, total, page: current }) {
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/CodeTable',
      query: { page },
    }));
  }
  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '说明',
      dataIndex: 'explain',
      key: 'explain',
    },
     {
      title: '编号',
      dataIndex: 'number',
      key: 'number',
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

export default connect(mapStateToProps)(CodeTable);
