import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users.js';
import SimpleType from "./routes/SimpleType.js";
import ComplexType from "./routes/ComplexType.js";
import CodeTable from "./routes/CodeTable.js";
import Element from "./routes/Element.js";
import Item from "./routes/Item.js";
import Rule from "./routes/Rule.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/SimpleType" component={SimpleType} />
      <Route path="/ComplexType" component={ComplexType} />
      <Route path="/CodeTable" component={CodeTable} />
      <Route path="/Element" component={Element} />
      <Route path="/Item" component={Item} />
      <Route path="/Rule" component={Rule} />
    </Router>
  );
}

export default RouterConfig;
