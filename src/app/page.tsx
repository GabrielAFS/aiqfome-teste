import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full'>
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
              rating={4.9}
            />
          </li>
          <li className='mb-4'>
            <Card
              title='Restaurante 2'
              image='/bk.png'
              deliveryFee={0}
              rating={4.8}
            />
          </li>
          <li className='mb-4'>
            <Card
              title='Restaurante 3'
              image='/subway.png'
              deliveryFee={0}
              rating={4.7}
            />
          </li>
          <li className='mb-4'>
            <Card
              title='Restaurante 4'
              image='/mcdonalds.png'
              deliveryFee={0}
              rating={4.7}
            />
          </li>

          <li className='mb-4'>
            <Card
              title='Restaurante 5'
              image='/bk.png'
              deliveryFee={4.5}
              rating={4.5}
            />
          </li>

          <li className='mb-4'>
            <Card
              title='Restaurante 6'
              image='/mcdonalds.png'
              deliveryFee={5.0}
              rating={4.5}
            />
          </li>

          <li className='mb-4'>
            <Card
              title='Restaurante 7'
              image='/matsuri.png'
              deliveryFee={6.0}
              rating={4.2}
            />
          </li>
        </ul>
      </section>
      <section className='w-full'>
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
          <li>
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
    </div>
  );
}
