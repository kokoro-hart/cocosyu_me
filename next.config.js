/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // ダミー画像のremoteパスを許可する（本番環境では許可しない）
    // TODO: テスト公開前にremotePatternsの設定を削除またはコメントアウトする
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
      },
    ],
  },
};

module.exports = nextConfig;
