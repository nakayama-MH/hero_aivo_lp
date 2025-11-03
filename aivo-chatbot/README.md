# HERO AIVO Chatbot

HERO AIVOのランディングページ用チャットボットウィジェット

## 特徴

- ✅ LINE風の選択式会話UI
- ✅ スタンドアロン（単一ファイルで動作）
- ✅ 軽量（JS: 26.5KB + CSS: 4.8KB）
- ✅ レスポンシブ対応
- ✅ 簡単統合（スクリプトタグ1行）

## 開発

### セットアップ

```bash
npm install
```

### 開発モード

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` に出力されます：
- `dist/aivo-chatbot.js` - バンドルされたJavaScript
- `dist/aivo-chatbot.css` - スタイルシート

### テスト

```bash
npm run serve
```

ブラウザで http://localhost:8080/test.html を開いてテストします。

## 既存LPへの統合

### 1. ファイルをコピー

以下のファイルを既存LPの `public/chatbot/` ディレクトリにコピーします：

```
aivo-chatbot/
├── dist/
│   ├── aivo-chatbot.js
│   └── aivo-chatbot.css
└── public/
    └── icon.png
```

### 2. Next.js LPに統合

`app/layout.tsx` に以下を追加：

```tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}

        {/* AIVO Chatbot */}
        <link rel="stylesheet" href="/chatbot/aivo-chatbot.css" />
        <Script src="/chatbot/aivo-chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
```

または `app/page.tsx` に追加（特定のページのみ）：

```tsx
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <main>
        {/* Your LP content */}
      </main>

      {/* AIVO Chatbot */}
      <link rel="stylesheet" href="/chatbot/aivo-chatbot.css" />
      <Script src="/chatbot/aivo-chatbot.js" strategy="lazyOnload" />
    </>
  )
}
```

### 3. アイコンの配置

`icon.png` を `public/` ディレクトリに配置します。

チャットボットは自動的に `/icon.png` を参照します。

## カスタマイズ

### 設定のカスタマイズ

`src/index.ts` を編集して、設定をカスタマイズできます：

```typescript
const chatbot = new AivoChatbot(chatData, {
  iconUrl: '/custom-icon.png',      // アイコンのURL
  primaryColor: '#FF0000',          // プライマリカラー
  botName: 'HERO AIVO',             // ボット名
});
```

### Q&Aデータの更新

`knowledge/qa-data.json` を編集して、会話フローを変更できます。

編集後、`npm run build` で再ビルドが必要です。

### スタイルのカスタマイズ

`src/styles.css` を編集して、デザインをカスタマイズできます。

主要な変数：
- ボタン位置: `#aivo-chatbot-button` の `bottom` と `right`
- プライマリカラー: `.aivo-chatbot-header` の `background`
- ウィンドウサイズ: `#aivo-chatbot-container` の `width` と `height`

## ディレクトリ構造

```
aivo-chatbot/
├── dist/                    # ビルド出力
├── knowledge/              # ナレッジベース
│   ├── qa-data.json       # Q&Aデータ（会話フロー）
│   └── service-design.txt # サービス設計書（テキスト版）
├── public/                # 公開アセット
│   └── icon.png          # チャットボットアイコン
├── scripts/              # ユーティリティスクリプト
│   └── convert-docx.js  # docx変換スクリプト
├── src/                  # ソースコード
│   ├── chatbot.ts       # メインクラス
│   ├── conversation.ts  # 会話管理
│   ├── index.ts         # エントリーポイント
│   ├── styles.css       # スタイル
│   ├── types.ts         # 型定義
│   └── ui.ts            # UI管理
├── package.json
├── tsconfig.json
└── README.md
```

## トラブルシューティング

### チャットボットが表示されない

1. ブラウザの開発者ツールでエラーを確認
2. ファイルのパスが正しいか確認
3. CSSとJSの両方が読み込まれているか確認

### アイコンが表示されない

1. `icon.png` が `public/` ディレクトリにあるか確認
2. Next.jsの場合、`public/` 直下に配置されているか確認
3. パスが `/icon.png` で正しくアクセスできるか確認

### ビルドエラー

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
npm run build
```

## ライセンス

MIT
