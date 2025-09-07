module.exports = {

"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileoverview A service for managing the public gallery of portraits.
 * This is a simplified in-memory "database" for demonstration purposes.
 * In a real application, you would replace this with a proper database
 * like Firestore, PostgreSQL, etc.
 */ /* __next_internal_action_entry_do_not_use__ [{"00a55719e0471be6444f9e5a0286db2e703ac053a2":"getGalleryPortraits","40a38ecc8923bcc973d699a819702d42b288fdd00d":"addPortraitToGallery","40f519fa7e6986ea297eaecea84adc69ab04ea0b50":"updateVoteCount"},"",""] */ __turbopack_context__.s({
    "addPortraitToGallery": (()=>addPortraitToGallery),
    "getGalleryPortraits": (()=>getGalleryPortraits),
    "updateVoteCount": (()=>updateVoteCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
// In-memory store for gallery portraits
const galleryPortraits = [
    {
        id: '1',
        petName: 'Buddy',
        hatStyle: 'Cowboy Hat',
        votes: 128,
        portraitDataUri: 'https://placehold.co/500x500.png',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1)
    },
    {
        id: '2',
        petName: 'Lucy',
        hatStyle: 'Wizard Hat',
        votes: 99,
        portraitDataUri: 'https://placehold.co/500x500.png',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2)
    },
    {
        id: '3',
        petName: 'Max',
        hatStyle: 'Top Hat',
        votes: 210,
        portraitDataUri: 'https://placehold.co/500x500.png',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3)
    },
    {
        id: '4',
        petName: 'Daisy',
        hatStyle: 'Beanie',
        votes: 74,
        portraitDataUri: 'https://placehold.co/500x500.png',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4)
    }
];
async function getGalleryPortraits() {
    // Simulate async operation
    await new Promise((resolve)=>setTimeout(resolve, 500));
    return [
        ...galleryPortraits
    ].sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime());
}
async function addPortraitToGallery(data) {
    // Simulate async operation
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const newPortrait = {
        id: (galleryPortraits.length + 1).toString(),
        ...data,
        votes: 0,
        createdAt: new Date()
    };
    galleryPortraits.unshift(newPortrait); // Add to the beginning of the array
}
async function updateVoteCount(portraitId) {
    // Simulate async network delay
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const portrait = galleryPortraits.find((p)=>p.id === portraitId);
    if (portrait) {
        portrait.votes += 1;
    } else {
        // In a real app, you'd handle this error more gracefully
        throw new Error('Portrait not found');
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getGalleryPortraits,
    addPortraitToGallery,
    updateVoteCount
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGalleryPortraits, "00a55719e0471be6444f9e5a0286db2e703ac053a2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addPortraitToGallery, "40a38ecc8923bcc973d699a819702d42b288fdd00d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateVoteCount, "40f519fa7e6986ea297eaecea84adc69ab04ea0b50", null);
}}),
"[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)");
;
;
}}),
"[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00a55719e0471be6444f9e5a0286db2e703ac053a2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGalleryPortraits"]),
    "40f519fa7e6986ea297eaecea84adc69ab04ea0b50": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateVoteCount"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00a55719e0471be6444f9e5a0286db2e703ac053a2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00a55719e0471be6444f9e5a0286db2e703ac053a2"]),
    "40f519fa7e6986ea297eaecea84adc69ab04ea0b50": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f519fa7e6986ea297eaecea84adc69ab04ea0b50"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/gallery/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/gallery/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/gallery/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/gallery/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/gallery/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/gallery/page.tsx", "default");
}}),
"[project]/src/app/gallery/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/gallery/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/gallery/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/gallery/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/gallery/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_393704be._.js.map