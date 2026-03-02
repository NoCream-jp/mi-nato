# mi-nato.com

これは、[Astro](https://astro.build/)を使用して構築された個人用ポートフォリオ兼ブログサイトです。実績、制作物、ブログ記事などを掲載しています。

## ✨ 技術スタック

- **Framework:** [Astro](https://astro.build/)
- **Styling:** CSS
- **Formatting:** [Prettier](https://prettier.io/)
- **Fonts:** [Google Fonts](https://fonts.google.com/), [Font Awesome](https://fontawesome.com/)

## 🚀 プロジェクト構成

```text
/
├── public/              # 静的アセット (画像, faviconなど)
├── src/
│   ├── components/      # 再利用可能なAstroコンポーネント
│   ├── content/         # コンテンツコレクション (Markdownファイル)
│   │   ├── action/      # 「Action」ページのコンテンツ
│   │   └── article/     # 「Article」ページのコンテンツ
│   ├── layouts/         # ページ全体のレイアウト
│   └── pages/           # サイトのページとルーティング
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
