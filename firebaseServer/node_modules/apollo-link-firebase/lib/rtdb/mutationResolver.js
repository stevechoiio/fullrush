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
import * as last from 'lodash/last';
var resolver = function (fieldName, root, args, context, info) { return __awaiter(_this, void 0, void 0, function () {
    var resultKey, directives, isLeaf, database, hasTypeDirective, mutationRef, key, payload, typeTagName, _a, ref, type, _b, ref, type, ref, _c, ref, type, newRef;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                resultKey = info.resultKey, directives = info.directives, isLeaf = info.isLeaf;
                database = context.database;
                hasTypeDirective = has(directives, 'type');
                if (isLeaf && has(directives, 'pushKey')) {
                    return [2, root.__pushKey];
                }
                if (isLeaf && has(directives, 'key')) {
                    mutationRef = context.mutationRef;
                    key = last(mutationRef.split('/'));
                    return [2, key || null];
                }
                if (isLeaf && resultKey === '__typename') {
                    return [2, hasTypeDirective
                            ? directives.type.name
                            : root.__typename || null];
                }
                if (isLeaf && root && has(root, 'payload')) {
                    return [2, (root.payload && root.payload[resultKey]) || null];
                }
                payload = args && args.input;
                typeTagName = hasTypeDirective
                    ? directives.type.name
                    : null;
                if (!has(directives, 'rtdbUpdate')) return [3, 2];
                _a = directives.rtdbUpdate, ref = _a.ref, type = _a.type;
                context.mutationRef = ref;
                return [4, database.ref(ref).update(payload)];
            case 1:
                _d.sent();
                return [2, { payload: payload, __typename: typeTagName || type }];
            case 2:
                if (!has(directives, 'rtdbSet')) return [3, 4];
                _b = directives.rtdbSet, ref = _b.ref, type = _b.type;
                context.mutationRef = ref;
                return [4, database.ref(ref).set(payload)];
            case 3:
                _d.sent();
                return [2, { payload: payload, __typename: typeTagName || type }];
            case 4:
                if (!has(directives, 'rtdbRemove')) return [3, 6];
                ref = directives.rtdbRemove.ref;
                context.mutationRef = ref;
                return [4, database.ref(ref).remove()];
            case 5:
                _d.sent();
                return [2, { payload: null }];
            case 6:
                if (!has(directives, 'rtdbPush')) return [3, 8];
                _c = directives.rtdbPush, ref = _c.ref, type = _c.type;
                context.mutationRef = ref;
                newRef = database.ref(ref).push();
                return [4, newRef.set(payload)];
            case 7:
                _d.sent();
                return [2, {
                        payload: payload,
                        __pushKey: newRef.key,
                        __typename: typeTagName || type
                    }];
            case 8:
                if (!isLeaf && root && has(root, 'payload') && hasTypeDirective) {
                    return [2, {
                            payload: (root.payload && root.payload[resultKey]) || null,
                            __typename: directives.type.name
                        }];
                }
                _d.label = 9;
            case 9: return [2, payload];
        }
    });
}); };
export default resolver;
//# sourceMappingURL=mutationResolver.js.map