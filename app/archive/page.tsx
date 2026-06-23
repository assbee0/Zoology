"use client";

import Link from "next/link";
import archiveStats from "@/data/archive.json";

export default function ArchivePage() {
    return (
        <div className="archive-background">

            <div className="archive-nav">
                <Link href="/">← ZOOLOGY</Link>
            </div>

            <header className="archive-header">
                <h1
                    className="archive-heading"
                    data-word="ARCHIVE"
                >
                    <span className="archive-title">
                        ARCHIVE
                    </span>
                </h1>

                <p className="archive-subtitle">
                    ZOOLOGICAL COLLECTION DATABASE
                </p>
            </header>

            <section className="archive-overview">

                <div className="archive-stat-card">
                    <div className="archive-stat-number">
                        {archiveStats.totalSpecies.toLocaleString()}
                    </div>

                    <div className="archive-stat-label">
                        TOTAL SPECIES
                    </div>
                </div>

                <div className="archive-stat-card">
                    <div className="archive-stat-number">
                        {archiveStats.wildSpecies.toLocaleString()}
                    </div>

                    <div className="archive-stat-label">
                        WILD SPECIES
                    </div>
                </div>

            </section>

            <section className="archive-class-list">

                {archiveStats.classes.map(cls => (
                    <div
                        key={cls.name}
                        className="archive-class-card"
                    >
                        <h2
                            className="archive-class-title"
                            data-word={cls.name}
                        >
                            {cls.name}
                        </h2>

                        <div className="archive-class-stats">

                            <div>
                                <div className="archive-class-number">
                                    {cls.totalSpecies.toLocaleString()}
                                </div>

                                <div className="archive-class-label">
                                    TOTAL SPECIES
                                </div>
                            </div>

                            <div>
                                <div className="archive-class-number">
                                    {cls.wildSpecies.toLocaleString()}
                                </div>

                                <div className="archive-class-label">
                                    WILD SPECIES
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </section>

        </div>
    );
}