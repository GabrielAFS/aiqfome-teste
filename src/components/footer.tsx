import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-[var(--neutrals)] text-[var(--purple)] text-center font-bold py-6 px-4'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-sm'>feito com 💜 em maringá-PR</p>
        <div className='text-[16px]'>
          <p>aiqfome.com © 2007-2023 aiqfome LTDA .</p>
          <p>CNPJ: 09.186.786/0001-58</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
