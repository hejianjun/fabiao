import * as elasticService from '../services/elastic';

export default {
  namespace: 'elastic',
  state: {
    hits: [],
    type: null,
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { hits, total, page } }) {
      return { ...state, hits, total, page };
    },
  },
  effects: {
    *search({ payload: { page = 1, pathname} }, { put }) {
      const type = pathname.substr(1);
      const search = yield elasticService.search({ page, type });
      yield put({
        type: 'save',
        payload: {
          hits: search.hits.hits,
          type,
          total: parseInt(search.hits.total, 10),
          page: parseInt(page, 10),
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/SimpleType' || pathname === '/ComplexType' || pathname === '/CodeTable'
          || pathname === '/Element' || pathname === '/Item' || pathname === '/Rule') {
          dispatch({ type: 'search', payload: { ...query, pathname } });
        }
      });
    },
  },
};
