!function (e) {
    var t, n, d, o, i, a,
        r = '<svg><symbol id="i-settings" viewBox="0 0 48 48" fill="none"><path data-follow-stroke="currentColor" stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="m24 4-6 6h-8v8l-6 6 6 6v8h8l6 6 6-6h8v-8l6-6-6-6v-8h-8l-6-6Z"/><path data-follow-stroke="currentColor" stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/></symbol><symbol id="i-loading" viewBox="0 0 48 48" fill="none"><path data-follow-stroke="currentColor" d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="i-left" viewBox="0 0 48 48" fill="none"><path data-follow-stroke="currentColor" d="M31 36 19 24l12-12" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="i-right" viewBox="0 0 48 48" fill="none"><path data-follow-stroke="currentColor" d="m19 12 12 12-12 12" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></symbol></svg>';

    function c() {
        i || (i = !0, d())
    }

    t = function () {
        var e, t, n;
        (n = document.createElement("div")).innerHTML = r, r = null, (t = n.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (n = document.body).firstChild ? (t = n.firstChild).parentNode.insertBefore(e, t) : n.appendChild(e))
    }, document.addEventListener ? ["complete", "loaded", "interactive"].indexOf(document.readyState) > -1 ? setTimeout(t, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), t()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (d = t, o = e.document, i = !1, (a = function () {
        try {
            o.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(a, 50)
        }
        c()
    })(), o.onreadystatechange = function () {
        "complete" == o.readyState && (o.onreadystatechange = null, c())
    })
}(window);
