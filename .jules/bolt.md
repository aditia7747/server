## 2024-05-14 - Replace scroll-based animation with IntersectionObserver
**Learning:** Using `window.addEventListener('scroll')` with `getBoundingClientRect()` on every scroll event causes main-thread performance bottlenecks (layout thrashing) on this UI, especially for minified static sites.
**Action:** Always prefer `IntersectionObserver` for scroll-triggered animations to improve rendering performance and reduce main-thread workload.
