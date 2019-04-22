import * as mapValues from 'lodash/mapValues';
import * as trimStart from 'lodash/trimStart';
import * as isFunction from 'lodash/isFunction';
import * as isUndefined from 'lodash/isUndefined';
export var createQuery = function (_a) {
    var database = _a.database, directives = _a.directives, exportVal = _a.exportVal, snapshot = _a.snapshot;
    directives = mapValues(directives, function (val) {
        if (isFunction(val)) {
            return val({ root: snapshot, exportVal: exportVal });
        }
        if (val.startsWith && val.startsWith('$export$')) {
            return exportVal[trimStart(val, '$export$')];
        }
        return val;
    });
    var query = database.ref(directives.ref);
    if (directives.orderByChild) {
        query = query.orderByChild(directives.orderByChild);
    }
    else if (directives.orderByKey) {
        query = query.orderByKey();
    }
    else if (directives.orderByValue) {
        query = query.orderByValue();
    }
    if (!isUndefined(directives.limitToFirst)) {
        query = query.limitToFirst(directives.limitToFirst);
    }
    if (!isUndefined(directives.limitToLast)) {
        query = query.limitToLast(directives.limitToLast);
    }
    if (!isUndefined(directives.startAt)) {
        query = query.startAt(directives.startAt);
    }
    if (!isUndefined(directives.endAt)) {
        query = query.endAt(directives.endAt);
    }
    if (!isUndefined(directives.equalTo)) {
        query = query.equalTo(directives.equalTo);
    }
    return query;
};
//# sourceMappingURL=utils.js.map