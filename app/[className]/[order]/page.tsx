import Link from "next/link";
import { getClassData } from "@/lib/data";

export default async function OrderPage({
    params,
}: {
    params: Promise<{ className: string; order: string }>
}) {
    const { className: className, order } = await params;
    const data = getClassData(className);
    const orderData = data.orders.find(
        (o: any) => o.name === order
    );

    if (!orderData) {
        return <div>Order not found</div>
    }

    return (
        <div>
            <h1>{orderData.label}</h1>

            {orderData.species.map((sp: any) => (
                <div key={sp.id}>
                    <Link href={`/species/${sp.id}`}>
                        <h3>{sp.name}</h3>
                        <img src={sp.images[0]} width={200} />
                    </Link>
                </div>
            ))}
        </div>
    );
}