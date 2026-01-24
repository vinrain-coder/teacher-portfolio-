export default function SiteFooter() {
  return (
    <footer className="border-t py-8 mt-20">
      <div className="mx-auto max-w-6xl px-4 text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vincent Ombogo
        </p>
        <p className="text-xs text-muted-foreground">
          Junior Secondary Science Teacher · CBC · Kisii County
        </p>
      </div>
    </footer>
  );
 
}
