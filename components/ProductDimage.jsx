"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import Image from "next/image";
import { useModalStore } from "@/store/modalStore";

export default function ProductDimage({ zoomImg, mainImg, classname="", videoSrc, frameSrc="" }){
    const openVideo = useModalStore((state) => state.openVideo)
     useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
    }, []);
    return(
        <>
            <div className={`pro-img ${classname}`}>
                {classname === "videoHover" && (
                    <>
                        <Image src={mainImg} alt="Product Image" width="336" height="448" onClick={openVideo} data-video={frameSrc}></Image>
                        <video
                            src={videoSrc} autoPlay muted loop playsInline
                        />
                    </>
                )}
                {classname !== "videoHover" && (
                    <Link href={zoomImg} data-fancybox="gallery">
                        <Image src={mainImg} alt="Product Image" width="336" height="448"></Image>
                    </Link>
                )}
            </div>
        </>
    )
}