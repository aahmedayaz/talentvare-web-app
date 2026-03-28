/** DiceBear HTTP API — one distinct avatar per route (used on Under Construction sub-pages only). */
const AVATAAARS = 'https://api.dicebear.com/7.x/avataaars/svg'

export function dicebearUrlForPathname(pathname: string): string {
  const seed = pathname.replace(/^\//, '').replace(/\//g, '-') || 'page'
  return `${AVATAAARS}?seed=${encodeURIComponent(seed)}`
}
