"use client";
import Image from "next/image";
import React, { use, useState } from "react";

const Restaurant: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className='w-full flex flex-col gap-6'>
      <section>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1'>
            <Image
              src='/matsuri.png'
              alt='Restaurant'
              width={36}
              height={36}
              className='object-cover rounded-sm'
            />
            <h1 className='text-xl font-extrabold'>Restaurante</h1>
          </div>
          <div className='flex items-center justify-between p-2'>
            <div className='flex items-center gap-6'>
              <Image src='/share.svg' alt='Share Icon' width={16} height={18} />
              <Image src='/heart.svg' alt='Heart Icon' width={18} height={16} />
            </div>
            <span className='flex gap-2 text-xs text-[var(--teal-400)] font-bold'>
              mais infos{" "}
              <Image
                src='/chevron_right_teal.svg'
                alt='chevron'
                width={3}
                height={5}
              />
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1.5'>
            <span className='flex gap-1.5 text-sm text-[var(--primary)] font-bold'>
              <Image
                src='/motobike_purple.svg'
                alt='delivery'
                width={18}
                height={13}
              />{" "}
              <p>R$ 4,99</p>
              <Image
                src='/chevron_right_purple.svg'
                alt='chevron'
                width={3}
                height={5}
              />
            </span>
            <p className='text-[var(--neutrals-400)]'>•</p>
            <p className='text-xs font-bold text-[var(--text-light)]'>
              hoje, 30-40 min
            </p>
            <p className='text-[var(--neutrals-400)]'>•</p>
            <p className='text-xs font-bold text-[var(--text-light)]'>5.2km</p>
          </div>
          <span className='w-fit bg-[var(--teal-50)] text-xs text-[var(--teal)] font-bold px-2 py-1.5'>
            entrega grátis acima de R$ 35,00
          </span>
          <div className='flex items-center gap-1.5'>
            <span className='flex gap-1.5 text-sm text-[var(--text-light)] font-bold'>
              <Image src='/star.svg' alt='Star Icon' width={18} height={18} />{" "}
              <p>4.9 de 5</p>
              <p className='text-[5px] content-center'>&gt;</p>
            </span>
            <p className='text-[var(--neutrals-400)]'>•</p>
            <p className='text-xs font-bold text-[var(--green)]'>
              fecha às 20:00
            </p>
          </div>
          <span className='text-xs font-bold text-[var(--text-light)]'>
            pedido mínimo: R$ 15,00
          </span>
        </div>
      </section>
      <section>
        <div className='flex flex-col items-baseline gap-2'>
          <div>
            <button
              className='w-full text-left font-bold text-[var(--text-light)]'
              onClick={() => toggleDropdown("menu")}
            >
              Menu
            </button>
            {openDropdown === "menu" && (
              <div className='pl-4'>
                <p>Prato 1</p>
                <p>Prato 2</p>
                <p>Prato 3</p>
              </div>
            )}
          </div>
          <div>
            <button
              className='w-full text-left font-bold text-[var(--text-light)]'
              onClick={() => toggleDropdown("reviews")}
            >
              Avaliações
            </button>
            {openDropdown === "reviews" && (
              <div className='pl-4'>
                <p>Avaliação 1</p>
                <p>Avaliação 2</p>
                <p>Avaliação 3</p>
              </div>
            )}
          </div>
          <div>
            <button
              className='w-full text-left font-bold text-[var(--text-light)]'
              onClick={() => toggleDropdown("info")}
            >
              Informações
            </button>
            {openDropdown === "info" && (
              <div className='pl-4'>
                <p>Endereço</p>
                <p>Horário de funcionamento</p>
                <p>Contato</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
