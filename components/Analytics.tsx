"use client";
import Script from "next/script";

const Analytics = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1BNP8LR4S2"></Script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-1BNP8LR4S2');
                    `
                }}
            />
        </>
    )
}

export default Analytics;