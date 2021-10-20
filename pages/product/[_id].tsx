import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import ProductOverview from '../../components/product/ProductOverview';
import { GET_PRODUCT } from '../../graphql/queries';
import { Product } from '../../models';

export default function ProductProfilePage() {
  const router = useRouter();

  const { data, loading } = useQuery<{ product: Product }>(GET_PRODUCT, {
    variables: { filter: { _id: router.query._id } },
    fetchPolicy: 'network-only',
  });

  return (
    <div>
      {(loading && (
        <div className="h-screen w-full justify-center my-auto">
          <h2>Loading...</h2>
        </div>
      )) || <ProductOverview product={data.product} hasShoppingCart />}
    </div>
  );
}