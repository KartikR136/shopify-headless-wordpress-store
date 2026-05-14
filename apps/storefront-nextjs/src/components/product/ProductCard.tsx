type Props = {
  title: string;
  price: string;
};

export default function ProductCard({ title, price }: Props) {
  return (
    <div className="border rounded-xl p-4">
      <div className="h-56 bg-gray-100 rounded-lg" />
      <h3 className="mt-4">{title}</h3>
      <p>{price}</p>
    </div>
  );
}