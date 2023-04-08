# FLAT日報ブログ

## 環境

Node.js v16.19.0

バージョン管理にnvm(Node Version Manager)を利用している環境では、`nvm use`コマンドの実行で指定のバージョンに切り替わります。

```
nvm use
```

下記メッセージが表示された場合は、`nvm install 16.19.0`でインストールしてください。

```
Found '/パス省略/.nvmrc' with version <16.19.0>
N/A: version "16.19.0 -> N/A" is not yet installed.

You need to run "nvm install 16.19.0" to install it before using it.
```

## インストール

```
npm ci
```

このコマンドは、`node_modules`ディレクトリを自動で削除し、パッケージのバージョンが環境によって差のないように安全にインストールを行います。`npm install`ではなくこちらのコマンドを使用してください。

## コマンド

### 開発

```
npm run dev
```

### Storybook開発

```
npm run storybook
```

### ビルド

```
npm run build
```

### Function Component作成

```
npm run new:fc
```

上記のコマンドでコンポーネントファイル群が一括で作成されます。

- Component.module.scss
- Component.stories.tsx
- Component.tsx
- index.ts

## husky

pre-commitで各種リンターやフォーマッターを実行しています。  
commitが中断された場合は、エラーを解消した上で再度commitお願いします。

- ESLint
- Stylelint
- commitlint
- Prettier