(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([["map-features", "bookmarks-action-button"], {
    81004: (e, t, n) => {
        e.exports = n.p + "build/_/08a10d93b5a5ae1d7b9c8a60d1130dfe.svg"
    }
    ,
    48102: (e, t, n) => {
        e.exports = n.p + "build/_/0271ba6b4fcda690a80e91f92edc7177.svg"
    }
    ,
    9912: (e, t, n) => {
        e.exports = n.p + "build/_/9659bbe9fa69477d2a166dabea8ac48d.svg"
    }
    ,
    23546: (e, t, n) => {
        e.exports = n.p + "build/_/4456c10ecbf5d583bdeb1c3d97ef263a.svg"
    }
    ,
    90851: (e, t, n) => {
        e.exports = n.p + "build/_/24fb17f86df88b118167ce528daea382.svg"
    }
    ,
    82490: (e, t, n) => {
        e.exports = n.p + "build/_/c52e7fc4ec73e5c05bc322b50bb07b4c.svg"
    }
    ,
    2509: (e, t, n) => {
        e.exports = n.p + "build/_/495897677a950e88ac35bee6acd284f7.svg"
    }
    ,
    82461: (e, t, n) => {
        e.exports = n.p + "build/_/78fd7e5f9b721a273df35726afb8f72c.svg"
    }
    ,
    42363: (e, t, n) => {
        e.exports = n.p + "build/_/c291190c2aa1f05e02c2c78d173ec5f7.svg"
    }
    ,
    17049: (e, t, n) => {
        e.exports = n.p + "build/_/61683eb23625df83e8aef32ee06c1e14.svg"
    }
    ,
    57070: (e, t, n) => {
        e.exports = n.p + "build/_/9f79510c62081a2e8295f974516febd3.svg"
    }
    ,
    69777: (e, t, n) => {
        e.exports = n.p + "build/_/526b632dc5485eae718acc1a54c8e8b1.svg"
    }
    ,
    2285: (e, t, n) => {
        e.exports = n.p + "build/_/0adc8779bdefa7c4b9f58f4fff819771.svg"
    }
    ,
    72852: (e, t, n) => {
        e.exports = n.p + "build/_/cb2341db6d0af3d9838b64ec9da115b6.svg"
    }
    ,
    23811: (e, t, n) => {
        e.exports = n.p + "build/_/fb41b675b9ab147c27b75c1787065148.svg"
    }
    ,
    26779: (e, t, n) => {
        e.exports = n.p + "build/_/9f7ea1b9a3434256ba04e9331ebdffe6.svg"
    }
    ,
    90870: (e, t, n) => {
        e.exports = n.p + "build/_/fd161c881e6392111418a1036fe1188e.svg"
    }
    ,
    69085: (e, t, n) => {
        e.exports = n.p + "build/_/ebe60c9063e4a91162d1366e790ea391.svg"
    }
    ,
    35263: () => {}
    ,
    76362: (e, t, n) => {
        "use strict";
        function r(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            e && e.addEventListener && e.addEventListener.apply(e, t)
        }
        function o(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            e && e.removeEventListener && e.removeEventListener.apply(e, t)
        }
        n.d(t, {
            on: () => r,
            S1: () => o,
            jU: () => a
        });
        var a = "undefined" != typeof window
    }
    ,
    94975: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => a
        });
        var r = n(87363)
          , o = n(97582);
        function a(e, t) {
            void 0 === t && (t = []);
            var n, a, i, s, c, l, u, d, p = (a = {
                loading: !0
            },
            void 0 === (n = t) && (n = []),
            void 0 === a && (a = {
                loading: !1
            }),
            i = (0,
            r.useRef)(0),
            s = (0,
            r.useRef)(!1),
            c = (0,
            r.useCallback)(function() {
                return s.current
            }, []),
            (0,
            r.useEffect)(function() {
                return s.current = !0,
                function() {
                    s.current = !1
                }
            }, []),
            u = (l = (0,
            r.useState)(a))[0],
            d = l[1],
            [u, (0,
            r.useCallback)(function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = ++i.current;
                return d(function(e) {
                    return (0,
                    o.pi)((0,
                    o.pi)({}, e), {
                        loading: !0
                    })
                }),
                e.apply(void 0, t).then(function(e) {
                    return c() && r === i.current && d({
                        value: e,
                        loading: !1
                    }),
                    e
                }, function(e) {
                    return c() && r === i.current && d({
                        error: e,
                        loading: !1
                    }),
                    e
                })
            }, n)]), v = p[0], m = p[1];
            return (0,
            r.useEffect)(function() {
                m()
            }, [m]),
            v
        }
    }
    ,
    35450: (e, t, n) => {
        "use strict";
        function r(e, t) {
            return void 0 === t && (t = {}),
            (t.baseUrl || "") + "/print" + e
        }
        n.d(t, {
            Z: () => r
        })
    }
    ,
    30079: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => D
        });
        var r = n(34788)
          , o = n(18007)
          , a = n(87363)
          , i = n(28216)
          , s = n(55877)
          , c = n.n(s)
          , l = n(36897)
          , u = n(90585)
          , d = n(28342)
          , p = n(31336)
          , v = n(99091)
          , m = n(37721)
          , g = n(93905)
          , f = n(98109)
          , h = n(37358)
          , k = n(20513)
          , b = n(60517)
          , y = n(93522)
          , _ = n(92616)
          , w = n(39014)
          , E = n(97479)
          , C = n(90366)
          , S = (0,
        n(44748).Z)("bookmark-error-message-view")
          , Z = function(e) {
            return a.createElement("div", {
                className: S()
            }, e.text)
        }
          , L = n(51605)
          , P = n(50415)
          , M = n(18188)
          , I = n(14246)
          , R = function(e) {
            var t = (0,
            M._)(a.useState(e.status), 2)
              , n = t[0]
              , r = t[1];
            return a.useEffect(function() {
                r(e.status);
                var t = window.setTimeout(function() {
                    return r(null)
                }, 3e3);
                return function() {
                    clearTimeout(t)
                }
            }, [e.status]),
            a.createElement(a.Fragment, null, a.createElement(I.Z, {
                role: n ? "status" : "presentation",
                ariaAtomic: !0
            }, n || a.createElement(a.Fragment, null)), e.children)
        }
          , x = {
            addBookmark: m.Z.addBookmark,
            addPlace: m.Z.addPlace,
            addBookmarkToFolders: m.Z.addBookmarkToFolders,
            removeBookmark: m.Z.removeBookmark,
            startAction: m.Z.startAction,
            initBookmarksManager: m.Z.initBookmarksManager,
            checkAuthorization: v.Z.checkAuthorization,
            initMasstransitManager: g.Z.initMasstransitManager,
            addStop: g.Z.addStop,
            addLine: g.Z.addLine,
            removeStop: g.Z.removeStop,
            removeLine: g.Z.removeLine
        };
        function T(e) {
            return "search" === e.type
        }
        function A(e) {
            return "stop" === e.type
        }
        function F(e) {
            return "line" === e.type
        }
        function N(e, t) {
            return k.qR(t) ? T(e) ? k.gL(e.data, t) : k.JN(e.data.uri, t) : null
        }
        function z(e, t) {
            var n = h.fS(e)
              , r = e.displayCoordinates;
            if (r && ("business" !== e.type || t)) {
                var o = e.coordinates;
                return (0,
                l.J)(o, r) ? n : h.AW(r)
            }
            return n
        }
        var D = (0,
        u.Z)(i.$j(function(e) {
            return {
                rootFolder: e.bookmarks.rootFolder,
                actions: e.bookmarks.actions,
                places: e.bookmarks.places,
                masstransitActions: e.masstransitBookmarks.actions,
                stops: e.masstransitBookmarks.stops,
                lines: e.masstransitBookmarks.lines,
                hasPlacesInitError: e.bookmarks.hasPlacesInitError,
                hasInitError: e.bookmarks.hasInitError,
                isSidebarCollapsed: (0,
                f.X)(e)
            }
        }, x), p.ZP, d.ZP)(function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._ref = a.createRef(),
                n._savedTimer = -1,
                n._initialOpenTimerId = -1,
                n._getFoldersIdsContainingSubject = function() {
                    var e, t = n.props.subject, r = null == (e = n.props.rootFolder) ? void 0 : e.children, o = new Set;
                    return !r || A(t) || F(t) || r.forEach(function(e) {
                        N(t, e) && o.add(e.id)
                    }),
                    o
                }
                ,
                n._setupSavedTimer = function() {
                    n._savedTimer = window.setTimeout(function() {
                        n.setState({
                            showSavedAfterClick: !1
                        })
                    }, 2e3)
                }
                ,
                n._onHover = function() {
                    n.setState({
                        showSavedAfterClick: !1
                    })
                }
                ,
                n._onClick = function() {
                    var e = n.props
                      , t = n.state.lastActionId
                      , r = A(e.subject) || F(e.subject)
                      , o = e.loginDialogType || (r ? "favoritesMasstransit" : "favorites");
                    e.checkAuthorization(o, function() {
                        window.clearTimeout(n._savedTimer);
                        var e = t && n._getActions()[t];
                        if (!e || !e.inProgress) {
                            var o = c().v4();
                            if (n.setState({
                                lastActionId: o
                            }),
                            r) {
                                var a = n._findBookmark();
                                a ? n._removeBookmark(o, a) : n._addMasstransitBookmark(o),
                                n.setState({
                                    showSavedAfterClick: !a
                                })
                            } else
                                n.setState({
                                    showFolderSelection: !n.state.showFolderSelection
                                })
                        }
                    }, void 0, e.beforeAuth)
                }
                ,
                n._onPlaceAddClick = function(e) {
                    var t = n.props.subject;
                    if (T(t)) {
                        var r = t.data
                          , o = n.props.getToday();
                        n.props.addPlace({
                            placeId: e,
                            data: {
                                title: k.cx(e, n.props.config),
                                coords: [r.displayCoordinates[0], r.displayCoordinates[1]],
                                created: o,
                                modified: o,
                                lastUsed: o,
                                tags: [],
                                addressLine: "business" === r.type && r.fullAddress || r.address || "",
                                addressLineShort: r.title
                            }
                        })
                    }
                    n._onFoldersPopupClose()
                }
                ,
                n._onContainingFolderIdsChange = function() {
                    n._onFoldersSaveClick()
                }
                ,
                n._onFolderClick = function(e) {
                    var t = n.props
                      , r = n.state.lastActionId
                      , o = t.subject;
                    if (!(A(o) || F(o)) && r) {
                        if ("new" === e) {
                            var a = {
                                uri: (T(o) ? z(o.data) : o.data.uri) || "",
                                title: o.data.title || "",
                                description: o.data.description
                            };
                            t.startAction({
                                type: "create_folder",
                                data: {
                                    values: {
                                        title: "",
                                        description: ""
                                    },
                                    child: a,
                                    isShownDescription: !1
                                }
                            }),
                            n._onFoldersPopupClose();
                            return
                        }
                        var i = n.state.containingFolderIds.has(e.id)
                          , s = n.state.containingFolderIds;
                        i ? s.delete(e.id) : s.add(e.id),
                        n.setState({
                            containingFolderIds: s
                        }, n._onContainingFolderIdsChange)
                    }
                }
                ,
                n._getActions = function() {
                    var e = n.props;
                    return A(e.subject) || F(e.subject) ? e.masstransitActions : e.actions
                }
                ,
                n._findBookmark = function() {
                    var e, t = n.props, r = t.subject;
                    if (A(r)) {
                        var o = r.data.id;
                        e = t.stops && t.stops.find(function(e) {
                            return e.stopId === o
                        })
                    } else if (F(r)) {
                        var a = r.data.lineId;
                        e = t.lines && t.lines.find(function(e) {
                            return e.lineId === a
                        })
                    } else
                        t.rootFolder && (e = N(r, t.rootFolder));
                    return e || void 0
                }
                ,
                n._addMasstransitBookmark = function(e) {
                    var t = n.props
                      , r = t.subject;
                    if (n._setupSavedTimer(),
                    A(r)) {
                        var o = r.data;
                        t.addStop({
                            actionId: e,
                            data: {
                                stopId: o.id,
                                coordinates: [o.coordinates[0], o.coordinates[1]],
                                title: o.name,
                                transportTypes: o.transports[0] && o.transports[0].Types
                            }
                        })
                    } else if (F(r)) {
                        var a = r.data;
                        t.addLine({
                            actionId: e,
                            data: {
                                lineId: a.lineId,
                                transportTypes: a.Types,
                                title: a.name,
                                uri: a.uri
                            }
                        })
                    }
                }
                ,
                n._removeBookmark = function(e, t, r) {
                    "stopId"in t ? n.props.removeStop({
                        actionId: e,
                        recordId: t.recordId
                    }) : "lineId"in t ? n.props.removeLine({
                        actionId: e,
                        recordId: t.recordId
                    }) : n.props.removeBookmark({
                        actionId: e,
                        bookmarkId: t.id,
                        parentId: r
                    })
                }
                ,
                n._onFoldersPopupClose = function() {
                    n.setState({
                        showFolderSelection: !1,
                        containingFolderIds: n._getFoldersIdsContainingSubject()
                    })
                }
                ,
                n._onFoldersSaveClick = function() {
                    var e, t = n.props, r = n.state.lastActionId, o = t.subject;
                    if (!(A(o) || F(o)) && r) {
                        var a = n._getFoldersIdsContainingSubject()
                          , i = null == (e = n.props.rootFolder) ? void 0 : e.children;
                        if (i && o) {
                            n._setupSavedTimer();
                            var s = {
                                uri: (T(o) ? z(o.data, t.isPointedOnMap) : o.data.uri) || "",
                                title: o.data.title || "",
                                description: o.data.description
                            }
                              , c = [];
                            i.forEach(function(e) {
                                if (k.qR(e)) {
                                    var t = n.state.containingFolderIds.has(e.id)
                                      , i = a.has(e.id)
                                      , s = N(o, e);
                                    t && !i ? c.push(e.id) : !t && i && s && n._removeBookmark(r, s, e.id)
                                }
                            }),
                            c.length > 0 && t.addBookmarkToFolders({
                                actionId: r,
                                folderIds: c,
                                data: s,
                                index: 0
                            }),
                            n.setState({
                                showSavedAfterClick: !n._findBookmark()
                            })
                        }
                        n.setState({
                            showFolderSelection: !1,
                            lastActionId: null
                        })
                    }
                }
                ,
                n._onScroll = function() {
                    n.state.showFolderSelection || n.setState({
                        showSavedAfterClick: !1
                    })
                }
                ,
                n._onErrorPopupClose = function() {
                    n.setState({
                        lastActionId: null
                    })
                }
                ,
                n._renderFolderSelection = function() {
                    var e, t = n.props;
                    if (!n.state.showFolderSelection || !t.rootFolder && t.hasPlacesInitError)
                        return null;
                    var o = a.createElement(C.Z, {
                        folders: (null == (e = t.rootFolder) ? void 0 : e.children) || [],
                        places: t.places,
                        containingFolderIds: n.state.containingFolderIds,
                        onFolderClick: t.hasInitError ? void 0 : n._onFolderClick,
                        onSave: n._onFoldersSaveClick,
                        onPlaceAddClick: t.hasPlacesInitError ? void 0 : n._onPlaceAddClick
                    });
                    return t.wrapper ? t.wrapper(o) : a.createElement(E.Z, {
                        getTarget: function() {
                            return n._ref.current
                        },
                        onClose: n._onFoldersPopupClose,
                        onScroll: t.onScroll
                    }, function(e) {
                        var t = e.onScroll;
                        return a.cloneElement(o, (0,
                        r._)({}, o.props, {
                            onScroll: t
                        }))
                    })
                }
                ,
                n._renderErrorPopup = function() {
                    var e = n.state
                      , t = e.lastActionId && n.props.actions[e.lastActionId]
                      , r = t && t.error ? ["add_bookmark", "add_line", "add_stop"].includes(t.type) ? "add" : "remove" : void 0;
                    if (!r)
                        return null;
                    var o = "add" === r ? "Не удалось сохранить закладку.\nПовторите позже." : "Не удалось удалить закладку.\nПовторите позже."
                      , i = n.props.subject;
                    (A(i) || F(i)) && (o = "add" === r ? "Не удалось сохранить объект.\nПовторите позже." : "Не удалось удалить объект.\nПовторите позже.");
                    var s = a.createElement(Z, {
                        text: o
                    });
                    return n.props.wrapper ? n.props.wrapper(s) : a.createElement(_.Z, {
                        position: "bottom",
                        type: "error",
                        getTarget: function() {
                            return n._ref.current
                        },
                        onClose: n._onErrorPopupClose,
                        isShown: !0
                    }, s)
                }
                ,
                n.state = {
                    lastActionId: null,
                    showSavedAfterClick: !1,
                    showFolderSelection: !1,
                    containingFolderIds: n._getFoldersIdsContainingSubject()
                },
                n
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                var e = this.props;
                e.config.authorization && (A(e.subject) || F(e.subject) ? e.initMasstransitManager() : e.initBookmarksManager(),
                e.initiallyOpen && (this._initialOpenTimerId = window.setTimeout(this._onClick, 500)))
            }
            ,
            n.componentDidUpdate = function(e, t) {
                !e.rootFolder && this.props.rootFolder && this.setState({
                    containingFolderIds: this._getFoldersIdsContainingSubject()
                }),
                t.showFolderSelection === this.state.showFolderSelection || this.state.showFolderSelection || null == this.props.onClose || this.props.onClose.call(this.props)
            }
            ,
            n.componentWillUnmount = function() {
                this._onFoldersPopupClose(),
                window.clearTimeout(this._savedTimer),
                window.clearTimeout(this._initialOpenTimerId)
            }
            ,
            n.render = function() {
                var e, t = this, n = this.props, r = this._getActions(), o = this.state, i = !!(!n.rootFolder && n.hasPlacesInitError && n.config.authorization);
                A(n.subject) ? i = !!(!n.stops && n.config.authorization) : F(n.subject) && (i = !!(!n.lines && n.config.authorization));
                var s = !!this._findBookmark()
                  , c = !!(o.lastActionId && r[o.lastActionId] && r[o.lastActionId].error);
                e = i ? "Загрузка" : o.showSavedAfterClick ? "Сохранено" : s ? "Изменить" : "Сохранить";
                var l = n.subject;
                return a.createElement(a.Fragment, null, a.createElement(R, {
                    status: e
                }, a.createElement(y.Z, {
                    text: e,
                    position: "bottom",
                    hideOnClick: !0,
                    isDisabled: F(l) || this.state.showFolderSelection || this.props.disableHover,
                    force: s && o.showSavedAfterClick,
                    onScroll: "close"
                }, function(e) {
                    return a.createElement(b.ZP, {
                        name: "bookmark",
                        nodeState: {
                            uri: A(l) || F(l) ? void 0 : l.data.uri || h.fS(l.data),
                            state: c ? "error" : s ? "saved" : "unsaved",
                            type: T(l) && "bookmark" || l.type,
                            disabled: i
                        },
                        metrikaGoal: ["goal_deepuse", n.additionalMetrikaGoal].filter(P.y),
                        logClick: !0,
                        useParentState: !0
                    }, n.children({
                        saved: s,
                        disabled: i,
                        onClick: t._onClick,
                        ref: (0,
                        L.l)(t._ref, e),
                        onHover: t._onHover,
                        isOpen: t.state.showFolderSelection
                    }))
                })), this._renderErrorPopup(), this._renderFolderSelection(), a.createElement(w.Z, {
                    eventHandler: this._onScroll
                }))
            }
            ,
            t
        }(a.Component))
    }
    ,
    61307: (e, t, n) => {
        "use strict";
        var r, o = n(65807), a = {
            ru: "ru",
            uk: "uk",
            en: "en",
            tr: "tr",
            kk: "kk",
            uz: "uz",
            az: "en",
            ar: "en",
            "sr-Latn": "en",
            hy: "en",
            es: "en"
        };
        t.Z = {
            ROOT_FOLDER_ID: "the_root_folder",
            FAVORITES_FOLDER_ID: "the_favorites_folder",
            DISCOVERY_FEED_FOLDER_ID: "the_discovery_feed_folder",
            HOME_ID: "home",
            WORK_ID: "work",
            FOLDER_TAGS: {
                SHOW_ON_MAP: "show-on-map",
                SHARED: "maps:shared",
                CLOSED: "maps:shared:closed"
            },
            getLib: function(e) {
                return r || (r = Promise.all([(0,
                o.Z)(e.bookmarks.url), window._maps_internal_webviewSetCookiePromise ? window._maps_internal_webviewSetCookiePromise.then(function() {
                    window._maps_internal_webviewSetCookiePromise = void 0
                }) : Promise.resolve()]).then(function() {
                    if (!window.ya)
                        throw Error("Library for bookmarks is not found");
                    var t = window.ya.bookmarks;
                    return t.config({
                        cloudApiUrl: e.cloudApi.url,
                        lang: a[e.lang],
                        useClientStorage: !1,
                        backgroundSync: !e.isYango
                    }),
                    t
                })),
                r
            }
        }
    }
    ,
    87501: (e, t, n) => {
        "use strict";
        n.d(t, {
            ef: () => c,
            AV: () => u,
            g1: () => d,
            cK: () => p
        });
        var r = n(18188)
          , o = n(89318)
          , a = n(36768)
          , i = "bookmark-filled-24"
          , s = [i]
          , c = [i, "landmark", "street", "heart", "fire-station", "medical", "malls", "hypermarket", "marketplace", "giftshop", "restaurants", "cafe", "fast-food", "pizzeria", "wine", "pub", "tableware", "auto", "gasstation", "driving-school", "beach", "airports", "photo", "travel-agency", "mountain", "park", "building", "locality", "viewpoint", "circus", "stage", "concert-hall", "petshop", "pet-playground", "flower-shop", "playground", "fitness", "baby-shop", "construction-tool", "auto-parts", "hairdressers", "university", "offline", "fireworks", "smile", "country", "province", "police", "justice", "science", "library", "school", "information", "post-office", "factory", "trash", "locker", "canteen", "night-club", "liquor-store", "confectionary", "dairy", "butcher-shop", "food-market", "greengrocery", "fish-store", "sushi", "bakery", "grass", "garden", "forest", "zoo", "stadium", "equestrian", "tennis", "sanatorium", "childrens-camp", "museum", "monument", "theatre", "gallery", "exhibition-center", "fountain", "waterpark", "baths", "swimming-pool", "ski-resort", "skating-rink", "well", "clothes-shop", "shoe-store", "perfume-shop", "jewelry-store", "stationery-store", "bookstore", "news", "electronics", "furniture-store", "household-supplies", "music-store", "art", "sport", "online-store", "opticial-store", "supermarket", "bus-station", "railway-terminal", "bike", "port", "pier", "airfield", "cableway", "taxi", "banks", "atm", "pawnshop", "hotels", "mobile-phones", "tailor", "dry-cleaning", "laundry", "yoga", "tire-fitting", "racing", "shooting", "cinemas", "bowling", "pool-hall", "dancehall", "animation", "ticket-office", "stenograffia", "beauty", "spa", "nail-studio", "medicine", "urban-service-nursing-room", "indoor-infra-elevator-disabled", "indoor-service-charging-socket", "indoor-service-luggage"]
          , l = "#ffbb00"
          , u = [l, "#ff8b52", "#50ba3d", "#6c75e0", "#9b50e5", "#4cbae5", "#f56151", "#676767", "#ca78db", "#9c8b7c", "#66ccb3", "#3d8af5"];
        function d(e, t) {
            var n = (0,
            r._)((null == e ? void 0 : e.split(":")) || [], 2)
              , c = n[0]
              , u = void 0 === c ? i : c
              , d = n[1];
            return {
                url: (s.includes(u) ? a.G({
                    name: u
                }, t) : o.Gr({
                    type: "rubrics",
                    name: u,
                    size: "normal"
                }, t)) || a.G({
                    name: i
                }, t),
                name: u,
                color: (null == d ? void 0 : d.toLowerCase()) || l
            }
        }
        function p(e) {
            return e.name + ":" + e.color
        }
    }
    ,
    20513: (e, t, n) => {
        "use strict";
        n.d(t, {
            $D: () => h,
            Gg: () => f,
            g2: () => g,
            Q9: () => $,
            xt: () => N,
            qC: () => Z,
            JN: () => L,
            gL: () => P,
            Qd: () => M,
            XW: () => R,
            Ji: () => I,
            Xq: () => T,
            Nx: () => x,
            fz: () => U,
            h_: () => O,
            rG: () => w,
            cx: () => k,
            qJ: () => y,
            YQ: () => D,
            vg: () => j,
            uT: () => W,
            HK: () => Y,
            qR: () => B,
            lC: () => z,
            W1: () => K,
            GK: () => q,
            PW: () => G,
            Nn: () => H,
            td: () => F,
            Y9: () => _,
            Rh: () => A
        });
        var r, o, a = n(34788), i = n(36897), s = n(37358), c = n(61307), l = n(50770), u = n(22370), d = n(80129), p = n(674), v = n(16060), m = {
            "ymapsbm1://pin": "pin",
            "ymapsbm1://geo": "toponym",
            "ymapsbm1://org": "business"
        }, g = 140, f = 400, h = 1e3;
        function k(e, t) {
            return ({
                home: "Дом",
                work: "Работа"
            })[e]
        }
        var b = function(e) {
            return r || (r = c.Z.getLib(e).then(function(e) {
                return e.getSearchHistoryManager()
            })),
            r
        };
        function y(e) {
            return o || (o = c.Z.getLib(e).then(function(e) {
                return e.getPlacesManager()
            }).then(function(t) {
                return (0,
                v.Z)(t, e),
                t
            })),
            o
        }
        function _(e) {
            return e.authorization ? y(e).then(function(e) {
                return w(e.getAll())
            }) : Promise.resolve(void 0)
        }
        function w(e) {
            var t = {};
            return e[c.Z.HOME_ID] && (t[c.Z.HOME_ID] = e[c.Z.HOME_ID]),
            e[c.Z.WORK_ID] && (t[c.Z.WORK_ID] = e[c.Z.WORK_ID]),
            t
        }
        function E(e, t) {
            return "children"in t ? t.children.map(function(t) {
                return E(e, t)
            }).find(Boolean) || null : e(t) ? t : null
        }
        function C(e, t) {
            return "children"in t ? e(t) ? t : t.children.find(function(t) {
                return "children"in t && !!C(e, t)
            }) || null : null
        }
        function S(e, t) {
            return C(function(t) {
                return t.id === e
            }, t)
        }
        function Z(e, t) {
            return E(function(t) {
                return t.id === e
            }, t)
        }
        function L(e, t) {
            return E(function(t) {
                return t.uri === e
            }, t)
        }
        function P(e, t) {
            var n;
            return L(s.fS(e), t) || (n = {
                coordinates: e.displayCoordinates
            },
            E(function(e) {
                var t = s.BW(e.uri);
                return s.l4(e.uri) && null !== t && (0,
                i.J)(t, n.coordinates)
            }, t))
        }
        function M(e, t) {
            return C(function(t) {
                return t.children.some(function(t) {
                    return e === t.id
                })
            }, t)
        }
        function I(e) {
            return e.reduce(function(e, t) {
                return e.concat("children"in t ? I(t.children) : [t])
            }, [])
        }
        function R(e, t) {
            var n = t.bookmarks.subscriptionLists
              , r = t.bookmarks.rootFolder
              , o = t.bookmarks.publicList
              , a = null == n ? void 0 : n.find(function(t) {
                return t.publicId === e
            });
            return (r ? (null == o ? void 0 : o.isCurrentUserAuthor) && o.publicId === e ? S(o.id, r) : S(e, r) : null) || a || o || null
        }
        function x(e, t) {
            return e.children.reduce(function(e, n) {
                var r;
                return (null == (r = n.tags) ? void 0 : r.includes(t)) ? e.concat(I(n.children)) : e
            }, [])
        }
        function T(e) {
            var t = e.uri
              , n = Object.keys(m).find(function(e) {
                return t.includes(e)
            });
            return n ? m[n] : "unknown"
        }
        function A(e, t) {
            var n = e.text.trim();
            t.authorization && n && b(t).then(function(t) {
                t.addRecord({
                    text: n,
                    uri: e && e.uri
                })
            }).catch(function() {})
        }
        function F(e) {
            return e.authorization ? Promise.race([b(e).then(function(e) {
                return e.getRecords()
            }), l.Vs(1e3)]).catch(function() {
                return []
            }) : Promise.resolve([])
        }
        function N(e) {
            return e.authorization ? b(e).then(function(e) {
                return e.deleteRecords()
            }) : Promise.reject()
        }
        function z(e) {
            return "coords"in e
        }
        function D(e, t) {
            return e.id === c.Z.FAVORITES_FOLDER_ID ? "Избранное" : e.title.substring(0, g)
        }
        function O(e) {
            return ("create_folder" === e.type || "edit_folder" === e.type) && e.isShownIconSelection ? "select_folder_icon" : e.type
        }
        function j(e) {
            switch (e.type) {
            case "create_folder":
                return (0,
                a._)({
                    type: e.type,
                    values: {
                        title: "",
                        description: ""
                    }
                }, e.data);
            case "edit_folder":
                return (0,
                a._)({
                    type: e.type
                }, e.data);
            case "rename_bookmark":
                return {
                    type: e.type,
                    bookmark: e.bookmark
                };
            case "change_order":
                return {
                    type: e.type,
                    folderId: e.folderId,
                    elements: e.elements
                }
            }
            return null
        }
        function B(e) {
            return "children"in e
        }
        function U(e, t, n) {
            var r, o, a = "publicId"in e ? e.publicId : null == n ? void 0 : null == (o = n.find(function(t) {
                return t.id === e.id
            })) ? void 0 : o.publicId;
            if (a)
                return p._((void 0 === r && (r = {}),
                (r.baseUrl || "") + (0,
                d.stringify)({
                    bookmarks: {
                        publicId: a
                    }
                }, {
                    addQueryPrefix: !0
                })), t) + "&utm_source=share&utm_campaign=bookmarks"
        }
        function H(e, t) {
            return !!(null == t ? void 0 : t.some(function(t) {
                return t.id === e.id
            }))
        }
        function W(e, t) {
            return !!(null == t ? void 0 : t.some(function(t) {
                return t.id === e.id
            }))
        }
        function q(e) {
            return !e.bunker.disableBookmarksInt
        }
        function K(e) {
            return !!("publicId"in e && e.publicId)
        }
        function G(e, t) {
            var n;
            return (null == t ? void 0 : null == (n = t.find(function(t) {
                return e.id === t.id
            })) ? void 0 : n.status) === "shared"
        }
        function Y(e) {
            var t = "status"in e && e.status;
            return t && ["closed", "deleted"].includes(t)
        }
        var $ = function(e) {
            var t = e.placeId
              , n = e.searchResult
              , r = e.timeContext
              , o = e.config
              , a = e.place;
            if (n && t) {
                var i = u.x2(r);
                return {
                    title: k(t, o),
                    coords: [n.displayCoordinates[0], n.displayCoordinates[1]],
                    created: a ? a.created : i,
                    modified: i,
                    lastUsed: i,
                    tags: a ? a.tags : [],
                    addressLine: "business" === n.type && n.fullAddress || n.address || "",
                    addressLineShort: n.title
                }
            }
        }
    }
    ,
    16060: (e, t) => {
        "use strict";
        t.Z = function(e, t) {
            (t.mocks || t.query.mocks || t.query.asessors) && (e._db._postDeltas = function(e) {
                var t = Promise.resolve(e.base_revision + 1)
                  , n = t.then;
                return t.then = function(e, r, o) {
                    return n.call(t, e.bind(o), r.bind(o))
                }
                ,
                t
            }
            )
        }
    }
    ,
    57694: (e, t, n) => {
        "use strict";
        var r = n(34788)
          , o = n(18007)
          , a = n(87363)
          , i = n(31336)
          , s = n(92616)
          , c = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._onScroll = function(e) {
                    var t = e <= 0;
                    t !== n.state.isScrollOnTop && n.setState({
                        isScrollOnTop: t
                    })
                }
                ,
                n._isNodeWithinStickyElement = function(e, t) {
                    return "sticky" === window.getComputedStyle(e).position || e !== t && !!e.parentElement && n._isNodeWithinStickyElement(e.parentElement, t)
                }
                ,
                n._isSwipeDisabled = function(e) {
                    var t = !n.state.isScrollOnTop;
                    return t && e.target ? !n._isNodeWithinStickyElement(e.target, e.currentTarget) : t
                }
                ,
                n._renderContent = function() {
                    return n.props.children({
                        onScroll: n._onScroll
                    })
                }
                ,
                n.state = {
                    isScrollOnTop: !1
                },
                n
            }
            return (0,
            o._)(t, e),
            t.prototype.render = function() {
                var e = this.props;
                return a.createElement(s.Z, (0,
                r._)({
                    isShown: e.isShown,
                    type: "transparent",
                    onClose: e.onClose
                }, e.popupProps, {
                    enableFocusLock: !0
                }), this._renderContent())
            }
            ,
            t
        }(a.Component);
        t.Z = (0,
        i.ZP)(c)
    }
    ,
    97479: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => s
        });
        var r = n(87363)
          , o = n(44748)
          , a = n(57694)
          , i = (0,
        o.Z)("bookmarks-menu-wrapper")
          , s = function(e) {
            return r.createElement(a.Z, {
                isShown: !0,
                popupProps: {
                    position: "bottom-right",
                    offset: {
                        main: 12,
                        side: 0
                    },
                    showArrow: !1,
                    getTarget: e.getTarget,
                    onScroll: e.onScroll || "close",
                    onMouseLeave: e.onClose,
                    onClose: e.onClose
                },
                onClose: e.onClose
            }, function(t) {
                return r.createElement("div", {
                    className: i()
                }, e.children(t))
            })
        }
    }
    ,
    90366: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => E
        });
        var r = n(18007)
          , o = n(87363)
          , a = n(55877)
          , i = n.n(a)
          , s = n(31336)
          , c = n(44748)
          , l = n(60517)
          , u = n(85672)
          , d = n(76941)
          , p = n(74116)
          , v = n(33228)
          , m = n(17442)
          , g = n(81194)
          , f = n(20513)
          , h = n(87501)
          , k = n(49267)
          , b = (0,
        c.Z)("bookmark-place-control-view")
          , y = function(e) {
            var t = (0,
            s.ZR)();
            return o.createElement(l.ZP, {
                name: "place_item",
                nodeState: {
                    type: e.type
                },
                logClick: !0
            }, o.createElement("div", {
                className: b()
            }, o.createElement("div", {
                className: b("icon")
            }, o.createElement(k.Z, {
                inline: !0,
                name: "" + e.type + "-16"
            })), o.createElement("div", {
                className: b("text-container")
            }, o.createElement("span", {
                className: b("title")
            }, f.cx(e.type, t)), o.createElement("div", {
                className: b("add-link")
            }, "Добавить"))))
        }
          , _ = (0,
        c.Z)("bookmarks-select-folder-view")
          , w = function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._ref = o.createRef(),
                t._cacheId = i().v4(),
                t._onPlusClick = function() {
                    null == t.props.onFolderClick || t.props.onFolderClick.call(t.props, "new")
                }
                ,
                t._renderPlaceAddControls = function() {
                    return t.props.onPlaceAddClick ? o.createElement(l.ZP, {
                        name: "add_place",
                        logClick: !0
                    }, o.createElement("div", {
                        className: _("places")
                    }, ["home", "work"].map(function(e) {
                        var n;
                        return (null == (n = t.props.places) ? void 0 : n[e]) ? null : o.createElement(p.Z, {
                            key: e,
                            onClick: function() {
                                return null == t.props.onPlaceAddClick ? void 0 : t.props.onPlaceAddClick.call(t.props, e)
                            }
                        }, o.createElement(y, {
                            type: e
                        }))
                    }))) : null
                }
                ,
                t._renderFolder = function(e) {
                    var n = t.props;
                    if (!n.onFolderClick)
                        return null;
                    var r = f.YQ(e, n.config)
                      , a = n.containingFolderIds.has(e.id)
                      , i = h.g1(e.icon, n.config);
                    return o.createElement(p.Z, {
                        tabIndex: 0,
                        key: e.id,
                        role: "checkbox",
                        active: a,
                        icon: function(e) {
                            return o.createElement(v.Z, {
                                url: i.url,
                                className: e
                            })
                        },
                        iconStyle: {
                            color: i.color
                        },
                        onClick: function(t) {
                            t.preventDefault(),
                            null == n.onFolderClick || n.onFolderClick.call(n, e)
                        }
                    }, o.createElement("div", {
                        className: _("content")
                    }, o.createElement("div", {
                        className: _("text"),
                        title: r
                    }, r), o.createElement(m.Z, {
                        checked: a,
                        tabIndex: -1,
                        ariaHidden: !0
                    })))
                }
                ,
                t
            }
            return (0,
            r._)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = "Добавить в список";
                return o.createElement("div", {
                    className: _(),
                    ref: this._ref
                }, o.createElement(u.Z, {
                    onScroll: e.onScroll,
                    width: "dynamic",
                    cacheKey: this._cacheId
                }, o.createElement(d.Z, {
                    position: "top",
                    border: "never"
                }, o.createElement("div", {
                    className: _("header")
                }, o.createElement("div", {
                    className: _("title"),
                    title: t
                }, t), o.createElement("div", {
                    className: _("button")
                }, e.saveOnButton ? o.createElement(g.Z, {
                    view: "primary",
                    size: "small",
                    onClick: e.onSave
                }, "Готово") : null))), o.createElement("div", {
                    className: _("body")
                }, this._renderPlaceAddControls(), o.createElement("div", {
                    className: _("folders")
                }, e.onFolderClick && !e.hideNewItem ? o.createElement(l.ZP, {
                    name: "create_new",
                    logClick: !0
                }, o.createElement(p.Z, {
                    tabIndex: 0,
                    icon: "plus-outline-24",
                    iconClassName: _("add-icon"),
                    onClick: this._onPlusClick
                }, "Создать список")) : null, e.folders.map(this._renderFolder)))))
            }
            ,
            t
        }(o.Component)
          , E = (0,
        s.ZP)(w)
    }
    ,
    65752: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => c
        });
        var r = n(87363)
          , o = n(44748)
          , a = n(94542)
          , i = n(31336)
          , s = (0,
        o.Z)("expand-button")
          , c = function(e) {
            var t, n = (2 + 4 * (null != (t = e.fold) ? t : 0)).toFixed(2);
            return (0,
            i.ZR)(),
            r.createElement(a.Z, {
                ariaLabel: "Развернуть",
                className: s(),
                onClick: e.onClick
            }, r.createElement("svg", {
                viewBox: "0 0 24 8",
                xmlns: "http://www.w3.org/2000/svg",
                className: s("dash")
            }, r.createElement("path", {
                d: "M2 " + n + "L12 2L22 " + n,
                fill: "none",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
    }
    ,
    16693: (e, t, n) => {
        "use strict";
        var r, o = n(18007), a = n(87363), i = [], s = !1;
        function c(e) {
            0 === (i = i.filter(function(t) {
                return t !== e
            })).length && r && r.disconnect()
        }
        var l = function(e) {
            function t() {
                return e.apply(this, arguments)
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                var e, t;
                !s && (e = this.props.listener,
                (t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) && (r || (r = new t(function(e) {
                    var t = e.find(function(e) {
                        return "class" === e.attributeName
                    });
                    if (t) {
                        var n = t.target.getAttribute("class");
                        n && (s = n.includes("_font_loaded")) && setTimeout(function() {
                            i.forEach(function(e) {
                                e(),
                                c(e)
                            })
                        }, 1)
                    }
                }
                )).observe(window.document.getElementsByTagName("body")[0], {
                    attributes: !0,
                    attributeFilter: ["class"]
                }),
                i.push(e)))
            }
            ,
            n.componentWillUnmount = function() {
                c(this.props.listener)
            }
            ,
            n.render = function() {
                return null
            }
            ,
            t
        }(a.PureComponent);
        t.Z = l
    }
    ,
    13975: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => c
        });
        var r = n(87363)
          , o = n(44748)
          , a = n(31336)
          , i = n(99243)
          , s = (0,
        o.Z)("img-with-alt")
          , c = function(e) {
            var t = (0,
            a.ZR)()
              , n = {
                objectFit: e.backgroundSize || "cover",
                backgroundColor: e.backgroundColor
            };
            return r.createElement(i.Z, {
                immediately: e.renderImmediately
            }, r.createElement("img", {
                "aria-hidden": e.ariaHidden,
                className: s(),
                width: "100%",
                height: "100%",
                src: e.src,
                alt: e.alt,
                style: n,
                loading: e.renderImmediately || t.query["no-lazy-render"] ? void 0 : "lazy",
                onLoad: e.onLoad
            }))
        }
    }
    ,
    74116: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => p
        });
        var r = n(34788)
          , o = n(18007)
          , a = n(87363)
          , i = n(44748)
          , s = n(49267)
          , c = n(74140)
          , l = n(31104)
          , u = (0,
        i.Z)("list-item-view")
          , d = function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._onClick = function(e) {
                    null == t.props.onClick || t.props.onClick.call(t.props, e)
                }
                ,
                t._renderIconContent = function() {
                    var e = t.props
                      , n = e.icon;
                    if (!n)
                        return null;
                    var r = u("icon") + (e.iconClassName ? " " + e.iconClassName : "");
                    return a.createElement("div", {
                        className: u("icon-content"),
                        style: e.iconStyle
                    }, "function" == typeof n ? n(r) : a.createElement(s.Z, {
                        name: n,
                        inline: !0,
                        className: r
                    }))
                }
                ,
                t._renderContent = function() {
                    var e = t.props;
                    return a.createElement("div", {
                        className: u("content")
                    }, t.props.children, e.subtitle ? a.createElement("div", {
                        className: u("subtitle")
                    }, e.subtitle) : null)
                }
                ,
                t._renderRightContent = function() {
                    var e = t.props.renderRightContent;
                    return e ? a.createElement("div", {
                        className: u("right-content")
                    }, e()) : null
                }
                ,
                t
            }
            return (0,
            o._)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.link ? "a" : "label";
                return a.createElement(t, (0,
                r._)({}, e.link, {
                    className: u({
                        clickable: !!(e.onClick || e.link || e.clickable),
                        active: e.active,
                        disabled: e.disabled,
                        theme: e.theme,
                        size: e.size || "list",
                        "align-items": e.alignItems,
                        border: e.border,
                        toggled: e.toggled,
                        outline: !0
                    }),
                    ref: e.forwardedRef,
                    role: e.role || "menuitem",
                    "aria-checked": l.Kn.has(e.role) ? e.active : void 0,
                    tabIndex: e.tabIndex,
                    "aria-hidden": e.ariaHidden,
                    "aria-label": e.ariaLabel,
                    "aria-haspopup": e.ariaHaspopup,
                    "aria-expanded": e.ariaExpanded,
                    onClick: this._onClick,
                    onKeyDown: e.onKeyDown,
                    onFocus: e.onFocus,
                    onMouseDown: e.onMouseDown,
                    onMouseLeave: e.onMouseLeave
                }), this._renderIconContent(), this._renderContent(), this._renderRightContent())
            }
            ,
            t
        }(a.PureComponent)
          , p = (0,
        c.t)(d)
    }
    ,
    75557: (e, t, n) => {
        "use strict";
        var r = n(34788)
          , o = n(18007)
          , a = n(87363)
          , i = n(69602)
          , s = n(92616)
          , c = function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._ref = null,
                t
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidUpdate = function(e) {
                var t = e.showAt
                  , n = this.props.showAt;
                (t.left !== n.left || t.top !== n.top) && this.forceUpdate()
            }
            ,
            n.render = function() {
                var e = this
                  , t = this.props
                  , n = {
                    position: "absolute",
                    visibility: "hidden",
                    top: t.showAt.top,
                    left: t.showAt.left
                };
                return a.createElement(a.Fragment, null, a.createElement(i.Z, null, a.createElement("div", {
                    style: n,
                    ref: function(t) {
                        e._ref = t
                    }
                })), a.createElement(s.Z, (0,
                r._)({
                    getTarget: function() {
                        return e._ref
                    }
                }, t)))
            }
            ,
            t
        }(a.Component);
        t.Z = c
    }
    ,
    46117: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => c
        });
        var r = n(87363)
          , o = n(44748)
          , a = n(31336)
          , i = n(43285)
          , s = (0,
        o.Z)("pulse-view")
          , c = function(e) {
            return (0,
            a.ZR)(),
            (0,
            i.vO)().scrollId,
            r.createElement("div", {
                className: s({
                    size: e.size,
                    color: e.color,
                    "disable-animation": !1
                })
            }, r.createElement("div", {
                className: s("point")
            }))
        }
    }
    ,
    70901: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => y
        });
        var r = n(18007)
          , o = n(87363)
          , a = n(44748)
          , i = n(41690)
          , s = n(69602)
          , c = n(35263)
          , l = n.n(c)
          , u = n(31336)
          , d = n(58155)
          , p = n(83643)
          , v = n(71392)
          , m = n(65752)
          , g = n(85672)
          , f = n(76941)
          , h = n(88813)
          , k = (0,
        a.Z)("shutter")
          , b = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._contentRef = o.createRef(),
                n._isScrollOnTop = !1,
                n._getRef = function() {
                    var e;
                    return null != (e = n.props.elementRef) ? e : n._contentRef
                }
                ,
                n._onShow = function() {
                    var e = n._getRef().current;
                    if (e) {
                        var t = e.getBoundingClientRect()
                          , r = t.top
                          , o = t.height;
                        n.setState({
                            top: r,
                            swipeMinTop: r,
                            swipeMaxTop: r + o,
                            swipeStartTop: r
                        })
                    }
                }
                ,
                n._onSwipeMove = function(e) {
                    n.setState({
                        top: e
                    })
                }
                ,
                n._onSwipeEnd = function(e) {
                    var t = n.props;
                    "up" === e && n.setState(function(e) {
                        return {
                            top: e.swipeStartTop
                        }
                    }),
                    "down" === e && t.onClose && t.onClose()
                }
                ,
                n._onEventStopPropagation = function(e) {
                    n.props.stopPropagation && e.stopPropagation()
                }
                ,
                n._onContentTouchStart = function(e) {
                    e.stopPropagation()
                }
                ,
                n._onOutsideClick = function(e) {
                    n.props.ignoreOutsideClick || (e.preventDefault(),
                    e.stopPropagation(),
                    null == n.props.onClose || n.props.onClose.call(n.props, e))
                }
                ,
                n._onScroll = function(e) {
                    n._isScrollOnTop = e <= 0
                }
                ,
                n._isNodeWithinStickyElement = function(e, t) {
                    return "sticky" === window.getComputedStyle(e).position || e !== t && !!e.parentElement && n._isNodeWithinStickyElement(e.parentElement, t)
                }
                ,
                n._isSwipeDisabled = function(e) {
                    var t = !n._isScrollOnTop;
                    return t && e.target ? !n._isNodeWithinStickyElement(e.target, e.currentTarget) : t
                }
                ,
                n._renderOutsideListenerWrapper = function(e) {
                    var t = n.props;
                    return t.onClose ? o.createElement(d.Z, {
                        callback: n._onOutsideClick,
                        stopPropagation: t.stopPropagation,
                        getExcludedNodes: t.getExcludedNodes
                    }, function(t) {
                        return e(t)
                    }) : e()
                }
                ,
                n._renderContent = function() {
                    var e, t = n.props, r = n.state, a = r.top, i = a !== r.swipeStartTop, s = void 0, c = t.fullHeight && void 0 !== t.topGap ? "calc(100% - " + t.topGap + "px)" : void 0, u = function(e) {
                        return o.createElement("div", {
                            tabIndex: t.swipeable ? void 0 : 0,
                            className: k("content", {
                                "no-animation": i,
                                "full-height": !!t.fullHeight
                            }),
                            style: {
                                top: a ? a - n.state.swipeStartTop : void 0,
                                height: c,
                                maxHeight: c
                            },
                            onTouchStart: n._onContentTouchStart
                        }, o.createElement("div", {
                            className: k("content-inner"),
                            ref: e
                        }, t.swipeable ? o.createElement(m.Z, null) : null, o.createElement(g.Z, {
                            width: "dynamic",
                            fullHeight: t.fullHeight,
                            cacheKey: t.scrollCacheKey,
                            keepOnUpdate: t.keepOnUpdate,
                            onScroll: n._onScroll
                        }, t.title ? o.createElement(f.Z, {
                            position: "top"
                        }, t.title) : null, o.createElement("div", {
                            className: k("data"),
                            style: t.buttons ? void 0 : s
                        }, t.children), t.buttons ? o.createElement(f.Z, {
                            position: "bottom",
                            border: "always"
                        }, o.createElement("div", {
                            className: k("buttons"),
                            style: s
                        }, t.buttons)) : null)))
                    };
                    return o.createElement("div", {
                        ref: n._getRef(),
                        className: k({
                            paranja: (null == (e = t.config) ? void 0 : e.experiments.ui.newPersonalPageWithWebview) ? "bg" : "default"
                        }),
                        onClick: n._onEventStopPropagation,
                        style: t.zIndex ? {
                            zIndex: t.zIndex
                        } : void 0
                    }, n._renderOutsideListenerWrapper(function(e) {
                        var i;
                        return t.swipeable ? o.createElement(l(), {
                            elementRef: n._getRef(),
                            top: a,
                            min: r.swipeMinTop,
                            max: r.swipeMaxTop,
                            start: r.swipeStartTop,
                            disabled: null != (i = t.swipeDisabled) ? i : n._isSwipeDisabled,
                            onSwipeMove: n._onSwipeMove,
                            onSwipeEnd: n._onSwipeEnd
                        }, u(e)) : o.createElement(h.Z, {
                            className: k("focus-lock")
                        }, u(e))
                    }), t.onClose ? o.createElement(p.Z, {
                        handlers: {
                            key: v.n.ESC,
                            callback: t.onClose,
                            allowInEditable: !0
                        }
                    }) : null)
                }
                ,
                n.state = {
                    top: 0,
                    swipeMinTop: 0,
                    swipeMaxTop: 0,
                    swipeStartTop: 0
                },
                n
            }
            return (0,
            r._)(t, e),
            t.prototype.render = function() {
                var e = this.props;
                return o.createElement(s.Z, {
                    selector: e.parentSelector || ".body"
                }, o.createElement(i.Z, {
                    animationRef: this._getRef(),
                    onShow: this._onShow,
                    onHideEnd: e.onHideEnd
                }, e.isShown ? this._renderContent() : null))
            }
            ,
            t
        }(o.Component)
          , y = (0,
        u.ZP)(b)
    }
    ,
    76941: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => p
        });
        var r = n(75766)
          , o = n(18007)
          , a = n(87363)
          , i = n(44748)
          , s = n(43285)
          , c = n(16693)
          , l = n(49481)
          , u = (0,
        i.Z)("sticky-wrapper")
          , d = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._containerRef = a.createRef(),
                n._isDisabled = function(e) {
                    return void 0 === e && (e = n.props),
                    e.disabled || !e.scrollId
                }
                ,
                n._registerContainer = function() {
                    var e, t = n.props, r = null != (e = t.order) ? e : 1;
                    if (n._containerRef.current) {
                        if (!t.scrollId)
                            return;
                        t.registerStickyElement(r, n._containerRef, t.position, n._onPositionUpdate),
                        t.updateStickyElement(r, n._containerRef.current.offsetHeight, t.position),
                        n._unregisterContainer = function() {
                            t.unregisterStickyElement(r, t.position)
                        }
                    }
                }
                ,
                n._onIntersectionChange = function(e) {
                    n.setState({
                        fixed: !e
                    })
                }
                ,
                n._onPositionUpdate = function(e) {
                    n.setState({
                        position: e
                    }),
                    null == n.props.onOffsetChange || n.props.onOffsetChange.call(n.props, e)
                }
                ,
                n._onIntersectionParentBoundaries = function(e) {
                    n.setState({
                        reachedParentBoundaries: !e
                    })
                }
                ,
                n.state = {
                    fixed: !1,
                    reachedParentBoundaries: !1,
                    position: 0
                },
                n
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this._isDisabled() || this._registerContainer()
            }
            ,
            n.componentDidUpdate = function(e, t) {
                var n = this.props
                  , r = this.state
                  , o = n.children !== e.children;
                (n.children && o || this._isDisabled(e) && !this._isDisabled()) && this._registerContainer(),
                n.onFixedChange && t.fixed !== r.fixed && n.onFixedChange(r.fixed)
            }
            ,
            n.componentWillUnmount = function() {
                null == this._unregisterContainer || this._unregisterContainer.call(this)
            }
            ,
            n.render = function() {
                var e, t, n = this.props, o = this.state;
                return n.children ? this._isDisabled() ? "always" === this.props.border ? a.createElement("div", {
                    className: u("pseudo-sticky")
                }, n.children) : n.children : a.createElement(a.Fragment, null, "top" === n.position ? a.createElement(l.Z, {
                    threshold: 0,
                    style: o.position ? {
                        transform: "translateY(-" + o.position + "px)"
                    } : void 0,
                    className: u("observer-target"),
                    onChange: this._onIntersectionChange
                }, null) : null, a.createElement("div", {
                    className: u({
                        position: n.position,
                        fixed: o.fixed,
                        header: n.header,
                        border: null != (e = n.border) ? e : "auto",
                        wide: n.wide,
                        "reached-boundaries": o.reachedParentBoundaries,
                        empty: !n.children
                    }),
                    style: (t = {},
                    (0,
                    r._)(t, n.position, this.state.position),
                    (0,
                    r._)(t, "zIndex", n.zIndex),
                    t),
                    ref: this._containerRef
                }, "top" === n.position ? a.createElement(l.Z, {
                    threshold: 0,
                    style: o.position ? {
                        transform: "translateY(-" + o.position + "px)"
                    } : void 0,
                    className: u("observer-target", {
                        absolute: !0
                    }),
                    onChange: this._onIntersectionParentBoundaries
                }, null) : null, n.children), a.createElement(c.Z, {
                    listener: this._registerContainer
                })) : null
            }
            ,
            t
        }(a.Component)
          , p = (0,
        s.ZP)(d)
    }
    ,
    99243: (e, t, n) => {
        "use strict";
        var r = n(18007)
          , o = n(87363)
          , a = n(49481)
          , i = n(31336)
          , s = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    shouldRender: t.immediately || !!t.config.uatraits.isRobot || t.config.query["no-lazy-render"]
                },
                n
            }
            (0,
            r._)(t, e);
            var n = t.prototype;
            return n.componentDidUpdate = function(e) {
                !e.immediately && this.props.immediately && this.setState({
                    shouldRender: !0
                })
            }
            ,
            n.render = function() {
                var e = this
                  , t = this.props;
                if (this.state.shouldRender)
                    return this.props.children;
                var n = t.placeholder || null;
                return o.createElement(a.Z, {
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    rootMargin: t.rootMargin || "100px",
                    onChange: function(t) {
                        return e.setState({
                            shouldRender: t
                        })
                    }
                }, n)
            }
            ,
            t
        }(o.PureComponent);
        t.Z = (0,
        i.ZP)(s)
    }
    ,
    28661: (e, t, n) => {
        "use strict";
        var r = n(18007)
          , o = n(87363)
          , a = n(31336)
          , i = n(60141)
          , s = function(e) {
            function t() {
                return e.apply(this, arguments)
            }
            (0,
            r._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                var e = this
                  , t = function() {
                    return i.F(e.props.chunk)
                };
                this.props.immediately ? t() : setTimeout(t, 3e3)
            }
            ,
            n.render = function() {
                return null
            }
            ,
            t
        }(o.Component);
        t.Z = (0,
        a.ZP)(s)
    }
    ,
    63996: (e, t, n) => {
        "use strict";
        n.d(t, {
            a: () => i
        });
        var r = n(87363)
          , o = n(49481)
          , a = n(6486)
          , i = function(e) {
            var t = e.children
              , n = e.entry
              , i = e.extraCondition;
            return r.createElement(o.Z, {
                onChange: function(e) {
                    e && (null == i || i) && (0,
                    a.a)(n).end()
                }
            }, t)
        }
    }
    ,
    89318: (e, t, n) => {
        "use strict";
        n.d(t, {
            kq: () => H,
            R7: () => G,
            VB: () => q,
            Qe: () => Y,
            Gr: () => W,
            y7: () => K,
            XT: () => $
        });
        var r = (0,
        n(34788)._)({}, {
            airport: "airports",
            area: "district",
            country_fallback: "fallback-toponym",
            house: "building",
            metro_station: "fallback-toponym",
            railway_station: "railway-station",
            other: "fallback-toponym",
            region: "fallback-toponym",
            station: "bus-station",
            vegetation: "park",
            unknown: "fallback-toponym"
        }, {
            barbershop: "hairdressers",
            gasoline: "gas-station",
            hotel: "hotels",
            "phone-shop": "mobile-phones",
            restaurant: "restaurants",
            shop: "supermarket",
            "shopping-mall": "malls",
            pharmacy: "medicine",
            "currency-exchange": "currency-exchange-fallback"
        })
          , o = {
            medicine: "medicine-tr",
            drugstores: "drugstores-tr",
            "emergency-point": "emergency-point-tr",
            "currency-exchange": "currency-exchange-tr"
        }
          , a = {
            banks: "banks-ru",
            "currency-exchange": "currency-exchange-ru"
        }
          , i = {
            medicine: "medicine-wd",
            drugstores: "drugstores-ae"
        }
          , s = n(23546)
          , c = n.n(s)
          , l = n(9912)
          , u = n.n(l)
          , d = n(48102)
          , p = n.n(d)
          , v = n(81004)
          , m = n.n(v)
          , g = n(69777)
          , f = n.n(g)
          , h = n(57070)
          , k = n.n(h)
          , b = n(17049)
          , y = n.n(b)
          , _ = n(42363)
          , w = n.n(_)
          , E = n(82461)
          , C = n.n(E)
          , S = n(2509)
          , Z = n.n(S)
          , L = n(82490)
          , P = n.n(L)
          , M = n(90851)
          , I = n.n(M)
          , R = n(23811)
          , x = n.n(R)
          , T = n(26779)
          , A = n.n(T)
          , F = n(2285)
          , N = n.n(F)
          , z = n(72852)
          , D = n.n(z)
          , O = {
            favicon: ["favicon.svg"],
            "metro-favicon": ["favicon.svg"],
            rubrics: ["administration-14.svg", "administration-24.svg", "aeroexpress-14.svg", "aeroexpress-24.svg", "airfield-14.svg", "airfield-24.svg", "airports-14.svg", "airports-24.svg", "animation-14.svg", "animation-24.svg", "aquarium-14.svg", "aquarium-24.svg", "architect-bureau-14.svg", "architect-bureau-24.svg", "armenian-church-14.svg", "armenian-church-24.svg", "art-14.svg", "art-24.svg", "atm-14.svg", "atm-24.svg", "attraction-14.svg", "attraction-24.svg", "auto-14.svg", "auto-24.svg", "auto-parts-14.svg", "auto-parts-24.svg", "auto-repair-14.svg", "auto-repair-24.svg", "baby-shop-14.svg", "baby-shop-24.svg", "bakery-24.svg", "banks-14.svg", "banks-24.svg", "banks-ru-14.svg", "banks-ru-24.svg", "banks-ru-central-14.svg", "banks-ru-central-24.svg", "bars-14.svg", "bars-24.svg", "baths-14.svg", "baths-24.svg", "beach-14.svg", "beach-24.svg", "beauty-14.svg", "beauty-24.svg", "beauty-shops-14.svg", "beauty-shops-24.svg", "beer-market-14.svg", "beer-market-24.svg", "bike-14.svg", "bike-24.svg", "bike-rent-14.svg", "bike-rent-24.svg", "bike-rent-test-14-flip.svg", "bike-rent-test-24-flip.svg", "boat-station-14.svg", "boat-station-24.svg", "bookstore-14.svg", "bookstore-24.svg", "bowling-14.svg", "bowling-24.svg", "buddhism-14.svg", "buddhism-24.svg", "building-14.svg", "building-24.svg", "bus-medium-14.svg", "bus-medium-24.svg", "bus-station-14.svg", "bus-station-24.svg", "bus-stop-14.svg", "bus-stop-24.svg", "butcher-shop-14.svg", "butcher-shop-24.svg", "cableway-14.svg", "cableway-24.svg", "cafe-14.svg", "cafe-24.svg", "canteen-14.svg", "canteen-24.svg", "car-14.svg", "car-24.svg", "car-park-14.svg", "car-park-24.svg", "car-park-barrier-14.svg", "car-park-barrier-24.svg", "car-park-disabled-14.svg", "car-park-disabled-24.svg", "car-park-taxi-14.svg", "car-park-taxi-24.svg", "car-park-toll-14.svg", "car-park-toll-24.svg", "car-wash-14.svg", "car-wash-24.svg", "catholic-church-14.svg", "catholic-church-24.svg", "cemetery-14.svg", "cemetery-24.svg", "checkpoint-14.svg", "checkpoint-24.svg", "childrens-camp-14.svg", "childrens-camp-24.svg", "childrens-playground-14.svg", "childrens-playground-24.svg", "christmas-bazaars-24.svg", "cinemas-14.svg", "cinemas-24.svg", "circus-14.svg", "circus-24.svg", "clothes-shop-14.svg", "clothes-shop-24.svg", "college-14.svg", "college-24.svg", "concert-hall-14.svg", "concert-hall-24.svg", "confectionary-14.svg", "confectionary-24.svg", "construction-hypermarket-14.svg", "construction-hypermarket-24.svg", "construction-tool-14.svg", "construction-tool-24.svg", "country-14.svg", "country-24.svg", "covered-park-14.svg", "covered-park-24.svg", "currency-exchange-14.svg", "currency-exchange-24.svg", "currency-exchange-fallback-14.svg", "currency-exchange-fallback-24.svg", "currency-exchange-ru-14.svg", "currency-exchange-ru-24.svg", "currency-exchange-test-14.svg", "currency-exchange-test-14_rtl.svg", "currency-exchange-test-24.svg", "currency-exchange-test-24_rtl.svg", "currency-exchange-tr-14.svg", "currency-exchange-tr-24.svg", "dairy-14.svg", "dairy-24.svg", "dancehall-14.svg", "dancehall-24.svg", "dental-14.svg", "dental-24.svg", "district-14.svg", "district-24.svg", "dolmus-14.svg", "dolmus-24.svg", "driving-school-14.svg", "driving-school-24.svg", "drop-off-14.svg", "drop-off-24.svg", "drugstores-14.svg", "drugstores-24.svg", "drugstores-ae-14.svg", "drugstores-ae-24.svg", "drugstores-tr-14.svg", "drugstores-tr-24.svg", "drugstores-wd-14.svg", "drugstores-wd-24.svg", "dry-cleaning-14.svg", "dry-cleaning-24.svg", "electronics-14.svg", "electronics-24.svg", "emergency-14.svg", "emergency-24.svg", "emergency-point-tr-14.svg", "emergency-point-tr-24.svg", "entertainments-14.svg", "entertainments-24.svg", "entrance-14.svg", "entrance-24.svg", "equestrian-14.svg", "equestrian-24.svg", "exhibition-center-14.svg", "exhibition-center-24.svg", "factory-14.svg", "factory-24.svg", "fallback-14.svg", "fallback-24.svg", "fallback-beauty-14.svg", "fallback-beauty-24.svg", "fallback-civil-services-14.svg", "fallback-civil-services-24.svg", "fallback-common-14.svg", "fallback-common-24.svg", "fallback-drugstores-14.svg", "fallback-drugstores-24.svg", "fallback-entertainment-14.svg", "fallback-entertainment-24.svg", "fallback-food-drink-14.svg", "fallback-food-drink-24.svg", "fallback-fun-14.svg", "fallback-fun-24.svg", "fallback-health-14.svg", "fallback-health-24.svg", "fallback-hydro-14.svg", "fallback-hydro-24.svg", "fallback-medicine-14.svg", "fallback-medicine-24.svg", "fallback-outdoor-14.svg", "fallback-outdoor-24.svg", "fallback-services-14.svg", "fallback-services-24.svg", "fallback-shopping-14.svg", "fallback-shopping-24.svg", "fallback-toponym-14.svg", "fallback-toponym-24.svg", "fallback-transport-14.svg", "fallback-transport-24.svg", "fast-food-14.svg", "fast-food-24.svg", "favorite-24.svg", "festival-14.svg", "festival-24.svg", "film-studio-14.svg", "film-studio-24.svg", "fire-station-14.svg", "fire-station-24.svg", "fireworks-24.svg", "fish-store-14.svg", "fish-store-24.svg", "fitness-14.svg", "fitness-24.svg", "flower-shop-14.svg", "flower-shop-24.svg", "food-market-14.svg", "food-market-24.svg", "forest-14.svg", "forest-24.svg", "fountain-14.svg", "fountain-24.svg", "funicular-14.svg", "funicular-24.svg", "furniture-store-14.svg", "furniture-store-24.svg", "gallery-14.svg", "gallery-24.svg", "garage-cooperative-14.svg", "garage-cooperative-24.svg", "garden-14.svg", "garden-24.svg", "gasstation-14.svg", "gasstation-24.svg", "gastro-market-14.svg", "gastro-market-24.svg", "geyser-14.svg", "geyser-24.svg", "giftshop-14.svg", "giftshop-24.svg", "golf-14.svg", "golf-24.svg", "government-14.svg", "government-24.svg", "grass-14.svg", "grass-24.svg", "greengrocery-14.svg", "greengrocery-24.svg", "hairdressers-14.svg", "hairdressers-24.svg", "haulier-14.svg", "haulier-24.svg", "heart-24.svg", "highspeed-tram-stop-14.svg", "highspeed-tram-stop-24.svg", "home-14.svg", "home-24.svg", "home-appliances-14.svg", "home-appliances-24.svg", "hospital-14.svg", "hospital-24.svg", "hostels-14.svg", "hostels-24.svg", "hotels-14.svg", "hotels-24.svg", "household-supplies-14.svg", "household-supplies-24.svg", "hydro-14.svg", "hydro-24.svg", "hypermarket-14.svg", "hypermarket-24.svg", "indoor-infra-elevator-disabled-14.svg", "indoor-infra-elevator-disabled-24.svg", "indoor-service-charging-socket-14.svg", "indoor-service-charging-socket-24.svg", "indoor-service-luggage-14.svg", "indoor-service-luggage-24.svg", "industrial-enterprise-14.svg", "industrial-enterprise-24.svg", "information-14.svg", "information-24.svg", "it-14.svg", "it-24.svg", "jewelry-store-14.svg", "jewelry-store-24.svg", "justice-14.svg", "justice-24.svg", "kindergarten-14.svg", "kindergarten-24.svg", "landmark-14.svg", "landmark-24.svg", "laundry-14.svg", "laundry-24.svg", "library-14.svg", "library-24.svg", "liquor-store-14.svg", "liquor-store-24.svg", "locality-14.svg", "locality-24.svg", "locker-14.svg", "locker-24.svg", "malls-14.svg", "malls-24.svg", "market-14.svg", "market-24.svg", "marketplace-14.svg", "marketplace-24.svg", "medical-14.svg", "medical-24.svg", "medicine-14.svg", "medicine-24.svg", "medicine-il-14.svg", "medicine-il-24.svg", "medicine-tr-14.svg", "medicine-tr-24.svg", "medicine-wd-14.svg", "medicine-wd-24.svg", "memorable-event-14.svg", "memorable-event-24.svg", "minibus-14.svg", "minibus-24.svg", "mobile-phones-14.svg", "mobile-phones-24.svg", "monument-14.svg", "monument-24.svg", "mosque-14.svg", "mosque-24.svg", "mountain-14.svg", "mountain-24.svg", "museum-14.svg", "museum-24.svg", "music-store-14.svg", "music-store-24.svg", "musicclub-14.svg", "musicclub-24.svg", "nail-studio-14.svg", "nail-studio-24.svg", "news-14.svg", "news-24.svg", "night-club-14.svg", "night-club-24.svg", "office-14.svg", "office-24.svg", "office-service-14.svg", "office-service-24.svg", "offline-14.svg", "offline-24.svg", "online-store-14.svg", "online-store-24.svg", "opticial-store-14.svg", "opticial-store-24.svg", "orthodox-church-14.svg", "orthodox-church-24.svg", "park-14.svg", "park-24.svg", "pawnshop-14.svg", "pawnshop-24.svg", "pedestrian-14.svg", "pedestrian-24.svg", "perfume-shop-14.svg", "perfume-shop-24.svg", "pet-playground-14.svg", "pet-playground-24.svg", "petshop-14.svg", "petshop-24.svg", "photo-14.svg", "photo-24.svg", "picnic-14.svg", "picnic-24.svg", "pier-14.svg", "pier-24.svg", "pizzeria-14.svg", "pizzeria-24.svg", "planetarium-14.svg", "planetarium-24.svg", "playground-14.svg", "playground-24.svg", "police-14.svg", "police-24.svg", "police-post-14.svg", "police-post-24.svg", "pool-hall-14.svg", "pool-hall-24.svg", "port-14.svg", "port-24.svg", "post-office-14.svg", "post-office-24.svg", "printing-services-14.svg", "printing-services-24.svg", "protestant-church-14.svg", "protestant-church-24.svg", "province-14.svg", "province-24.svg", "pub-14.svg", "pub-24.svg", "racing-14.svg", "racing-24.svg", "railway-entrance-14.svg", "railway-entrance-24.svg", "railway-station-14.svg", "railway-station-24.svg", "railway-terminal-14.svg", "railway-terminal-24.svg", "restaurants-14.svg", "restaurants-24.svg", "rezervation-14.svg", "rezervation-24.svg", "route-14.svg", "route-24.svg", "sanatorium-14.svg", "sanatorium-24.svg", "school-14.svg", "school-24.svg", "science-14.svg", "science-24.svg", "shoe-store-14.svg", "shoe-store-24.svg", "shooting-14.svg", "shooting-24.svg", "skating-rink-14.svg", "skating-rink-24.svg", "ski-resort-14.svg", "ski-resort-24.svg", "smile-24.svg", "software-14.svg", "software-24.svg", "spa-14.svg", "spa-24.svg", "sport-14.svg", "sport-24.svg", "sport-school-14.svg", "sport-school-24.svg", "sportcenter-14.svg", "sportcenter-24.svg", "sports-bar-14.svg", "sports-bar-24.svg", "spring-14.svg", "spring-24.svg", "stadium-14.svg", "stadium-24.svg", "stage-14.svg", "stage-24.svg", "standpipe-14.svg", "standpipe-24.svg", "stationery-store-14.svg", "stationery-store-24.svg", "stenograffia-14.svg", "stenograffia-24.svg", "street-14.svg", "street-24.svg", "subway-fallback-14.svg", "subway-fallback-24.svg", "supermarket-14.svg", "supermarket-24.svg", "sushi-14.svg", "sushi-24.svg", "swimming-pool-14.svg", "swimming-pool-24.svg", "synagogue-14.svg", "synagogue-24.svg", "tableware-14.svg", "tableware-24.svg", "tailor-14.svg", "tailor-24.svg", "taxi-14.svg", "taxi-24.svg", "tennis-14.svg", "tennis-24.svg", "theatre-14.svg", "theatre-24.svg", "ticket-office-14.svg", "ticket-office-24.svg", "tire-fitting-14.svg", "tire-fitting-24.svg", "tram-stop-14.svg", "tram-stop-24.svg", "trash-14.svg", "trash-24.svg", "travel-agency-14.svg", "travel-agency-24.svg", "trolley-14.svg", "trolley-24.svg", "university-14.svg", "university-24.svg", "urban-leisure-house-of-culture-14.svg", "urban-leisure-house-of-culture-24.svg", "urban-service-nursing-room-14.svg", "urban-service-nursing-room-24.svg", "vet-clinic-14.svg", "vet-clinic-24.svg", "veterinary-14.svg", "veterinary-24.svg", "viewpoint-14.svg", "viewpoint-24.svg", "waterfall-14.svg", "waterfall-24.svg", "waterpark-14.svg", "waterpark-24.svg", "wc-14.svg", "wc-24.svg", "wedding-14.svg", "wedding-24.svg", "well-14.svg", "well-24.svg", "wine-14.svg", "wine-24.svg", "work-14.svg", "work-24.svg", "ya-electro-station-14.svg", "ya-electro-station-24.svg", "ya-gas-station-14.svg", "ya-gas-station-24.svg", "yoga-14.svg", "yoga-24.svg", "zoo-14.svg", "zoo-24.svg"],
            service: ["bookmark-14.svg", "bookmark-list-14.svg", "geolocation-14.svg", "home-14.svg", "home-24.svg", "like-14.svg", "like-24.svg", "lock-24.svg", "message-24.svg", "my-location-14.svg", "personal-14.svg", "poll-24.svg", "search-14.svg", "search-24.svg", "show-map-14.svg", "web-24.svg", "work-14.svg", "work-24.svg"],
            "yango-favicon": ["favicon.svg"]
        }
          , j = {
            small: 14,
            normal: 24,
            large: 38
        }
          , B = {
            facebook: "facebook-logo-24",
            instagram: "instagram-24",
            ok: "ok-logo-24",
            telegram: "telegram-logo-24",
            twitter: "x-logo-24",
            vkontakte: "vk-logo-24",
            youtube: "youtube-24",
            whatsapp: "whatsapp-logo-24",
            zen: "zen-logo-24",
            viber: "viber-logo-24",
            snapchat: "snapchat-logo-24",
            tiktok: "tiktok-logo-24"
        }
          , U = {
            light: {
                red: {
                    ru: f(),
                    uk: k(),
                    en: k(),
                    tr: k(),
                    uz: k(),
                    kk: k(),
                    az: k(),
                    ar: k(),
                    "sr-Latn": k(),
                    hy: k(),
                    es: k()
                },
                "red-border": {
                    ru: C(),
                    uk: Z(),
                    en: Z(),
                    tr: Z(),
                    uz: Z(),
                    kk: Z(),
                    az: Z(),
                    ar: Z(),
                    "sr-Latn": Z(),
                    hy: Z(),
                    es: Z()
                },
                black: {
                    ru: c(),
                    uk: u(),
                    en: u(),
                    tr: u(),
                    uz: u(),
                    kk: u(),
                    az: u(),
                    ar: u(),
                    "sr-Latn": u(),
                    hy: u(),
                    es: u()
                },
                portal: {
                    ru: A(),
                    en: x(),
                    tr: x(),
                    uk: x(),
                    uz: x(),
                    kk: x(),
                    az: x(),
                    ar: x(),
                    "sr-Latn": x(),
                    hy: x(),
                    es: x()
                }
            },
            dark: {
                red: {
                    ru: y(),
                    uk: w(),
                    en: w(),
                    tr: w(),
                    uz: w(),
                    kk: w(),
                    az: w(),
                    ar: w(),
                    "sr-Latn": w(),
                    hy: w(),
                    es: w()
                },
                "red-border": {
                    ru: P(),
                    uk: I(),
                    en: I(),
                    tr: I(),
                    uz: I(),
                    kk: I(),
                    az: I(),
                    ar: I(),
                    "sr-Latn": I(),
                    hy: I(),
                    es: I()
                },
                black: {
                    ru: p(),
                    uk: m(),
                    en: m(),
                    tr: m(),
                    uz: m(),
                    kk: m(),
                    az: m(),
                    ar: m(),
                    "sr-Latn": m(),
                    hy: m(),
                    es: m()
                },
                portal: {
                    ru: D(),
                    en: N(),
                    tr: N(),
                    uk: N(),
                    uz: N(),
                    kk: N(),
                    az: N(),
                    ar: N(),
                    "sr-Latn": N(),
                    hy: N(),
                    es: N()
                }
            }
        };
        function H(e, t) {
            var n = e.toLowerCase().replace(/\s+/g, "-");
            return t.isYango && i[n] ? i[n] : "yandex.ru" === t.domain && a[n] ? a[n] : "yandex.kz" === t.domain && i[n] ? i[n] : "tr" === t.lang && o[n] ? o[n] : r[n] || n
        }
        function W(e, t) {
            var n = e.type
              , r = e.name
              , o = e.size
              , a = H(r, t);
            if (!a)
                return null;
            var i = a + "-" + j[o] + ".svg";
            return O[n] && O[n].includes(i) ? t.staticHost + "static/v53/icons/" + n + "/" + i : null
        }
        function q(e, t) {
            var n = e.name
              , r = e.size
              , o = W({
                type: "rubrics",
                name: n,
                size: r
            }, t)
              , a = W({
                type: "rubrics",
                name: "fallback",
                size: r
            }, t);
            return o || a
        }
        function K(e) {
            return "//yastatic.net/s3/front-maps-static/constructor-icons/" + e + ".svg"
        }
        function G(e) {
            var t = e.type
              , n = e.lang;
            return U[e.theme][t][n]
        }
        function Y(e) {
            return B[e]
        }
        function $(e) {
            return ["ru", "uk", "kk"].includes(e.lang)
        }
    }
    ,
    68910: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => q
        });
        var r = n(34788)
          , o = n(18007)
          , a = n(11912)
          , i = n(87363)
          , s = n(28216)
          , c = n(12690)
          , l = n(15900)
          , u = n(44748)
          , d = n(90585)
          , p = n(31336)
          , v = n(99091)
          , m = n(61453)
          , g = n(36191)
          , f = n(60517)
          , h = n(73911)
          , k = n(12574)
          , b = n(75557)
          , y = ["bottom-right", "right-bottom", "bottom-left", "left-bottom", "right-top", "top-right", "left-top", "top-left"]
          , _ = function(e) {
            return (0,
            p.ZR)(),
            i.createElement(b.Z, {
                isShown: e.isShown,
                showAt: {
                    left: e.coordinates[0],
                    top: e.coordinates[1]
                },
                position: y,
                offset: {
                    main: 4,
                    side: 4
                },
                showArrow: !1,
                onClose: function() {
                    e.onClose()
                },
                onScroll: "reposition",
                type: "transparent"
            }, e.children)
        }
          , w = n(18188)
          , E = n(97582)
          , C = n(76362)
          , S = i.useState
          , Z = i.useEffect
          , L = i.useRef
          , P = function(e, t) {
            var n = void 0 === t ? {} : t
              , r = n.width
              , o = void 0 === r ? 1 / 0 : r
              , a = n.height
              , s = void 0 === a ? 1 / 0 : a;
            if (!C.jU)
                return ["function" == typeof e ? e({
                    width: o,
                    height: s
                }) : e, {
                    width: o,
                    height: s
                }];
            var c = S({
                width: o,
                height: s
            })
              , l = c[0]
              , u = c[1];
            "function" == typeof e && (e = e(l));
            var d = e.props.style || {}
              , p = L(null)
              , v = null
              , m = function() {
                var e = p.current;
                u(e ? {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                } : {
                    width: o,
                    height: s
                })
            }
              , g = function(e) {
                (0,
                C.on)(e, "resize", m),
                setTimeout(m, 35)
            };
            return Z(function() {
                var e = p.current;
                if (e) {
                    if (e.contentWindow)
                        g(v = e.contentWindow);
                    else {
                        var t = function() {
                            (0,
                            C.on)(e, "load", t),
                            g(v = e.contentWindow)
                        };
                        (0,
                        C.S1)(e, "load", t)
                    }
                    return function() {
                        v && v.removeEventListener && (0,
                        C.S1)(v, "resize", m)
                    }
                }
            }, []),
            d.position = "relative",
            [i.cloneElement.apply(i, (0,
            E.pr)([e, {
                style: d
            }], (0,
            E.pr)([i.createElement("iframe", {
                ref: p,
                style: {
                    background: "transparent",
                    border: "none",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    zIndex: -1
                }
            })], i.Children.toArray(e.props.children)))), l]
        }
          , M = n(94975)
          , I = n(30079)
          , R = n(11920)
          , x = n(74116)
          , T = n(35501)
          , A = function(e) {
            var t, n = (0,
            p.ZR)(), r = (0,
            w._)(P(function() {
                return i.createElement("div", null)
            }), 2), o = r[0], a = r[1].width, s = (0,
            M.Z)(function() {
                return R.Z.fetchSearchResult({
                    from: "whatshere",
                    coordinates: e.coordinates,
                    zoom: e.zoom,
                    origin: "whatshere"
                }, n)
            }, [e.coordinates, e.zoom, n]), c = T.Y(null == (t = s.value) ? void 0 : t.items), l = function(t) {
                if (null == t ? void 0 : t.isOpen)
                    return null;
                var n = (0,
                w._)((null == t ? void 0 : t.saved) ? ["bookmark-filled-24", "Изменить"] : ["bookmark-24", "Сохранить"], 2)
                  , r = n[0]
                  , a = n[1];
                return i.createElement(i.Fragment, null, o, e.children(i.createElement(x.Z, {
                    onClick: null == t ? void 0 : t.onClick,
                    icon: r
                }, a)))
            };
            return c && c.uri ? i.createElement(I.default, {
                onClose: void 0,
                subject: {
                    type: "search",
                    data: c
                },
                disableHover: !0,
                wrapper: function(e) {
                    return i.createElement("div", {
                        style: {
                            width: a
                        }
                    }, e)
                },
                isPointedOnMap: !0
            }, l) : l()
        }
          , F = n(43341)
          , N = n(81252)
          , z = n(21953)
          , D = n(8601)
          , O = [{
            id: "what-is-here",
            icon: "about-24",
            text: "Что здесь?"
        }, {
            id: "route-to-here",
            icon: "route-to-24",
            text: "Маршрут сюда"
        }, {
            id: "route-from-here",
            icon: "route-from-24",
            text: "Маршрут отсюда"
        }, {
            id: "add-bookmark",
            icon: "bookmark-24",
            text: "Сохранить"
        }, {
            id: "add-object",
            icon: "add-place-24-flip",
            text: "Добавить объект"
        }]
          , j = {
            id: "enable-ruler",
            icon: "ruler-24",
            text: "Линейка"
        }
          , B = {
            id: "map-edit",
            icon: "nmap-24",
            text: "Редактировать карту"
        }
          , U = {
            openCard: m.Z.openCard,
            buildRouteTo: g.Z.buildRouteTo,
            buildRouteFrom: g.Z.buildRouteFrom,
            switchRuler: v.Z.switchRuler,
            updateRuler: v.Z.updateRuler,
            openAddObjectFeedback: D.Z.openAddObjectFeedback,
            openMapEditFeedback: D.Z.openMapEditFeedback
        }
          , H = (0,
        d.Z)(s.$j(function(e) {
            return F.A(e, "routes"),
            {
                isMobile: !1,
                canShow: !0,
                mapLocation: e.map.location,
                ruler: e.ruler,
                isRulerBlocked: (0,
                N.J)(e),
                isMapEditing: e.map.isEditing
            }
        }, U), p.ZP)
          , W = (0,
        u.Z)("context-menu-component")
          , q = H(function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._onDocumentMousedown = function() {
                    n._canBeShown = n.props.canShow
                }
                ,
                n._onMouseUp = function(e, t, r) {
                    2 === r.button && !n._longTapTimer && n._canBeShown && (n._rightClickTimer ? (clearTimeout(n._rightClickTimer),
                    n._rightClickTimer = void 0) : n._rightClickTimer = window.setTimeout(function() {
                        n._open(t.coordinates, t.screenCoordinates),
                        n._rightClickTimer = void 0
                    }, 300))
                }
                ,
                n._onTouchStart = function(e, t) {
                    n._canBeShown && (n._touchFrom = t.screenCoordinates,
                    n._touchTo = n._touchFrom,
                    window.clearTimeout(n._longTapTimer),
                    n._longTapTimer = window.setTimeout(function() {
                        n._longTapTimer = void 0,
                        4 >= (0,
                        c.g)(n._touchTo, n._touchFrom) && n._open(t.coordinates, t.screenCoordinates)
                    }, 500))
                }
                ,
                n._onContainerTouchMove = function(e) {
                    n._touchTo = e
                }
                ,
                n._onTouchEnd = function(e, t, r) {
                    n.state.isShown && r.preventDefault(),
                    window.clearTimeout(n._longTapTimer),
                    n._longTapTimer = void 0
                }
                ,
                n._onUpdate = function() {
                    window.clearTimeout(n._longTapTimer),
                    n._longTapTimer = void 0
                }
                ,
                n._open = function(e, t) {
                    n.props.canShow && n.setState({
                        isShown: !0,
                        coordinates: e,
                        screenCoordinates: t
                    })
                }
                ,
                n._close = function() {
                    n.setState({
                        isShown: !1
                    })
                }
                ,
                n._onItemClick = function(e) {
                    n._close();
                    var t = n.state.coordinates
                      , r = n.props
                      , o = r.mapLocation.zoom;
                    switch (e.id) {
                    case "what-is-here":
                        r.openCard({
                            coordinates: t,
                            from: "whatshere",
                            origin: "whatshere",
                            zoom: o
                        }, {
                            mobileViewState: "mini"
                        });
                        break;
                    case "route-to-here":
                        r.buildRouteTo({
                            coords: t,
                            value: ""
                        });
                        break;
                    case "route-from-here":
                        r.buildRouteFrom({
                            coords: t,
                            value: ""
                        });
                        break;
                    case "map-edit":
                        r.openMapEditFeedback({
                            coordinates: t,
                            context: {
                                formContextId: "map.context"
                            }
                        });
                        break;
                    case "enable-ruler":
                        r.switchRuler(),
                        0 === r.ruler.points.length && r.updateRuler([{
                            coordinates: t,
                            value: 0,
                            showBalloon: !1
                        }]);
                        break;
                    case "add-object":
                        r.openAddObjectFeedback({
                            coordinates: t,
                            type: "object/add",
                            context: {
                                formContextId: "map.context"
                            }
                        })
                    }
                }
                ,
                n._getEventHandlers = function(e) {
                    return {
                        onMouseUp: n._onMouseUp
                    }
                }
                ,
                n._renderItem = function(e, t) {
                    return "add-bookmark" === e.id ? i.createElement(f.ZP, {
                        key: e.id,
                        name: "item",
                        nodeState: {
                            id: e.id
                        },
                        logClick: !0
                    }, t) : i.createElement(f.ZP, {
                        key: e.id,
                        name: "item",
                        nodeState: {
                            id: e.id
                        },
                        logClick: !0
                    }, i.createElement(x.Z, {
                        icon: e.icon,
                        onClick: function() {
                            return n._onItemClick(e)
                        }
                    }, e.text))
                }
                ,
                n._renderMenu = function() {
                    var e = n.props
                      , t = n.state
                      , r = t.screenCoordinates
                      , o = t.coordinates;
                    if (!r || !o)
                        return null;
                    var s = (0,
                    a._)(O);
                    return s.push(B),
                    e.isMobile || e.ruler.isEnabled || e.isRulerBlocked || s.push(j),
                    i.createElement(h.default, {
                        name: "context_menu"
                    }, i.createElement(_, {
                        key: o.join(","),
                        isShown: t.isShown,
                        coordinates: r,
                        onClose: n._close
                    }, i.createElement(A, {
                        coordinates: o,
                        zoom: e.mapLocation.zoom,
                        onClose: n._close
                    }, function(e) {
                        return i.createElement("div", {
                            className: W()
                        }, s.map(function(t) {
                            return n._renderItem(t, e)
                        }))
                    })))
                }
                ,
                n.state = {
                    isShown: !1,
                    coordinates: null,
                    screenCoordinates: null
                },
                n
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                window.document.addEventListener("mousedown", this._onDocumentMousedown, !0),
                window.document.addEventListener("touchstart", this._onDocumentMousedown, !0)
            }
            ,
            n.componentDidUpdate = function(e) {
                if (this.props.mapLocation !== e.mapLocation) {
                    if (!this.state.coordinates)
                        return this._close();
                    var t = (0,
                    l.f)(this.props.mapLocation.center, this.props.mapLocation.zoom)
                      , n = (0,
                    l.f)(e.mapLocation.center, e.mapLocation.zoom);
                    (0,
                    c.g)(t, n) >= 4 && this._close()
                }
            }
            ,
            n.componentWillUnmount = function() {
                window.clearTimeout(this._rightClickTimer),
                window.clearTimeout(this._longTapTimer),
                window.document.removeEventListener("mousedown", this._onDocumentMousedown, !0),
                window.document.removeEventListener("touchstart", this._onDocumentMousedown, !0)
            }
            ,
            n.render = function() {
                var e = this;
                return this.props.isMapEditing ? null : i.createElement(i.Fragment, null, this._renderMenu(), i.createElement(z.Z, null, function(t) {
                    return i.createElement(k.default, (0,
                    r._)({
                        layer: "any"
                    }, e._getEventHandlers(t), {
                        onUpdate: e._onUpdate
                    }))
                }))
            }
            ,
            t
        }(i.Component))
    }
    ,
    56456: (e, t, n) => {
        "use strict";
        n.r(t);
        var r = n(34788)
          , o = n(18007)
          , a = n(87363)
          , i = n(28216)
          , s = n(99091)
          , c = n(90585)
          , l = n(31336)
          , u = n(52869)
          , d = n(24063)
          , p = n(23838)
          , v = n(25088)
          , m = {
            setRegion: s.Z.setRegion,
            setEmergencyNotifications: s.Z.setEmergencyNotifications
        }
          , g = (0,
        c.Z)(i.$j(function(e) {
            return {
                region: e.mapRegion,
                mapLocation: e.map.location
            }
        }, m), l.ZP)
          , f = [.05, .05]
          , h = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._onLocationChange = function() {
                    var e = n.props;
                    if (e.mapLocation.zoom >= 10) {
                        var t = n.state.knownBounds;
                        if (t && (0,
                        p.V)(t, e.mapLocation.center))
                            return;
                        u.Z.cancel(n._regionAction),
                        n._regionAction = u.Z.create(d.Z.getLayer((0,
                        r._)({
                            layer: "geoalias"
                        }, e.mapLocation), e.config), {
                            success: n._onLayerLoaded
                        })
                    } else
                        n._updateRegion(void 0),
                        e.setEmergencyNotifications(void 0),
                        n.setState({
                            knownBounds: void 0
                        })
                }
                ,
                n._onLayerLoaded = function(e) {
                    var t = n.props
                      , r = e && e.region
                      , o = r && r.bounds || (0,
                    v.p)({
                        center: t.mapLocation.center,
                        span: f
                    });
                    n.setState({
                        knownBounds: o
                    }),
                    n._updateRegion(r),
                    t.setEmergencyNotifications(null == e ? void 0 : e.notifications)
                }
                ,
                n._updateRegion = function(e) {
                    var t = n.props
                      , r = e ? e.id : null;
                    (t.region ? t.region.id : null) !== r && t.setRegion(e)
                }
                ,
                n.state = {
                    knownBounds: t.region && t.region.bounds
                },
                n
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.props.region || this._onLocationChange()
            }
            ,
            n.componentDidUpdate = function(e) {
                e.mapLocation !== this.props.mapLocation && this._onLocationChange()
            }
            ,
            n.componentWillUnmount = function() {
                u.Z.cancel(this._regionAction)
            }
            ,
            n.render = function() {
                return null
            }
            ,
            t
        }(a.Component);
        h.displayName = "GeoAliasesComponent",
        t.default = g(h)
    }
    ,
    93313: (e, t, n) => {
        "use strict";
        n.r(t);
        var r = n(87363)
          , o = n(28216)
          , a = n(50576)
          , i = n(31336)
          , s = n(23838)
          , c = n(99091);
        t.default = function() {
            var e = (0,
            i.ZR)()
              , t = o.I0()
              , n = o.v9(function(e) {
                var t, n;
                return {
                    mapLocation: e.map.location,
                    categoryIconsBounds: null == (n = e.locationInfo) ? void 0 : null == (t = n.categoryIcons) ? void 0 : t.bounds
                }
            }, a.Z);
            return r.useEffect(function() {
                n.categoryIconsBounds && (0,
                s.V)(n.categoryIconsBounds, n.mapLocation.center) || t(c.Z.getLocationInfo(n.mapLocation))
            }, [e, t, n.categoryIconsBounds, n.mapLocation]),
            null
        }
    }
    ,
    88290: (e, t, n) => {
        "use strict";
        n.r(t);
        var r = n(18007)
          , o = n(87363)
          , a = n(28216)
          , i = n(43341)
          , s = n(37358)
          , c = n(70457)
          , l = n(12574)
          , u = n(19912)
          , d = n(97032)
          , p = n(99672)
          , v = (0,
        c.Z)({
            resolved: {},
            chunkName: function() {
                return "preview"
            },
            isReady: function(e) {
                var t = this.resolve(e);
                return !0 === this.resolved[t] && !!n.m[t]
            },
            importAsync: function() {
                return n.e("preview").then(n.bind(n, 78129))
            },
            requireAsync: function(e) {
                var t = this
                  , n = this.resolve(e);
                return this.resolved[n] = !1,
                this.importAsync(e).then(function(e) {
                    return t.resolved[n] = !0,
                    e
                })
            },
            requireSync: function(e) {
                return n(this.resolve(e))
            },
            resolve: function() {
                return 78129
            }
        })
          , m = (0,
        c.Z)({
            resolved: {},
            chunkName: function() {
                return "preview"
            },
            isReady: function(e) {
                var t = this.resolve(e);
                return !0 === this.resolved[t] && !!n.m[t]
            },
            importAsync: function() {
                return n.e("preview").then(n.bind(n, 40560))
            },
            requireAsync: function(e) {
                var t = this
                  , n = this.resolve(e);
                return this.resolved[n] = !1,
                this.importAsync(e).then(function(e) {
                    return t.resolved[n] = !0,
                    e
                })
            },
            requireSync: function(e) {
                return n(this.resolve(e))
            },
            resolve: function() {
                return 40560
            }
        })
          , g = (0,
        c.Z)({
            resolved: {},
            chunkName: function() {
                return "preview"
            },
            isReady: function(e) {
                var t = this.resolve(e);
                return !0 === this.resolved[t] && !!n.m[t]
            },
            importAsync: function() {
                return n.e("preview").then(n.bind(n, 38268))
            },
            requireAsync: function(e) {
                var t = this
                  , n = this.resolve(e);
                return this.resolved[n] = !1,
                this.importAsync(e).then(function(e) {
                    return t.resolved[n] = !0,
                    e
                })
            },
            requireSync: function(e) {
                return n(this.resolve(e))
            },
            resolve: function() {
                return 38268
            }
        })
          , f = {
            showUriPreview: u.Z.showUriPreview,
            hidePreview: u.Z.hidePreview,
            cancelHidePreview: u.Z.cancelHidePreview,
            editReview: d.Z.editReview
        }
          , h = a.$j(function(e) {
            var t = e.mapObjectPreview;
            if (t && "type"in t && "stop" === t.type) {
                var n, r = i.A(e, "masstransit"), o = null == r ? void 0 : null == (n = r.stops) ? void 0 : n.data, a = (null == o ? void 0 : o.id) ? s.p1(o.id) : void 0;
                if (t.uri === a || e.map.location.zoom < 16)
                    return {}
            }
            var c = i.A(e, "routes");
            return e.ruler.isEnabled || e.panoramas.isLayerEnabled || e.photos.isLayerEnabled || e.mrc.isLayerEnabled || e.map.isEditing || (null == c ? void 0 : c.routePoints.some(function(e) {
                return !e.coords
            })) ? {} : {
                preview: t
            }
        }, f)
          , k = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._onHideImmediately = function() {
                    n.props.hidePreview(!0),
                    n.setState({
                        isOverPreview: !1
                    })
                }
                ,
                n._onPoiMouseLeave = function(e) {
                    var t = n.props
                      , r = n.state
                      , o = t.preview
                      , a = b(e);
                    !r.isPoiTriggered || r.isOverPreview || a && o && "uri"in o && a.uri !== o.uri || t.hidePreview()
                }
                ,
                n._onPoiMouseEnter = function(e) {
                    var t = b(e);
                    t && (n.props.showUriPreview(t.uri, t.coordinates, {
                        origin: "poi-hint"
                    }),
                    n.setState({
                        isPoiTriggered: !0
                    }))
                }
                ,
                n._hidePreview = function() {
                    n.props.preview && n.props.hidePreview()
                }
                ,
                n._onPreviewMouseEnter = function() {
                    n.props.cancelHidePreview(),
                    n.setState({
                        isOverPreview: !0
                    })
                }
                ,
                n._onPreviewMouseLeave = function() {
                    n.props.hidePreview(),
                    n.setState({
                        isOverPreview: !1
                    })
                }
                ,
                n._onRateChange = function(e, t) {
                    n._hidePreview(),
                    n.props.editReview(e, t)
                }
                ,
                n._renderPreview = function() {
                    var e = n.props.preview;
                    if (e && "type"in e) {
                        if ("realty" === e.type)
                            return o.createElement(g, {
                                key: e.coordinates.join(","),
                                businessId: e.businessId,
                                coordinates: e.coordinates,
                                building: e.building,
                                url: e.url,
                                onMouseEnter: n._onPreviewMouseEnter,
                                onMouseLeave: n._onPreviewMouseLeave
                            });
                        var t = e.uri
                          , r = e.coordinates;
                        return "business" === e.type ? o.createElement(v, {
                            result: e.data,
                            from: e.from,
                            origin: e.request.origin,
                            offsets: e.offsets,
                            key: t,
                            poiCoordinates: r,
                            onMouseEnter: n._onPreviewMouseEnter,
                            onMouseLeave: n._onPreviewMouseLeave,
                            onHideImmediately: n._onHideImmediately,
                            onRatingChange: function(t) {
                                return n._onRateChange(e.data, t)
                            }
                        }) : o.createElement(m, {
                            stop: e.data,
                            key: t
                        })
                    }
                }
                ,
                n.state = {},
                n
            }
            (0,
            r._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                window.document.addEventListener("click", this._onHideImmediately)
            }
            ,
            n.componentDidUpdate = function() {
                this.state.isPoiTriggered && !this.props.preview && this.setState({
                    isPoiTriggered: !1
                })
            }
            ,
            n.componentWillUnmount = function() {
                window.document.removeEventListener("click", this._onHideImmediately),
                this.props.cancelHidePreview()
            }
            ,
            n.render = function() {
                return o.createElement(o.Fragment, null, this._renderPreview(), o.createElement(l.default, {
                    layer: "any",
                    onMouseEnter: this._onPoiMouseEnter,
                    onMouseLeave: this._onPoiMouseLeave,
                    onUpdate: this._hidePreview
                }))
            }
            ,
            t
        }(o.PureComponent);
        function b(e) {
            if ((null == e ? void 0 : e.type) === "hotspot" && (null == (t = e.feature.geometry) ? void 0 : t.type) === "Point") {
                var t, n, r = e.feature.properties.uri, o = null == (n = e.feature.geometry) ? void 0 : n.coordinates;
                if (o && !(0,
                p.s)(e.feature) && (s.k8(r) || s.lB(r)))
                    return {
                        uri: r,
                        coordinates: o
                    }
            }
        }
        t.default = h(k)
    }
    ,
    96769: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var r = n(87363)
          , o = n(28216)
          , a = n(90585)
          , i = n(18692)
          , s = {
            pmbl: "#177ee6",
            pmrd: "#f43",
            pmgn: "#3bb300"
        }
          , c = s.pmbl
          , l = function(e) {
            return e.points ? r.createElement(r.Fragment, null, e.points.map(function(e, t) {
                var n = e.coordinates
                  , o = e.color;
                return r.createElement(i.Z, {
                    key: t + "_" + n.join(),
                    coordinates: n,
                    color: o && o in s ? s[o] : c,
                    nonInteractive: !0,
                    comma: !0
                })
            })) : null
        }
          , u = (0,
        a.Z)(o.$j(function(e) {
            return e.placemarks
        }))(function(e) {
            return r.createElement(l, {
                points: e.points
            })
        })
    }
    ,
    13340: (e, t, n) => {
        "use strict";
        var r = n(34788)
          , o = n(18007)
          , a = n(20224)
          , i = n(87363)
          , s = n(96449)
          , c = n(12574)
          , l = n(92616)
          , u = function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._ref = i.createRef(),
                t._onMapUpdate = function() {
                    t.forceUpdate()
                }
                ,
                t
            }
            return (0,
            o._)(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.coordinates
                  , o = (0,
                a._)(t, ["coordinates"]);
                return i.createElement(i.Fragment, null, i.createElement(s.default, {
                    coordinates: n,
                    nonInteractive: !0
                }, i.createElement("div", {
                    ref: this._ref
                }), i.createElement(l.Z, (0,
                r._)({
                    type: "balloon"
                }, o, {
                    getTarget: function() {
                        return e._ref.current
                    }
                }), o.children)), i.createElement(c.default, {
                    onUpdate: o.isShown ? this._onMapUpdate : void 0
                }))
            }
            ,
            t
        }(i.PureComponent);
        t.Z = u
    }
    ,
    18692: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => v
        });
        var r = n(20224)
          , o = n(87363)
          , a = n(44748)
          , i = n(96449)
          , s = n(33228)
          , c = n(69085)
          , l = n.n(c)
          , u = n(90870)
          , d = n.n(u)
          , p = (0,
        a.Z)("map-circle-placemark")
          , v = function(e) {
            var t = e.color
              , n = e.size
              , a = e.comma
              , c = e.caption
              , u = e.outline
              , v = (0,
            r._)(e, ["color", "size", "comma", "caption", "outline"]);
            return o.createElement(i.default, v, o.createElement("div", {
                className: p({
                    comma: a,
                    size: void 0 === n ? "medium" : n,
                    outline: u
                }),
                style: {
                    color: t
                }
            }, o.createElement(s.Z, {
                className: p("placemark"),
                url: a ? d() : l()
            }), o.createElement("div", {
                className: p("content")
            }, e.children), c ? o.createElement("div", {
                className: p("caption")
            }, c) : null))
        }
    }
    ,
    42390: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => q
        });
        var r = n(18007)
          , o = n(87363)
          , a = n(28216)
          , i = n(44748)
          , s = n(90585)
          , c = n(60517)
          , l = n(99091)
          , u = n(92616)
          , d = n(93522)
          , p = n(70901)
          , v = n(84772)
          , m = n(38901)
          , g = n(59270)
          , f = n(11187)
          , h = n(25562)
          , k = n(37721)
          , b = n(81252)
          , y = n(88534)
          , _ = n(55877)
          , w = n.n(_)
          , E = n(17442)
          , C = (n(53070),
        n(61307))
          , S = n(20513)
          , Z = n(49267)
          , L = n(74116)
          , P = n(57694)
          , M = n(85672)
          , I = n(76941)
          , R = n(36887)
          , x = {
            updateFolderTags: k.Z.updateFolderTags
        }
          , T = a.$j(function(e) {
            return {
                config: e.config,
                isActionInProgress: !!(e.bookmarks.currentAction && e.bookmarks.currentAction.inProgress),
                rootFolder: e.bookmarks.rootFolder
            }
        }, x)
          , A = (0,
        i.Z)("bookmarks-layers-menu-view")
          , F = T(function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._cacheId = w().v4(),
                t._onChange = function(e, n) {
                    var r = t.props
                      , o = n.tags || [];
                    e ? o.push(C.Z.FOLDER_TAGS.SHOW_ON_MAP) : o = o.filter(function(e) {
                        return e !== C.Z.FOLDER_TAGS.SHOW_ON_MAP
                    }),
                    r.updateFolderTags({
                        folderId: n.id,
                        tags: o
                    })
                }
                ,
                t._renderItem = function(e) {
                    var n, r = !!(null == (n = e.tags) ? void 0 : n.includes(C.Z.FOLDER_TAGS.SHOW_ON_MAP)), a = t.props.config, i = (0,
                    S.YQ)(e, a);
                    return o.createElement(L.Z, {
                        key: e.id,
                        icon: function() {
                            return o.createElement(E.Z, {
                                id: e.id,
                                checked: r,
                                onChange: function(n) {
                                    return t._onChange(n, e)
                                }
                            })
                        },
                        clickable: !0
                    }, o.createElement("div", {
                        className: A("text"),
                        title: i
                    }, i))
                }
                ,
                t._renderHeader = function() {
                    var e = t.props;
                    return o.createElement("div", {
                        className: A("header")
                    }, o.createElement(Z.Z, {
                        ariaLabel: "Назад",
                        inline: !0,
                        name: "back-24-flip",
                        className: A("back"),
                        onClick: e.onClose
                    }), o.createElement("div", {
                        className: A("title")
                    }, "Закладки"), null)
                }
                ,
                t
            }
            return (0,
            r._)(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props;
                return t.rootFolder ? o.createElement(P.Z, {
                    isShown: t.isShown,
                    onClose: t.onClose,
                    popupProps: t.popupProps
                }, function(n) {
                    var r = n.onScroll;
                    return o.createElement("div", {
                        className: A()
                    }, o.createElement(M.Z, {
                        onScroll: r,
                        width: "dynamic",
                        cacheKey: e._cacheId
                    }, o.createElement(I.Z, {
                        position: "top",
                        border: "never"
                    }, e._renderHeader()), o.createElement("div", {
                        className: A("body")
                    }, t.rootFolder.children.map(e._renderItem))), t.isActionInProgress ? o.createElement("div", {
                        className: A("loading-indicator")
                    }, o.createElement("div", {
                        className: A("spinner")
                    }, o.createElement(R.Z, {
                        view: "small"
                    }))) : null)
                }) : null
            }
            ,
            t
        }(o.Component))
          , N = n(22871)
          , z = n(88813)
          , D = n(38614)
          , O = n(6406)
          , j = n(46117)
          , B = [{
            key: "map",
            title: "Схема"
        }, {
            key: "satellite",
            title: "Спутник"
        }, {
            key: "hybrid",
            title: "Гибрид"
        }]
          , U = {
            updateMap: l.Z.updateMap,
            toggleTrafficLayer: m.Z.toggle,
            toggleMasstransitLayer: v.Z.toggleLayer,
            toggleParkingLayer: h.Z.toggleLayer,
            initBookmarksManager: k.Z.initBookmarksManager,
            checkAuthorization: l.Z.checkAuthorization,
            switchRuler: l.Z.switchRuler,
            enableMrcLayer: y.Z.enableLayer,
            disableMrcLayer: y.Z.disableLayer,
            togglePanoramasPhotosLayer: l.Z.togglePanoramasPhotosLayer,
            updateMapControls: l.Z.updateMapControls,
            toggleNightOverlay: l.Z.toggleNightOverlay
        }
          , H = (0,
        s.Z)(a.$j(function(e) {
            var t, n;
            return {
                config: e.config,
                type: e.map.type,
                trafficLevel: e.traffic.level,
                isTrafficLayerEnabled: e.traffic.isLayerEnabled,
                isMasstransitLayerShown: e.masstransit.isLayerShown,
                isMasstransitLayerEnabled: e.masstransit.isLayerEnabled,
                isMasstransitLayerEnabledOnAnotherZoom: e.masstransit.isLayerEnabledOnAnotherZoom,
                isParkingLayerShown: e.parking.isLayerShown,
                isParkingLayerEnabled: e.parking.isLayerEnabled,
                isRulerEnabled: e.ruler.isEnabled,
                isRulerBlocked: (0,
                b.J)(e),
                isPanoramasPhotosLayerEnabled: e.panoramas.isLayerEnabled || e.photos.isLayerEnabled,
                isPanoramasLayerEnabled: e.panoramas.isLayerEnabled,
                isPanoramasLayerAvailable: e.panoramas.isStreetLayerAvailable || e.panoramas.isAirLayerAvailable,
                isMrcLayerEnabled: e.map.location.zoom >= ((null == (t = e.config.layers.mrc) ? void 0 : t.zoomRange) && (null == (n = e.config.layers.mrc) ? void 0 : n.zoomRange[0]) || 0),
                isMrcLayerShown: e.mrc.isLayerEnabled,
                areAdditionalLayersAvailable: !e.config.query.webview,
                panoramasPhotosLayer: (0,
                N.y)(e),
                hasError: e.bookmarks.hasInitError,
                isNightShown: e.nightOverlay.isShown
            }
        }, U))
          , W = (0,
        i.Z)("map-layers-view")
          , q = H(function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._bookmarksClosedAt = 0,
                n._onLayerChange = function(e) {
                    n.props.updateMap({
                        type: e
                    })
                }
                ,
                n._onCloseBookmarks = function() {
                    n._bookmarksClosedAt = Date.now(),
                    n.setState({
                        view: "layers"
                    })
                }
                ,
                n._onShutterClose = function() {
                    Date.now() - n._bookmarksClosedAt < 500 || (n._bookmarksClosedAt = 0,
                    n.props.onClose())
                }
                ,
                n._onBookmarksClick = function() {
                    n.props.config.authorization || n.props.onClose(),
                    n.props.checkAuthorization("favorites", function() {
                        n.setState({
                            view: "bookmarks"
                        })
                    })
                }
                ,
                n._togglePanoramasPhotosLayer = function() {
                    n.props.togglePanoramasPhotosLayer()
                }
                ,
                n._onNightClick = function() {
                    n.props.onClose(),
                    n.props.toggleNightOverlay(),
                    n.setState({
                        isNightControlVisited: !0
                    }),
                    D.Z.set("is_night_control_visited", !0)
                }
                ,
                n._renderPopup = function(e) {
                    var t = n.props;
                    return o.createElement(u.Z, {
                        getTarget: t.getTarget,
                        position: ["bottom", "bottom-left"],
                        restrictPosition: !0,
                        type: "transparent",
                        positionOffsets: {
                            bottom: {
                                main: 12,
                                side: t.config.experiments.ui.serviceBar ? -12 : 0
                            },
                            "bottom-left": {
                                main: 12,
                                side: 20
                            }
                        },
                        showArrow: !1,
                        isShown: t.isShown,
                        onClose: t.onClose,
                        onMouseEnter: t.onMouseEnter,
                        onMouseLeave: t.onMouseLeave
                    }, o.createElement(z.Z, {
                        autoFocus: !1,
                        returnFocus: !0
                    }, o.createElement("div", {
                        className: W("popup-wrapper")
                    }, e)))
                }
                ,
                n._renderParanja = function(e) {
                    var t = n.props;
                    return o.createElement(p.Z, {
                        isShown: t.isShown,
                        onClose: n._onShutterClose,
                        swipeable: !0
                    }, e)
                }
                ,
                n._renderModeButtons = function() {
                    var e = n.props
                      , t = g.jr(e.trafficLevel, .2)
                      , r = e.isMasstransitLayerShown && e.isMasstransitLayerEnabledOnAnotherZoom ? "Увеличьте масштаб, чтобы увидеть движущийся транспорт" : e.isMasstransitLayerShown && !e.isMasstransitLayerEnabled ? "Нет информации о движении автобусов в этой области карты" : "Движущийся транспорт";
                    return o.createElement("div", {
                        className: W("modes")
                    }, o.createElement(c.ZP, {
                        name: "traffic",
                        nodeState: {
                            checked: e.isTrafficLayerEnabled
                        },
                        logClick: !0
                    }, o.createElement(L.Z, {
                        icon: function() {
                            return o.createElement(f.Z, {
                                enabled: e.isTrafficLayerEnabled,
                                level: e.trafficLevel
                            })
                        },
                        iconStyle: {
                            backgroundColor: e.isTrafficLayerEnabled ? t : void 0
                        },
                        active: e.isTrafficLayerEnabled,
                        role: "checkbox",
                        onClick: e.toggleTrafficLayer
                    }, "Пробки")), o.createElement(d.Z, {
                        text: r,
                        position: "left",
                        isDisabled: !e.isMasstransitLayerShown || e.isMasstransitLayerEnabled && !e.isMasstransitLayerEnabledOnAnotherZoom,
                        isAir: !0
                    }, function(t) {
                        return o.createElement("div", {
                            ref: t
                        }, o.createElement(c.ZP, {
                            name: "masstransit",
                            nodeState: {
                                checked: e.isMasstransitLayerShown
                            },
                            logClick: !0
                        }, o.createElement(L.Z, {
                            icon: "bus-24",
                            role: "checkbox",
                            active: e.isMasstransitLayerShown,
                            onClick: e.toggleMasstransitLayer
                        }, "Движущийся транспорт")))
                    }), o.createElement(d.Z, {
                        text: "Парковки можно включить только на крупных масштабах карты",
                        position: "left",
                        isDisabled: e.isParkingLayerEnabled,
                        isAir: !0,
                        hideOnClick: !1
                    }, function(t) {
                        return o.createElement("div", {
                            ref: t
                        }, o.createElement(c.ZP, {
                            name: "parking",
                            nodeState: {
                                checked: e.isParkingLayerShown
                            },
                            logClick: !0
                        }, o.createElement(L.Z, {
                            icon: "parking-24",
                            active: e.isParkingLayerShown && e.isParkingLayerEnabled,
                            role: "checkbox",
                            disabled: !e.isParkingLayerEnabled,
                            onClick: e.isParkingLayerEnabled ? e.toggleParkingLayer : void 0
                        }, "Парковки")))
                    }), o.createElement(c.ZP, {
                        name: "mrc",
                        nodeState: {
                            checked: e.isMrcLayerEnabled
                        },
                        logClick: !0
                    }, o.createElement(L.Z, {
                        icon: "mirrors-24",
                        active: e.isMrcLayerShown,
                        role: "checkbox",
                        disabled: !e.isMrcLayerShown && !e.isMrcLayerEnabled,
                        onClick: e.isMrcLayerShown ? e.disableMrcLayer : e.enableMrcLayer
                    }, "Зеркала")), o.createElement(c.ZP, {
                        name: "panoramas",
                        nodeState: {
                            checked: e.isPanoramasPhotosLayerEnabled
                        },
                        logClick: !0
                    }, o.createElement(L.Z, {
                        icon: "panorama-24-flip",
                        active: e.isPanoramasPhotosLayerEnabled,
                        role: "checkbox",
                        disabled: !e.isPanoramasPhotosLayerEnabled && !e.isPanoramasLayerAvailable,
                        onClick: n._togglePanoramasPhotosLayer
                    }, "Панорамы")))
                }
                ,
                n._renderToolsButtons = function() {
                    var e = n.props;
                    return o.createElement("div", {
                        className: W("tools")
                    }, o.createElement(c.ZP, {
                        name: "bookmarks",
                        logClick: !0
                    }, o.createElement(L.Z, {
                        ariaHaspopup: !0,
                        ariaExpanded: !1,
                        role: "button",
                        icon: "bookmark-filled-24",
                        onClick: n._onBookmarksClick,
                        disabled: e.hasError
                    }, "Закладки")), o.createElement(c.ZP, {
                        name: "ruler",
                        nodeState: {
                            checked: e.isRulerEnabled
                        },
                        logClick: !0
                    }, o.createElement(L.Z, {
                        icon: "ruler-24",
                        active: e.isRulerEnabled,
                        role: "checkbox",
                        disabled: e.isRulerBlocked,
                        onClick: e.switchRuler
                    }, "Линейка")), o.createElement(c.ZP, {
                        name: "night_overlay",
                        nodeState: {
                            checked: e.isNightShown
                        },
                        logClick: !0
                    }, o.createElement(L.Z, {
                        icon: "day-cycle-24",
                        active: e.isNightShown,
                        role: "checkbox",
                        onClick: n._onNightClick,
                        renderRightContent: n.state.isNightControlVisited ? void 0 : function() {
                            return o.createElement("div", {
                                className: W("unvisited")
                            }, o.createElement(j.Z, {
                                size: "medium",
                                color: "action"
                            }))
                        }
                    }, "Карта дня и ночи")))
                }
                ,
                n._renderBookmarksMenu = function() {
                    var e = n.props;
                    return o.createElement(c.ZP, {
                        name: "bookmarks_layers_menu"
                    }, o.createElement(F, {
                        isShown: e.isShown,
                        popupProps: {
                            position: ["bottom", "bottom-left"],
                            restrictPosition: !0,
                            positionOffsets: {
                                bottom: {
                                    main: 12,
                                    side: 0
                                },
                                "bottom-left": {
                                    main: 12,
                                    side: 20
                                }
                            },
                            showArrow: !1,
                            getTarget: e.getTarget,
                            onClose: e.onClose,
                            onMouseEnter: e.onMouseEnter,
                            onMouseLeave: e.onMouseLeave
                        },
                        onClose: n._onCloseBookmarks
                    }))
                }
                ,
                n._renderLayersMenu = function() {
                    var e = n.props;
                    return o.createElement(c.ZP, {
                        name: "layers_panel"
                    }, o.createElement("div", {
                        className: W()
                    }, o.createElement("div", {
                        className: W("layers")
                    }, o.createElement("div", {
                        className: W("segment-control-container")
                    }, o.createElement(O.Z, {
                        view: "filled-white",
                        size: "medium",
                        selectedKey: e.type,
                        items: B,
                        onClick: n._onLayerChange
                    })), (e.config.experiments.ui.mapModeFutureSetting,
                    null)), e.areAdditionalLayersAvailable ? o.createElement(o.Fragment, null, n._renderModeButtons(), n._renderToolsButtons()) : null))
                }
                ,
                n.state = {
                    view: "layers",
                    isNightControlVisited: !!D.Z.get("is_night_control_visited")
                },
                n
            }
            (0,
            r._)(t, e);
            var n = t.prototype;
            return n.componentDidUpdate = function(e) {
                var t = this.props;
                t.config.authorization && t.isShown && t.initBookmarksManager(),
                e.isShown && !t.isShown && "bookmarks" === this.state.view && this._onCloseBookmarks(),
                e.panoramasPhotosLayer && !t.panoramasPhotosLayer && t.updateMapControls({
                    savedPanoramasPhotosLayer: e.panoramasPhotosLayer
                })
            }
            ,
            n.render = function() {
                var e = this.state;
                this.props;
                var t = this._renderPopup;
                switch (e.view) {
                case "bookmarks":
                    return this._renderBookmarksMenu();
                case "layers":
                    return t(this._renderLayersMenu())
                }
            }
            ,
            t
        }(o.Component))
    }
    ,
    96449: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => b
        });
        var r = n(2267)
          , o = n(34788)
          , a = n(18007)
          , i = n(87363)
          , s = n(61533)
          , c = n(55877)
          , l = n.n(c)
          , u = n(44748)
          , d = n(78597)
          , p = n(97313)
          , v = n(99870)
          , m = n(32858)
          , g = n(31336)
          , f = (0,
        u.Z)("map-placemark")
          , h = function() {}
          , k = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._container = document.createElement("div"),
                n._onDragStart = function() {
                    n.setState({
                        isDragging: !0
                    }),
                    n._fireInteractionEvent()
                }
                ,
                n._fireInteractionEvent = function() {
                    m.N(window, "map-placemark-interaction")
                }
                ,
                n._updateCursor = function() {
                    var e = n.state.isDragging ? "grabbing" : n.props.cursor ? n.props.cursor : n.props.onClick || n.props.onMouseEnter || n.props.draggable ? "pointer" : "default";
                    n._container.style.cursor = e
                }
                ,
                n._addMapEventHandlers = function(e) {
                    var t = {
                        dragStart: e.onDragStart,
                        dragMove: e.onDragMove,
                        dragEnd: e.onDragEnd
                    };
                    Object.keys(t).forEach(function(e) {
                        t[e] && n._mapEventHandlers.on(e, function(r) {
                            var o = r.object
                              , a = r.newGeometry;
                            if (o && "Feature" === o.type && o.id === n._marker.feature.id) {
                                var i = n.props.map.projection.fromWorldCoordinates(a.coordinates);
                                t[e]({
                                    coordinates: i
                                })
                            }
                        })
                    })
                }
                ,
                n._onDragEnd = function(e) {
                    var t = e.object
                      , r = e.newGeometry;
                    n.setState({
                        isDragging: !1
                    }),
                    t && "Feature" === t.type && t.id === n._marker.feature.id && (n._marker.feature.geometry.coordinates = n.props.map.projection.fromWorldCoordinates(r.coordinates))
                }
                ,
                n._onClick = function(e) {
                    e.stopPropagation(),
                    n._fireInteractionEvent();
                    var t = n.props
                      , r = t.onClick || h
                      , o = t.onFastClick || h
                      , a = t.onDoubleClick || h;
                    n._clickTimer ? (a(),
                    window.clearTimeout(n._clickTimer),
                    n._clickTimer = void 0) : (o(),
                    n._clickTimer = window.setTimeout(function() {
                        r(),
                        n._clickTimer = void 0
                    }, 300))
                }
                ,
                n.state = {
                    isDragging: !1
                },
                n._container.className = f(),
                n._marker = {
                    feature: {
                        type: "Feature",
                        id: l().v4(),
                        draggable: t.draggable,
                        disableRoundCoordinates: t.disableRoundCoordinates,
                        blockEvents: t.blockEvents,
                        geometry: {
                            type: "Point",
                            coordinates: t.coordinates
                        }
                    },
                    style: {
                        zIndex: t.zIndex || p.I.default,
                        element: n._container
                    }
                },
                n._mapEventHandlers = n.props.map.dragger.group(),
                n
            }
            (0,
            a._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                var e = this.props;
                this._updateCursor(),
                this._addMapEventHandlers(e),
                e.map.addFeature(this._dataSourceId, this._marker.feature, this._marker.style),
                this._mapEventHandlers.on("dragStart", this._onDragStart),
                this._mapEventHandlers.on("dragEnd", this._onDragEnd)
            }
            ,
            n.componentWillUnmount = function() {
                this.props.map.destroyed || (this._mapEventHandlers.offAll(),
                this.props.map.removeFeatureById(this._dataSourceId, this._marker.feature.id)),
                window.clearTimeout(this._clickTimer)
            }
            ,
            n.componentDidUpdate = function(e, t) {
                var n = e.dataSourceId ? e.dataSourceId : v.UZ.DEFAULT_MARKERS;
                n !== this._dataSourceId && (this.props.map.removeFeatureById(n, this._marker.feature.id),
                this.props.map.addFeature(this._dataSourceId, this._marker.feature, this._marker.style));
                var r = this.props
                  , a = !1;
                r.coordinates !== e.coordinates && (a = !0,
                this._marker.feature.geometry.coordinates = r.coordinates),
                e.draggable !== r.draggable && (a = !0,
                this._marker.feature.draggable = r.draggable),
                e.zIndex !== r.zIndex && (a = !0,
                this._marker.style.zIndex = r.zIndex || p.I.default),
                e.disableRoundCoordinates !== r.disableRoundCoordinates && (a = !0,
                this._marker.feature.disableRoundCoordinates = r.disableRoundCoordinates || !1),
                a && this.props.map.upsertFeature(this._dataSourceId, (0,
                o._)({}, this._marker.feature), (0,
                o._)({}, this._marker.style)),
                (r.onDragStart !== e.onDragStart || r.onDragMove !== e.onDragMove || r.onDragEnd !== e.onDragEnd) && (this._mapEventHandlers.offAll(),
                this._addMapEventHandlers(r)),
                (e.draggable !== r.draggable || e.cursor !== r.cursor || e.onClick !== r.onClick || t.isDragging !== this.state.isDragging) && this._updateCursor()
            }
            ,
            n.render = function() {
                var e = this.props;
                return s.createPortal(i.createElement("div", {
                    dir: e.config.isRtl ? "rtl" : "ltr",
                    "aria-hidden": !0,
                    className: f("wrapper", {
                        "non-interactive": e.nonInteractive
                    }),
                    onClick: this._onClick,
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onMouseMove: e.onMouseMove
                }, e.children), this._container)
            }
            ,
            (0,
            r._)(t, [{
                key: "_dataSourceId",
                get: function() {
                    return this.props.dataSourceId || v.UZ.DEFAULT_MARKERS
                }
            }]),
            t
        }(i.PureComponent)
          , b = (0,
        g.ZP)((0,
        d.ZP)({
            shouldWait: !0
        })(k))
    }
    ,
    10417: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => S
        });
        var r = n(87363)
          , o = n(28216)
          , a = n(39705)
          , i = n(99091)
          , s = n(44748)
          , c = n(38614)
          , l = n(60517)
          , u = n(92616)
          , d = n(56277)
          , p = n(35450)
          , v = n(81252)
          , m = n(8601)
          , g = n(74116)
          , f = n(88813)
          , h = n(31336)
          , k = n(85172)
          , b = n(6406)
          , y = n(6241)
          , _ = n(17442)
          , w = (0,
        s.Z)("map-future-setting-view")
          , E = function() {
            var e = (0,
            h.ZR)()
              , t = o.v9(function(e) {
                return e.map.modeFutureSelected
            })
              , n = o.I0();
            return e.experiments.ui.mapModeFutureSetting ? r.createElement(l.ZP, {
                name: "future_map_settings",
                logClick: !0,
                nodeState: {
                    selected: t
                }
            }, r.createElement(g.Z, {
                onClick: function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    n(i.Z.toggleMapModeFuture())
                },
                ariaLabel: "Новая карта",
                subtitle: r.createElement("div", {
                    className: w("text")
                }, "Другой цвет дорог, зданий и природных зон"),
                renderRightContent: function() {
                    return r.createElement("div", {
                        className: w("control-container")
                    }, r.createElement(_.Z, {
                        checked: t
                    }))
                }
            }, r.createElement("div", {
                className: w("header")
            }, "Новая карта"))) : null
        }
          , C = (0,
        s.Z)("map-tools-list"),
