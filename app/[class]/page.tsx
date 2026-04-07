import Link from "next/link";
import { getClassData } from "@/lib/data";

export default function ClassPage({ params }: any) {
  const data = getClassData(params.class);

  return (
    <div>
      <h1>{data.class}</h1>

      {data.orders.map((order: any) => (
        <div key={order.name}>
          <Link href={`/${data.class}/${order.name}`}>
            {order.label}
          </Link>
        </div>
      ))}
    </div>
  );
}