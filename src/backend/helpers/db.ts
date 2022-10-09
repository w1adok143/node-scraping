import {Query} from "buildmsql";

const connect = () => {
    const query = new Query();
    const queryPool = query.createPool({
        "host": "localhost",
        "database": "web_scraping",
        "user": "root",
        "password": "",
        "charset": "utf8",
        "compress": true,
        "multipleStatements": true,
        "namedPlaceholders": true,
        "dateStrings": true
    });

    return {
        query: query,
        queryPool: queryPool
    }
}

export default {connect};