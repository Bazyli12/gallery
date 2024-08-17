"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
    "https://cdn.discordapp.com/attachments/813373044458389544/1267242258785107988/image.png?ex=66c1c812&is=66c07692&hm=b24610bf59284b15fcdddf5e23539dbe6419fa943798e594317b26049d0faee7&",
    "https://cdn.discordapp.com/attachments/813373044458389544/1267201493614854225/image.png?ex=66c1a21b&is=66c0509b&hm=d6475b2b8316870f6a39a5ac7d7d664ca9cc4b7c9cca1711076e5a9e9ade7b7e&",
    "https://cdn.discordapp.com/attachments/813373044458389544/1267201442402402354/image.png?ex=66c1a20f&is=66c0508f&hm=c47731824b35a7e7f3eef8629f793411887093f5e5185f9b0ec00d0254b9bb3d&",
    "https://cdn.discordapp.com/attachments/813373044458389544/1262011977471889428/IMG20240713181700.jpg?ex=66c1debe&is=66c08d3e&hm=6dcb4efeef62eedd0c0929c874eccf0e081d6bff0f95593c1f0445a26c25775d&",
];

export default function Home() {
    const [index, setIndex] = useState<number | null>(null);

    return (
        <div className="flex justify-center items-center h-screen">
            <LayoutGroup>
                <div className="flex justify-center items-center relative">
                    <ul className="flex flex-col gap-4 relative h-[376px] w-[516px]">
                        {index === null && (
                            <div className="flex gap-4">
                                <motion.li
                                    className="cursor-pointer h-[180px] w-[180px] overflow-hidden flex justify-center items-center"
                                    onClick={() => setIndex(0)}
                                    style={{
                                        backgroundColor: images[0],
                                        borderRadius: "24px",
                                    }}
                                    layoutId={images[0]}
                                >
                                    <Image
                                        src={images[0]}
                                        className="w-full h-full"
                                        width={500}
                                        height={500}
                                        alt=""
                                    />
                                </motion.li>
                                <motion.li
                                    className="cursor-pointer h-[180px] w-[320px] overflow-hidden"
                                    onClick={() => setIndex(1)}
                                    style={{
                                        backgroundColor: images[1],
                                        borderRadius: "24px",
                                    }}
                                    layoutId={images[1]}
                                >
                                    <Image
                                        src={images[1]}
                                        className="w-full h-full"
                                        width={500}
                                        height={500}
                                        alt=""
                                    />
                                </motion.li>
                            </div>
                        )}
                        {index === null && (
                            <div className="flex gap-4">
                                <motion.li
                                    className="cursor-pointer h-[180px] w-[320px] overflow-hidden"
                                    onClick={() => setIndex(2)}
                                    style={{
                                        backgroundColor: images[2],
                                        borderRadius: "24px",
                                    }}
                                    layoutId={images[2]}
                                >
                                    <Image
                                        src={images[2]}
                                        className="w-full h-full"
                                        width={500}
                                        height={500}
                                        alt=""
                                    />
                                </motion.li>
                                <motion.li
                                    className="cursor-pointer h-[180px] w-[180px] overflow-hidden"
                                    onClick={() => setIndex(3)}
                                    style={{
                                        backgroundColor: images[3],
                                        borderRadius: "24px",
                                    }}
                                    layoutId={images[3]}
                                >
                                    <Image
                                        src={images[3]}
                                        className="w-full h-full"
                                        width={500}
                                        height={500}
                                        alt=""
                                    />
                                </motion.li>
                            </div>
                        )}
                    </ul>
                    <AnimatePresence>
                        {index !== null && (
                            <>
                                {images.map((color, i) => {
                                    if (i === index) {
                                        return (
                                            <div
                                                className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center z-10"
                                                key={`image-${color}`}
                                            >
                                                <motion.div
                                                    layoutId={color}
                                                    className="w-full h-full cursor-pointer overflow-hidden flex justify-center items-center"
                                                    onClick={() =>
                                                        setIndex(null)
                                                    }
                                                    style={{
                                                        backgroundColor: color,
                                                        borderRadius: "48px",
                                                    }}
                                                >
                                                    <Image
                                                        src={images[index]}
                                                        className="w-full h-full"
                                                        width={500}
                                                        height={500}
                                                        alt=""
                                                    />
                                                </motion.div>
                                            </div>
                                        );
                                    }
                                })}
                            </>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {index !== null && (
                            <div className="flex flex-col gap-4 absolute -right-24">
                                {images.map((image, i) => {
                                    if (i !== index) {
                                        return (
                                            <div
                                                className="w-16 h-16 flex justify-center items-center"
                                                key={`side-${image}`}
                                            >
                                                <motion.div
                                                    layout
                                                    layoutId={image}
                                                    className="w-full h-full cursor-pointer overflow-hidden flex justify-center items-center"
                                                    onClick={() => setIndex(i)}
                                                    style={{
                                                        borderRadius: "18px",
                                                    }}
                                                >
                                                    <Image
                                                        src={image}
                                                        className="w-full h-full"
                                                        width={180}
                                                        height={180}
                                                        alt=""
                                                    />
                                                </motion.div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </LayoutGroup>
        </div>
    );
}
