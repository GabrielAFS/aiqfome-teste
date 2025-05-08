import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-nunito)]'>
      <Header />
      <Image
        src='/banner.png'
        alt='Banner'
        width={1920}
        height={1080}
        className='w-full h-32 object-cover'
        priority
      />
      <main className='flex flex-col row-start-2 items-center px-4 py-6 overflow-y-scroll'>
        <section className='w-full mb-6'>
          <h1 className='text-xl font-bold text-[var(--primary)] mb-4'>
            abertos
          </h1>
          <ul>
            <li className='mb-4'>
              <Card
                title='Restaurante 1'
                image='/matsuri.png'
                deliveryFee={5.0}
                rating={4.5}
              />
            </li>
            <li className='mb-4'>
              <Card
                title='Restaurante 2'
                image='/bk.png'
                deliveryFee={0}
                rating={4.5}
              />
            </li>
          </ul>
        </section>
        <section className='w-full mb-6'>
          <h1 className='text-xl font-bold text-[var(--primary)] mb-4'>
            fechados
          </h1>
          <ul>
            <li className='mb-4'>
              <Card
                title='Restaurante 1'
                image='/matsuri.png'
                deliveryFee={5.0}
                rating={4.5}
                isClosed
              />
            </li>
            <li className='mb-4'>
              <Card
                title='Restaurante 2'
                image='/bk.png'
                deliveryFee={0}
                rating={4.5}
                isClosed
              />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
