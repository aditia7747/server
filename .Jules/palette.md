## 2024-05-18 - Improve "BELI" button accessibility
**Learning:** The "BELI" (buy) buttons for items were dynamically generated in a JS template literal but lacked unique context for screen readers. Since all of them had the exact same text ("BELI"), users with screen readers wouldn't know which item they were buying.
**Action:** Always add unique `aria-label` attributes to repeated action buttons that rely on visual proximity for context.
