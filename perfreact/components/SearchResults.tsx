import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h1>Total: {totalPrice}</h1>
      {results.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
}
