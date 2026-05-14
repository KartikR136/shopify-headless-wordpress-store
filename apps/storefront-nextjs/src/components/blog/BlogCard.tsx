type Props = {
  title: string;
};

export default function BlogCard({ title }: Props) {
  return (
    <div className="border p-6 rounded-xl">
      <h3>{title}</h3>
    </div>
  );
}