# GitHub Universe 2026 注目アップデート

GitHub Universe 2026の公式recapをもとにした、非公式の日本語・英語プレゼンテーションです。Platform・Copilot・Securityの動画付き12トピックを本編に、その他の発表を目次から開ける補足にまとめています。動画の視聴にはインターネット接続が必要です。

## ローカルでプレビュー / Local preview

`index.html` をブラウザーで開くか、このディレクトリで `python3 -m http.server 8000 --bind 127.0.0.1` を実行して http://localhost:8000 を開きます。依存パッケージやビルドは不要です。

Open `index.html` directly in a browser, or run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory and visit http://localhost:8000. No dependencies or build step are needed.

## Codespacesでプレビュー

1. このリポジトリからCodespaceを作成します。
2. ターミナルで `python3 -m http.server 8000 --bind 0.0.0.0` を実行します。
3. 転送されたポート `8000` を開きます。ポートの公開範囲は **Private** のままにしてください。

`.devcontainer/devcontainer.json` でポート8000をPrivateとして転送し、ブラウザーで開くよう設定しています。この開発用プレビューは、GitHub Pagesで公開するサイトとは別です。動画は引き続きGitHubの公式配信URLから読み込みます。

## 操作

- 右上の「English」/「日本語」で言語を切り替えます。初期表示と再読み込み時は日本語です。現在のスライドと動画の再生状態は維持されます。
- 左右ボタン、左右キー、またはタッチ画面の左右スワイプでスライド移動
- 目次から本編・補足・出典一覧へ直接移動
- 「全画面」または `F` キーで投影表示
- 動画は各スライドで手動再生します。既定ではミュート・ループなしです。再生中の動画はスライド移動時に停止します。

## English controls

- Select **English** in the top bar to switch the whole presentation, including supplements, contents, controls, and accessibility labels. Select **日本語** to switch back. Each page load starts in Japanese; the choice is not stored.
- Switching languages keeps the current slide, video playback position, audio, and looping settings. Videos and linked sources remain in their original language.
- Navigate with the arrow buttons, Left/Right keys, Page Up/Page Down, or horizontal swipes. Use **Contents** to jump to the main slides, supplements, or references.
- Use **Fullscreen** or the `F` key for presentation mode. Play videos manually; they start muted with looping off. Moving to a different slide stops the current video.

## 翻訳の編集 / Editing translations

日本語のスライドと共通の構造・リンク・動画URLは `app.js`、英語のスライド本文と日英のUIラベルは `translations.js` にあります。スライドを追加するときは、固有の `id` と対応する英語の項目を追加してください。`linkLabels` は元のリンクと同じ順序にします。

Japanese slides and shared structure, links, and media URLs live in `app.js`. English slide copy and both languages' UI labels live in `translations.js`. When adding a slide, give it a unique `id` and add a matching English entry. Keep `linkLabels` in the same order as the original links.

## 出典・動画について

各トピックに公式Changelogまたは公式ドキュメントへのリンクがあります。動画とプレビュー画像はGitHub Universe recapの公式配信を参照し、サイト内には複製していません。利用条件や提供状況は変更されることがあるため、各公式発表を確認してください。

構成の参考: [GitHub Universe 2026 全アップデートおさらい（日本語）](https://zenn.dev/microsoft/articles/github-universe-2026-all-updates)。このサイトの説明文は一次情報をもとに独自に要約しています。
