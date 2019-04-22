import { concat } from 'apollo-link';
import RtdbQueryLink from './rtdb/link';
import RtdbSubLink from './rtdb/subscriptionLink';
export var createRtdbLink = function (_a) {
    var database = _a.database;
    return concat(new RtdbQueryLink({ database: database }), new RtdbSubLink({ database: database }));
};
//# sourceMappingURL=index.js.map