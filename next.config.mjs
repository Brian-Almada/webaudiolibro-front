/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'audlib.blob.core.windows.net',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
