"use client"

import styles from "../css/cardZone.module.css";
import Image from "next/image";
import CardZoneBox from "./CardZoneBox"
import { useEffect } from "react";

export default function CardZone({ cardZones }) {
    
    useEffect(() => {
        const highlightRed = document.getElementById("highlightRed");
        const highlightBlue = document.getElementById("highlightBlue");
        const highlightYellow = document.getElementById("highlightYellow");
        const cardZoneRed = document.getElementById("cardZoneRed");
        const cardZoneBlue = document.getElementById("cardZoneBlue");
        const cardZoneYellow = document.getElementById("cardZoneYellow");

        if (cardZoneRed && highlightRed) {
            cardZoneRed.addEventListener("mouseenter", () => {
                highlightRed.classList.add(styles.showHighlight);
            })
            cardZoneRed.addEventListener("mouseleave", () => {
                highlightRed.classList.remove(styles.showHighlight);
            })
        }
    
        if (cardZoneBlue && highlightBlue) {
            cardZoneBlue.addEventListener("mouseenter", () => {
                highlightBlue.classList.add(styles.showHighlight);
            })
            cardZoneBlue.addEventListener("mouseleave", () => {
                highlightBlue.classList.remove(styles.showHighlight);
            })
        }
    
        if (cardZoneYellow && highlightYellow) {
            cardZoneYellow.addEventListener("mouseenter", () => {
                highlightYellow.classList.add(styles.showHighlight);
            })
            cardZoneYellow.addEventListener("mouseleave", () => {
                highlightYellow.classList.remove(styles.showHighlight);
            })
        }
    }, []);
    
    // TODO: apply highlight id's and classNames based on card zone cardComponents
    return (
            <div className={styles.cardZone}>
                <div className={styles.title}>
                    <h2>Card Zones</h2>
                </div>
                <div className={styles.img}>
                    <Image src={"/everdeck-card.svg"} height={275} width={225}  alt="Card Image" />
                    <div 
                        id="highlightRed"
                        className={`${styles.cardZoneHighlight} ${styles.cardZoneRed} ${styles.cardZoneSeq}`}>
                    </div>
                    <div 
                        id="highlightBlue"
                        className={`${styles.cardZoneHighlight} ${styles.cardZoneBlue} ${styles.cardZoneRaS}`}>
                    </div>
                    <div 
                        id="highlightYellow"
                        className={`${styles.cardZoneHighlight} ${styles.cardZoneYellow} ${styles.cardZoneImg}`}>
                    </div>
                </div>
                <div className={styles.cardZoneBoxes}>
                {
                    cardZones.map((zone, index) => (
                        <CardZoneBox key={zone._id} boxColorIndex={index} cardZone={zone} />
                    ))
                }
                </div>
            </div>      
    )

}