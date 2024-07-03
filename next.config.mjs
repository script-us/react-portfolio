/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '127.0.0.1', 'lh3.googleusercontent.com'],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
