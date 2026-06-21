import type { Metadata } from "next";
import styles from "./page.module.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
const siteUrl = `${baseUrl.replace(/\/$/, "")}/upitel`;

const features = [
  {
    title: "羽ばたくように広がる発想",
    description:
      "ユピテルは、小さなひらめきを磨き、見る人の記憶に残るWebサイトやブランド表現へ育てます。",
  },
  {
    title: "検索で見つかる設計",
    description:
      "ページタイトル、見出し、本文、構造化データを整え、Google検索で内容が理解されやすいWebサイトにします。",
  },
  {
    title: "スマホで読みやすい体験",
    description:
      "スマートフォンでもすぐ伝わる導線、軽い表示、読みやすい文章で、訪問者を迷わせません。",
  },
];

const seoSteps = [
  "ユピテルの名前と「ユピテルは羽ばたく」のメッセージを明確に掲載",
  "検索結果に表示されやすいタイトルと説明文を設定",
  "Googleがページ内容を理解しやすい構造化データを追加",
  "サービス内容、特徴、よくある質問を本文内に整理",
  "内部リンク、canonical、SNS共有向けOG情報を最適化",
];

const faqs = [
  {
    question: "ユピテルはどんなWebサイトですか？",
    answer:
      "ユピテルは、発想が羽ばたくように広がるブランド体験をつくるWebサイトです。企画、文章、デザイン、検索対策を一体で考えます。",
  },
  {
    question: "「ユピテルは羽ばたく」で検索に出るようになりますか？",
    answer:
      "このページでは検索エンジンが理解しやすい形でキーワード、見出し、説明文、構造化データを整えています。ただし、Googleへの掲載順位や反映時期はGoogle側のクロールと評価に左右されます。",
  },
  {
    question: "公開後に必要なことはありますか？",
    answer:
      "独自ドメインの設定、Search Consoleへの登録、サイトマップ送信、外部からの自然なリンク獲得、継続的な内容更新が重要です。",
  },
];

export const metadata: Metadata = {
  title: "ユピテルは羽ばたく | ユピテル公式Webサイト",
  description:
    "ユピテルは羽ばたく。発想をWebサイトへ広げ、Google検索で見つかりやすいブランドページを設計するユピテルの公式Webサイトです。",
  keywords: [
    "ユピテル",
    "ユピテルは羽ばたく",
    "ユピテル Webサイト",
    "羽ばたく Google 検索",
    "SEO対策",
    "Web制作",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ユピテルは羽ばたく | ユピテル公式Webサイト",
    description:
      "発想を羽ばたかせ、検索で見つかるWebサイトへ。ユピテルの公式ブランドページです。",
    url: siteUrl,
    siteName: "ユピテル",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ユピテルは羽ばたく | ユピテル公式Webサイト",
    description:
      "ユピテルは羽ばたく。検索で見つかりやすいブランドサイトを目指す公式ページです。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "ユピテル",
      url: siteUrl,
      inLanguage: "ja",
      description:
        "ユピテルは羽ばたく。検索で見つかりやすいブランド体験をつくるWebサイトです。",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "ユピテル",
      url: siteUrl,
      slogan: "ユピテルは羽ばたく",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function UpitelPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.label}>UPITEL OFFICIAL WEBSITE</p>
          <h1 className={styles.title}>
            ユピテル
            <span>は羽ばたく</span>
          </h1>
          <p className={styles.copy}>発想を、空へ。検索で見つかるブランドへ。</p>
          <p className={styles.description}>
            ユピテルは、アイデアをWebサイトとして形にし、Google検索で内容が伝わりやすいように設計されたブランドページです。
            「ユピテルは羽ばたく」という言葉を中心に、訪問者にも検索エンジンにもわかりやすい情報構造を整えています。
          </p>
          <div className={styles.heroButtons}>
            <a href="#about" className={styles.primaryButton}>
              ユピテルを知る
            </a>
            <a href="#seo" className={styles.secondaryButton}>
              検索対策を見る
            </a>
          </div>
        </div>

        <div className={styles.wingVisual} aria-hidden="true">
          <span />
          <span />
          <strong>UPITEL</strong>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <p className={styles.sectionLabel}>ABOUT</p>
        <h2 className={styles.heading}>ユピテルは、まだ見ぬ場所へ羽ばたく。</h2>
        <p className={styles.text}>
          ユピテルは、名前を覚えてもらうこと、想いを正しく届けること、そして検索した人が迷わずたどり着けることを大切にしたWebサイトです。
          きれいな見た目だけでなく、見出し、本文、導線、検索結果の表示まで一つの体験として設計しています。
        </p>
      </section>

      <section className={styles.darkSection}>
        <p className={styles.sectionLabel}>FEATURES</p>
        <h2 className={styles.heading}>ユピテルのWebサイトで大切にしていること</h2>
        <div className={styles.cardGrid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="seo" className={styles.section}>
        <p className={styles.sectionLabel}>SEO</p>
        <h2 className={styles.heading}>「ユピテルは羽ばたく」で見つかるための検索対策</h2>
        <p className={styles.text}>
          Googleにページを正しく理解してもらうため、ユピテルの名称、ページの目的、検索されたい言葉を自然な文章の中に配置しています。
          さらに、検索結果やSNS共有で伝わるようにメタデータと構造化データも設定しています。
        </p>
        <div className={styles.strengthGrid}>
          {seoSteps.map((item, index) => (
            <div className={styles.strengthCard} key={item}>
              <span>SEO 0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.visualText}>
          <p className={styles.sectionLabel}>MESSAGE</p>
          <h2 className={styles.heading}>ユピテルは羽ばたく。言葉が、未来の入り口になる。</h2>
          <p className={styles.text}>
            検索で出会った人が、最初の数秒で「ここが探していた場所だ」と感じられるように。
            ユピテルは、短い言葉と読みやすい構成でブランドの印象を残します。
          </p>
        </div>
        <div className={styles.energyBox} aria-hidden="true">
          <div className={styles.energyCore}>羽</div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <p className={styles.sectionLabel}>FAQ</p>
        <h2 className={styles.heading}>よくある質問</h2>
        <div className={styles.flowList}>
          {faqs.map((faq, index) => (
            <article className={styles.flowItem} key={faq.question}>
              <span>{index + 1}</span>
              <div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <p className={styles.sectionLabel}>CONTACT</p>
        <h2 className={styles.contactTitle}>ユピテルを、もっと遠くまで。</h2>
        <p className={styles.contactText}>
          公開後は Google Search Console への登録、サイトマップ送信、独自ドメイン設定を行うことで、Googleに見つけてもらいやすくなります。
        </p>
        <a href="mailto:example@example.com" className={styles.contactButton}>
          ユピテルへ相談する
        </a>
      </section>
    </main>
  );
}
