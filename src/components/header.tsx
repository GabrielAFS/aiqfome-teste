"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <div>
      <header className='w-full bg-[var(--primary)] text-[var(--background)] p-4'>
        <div className='flex items-center gap-6'>
          <Image src='/logo.svg' alt='Logo' width={32} height={32} />
          <span className='flex items-center gap-3.5'>
            <Image
              src='/location.svg'
              alt='Location Icon'
              width={13}
              height={16}
            />
            <div className='flex flex-col font-bold'>
              <h1 className='text-sm text-[var(--secondary)]'>entregando em</h1>
              <span className='flex gap-2 text-[16px]'>
                Rua Mandaguari, 198{" "}
                <Image
                  src='/chevron_right.svg'
                  alt='chevron'
                  width={6}
                  height={10}
                />
              </span>
            </div>
          </span>
          <div className='ml-auto'>
            <Image src='/user.svg' alt='User Icon' width={24} height={24} />
          </div>
        </div>

        {isHomePage && (
          <div className='relative mt-4'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <Image
                src='/search.svg'
                alt='Search Icon'
                width={16}
                height={16}
              />
            </div>
            <input
              type='text'
              placeholder='busque pela loja ou culinária'
              className='block w-full h-10 bg-[var(--background)] text-[var(--text-light)] border border-solid border-[var(--secondary)] rounded-lg px-4 ps-11'
            />
          </div>
        )}
      </header>
      {isHomePage && (
        <Image
          src='/banner.png'
          alt='Banner'
          width={1920}
          height={1080}
          className='w-full h-32 object-cover'
          priority
        />
      )}
    </div>
  );
};

export default Header;
