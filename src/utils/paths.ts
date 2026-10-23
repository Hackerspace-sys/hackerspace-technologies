/**
 * Returns the correct URL path accounting for the deployment base (e.g. GitHub Pages subpath vs Cloudflare root)
 */
export function getPath(path: string = '/'): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (cleanPath === '/') {
    return base ? `${base}/` : '/';
  }

  return `${base}${cleanPath}`;
}
