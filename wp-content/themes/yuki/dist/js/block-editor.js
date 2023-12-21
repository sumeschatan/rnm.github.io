(() => {
    var __webpack_modules__ = Array(29).concat([ module => {
        "use strict";
        module.exports = window["wp"]["plugins"];
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
        var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
        var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
        var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
        var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
        var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
        var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
        var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
        var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
        var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
        var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                    _defineProperty(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var MetaSettings = function MetaSettings(props) {
            var icon = (0, html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])('<svg xmlns="http://www.w3.org/2000/svg" width="90.82" height="29.55" viewBox="0 0 90.82 29.55"><g><path d="M27.92,14.38a10.15,10.15,0,0,0-.62,2.23h-.07c-.36-1.3-.59-2.06-.69-2.29L21.66,3.22H14.59L23.82,22V32.27H30V21.9L39.49,3.22H32.93Z" transform="translate(-14.59 -3.22)"/><path d="M60.07,20.42q0,7-5.63,7t-5.72-7.25V3.22H42.51v16.9q0,12.66,11.67,12.66,12.07,0,12.07-13V3.22H60.07Z" transform="translate(-14.59 -3.22)"/><path d="M95.45,3.22H88.06L79.74,15.39A13.81,13.81,0,0,0,78.91,17h-.09V3.22H72.63V32.27h6.19V18.06h.09a9.9,9.9,0,0,0,.77,1.52l8.8,12.69h7.83L85.06,17.08Z" transform="translate(-14.59 -3.22)"/><rect x="84.63" width="6.19" height="29.05"/></g></svg>');
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
                    target: "yuki-theme-meta-panel",
                    icon,
                    children: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Yuki Settings", "yuki")
                }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
                    isPinnable: true,
                    icon,
                    name: "yuki-theme-meta-panel",
                    title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Yuki Settings", "yuki"),
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "yuki-sidebar-container",
                        children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                            title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Layout", "yuki"),
                            initialOpen: true,
                            children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Container Style", "yuki"),
                                value: props.meta["site-container-style"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Boxed", "yuki"),
                                    value: "boxed"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Fluid", "yuki"),
                                    value: "fluid"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "site-container-style");
                                }
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Content Width", "yuki"),
                                value: props.meta["site-container-layout"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Narrow", "yuki"),
                                    value: "narrow"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Normal", "yuki"),
                                    value: "normal"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "site-container-layout");
                                }
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Sidebar Layout", "yuki"),
                                value: props.meta["site-sidebar-layout"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("No Sidebar", "yuki"),
                                    value: "no-sidebar"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Left Sidebar", "yuki"),
                                    value: "left-sidebar"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Right Sidebar", "yuki"),
                                    value: "right-sidebar"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "site-sidebar-layout");
                                }
                            }) ]
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                            title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Elements", "yuki"),
                            initialOpen: true,
                            children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Site Header", "yuki"),
                                value: props.meta["disable-site-header"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Enable", "yuki"),
                                    value: "no"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Disable", "yuki"),
                                    value: "yes"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "disable-site-header");
                                }
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Site Footer", "yuki"),
                                value: props.meta["disable-site-footer"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Enable", "yuki"),
                                    value: "no"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Disable", "yuki"),
                                    value: "yes"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "disable-site-footer");
                                }
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Article Header", "yuki"),
                                value: props.meta["disable-article-header"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Enable", "yuki"),
                                    value: "no"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Disable", "yuki"),
                                    value: "yes"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "disable-article-header");
                                }
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                                label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Content Spacing", "yuki"),
                                value: props.meta["disable-content-area-spacing"],
                                options: [ {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Inherit", "yuki"),
                                    value: "default"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Enable", "yuki"),
                                    value: "no"
                                }, {
                                    label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Disable", "yuki"),
                                    value: "yes"
                                } ],
                                onChange: function onChange(value) {
                                    props.setMetaFieldValue(value, "disable-content-area-spacing");
                                }
                            }) ]
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            style: {
                                textAlign: "center",
                                padding: "16px"
                            },
                            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("You can override the global customize settings for individual pages or posts here.", "yuki")
                            })
                        }) ]
                    })
                }) ]
            });
        };
        const __WEBPACK_DEFAULT_EXPORT__ = (0, _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0, 
        _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((function(select) {
            var postMeta = select("core/editor").getEditedPostAttribute("meta");
            var oldPostMeta = select("core/editor").getCurrentPostAttribute("meta");
            return {
                meta: _objectSpread(_objectSpread({}, oldPostMeta), postMeta),
                oldMeta: oldPostMeta
            };
        })), (0, _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)((function(dispatch) {
            return {
                setMetaFieldValue: function setMetaFieldValue(value, field) {
                    return dispatch("core/editor").editPost({
                        meta: _defineProperty({}, field, value)
                    });
                }
            };
        })))(MetaSettings);
    }, (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            Comment: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Comment,
            Element: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Element,
            ProcessingInstruction: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.ProcessingInstruction,
            Text: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Text,
            attributesToProps: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
            domToReact: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact,
            htmlToDOM: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM
        });
        var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
        const __WEBPACK_DEFAULT_EXPORT__ = _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["default"] || _lib_index_js__WEBPACK_IMPORTED_MODULE_0__;
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
        var html_dom_parser_1 = __importDefault(__webpack_require__(33));
        exports.htmlToDOM = html_dom_parser_1.default;
        var attributes_to_props_1 = __importDefault(__webpack_require__(40));
        exports.attributesToProps = attributes_to_props_1.default;
        var dom_to_react_1 = __importDefault(__webpack_require__(49));
        exports.domToReact = dom_to_react_1.default;
        var domhandler_1 = __webpack_require__(36);
        Object.defineProperty(exports, "Comment", {
            enumerable: true,
            get: function() {
                return domhandler_1.Comment;
            }
        });
        Object.defineProperty(exports, "Element", {
            enumerable: true,
            get: function() {
                return domhandler_1.Element;
            }
        });
        Object.defineProperty(exports, "ProcessingInstruction", {
            enumerable: true,
            get: function() {
                return domhandler_1.ProcessingInstruction;
            }
        });
        Object.defineProperty(exports, "Text", {
            enumerable: true,
            get: function() {
                return domhandler_1.Text;
            }
        });
        var domParserOptions = {
            lowerCaseAttributeNames: false
        };
        function HTMLReactParser(html, options) {
            if (typeof html !== "string") {
                throw new TypeError("First argument must be a string");
            }
            if (!html) {
                return [];
            }
            return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions), options);
        }
        exports["default"] = HTMLReactParser;
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var domparser_1 = __importDefault(__webpack_require__(34));
        var utilities_1 = __webpack_require__(35);
        var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/;
        function HTMLDOMParser(html) {
            if (typeof html !== "string") {
                throw new TypeError("First argument must be a string");
            }
            if (!html) {
                return [];
            }
            var match = html.match(DIRECTIVE_REGEX);
            var directive = match ? match[1] : undefined;
            return (0, utilities_1.formatDOM)((0, domparser_1.default)(html), null, directive);
        }
        exports["default"] = HTMLDOMParser;
    }, (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var HTML = "html";
        var HEAD = "head";
        var BODY = "body";
        var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/;
        var HEAD_TAG_REGEX = /<head[^]*>/i;
        var BODY_TAG_REGEX = /<body[^]*>/i;
        var parseFromDocument = function(html, tagName) {
            throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
        };
        var parseFromString = function(html, tagName) {
            throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
        };
        var DOMParser = typeof window === "object" && window.DOMParser;
        if (typeof DOMParser === "function") {
            var domParser_1 = new DOMParser;
            var mimeType_1 = "text/html";
            parseFromString = function(html, tagName) {
                if (tagName) {
                    html = "<".concat(tagName, ">").concat(html, "</").concat(tagName, ">");
                }
                return domParser_1.parseFromString(html, mimeType_1);
            };
            parseFromDocument = parseFromString;
        }
        if (typeof document === "object" && document.implementation) {
            var htmlDocument_1 = document.implementation.createHTMLDocument();
            parseFromDocument = function(html, tagName) {
                if (tagName) {
                    var element = htmlDocument_1.documentElement.querySelector(tagName);
                    if (element) {
                        element.innerHTML = html;
                    }
                    return htmlDocument_1;
                }
                htmlDocument_1.documentElement.innerHTML = html;
                return htmlDocument_1;
            };
        }
        var template = typeof document === "object" && document.createElement("template");
        var parseFromTemplate;
        if (template && template.content) {
            parseFromTemplate = function(html) {
                template.innerHTML = html;
                return template.content.childNodes;
            };
        }
        function domparser(html) {
            var _a, _b;
            var match = html.match(FIRST_TAG_REGEX);
            var firstTagName = match && match[1] ? match[1].toLowerCase() : "";
            switch (firstTagName) {
              case HTML:
                {
                    var doc = parseFromString(html);
                    if (!HEAD_TAG_REGEX.test(html)) {
                        var element = doc.querySelector(HEAD);
                        (_a = element === null || element === void 0 ? void 0 : element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                    }
                    if (!BODY_TAG_REGEX.test(html)) {
                        var element = doc.querySelector(BODY);
                        (_b = element === null || element === void 0 ? void 0 : element.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(element);
                    }
                    return doc.querySelectorAll(HTML);
                }

              case HEAD:
              case BODY:
                {
                    var elements = parseFromDocument(html).querySelectorAll(firstTagName);
                    if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
                        return elements[0].parentNode.childNodes;
                    }
                    return elements;
                }

              default:
                {
                    if (parseFromTemplate) {
                        return parseFromTemplate(html);
                    }
                    var element = parseFromDocument(html, BODY).querySelector(BODY);
                    return element.childNodes;
                }
            }
        }
        exports["default"] = domparser;
    }, (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.formatDOM = exports.formatAttributes = void 0;
        var domhandler_1 = __webpack_require__(36);
        var constants_1 = __webpack_require__(39);
        function getCaseSensitiveTagName(tagName) {
            return constants_1.CASE_SENSITIVE_TAG_NAMES_MAP[tagName];
        }
        function formatAttributes(attributes) {
            var map = {};
            var index = 0;
            var attributesLength = attributes.length;
            for (;index < attributesLength; index++) {
                var attribute = attributes[index];
                map[attribute.name] = attribute.value;
            }
            return map;
        }
        exports.formatAttributes = formatAttributes;
        function formatTagName(tagName) {
            tagName = tagName.toLowerCase();
            var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
            if (caseSensitiveTagName) {
                return caseSensitiveTagName;
            }
            return tagName;
        }
        function formatDOM(nodes, parent, directive) {
            if (parent === void 0) {
                parent = null;
            }
            var domNodes = [];
            var current;
            var index = 0;
            var nodesLength = nodes.length;
            for (;index < nodesLength; index++) {
                var node = nodes[index];
                switch (node.nodeType) {
                  case 1:
                    {
                        var tagName = formatTagName(node.nodeName);
                        current = new domhandler_1.Element(tagName, formatAttributes(node.attributes));
                        current.children = formatDOM(tagName === "template" ? node.content.childNodes : node.childNodes, current);
                        break;
                    }

                  case 3:
                    current = new domhandler_1.Text(node.nodeValue);
                    break;

                  case 8:
                    current = new domhandler_1.Comment(node.nodeValue);
                    break;

                  default:
                    continue;
                }
                var prev = domNodes[index - 1] || null;
                if (prev) {
                    prev.next = current;
                }
                current.parent = parent;
                current.prev = prev;
                current.next = null;
                domNodes.push(current);
            }
            if (directive) {
                current = new domhandler_1.ProcessingInstruction(directive.substring(0, directive.indexOf(" ")).toLowerCase(), directive);
                current.next = domNodes[0] || null;
                current.parent = parent;
                domNodes.unshift(current);
                if (domNodes[1]) {
                    domNodes[1].prev = domNodes[0];
                }
            }
            return domNodes;
        }
        exports.formatDOM = formatDOM;
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports) {
            for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DomHandler = void 0;
        var domelementtype_1 = __webpack_require__(37);
        var node_js_1 = __webpack_require__(38);
        __exportStar(__webpack_require__(38), exports);
        var defaultOpts = {
            withStartIndices: false,
            withEndIndices: false,
            xmlMode: false
        };
        var DomHandler = function() {
            function DomHandler(callback, options, elementCB) {
                this.dom = [];
                this.root = new node_js_1.Document(this.dom);
                this.done = false;
                this.tagStack = [ this.root ];
                this.lastNode = null;
                this.parser = null;
                if (typeof options === "function") {
                    elementCB = options;
                    options = defaultOpts;
                }
                if (typeof callback === "object") {
                    options = callback;
                    callback = undefined;
                }
                this.callback = callback !== null && callback !== void 0 ? callback : null;
                this.options = options !== null && options !== void 0 ? options : defaultOpts;
                this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
            }
            DomHandler.prototype.onparserinit = function(parser) {
                this.parser = parser;
            };
            DomHandler.prototype.onreset = function() {
                this.dom = [];
                this.root = new node_js_1.Document(this.dom);
                this.done = false;
                this.tagStack = [ this.root ];
                this.lastNode = null;
                this.parser = null;
            };
            DomHandler.prototype.onend = function() {
                if (this.done) return;
                this.done = true;
                this.parser = null;
                this.handleCallback(null);
            };
            DomHandler.prototype.onerror = function(error) {
                this.handleCallback(error);
            };
            DomHandler.prototype.onclosetag = function() {
                this.lastNode = null;
                var elem = this.tagStack.pop();
                if (this.options.withEndIndices) {
                    elem.endIndex = this.parser.endIndex;
                }
                if (this.elementCB) this.elementCB(elem);
            };
            DomHandler.prototype.onopentag = function(name, attribs) {
                var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
                var element = new node_js_1.Element(name, attribs, undefined, type);
                this.addNode(element);
                this.tagStack.push(element);
            };
            DomHandler.prototype.ontext = function(data) {
                var lastNode = this.lastNode;
                if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
                    lastNode.data += data;
                    if (this.options.withEndIndices) {
                        lastNode.endIndex = this.parser.endIndex;
                    }
                } else {
                    var node = new node_js_1.Text(data);
                    this.addNode(node);
                    this.lastNode = node;
                }
            };
            DomHandler.prototype.oncomment = function(data) {
                if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
                    this.lastNode.data += data;
                    return;
                }
                var node = new node_js_1.Comment(data);
                this.addNode(node);
                this.lastNode = node;
            };
            DomHandler.prototype.oncommentend = function() {
                this.lastNode = null;
            };
            DomHandler.prototype.oncdatastart = function() {
                var text = new node_js_1.Text("");
                var node = new node_js_1.CDATA([ text ]);
                this.addNode(node);
                text.parent = node;
                this.lastNode = text;
            };
            DomHandler.prototype.oncdataend = function() {
                this.lastNode = null;
            };
            DomHandler.prototype.onprocessinginstruction = function(name, data) {
                var node = new node_js_1.ProcessingInstruction(name, data);
                this.addNode(node);
            };
            DomHandler.prototype.handleCallback = function(error) {
                if (typeof this.callback === "function") {
                    this.callback(error, this.dom);
                } else if (error) {
                    throw error;
                }
            };
            DomHandler.prototype.addNode = function(node) {
                var parent = this.tagStack[this.tagStack.length - 1];
                var previousSibling = parent.children[parent.children.length - 1];
                if (this.options.withStartIndices) {
                    node.startIndex = this.parser.startIndex;
                }
                if (this.options.withEndIndices) {
                    node.endIndex = this.parser.endIndex;
                }
                parent.children.push(node);
                if (previousSibling) {
                    node.prev = previousSibling;
                    previousSibling.next = node;
                }
                node.parent = parent;
                this.lastNode = null;
            };
            return DomHandler;
        }();
        exports.DomHandler = DomHandler;
        exports["default"] = DomHandler;
    }, (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
        var ElementType;
        (function(ElementType) {
            ElementType["Root"] = "root";
            ElementType["Text"] = "text";
            ElementType["Directive"] = "directive";
            ElementType["Comment"] = "comment";
            ElementType["Script"] = "script";
            ElementType["Style"] = "style";
            ElementType["Tag"] = "tag";
            ElementType["CDATA"] = "cdata";
            ElementType["Doctype"] = "doctype";
        })(ElementType = exports.ElementType || (exports.ElementType = {}));
        function isTag(elem) {
            return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
        }
        exports.isTag = isTag;
        exports.Root = ElementType.Root;
        exports.Text = ElementType.Text;
        exports.Directive = ElementType.Directive;
        exports.Comment = ElementType.Comment;
        exports.Script = ElementType.Script;
        exports.Style = ElementType.Style;
        exports.Tag = ElementType.Tag;
        exports.CDATA = ElementType.CDATA;
        exports.Doctype = ElementType.Doctype;
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            return function(d, b) {
                if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
            };
        }();
        var __assign = this && this.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
        var domelementtype_1 = __webpack_require__(37);
        var Node = function() {
            function Node() {
                this.parent = null;
                this.prev = null;
                this.next = null;
                this.startIndex = null;
                this.endIndex = null;
            }
            Object.defineProperty(Node.prototype, "parentNode", {
                get: function() {
                    return this.parent;
                },
                set: function(parent) {
                    this.parent = parent;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Node.prototype, "previousSibling", {
                get: function() {
                    return this.prev;
                },
                set: function(prev) {
                    this.prev = prev;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Node.prototype, "nextSibling", {
                get: function() {
                    return this.next;
                },
                set: function(next) {
                    this.next = next;
                },
                enumerable: false,
                configurable: true
            });
            Node.prototype.cloneNode = function(recursive) {
                if (recursive === void 0) {
                    recursive = false;
                }
                return cloneNode(this, recursive);
            };
            return Node;
        }();
        exports.Node = Node;
        var DataNode = function(_super) {
            __extends(DataNode, _super);
            function DataNode(data) {
                var _this = _super.call(this) || this;
                _this.data = data;
                return _this;
            }
            Object.defineProperty(DataNode.prototype, "nodeValue", {
                get: function() {
                    return this.data;
                },
                set: function(data) {
                    this.data = data;
                },
                enumerable: false,
                configurable: true
            });
            return DataNode;
        }(Node);
        exports.DataNode = DataNode;
        var Text = function(_super) {
            __extends(Text, _super);
            function Text() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = domelementtype_1.ElementType.Text;
                return _this;
            }
            Object.defineProperty(Text.prototype, "nodeType", {
                get: function() {
                    return 3;
                },
                enumerable: false,
                configurable: true
            });
            return Text;
        }(DataNode);
        exports.Text = Text;
        var Comment = function(_super) {
            __extends(Comment, _super);
            function Comment() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = domelementtype_1.ElementType.Comment;
                return _this;
            }
            Object.defineProperty(Comment.prototype, "nodeType", {
                get: function() {
                    return 8;
                },
                enumerable: false,
                configurable: true
            });
            return Comment;
        }(DataNode);
        exports.Comment = Comment;
        var ProcessingInstruction = function(_super) {
            __extends(ProcessingInstruction, _super);
            function ProcessingInstruction(name, data) {
                var _this = _super.call(this, data) || this;
                _this.name = name;
                _this.type = domelementtype_1.ElementType.Directive;
                return _this;
            }
            Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
                get: function() {
                    return 1;
                },
                enumerable: false,
                configurable: true
            });
            return ProcessingInstruction;
        }(DataNode);
        exports.ProcessingInstruction = ProcessingInstruction;
        var NodeWithChildren = function(_super) {
            __extends(NodeWithChildren, _super);
            function NodeWithChildren(children) {
                var _this = _super.call(this) || this;
                _this.children = children;
                return _this;
            }
            Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
                get: function() {
                    var _a;
                    return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
                get: function() {
                    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
                get: function() {
                    return this.children;
                },
                set: function(children) {
                    this.children = children;
                },
                enumerable: false,
                configurable: true
            });
            return NodeWithChildren;
        }(Node);
        exports.NodeWithChildren = NodeWithChildren;
        var CDATA = function(_super) {
            __extends(CDATA, _super);
            function CDATA() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = domelementtype_1.ElementType.CDATA;
                return _this;
            }
            Object.defineProperty(CDATA.prototype, "nodeType", {
                get: function() {
                    return 4;
                },
                enumerable: false,
                configurable: true
            });
            return CDATA;
        }(NodeWithChildren);
        exports.CDATA = CDATA;
        var Document = function(_super) {
            __extends(Document, _super);
            function Document() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.type = domelementtype_1.ElementType.Root;
                return _this;
            }
            Object.defineProperty(Document.prototype, "nodeType", {
                get: function() {
                    return 9;
                },
                enumerable: false,
                configurable: true
            });
            return Document;
        }(NodeWithChildren);
        exports.Document = Document;
        var Element = function(_super) {
            __extends(Element, _super);
            function Element(name, attribs, children, type) {
                if (children === void 0) {
                    children = [];
                }
                if (type === void 0) {
                    type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
                }
                var _this = _super.call(this, children) || this;
                _this.name = name;
                _this.attribs = attribs;
                _this.type = type;
                return _this;
            }
            Object.defineProperty(Element.prototype, "nodeType", {
                get: function() {
                    return 1;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Element.prototype, "tagName", {
                get: function() {
                    return this.name;
                },
                set: function(name) {
                    this.name = name;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Element.prototype, "attributes", {
                get: function() {
                    var _this = this;
                    return Object.keys(this.attribs).map((function(name) {
                        var _a, _b;
                        return {
                            name,
                            value: _this.attribs[name],
                            namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                            prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
                        };
                    }));
                },
                enumerable: false,
                configurable: true
            });
            return Element;
        }(NodeWithChildren);
        exports.Element = Element;
        function isTag(node) {
            return (0, domelementtype_1.isTag)(node);
        }
        exports.isTag = isTag;
        function isCDATA(node) {
            return node.type === domelementtype_1.ElementType.CDATA;
        }
        exports.isCDATA = isCDATA;
        function isText(node) {
            return node.type === domelementtype_1.ElementType.Text;
        }
        exports.isText = isText;
        function isComment(node) {
            return node.type === domelementtype_1.ElementType.Comment;
        }
        exports.isComment = isComment;
        function isDirective(node) {
            return node.type === domelementtype_1.ElementType.Directive;
        }
        exports.isDirective = isDirective;
        function isDocument(node) {
            return node.type === domelementtype_1.ElementType.Root;
        }
        exports.isDocument = isDocument;
        function hasChildren(node) {
            return Object.prototype.hasOwnProperty.call(node, "children");
        }
        exports.hasChildren = hasChildren;
        function cloneNode(node, recursive) {
            if (recursive === void 0) {
                recursive = false;
            }
            var result;
            if (isText(node)) {
                result = new Text(node.data);
            } else if (isComment(node)) {
                result = new Comment(node.data);
            } else if (isTag(node)) {
                var children = recursive ? cloneChildren(node.children) : [];
                var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
                children.forEach((function(child) {
                    return child.parent = clone_1;
                }));
                if (node.namespace != null) {
                    clone_1.namespace = node.namespace;
                }
                if (node["x-attribsNamespace"]) {
                    clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
                }
                if (node["x-attribsPrefix"]) {
                    clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
                }
                result = clone_1;
            } else if (isCDATA(node)) {
                var children = recursive ? cloneChildren(node.children) : [];
                var clone_2 = new CDATA(children);
                children.forEach((function(child) {
                    return child.parent = clone_2;
                }));
                result = clone_2;
            } else if (isDocument(node)) {
                var children = recursive ? cloneChildren(node.children) : [];
                var clone_3 = new Document(children);
                children.forEach((function(child) {
                    return child.parent = clone_3;
                }));
                if (node["x-mode"]) {
                    clone_3["x-mode"] = node["x-mode"];
                }
                result = clone_3;
            } else if (isDirective(node)) {
                var instruction = new ProcessingInstruction(node.name, node.data);
                if (node["x-name"] != null) {
                    instruction["x-name"] = node["x-name"];
                    instruction["x-publicId"] = node["x-publicId"];
                    instruction["x-systemId"] = node["x-systemId"];
                }
                result = instruction;
            } else {
                throw new Error("Not implemented yet: ".concat(node.type));
            }
            result.startIndex = node.startIndex;
            result.endIndex = node.endIndex;
            if (node.sourceCodeLocation != null) {
                result.sourceCodeLocation = node.sourceCodeLocation;
            }
            return result;
        }
        exports.cloneNode = cloneNode;
        function cloneChildren(childs) {
            var children = childs.map((function(child) {
                return cloneNode(child, true);
            }));
            for (var i = 1; i < children.length; i++) {
                children[i].prev = children[i - 1];
                children[i - 1].next = children[i];
            }
            return children;
        }
    }, (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES = void 0;
        exports.CASE_SENSITIVE_TAG_NAMES = [ "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath" ];
        exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES.reduce((function(accumulator, tagName) {
            accumulator[tagName.toLowerCase()] = tagName;
            return accumulator;
        }), {});
    }, (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var react_property_1 = __webpack_require__(41);
        var utilities_1 = __webpack_require__(43);
        var UNCONTROLLED_COMPONENT_ATTRIBUTES = [ "checked", "value" ];
        var UNCONTROLLED_COMPONENT_NAMES = [ "input", "select", "textarea" ];
        var valueOnlyInputs = {
            reset: true,
            submit: true
        };
        function attributesToProps(attributes, nodeName) {
            if (attributes === void 0) {
                attributes = {};
            }
            var props = {};
            var isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
            for (var attributeName in attributes) {
                var attributeValue = attributes[attributeName];
                if ((0, react_property_1.isCustomAttribute)(attributeName)) {
                    props[attributeName] = attributeValue;
                    continue;
                }
                var attributeNameLowerCased = attributeName.toLowerCase();
                var propName = getPropName(attributeNameLowerCased);
                if (propName) {
                    var propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
                    if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) && UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) && !isInputValueOnly) {
                        propName = getPropName("default" + attributeNameLowerCased);
                    }
                    props[propName] = attributeValue;
                    switch (propertyInfo && propertyInfo.type) {
                      case react_property_1.BOOLEAN:
                        props[propName] = true;
                        break;

                      case react_property_1.OVERLOADED_BOOLEAN:
                        if (attributeValue === "") {
                            props[propName] = true;
                        }
                        break;
                    }
                    continue;
                }
                if (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES) {
                    props[attributeName] = attributeValue;
                }
            }
            (0, utilities_1.setStyleProp)(attributes.style, props);
            return props;
        }
        exports["default"] = attributesToProps;
        function getPropName(attributeName) {
            return react_property_1.possibleStandardNames[attributeName];
        }
    }, (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        const RESERVED = 0;
        const STRING = 1;
        const BOOLEANISH_STRING = 2;
        const BOOLEAN = 3;
        const OVERLOADED_BOOLEAN = 4;
        const NUMERIC = 5;
        const POSITIVE_NUMERIC = 6;
        function getPropertyInfo(name) {
            return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
            this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
            this.attributeName = attributeName;
            this.attributeNamespace = attributeNamespace;
            this.mustUseProperty = mustUseProperty;
            this.propertyName = name;
            this.type = type;
            this.sanitizeURL = sanitizeURL;
            this.removeEmptyString = removeEmptyString;
        }
        const properties = {};
        const reservedProps = [ "children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style" ];
        reservedProps.forEach((name => {
            properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        }));
        [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((([name, attributeName]) => {
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        }));
        [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        }));
        [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        }));
        [ "allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        }));
        [ "checked", "multiple", "muted", "selected" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        }));
        [ "capture", "download" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        }));
        [ "cols", "rows", "size", "span" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        }));
        [ "rowSpan", "start" ].forEach((name => {
            properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        }));
        const CAMELIZE = /[\-\:]([a-z])/g;
        const capitalize = token => token[1].toUpperCase();
        [ "accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height" ].forEach((attributeName => {
            const name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        }));
        [ "xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type" ].forEach((attributeName => {
            const name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        }));
        [ "xml:base", "xml:lang", "xml:space" ].forEach((attributeName => {
            const name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        }));
        [ "tabIndex", "crossOrigin" ].forEach((attributeName => {
            properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        }));
        const xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        [ "src", "href", "action", "formAction" ].forEach((attributeName => {
            properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        }));
        const {CAMELCASE, SAME, possibleStandardNames: possibleStandardNamesOptimized} = __webpack_require__(42);
        const ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        const ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        const isCustomAttribute = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"));
        const possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(((accumulator, standardName) => {
            const propName = possibleStandardNamesOptimized[standardName];
            if (propName === SAME) {
                accumulator[standardName] = standardName;
            } else if (propName === CAMELCASE) {
                accumulator[standardName.toLowerCase()] = standardName;
            } else {
                accumulator[standardName] = propName;
            }
            return accumulator;
        }), {});
        exports.BOOLEAN = BOOLEAN;
        exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
        exports.NUMERIC = NUMERIC;
        exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
        exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
        exports.RESERVED = RESERVED;
        exports.STRING = STRING;
        exports.getPropertyInfo = getPropertyInfo;
        exports.isCustomAttribute = isCustomAttribute;
        exports.possibleStandardNames = possibleStandardNames;
    }, (__unused_webpack_module, exports) => {
        var SAME = 0;
        exports.SAME = SAME;
        var CAMELCASE = 1;
        exports.CAMELCASE = CAMELCASE;
        exports.possibleStandardNames = {
            accept: 0,
            acceptCharset: 1,
            "accept-charset": "acceptCharset",
            accessKey: 1,
            action: 0,
            allowFullScreen: 1,
            alt: 0,
            as: 0,
            async: 0,
            autoCapitalize: 1,
            autoComplete: 1,
            autoCorrect: 1,
            autoFocus: 1,
            autoPlay: 1,
            autoSave: 1,
            capture: 0,
            cellPadding: 1,
            cellSpacing: 1,
            challenge: 0,
            charSet: 1,
            checked: 0,
            children: 0,
            cite: 0,
            class: "className",
            classID: 1,
            className: 1,
            cols: 0,
            colSpan: 1,
            content: 0,
            contentEditable: 1,
            contextMenu: 1,
            controls: 0,
            controlsList: 1,
            coords: 0,
            crossOrigin: 1,
            dangerouslySetInnerHTML: 1,
            data: 0,
            dateTime: 1,
            default: 0,
            defaultChecked: 1,
            defaultValue: 1,
            defer: 0,
            dir: 0,
            disabled: 0,
            disablePictureInPicture: 1,
            disableRemotePlayback: 1,
            download: 0,
            draggable: 0,
            encType: 1,
            enterKeyHint: 1,
            for: "htmlFor",
            form: 0,
            formMethod: 1,
            formAction: 1,
            formEncType: 1,
            formNoValidate: 1,
            formTarget: 1,
            frameBorder: 1,
            headers: 0,
            height: 0,
            hidden: 0,
            high: 0,
            href: 0,
            hrefLang: 1,
            htmlFor: 1,
            httpEquiv: 1,
            "http-equiv": "httpEquiv",
            icon: 0,
            id: 0,
            innerHTML: 1,
            inputMode: 1,
            integrity: 0,
            is: 0,
            itemID: 1,
            itemProp: 1,
            itemRef: 1,
            itemScope: 1,
            itemType: 1,
            keyParams: 1,
            keyType: 1,
            kind: 0,
            label: 0,
            lang: 0,
            list: 0,
            loop: 0,
            low: 0,
            manifest: 0,
            marginWidth: 1,
            marginHeight: 1,
            max: 0,
            maxLength: 1,
            media: 0,
            mediaGroup: 1,
            method: 0,
            min: 0,
            minLength: 1,
            multiple: 0,
            muted: 0,
            name: 0,
            noModule: 1,
            nonce: 0,
            noValidate: 1,
            open: 0,
            optimum: 0,
            pattern: 0,
            placeholder: 0,
            playsInline: 1,
            poster: 0,
            preload: 0,
            profile: 0,
            radioGroup: 1,
            readOnly: 1,
            referrerPolicy: 1,
            rel: 0,
            required: 0,
            reversed: 0,
            role: 0,
            rows: 0,
            rowSpan: 1,
            sandbox: 0,
            scope: 0,
            scoped: 0,
            scrolling: 0,
            seamless: 0,
            selected: 0,
            shape: 0,
            size: 0,
            sizes: 0,
            span: 0,
            spellCheck: 1,
            src: 0,
            srcDoc: 1,
            srcLang: 1,
            srcSet: 1,
            start: 0,
            step: 0,
            style: 0,
            summary: 0,
            tabIndex: 1,
            target: 0,
            title: 0,
            type: 0,
            useMap: 1,
            value: 0,
            width: 0,
            wmode: 0,
            wrap: 0,
            about: 0,
            accentHeight: 1,
            "accent-height": "accentHeight",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: 1,
            "alignment-baseline": "alignmentBaseline",
            allowReorder: 1,
            alphabetic: 0,
            amplitude: 0,
            arabicForm: 1,
            "arabic-form": "arabicForm",
            ascent: 0,
            attributeName: 1,
            attributeType: 1,
            autoReverse: 1,
            azimuth: 0,
            baseFrequency: 1,
            baselineShift: 1,
            "baseline-shift": "baselineShift",
            baseProfile: 1,
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: 1,
            capHeight: 1,
            "cap-height": "capHeight",
            clip: 0,
            clipPath: 1,
            "clip-path": "clipPath",
            clipPathUnits: 1,
            clipRule: 1,
            "clip-rule": "clipRule",
            color: 0,
            colorInterpolation: 1,
            "color-interpolation": "colorInterpolation",
            colorInterpolationFilters: 1,
            "color-interpolation-filters": "colorInterpolationFilters",
            colorProfile: 1,
            "color-profile": "colorProfile",
            colorRendering: 1,
            "color-rendering": "colorRendering",
            contentScriptType: 1,
            contentStyleType: 1,
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            datatype: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: 1,
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: 1,
            "dominant-baseline": "dominantBaseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: 1,
            elevation: 0,
            enableBackground: 1,
            "enable-background": "enableBackground",
            end: 0,
            exponent: 0,
            externalResourcesRequired: 1,
            fill: 0,
            fillOpacity: 1,
            "fill-opacity": "fillOpacity",
            fillRule: 1,
            "fill-rule": "fillRule",
            filter: 0,
            filterRes: 1,
            filterUnits: 1,
            floodOpacity: 1,
            "flood-opacity": "floodOpacity",
            floodColor: 1,
            "flood-color": "floodColor",
            focusable: 0,
            fontFamily: 1,
            "font-family": "fontFamily",
            fontSize: 1,
            "font-size": "fontSize",
            fontSizeAdjust: 1,
            "font-size-adjust": "fontSizeAdjust",
            fontStretch: 1,
            "font-stretch": "fontStretch",
            fontStyle: 1,
            "font-style": "fontStyle",
            fontVariant: 1,
            "font-variant": "fontVariant",
            fontWeight: 1,
            "font-weight": "fontWeight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: 1,
            "glyph-name": "glyphName",
            glyphOrientationHorizontal: 1,
            "glyph-orientation-horizontal": "glyphOrientationHorizontal",
            glyphOrientationVertical: 1,
            "glyph-orientation-vertical": "glyphOrientationVertical",
            glyphRef: 1,
            gradientTransform: 1,
            gradientUnits: 1,
            hanging: 0,
            horizAdvX: 1,
            "horiz-adv-x": "horizAdvX",
            horizOriginX: 1,
            "horiz-origin-x": "horizOriginX",
            ideographic: 0,
            imageRendering: 1,
            "image-rendering": "imageRendering",
            in2: 0,
            in: 0,
            inlist: 0,
            intercept: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            k: 0,
            kernelMatrix: 1,
            kernelUnitLength: 1,
            kerning: 0,
            keyPoints: 1,
            keySplines: 1,
            keyTimes: 1,
            lengthAdjust: 1,
            letterSpacing: 1,
            "letter-spacing": "letterSpacing",
            lightingColor: 1,
            "lighting-color": "lightingColor",
            limitingConeAngle: 1,
            local: 0,
            markerEnd: 1,
            "marker-end": "markerEnd",
            markerHeight: 1,
            markerMid: 1,
            "marker-mid": "markerMid",
            markerStart: 1,
            "marker-start": "markerStart",
            markerUnits: 1,
            markerWidth: 1,
            mask: 0,
            maskContentUnits: 1,
            maskUnits: 1,
            mathematical: 0,
            mode: 0,
            numOctaves: 1,
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: 1,
            "overline-position": "overlinePosition",
            overlineThickness: 1,
            "overline-thickness": "overlineThickness",
            paintOrder: 1,
            "paint-order": "paintOrder",
            panose1: 0,
            "panose-1": "panose1",
            pathLength: 1,
            patternContentUnits: 1,
            patternTransform: 1,
            patternUnits: 1,
            pointerEvents: 1,
            "pointer-events": "pointerEvents",
            points: 0,
            pointsAtX: 1,
            pointsAtY: 1,
            pointsAtZ: 1,
            prefix: 0,
            preserveAlpha: 1,
            preserveAspectRatio: 1,
            primitiveUnits: 1,
            property: 0,
            r: 0,
            radius: 0,
            refX: 1,
            refY: 1,
            renderingIntent: 1,
            "rendering-intent": "renderingIntent",
            repeatCount: 1,
            repeatDur: 1,
            requiredExtensions: 1,
            requiredFeatures: 1,
            resource: 0,
            restart: 0,
            result: 0,
            results: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            security: 0,
            seed: 0,
            shapeRendering: 1,
            "shape-rendering": "shapeRendering",
            slope: 0,
            spacing: 0,
            specularConstant: 1,
            specularExponent: 1,
            speed: 0,
            spreadMethod: 1,
            startOffset: 1,
            stdDeviation: 1,
            stemh: 0,
            stemv: 0,
            stitchTiles: 1,
            stopColor: 1,
            "stop-color": "stopColor",
            stopOpacity: 1,
            "stop-opacity": "stopOpacity",
            strikethroughPosition: 1,
            "strikethrough-position": "strikethroughPosition",
            strikethroughThickness: 1,
            "strikethrough-thickness": "strikethroughThickness",
            string: 0,
            stroke: 0,
            strokeDasharray: 1,
            "stroke-dasharray": "strokeDasharray",
            strokeDashoffset: 1,
            "stroke-dashoffset": "strokeDashoffset",
            strokeLinecap: 1,
            "stroke-linecap": "strokeLinecap",
            strokeLinejoin: 1,
            "stroke-linejoin": "strokeLinejoin",
            strokeMiterlimit: 1,
            "stroke-miterlimit": "strokeMiterlimit",
            strokeWidth: 1,
            "stroke-width": "strokeWidth",
            strokeOpacity: 1,
            "stroke-opacity": "strokeOpacity",
            suppressContentEditableWarning: 1,
            suppressHydrationWarning: 1,
            surfaceScale: 1,
            systemLanguage: 1,
            tableValues: 1,
            targetX: 1,
            targetY: 1,
            textAnchor: 1,
            "text-anchor": "textAnchor",
            textDecoration: 1,
            "text-decoration": "textDecoration",
            textLength: 1,
            textRendering: 1,
            "text-rendering": "textRendering",
            to: 0,
            transform: 0,
            typeof: 0,
            u1: 0,
            u2: 0,
            underlinePosition: 1,
            "underline-position": "underlinePosition",
            underlineThickness: 1,
            "underline-thickness": "underlineThickness",
            unicode: 0,
            unicodeBidi: 1,
            "unicode-bidi": "unicodeBidi",
            unicodeRange: 1,
            "unicode-range": "unicodeRange",
            unitsPerEm: 1,
            "units-per-em": "unitsPerEm",
            unselectable: 0,
            vAlphabetic: 1,
            "v-alphabetic": "vAlphabetic",
            values: 0,
            vectorEffect: 1,
            "vector-effect": "vectorEffect",
            version: 0,
            vertAdvY: 1,
            "vert-adv-y": "vertAdvY",
            vertOriginX: 1,
            "vert-origin-x": "vertOriginX",
            vertOriginY: 1,
            "vert-origin-y": "vertOriginY",
            vHanging: 1,
            "v-hanging": "vHanging",
            vIdeographic: 1,
            "v-ideographic": "vIdeographic",
            viewBox: 1,
            viewTarget: 1,
            visibility: 0,
            vMathematical: 1,
            "v-mathematical": "vMathematical",
            vocab: 0,
            widths: 0,
            wordSpacing: 1,
            "word-spacing": "wordSpacing",
            writingMode: 1,
            "writing-mode": "writingMode",
            x1: 0,
            x2: 0,
            x: 0,
            xChannelSelector: 1,
            xHeight: 1,
            "x-height": "xHeight",
            xlinkActuate: 1,
            "xlink:actuate": "xlinkActuate",
            xlinkArcrole: 1,
            "xlink:arcrole": "xlinkArcrole",
            xlinkHref: 1,
            "xlink:href": "xlinkHref",
            xlinkRole: 1,
            "xlink:role": "xlinkRole",
            xlinkShow: 1,
            "xlink:show": "xlinkShow",
            xlinkTitle: 1,
            "xlink:title": "xlinkTitle",
            xlinkType: 1,
            "xlink:type": "xlinkType",
            xmlBase: 1,
            "xml:base": "xmlBase",
            xmlLang: 1,
            "xml:lang": "xmlLang",
            xmlns: 0,
            "xml:space": "xmlSpace",
            xmlnsXlink: 1,
            "xmlns:xlink": "xmlnsXlink",
            xmlSpace: 1,
            y1: 0,
            y2: 0,
            y: 0,
            yChannelSelector: 1,
            z: 0,
            zoomAndPan: 1
        };
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.returnFirstArg = exports.canTextBeChildOfNode = exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports.PRESERVE_CUSTOM_ATTRIBUTES = exports.setStyleProp = exports.isCustomComponent = void 0;
        var react_1 = __webpack_require__(44);
        var style_to_js_1 = __importDefault(__webpack_require__(45));
        var RESERVED_SVG_MATHML_ELEMENTS = new Set([ "annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph" ]);
        function isCustomComponent(tagName, props) {
            if (!tagName.includes("-")) {
                return Boolean(props && typeof props.is === "string");
            }
            if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
                return false;
            }
            return true;
        }
        exports.isCustomComponent = isCustomComponent;
        var styleOptions = {
            reactCompat: true
        };
        function setStyleProp(style, props) {
            if (typeof style !== "string") {
                return;
            }
            if (!style.trim()) {
                props.style = {};
                return;
            }
            try {
                props.style = (0, style_to_js_1.default)(style, styleOptions);
            } catch (error) {
                props.style = {};
            }
        }
        exports.setStyleProp = setStyleProp;
        exports.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split(".")[0]) >= 16;
        exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([ "tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset" ]);
        var canTextBeChildOfNode = function(node) {
            return !exports.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
        };
        exports.canTextBeChildOfNode = canTextBeChildOfNode;
        var returnFirstArg = function(arg) {
            return arg;
        };
        exports.returnFirstArg = returnFirstArg;
    }, module => {
        "use strict";
        module.exports = window["React"];
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var style_to_object_1 = __importDefault(__webpack_require__(46));
        var utilities_1 = __webpack_require__(48);
        function StyleToJS(style, options) {
            var output = {};
            if (!style || typeof style !== "string") {
                return output;
            }
            (0, style_to_object_1.default)(style, (function(property, value) {
                if (property && value) {
                    output[(0, utilities_1.camelCase)(property, options)] = value;
                }
            }));
            return output;
        }
        exports["default"] = StyleToJS;
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var inline_style_parser_1 = __importDefault(__webpack_require__(47));
        function StyleToObject(style, iterator) {
            var styleObject = null;
            if (!style || typeof style !== "string") {
                return styleObject;
            }
            var declarations = (0, inline_style_parser_1.default)(style);
            var hasIterator = typeof iterator === "function";
            declarations.forEach((function(declaration) {
                if (declaration.type !== "declaration") {
                    return;
                }
                var property = declaration.property, value = declaration.value;
                if (hasIterator) {
                    iterator(property, value, declaration);
                } else if (value) {
                    styleObject = styleObject || {};
                    styleObject[property] = value;
                }
            }));
            return styleObject;
        }
        exports["default"] = StyleToObject;
    }, module => {
        var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
        var NEWLINE_REGEX = /\n/g;
        var WHITESPACE_REGEX = /^\s*/;
        var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
        var COLON_REGEX = /^:\s*/;
        var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
        var SEMICOLON_REGEX = /^[;\s]*/;
        var TRIM_REGEX = /^\s+|\s+$/g;
        var NEWLINE = "\n";
        var FORWARD_SLASH = "/";
        var ASTERISK = "*";
        var EMPTY_STRING = "";
        var TYPE_COMMENT = "comment";
        var TYPE_DECLARATION = "declaration";
        module.exports = function(style, options) {
            if (typeof style !== "string") {
                throw new TypeError("First argument must be a string");
            }
            if (!style) return [];
            options = options || {};
            var lineno = 1;
            var column = 1;
            function updatePosition(str) {
                var lines = str.match(NEWLINE_REGEX);
                if (lines) lineno += lines.length;
                var i = str.lastIndexOf(NEWLINE);
                column = ~i ? str.length - i : column + str.length;
            }
            function position() {
                var start = {
                    line: lineno,
                    column
                };
                return function(node) {
                    node.position = new Position(start);
                    whitespace();
                    return node;
                };
            }
            function Position(start) {
                this.start = start;
                this.end = {
                    line: lineno,
                    column
                };
                this.source = options.source;
            }
            Position.prototype.content = style;
            var errorsList = [];
            function error(msg) {
                var err = new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
                err.reason = msg;
                err.filename = options.source;
                err.line = lineno;
                err.column = column;
                err.source = style;
                if (options.silent) {
                    errorsList.push(err);
                } else {
                    throw err;
                }
            }
            function match(re) {
                var m = re.exec(style);
                if (!m) return;
                var str = m[0];
                updatePosition(str);
                style = style.slice(str.length);
                return m;
            }
            function whitespace() {
                match(WHITESPACE_REGEX);
            }
            function comments(rules) {
                var c;
                rules = rules || [];
                while (c = comment()) {
                    if (c !== false) {
                        rules.push(c);
                    }
                }
                return rules;
            }
            function comment() {
                var pos = position();
                if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
                var i = 2;
                while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
                    ++i;
                }
                i += 2;
                if (EMPTY_STRING === style.charAt(i - 1)) {
                    return error("End of comment missing");
                }
                var str = style.slice(2, i - 2);
                column += 2;
                updatePosition(str);
                style = style.slice(i);
                column += 2;
                return pos({
                    type: TYPE_COMMENT,
                    comment: str
                });
            }
            function declaration() {
                var pos = position();
                var prop = match(PROPERTY_REGEX);
                if (!prop) return;
                comment();
                if (!match(COLON_REGEX)) return error("property missing ':'");
                var val = match(VALUE_REGEX);
                var ret = pos({
                    type: TYPE_DECLARATION,
                    property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
                    value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
                });
                match(SEMICOLON_REGEX);
                return ret;
            }
            function declarations() {
                var decls = [];
                comments(decls);
                var decl;
                while (decl = declaration()) {
                    if (decl !== false) {
                        decls.push(decl);
                        comments(decls);
                    }
                }
                return decls;
            }
            whitespace();
            return declarations();
        };
        function trim(str) {
            return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
        }
    }, (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.camelCase = void 0;
        var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
        var HYPHEN_REGEX = /-([a-z])/g;
        var NO_HYPHEN_REGEX = /^[^-]+$/;
        var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
        var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
        var skipCamelCase = function(property) {
            return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
        };
        var capitalize = function(match, character) {
            return character.toUpperCase();
        };
        var trimHyphen = function(match, prefix) {
            return "".concat(prefix, "-");
        };
        var camelCase = function(property, options) {
            if (options === void 0) {
                options = {};
            }
            if (skipCamelCase(property)) {
                return property;
            }
            property = property.toLowerCase();
            if (options.reactCompat) {
                property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
            } else {
                property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
            }
            return property.replace(HYPHEN_REGEX, capitalize);
        };
        exports.camelCase = camelCase;
    }, function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var react_1 = __webpack_require__(44);
        var attributes_to_props_1 = __importDefault(__webpack_require__(40));
        var utilities_1 = __webpack_require__(43);
        var React = {
            cloneElement: react_1.cloneElement,
            createElement: react_1.createElement,
            isValidElement: react_1.isValidElement
        };
        function domToReact(nodes, options) {
            var reactElements = [];
            var hasReplace = typeof (options === null || options === void 0 ? void 0 : options.replace) === "function";
            var transform = (options === null || options === void 0 ? void 0 : options.transform) || utilities_1.returnFirstArg;
            var _a = (options === null || options === void 0 ? void 0 : options.library) || React, cloneElement = _a.cloneElement, createElement = _a.createElement, isValidElement = _a.isValidElement;
            var nodesLength = nodes.length;
            for (var index = 0; index < nodesLength; index++) {
                var node = nodes[index];
                if (hasReplace) {
                    var replaceElement = options.replace(node);
                    if (isValidElement(replaceElement)) {
                        if (nodesLength > 1) {
                            replaceElement = cloneElement(replaceElement, {
                                key: replaceElement.key || index
                            });
                        }
                        reactElements.push(transform(replaceElement, node, index));
                        continue;
                    }
                }
                if (node.type === "text") {
                    var isWhitespace = !node.data.trim().length;
                    if (isWhitespace && node.parent && !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
                        continue;
                    }
                    if ((options === null || options === void 0 ? void 0 : options.trim) && isWhitespace) {
                        continue;
                    }
                    reactElements.push(transform(node.data, node, index));
                    continue;
                }
                var element = node;
                var props = {};
                if (skipAttributesToProps(element)) {
                    (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
                    props = element.attribs;
                } else if (element.attribs) {
                    props = (0, attributes_to_props_1.default)(element.attribs, element.name);
                }
                var children = void 0;
                switch (node.type) {
                  case "script":
                  case "style":
                    if (node.children[0]) {
                        props.dangerouslySetInnerHTML = {
                            __html: node.children[0].data
                        };
                    }
                    break;

                  case "tag":
                    if (node.name === "textarea" && node.children[0]) {
                        props.defaultValue = node.children[0].data;
                    } else if (node.children && node.children.length) {
                        children = domToReact(node.children, options);
                    }
                    break;

                  default:
                    continue;
                }
                if (nodesLength > 1) {
                    props.key = index;
                }
                reactElements.push(transform(createElement(node.name, props, children), node, index));
            }
            return reactElements.length === 1 ? reactElements[0] : reactElements;
        }
        exports["default"] = domToReact;
        function skipAttributesToProps(node) {
            return utilities_1.PRESERVE_CUSTOM_ATTRIBUTES && node.type === "tag" && (0, utilities_1.isCustomComponent)(node.name, node.attribs);
        }
    }, module => {
        "use strict";
        module.exports = window["wp"]["compose"];
    }, module => {
        "use strict";
        module.exports = window["wp"]["editPost"];
    }, module => {
        "use strict";
        module.exports = window["wp"]["components"];
    }, module => {
        "use strict";
        module.exports = window["wp"]["data"];
    }, module => {
        "use strict";
        module.exports = window["wp"]["i18n"];
    }, (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        if (false) {} else {
            module.exports = __webpack_require__(56);
        }
    }, (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        if (true) {
            (function() {
                "use strict";
                var React = __webpack_require__(44);
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || typeof maybeIterable !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                }
                var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                function error(format) {
                    {
                        {
                            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                }
                function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([ stack ]);
                        }
                        var argsWithFormat = args.map((function(item) {
                            return String(item);
                        }));
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if (typeof type === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
                            return true;
                        }
                    }
                    return false;
                }
                function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                }
                function getContextName(type) {
                    return type.displayName || "Context";
                }
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). " + "This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch (type) {
                      case REACT_FRAGMENT_TYPE:
                        return "Fragment";

                      case REACT_PORTAL_TYPE:
                        return "Portal";

                      case REACT_PROFILER_TYPE:
                        return "Profiler";

                      case REACT_STRICT_MODE_TYPE:
                        return "StrictMode";

                      case REACT_SUSPENSE_TYPE:
                        return "Suspense";

                      case REACT_SUSPENSE_LIST_TYPE:
                        return "SuspenseList";
                    }
                    if (typeof type === "object") {
                        switch (type.$$typeof) {
                          case REACT_CONTEXT_TYPE:
                            var context = type;
                            return getContextName(context) + ".Consumer";

                          case REACT_PROVIDER_TYPE:
                            var provider = type;
                            return getContextName(provider._context) + ".Provider";

                          case REACT_FORWARD_REF_TYPE:
                            return getWrappedName(type, type.render, "ForwardRef");

                          case REACT_MEMO_TYPE:
                            var outerName = type.displayName || null;
                            if (outerName !== null) {
                                return outerName;
                            }
                            return getComponentNameFromType(type.type) || "Memo";

                          case REACT_LAZY_TYPE:
                            {
                                var lazyComponent = type;
                                var payload = lazyComponent._payload;
                                var init = lazyComponent._init;
                                try {
                                    return getComponentNameFromType(init(payload));
                                } catch (x) {
                                    return null;
                                }
                            }
                        }
                    }
                    return null;
                }
                var assign = Object.assign;
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                function disabledLog() {}
                disabledLog.__reactDisabledLog = true;
                function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                }
                function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
                        }
                    }
                }
                var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix;
                function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix === undefined) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix + name;
                    }
                }
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap;
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== undefined) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = undefined;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher.current;
                        ReactCurrentDispatcher.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                                c--;
                            }
                            for (;s >= 1 && c >= 0; s--, c--) {
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        } while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally {
                        reentry = false;
                        {
                            ReactCurrentDispatcher.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                }
                function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                }
                function shouldConstruct(Component) {
                    var prototype = Component.prototype;
                    return !!(prototype && prototype.isReactComponent);
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch (type) {
                      case REACT_SUSPENSE_TYPE:
                        return describeBuiltInComponentFrame("Suspense");

                      case REACT_SUSPENSE_LIST_TYPE:
                        return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if (typeof type === "object") {
                        switch (type.$$typeof) {
                          case REACT_FORWARD_REF_TYPE:
                            return describeFunctionComponentFrame(type.render);

                          case REACT_MEMO_TYPE:
                            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

                          case REACT_LAZY_TYPE:
                            {
                                var lazyComponent = type;
                                var payload = lazyComponent._payload;
                                var init = lazyComponent._init;
                                try {
                                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                } catch (x) {}
                            }
                        }
                    }
                    return "";
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame.setExtraStackFrame(null);
                        }
                    }
                }
                function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for (var typeSpecName in typeSpecs) {
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !(error$1 instanceof Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s" + " `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                                    setCurrentlyValidatingElement(null);
                                }
                                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                }
                var isArrayImpl = Array.isArray;
                function isArray(a) {
                    return isArrayImpl(a);
                }
                function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                }
                function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s." + " This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                }
                var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown;
                var specialPropRefWarningShown;
                var didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== undefined;
                }
                function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== undefined;
                }
                function warnIfStringRefCannotBeAutoConverted(config, self) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". ' + "Support for string refs will be removed in a future major release. " + "This case cannot be automatically converted to an arrow function. " + "We ask you to manually fix this case by using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-string-ref", getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    {
                        var warnAboutAccessingKey = function() {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        };
                        warnAboutAccessingKey.isReactWarning = true;
                        Object.defineProperty(props, "key", {
                            get: warnAboutAccessingKey,
                            configurable: true
                        });
                    }
                }
                function defineRefPropWarningGetter(props, displayName) {
                    {
                        var warnAboutAccessingRef = function() {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        };
                        warnAboutAccessingRef.isReactWarning = true;
                        Object.defineProperty(props, "ref", {
                            get: warnAboutAccessingRef,
                            configurable: true
                        });
                    }
                }
                var ReactElement = function(type, key, ref, self, source, owner, props) {
                    var element = {
                        $$typeof: REACT_ELEMENT_TYPE,
                        type,
                        key,
                        ref,
                        props,
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                function jsxDEV(type, config, maybeKey, source, self) {
                    {
                        var propName;
                        var props = {};
                        var key = null;
                        var ref = null;
                        if (maybeKey !== undefined) {
                            {
                                checkKeyStringCoercion(maybeKey);
                            }
                            key = "" + maybeKey;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            warnIfStringRefCannotBeAutoConverted(config, self);
                        }
                        for (propName in config) {
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                        if (type && type.defaultProps) {
                            var defaultProps = type.defaultProps;
                            for (propName in defaultProps) {
                                if (props[propName] === undefined) {
                                    props[propName] = defaultProps[propName];
                                }
                            }
                        }
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                    }
                }
                var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                }
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                function isValidElement(object) {
                    {
                        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                }
                function getDeclarationErrorAddendum() {
                    {
                        if (ReactCurrentOwner$1.current) {
                            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                            if (name) {
                                return "\n\nCheck the render method of `" + name + "`.";
                            }
                        }
                        return "";
                    }
                }
                function getSourceInfoErrorAddendum(source) {
                    {
                        if (source !== undefined) {
                            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                            var lineNumber = source.lineNumber;
                            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                        }
                        return "";
                    }
                }
                var ownerHasKeyUseWarning = {};
                function getCurrentComponentErrorInfo(parentType) {
                    {
                        var info = getDeclarationErrorAddendum();
                        if (!info) {
                            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                            if (parentName) {
                                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                            }
                        }
                        return info;
                    }
                }
                function validateExplicitKey(element, parentType) {
                    {
                        if (!element._store || element._store.validated || element.key != null) {
                            return;
                        }
                        element._store.validated = true;
                        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            return;
                        }
                        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                        var childOwner = "";
                        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                        }
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.' + "%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                }
                function validateChildKeys(node, parentType) {
                    {
                        if (typeof node !== "object") {
                            return;
                        }
                        if (isArray(node)) {
                            for (var i = 0; i < node.length; i++) {
                                var child = node[i];
                                if (isValidElement(child)) {
                                    validateExplicitKey(child, parentType);
                                }
                            }
                        } else if (isValidElement(node)) {
                            if (node._store) {
                                node._store.validated = true;
                            }
                        } else if (node) {
                            var iteratorFn = getIteratorFn(node);
                            if (typeof iteratorFn === "function") {
                                if (iteratorFn !== node.entries) {
                                    var iterator = iteratorFn.call(node);
                                    var step;
                                    while (!(step = iterator.next()).done) {
                                        if (isValidElement(step.value)) {
                                            validateExplicitKey(step.value, parentType);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === undefined || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                }
                function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for (var i = 0; i < keys.length; i++) {
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. " + "React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
                function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
                    {
                        var validType = isValidElementType(type);
                        if (!validType) {
                            var info = "";
                            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                                info += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and named imports.";
                            }
                            var sourceInfo = getSourceInfoErrorAddendum(source);
                            if (sourceInfo) {
                                info += sourceInfo;
                            } else {
                                info += getDeclarationErrorAddendum();
                            }
                            var typeString;
                            if (type === null) {
                                typeString = "null";
                            } else if (isArray(type)) {
                                typeString = "array";
                            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                                info = " Did you accidentally export a JSX literal instead of a component?";
                            } else {
                                typeString = typeof type;
                            }
                            error("React.jsx: type is invalid -- expected a string (for " + "built-in components) or a class/function (for composite " + "components) but got: %s.%s", typeString, info);
                        }
                        var element = jsxDEV(type, props, key, source, self);
                        if (element == null) {
                            return element;
                        }
                        if (validType) {
                            var children = props.children;
                            if (children !== undefined) {
                                if (isStaticChildren) {
                                    if (isArray(children)) {
                                        for (var i = 0; i < children.length; i++) {
                                            validateChildKeys(children[i], type);
                                        }
                                        if (Object.freeze) {
                                            Object.freeze(children);
                                        }
                                    } else {
                                        error("React.jsx: Static children should always be an array. " + "You are likely explicitly calling React.jsxs or React.jsxDEV. " + "Use the Babel transform instead.");
                                    }
                                } else {
                                    validateChildKeys(children, type);
                                }
                            }
                        }
                        if (type === REACT_FRAGMENT_TYPE) {
                            validateFragmentProps(element);
                        } else {
                            validatePropTypes(element);
                        }
                        return element;
                    }
                }
                function jsxWithValidationStatic(type, props, key) {
                    {
                        return jsxWithValidation(type, props, key, true);
                    }
                }
                function jsxWithValidationDynamic(type, props, key) {
                    {
                        return jsxWithValidation(type, props, key, false);
                    }
                }
                var jsx = jsxWithValidationDynamic;
                var jsxs = jsxWithValidationStatic;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.jsx = jsx;
                exports.jsxs = jsxs;
            })();
        }
    } ]);
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
        var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
        var _admin_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
        (function(wp) {
            (0, _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("yuki-theme-settings", {
                render: _admin_settings__WEBPACK_IMPORTED_MODULE_1__["default"]
            });
        })(window.wp);
    })();
})();