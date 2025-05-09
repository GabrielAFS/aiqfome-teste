"use client";
import Image from "next/image";
import React, { useState } from "react";

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
          <div className='py-3'>
            <button
              className='w-full flex items-center text-left text-[var(--text-light)] py-3'
              onClick={() => toggleDropdown("niguiris")}
            >
              <div className='flex flex-col gap-1 grow-1'>
                <p className='text-md font-bold text-[var(--neutrals-900)]'>
                  Ceviche
                </p>
                <p className='text-xs'>
                  um prato super refrescante de peixe fatiado e marinado com
                  limão
                </p>
              </div>
              <div>
                <Image
                  src='/chevron_down.svg'
                  alt='chevron'
                  width={14}
                  height={14}
                  className={`${
                    openDropdown === "niguiris" ? "rotate-180" : ""
                  } transition-transform object-cover`}
                />
              </div>
            </button>
            {openDropdown === "niguiris" && (
              <div className='flex flex-col gap-6 pl-2 pt-2'>
                <div
                  className='w-full flex items-center text-left text-[var(--text-light)]'
                  onClick={() => {}}
                >
                  <div className='flex flex-col gap-1 grow-1'>
                    <p className='text-sm font-bold text-[var(--neutrals-900)]'>
                      Califórnia
                    </p>
                    <p className='text-xs'>Kani, pepino e maçã ou manga</p>
                  </div>
                  <p className='self-baseline text-sm text-[var(--primary)] font-bold'>
                    R$ 13,99
                  </p>
                </div>
                <div
                  className='w-full flex items-center text-left text-[var(--text-light)]'
                  onClick={() => {}}
                >
                  <div className='flex flex-col gap-1 grow-1'>
                    <p className='text-sm font-bold text-[var(--neutrals-900)]'>
                      Califórnia
                    </p>
                    <p className='text-xs'>Kani, pepino e maçã ou manga</p>
                  </div>
                  <p className='self-baseline text-sm text-[var(--primary)] font-bold'>
                    R$ 25,00
                  </p>
                </div>
                <div
                  className='w-full flex items-center text-left text-[var(--text-light)]'
                  onClick={() => {}}
                >
                  <div className='flex flex-col gap-1 grow-1'>
                    <p className='text-sm font-bold text-[var(--neutrals-900)]'>
                      Califórnia
                    </p>
                    <p className='text-xs'>Kani, pepino e maçã ou manga</p>
                  </div>
                  <p className='self-baseline text-sm text-[var(--primary)] font-bold'>
                    R$ 15,00
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className='w-full border-b-4 border-[var(--neutrals)]' />
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
