import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Rule.css';
import { PAGE_SIZE } from '../../constants';

function Rule({ dispatch, list: dataSource, loading, total, page: current }) {
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/Rule',
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
      title: '数据校验',
      dataIndex: 'data_check',
      key: 'data_check',
    },
    {
      title: '说明',
      dataIndex: 'explain',
      key: 'explain',
    },
    {
      title: '逻辑校验',
      dataIndex: 'logic_check',
      key: 'logic_check',
    },
    {
      title: '选择列表',
      dataIndex: 'map',
      key: 'map',
    },
    {
      title: '非空',
      dataIndex: 'not_null',
      key: 'not_null',
    },
    {
      title: '规则编号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      key: 'remarks',
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

export default connect(mapStateToProps)(Rule);
