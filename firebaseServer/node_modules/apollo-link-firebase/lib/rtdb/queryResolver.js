var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import * as has from 'lodash/has';
import { createQuery } from './utils';
var snapshotToArray = function (snapshot, typename) {
    var ret = [];
    snapshot.forEach(function (childSnapshot) {
        ret.push({
            __snapshot: childSnapshot,
            __typename: typename
        });
        return false;
    });
    return ret;
};
var queryResolver = function (fieldName, root, args, context, info) { return __awaiter(_this, void 0, void 0, function () {
    var directives, isLeaf, resultKey, database, exportVal, rootSnapshot, hasTypeDirective, currentSnapshot, leafReturn, query, typename_1, typename;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                directives = info.directives, isLeaf = info.isLeaf, resultKey = info.resultKey;
                database = context.database, exportVal = context.exportVal;
                rootSnapshot = root.rootSnapshot;
                hasTypeDirective = has(directives, 'type');
                currentSnapshot = root.__snapshot;
                if (isLeaf) {
                    leafReturn = null;
                    if (resultKey === '__typename') {
                        return [2, hasTypeDirective
                                ? directives.type.name
                                : root.__typename || null];
                    }
                    if (has(directives, 'key')) {
                        leafReturn = currentSnapshot.key;
                    }
                    else if (has(directives, 'val')) {
                        leafReturn = currentSnapshot.val();
                    }
                    else {
                        leafReturn = currentSnapshot.child(resultKey).val();
                    }
                    if (has(directives, 'export')) {
                        context.exportVal[resultKey] = leafReturn;
                    }
                    return [2, leafReturn];
                }
                if (!rootSnapshot) return [3, 1];
                currentSnapshot = rootSnapshot;
                return [3, 3];
            case 1:
                if (!has(directives, 'rtdbQuery')) return [3, 3];
                query = createQuery({
                    database: database,
                    directives: directives.rtdbQuery,
                    exportVal: exportVal,
                    snapshot: currentSnapshot
                });
                return [4, query.once('value')];
            case 2:
                currentSnapshot = _a.sent();
                _a.label = 3;
            case 3:
                if (!isLeaf && !has(directives, 'rtdbQuery') && !rootSnapshot) {
                    typename_1 = hasTypeDirective ? directives.type.name : null;
                    return [2, (has(directives, 'array'))
                            ? snapshotToArray(currentSnapshot.child(resultKey), typename_1)
                            : {
                                __snapshot: currentSnapshot.child(resultKey),
                                __typename: typename_1
                            }];
                }
                typename = hasTypeDirective ? directives.type.name : context.findType(directives);
                return [2, (has(directives, 'array'))
                        ? snapshotToArray(currentSnapshot, typename)
                        : {
                            __snapshot: currentSnapshot,
                            __typename: typename
                        }];
        }
    });
}); };
export default queryResolver;
//# sourceMappingURL=queryResolver.js.map