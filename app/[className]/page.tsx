import Link from "next/link";
import Image from "next/image";
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
                        <Image
                            src={encodeURI(order.icon)}
                            width={200}
                            height={200}
                            alt={order.label}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}