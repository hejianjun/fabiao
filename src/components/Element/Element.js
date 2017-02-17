import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Element.css';
import { PAGE_SIZE } from '../../constants';

function Element({ dispatch, list: dataSource, loading, total, page: current }) {
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/Element',
      query: { page },
    }));
  }
  const columns = [
    {
      title: '案件类型',
      dataIndex: 'ajlx',
      key: 'ajlx',
    },
    {
      title: '节点名',
      dataIndex: 'cname',
      key: 'cname',
    },
    {
      title: '数据类型',
      dataIndex: 'data_type',
      key: 'data_type',
    },
    {
      title: '说明',
      dataIndex: 'explain',
      key: 'explain',
    },
    {
      title: '标识',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '序号',
      dataIndex: 'sequence',
      key: 'sequence',
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

export default connect(mapStateToProps)(Element);
