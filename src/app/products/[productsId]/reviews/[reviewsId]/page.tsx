'use client';

import { notFound } from 'next/navigation';

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default function ReviewDetails({
  params,
}: {
  params: { productsId: string; reviewsId: string };
}) {
  // const random = getRandomInt(2);

  // if (random === 1) throw new Error('Error loading review');

  if (parseInt(params.reviewsId) > 1000) notFound();
  return (
    <h1>
      Details about review {params.reviewsId} for product {params.productsId}
    </h1>
  );
}
