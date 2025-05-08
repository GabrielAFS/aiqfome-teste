import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-nunito)]'>
      <Header />
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'></main>
      <Footer />
    </div>
  );
}
