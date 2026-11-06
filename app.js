const recap = "https://github.com/events/universe/recap";
const zenn = "https://zenn.dev/microsoft/articles/github-universe-2026-all-updates";

const slides = [
  {
    kind: "cover",
    chapter: "はじめに",
    title: "GitHub Universe 2026<br>注目アップデート",
    subtitle: "AIとともに進む開発を、Platform・Copilot・Securityの3つの視点から。",
    note: "公式recapの動画付き12トピックを中心に、約20〜30分で紹介します。",
    links: [{ label: "公式recapを見る", url: recap }],
  },
  {
    kind: "overview",
    chapter: "全体像",
    title: "開発の流れに、AIを組み込む。",
    subtitle: "個々の機能だけでなく、計画・実装・レビュー・安全性をつなぐ発表が並びました。",
    bullets: [
      ["01", "Platform", "変更を分割し、文脈を残し、レビューを進める"],
      ["02", "Copilot", "複雑な仕事を任せ、必要な情報や道具をつなぐ"],
      ["03", "Security", "開発の手前からリスクを見つけ、対処につなげる"],
    ],
    note: "本編は3章・12トピック。補足発表は目次からいつでも開けます。",
  },
  {
    chapter: "Platform",
    id: "stacked-pull-requests",
    title: "大きな変更を、<br>追いやすい積み重ねに。",
    summary: "複雑な変更を、関連づけた小さなPull Requestに分けてレビュー。",
    benefit: "レビューは各レイヤーごとに。準備ができたスタックはまとめてマージできます。",
    takeaway: "大きな仕事の全体像と、細部のレビューしやすさを両立。",
    availability: "一般提供",
    video: "https://videos.ctfassets.net/8aevphvgewt8/3dacfElmDjXK7bVOxQf3zP/a6fd9cbf81009e08f2d4dffd71a93abf/Stacked-PRs.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/a49JrRTMoUSuc39XE9StG/46e7b3888a21c3ca8548516d528f0c83/Stacked-PRs__1_.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-06-stacked-pull-requests-generally-available/" },
      { label: "ドキュメント", url: "https://docs.github.com/en/pull-requests/how-tos/stacked-pull-requests" },
    ],
  },
  {
    chapter: "Platform",
    id: "github-cli-attach",
    title: "ターミナルから、<br>再現できる証拠を添える。",
    summary: "GitHub CLIの `--attach` で、画像や動画をIssue・Pull Request・コメントに添付。",
    benefit: "説明と画面キャプチャを、ブラウザーへ切り替えず同じコマンドにまとめられます。",
    takeaway: "不具合の状況や変更前後を、作業の流れの中で共有。",
    availability: "一般提供",
    video: "https://videos.ctfassets.net/8aevphvgewt8/70BYrrosOdCWFlYNAM9kKj/6bdb106239553579826a1c24c8bff2b3/GitHub-CLI.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/14c7GpRS8ouaxF6V8QrFhx/83d6f575c2144c9782448152cad1247f/GitHub-CLI.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-09-01-github-cli-media-in-issues-pull-requests-and-comments/" },
      { label: "ドキュメント", url: "https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/attaching-files" },
    ],
  },
  {
    chapter: "Platform",
    id: "issue-artifacts",
    title: "判断の背景を、<br>Issueと一緒に残す。",
    summary: "計画や調査結果、関連リンク、図などをIssueの成果物として保持。",
    benefit: "エージェントが作った資料も作業の記録と並び、後からチームで参照できます。",
    takeaway: "作業の「何を」だけでなく、「なぜ」も同じ場所に。",
    availability: "パブリックプレビュー",
    video: "https://videos.ctfassets.net/8aevphvgewt8/2v4uqJKL0rdpgHw7QnlKYX/22defd610b2f4cff7f4fed6497a370c5/Issue-Artifacts.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/6V38jvJYsVkBBGSDJm8xuu/0331df0c5152b1e828e6e63582143d00/Issue-Artifacts.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-issue-artifacts-are-now-in-public-preview/" },
      { label: "ドキュメント", url: "https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/using-artifacts-with-issues" },
    ],
  },
  {
    chapter: "Platform",
    id: "repository-pull-requests",
    title: "次に動くPull Requestを、<br>ひと目で見つける。",
    summary: "リポジトリ内のPull Requestを、探しやすく見渡せるページに。",
    benefit: "絞り込みや検索に加えて、レビュー状況やスタックなどの手がかりを一覧で確認。",
    takeaway: "「どこを見ればいいか」を探す時間を、レビューに戻す。",
    availability: "一般提供",
    video: "https://videos.ctfassets.net/8aevphvgewt8/4x7ODySkvZIT9RZOYKidw6/210baa74e6dea15c099aad8c4038cf6f/Repository-Pull-Requests.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/3j927uZCb5NKSoOIcl2fTj/66f4b65c090fd810b5ef4a4fd066bef7/Repository-Pull-Requests.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-09-21-refreshed-repository-pull-requests-page-generally-available/" },
      { label: "ドキュメント", url: "https://docs.github.com/en/pull-requests" },
    ],
  },
  {
    chapter: "Copilot",
    id: "copilot-fusion",
    title: "タスクに合わせて、<br>モデルの力を組み合わせる。",
    summary: "Copilot Fusionに依頼すると、作業に応じてモデルの選択や連携を調整。",
    benefit: "Standard・High・Maxから作業の深さを選び、モデル選びを毎回やり直さずに進められます。",
    takeaway: "モデルを選ぶ作業から、解決したい課題へ。",
    availability: "一般提供",
    video: "https://videos.ctfassets.net/8aevphvgewt8/660qlBieeHzoFLnolMTfKB/7fe6a2d66e862e610b9bc2935bfa798b/Copilot-Fusion.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/5CzVJVlrFZE1QgZ0ctmOlY/da54112814678fc68fd97d6980dd7fae/Copilot-Fusion.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/" },
      { label: "ドキュメント", url: "https://docs.github.com/copilot/concepts/models/copilot-fusion" },
    ],
  },
  {
    chapter: "Copilot",
    id: "copilot-projects",
    title: "ゴールも、文脈も、<br>進捗もひとつの場所に。",
    summary: "複数リポジトリにまたがる仕事をProjectとしてまとめ、Copilotと進行。",
    benefit: "目標に関連するリポジトリや資料を集め、エージェントの作業結果を一緒に追えます。",
    takeaway: "単発の依頼ではなく、まとまりのある仕事を進める単位へ。",
    availability: "パブリックプレビュー",
    video: "https://videos.ctfassets.net/8aevphvgewt8/45Zj5POiXmkn7ZRKKYIUaP/3ed3d78c82348cbaccf8f04e652008a2/Copilot-Projects.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/3vyh5RFOpw63BW3zBCz34I/0f0f807f80772173a33d48c4c386a0aa/Copilot-Projects.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases/" },
      { label: "ドキュメント", url: "https://docs.github.com/copilot/how-tos/github-copilot-app/working-with-projects" },
    ],
  },
  {
    chapter: "Copilot",
    id: "copilot-automations",
    title: "繰り返す仕事を、<br>チームで使える自動化に。",
    summary: "プロンプト・きっかけ・ツールを組み合わせ、Copilotの定型ワークフローを作成。",
    benefit: "共有オートメーションなら、チームで内容を管理し、リポジトリに紐づけて運用できます。",
    takeaway: "個人の便利な手順を、チームの仕組みに育てる。",
    availability: "共有オートメーションを段階的に提供",
    video: "https://videos.ctfassets.net/8aevphvgewt8/2kOiKK2PBc0c1hLfo2tiCD/7fc0124df4ee41460a38a39f57eeec15/Copilot-Automations.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/1vakFMY7fets1qshCX1Zg1/41669bdff1b9b763f1a10ef5d4d5ea33/Copilot-Automations.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/" },
      { label: "ドキュメント", url: "https://docs.github.com/en/copilot/how-tos/github-copilot-app/using-automations" },
    ],
  },
  {
    chapter: "Copilot",
    id: "copilot-connectors",
    title: "外部サービスの文脈を、<br>Copilotの仕事につなぐ。",
    summary: "GitHubが確認したサービス接続を通じ、外部ツールの情報をCopilotで活用。",
    benefit: "対応サービスを接続すれば、アプリごとに接続設定を繰り返す手間を減らせます。",
    takeaway: "コードの外にある会話や資料も、仕事の文脈に。",
    availability: "パブリックプレビュー",
    video: "https://videos.ctfassets.net/8aevphvgewt8/30cWqd4OBUuBrycCCWGcyy/2a58e83bd479268a6023e01da73bb0a6/Copilot-Connectors.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/15rkZhjGujvqsNZz8pyyvs/d9d01ebb9b310c71b45d25b0b9533b42/Copilot-Connectors.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-connect-your-tools-to-copilot-without-all-the-setup/" },
      { label: "ドキュメント", url: "https://docs.github.com/copilot/concepts/prompting-and-context/copilot-connectors" },
    ],
  },
  {
    chapter: "Security",
    id: "security-extension",
    title: "検知から修正まで、<br>コードのそばで。",
    summary: "CopilotアプリのSecurity extensionから、コードスキャンのアラートを確認。",
    benefit: "重要な警告を見つけ、Copilotに説明や修正案を相談しながら対応できます。",
    takeaway: "セキュリティ上の気づきを、開発の流れに戻す。",
    availability: "パブリックプレビュー",
    video: "https://videos.ctfassets.net/8aevphvgewt8/4Qks5KMSSDV3oC1TqBXQjX/35583b663e768a731587e7abae50a93b/Security-Extension.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/4UzUGhKIcFOFfOUGrh29yl/34674da19eb691d8d81186c753e2e2d8/Security-Extension.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app/" },
      { label: "ドキュメント", url: "https://docs.github.com/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts" },
    ],
  },
  {
    chapter: "Security",
    id: "ai-scan",
    title: "ルールだけでは見つけにくい、<br>リスクにも目を向ける。",
    summary: "AI Scanでリポジトリ全体を調べ、既存の検知ルールが届きにくい問題も探す。",
    benefit: "CodeQLが対応していない言語や、従来のルールでは見落としやすい問題も対象に。",
    takeaway: "AIによる調査結果も、コードスキャンのアラートとして確認。",
    availability: "リポジトリ全体のAI Scanはパブリックプレビュー",
    video: "https://videos.ctfassets.net/8aevphvgewt8/67rlqq04QsEXTmwS4seSL1/21fe54d315a53a0e382c6b420c9fdf5a/AI-Scan.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/19N8nCHMHn3yVRw7p9EhxZ/7b47d5dc8f699665a36f0b78fe5aff7a/AI-Scan.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview/" },
      { label: "ドキュメント", url: "https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan" },
    ],
  },
  {
    chapter: "Security",
    id: "push-protection",
    title: "未知の形式の秘密情報も、<br>push前に止める。",
    summary: "既知のパターンに合わない秘密情報も、文脈を使った検知で見つける。",
    benefit: "有効化すると、検知した秘密情報を含む変更をpush時にブロックします。",
    takeaway: "パターン照合を補い、コード内での使われ方から漏えいを防ぐ。",
    availability: "パブリックプレビュー · AI検知とPush protectionの有効化が必要",
    video: "https://videos.ctfassets.net/8aevphvgewt8/7gEMOuSslaTQ1LoSkMqxyb/35d63a054344277acf2d21f0ec6fcf6c/Push-Protection.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/7icIX6dwcCcakKbqGB85VD/e343ab30632f51b82156bf4a80fd4a17/Push-Protection.webp",
    links: [
      { label: "公式発表", url: "https://github.blog/changelog/2026-10-28-push-protection-beyond-predefined-secret-patterns/" },
      { label: "ドキュメント", url: "https://docs.github.com/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enable-ai-push-protection" },
    ],
  },
  {
    chapter: "Security",
    id: "supply-chain",
    title: "依存のリスクを、<br>導入前と利用状況から見る。",
    summary: "Package firewallは危険なパッケージの導入を防ぎ、到達可能性分析は脆弱な関数の利用経路を調査。",
    benefit: "「入れてよいか」と「実際に影響するか」を、それぞれ判断するための情報に。",
    takeaway: "依存関係のリスクを、より具体的な対処につなげる。",
    availability: "Firewall: Enterprise Cloudでプレビュー · 到達可能性分析: JavaScript/TypeScriptでプレビュー",
    video: "https://videos.ctfassets.net/8aevphvgewt8/3wFVdRcfOKcEekcD8vX9WY/1fba55b54567519ec1622caec79547dd/Supply-Chain-Borderless.mp4",
    poster: "https://images.ctfassets.net/8aevphvgewt8/1QuYMTnYkZlPVXhcvBgpFO/eadcaebad3e9dac32fda9cc3d110a534/Supply-Chain-Borderless.webp",
    links: [
      { label: "Package firewall", url: "https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/" },
      { label: "到達可能性分析", url: "https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis/" },
      { label: "ドキュメント", url: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall" },
    ],
  },
  {
    kind: "summary",
    chapter: "まとめ",
    title: "開発の流れそのものを、<br>アップデートする。",
    bullets: [
      ["Platform", "分割して進め、背景を残し、見通しをよくする"],
      ["Copilot", "目標・モデル・外部の文脈を組み合わせて任せる"],
      ["Security", "開発の前後にわたり、リスクの検知と修正を助ける"],
    ],
    note: "機能の利用条件や提供段階はそれぞれ異なります。導入前に公式発表をご確認ください。",
    links: [{ label: "出典一覧へ", action: "references" }],
  },
  {
    kind: "supplement",
    chapter: "補足 · Copilot",
    title: "チームの知識を、<br>エージェントが使える文脈に。",
    summary: "GitHub Intelligenceは記憶や継続的な学習、リポジトリ横断のCode Searchを紹介。",
    benefit: "チームの慣習や過去の知見、関連コードを次のタスクで使いやすくする考え方です。",
    note: "動画付き12トピック以外の関連発表。詳細は公式Changelogで確認できます。",
    links: [{ label: "公式発表", url: "https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work/" }],
  },
  {
    kind: "supplement",
    chapter: "補足 · Copilot",
    title: "エージェントを、<br>自動化の中でも活用する。",
    summary: "Agentic Workflowsでは、自然言語のMarkdownで定義した仕事をGitHub Actions上で実行。",
    benefit: "IssueのトリアージやCI失敗の調査など、推論を含む定型作業を自動化できます。",
    note: "動画付き12トピック以外の関連発表。利用するエージェントや実行環境の条件は出典をご確認ください。",
    links: [{ label: "公式発表", url: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/" }],
  },
  {
    kind: "supplement",
    chapter: "補足 · Copilot",
    title: "Copilotの使い方と、<br>導入の選択肢が広がる。",
    summary: "アプリをまたぐ作業体験の更新や、GitHub Enterpriseに含まれるCopilot accessなども発表。",
    benefit: "開発クライアントや契約形態ごとに、使える機能と利用条件を確認することが大切です。",
    note: "動画付き12トピック以外の関連発表。提供条件は契約・管理者設定によって異なります。",
    links: [
      { label: "Copilotアプリ", url: "https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases/" },
      { label: "EnterpriseのCopilot access", url: "https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot/" },
      { label: "VS Code", url: "https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/" },
    ],
  },
  {
    kind: "supplement",
    chapter: "補足 · Copilot",
    title: "画像づくりも、<br>開発の文脈の中で。",
    summary: "Copilotの会話から画像を生成・編集し、結果をプロジェクトに保存できる機能も発表。",
    benefit: "ビジュアル素材を別のツールで作って持ち戻る手順を減らします。",
    note: "動画付き12トピック以外の関連発表。プレビュー機能や利用可能なプランは出典をご確認ください。",
    links: [{ label: "公式発表", url: "https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot/" }],
  },
  {
    kind: "supplement",
    chapter: "補足 · Platform",
    title: "開発を支える基盤にも、<br>改善が広がる。",
    summary: "GitHub ActionsのLinux実行環境を拡張し、Pull Request制限には貢献履歴に応じた例外設定を追加。",
    benefit: "ピーク時の実行容量を広げる一方、リポジトリ運営では新規・継続的な貢献者に合わせた制限を設定できます。",
    note: "動画付き12トピック以外の関連発表。Actionsの対象runnerや利用条件は公式発表をご確認ください。",
    links: [
      { label: "GitHub Actionsのmulti-cloud compute", url: "https://github.blog/changelog/2026-10-28-github-actions-adds-multi-cloud-compute-to-improve-reliability/" },
      { label: "Pull Request制限の例外設定", url: "https://github.blog/changelog/2026-10-28-pull-request-limits-exempt-contributors-by-age-or-history/" },
    ],
  },
  {
    kind: "supplement",
    chapter: "補足 · Security",
    title: "セキュリティは、<br>コードの外にも目を配る。",
    summary: "Pull RequestでのAI Scanが一般提供となり、Public monitoringはGitHub上の公開領域に漏れた秘密情報を監視。",
    benefit: "コード変更時の脆弱性確認と、リポジトリ外に広がった秘密情報への対応を支援します。",
    note: "利用可能なプランや管理者による有効化など、機能ごとの条件は公式発表をご確認ください。",
    links: [
      { label: "Pull RequestのAI Scan", url: "https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available/" },
      { label: "Public monitoring", url: "https://github.blog/changelog/2026-10-28-public-monitoring-for-enterprises-generally-available/" },
    ],
  },
  {
    kind: "references",
    chapter: "参考資料",
    title: "出典と、さらに詳しい情報。",
    subtitle: "各トピックのスライドにも、対応する公式発表とドキュメントへのリンクを掲載しています。",
    links: [
      { label: "GitHub Universe 2026 recap（公式）", url: recap },
      { label: "GitHub Changelog（公式）", url: "https://github.blog/changelog/" },
      { label: "Universe 2026 全アップデートおさらい（日本語・構成参考）", url: zenn, kind: "reference" },
    ],
    note: "本文は公式発表をもとに独自に要約しています。日本語の参考記事から文章や画像を転載していません。",
  },
];

const coreEnd = 14;
const supplementaryStart = 15;
const referenceIndex = slides.length - 1;
const content = document.querySelector("#slide-content");
const stage = document.querySelector("#slide");
const dialog = document.querySelector("#toc-dialog");
const announcement = document.querySelector("#announcements");
let current = 0;
let touchStartX = null;
let touchStartY = null;

function externalLinks(links = []) {
  if (!links.length) return "";
  return `<div class="source-links">${links.map((link) => {
    if (link.action === "references") {
      return `<button type="button" class="text-link" data-action="references">${link.label} <span aria-hidden="true">↗</span></button>`;
    }
    const className = link.kind === "reference" ? "text-link reference-link" : "text-link";
    return `<a class="${className}" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`;
  }).join("")}</div>`;
}

function videoPanel(slide, index) {
  return `<div class="video-frame" data-slide-video="${index}">
    <video class="feature-video" controls playsinline preload="none" muted poster="${slide.poster}" aria-label="${slide.chapter}の公式デモ動画">
      <source src="${slide.video}" type="video/mp4">
      お使いのブラウザーでは動画を再生できません。
    </video>
    <div class="video-loading" hidden><span class="spinner" aria-hidden="true"></span>動画を読み込み中…</div>
    <button class="video-prompt" type="button" aria-label="公式動画を再生">
      <span class="play-icon" aria-hidden="true">▶</span>
      <span>動画を再生</span>
    </button>
    <div class="video-error" hidden role="alert">
      <strong>動画を読み込めませんでした</strong>
      <span>ネットワークを確認して、再試行してください。</span>
      <button type="button" class="retry-video">再試行</button>
      <a href="${recap}" target="_blank" rel="noopener noreferrer">公式recapを開く ↗</a>
    </div>
    <div class="video-tools">
      <button class="restart-video" type="button" title="先頭から再生">↺ <span>先頭から</span></button>
      <button class="toggle-loop" type="button" aria-pressed="false" title="ループ再生を切り替え">ループ: オフ</button>
      <button class="toggle-mute" type="button" aria-pressed="true" title="音声を有効にする">音声: オフ</button>
      <span class="video-credit">動画: GitHub Universe</span>
    </div>
  </div>`;
}

function renderSlide(slide, index) {
  const links = externalLinks(slide.links);
  if (slide.kind === "cover") {
    return `<section class="slide-layout cover-layout">
      <div class="cover-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> GITHUB UNIVERSE · RECAP</p>
        <h1>${slide.title}</h1>
        <p class="cover-subtitle">${slide.subtitle}</p>
        <p class="cover-note">${slide.note}</p>
        <button class="primary-button" type="button" data-action="next">プレゼンを始める <span aria-hidden="true">→</span></button>
        ${links}
      </div>
      <div class="cover-art" aria-hidden="true">
        <div class="art-orbit orbit-one"></div>
        <div class="art-orbit orbit-two"></div>
        <div class="art-glow"></div>
        <div class="art-card">
          <span class="art-card-top">DEVELOPMENT, REIMAGINED</span>
          <div class="art-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <span class="art-card-bottom">PLATFORM <b>·</b> COPILOT <b>·</b> SECURITY</span>
        </div>
        <span class="art-year">’26</span>
      </div>
    </section>`;
  }
  if (slide.kind === "overview") {
    return `<section class="slide-layout overview-layout">
      <div class="slide-heading">
        <p class="eyebrow">${slide.chapter} <span class="eyebrow-line"></span> 01 / 12</p>
        <h1>${slide.title}</h1>
        <p class="lead">${slide.subtitle}</p>
      </div>
      <div class="overview-grid">${slide.bullets.map(([number, title, description]) => `
        <article class="overview-card">
          <span class="overview-number">${number}</span>
          <div><h2>${title}</h2><p>${description}</p></div>
          <span class="overview-arrow" aria-hidden="true">↗</span>
        </article>`).join("")}</div>
      <div class="overview-bottom"><p>${slide.note}</p><button class="primary-button compact-button" type="button" data-action="next">Platformから見る <span aria-hidden="true">→</span></button></div>
    </section>`;
  }
  if (slide.kind === "summary") {
    return `<section class="slide-layout summary-layout">
      <div class="slide-heading">
        <p class="eyebrow">${slide.chapter} <span class="eyebrow-line"></span> TAKEAWAYS</p>
        <h1>${slide.title}</h1>
      </div>
      <div class="summary-points">${slide.bullets.map(([title, description], i) => `
        <article class="summary-row">
          <span class="summary-index">0${i + 1}</span><strong>${title}</strong><p>${description}</p>
        </article>`).join("")}</div>
      <div class="summary-footer"><p>${slide.note}</p>${links}</div>
    </section>`;
  }
  if (slide.kind === "references") {
    const sources = slides.slice(2, 14).map((item, i) => `
      <a href="${item.links[0].url}" target="_blank" rel="noopener noreferrer" class="reference-item">
        <span class="reference-number">${String(i + 1).padStart(2, "0")}</span>
        <span><strong>${item.title.replaceAll("<br>", " ")}</strong><small>${item.chapter} · 公式発表 ↗</small></span>
      </a>`).join("");
    return `<section class="slide-layout references-layout">
      <div class="slide-heading">
        <p class="eyebrow">${slide.chapter} <span class="eyebrow-line"></span> SOURCES</p>
        <h1>${slide.title}</h1>
        <p class="lead">${slide.subtitle}</p>
      </div>
      <div class="reference-grid">${sources}</div>
      <div class="reference-footer">${links}<p>${slide.note}</p></div>
    </section>`;
  }
  const isSupplement = slide.kind === "supplement";
  return `<section class="slide-layout topic-layout ${isSupplement ? "supplement-layout" : ""}">
    <div class="topic-copy">
      <p class="eyebrow">${isSupplement ? "SUPPLEMENT" : slide.chapter.toUpperCase()} <span class="eyebrow-line"></span> ${isSupplement ? "参考発表" : `${String(index - 1).padStart(2, "0")} / 12`}</p>
      <h1>${slide.title}</h1>
      <p class="topic-summary">${slide.summary}</p>
      ${slide.benefit ? `<div class="benefit-block"><span class="benefit-label">何がうれしい？</span><p>${slide.benefit}</p></div>` : ""}
      ${slide.takeaway ? `<p class="takeaway"><span aria-hidden="true">✳</span> ${slide.takeaway}</p>` : ""}
      ${slide.availability ? `<p class="availability"><span>提供状況</span>${slide.availability}</p>` : ""}
      ${slide.note ? `<p class="supplement-note">${slide.note}</p>` : ""}
      ${links}
    </div>
    ${slide.video ? videoPanel(slide, index) : `<div class="supplement-art" aria-hidden="true"><span class="supplement-word">${slide.chapter.split(" · ")[1] || "UNIVERSE"}</span><div class="supplement-orbit"></div><div class="supplement-node node-a"></div><div class="supplement-node node-b"></div><div class="supplement-node node-c"></div><span class="supplement-mark">↗</span></div>`}
  </section>`;
}

function currentPath() {
  return current <= coreEnd
    ? Array.from({ length: coreEnd + 1 }, (_, index) => index)
    : Array.from({ length: referenceIndex - supplementaryStart + 1 }, (_, i) => i + supplementaryStart);
}

function stopCurrentVideo() {
  const video = content.querySelector("video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

function syncVideoControls(root) {
  const video = root.querySelector("video");
  if (!video) return;
  const frame = root.querySelector(".video-frame");
  const prompt = root.querySelector(".video-prompt");
  const loading = root.querySelector(".video-loading");
  const error = root.querySelector(".video-error");
  const loopButton = root.querySelector(".toggle-loop");
  const muteButton = root.querySelector(".toggle-mute");
  let playbackRequested = false;
  let loadTimeout;

  const clearLoadTimeout = () => {
    if (loadTimeout) clearTimeout(loadTimeout);
    loadTimeout = undefined;
  };
  const showError = () => {
    clearLoadTimeout();
    loading.hidden = true;
    prompt.hidden = true;
    error.hidden = false;
    frame.classList.add("has-error");
  };
  const showLoading = () => {
    if (!playbackRequested) return;
    loading.hidden = false;
    error.hidden = true;
    frame.classList.remove("has-error");
    clearLoadTimeout();
    loadTimeout = setTimeout(showError, 15000);
  };

  video.addEventListener("loadstart", showLoading);
  video.addEventListener("waiting", showLoading);
  video.addEventListener("canplay", () => {
    clearLoadTimeout();
    loading.hidden = true;
  });
  video.addEventListener("playing", () => {
    clearLoadTimeout();
    loading.hidden = true;
    prompt.hidden = true;
  });
  video.addEventListener("error", showError);
  video.addEventListener("ended", () => {
    prompt.hidden = false;
    prompt.querySelector("span:last-child").textContent = "もう一度再生";
  });
  video.addEventListener("volumechange", () => {
    muteButton.textContent = `音声: ${video.muted ? "オフ" : "オン"}`;
    muteButton.setAttribute("aria-pressed", String(!video.muted));
  });

  const playVideo = () => {
    playbackRequested = true;
    error.hidden = true;
    showLoading();
    video.play().catch(showError);
  };
  prompt.addEventListener("click", playVideo);
  root.querySelector(".retry-video").addEventListener("click", () => {
    error.hidden = true;
    prompt.hidden = false;
    playbackRequested = true;
    video.load();
    playVideo();
  });
  root.querySelector(".restart-video").addEventListener("click", () => {
    video.currentTime = 0;
    playVideo();
  });
  loopButton.addEventListener("click", () => {
    video.loop = !video.loop;
    loopButton.textContent = `ループ: ${video.loop ? "オン" : "オフ"}`;
    loopButton.setAttribute("aria-pressed", String(video.loop));
  });
  muteButton.addEventListener("click", () => { video.muted = !video.muted; });
}

function render() {
  stopCurrentVideo();
  const slide = slides[current];
  content.innerHTML = renderSlide(slide, current);
  content.querySelectorAll("[data-action='next']").forEach((button) => button.addEventListener("click", next));
  content.querySelectorAll("[data-action='references']").forEach((button) => button.addEventListener("click", () => goTo(referenceIndex)));
  syncVideoControls(content);

  const path = currentPath();
  const position = path.indexOf(current);
  document.querySelector("#chapter-label").textContent = slide.chapter;
  document.querySelector("#slide-position").textContent = `${String(position + 1).padStart(2, "0")} / ${String(path.length).padStart(2, "0")}`;
  document.querySelector(".progress-track").setAttribute("aria-valuemax", String(path.length));
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(position + 1));
  document.querySelector("#progress-fill").style.width = `${((position + 1) / path.length) * 100}%`;
  document.querySelector("#previous-slide").disabled = position === 0;
  document.querySelector("#next-slide").disabled = position === path.length - 1;
  document.querySelector("#next-slide").title = position === path.length - 1 && current <= coreEnd
    ? "本編はここまでです。目次から補足を開けます"
    : "次のスライド (→)";
  const mainEnd = current === coreEnd;
  document.querySelector("#next-slide").setAttribute("aria-label", mainEnd ? "本編の終わり" : "次のスライド");
  document.title = `${slide.chapter} — ${slide.title.replaceAll("<br>", " ")} | GitHub Universe 2026`;
  buildToc();
  announcement.textContent = `${slide.chapter}、${slide.title.replaceAll("<br>", " ")}`;
}

function goTo(index) {
  if (index < 0 || index >= slides.length || index === current) return;
  current = index;
  render();
  stage.focus({ preventScroll: true });
}

function next() {
  const path = currentPath();
  const nextIndex = path[path.indexOf(current) + 1];
  if (nextIndex !== undefined) goTo(nextIndex);
}

function previous() {
  const path = currentPath();
  const previousIndex = path[path.indexOf(current) - 1];
  if (previousIndex !== undefined) goTo(previousIndex);
}

function buildToc() {
  const groups = [
    { title: "本編 · Platform", range: [2, 5] },
    { title: "本編 · Copilot", range: [6, 9] },
    { title: "本編 · Security", range: [10, 13] },
    { title: "本編 · まとめ", range: [coreEnd, coreEnd] },
    { title: "補足 · その他の発表", range: [supplementaryStart, referenceIndex - 1] },
    { title: "資料", range: [referenceIndex, referenceIndex] },
  ];
  const toc = document.querySelector("#toc-list");
  toc.innerHTML = `<button type="button" class="toc-entry toc-cover ${current === 0 ? "is-current" : ""}" data-index="0"><span class="toc-index">00</span><span><strong>表紙</strong><small>GitHub Universe 2026 注目アップデート</small></span></button>
    <button type="button" class="toc-entry toc-cover ${current === 1 ? "is-current" : ""}" data-index="1"><span class="toc-index">01</span><span><strong>全体像</strong><small>3つのテーマと本編の流れ</small></span></button>
    ${groups.map((group) => {
      const entries = slides.slice(group.range[0], group.range[1] + 1);
      return `<section class="toc-group"><h3>${group.title}</h3>${entries.map((slide, i) => {
        const index = group.range[0] + i;
        const number = index <= 13 ? String(index - 1).padStart(2, "0") : index === coreEnd ? "14" : index === referenceIndex ? "↗" : "＋";
        const title = slide.title.replaceAll("<br>", " ");
        return `<button type="button" class="toc-entry ${current === index ? "is-current" : ""}" data-index="${index}" ${index <= 13 ? `data-poster="${slide.poster}"` : ""}>
          <span class="toc-index">${number}</span><span><strong>${title}</strong><small>${slide.chapter}</small></span>
        </button>`;
      }).join("")}</section>`;
    }).join("")}`;
  toc.querySelectorAll("[data-index]").forEach((button) => button.addEventListener("click", () => {
    goTo(Number(button.dataset.index));
    dialog.close();
  }));
}

document.querySelector("#previous-slide").addEventListener("click", previous);
document.querySelector("#next-slide").addEventListener("click", next);
document.querySelector("#home-link").addEventListener("click", (event) => {
  event.preventDefault();
  goTo(0);
});
document.querySelector("#toc-open").addEventListener("click", () => {
  buildToc();
  dialog.showModal();
  dialog.querySelector(".is-current")?.focus();
});
document.querySelector("#toc-close").addEventListener("click", () => dialog.close());
document.querySelector("#fullscreen-toggle").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    announcement.textContent = "全画面表示を開始できませんでした。ブラウザーの全画面機能をご利用ください。";
  }
});
document.addEventListener("fullscreenchange", () => {
  const active = Boolean(document.fullscreenElement);
  document.querySelector("#fullscreen-toggle").innerHTML = `<span class="fullscreen-icon" aria-hidden="true">${active ? "⛶" : "⛶"}</span><span class="button-label">${active ? "全画面を終了" : "全画面"}</span>`;
  document.querySelector("#fullscreen-toggle").title = active ? "全画面を終了" : "全画面表示";
});
document.addEventListener("keydown", (event) => {
  if (dialog.open) return;
  const target = event.target;
  if (target instanceof Element && target.closest("button, a, input, textarea, select, video, [contenteditable='true']")) return;
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    next();
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    previous();
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    document.querySelector("#fullscreen-toggle").click();
  }
});
stage.addEventListener("touchstart", (event) => {
  if (event.target.closest("video, button, a")) return;
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
}, { passive: true });
stage.addEventListener("touchend", (event) => {
  if (touchStartX === null || touchStartY === null) return;
  const deltaX = event.changedTouches[0].screenX - touchStartX;
  const deltaY = event.changedTouches[0].screenY - touchStartY;
  if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
    if (deltaX < 0) next();
    else previous();
  }
  touchStartX = null;
  touchStartY = null;
}, { passive: true });

render();
