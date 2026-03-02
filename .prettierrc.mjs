/** @type {import("prettier").Config} */
export default {
  // ここにPrettierのルールを記述
  singleQuote: true, // シングルクォートを使用する
  // semi: false,       // 文末のセミコロンを省略する
  tabWidth: 2, // インデントをスペース2つにする

  // Astroファイルをフォーマットするためのプラグイン
  plugins: ['prettier-plugin-astro'],
};
