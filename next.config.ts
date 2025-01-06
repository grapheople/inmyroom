import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',        // 리디렉션할 경로
                destination: '/competition', // 리디렉션 대상 경로
                permanent: true,    // 영구 리디렉션 (301 상태 코드)
            },
        ];
    },
};

export default nextConfig;
