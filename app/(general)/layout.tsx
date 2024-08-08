import { Navbar } from "@/components/index";





export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
      <main className="flex flex-col items-center p-24">{children}</main>
    </>
  );
}

