import { PAGE_SIZE } from '../constants';
import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
    host: 'localhost:8000/elastic',
    log: 'trace'
});

export function search({ page, type }) {
    return client.search({
        index: 'poi',
        type,
        size: PAGE_SIZE,
        from: PAGE_SIZE * (page - 1),
    });
}
