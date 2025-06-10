// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test && rule.test instanceof RegExp && rule.test.test(".svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            icon: true,
            // ⭐ Certifique-se de que não haja defaultExport: 'none' aqui ⭐
            // Se tiver, remova-o. Se não tiver nada, ele geralmente faz o default export.
            // Se quiser ser explícito, pode adicionar: defaultExport: 'component',
          },
        },
      ],
      issuer: {
        and: [/\.(js|ts|jsx|tsx)$/],
      },
    });

    return config;
  },
};

export default nextConfig;