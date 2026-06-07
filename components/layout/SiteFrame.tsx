export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" className="site-shell">
      <div className="site-shell-side site-shell-side-start" aria-hidden />
      <div className="site-shell-side site-shell-side-end" aria-hidden />
      <div className="site-shell-main">{children}</div>
    </div>
  );
}
