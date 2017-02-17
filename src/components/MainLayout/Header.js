import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
      >
      <Menu.Item key="/SimpleType">
        <Link to="/SimpleType"><Icon type="bars" />基本数据类型</Link>
      </Menu.Item>
      <Menu.Item key="/ComplexType">
        <Link to="/ComplexType"><Icon type="bars" />案件节点</Link>
      </Menu.Item>
      <Menu.Item key="/CodeTable">
        <Link to="/CodeTable"><Icon type="bars" />代码表</Link>
      </Menu.Item>
      <Menu.Item key="/Element">
        <Link to="/Element"><Icon type="bars" />案件节点子项</Link>
      </Menu.Item><Menu.Item key="/Item">
        <Link to="/Item"><Icon type="bars" />代码子项</Link>
      </Menu.Item>
      <Menu.Item key="/Rule">
        <Link to="/Rule"><Icon type="bars" />规则</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />主页</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva">dva</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
