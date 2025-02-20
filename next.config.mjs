/** @type {import('next').NextConfig} */
const nextConfig = {
    optimization: {
        minimize: false, // Disables minification
      },
    webpack: (config) => {
        config.optimization.minimize = false;
        return config;
      },
};

export default nextConfig;
