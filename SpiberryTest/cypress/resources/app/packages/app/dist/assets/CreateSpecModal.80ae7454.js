var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { a5 as commonjsGlobal, a6 as commonjsRequire, k as ref, O as watch, a7 as _, a8 as getRunnerConfigFromWindow, a9 as useToggle, m as computed, o as openBlock, v as createElementBlock, a as createBaseVNode, d as defineComponent, F as Fragment, B as renderList, p as normalizeClass, t as toDisplayString, e as createTextVNode, f as unref, aa as useElementSize, ab as shallowRef, ac as lodash, D as renderSlot, j as gql, c as createBlock, z as resolveDynamicComponent, ad as Card, H as createStaticVNode, u as useI18n, n as useMutation, ae as ScaffoldGeneratorStepOne_ScaffoldIntegrationDocument, l as onMounted, b as createVNode, W as normalizeStyle, w as withCtx, q as _sfc_main$a, K as StandardModalFooter, s as createCommentVNode, af as ShikiHighlight, ag as _sfc_main$b, G as __unplugin_components_1$1, ah as useVModels, ai as EmptyGenerator_MatchSpecFileDocument, aj as EmptyGenerator_GenerateSpecDocument, ak as whenever, r as resolveComponent, I as Input, al as __unplugin_components_1$3, am as decodeBase64Unicode, an as not, ao as DialogOverlay, L as _sfc_main$d } from "./index.ec96dfd6.js";
import { _ as _sfc_main$c } from "./SpecPatterns.79ed1074.js";
import { _ as __unplugin_components_1$2 } from "./add-large_x16.39c4466e.js";
var fuzzysort = { exports: {} };
(function(module) {
  (function(root, UMD) {
    if (module.exports)
      module.exports = UMD();
    else
      root.fuzzysort = UMD();
  })(commonjsGlobal, function UMD() {
    function fuzzysortNew(instanceOptions) {
      var fuzzysort2 = {
        single: function(search, target, options) {
          if (!search)
            return null;
          if (!isObj(search))
            search = fuzzysort2.getPreparedSearch(search);
          if (!target)
            return null;
          if (!isObj(target))
            target = fuzzysort2.getPrepared(target);
          var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
          var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
          return algorithm(search, target, search[0]);
        },
        go: function(search, targets, options) {
          if (!search)
            return noResults;
          search = fuzzysort2.prepareSearch(search);
          var searchLowerCode = search[0];
          var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
          var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
          var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
          var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
          var resultsLen = 0;
          var limitedCount = 0;
          var targetsLen = targets.length;
          if (options && options.keys) {
            var scoreFn = options.scoreFn || defaultScoreFn;
            var keys = options.keys;
            var keysLen = keys.length;
            for (var i = targetsLen - 1; i >= 0; --i) {
              var obj = targets[i];
              var objResults = new Array(keysLen);
              for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                var key = keys[keyI];
                var target = getValue(obj, key);
                if (!target) {
                  objResults[keyI] = null;
                  continue;
                }
                if (!isObj(target))
                  target = fuzzysort2.getPrepared(target);
                objResults[keyI] = algorithm(search, target, searchLowerCode);
              }
              objResults.obj = obj;
              var score = scoreFn(objResults);
              if (score === null)
                continue;
              if (score < threshold)
                continue;
              objResults.score = score;
              if (resultsLen < limit) {
                q.add(objResults);
                ++resultsLen;
              } else {
                ++limitedCount;
                if (score > q.peek().score)
                  q.replaceTop(objResults);
              }
            }
          } else if (options && options.key) {
            var key = options.key;
            for (var i = targetsLen - 1; i >= 0; --i) {
              var obj = targets[i];
              var target = getValue(obj, key);
              if (!target)
                continue;
              if (!isObj(target))
                target = fuzzysort2.getPrepared(target);
              var result = algorithm(search, target, searchLowerCode);
              if (result === null)
                continue;
              if (result.score < threshold)
                continue;
              result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj };
              if (resultsLen < limit) {
                q.add(result);
                ++resultsLen;
              } else {
                ++limitedCount;
                if (result.score > q.peek().score)
                  q.replaceTop(result);
              }
            }
          } else {
            for (var i = targetsLen - 1; i >= 0; --i) {
              var target = targets[i];
              if (!target)
                continue;
              if (!isObj(target))
                target = fuzzysort2.getPrepared(target);
              var result = algorithm(search, target, searchLowerCode);
              if (result === null)
                continue;
              if (result.score < threshold)
                continue;
              if (resultsLen < limit) {
                q.add(result);
                ++resultsLen;
              } else {
                ++limitedCount;
                if (result.score > q.peek().score)
                  q.replaceTop(result);
              }
            }
          }
          if (resultsLen === 0)
            return noResults;
          var results = new Array(resultsLen);
          for (var i = resultsLen - 1; i >= 0; --i)
            results[i] = q.poll();
          results.total = resultsLen + limitedCount;
          return results;
        },
        goAsync: function(search, targets, options) {
          var canceled = false;
          var p = new Promise(function(resolve, reject) {
            if (!search)
              return resolve(noResults);
            search = fuzzysort2.prepareSearch(search);
            var searchLowerCode = search[0];
            var q2 = fastpriorityqueue();
            var iCurrent = targets.length - 1;
            var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
            var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
            var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
            var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
            var resultsLen = 0;
            var limitedCount = 0;
            function step() {
              if (canceled)
                return reject("canceled");
              var startMs = Date.now();
              if (options && options.keys) {
                var scoreFn = options.scoreFn || defaultScoreFn;
                var keys = options.keys;
                var keysLen = keys.length;
                for (; iCurrent >= 0; --iCurrent) {
                  var obj = targets[iCurrent];
                  var objResults = new Array(keysLen);
                  for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                    var key = keys[keyI];
                    var target = getValue(obj, key);
                    if (!target) {
                      objResults[keyI] = null;
                      continue;
                    }
                    if (!isObj(target))
                      target = fuzzysort2.getPrepared(target);
                    objResults[keyI] = algorithm(search, target, searchLowerCode);
                  }
                  objResults.obj = obj;
                  var score = scoreFn(objResults);
                  if (score === null)
                    continue;
                  if (score < threshold)
                    continue;
                  objResults.score = score;
                  if (resultsLen < limit) {
                    q2.add(objResults);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (score > q2.peek().score)
                      q2.replaceTop(objResults);
                  }
                  if (iCurrent % 1e3 === 0) {
                    if (Date.now() - startMs >= 10) {
                      isNode ? {}(step) : setTimeout(step);
                      return;
                    }
                  }
                }
              } else if (options && options.key) {
                var key = options.key;
                for (; iCurrent >= 0; --iCurrent) {
                  var obj = targets[iCurrent];
                  var target = getValue(obj, key);
                  if (!target)
                    continue;
                  if (!isObj(target))
                    target = fuzzysort2.getPrepared(target);
                  var result = algorithm(search, target, searchLowerCode);
                  if (result === null)
                    continue;
                  if (result.score < threshold)
                    continue;
                  result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj };
                  if (resultsLen < limit) {
                    q2.add(result);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (result.score > q2.peek().score)
                      q2.replaceTop(result);
                  }
                  if (iCurrent % 1e3 === 0) {
                    if (Date.now() - startMs >= 10) {
                      isNode ? {}(step) : setTimeout(step);
                      return;
                    }
                  }
                }
              } else {
                for (; iCurrent >= 0; --iCurrent) {
                  var target = targets[iCurrent];
                  if (!target)
                    continue;
                  if (!isObj(target))
                    target = fuzzysort2.getPrepared(target);
                  var result = algorithm(search, target, searchLowerCode);
                  if (result === null)
                    continue;
                  if (result.score < threshold)
                    continue;
                  if (resultsLen < limit) {
                    q2.add(result);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (result.score > q2.peek().score)
                      q2.replaceTop(result);
                  }
                  if (iCurrent % 1e3 === 0) {
                    if (Date.now() - startMs >= 10) {
                      isNode ? {}(step) : setTimeout(step);
                      return;
                    }
                  }
                }
              }
              if (resultsLen === 0)
                return resolve(noResults);
              var results = new Array(resultsLen);
              for (var i = resultsLen - 1; i >= 0; --i)
                results[i] = q2.poll();
              results.total = resultsLen + limitedCount;
              resolve(results);
            }
            isNode ? {}(step) : step();
          });
          p.cancel = function() {
            canceled = true;
          };
          return p;
        },
        highlight: function(result, hOpen, hClose) {
          if (result === null)
            return null;
          if (hOpen === void 0)
            hOpen = "<b>";
          if (hClose === void 0)
            hClose = "</b>";
          var highlighted = "";
          var matchesIndex = 0;
          var opened = false;
          var target = result.target;
          var targetLen = target.length;
          var matchesBest = result.indexes;
          for (var i = 0; i < targetLen; ++i) {
            var char = target[i];
            if (matchesBest[matchesIndex] === i) {
              ++matchesIndex;
              if (!opened) {
                opened = true;
                highlighted += hOpen;
              }
              if (matchesIndex === matchesBest.length) {
                highlighted += char + hClose + target.substr(i + 1);
                break;
              }
            } else {
              if (opened) {
                opened = false;
                highlighted += hClose;
              }
            }
            highlighted += char;
          }
          return highlighted;
        },
        prepare: function(target) {
          if (!target)
            return;
          return { target, _targetLowerCodes: fuzzysort2.prepareLowerCodes(target), _nextBeginningIndexes: null, score: null, indexes: null, obj: null };
        },
        prepareSlow: function(target) {
          if (!target)
            return;
          return { target, _targetLowerCodes: fuzzysort2.prepareLowerCodes(target), _nextBeginningIndexes: fuzzysort2.prepareNextBeginningIndexes(target), score: null, indexes: null, obj: null };
        },
        prepareSearch: function(search) {
          if (!search)
            return;
          return fuzzysort2.prepareLowerCodes(search);
        },
        getPrepared: function(target) {
          if (target.length > 999)
            return fuzzysort2.prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0)
            return targetPrepared;
          targetPrepared = fuzzysort2.prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        },
        getPreparedSearch: function(search) {
          if (search.length > 999)
            return fuzzysort2.prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0)
            return searchPrepared;
          searchPrepared = fuzzysort2.prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        },
        algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var typoSimpleI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[typoSimpleI === 0 ? searchI : typoSimpleI === searchI ? searchI + 1 : typoSimpleI === searchI - 1 ? searchI - 1 : searchI];
            }
            ++targetI;
            if (targetI >= targetLen) {
              for (; ; ) {
                if (searchI <= 1)
                  return null;
                if (typoSimpleI === 0) {
                  --searchI;
                  var searchLowerCodeNew = searchLowerCodes[searchI];
                  if (searchLowerCode === searchLowerCodeNew)
                    continue;
                  typoSimpleI = searchI;
                } else {
                  if (typoSimpleI === 1)
                    return null;
                  --typoSimpleI;
                  searchI = typoSimpleI;
                  searchLowerCode = searchLowerCodes[searchI + 1];
                  var searchLowerCodeNew = searchLowerCodes[searchI];
                  if (searchLowerCode === searchLowerCodeNew)
                    continue;
                }
                matchesSimpleLen = searchI;
                targetI = matchesSimple[matchesSimpleLen - 1] + 1;
                break;
              }
            }
          }
          var searchI = 0;
          var typoStrictI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === null)
            nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
          var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0) {
                  ++typoStrictI;
                  if (typoStrictI > searchLen - 2)
                    break;
                  if (searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI + 1])
                    continue;
                  targetI = firstPossibleI;
                  continue;
                }
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[typoStrictI === 0 ? searchI : typoStrictI === searchI ? searchI + 1 : typoStrictI === searchI - 1 ? searchI - 1 : searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          {
            if (successStrict) {
              var matchesBest = matchesStrict;
              var matchesBestLen = matchesStrictLen;
            } else {
              var matchesBest = matchesSimple;
              var matchesBestLen = matchesSimpleLen;
            }
            var score = 0;
            var lastTargetI = -1;
            for (var i = 0; i < searchLen; ++i) {
              var targetI = matchesBest[i];
              if (lastTargetI !== targetI - 1)
                score -= targetI;
              lastTargetI = targetI;
            }
            if (!successStrict) {
              score *= 1e3;
              if (typoSimpleI !== 0)
                score += -20;
            } else {
              if (typoStrictI !== 0)
                score += -20;
            }
            score -= targetLen - searchLen;
            prepared.score = score;
            prepared.indexes = new Array(matchesBestLen);
            for (var i = matchesBestLen - 1; i >= 0; --i)
              prepared.indexes[i] = matchesBest[i];
            return prepared;
          }
        },
        algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen)
              return null;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === null)
            nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0)
                  break;
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          {
            if (successStrict) {
              var matchesBest = matchesStrict;
              var matchesBestLen = matchesStrictLen;
            } else {
              var matchesBest = matchesSimple;
              var matchesBestLen = matchesSimpleLen;
            }
            var score = 0;
            var lastTargetI = -1;
            for (var i = 0; i < searchLen; ++i) {
              var targetI = matchesBest[i];
              if (lastTargetI !== targetI - 1)
                score -= targetI;
              lastTargetI = targetI;
            }
            if (!successStrict)
              score *= 1e3;
            score -= targetLen - searchLen;
            prepared.score = score;
            prepared.indexes = new Array(matchesBestLen);
            for (var i = matchesBestLen - 1; i >= 0; --i)
              prepared.indexes[i] = matchesBest[i];
            return prepared;
          }
        },
        prepareLowerCodes: function(str) {
          var strLen = str.length;
          var lowerCodes = [];
          var lower = str.toLowerCase();
          for (var i = 0; i < strLen; ++i)
            lowerCodes[i] = lower.charCodeAt(i);
          return lowerCodes;
        },
        prepareBeginningIndexes: function(target) {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i = 0; i < targetLen; ++i) {
            var targetCode = target.charCodeAt(i);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning)
              beginningIndexes[beginningIndexesLen++] = i;
          }
          return beginningIndexes;
        },
        prepareNextBeginningIndexes: function(target) {
          var targetLen = target.length;
          var beginningIndexes = fuzzysort2.prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i = 0; i < targetLen; ++i) {
            if (lastIsBeginning > i) {
              nextBeginningIndexes[i] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        },
        cleanup,
        new: fuzzysortNew
      };
      return fuzzysort2;
    }
    var isNode = typeof commonjsRequire !== "undefined" && typeof window === "undefined";
    var preparedCache = /* @__PURE__ */ new Map();
    var preparedSearchCache = /* @__PURE__ */ new Map();
    var noResults = [];
    noResults.total = 0;
    var matchesSimple = [];
    var matchesStrict = [];
    function cleanup() {
      preparedCache.clear();
      preparedSearchCache.clear();
      matchesSimple = [];
      matchesStrict = [];
    }
    function defaultScoreFn(a) {
      var max = -9007199254740991;
      for (var i = a.length - 1; i >= 0; --i) {
        var result = a[i];
        if (result === null)
          continue;
        var score = result.score;
        if (score > max)
          max = score;
      }
      if (max === -9007199254740991)
        return null;
      return max;
    }
    function getValue(obj, prop) {
      var tmp = obj[prop];
      if (tmp !== void 0)
        return tmp;
      var segs = prop;
      if (!Array.isArray(prop))
        segs = prop.split(".");
      var len = segs.length;
      var i = -1;
      while (obj && ++i < len)
        obj = obj[segs[i]];
      return obj;
    }
    function isObj(x) {
      return typeof x === "object";
    }
    var fastpriorityqueue = function() {
      var r = [], o = 0, e = {};
      function n() {
        for (var e2 = 0, n2 = r[e2], c = 1; c < o; ) {
          var f = c + 1;
          e2 = c, f < o && r[f].score < r[c].score && (e2 = f), r[e2 - 1 >> 1] = r[e2], c = 1 + (e2 << 1);
        }
        for (var a = e2 - 1 >> 1; e2 > 0 && n2.score < r[a].score; a = (e2 = a) - 1 >> 1)
          r[e2] = r[a];
        r[e2] = n2;
      }
      return e.add = function(e2) {
        var n2 = o;
        r[o++] = e2;
        for (var c = n2 - 1 >> 1; n2 > 0 && e2.score < r[c].score; c = (n2 = c) - 1 >> 1)
          r[n2] = r[c];
        r[n2] = e2;
      }, e.poll = function() {
        if (o !== 0) {
          var e2 = r[0];
          return r[0] = r[--o], n(), e2;
        }
      }, e.peek = function(e2) {
        if (o !== 0)
          return r[0];
      }, e.replaceTop = function(o2) {
        r[0] = o2, n();
      }, e;
    };
    var q = fastpriorityqueue();
    return fuzzysortNew();
  });
})(fuzzysort);
var fuzzySort = fuzzysort.exports;
let platform;
const getPlatform = () => {
  if (!platform) {
    platform = getRunnerConfigFromWindow().platform;
  }
  return platform;
};
const getRegexSeparator = () => getPlatform() === "win32" ? /\\/ : /\//;
const getSeparator = () => getPlatform() === "win32" ? "\\" : "/";
function buildSpecTree(specs, root = { name: "", isLeaf: false, children: [], id: "" }) {
  specs.forEach((spec) => buildSpecTreeRecursive(spec.relative, root, spec));
  collapseEmptyChildren(root);
  return root;
}
function buildSpecTreeRecursive(path, tree, data) {
  const [firstFile, ...rest] = path.split(getRegexSeparator());
  const id = tree.id ? [tree.id, firstFile].join(getSeparator()) : firstFile;
  if (rest.length < 1) {
    tree.children.push({ name: firstFile, isLeaf: true, children: [], parent: tree, data, id });
    return tree;
  }
  const foundChild = tree.children.find((child) => child.name === firstFile);
  if (foundChild) {
    buildSpecTreeRecursive(rest.join(getSeparator()), foundChild, data);
    return tree;
  }
  const newTree = buildSpecTreeRecursive(rest.join(getSeparator()), { name: firstFile, isLeaf: false, children: [], parent: tree, id, data }, data);
  tree.children.push(newTree);
  return tree;
}
function collapseEmptyChildren(node) {
  for (const child of node.children) {
    collapseEmptyChildren(child);
  }
  if (node.isLeaf) {
    return;
  }
  if (node.parent && node.parent.parent && node.parent.children.length === 1) {
    node.parent.name = [node.parent.name, node.name].join(getSeparator());
    node.parent.id = [node.parent.id, node.name].join(getSeparator());
    node.parent.children = node.children;
  }
  return;
}
function getDirIndexes(row) {
  var _a, _b;
  const indexes = (_b = (_a = row.data) == null ? void 0 : _a.dirIndexes) != null ? _b : [];
  const maxIndex = row.id.length - 1;
  const minIndex = maxIndex - row.name.length + 1;
  const res = indexes.filter((index) => index >= minIndex && index <= maxIndex);
  return res.map((idx) => idx - minIndex);
}
function fuzzySortSpecs(specs, searchValue) {
  const transformedSpecs = addDirectoryToSpecs(specs);
  return fuzzySort.go(searchValue, transformedSpecs, { keys: ["baseName", "directory"], allowTypo: false }).map((result) => {
    var _a, _b;
    const [file, dir] = result;
    return __spreadProps(__spreadValues({}, result.obj), {
      fileIndexes: (_a = file == null ? void 0 : file.indexes) != null ? _a : [],
      dirIndexes: (_b = dir == null ? void 0 : dir.indexes) != null ? _b : []
    });
  });
}
function addDirectoryToSpecs(specs) {
  return specs.map((spec) => {
    var _a;
    return __spreadProps(__spreadValues({}, spec), {
      directory: getDirectoryPath((_a = spec == null ? void 0 : spec.relative) != null ? _a : "")
    });
  });
}
function getDirectoryPath(path) {
  return path.slice(0, path.lastIndexOf(getSeparator()));
}
function makeFuzzyFoundSpec(spec) {
  return __spreadProps(__spreadValues({}, spec), {
    fileIndexes: [],
    dirIndexes: []
  });
}
function useCachedSpecs(specs) {
  const cachedSpecs = ref([]);
  watch(specs, (currentSpecs, prevSpecs = []) => {
    if (!_.isEqual(currentSpecs, prevSpecs)) {
      cachedSpecs.value = currentSpecs;
    }
  }, { immediate: true });
  return cachedSpecs;
}
function collectRoots(node, acc = []) {
  if (!node || !node.parent) {
    return acc;
  }
  acc.push(node);
  collectRoots(node.parent, acc);
  return acc;
}
const useCollapsibleTreeNode = (rawNode, options, depth, parent) => {
  var _a;
  const { cache, expandInitially } = options;
  const treeNode = rawNode;
  const roots = parent ? collectRoots(parent) : [];
  const [expanded, toggle] = useToggle((_a = cache == null ? void 0 : cache.get(rawNode.id)) != null ? _a : !!expandInitially);
  const hidden = computed(() => {
    return !!roots.find((r) => r.expanded.value === false);
  });
  const wrappedToggle = (value) => {
    var _a2;
    const originalState = expanded.value;
    const newValue = toggle(value);
    if (!!cache && !hidden.value && ((_a2 = rawNode.children) == null ? void 0 : _a2.length)) {
      cache.set(rawNode.id, !originalState);
    }
    return newValue;
  };
  return __spreadProps(__spreadValues({}, treeNode), {
    depth,
    parent,
    hidden,
    expanded,
    toggle: wrappedToggle
  });
};
function buildTree(rawNode, options, acc = [], depth = 1, parent = null) {
  var _a;
  const node = useCollapsibleTreeNode(rawNode, options, depth, parent);
  acc.push(node);
  if ((_a = node.children) == null ? void 0 : _a.length) {
    for (const child of node.children) {
      buildTree(child, options, acc, depth + 1, node);
    }
  }
  return acc;
}
function sortTree(tree) {
  if (tree.children.length > 0) {
    tree.children = tree.children.sort((a, b) => {
      if (a.children.length === 0 && b.children.length === 0) {
        return a.name > b.name ? 1 : -1;
      }
      if (a.children.length === 0) {
        return 1;
      }
      if (b.children.length === 0) {
        return -1;
      }
      return a.name > b.name ? 1 : -1;
    });
    tree.children.forEach(sortTree);
  }
}
function useCollapsibleTree(tree, options = {}) {
  var _a;
  options.expandInitially = (_a = options.expandInitially) != null ? _a : true;
  sortTree(tree);
  const collapsibleTree = buildTree(tree, options);
  collapsibleTree.sort((a, b) => {
    if (a.parent === b.parent) {
      if (a.children.length && !b.children.length) {
        return -1;
      }
      return 0;
    }
    return 0;
  });
  return {
    tree: options.dropRoot ? collapsibleTree.slice(1) : collapsibleTree
  };
}
const _hoisted_1$b = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 13C14.5523 13 15 12.5523 15 12V4C15 3.44772 14.5523 3 14 3H9L7.29289 4.70711C7.10536 4.89464 6.851 5 6.58579 5H1V12C1 12.5523 1.44772 13 2 13H14Z",
  fill: "#2E3247",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 3L7.29289 1.29289C7.10536 1.10536 6.851 1 6.58579 1H2C1.44772 1 1 1.44772 1 2V5M9 3H14C14.5523 3 15 3.44772 15 4V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V5M9 3L7.29289 4.70711C7.10536 4.89464 6.851 5 6.58579 5H1",
  stroke: "#434861",
  "stroke-width": "2",
  "stroke-linejoin": "round",
  class: "icon-light"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$a,
  _hoisted_3$8
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$7);
}
var __unplugin_components_1 = { name: "cy-folder_x16", render: render$6 };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    text: { default: "" },
    indexes: { default: () => [] },
    highlightClasses: { default: "text-white" }
  },
  setup(__props) {
    const props = __props;
    const characters = computed(() => {
      const chars = props.text.split("").map((char) => ({ char, highlighted: false }));
      props.indexes.forEach((idx) => chars[idx].highlighted = true);
      return chars;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(characters), ({ char, highlighted }, idx) => {
          return openBlock(), createElementBlock("span", {
            key: idx,
            class: normalizeClass({ "px-4px": char === "/" })
          }, [
            highlighted ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(__props.highlightClasses)
            }, toDisplayString(char), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(char), 1)
            ], 64))
          ], 2);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$a = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2 14V2C2 1.44772 2.44772 1 3 1H13C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3C2.44772 15 2 14.5523 2 14Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5 8H8M5 5H11M5 11H10M13 1L3 1C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$9,
  _hoisted_3$7
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$6);
}
var DocumentIconBlank = { name: "cy-document-blank_x16", render: render$5 };
function useVirtualList(list, options) {
  const containerRef = ref();
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number") {
      return Math.ceil(containerHeight / itemHeight);
    }
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number") {
      return Math.floor(scrollTop / itemHeight) + 1;
    }
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => {
        return {
          data: ele,
          index: index + state.value.start
        };
      });
    }
  };
  watch([size.height, list], (newVal, oldVal) => {
    if (!lodash.exports.isEqual(newVal, oldVal)) {
      calculateRange();
    }
  });
  const totalHeight = computed(() => {
    if (typeof itemHeight === "number") {
      return source.value.length * itemHeight;
    }
    return source.value.reduce((sum, _2, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _2, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps,
    api: {
      containerRef,
      getOffset,
      getViewCapacity,
      source,
      scrollTo
    }
  };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    variant: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const colorClasses = {
      default: "bg-purple-100 text-purple-600",
      error: "bg-red-200 text-red-700"
    };
    const color = computed(() => {
      return colorClasses[props.variant];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("code", {
        class: normalizeClass(["rounded p-2px", unref(color)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$9 = { class: "flex flex-wrap gap-32px children:mx-auto" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    generators: null,
    gql: null
  },
  emits: ["select"],
  setup(__props) {
    const props = __props;
    gql`
fragment CreateSpecCards on Query {
  currentProject {
    id
  }
}
`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.generators, (generator) => {
          return openBlock(), createBlock(resolveDynamicComponent(generator.card), {
            key: generator.id,
            disabled: generator.disabled(props.gql.currentProject) || false,
            onClick: ($event) => _ctx.$emit("select", generator.id)
          }, null, 8, ["disabled", "onClick"]);
        }), 128))
      ]);
    };
  }
});
const filters = {
  matchesCT: (testingType) => testingType === "component",
  matchesE2E: (testingType) => testingType === "e2e"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    icon: null,
    header: null,
    description: null,
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Card, {
        disabled: __props.disabled,
        title: __props.header,
        description: __props.description,
        icon: __props.icon,
        "icon-size": 48,
        class: "w-280px m-2px min-h-216px max-h-350px px-32px pt-32px pb-24px",
        variant: "indigo",
        onClick: _cache[0] || (_cache[0] = ($event) => emits("click"))
      }, null, 8, ["disabled", "title", "description", "icon"]);
    };
  }
});
const _hoisted_1$8 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M43 25.1622L28.5 33L24\r\n28.4872V47L43 37.2564V25.1622Z" fill="#D0D2E0" class="icon-light"></path><path d="M24 9L5 18.7436L24 28.4872L43 18.7436L24 9Z" fill="#D0D2E0" class="icon-light"></path><path d="M24 47L5 37.2564V25.1622M24 47L43 37.2564V25.1622M24 47V28.4872M24\r\n9L5 18.7436M24 9L43 18.7436M24 9L28 5L47 14.5L43 18.7436M24 9L20 5L1 14.5L5\r\n18.7436M5 18.7436L24 28.4872M5 18.7436L1 23L5 25.1622M43 18.7436L24\r\n28.4872M43 18.7436L47 23L43 25.1622M24 28.4872L19.5 33L5 25.1622M24\r\n28.4872L28.5 33L43 25.1622" stroke="#1B1E2E" class="icon-dark" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 7L19.1314 9.86863L22 11L19.1314 12.1314L18 15L16.8686\r\n12.1314L14 11L16.8686 9.86863L18 7Z" fill="#1FA971" stroke="#00814D" class="icon-dark-secondary-stroke icon-light-secondary-fill" stroke-width="2" stroke-linejoin="round"></path><path d="M27 1L27.8485 3.15147L30 4L27.8485 4.84853L27 7L26.1515 4.84853L24\r\n4L26.1515 3.15147L27 1Z" fill="#1FA971" stroke="#00814D" class="icon-dark-secondary-stroke icon-light-secondary-fill" stroke-width="2" stroke-linejoin="round"></path><path d="M28 12L29.4142 15.5858L33 17L29.4142 18.4142L28 22L26.5858\r\n18.4142L23 17L26.5858 15.5858L28 12Z" fill="#1FA971" stroke="#00814D" class="icon-dark-secondary-stroke icon-light-secondary-fill" stroke-width="2" stroke-linejoin="round"></path>', 6);
const _hoisted_8$1 = [
  _hoisted_2$8
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_8$1);
}
var BoxOpenIcon = { name: "cy-box-open_x48", render: render$4 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$6, {
        disabled: __props.disabled,
        header: unref(t)("createSpec.e2e.importFromScaffold.header"),
        description: unref(t)("createSpec.e2e.importFromScaffold.description"),
        icon: unref(BoxOpenIcon)
      }, null, 8, ["disabled", "header", "description", "icon"]);
    };
  }
});
const _hoisted_1$7 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 4V12M12 8H4",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$6);
}
var __unplugin_components_2 = { name: "cy-add-small_x16", render: render$3 };
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$6 = { class: "h-320px overflow-auto" };
const _hoisted_3$5 = { class: "grid gap-8px grid-cols-[16px,auto] items-center" };
const _hoisted_4$5 = { class: "text-gray-700" };
const _hoisted_5$2 = { class: "grid grid-cols-[16px,auto,auto] items-center" };
const _hoisted_6$2 = { class: "pl-8px text-gray-900" };
const _hoisted_7$1 = { class: "font-light text-gray-400 text-gray-500" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["update:title", "update:description", "close"],
  setup(__props, { emit: emits }) {
    const { t } = useI18n();
    gql`
mutation ScaffoldGeneratorStepOne_scaffoldIntegration {
  scaffoldIntegration {
    file {
      id
      absolute
      relative
      baseName
      name
      fileExtension
      fileName
    }
  }
}
`;
    const mutation = useMutation(ScaffoldGeneratorStepOne_ScaffoldIntegrationDocument);
    onMounted(async () => {
      emits("update:title", t("createSpec.e2e.importFromScaffold.specsAddingHeader"));
      await mutation.executeMutation({});
      emits("update:title", t("createSpec.e2e.importFromScaffold.specsAddedHeader"));
    });
    const scaffoldedFiles = computed(() => {
      var _a;
      return ((_a = mutation.data.value) == null ? void 0 : _a.scaffoldIntegration) || [];
    });
    const specTree = computed(() => {
      const files = scaffoldedFiles.value.map((res) => {
        return __spreadProps(__spreadValues({}, res.file), {
          specType: "integration",
          specFileExtension: res.file.baseName.replace(res.file.fileName, "")
        });
      });
      return useCollapsibleTree(buildSpecTree(files), { dropRoot: true });
    });
    return (_ctx, _cache) => {
      const _component_i_cy_add_small_x16 = __unplugin_components_2;
      const _component_i_cy_folder_x16 = __unplugin_components_1;
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      return unref(mutation).data.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("ul", _hoisted_2$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(specTree).tree, (row, idx) => {
            var _a, _b;
            return openBlock(), createElementBlock("li", {
              key: idx,
              class: "flex font-medium border-b-gray-50 border-b-width-1px pl-24px gap-8px items-center children:h-40px"
            }, [
              createVNode(_component_i_cy_add_small_x16, { class: "icon-dark-jade-400" }),
              !row.isLeaf ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "flex items-center",
                style: normalizeStyle({ paddingLeft: `${(row.depth - 2) * 10}px` })
              }, [
                createBaseVNode("div", _hoisted_3$5, [
                  createVNode(_component_i_cy_folder_x16, { class: "icon-dark-white icon-light-gray-200" }),
                  createBaseVNode("span", _hoisted_4$5, toDisplayString(row.name), 1)
                ])
              ], 4)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: "flex items-center",
                style: normalizeStyle({ paddingLeft: `${(row.depth - 2) * 10}px` })
              }, [
                createBaseVNode("div", _hoisted_5$2, [
                  createVNode(_component_i_cy_document_blank_x16, { class: "icon-light-gray-50 icon-dark-gray-200" }),
                  createBaseVNode("span", _hoisted_6$2, toDisplayString((_a = row.data) == null ? void 0 : _a.fileName), 1),
                  createBaseVNode("span", _hoisted_7$1, toDisplayString((_b = row.data) == null ? void 0 : _b.specFileExtension), 1)
                ])
              ], 4))
            ]);
          }), 128))
        ]),
        createVNode(StandardModalFooter, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$a, {
              size: "lg",
              onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("createSpec.e2e.importFromScaffold.specsAddedButton")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const ScaffoldGenerator = {
  card: _sfc_main$5,
  entry: _sfc_main$4,
  matches: filters.matchesE2E,
  disabled: () => {
  },
  id: "scaffold"
};
const _hoisted_1$5 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M32\r\n5.17964V13H39.8204C39.7221 12.784 39.5852 12.5852 39.4142 12.4142L32.5858\r\n5.58578C32.4148 5.41477 32.216 5.27792 32 5.17964Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M20 21L17 24L20 27M28 21L31 24L28 27M22.5 29.5L25.5 18.5M32\r\n5.17964C31.7423 5.06237 31.4602 5 31.1716 5H9C8.44772 5 8 5.44772 8 6V42C8\r\n42.5523 8.44772 43 9 43H39C39.5523 43 40 42.5523 40 42V13.8284C40 13.5398\r\n39.9376 13.2577 39.8204 13M32 5.17964C32.216 5.27792 32.4148 5.41477\r\n32.5858 5.58578L39.4142 12.4142C39.5852 12.5852 39.7221 12.784 39.8204\r\n13M32 5.17964V13H39.8204",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M43 40C43 43.3137 40.3137 46 37 46C33.6863 46 31 43.3137 31 40C31\r\n36.6863 33.6863 34 37 34C40.3137 34 43 36.6863 43 40Z",
  class: "icon-light-secondary",
  fill: "#A3E7CB"
}, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M37 38V40M37 42V40M37 40H39H35M43 40C43 43.3137 40.3137 46 37\r\n46C33.6863 46 31 43.3137 31 40C31 36.6863 33.6863 34 37 34C40.3137 34 43\r\n36.6863 43 40Z",
  stroke: "#00814D",
  class: "icon-dark-secondary",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_2$5,
  _hoisted_3$4,
  _hoisted_4$4,
  _hoisted_5$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_6$1);
}
var DocumentCodeIcon = { name: "cy-document-code_x48", render: render$2 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$6, {
        disabled: __props.disabled,
        header: unref(t)("createSpec.e2e.importEmptySpec.header"),
        description: unref(t)("createSpec.e2e.importEmptySpec.description"),
        icon: unref(DocumentCodeIcon)
      }, null, 8, ["disabled", "header", "description", "icon"]);
    };
  }
});
const _hoisted_1$4 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#1FA971",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 6L8 10L6 8",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  class: "icon-light",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$4,
  _hoisted_3$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$3);
}
var __unplugin_components_0 = { name: "cy-status-passed-solid_x16", render: render$1 };
const _hoisted_1$3 = {
  class: "cursor-pointer flex py-16px px-24px gap-8px items-center",
  "data-cy": "file-row"
};
const _hoisted_2$3 = { class: "font-medium text-jade-500 truncate" };
const _hoisted_3$2 = { class: "flex-grow flex justify-self-end justify-end" };
const _hoisted_4$2 = { class: "rounded border-1 mx-24px mb-24px" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    file: null
  },
  setup(__props) {
    gql`
fragment GeneratorSuccessFile on ScaffoldedFile {
  file {
    id
    fileName
    fileExtension
    baseName
    relative
    contents
  }
}
`;
    gql`
fragment GeneratorSuccess on GenerateSpecResponse {
  # Used to update the cache after a spec is created, so when the user tries to
  # run it, it already exists
  currentProject {
    id
    specs {
      id
      ...SpecNode_InlineSpecList
    }
  }
  generatedSpecResult {
    ... on ScaffoldedFile {
      ...GeneratorSuccessFile
    }
  }
}
`;
    return (_ctx, _cache) => {
      const _component_i_cy_status_passed_solid_x16 = __unplugin_components_0;
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_1$1;
      return openBlock(), createBlock(_sfc_main$b, {
        class: "rounded outline-none m-4px overflow-hidden",
        "initially-open": true
      }, {
        target: withCtx(({ open }) => [
          createBaseVNode("div", _hoisted_1$3, [
            createVNode(_component_i_cy_status_passed_solid_x16),
            createBaseVNode("span", _hoisted_2$3, toDisplayString(__props.file.relative), 1),
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(_component_i_cy_chevron_down_small_x16, {
                class: normalizeClass([{ "rotate-180": open }, "max-w-16px transform transition duration-150 icon-dark-gray-400"])
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4$2, [
            createVNode(ShikiHighlight, {
              code: __props.file.contents,
              "line-numbers": "",
              lang: "js",
              "copy-button": ""
            }, null, 8, ["code"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$2 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15H7V19H3V15Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M21 8C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6V8ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8V6ZM21 18C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16V18ZM11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18V16ZM2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711C2.68342 10.0976 3.31658 10.0976 3.70711 9.70711L2.29289 8.29289ZM7.70711 5.70711C8.09763 5.31658 8.09763 4.68342 7.70711 4.29289C7.31658 3.90237 6.68342 3.90237 6.29289 4.29289L7.70711 5.70711ZM3.70711 4.29289C3.31658 3.90237 2.68342 3.90237 2.29289 4.29289C1.90237 4.68342 1.90237 5.31658 2.29289 5.70711L3.70711 4.29289ZM6.29289 9.70711C6.68342 10.0976 7.31658 10.0976 7.70711 9.70711C8.09763 9.31658 8.09763 8.68342 7.70711 8.29289L6.29289 9.70711ZM3 15V14C2.44772 14 2 14.4477 2 15H3ZM7 15H8C8 14.4477 7.55228 14 7 14V15ZM7 19V20C7.55228 20 8 19.5523 8 19H7ZM3 19H2C2 19.5523 2.44772 20 3 20V19ZM21 6H11V8H21V6ZM21 16H11V18H21V16ZM3.70711 9.70711L5.70711 7.70711L4.29289 6.29289L2.29289 8.29289L3.70711 9.70711ZM5.70711 7.70711L7.70711 5.70711L6.29289 4.29289L4.29289 6.29289L5.70711 7.70711ZM2.29289 5.70711L4.29289 7.70711L5.70711 6.29289L3.70711 4.29289L2.29289 5.70711ZM4.29289 7.70711L6.29289 9.70711L7.70711 8.29289L5.70711 6.29289L4.29289 7.70711ZM3 16H7V14H3V16ZM6 15V19H8V15H6ZM7 18H3V20H7V18ZM4 19V15H2V19H4Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
var TestResultsIcon = { name: "cy-test-results_x24", render };
const _hoisted_1$1 = { class: "flex flex-col flex-grow justify-between" };
const _hoisted_2$1 = { class: "p-24px w-720px" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 0,
  class: "rounded flex font-medium bg-error-100 mt-16px p-14px ring-2 ring-error-100 text-error-600 gap-8px items-center"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("em", { class: "font-medium" }, "specPattern", -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode(":");
const _hoisted_7 = {
  key: 1,
  class: "rounded flex font-medium bg-warning-100 mt-16px p-16px text-warning-600 gap-8px items-center"
};
const _hoisted_8 = { class: "rounded bg-warning-200 py-2px px-8px text-warning-700" };
const _hoisted_9 = {
  key: 2,
  class: "mt-16px"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    gql: null,
    type: null,
    specFileName: null,
    erroredCodegenCandidate: null,
    otherGenerators: { type: Boolean }
  },
  emits: ["update:title", "update:description", "restart", "close", "updateTitle"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment EmptyGenerator on CurrentProject {
  id
  config
  ...SpecPatterns
}
`;
    gql`
mutation EmptyGenerator_MatchSpecFile($specFile: String!) {
  matchesSpecPattern (specFile: $specFile) 
}
`;
    gql`
mutation EmptyGenerator_generateSpec($codeGenCandidate: String!, $type: CodeGenType!, $erroredCodegenCandidate: String) {
  generateSpecFromSource(codeGenCandidate: $codeGenCandidate, type: $type, erroredCodegenCandidate: $erroredCodegenCandidate) {
    ...GeneratorSuccess
  }
}`;
    const { title } = useVModels(props, emits);
    const inputRef = ref();
    const inputRefFn = () => inputRef;
    const specFile = ref(props.specFileName);
    const matches = useMutation(EmptyGenerator_MatchSpecFileDocument);
    const writeFile = useMutation(EmptyGenerator_GenerateSpecDocument);
    const isValidSpecFile = ref(true);
    const hasError = computed(() => !isValidSpecFile.value && !!specFile.value);
    const result = ref(null);
    onMounted(() => {
      if (!(inputRef == null ? void 0 : inputRef.value)) {
        return;
      }
      inputRef.value.focus();
      const fileNameRegex = /[ \w-]+(?=\.)/;
      const inputValue = props.specFileName;
      const match = inputValue.match(fileNameRegex);
      if (match) {
        const startSelectionIndex = match.index || 0;
        const endSelectionIndex = startSelectionIndex + match[0].length;
        inputRef.value.setSelectionRange(startSelectionIndex, endSelectionIndex);
      }
    });
    whenever(result, () => {
      title.value = t("createSpec.successPage.header");
      emits("updateTitle", t("createSpec.successPage.header"));
    });
    const createSpec = async () => {
      var _a, _b, _c, _d;
      const { data } = await writeFile.executeMutation({ codeGenCandidate: specFile.value, type: props.type, erroredCodegenCandidate: (_a = props.erroredCodegenCandidate) != null ? _a : null });
      result.value = ((_c = (_b = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _b.generatedSpecResult) == null ? void 0 : _c.__typename) === "ScaffoldedFile" ? (_d = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _d.generatedSpecResult : null;
    };
    watch(specFile, async (value) => {
      var _a, _b;
      const result2 = await matches.executeMutation({ specFile: value });
      isValidSpecFile.value = (_b = (_a = result2.data) == null ? void 0 : _a.matchesSpecPattern) != null ? _b : false;
    }, { immediate: true });
    title.value = t("createSpec.e2e.importEmptySpec.chooseFilenameHeader");
    const showExtensionWarning = computed(() => isValidSpecFile.value && !specFile.value.includes(".cy"));
    const recommendedFileName = computed(() => {
      const split = specFile.value.split(".");
      return `{filename}.cy.${split[split.length - 1]}`;
    });
    const invalidSpecWarning = computed(() => props.type === "e2e" ? t("createSpec.e2e.importEmptySpec.invalidSpecWarning") : t("createSpec.component.importEmptySpec.invalidComponentWarning"));
    return (_ctx, _cache) => {
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      const _component_i_cy_errored_outline_x16 = __unplugin_components_1$3;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !result.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(Input, {
              modelValue: specFile.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => specFile.value = $event),
              "input-ref": inputRefFn,
              placeholder: unref(t)("createSpec.e2e.importEmptySpec.inputPlaceholder"),
              "aria-label": unref(t)("createSpec.e2e.importEmptySpec.inputPlaceholder"),
              "has-error": unref(hasError)
            }, {
              prefix: withCtx(() => [
                createVNode(_component_i_cy_document_blank_x16, {
                  class: normalizeClass(["icon-light-gray-50 icon-dark-gray-300", {
                    "icon-light-error-50 icon-dark-error-400": unref(hasError)
                  }])
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder", "aria-label", "has-error"]),
            props.gql ? (openBlock(), createElementBlock("div", _hoisted_3, [
              unref(hasError) ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(_component_i_cy_errored_outline_x16, { class: "icon-dark-error-600" }),
                createBaseVNode("span", null, [
                  createTextVNode(toDisplayString(unref(invalidSpecWarning)), 1),
                  _hoisted_5,
                  _hoisted_6
                ])
              ])) : unref(showExtensionWarning) && props.type === "e2e" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(_component_i_cy_errored_outline_x16, { class: "icon-dark-warning-600" }),
                createTextVNode(" " + toDisplayString(unref(t)("createSpec.e2e.importEmptySpec.specExtensionWarning")), 1),
                createBaseVNode("span", _hoisted_8, toDisplayString(unref(recommendedFileName)), 1)
              ])) : createCommentVNode("", true),
              unref(hasError) ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(_sfc_main$c, {
                  gql: props.gql,
                  variant: "info"
                }, null, 8, ["gql"])
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ]),
          !result.value ? (openBlock(), createBlock(StandardModalFooter, {
            key: 0,
            class: "flex gap-16px"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$a, {
                size: "lg",
                disabled: !isValidSpecFile.value,
                onClick: createSpec
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("createSpec.createSpec")), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              props.otherGenerators ? (openBlock(), createBlock(_sfc_main$a, {
                key: 0,
                size: "lg",
                variant: "outline",
                onClick: _cache[1] || (_cache[1] = ($event) => emits("restart"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.button.back")), 1)
                ]),
                _: 1
              })) : (openBlock(), createBlock(_sfc_main$a, {
                key: 1,
                size: "lg",
                variant: "outline",
                onClick: _cache[2] || (_cache[2] = ($event) => emits("close"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.button.cancel")), 1)
                ]),
                _: 1
              }))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_sfc_main$2, {
            file: result.value.file
          }, null, 8, ["file"]),
          createVNode(StandardModalFooter, { class: "flex gap-16px items-center" }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(_component_router_link, {
                  class: "outline-none",
                  to: {
                    name: "SpecRunner",
                    query: {
                      file: (_a = result.value.file.relative) == null ? void 0 : _a.replace(/\\/g, "/")
                    },
                    params: props.type === "component" ? {
                      shouldShowTroubleRenderingAlert: true
                    } : void 0
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$a, {
                      size: "lg",
                      "prefix-icon": unref(TestResultsIcon),
                      "prefix-icon-class": "w-16px h-16px icon-dark-white",
                      onClick: _cache[3] || (_cache[3] = ($event) => emits("close"))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("createSpec.successPage.runSpecButton")), 1)
                      ]),
                      _: 1
                    }, 8, ["prefix-icon"])
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode(_sfc_main$a, {
                  size: "lg",
                  "prefix-icon": unref(__unplugin_components_1$2),
                  "prefix-icon-class": "w-16px h-16px icon-dark-gray-500",
                  variant: "outline",
                  onClick: _cache[4] || (_cache[4] = ($event) => emits("restart"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("createSpec.successPage.createAnotherSpecButton")), 1)
                  ]),
                  _: 1
                }, 8, ["prefix-icon"])
              ];
            }),
            _: 1
          })
        ], 64))
      ]);
    };
  }
});
const EmptyGenerator = {
  card: _sfc_main$3,
  entry: _sfc_main$1,
  matches: () => true,
  disabled: () => false,
  id: "empty"
};
const generatorList = [
  ScaffoldGenerator,
  EmptyGenerator
];
const getFilteredGeneratorList = (testingType) => computed(() => generatorList.filter((g) => g.matches(testingType)));
const generators = lodash.exports.keyBy(generatorList, "id");
function getPathForPlatform(posixPath) {
  if (!posixPath) {
    return null;
  }
  const cy = window.Cypress;
  const platform2 = (cy == null ? void 0 : cy.platform) || JSON.parse(decodeBase64Unicode(window.__CYPRESS_CONFIG__.base64Config)).platform;
  if (platform2 === "win32")
    return posixPath.replaceAll("/", "\\");
  return posixPath;
}
const _hoisted_1 = { class: "flex flex-col min-h-280px sm:min-w-640px" };
const _hoisted_2 = {
  key: 1,
  class: "flex-grow flex items-center self-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    initialGenerator: null,
    show: { type: Boolean },
    gql: null
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    var _a;
    const props = __props;
    const iteration = ref(0);
    gql`
fragment CreateSpecModal on Query {
  ...CreateSpecCards
  currentProject {
    id
    fileExtensionToUse
    defaultSpecFileName
    ...EmptyGenerator
  }
}
`;
    const currentGeneratorId = ref(props.initialGenerator);
    const { t } = useI18n();
    const title = ref(t("createSpec.newSpecModalTitle"));
    const generator = computed(() => {
      if (currentGeneratorId.value)
        return generators[currentGeneratorId.value];
      return singleGenerator.value;
    });
    const helpLink = computed(() => {
      if (title.value === t("createSpec.e2e.importFromScaffold.specsAddedHeader")) {
        return "https://on.cypress.io/writing-and-organizing-tests";
      }
      return "";
    });
    const specFileName = computed(() => {
      var _a2;
      return getPathForPlatform(((_a2 = props.gql.currentProject) == null ? void 0 : _a2.defaultSpecFileName) || "");
    });
    const filteredGenerators = getFilteredGeneratorList((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType);
    const singleGenerator = computed(() => filteredGenerators.value.length === 1 ? filteredGenerators.value[0] : null);
    whenever(not(generator), () => {
      title.value = t("createSpec.newSpecModalTitle");
    });
    function close() {
      currentGeneratorId.value = void 0;
      emits("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$d, {
        class: "transition transition-all duration-200",
        variant: "bare",
        title: title.value,
        "model-value": __props.show,
        "help-link": unref(helpLink),
        "data-cy": "create-spec-modal",
        "onUpdate:modelValue": close
      }, {
        overlay: withCtx(({ classes }) => [
          createVNode(unref(DialogOverlay), {
            class: normalizeClass([classes, "bg-gray-900 opacity-[0.97]"])
          }, null, 8, ["class"])
        ]),
        default: withCtx(() => {
          var _a2;
          return [
            createBaseVNode("div", _hoisted_1, [
              unref(generator) ? (openBlock(), createBlock(resolveDynamicComponent(unref(generator).entry), {
                key: `${unref(generator).id}-${iteration.value}`,
                title: title.value,
                "onUpdate:title": _cache[0] || (_cache[0] = ($event) => title.value = $event),
                gql: props.gql.currentProject,
                type: (_a2 = props.gql.currentProject) == null ? void 0 : _a2.currentTestingType,
                "spec-file-name": unref(specFileName),
                "other-generators": unref(filteredGenerators).length > 1,
                onRestart: _cache[1] || (_cache[1] = ($event) => {
                  currentGeneratorId.value = void 0;
                  iteration.value++;
                }),
                onClose: close
              }, null, 8, ["title", "gql", "type", "spec-file-name", "other-generators"])) : (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(_sfc_main$7, {
                  gql: props.gql,
                  generators: unref(filteredGenerators),
                  onSelect: _cache[2] || (_cache[2] = ($event) => currentGeneratorId.value = $event)
                }, null, 8, ["gql", "generators"])
              ]))
            ])
          ];
        }),
        _: 1
      }, 8, ["title", "model-value", "help-link"]);
    };
  }
});
export { DocumentIconBlank as D, __unplugin_components_1 as _, _sfc_main$9 as a, useCollapsibleTree as b, buildSpecTree as c, useVirtualList as d, _sfc_main$8 as e, fuzzySortSpecs as f, getDirIndexes as g, getFilteredGeneratorList as h, _sfc_main$7 as i, _sfc_main as j, __unplugin_components_2 as k, getPathForPlatform as l, makeFuzzyFoundSpec as m, useCachedSpecs as u };
