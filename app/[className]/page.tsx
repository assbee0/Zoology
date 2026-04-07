import Link from "next/link";
import { getClassData } from "@/lib/data";

export default async function ClassPage({
    params,
}: {
    params: Promise<{ className: string }>
}) {
    const { className } = await params;
    const data = getClassData(className);
    return (
        <div>
            <h1>{data.class}</h1>

            {data.orders.map((order: any) => (
                <div key={order.name}>
                    <Link href={`/${data.class}/${order.name}`}>
                        {order.label}
                        <img src={order.icon} width={200} />
                    </Link>
                </div>
            ))}
        </div>
    );
}