"use client";
import React, { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type {
    FooterProps,
    StoreFooter,
    Social,
    FooterSection,
    FooterMenuItem,
} from "../components/Footer";

const FooterView: React.FC<FooterViewProps> = memo(
    ({ name = "Athletic Store", image = "/logo.png", year = new Date().getFullYear(), store, socials }) => {
        const containerVariants = useMemo(
            () => ({
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2,
                        delayChildren: 0.1,
                    },
                },
            }),
            []
        );

        const sectionVariants = useMemo(
            () => ({
                hidden: { y: 20, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "spring" as const,
                        stiffness: 100,
                        damping: 15,
                    },
                },
            }),
            []
        );

        return (
            <footer
                className="border flex justify-center border-solid border-(color:--footer-border) border-t-width-(size:--footer-border-width) bg-(color:--primary) text-(color:--foreground) mt-8 sm:mt-10"
                aria-labelledby="footer-heading"
                role="contentinfo"
            >
                <div className="container px-4 sm:px-6 md:px-8 max-w-7xl">
                    <motion.div
                        className="py-8 sm:py-(spacing:--footer-padding-y)"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="grid gap-8 md:grid-cols-1 lg:grid-cols-8"
                            variants={sectionVariants}
                        >
                            <Card className="border-0 bg-transparent md:col-span-1 lg:col-span-2 rounded-(radius:--radius-lg) shadow-(--footer-logo-card-shadow)">
                                <CardHeader className="px-0 pb-4 sm:pb-6">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                        aria-label="Go to homepage"
                                    >
                                        <Image
                                            height={100}
                                            width={300}
                                            src={image}
                                            alt={`${name} company logo`}
                                            className="h-12 sm:h-(size:--footer-logo-height) w-auto rounded-(radius:--radius-md)"
                                            priority
                                        />
                                        <span className="text-lg bg-transparent hover:bg-transparent sm:text-xl font-(weight:--font-bold) text-(color:--foreground)">
                                            {name}
                                        </span>
                                    </Link>
                                    <CardDescription className="mt-2 text-sm sm:text-base text-(color:--foreground) font-(family-name:--font-primary) wrap-anywhere">
                                        Step Up Your Game with our athletic gear!
                                    </CardDescription>
                                    <div className="mt-6">
                                        <SocialLinks socials={socials || []} />
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card className="border-0 bg-transparent md:col-span-1 lg:col-span-6 shadow-none">
                                <CardContent className="px-0 pt-3">
                                    <FooterSections store={store || []} />
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <Separator className="mb-3 sm:mb-4 bg-(color:--footer-separator-color)" />

                    <motion.div
                        className="flex flex-col gap-3 py-4 sm:py-6 px-0 md:flex-row md:items-center md:justify-between md:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4"
                            variants={sectionVariants}
                        >
                            <p className="text-xs sm:text-sm text-(color:--foreground) font-(family-name:--font-primary) text-center md:text-left">
                                Copyright {year} {name}. All rights reserved.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center"
                            variants={sectionVariants}
                        >
                            <p className="text-xs sm:text-sm text-(color:--foreground) font-(family-name:--font-primary) flex items-center gap-1.5 justify-center ">
                                Powered by{" "}
                                <Link
                                    href="https://www.mcartify.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center font-(weight:--font-medium) text-(color:--primary) hover:text-(color:--primary-hover) transition-colors gap-1"
                                >
                                    mcartify.com
                                    <ExternalLink
                                        className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </footer>
        );
    }
);
FooterView.displayName = "FooterView";

export default FooterView;