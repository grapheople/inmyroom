import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/cycling/home/',
                permanent: true, // true로 설정하면 301 리다이렉트, false는 302 리다이렉트
            },
        ];
    },
};

export default nextConfig;