S = function(e) {
    var t,
        n = (0, h.ZR)(),
        s = (0, k.Fg)(!0),          // хук: { theme, setTheme, isSystemTheme }
        _ = s.theme,
        w = s.setTheme,
        S = s.isSystemTheme;

    // 👇 ДОБАВЛЯЕМ: Обработчик кастомного события смены темы
    if (typeof window !== "undefined" && !window.__ymaps_theme_listener_attached) {
        window.addEventListener("force-theme", function(ev) {
            try {
                const theme = ev?.detail?.theme;
                if (theme === "light" || theme === "dark" || theme === "system") {
                    w(theme); // вызываем setTheme из хука
                }
            } catch (err) {
                console.error("Theme switch error:", err);
            }
        });
        window.__ymaps_theme_listener_attached = true;
    }

    var Z = o.v9(function(e) {
        var t = (0, d.bq)(e, { format: "query" }),
            r = {
                ll: (0, a.s)(e.map.location.center),
                z: e.map.location.zoom
            };
        return {
            helpUrl: n.feedback.helpUrl + "?lang=" + n.lang,
            printUrl: n.uatraits.isTablet ? void 0 : p.Z(t, n),
            metroUrl: n.hosts.metro ? y.format(n.hosts.metro, r) : void 0,
            apiUrl: n.apiManual.mapsApiUrl ? n.apiManual.mapsApiUrl + "/?utm_source=sidesection&utm_medium=referral&utm_campaign=b2bpromo" : void 0,
            isRulerEnabled: e.ruler.isEnabled,
            isRulerBlocked: (0, v.J)(e)
        };
    }),
    L = o.I0();

            return r.createElement(u.Z, e.popupProps, r.createElement(f.Z, {
                autoFocus: !1,
                returnFocus: !0
            }, r.createElement("div", {
                className: C(),
                onClick: e.onContentClick
            }, r.createElement(l.ZP, {
                name: "tools_list"
            }, e.showRuler ? r.createElement(l.ZP, {
                name: "ruler",
                logClick: !0
            }, r.createElement(g.Z, {
                icon: "ruler-24",
                onClick: function(e) {
                    e.stopPropagation(),
                    L(i.Z.switchRuler())
                },
                active: Z.isRulerEnabled,
                disabled: Z.isRulerBlocked,
                ariaLabel: "Линейка"
            }, "Линейка")) : null, Z.printUrl ? r.createElement(l.ZP, {
                name: "print",
                logClick: !0
            }, r.createElement(g.Z, {
                icon: "printer-24",
                link: {
                    href: Z.printUrl,
                    target: "_blank"
                },
                onClick: function() {
                    c.Z.set("print_url", Z.printUrl)
                }
            }, "Печать")) : null, r.createElement(l.ZP, {
                name: "share",
                logClick: !0
            }, r.createElement(g.Z, {
                icon: "share-24-flip",
                onClick: function() {
                    return L(i.Z.openShare())
                }
            }, "Поделиться")), Z.metroUrl ? r.createElement(l.ZP, {
                name: "metro",
                logClick: !0
            }, r.createElement(g.Z, {
                icon: "subway-fallback-24",
                link: {
                    href: Z.metroUrl,
                    target: "_blank"
                }
            }, "Схема метро")) : null, Z.apiUrl ? r.createElement(l.ZP, {
                name: "maps_api",
                logClick: !0
            }, r.createElement(g.Z, {
                icon: "api-logo-24",
                link: {
                    href: Z.apiUrl,
                    target: "_blank"
                },
                ariaHidden: !0,
                tabIndex: -1
            }, "Карты для вашего сайта")) : null, r.createElement(l.ZP, {
                name: "map_edit",
                logClick: !0
            }, r.createElement(g.Z, {
                icon: "edit-nofill-24",
                ariaHidden: !0,
                onClick: function() {
                    return L(m.Z.openMapEditFeedback({
                        context: {
                            formContextId: "map.controls"
                        }
                    }))
                }
            }, "Редактировать карту")), r.createElement(l.ZP, {
                name: "feedback",
                logClick: !0
            }, r.createElement(g.Z, {
                ariaLabel: "Сообщить об ошибке",
                tabIndex: 0,
                icon: "org-info-24",
                onClick: function() {
                    return L(m.Z.openCommonFeedback())
                }
            }, "Сообщить об ошибке")), r.createElement(l.ZP, {
                name: "help",
                logClick: !0
            }, r.createElement(g.Z, {
                ariaLabel: "Справка",
                icon: "org-possibly-closed-24",
                link: {
                    href: Z.helpUrl,
                    target: "_blank"
                }
            }, "Справка")), (null == (t = n.bunker.disableDarkTheme) ? void 0 : t.desktop) ? null : r.createElement(r.Fragment, null, r.createElement("div", {
                className: C("divider")
            }), r.createElement(g.Z, {
                clickable: !1,
                icon: "theme-24",
                ariaHidden: !0
            }, "Тема"), r.createElement(l.ZP, {
                name: "theme",
                logClick: !0
            }, r.createElement("div", {
                className: C("switcher")
            }, r.createElement(b.Z, {
                view: "filled-white",
                size: "large",
                items: [{
                    key: "light",
                    title: "Светлая"
                }, {
                    key: "dark",
                    title: "Тёмная"
                }, {
                    key: "system",
                    title: "Система"
                }],
                selectedKey: S ? "system" : _,
                onClick: function(e, t) {
                    null == t || t.stopPropagation(),
                    w(e)
                }
            })))), r.createElement(E, null)))))
        }
    }
    ,
    93905: (e, t, n) => {
        "use strict";
        var r = n(70427);
        t.Z = (0,
        r.Z)(function() {
            return n.e("masstransit-bookmarks").then(n.bind(n, 25355))
        }, {
            initMasstransitManager: !0,
            addStop: !0,
            addLine: !0,
            removeStop: !0,
            removeLine: !0,
            setHighlightedStopId: !0
        })
    }
    ,
    24872: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => m
        });
        var r = n(18007)
          , o = n(87363)
          , a = n(28216)
          , i = n(44748)
          , s = n(12269)
          , c = n(60517)
          , l = n(28661)
          , u = n(13975)
          , d = n(49267)
          , p = {
            setLoadingPanorama: s.Z.setLoadingPanorama
        }
          , v = (0,
        i.Z)("panorama-thumbnail-view")
          , m = a.$j(function(e) {
            return {
                config: e.config
            }
        }, p)(function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._onClick = function() {
                    t.props.setLoadingPanorama({
                        id: t.props.panorama.id,
                        direction: t.props.panorama.direction
                    }),
                    null == t.props.onClick || t.props.onClick.call(t.props)
                }
                ,
                t
            }
            return (0,
            r._)(t, e),
            t.prototype.render = function() {
                var e = this.props;
                return o.createElement(c.ZP, {
                    name: "panorama",
                    metrikaGoal: "goal_deepuse",
                    logClick: !0
                }, o.createElement("div", {
                    className: v({
                        view: e.view
                    }),
                    onClick: this._onClick
                }, o.createElement(u.Z, {
                    src: e.panorama.preview,
                    alt: e.panorama.alt,
                    backgroundSize: "cover",
                    renderImmediately: !0
                }), o.createElement("div", {
                    className: v("label")
                }, ["whatshere", "preview"].includes(e.view) ? o.createElement(d.Z, {
                    name: "panorama-24-flip",
                    className: v("icon"),
                    inline: !0
                }) : null, "preview" === e.view ? "Панорама" : ""), o.createElement(l.Z, {
                    chunk: "panoramas"
                })))
            }
            ,
            t
        }(o.Component))
    }
    ,
    25562: (e, t, n) => {
        "use strict";
        var r = n(34788)
          , o = n(99091)
          , a = {
            setLayer: function(e) {
                return function(t, n) {
                    var a, i, s = n(), c = s.homePanel, l = !!s.config.experiments.ui.serviceBar, u = c.types.filter(function(e) {
                        return "traffic" !== e
                    }), d = (null == (i = s.config.layers.carparks) ? void 0 : null == (a = i.zoomRange) ? void 0 : a[0]) || 14, p = s.map.location.center, v = s.geolocation.currentPosition;
                    l && e && s.map.location.zoom < d && t(o.Z.setMapLocation({
                        center: v || p,
                        zoom: d,
                        duration: 450
                    })),
                    t({
                        type: "DEEP_EXTEND",
                        payload: e ? (0,
                        r._)({}, l ? {} : {
                            homePanel: {
                                types: u
                            }
                        }, {
                            parking: {
                                isLayerShown: !!l || n().parking.isLayerEnabled
                            }
                        }, l ? {} : {
                            traffic: {
                                isLayerEnabled: !1
                            }
                        }, {
                            panoramas: {
                                isLayerEnabled: !1
                            },
                            photos: {
                                isLayerEnabled: !1
                            },
                            mrc: {
                                isLayerEnabled: !1
                            }
                        }) : {
                            parking: {
                                isLayerShown: !1
                            }
                        }
                    })
                }
            },
            toggleLayer: function() {
                return function(e, t) {
                    if (t().parking.isLayerShown)
                        return e(a.setLayer(!1));
                    e(a.setLayer(!0))
                }
            },
            updateLayerAvailability: function(e) {
                return {
                    type: "DEEP_EXTEND",
                    payload: {
                        parking: e
                    }
                }
            }
        };
        t.Z = a
    }
    ,
    86904: (e, t, n) => {
        "use strict";
        n.r(t);
        var r = n(18007)
          , o = n(87363)
          , a = n(28216)
          , i = n(90585)
          , s = n(31336)
          , c = n(25562)
          , l = n(24063)
          , u = n(78597)
          , d = n(76475)
          , p = n(60517)
          , v = n(61453)
          , m = n(36191)
          , g = {
            updateLayerAvailability: c.Z.updateLayerAvailability,
            openCard: v.Z.openCard,
            processMapObjectClick: m.Z.processMapObjectClick
        }
          , f = (0,
        i.Z)(a.$j(function(e) {
            var t = e.parking
              , n = e.map;
            return {
                isLayerShown: t.isLayerShown,
                isLayerEnabled: t.isLayerEnabled,
                zoom: n.location.zoom,
                center: t.center
            }
        }, g), (0,
        u.ZP)({
            shouldWait: !0
        }), s.ZP)
          , h = function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._analyticsRef = o.createRef(),
                t._checkLayer = function() {
                    var e = t.props
                      , n = l.Z.checkStaticZoomRange("carparks", e.zoom, e.config);
                    n !== e.isLayerEnabled && e.updateLayerAvailability({
                        isLayerEnabled: n
                    })
                }
                ,
                t._onHotspotClick = function(e, n) {
                    var r, o = t.props, a = e.properties.uri, i = e.geometry && e.geometry.coordinates || n.coordinates;
                    o.processMapObjectClick({
                        point: {
                            coords: i,
                            uri: a,
                            value: ""
                        },
                        action: function() {
                            o.openCard({
                                coordinates: i,
                                from: "poi",
                                hotspotProperties: e.properties,
                                uri: a,
                                origin: "poi"
                            })
                        }
                    }),
                    t._analyticsRef.current && t._analyticsRef.current.logEvent("click", {
                        uri: a,
                        coordinates: i,
                        type: null == (r = e.properties.vectorMetadata) ? void 0 : r.get("type")
                    })
                }
                ,
                t
            }
            (0,
            r._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this._checkLayer()
            }
            ,
            n.componentDidUpdate = function(e) {
                e.zoom !== this.props.zoom && this._checkLayer()
            }
            ,
            n.render = function() {
                var e = this.props;
                return e.isLayerEnabled && e.isLayerShown ? o.createElement(p.ZP, {
                    name: "parking_layer",
                    nodeRef: this._analyticsRef
                }, o.createElement(d.ZP, {
                    layer: "carparks",
                    onClick: this._onHotspotClick
                })) : null
            }
            ,
            t
        }(o.Component);
        h.displayName = "ParkingComponent",
        t.default = f(h)
    }
    ,
    97032: (e, t, n) => {
        "use strict";
        var r = n(70427);
        t.Z = (0,
        r.Z)(function() {
            return n.e("reviews").then(n.bind(n, 67148))
        }, {
            loadReviews: !0,
            loadReviewPollData: !0,
            loadUserReview: !0,
            reloadReviews: !0,
            editReview: !0,
            editReviewByCompanyId: !0,
            deleteReview: !0,
            restoreReview: !0,
            updateReview: !0,
            changeUserReaction: !0,
            changeRanking: !0,
            changeSelectedAspect: !0,
            resetSelectedAspect: !0,
            resetSharedReview: !0,
            updateUnlockedAchievement: !0
        })
    }
    ,
    11187: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => s
        });
        var r = n(87363)
          , o = n(44748)
          , a = n(59270)
          , i = (0,
        o.Z)("traffic-icon")
          , s = function(e) {
            var t = e.size || "normal"
              , n = e.enabled && "number" == typeof e.level ? a.ZU(e.level) : null;
            return r.createElement("div", {
                className: i({
                    color: n,
                    size: t
                })
            }, r.createElement("div", {
                className: i("text")
            }, e.enabled ? e.level : null))
        }
    }
    ,
    10101: (e, t, n) => {
        "use strict";
        n.d(t, {
            $e: () => o,
            vK: () => r,
            uA: () => a
        });
        var r = ["airport", "district", "entrance", "house", "hydro", "route", "metro_station", "other", "railway_station", "station", "street", "vegetation"]
          , o = ["street", "district", "locality", "area", "province", "country", "route", "vegetation", "other"]
          , a = ["district", "locality", "area", "province", "country", "other"]
    }
    ,
    50415: (e, t, n) => {
        "use strict";
        n.d(t, {
            y: () => o,
            Y: () => a
        });
        var r = n(11912)
          , o = function(e) {
            return !!e
        };
        function a(e, t) {
            var n = null == e ? void 0 : e.match(RegExp("[" + Object.keys(t).join() + "]", "g"))
              , o = Object.keys(t).reduce(function(e, t) {
                return e[t] = t.length > 1 || !n ? -1 : n.lastIndexOf(t),
                e
            }, {});
            if (!n || Object.values(o).find(function(e) {
                return -1 === e
            }))
                return Object.values(t).flat();
            for (var a = [], i = Object.keys(t).reduce(function(e, t) {
                return e[t] = 0,
                e
            }, {}), s = 0; s < n.length; s++) {
                var c = n[s]
                  , l = t[c]
                  , u = i[c]
                  , d = o[c];
                l && l[u] && (s < d ? (a.push(l[u]),
                i[c]++) : s === d && a.push.apply(a, (0,
                r._)(l.slice(u))))
            }
            return a
        }
    }
    ,
    97313: (e, t, n) => {
        "use strict";
        n.d(t, {
            I: () => r
        });
        var r = {
            screenshotDialog: 99999,
            clipboard: 99999,
            ruler: 8030,
            editing: 8030,
            hover: 8020,
            active: 8e3,
            search: {
                active: 8e3,
                subtitle: 7500,
                title: 7e3,
                base: 6500,
                dot: 6e3
            },
            advert: 5e3,
            dialog: 2e3,
            usermaps: {
                placemark: 3e3,
                line: 2e3,
                polygon: 1e3
            },
            discovery: 580,
            routes: 550,
            routePins: {
                waypoint: 8e3,
                masstransit: 7900
            },
            masstransitStop: 8001,
            moving: 500,
            masstransitLineStop: 510,
            home: 451,
            work: 450,
            default: 400,
            tooltip: 352,
            masstransitRegion: 350,
            bookmarks: 300,
            minimum: 1
        }
    }
    ,
    39606: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => O
        });
        var r = n(34788)
          , o = n(18007)
          , a = n(87363)
          , i = n(28216)
          , s = n(99091)
          , c = n(61453)
          , l = n(36191)
          , u = n(12269)
          , d = n(12574)
          , p = n(92616)
          , v = n(43341)
          , m = n(37830)
          , g = n(98822)
          , f = n(45736)
          , h = n(73911)
          , k = n(20224)
          , b = n(44748)
          , y = n(10101)
          , _ = n(13340)
          , w = n(58155)
          , E = n(77558)
          , C = n(60517)
          , S = n(49267)
          , Z = n(96449)
          , L = n(24872)
          , P = n(94542)
          , M = n(35501)
          , I = n(63996)
          , R = (0,
        b.Z)("whats-here-preview")
          , x = {
            main: 10,
            side: 0
        }
          , T = function(e) {
            function t() {
                var t;
                return t = e.apply(this, arguments) || this,
                t._renderPanorama = function() {
                    var e, n = M.Y(null == (e = t.props.searchResults) ? void 0 : e.items), r = null == n ? void 0 : n.panorama;
                    return n && r ? a.createElement("div", {
                        className: R("panorama")
                    }, a.createElement(L.Z, {
                        panorama: r,
                        view: "whatshere",
                        onClick: t.props.onClose
                    })) : null
                }
                ,
                t._renderPopup = function() {
                    var e = t.props
                      , n = e.coordinates
                      , r = e.zoom
                      , o = e.searchResults
                      , i = (0,
                    k._)(e, ["coordinates", "zoom", "searchResults"])
                      , s = M.Y(null == o ? void 0 : o.items);
                    if (!s)
                        return a.createElement(w.Z, {
                            callback: i.onClose
                        }, function(e) {
                            return a.createElement("div", {
                                ref: e
                            })
                        });
                    var c = y.$e.includes(s.kind) && r >= 15;
                    return a.createElement(_.Z, {
                        coordinates: n,
                        position: ["top", "bottom", "left", "right"],
                        offset: x,
                        onClose: i.onClose,
                        showArrow: !1,
                        isShown: !0
                    }, a.createElement(C.ZP, {
                        name: "whatshere_preview"
                    }, a.createElement("div", {
                        className: R()
                    }, a.createElement("div", {
                        className: R("main")
                    }, a.createElement(C.ZP, {
                        name: "title",
                        logClick: !0
                    }, a.createElement(P.Z, {
                        className: R("info"),
                        onClick: function() {
                            return i.openWhatshere({
                                coordinates: n,
                                zoom: r,
                                searchResults: o
                            })
                        }
                    }, a.createElement("div", {
                        className: R("title")
                    }, s.title), a.createElement("div", {
                        className: R("description")
                    }, s.description))), t._renderPanorama()), c ? a.createElement("div", {
                        className: R("links")
                    }, a.createElement(C.ZP, {
                        name: "add_exact_address",
                        logClick: !0
                    }, a.createElement(P.Z, {
                        tag: "span",
                        className: R("add-object"),
                        onClick: function() {
                            return i.openAddObjectFeedback(n)
                        }
                    }, "Добавить точный адрес")), a.createElement(I.a, {
                        entry: "whatsHerePreview"
                    })) : null, a.createElement("div", {
                        className: R("line")
                    }), a.createElement("div", {
                        className: R("control")
                    }, a.createElement(C.ZP, {
                        name: "route",
                        logClick: !0
                    }, a.createElement(P.Z, {
                        className: R("control-route"),
                        onClick: function() {
                            return t.props.onRouteClick(s)
                        }
                    }, a.createElement(S.Z, {
                        name: "navi-24-flip",
                        className: R("control-route-icon"),
                        inline: !0
                    }), "Маршрут")), a.createElement(C.ZP, {
                        name: "nearby",
                        logClick: !0
                    }, a.createElement(P.Z, {
                        className: R("control-search"),
                        onClick: function() {
                            return t.props.onSearchNearbyClick(s)
                        }
                    }, a.createElement(S.Z, {
                        name: "nearby-24",
                        className: R("control-route-icon"),
                        inline: !0
                    }), "Искать рядом"))))))
                }
                ,
                t
            }
            return (0,
            o._)(t, e),
            t.prototype.render = function() {
                var e, t = this.props, n = null == (e = t.searchResults) ? void 0 : e.items[0];
                return a.createElement(Z.default, {
                    coordinates: t.coordinates,
                    nonInteractive: !0
                }, this._renderPopup(), a.createElement("div", {
                    className: R("placemark", {
                        expanded: !!n
                    })
                }, a.createElement("div", {
                    className: R("placemark-point")
                })), a.createElement(E.Z, {
                    type: "resize",
                    listener: t.onClose
                }))
            }
            ,
            t
        }(a.Component)
          , A = n(523)
          , F = n(8601)
          , N = {
            openCard: c.Z.openCard,
            buildRouteTo: l.Z.buildRouteTo,
            close: c.Z.closeWhatsherePreview,
            updateWhatsherePreview: c.Z.updateWhatsherePreview,
            setLoadingPanorama: u.Z.setLoadingPanorama,
            setSearchFormType: s.Z.setSearchFormType,
            searchNearby: A.Z.searchNearby,
            openAddObjectFeedback: F.Z.openAddObjectFeedback
        }
          , z = i.$j(function(e) {
            var t = v.A(e, "routes");
            return {
                config: e.config,
                shouldIgnoreClick: e.ruler.isEnabled || e.panoramas.isLayerEnabled || e.photos.isLayerEnabled || e.map.isEditing || !!(t && t.routePoints.some(function(e) {
                    return !e.coords
                })) || e.mrc.isLayerEnabled || m.m(e.config),
                data: e.whatsherePreview,
                zoom: e.map.location.zoom
            }
        }, N)
          , D = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this)._mapAnalyticsRef = a.createRef(),
                n._canBeShown = !0,
                n._onDocumentMousedown = function(e) {
                    n.props.config.uatraits.isTouch && "mousedown" === e.type || (n._canBeShown = !(0,
                    p.o)())
                }
                ,
                n._onMapClick = function(e, t) {
                    var r, o = t.coordinates, a = n.props;
                    if (!(a.shouldIgnoreClick || !n.state.handleMapClick || !n._canBeShown || (0,
                    p.o)())) {
                        null == (r = n._mapAnalyticsRef.current) || r.logEvent("click");
                        var i = a.zoom;
                        n.setState({
                            handleMapClick: !1
                        }),
                        a.updateWhatsherePreview({
                            coordinates: o,
                            from: "whatshere",
                            zoom: i,
                            origin: "whatshere"
                        })
                    }
                }
                ,
                n._onMapUpdate = function() {
                    n.props.data && n.props.close()
                }
                ,
                n._openWhatshere = function(e) {
                    var t, r = n.props, o = {
                        coordinates: e.coordinates,
                        from: "whatshere",
                        origin: "whatshere",
                        zoom: r.zoom
                    };
                    g.U(o),
                    r.openCard(o, {
                        response: null != (t = e.searchResults) ? t : void 0
                    }),
                    r.close()
                }
                ,
                n._onRouteClick = function(e) {
                    var t = n.props;
                    t.buildRouteTo({
                        value: e.title,
                        coords: t.data.coordinates,
                        searchResult: e
                    }),
                    t.close()
                }
                ,
                n._onSearchNearbyClick = function(e) {
                    n._openWhatshere(n.props.data);
                    var t = f.T(e);
                    n.props.searchNearby(t)
                }
                ,
                n._openAddObjectFeedback = function(e) {
                    var t = n.props;
                    t.openAddObjectFeedback({
                        type: "address/add",
                        context: {
                            formContextId: "toponym.building_without_address"
                        },
                        coordinates: e
                    }),
                    t.close()
                }
                ,
                n.state = {
                    handleMapClick: !0
                },
                n
            }
            (0,
            o._)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                window.document.addEventListener("mousedown", this._onDocumentMousedown, !0),
                window.document.addEventListener("touchstart", this._onDocumentMousedown, !0)
            }
            ,
            n.componentDidUpdate = function(e) {
                var t = this;
                e.data && !this.props.data && setTimeout(function() {
                    return t.setState({
                        handleMapClick: !0
                    })
                }, 500)
            }
            ,
            n.componentWillUnmount = function() {
                window.document.removeEventListener("mousedown", this._onDocumentMousedown, !0),
                window.document.removeEventListener("touchstart", this._onDocumentMousedown, !0)
            }
            ,
            n.render = function() {
                var e = this.props;
                return a.createElement(a.Fragment, null, e.data ? a.createElement(T, (0,
                r._)({}, e.data, {
                    zoom: e.zoom,
                    onClose: e.close,
                    openAddObjectFeedback: this._openAddObjectFeedback,
                    openWhatshere: this._openWhatshere,
                    onRouteClick: this._onRouteClick,
                    onSearchNearbyClick: this._onSearchNearbyClick
                })) : null, a.createElement(h.default, {
                    name: "whatshere_preview_layer",
                    nodeRef: this._mapAnalyticsRef
                }), a.createElement(d.default, {
                    onUpdate: this._onMapUpdate,
                    onClick: this._onMapClick
                }))
            }
            ,
            t
        }(a.Component);
        D.displayName = "WhatsHerePreviewComponent";
        var O = z(D)
    }
    ,
    12690: (e, t, n) => {
        "use strict";
        function r(e, t) {
            return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2))
        }
        n.d(t, {
            g: () => r
        })
    }
}]);
