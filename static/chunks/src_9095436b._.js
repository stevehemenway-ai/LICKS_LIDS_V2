(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/services/data:e32e9b [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00a55719e0471be6444f9e5a0286db2e703ac053a2":"getGalleryPortraits"},"src/services/gallery.service.ts",""] */ __turbopack_context__.s({
    "getGalleryPortraits": (()=>getGalleryPortraits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getGalleryPortraits = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00a55719e0471be6444f9e5a0286db2e703ac053a2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getGalleryPortraits"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgc2VydmljZSBmb3IgbWFuYWdpbmcgdGhlIHB1YmxpYyBnYWxsZXJ5IG9mIHBvcnRyYWl0cy5cbiAqIFRoaXMgaXMgYSBzaW1wbGlmaWVkIGluLW1lbW9yeSBcImRhdGFiYXNlXCIgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMuXG4gKiBJbiBhIHJlYWwgYXBwbGljYXRpb24sIHlvdSB3b3VsZCByZXBsYWNlIHRoaXMgd2l0aCBhIHByb3BlciBkYXRhYmFzZVxuICogbGlrZSBGaXJlc3RvcmUsIFBvc3RncmVTUUwsIGV0Yy5cbiAqL1xuJ3VzZSBzZXJ2ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHBldE5hbWU6IHN0cmluZztcbiAgICBoYXRTdHlsZTogc3RyaW5nO1xuICAgIHBvcnRyYWl0RGF0YVVyaTogc3RyaW5nO1xuICAgIHZvdGVzOiBudW1iZXI7XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG4vLyBJbi1tZW1vcnkgc3RvcmUgZm9yIGdhbGxlcnkgcG9ydHJhaXRzXG5jb25zdCBnYWxsZXJ5UG9ydHJhaXRzOiBQb3J0cmFpdFtdID0gW1xuICAgIHsgaWQ6ICcxJywgcGV0TmFtZTogJ0J1ZGR5JywgaGF0U3R5bGU6ICdDb3dib3kgSGF0Jywgdm90ZXM6IDEyOCwgcG9ydHJhaXREYXRhVXJpOiAnaHR0cHM6Ly9wbGFjZWhvbGQuY28vNTAweDUwMC5wbmcnLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKERhdGUubm93KCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogMSkgfSxcbiAgICB7IGlkOiAnMicsIHBldE5hbWU6ICdMdWN5JywgaGF0U3R5bGU6ICdXaXphcmQgSGF0Jywgdm90ZXM6IDk5LCBwb3J0cmFpdERhdGFVcmk6ICdodHRwczovL3BsYWNlaG9sZC5jby81MDB4NTAwLnBuZycsIGNyZWF0ZWRBdDogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAyKSB9LFxuICAgIHsgaWQ6ICczJywgcGV0TmFtZTogJ01heCcsIGhhdFN0eWxlOiAnVG9wIEhhdCcsIHZvdGVzOiAyMTAsIHBvcnRyYWl0RGF0YVVyaTogJ2h0dHBzOi8vcGxhY2Vob2xkLmNvLzUwMHg1MDAucG5nJywgY3JlYXRlZEF0OiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMpIH0sXG4gICAgeyBpZDogJzQnLCBwZXROYW1lOiAnRGFpc3knLCBoYXRTdHlsZTogJ0JlYW5pZScsIHZvdGVzOiA3NCwgcG9ydHJhaXREYXRhVXJpOiAnaHR0cHM6Ly9wbGFjZWhvbGQuY28vNTAweDUwMC5wbmcnLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKERhdGUubm93KCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogNCkgfSxcbl07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIHBvcnRyYWl0cyBmcm9tIHRoZSBnYWxsZXJ5LCBzb3J0ZWQgYnkgY3JlYXRpb24gZGF0ZS5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIHBvcnRyYWl0cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbGxlcnlQb3J0cmFpdHMoKTogUHJvbWlzZTxQb3J0cmFpdFtdPiB7XG4gICAgLy8gU2ltdWxhdGUgYXN5bmMgb3BlcmF0aW9uXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgIHJldHVybiBbLi4uZ2FsbGVyeVBvcnRyYWl0c10uc29ydCgoYSwgYikgPT4gYi5jcmVhdGVkQXQuZ2V0VGltZSgpIC0gYS5jcmVhdGVkQXQuZ2V0VGltZSgpKTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgbmV3IHBvcnRyYWl0IHRvIHRoZSBnYWxsZXJ5LlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSBmb3IgdGhlIG5ldyBwb3J0cmFpdC5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBvcnRyYWl0IGhhcyBiZWVuIGFkZGVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUG9ydHJhaXRUb0dhbGxlcnkoZGF0YTogeyBwZXROYW1lOiBzdHJpbmc7IGhhdFN0eWxlOiBzdHJpbmc7IHBvcnRyYWl0RGF0YVVyaTogc3RyaW5nOyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2ltdWxhdGUgYXN5bmMgb3BlcmF0aW9uXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgIFxuICAgIGNvbnN0IG5ld1BvcnRyYWl0OiBQb3J0cmFpdCA9IHtcbiAgICAgICAgaWQ6IChnYWxsZXJ5UG9ydHJhaXRzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCksXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHZvdGVzOiAwLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfTtcblxuICAgIGdhbGxlcnlQb3J0cmFpdHMudW5zaGlmdChuZXdQb3J0cmFpdCk7IC8vIEFkZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxufVxuXG4vKipcbiAqIEluY3JlbWVudHMgdGhlIHZvdGUgY291bnQgZm9yIGEgc3BlY2lmaWMgcG9ydHJhaXQuXG4gKiBAcGFyYW0gcG9ydHJhaXRJZCBUaGUgSUQgb2YgdGhlIHBvcnRyYWl0IHRvIHZvdGUgZm9yLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdm90ZSBoYXMgYmVlbiBjb3VudGVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVm90ZUNvdW50KHBvcnRyYWl0SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFNpbXVsYXRlIGFzeW5jIG5ldHdvcmsgZGVsYXlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7XG5cbiAgICBjb25zdCBwb3J0cmFpdCA9IGdhbGxlcnlQb3J0cmFpdHMuZmluZChwID0+IHAuaWQgPT09IHBvcnRyYWl0SWQpO1xuICAgIGlmIChwb3J0cmFpdCkge1xuICAgICAgICBwb3J0cmFpdC52b3RlcyArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEluIGEgcmVhbCBhcHAsIHlvdSdkIGhhbmRsZSB0aGlzIGVycm9yIG1vcmUgZ3JhY2VmdWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BvcnRyYWl0IG5vdCBmb3VuZCcpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFNBK0JzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/data:b37717 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40f519fa7e6986ea297eaecea84adc69ab04ea0b50":"updateVoteCount"},"src/services/gallery.service.ts",""] */ __turbopack_context__.s({
    "updateVoteCount": (()=>updateVoteCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateVoteCount = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f519fa7e6986ea297eaecea84adc69ab04ea0b50", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateVoteCount"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgc2VydmljZSBmb3IgbWFuYWdpbmcgdGhlIHB1YmxpYyBnYWxsZXJ5IG9mIHBvcnRyYWl0cy5cbiAqIFRoaXMgaXMgYSBzaW1wbGlmaWVkIGluLW1lbW9yeSBcImRhdGFiYXNlXCIgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMuXG4gKiBJbiBhIHJlYWwgYXBwbGljYXRpb24sIHlvdSB3b3VsZCByZXBsYWNlIHRoaXMgd2l0aCBhIHByb3BlciBkYXRhYmFzZVxuICogbGlrZSBGaXJlc3RvcmUsIFBvc3RncmVTUUwsIGV0Yy5cbiAqL1xuJ3VzZSBzZXJ2ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRyYWl0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHBldE5hbWU6IHN0cmluZztcbiAgICBoYXRTdHlsZTogc3RyaW5nO1xuICAgIHBvcnRyYWl0RGF0YVVyaTogc3RyaW5nO1xuICAgIHZvdGVzOiBudW1iZXI7XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG4vLyBJbi1tZW1vcnkgc3RvcmUgZm9yIGdhbGxlcnkgcG9ydHJhaXRzXG5jb25zdCBnYWxsZXJ5UG9ydHJhaXRzOiBQb3J0cmFpdFtdID0gW1xuICAgIHsgaWQ6ICcxJywgcGV0TmFtZTogJ0J1ZGR5JywgaGF0U3R5bGU6ICdDb3dib3kgSGF0Jywgdm90ZXM6IDEyOCwgcG9ydHJhaXREYXRhVXJpOiAnaHR0cHM6Ly9wbGFjZWhvbGQuY28vNTAweDUwMC5wbmcnLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKERhdGUubm93KCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogMSkgfSxcbiAgICB7IGlkOiAnMicsIHBldE5hbWU6ICdMdWN5JywgaGF0U3R5bGU6ICdXaXphcmQgSGF0Jywgdm90ZXM6IDk5LCBwb3J0cmFpdERhdGFVcmk6ICdodHRwczovL3BsYWNlaG9sZC5jby81MDB4NTAwLnBuZycsIGNyZWF0ZWRBdDogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAyKSB9LFxuICAgIHsgaWQ6ICczJywgcGV0TmFtZTogJ01heCcsIGhhdFN0eWxlOiAnVG9wIEhhdCcsIHZvdGVzOiAyMTAsIHBvcnRyYWl0RGF0YVVyaTogJ2h0dHBzOi8vcGxhY2Vob2xkLmNvLzUwMHg1MDAucG5nJywgY3JlYXRlZEF0OiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMpIH0sXG4gICAgeyBpZDogJzQnLCBwZXROYW1lOiAnRGFpc3knLCBoYXRTdHlsZTogJ0JlYW5pZScsIHZvdGVzOiA3NCwgcG9ydHJhaXREYXRhVXJpOiAnaHR0cHM6Ly9wbGFjZWhvbGQuY28vNTAweDUwMC5wbmcnLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKERhdGUubm93KCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogNCkgfSxcbl07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIHBvcnRyYWl0cyBmcm9tIHRoZSBnYWxsZXJ5LCBzb3J0ZWQgYnkgY3JlYXRpb24gZGF0ZS5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIHBvcnRyYWl0cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbGxlcnlQb3J0cmFpdHMoKTogUHJvbWlzZTxQb3J0cmFpdFtdPiB7XG4gICAgLy8gU2ltdWxhdGUgYXN5bmMgb3BlcmF0aW9uXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgIHJldHVybiBbLi4uZ2FsbGVyeVBvcnRyYWl0c10uc29ydCgoYSwgYikgPT4gYi5jcmVhdGVkQXQuZ2V0VGltZSgpIC0gYS5jcmVhdGVkQXQuZ2V0VGltZSgpKTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgbmV3IHBvcnRyYWl0IHRvIHRoZSBnYWxsZXJ5LlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSBmb3IgdGhlIG5ldyBwb3J0cmFpdC5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBvcnRyYWl0IGhhcyBiZWVuIGFkZGVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUG9ydHJhaXRUb0dhbGxlcnkoZGF0YTogeyBwZXROYW1lOiBzdHJpbmc7IGhhdFN0eWxlOiBzdHJpbmc7IHBvcnRyYWl0RGF0YVVyaTogc3RyaW5nOyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2ltdWxhdGUgYXN5bmMgb3BlcmF0aW9uXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgIFxuICAgIGNvbnN0IG5ld1BvcnRyYWl0OiBQb3J0cmFpdCA9IHtcbiAgICAgICAgaWQ6IChnYWxsZXJ5UG9ydHJhaXRzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCksXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHZvdGVzOiAwLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfTtcblxuICAgIGdhbGxlcnlQb3J0cmFpdHMudW5zaGlmdChuZXdQb3J0cmFpdCk7IC8vIEFkZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxufVxuXG4vKipcbiAqIEluY3JlbWVudHMgdGhlIHZvdGUgY291bnQgZm9yIGEgc3BlY2lmaWMgcG9ydHJhaXQuXG4gKiBAcGFyYW0gcG9ydHJhaXRJZCBUaGUgSUQgb2YgdGhlIHBvcnRyYWl0IHRvIHZvdGUgZm9yLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdm90ZSBoYXMgYmVlbiBjb3VudGVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVm90ZUNvdW50KHBvcnRyYWl0SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFNpbXVsYXRlIGFzeW5jIG5ldHdvcmsgZGVsYXlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7XG5cbiAgICBjb25zdCBwb3J0cmFpdCA9IGdhbGxlcnlQb3J0cmFpdHMuZmluZChwID0+IHAuaWQgPT09IHBvcnRyYWl0SWQpO1xuICAgIGlmIChwb3J0cmFpdCkge1xuICAgICAgICBwb3J0cmFpdC52b3RlcyArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEluIGEgcmVhbCBhcHAsIHlvdSdkIGhhbmRsZSB0aGlzIGVycm9yIG1vcmUgZ3JhY2VmdWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BvcnRyYWl0IG5vdCBmb3VuZCcpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBNkRzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, as: Comp = 'div', ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, as: Comp = 'div', ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
_c1 = Alert;
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c3 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c5 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Alert$React.forwardRef");
__turbopack_context__.k.register(_c1, "Alert");
__turbopack_context__.k.register(_c2, "AlertTitle$React.forwardRef");
__turbopack_context__.k.register(_c3, "AlertTitle");
__turbopack_context__.k.register(_c4, "AlertDescription$React.forwardRef");
__turbopack_context__.k.register(_c5, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/gallery/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GalleryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$e32e9b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/data:e32e9b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$b37717__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/data:b37717 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function GalleryPage() {
    _s();
    const [portraits, setPortraits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [votes, setVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [voted, setVoted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryPage.useEffect": ()=>{
            const fetchPortraits = {
                "GalleryPage.useEffect.fetchPortraits": async ()=>{
                    try {
                        const fetchedPortraits = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$e32e9b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getGalleryPortraits"])();
                        setPortraits(fetchedPortraits);
                        const initialVotes = fetchedPortraits.reduce({
                            "GalleryPage.useEffect.fetchPortraits.initialVotes": (acc, p)=>({
                                    ...acc,
                                    [p.id]: p.votes
                                })
                        }["GalleryPage.useEffect.fetchPortraits.initialVotes"], {});
                        setVotes(initialVotes);
                    } catch (err) {
                        setError('Failed to fetch portraits. Please try again later.');
                    } finally{
                        setLoading(false);
                    }
                }
            }["GalleryPage.useEffect.fetchPortraits"];
            fetchPortraits();
        }
    }["GalleryPage.useEffect"], []);
    const handleVote = async (id)=>{
        if (voted[id]) return;
        // Optimistically update UI
        setVotes((prev)=>({
                ...prev,
                [id]: (prev[id] || 0) + 1
            }));
        setVoted((prev)=>({
                ...prev,
                [id]: true
            }));
        try {
            // Persist vote to the "backend"
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$b37717__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateVoteCount"])(id);
        } catch (err) {
            // Revert optimistic update on error
            setError('Failed to save vote. Please try again.');
            setVotes((prev)=>({
                    ...prev,
                    [id]: prev[id] - 1
                }));
            setVoted((prev)=>({
                    ...prev,
                    [id]: false
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold font-headline tracking-tight lg:text-5xl",
                            children: "The Licks & Lids Hall of Fame"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Welcome to our public gallery! Admire the dapper pets and vote for your favorite portraits."
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: Array.from({
                        length: 8
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "aspect-square w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-6 w-3/4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-4 w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "p-4 pt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 28
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    className: "max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Error"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this),
                !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: portraits.map((portrait)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "overflow-hidden group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: portrait.portraitDataUri,
                                            alt: `${portrait.petName} wearing a ${portrait.hatStyle}`,
                                            fill: true,
                                            className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            as: "h3",
                                            children: portrait.petName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: [
                                                "Sporting a stylish ",
                                                portrait.hatStyle
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "p-4 pt-0 flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>handleVote(portrait.id),
                                            variant: voted[portrait.id] ? "secondary" : "default",
                                            className: "w-full",
                                            disabled: voted[portrait.id],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", voted[portrait.id] ? "fill-red-500 text-red-500" : "")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/gallery/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 25
                                                }, this),
                                                voted[portrait.id] ? 'Voted!' : 'Vote',
                                                " (",
                                                votes[portrait.id] || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://www.amazon.com/s?k=${encodeURIComponent(portrait.hatStyle + ' for pet')}&tag=logonitro-20`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/gallery/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 29
                                                    }, this),
                                                    " Shop this look"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, portrait.id, true, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(GalleryPage, "G+NOtJMiGRE2pfUN+wa5EVXsFho=");
_c = GalleryPage;
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9095436b._.js.map