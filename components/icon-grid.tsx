import Image from "next/image";
import Link from "next/link";

export function IconGrid({
    items,
}: {
    items: any[];
}) {
    return (
        <div className="page-container">
            <div className="icon-grid">
                {items.map((item) => (
                    <Link href={`/${item.name}`} key={item.name}>
                        <div className="card">
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={256}
                                height={256}
                                sizes="(max-width: 256px) 20vw, (max-width: 256px) 20vw, (max-width: 256px) 20vw"
                                className="card-img"
                            />
                            <div className="card-text">
                                {item["name-jp"] || item.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}