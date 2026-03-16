const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold">Clean Out</p>
            <p className="text-sm text-muted-foreground">Owner Operated · Local Service · Available 24/7</p>
          </div>
          <div className="text-center md:text-right">
            <a href="tel:1-800-770-0038" className="text-lg font-bold text-primary hover:underline">
              1-800-770-0038
            </a>
            <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} Clean Out. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
