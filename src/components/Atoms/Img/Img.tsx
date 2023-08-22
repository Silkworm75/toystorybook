import React from 'react'
import Image from "next/image";

type Props = {
    alt: string;
    src: string;
}

function Img({ alt, src }: Props) {
  return (
    <Image
      alt={alt}
      fill
      className=" lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
      src={src}
    />
  );
}

export default Img