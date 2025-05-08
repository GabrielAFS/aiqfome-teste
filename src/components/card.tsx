import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  deliveryFee: number;
  rating: number;
  isClosed?: boolean;
}

const Card: React.FC<Props> = ({
  title,
  image,
  deliveryFee,
  rating,
  isClosed = false,
}) => {
  const isDeliveryForFree = deliveryFee === 0;
  const formattedDeliveryFee = isDeliveryForFree
    ? "grátis"
    : deliveryFee.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  const formattedRating = rating.toLocaleString("en", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    notation: "standard",
    currencySign: "standard",
  });

  return (
    <div className='w-full h-[72px] flex gap-2 bg-[var(--neutrals-light)] rounded-lg overflow-hidden'>
      <div className='flex flex-1 items-center gap-2'>
        <Image
          src={image}
          alt='Restaurant'
          width={72}
          height={72}
          className={isClosed ? "opacity-40" : ""}
        />
        <div className='flex flex-col flex-1 p-4'>
          <h2 className='text-md font-bold'>{title}</h2>
          <div className='flex text-sm gap-2'>
            <span
              className={`flex items-center gap-1.5 text-[var(${
                isDeliveryForFree ? "--teal" : "--purple"
              })] font-bold`}
            >
              <Image
                src={isDeliveryForFree ? "/motobike.svg" : "/colorful_logo.svg"}
                alt='delivery'
                width={18}
                height={18}
              />{" "}
              <p>{formattedDeliveryFee}</p>
            </span>
            <span className='flex items-center gap-1.5'>
              <Image src='/star.svg' alt='Star' width={18} height={18} />{" "}
              <p className='text-[var(--text-light)]'>{formattedRating}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
