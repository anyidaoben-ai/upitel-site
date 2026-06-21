import Link from "next/link";
import styles from "./page.module.css";

const services = [
  "AI Webサイト制作",
  "企業サイト制作",
  "店舗サイト制作",
  "個人事業主向けサイト",
  "ランディングページ制作",
  "ブランド紹介サイト",
  "ポートフォリオサイト",
  "既存サイトの修正・改善",
];

const targets = [
  "個人事業主",
  "小さな会社",
  "店舗オーナー",
  "美容室・飲食店・カフェ",
  "クリエイター",
  "フリーランス",
  "新しく事業を始める人",
  "商品やサービスを紹介したい人",
];

const flow = [
  {
    step: "01",
    title: "相談・ヒアリング",
    text: "事業内容、目的、ターゲット、雰囲気、必要なページ、予算、納期を確認します。",
  },
  {
    step: "02",
    title: "AIで構成・文章作成",
    text: "ChatGPT・Claudeを活用して、サイト構成、見出し、説明文、導線を作成します。",
  },
  {
    step: "03",
    title: "デザイン方向を決定",
    text: "高級感、未来感、信頼感、店舗感など、事業に合う世界観を設計します。",
  },
  {
    step: "04",
    title: "Webサイト制作",
    text: "Next.jsなどを使い、スマホ対応の現代的なWebサイトを制作します。",
  },
  {
    step: "05",
    title: "確認・修正",
    text: "文章、画像、色、レイアウトを確認し、必要な修正を行います。",
  },
  {
    step: "06",
    title: "公開・納品",
    text: "Vercel公開、GitHub管理、公開URLの納品までサポートします。",
  },
];

const plans = [
  {
    name: "ライトプラン",
    price: "30,000円〜",
    description: "とにかく安く早くWebサイトが欲しい方向け。",
    features: ["1ページサイト", "文章作成サポート", "スマホ対応", "Vercel公開", "修正1回"],
  },
  {
    name: "スタンダードプラン",
    price: "80,000円〜",
    description: "ちゃんと事業用のWebサイトを持ちたい方向け。",
    features: ["3〜5ページ", "会社紹介", "サービス紹介", "お問い合わせ導線", "修正2回"],
  },
  {
    name: "ブランドプラン",
    price: "150,000円〜",
    description: "世界観・ブランド感まで作り込みたい方向け。",
    features: ["5ページ以上", "世界観設計", "AI画像生成", "高品質デザイン", "アニメーション", "修正3回"],
  },
];

export default function TechnologyLandAIPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.badge}>AI Web Production Company</p>
          <nav className={styles.navTabs}>
          <Link href="/MONSTER-AI" className={styles.navTab}>
           MONSTER&AI
          </Link>
          </nav>
          <h1>
            TechnologyLand
            <span>& AI</span>
          </h1>
          <p className={styles.catchcopy}>アイデアを、最短でWebサイトへ。</p>
          <p className={styles.heroText}>
            TechnologyLand & AIは、ChatGPT・ClaudeなどのAIを活用し、
            個人事業主・店舗・小規模企業向けに、低価格・短納期でWebサイトを制作するAI Web制作会社です。
          </p>
          <div className={styles.heroButtons}>
            <a href="#plans" className={styles.primaryButton}>料金プランを見る</a>
            <a href="#flow" className={styles.secondaryButton}>制作の流れを見る</a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.glassCard}>
            <p>AI Website Build</p>
            <h2>Fast / Low Cost / Beautiful</h2>
            <span>ChatGPT × Claude × Next.js</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Philosophy</p>
        <h2>会社理念</h2>
        <p className={styles.lead}>
          AIの力で、誰でも早く・安く・美しく、
          自分の事業をWebサイトとして形にできる世界をつくる。
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Services</p>
        <h2>提供サービス</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div className={styles.card} key={service}>
              <h3>{service}</h3>
              <p>
                AIを活用して、構成・文章・デザイン・制作まで効率よく進めます。
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.darkSection}>
        <div>
          <p className={styles.sectionLabel}>Difference</p>
          <h2>他社との違い</h2>
          <p>
            TechnologyLand & AIは、AIを使って制作工程を効率化することで、
            他社よりも安く、早く、現代的なWebサイトを提供します。
          </p>
          <p>
            ただ作るだけではなく、お客さんの事業の世界観・商品価値・ブランドイメージまで
            Webサイトに落とし込みます。
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Target</p>
        <h2>対象のお客さん</h2>
        <p className={styles.lead}>
          まだ大きな予算はないけれど、ちゃんとしたWebサイトが欲しい人へ。
        </p>
        <div className={styles.tagArea}>
          {targets.map((target) => (
            <span key={target}>{target}</span>
          ))}
        </div>
      </section>

      <section id="flow" className={styles.section}>
        <p className={styles.sectionLabel}>Flow</p>
        <h2>制作の流れ</h2>
        <div className={styles.flow}>
          {flow.map((item) => (
            <div className={styles.flowItem} key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className={styles.section}>
        <p className={styles.sectionLabel}>Plans</p>
        <h2>料金プラン</h2>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <div className={styles.planCard} key={plan.name}>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <p>AIで、あなたの事業をWebサイトに。</p>
        <h2>TechnologyLand & AI</h2>
        <a href="mailto:example@example.com">相談する</a>
      </section>
    </main>
  );
}