import HeaderAdmin from "@/components/cms/HeaderAdmin";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Todo 
    Add Sidebar
    Add Navbar */}
      <header className="sticky top-0 z-50 border-b border-accent ">
        <HeaderAdmin />
      </header>
      <div className="flex justify-center relative bg-accent-foreground">
        <div className="w-full min-h-screen">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
