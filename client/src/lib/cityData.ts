/**
 * City data for シン・世界時計
 * Design: Observatory / Planetarium aesthetic
 * Comprehensive database of 50+ world cities with timezone, stats, news, and challenges
 * Users can search and select cities freely
 */

export interface CityInfo {
  id: string;
  nameJa: string;
  nameEn: string;
  country: string;
  countryJa: string;
  timezone: string;
  utcOffset: string;
  lat: number;
  lng: number;
  area: string;
  population: string;
  laborForce: string;
  challenge: string;
  news: string[];
  accentColor: string;
  flag: string;
  /** Search keywords (hiragana, katakana, romaji, aliases) */
  searchKeys: string[];
}

/** Accent color palette — cycles through for variety */
const ACCENT_COLORS = [
  "oklch(0.65 0.20 15)",   // warm red
  "oklch(0.65 0.18 250)",  // blue
  "oklch(0.60 0.15 145)",  // green
  "oklch(0.65 0.18 300)",  // purple
  "oklch(0.65 0.15 185)",  // teal
  "oklch(0.70 0.16 55)",   // amber
  "oklch(0.62 0.18 340)",  // pink
  "oklch(0.68 0.14 220)",  // sky blue
  "oklch(0.60 0.16 120)",  // emerald
  "oklch(0.72 0.15 80)",   // gold
  "oklch(0.58 0.18 270)",  // indigo
  "oklch(0.66 0.14 160)",  // cyan
];

export function getAccentColor(index: number): string {
  return ACCENT_COLORS[index % ACCENT_COLORS.length];
}

export const allCities: CityInfo[] = [
  // ===== ASIA =====
  {
    id: "tokyo",
    nameJa: "東京",
    nameEn: "Tokyo",
    country: "Japan",
    countryJa: "日本",
    timezone: "Asia/Tokyo",
    utcOffset: "UTC+9",
    lat: 35.6762,
    lng: 139.6503,
    area: "2,194",
    population: "1,404万人",
    laborForce: "約810万人",
    challenge: "少子高齢化と首都直下型地震への備え",
    news: [
      "東京都の出生率が過去最低を更新、少子化対策の強化へ",
      "2025年度予算案で防災インフラ整備に重点配分",
      "都心部の再開発が加速、品川・渋谷エリアで大型プロジェクト"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇯🇵",
    searchKeys: ["とうきょう", "トウキョウ", "tokyo", "東京都", "japan"]
  },
  {
    id: "osaka",
    nameJa: "大阪",
    nameEn: "Osaka",
    country: "Japan",
    countryJa: "日本",
    timezone: "Asia/Tokyo",
    utcOffset: "UTC+9",
    lat: 34.6937,
    lng: 135.5023,
    area: "225",
    population: "275万人",
    laborForce: "約150万人",
    challenge: "万博後の経済持続と南海トラフ地震対策",
    news: [
      "2025年大阪・関西万博の来場者数が目標を上回るペース",
      "うめきた2期エリアが全面開業、新たな都市拠点に",
      "インバウンド観光客の急増で宿泊施設が不足"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇯🇵",
    searchKeys: ["おおさか", "オオサカ", "osaka", "大阪市", "大阪府"]
  },
  {
    id: "seoul",
    nameJa: "ソウル",
    nameEn: "Seoul",
    country: "South Korea",
    countryJa: "韓国",
    timezone: "Asia/Seoul",
    utcOffset: "UTC+9",
    lat: 37.5665,
    lng: 126.9780,
    area: "605",
    population: "950万人",
    laborForce: "約530万人",
    challenge: "住宅価格高騰と少子化の深刻化",
    news: [
      "ソウルの出生率が0.55に低下、世界最低水準を更新",
      "半導体産業への大規模投資計画を発表",
      "K-カルチャーの世界的影響力がさらに拡大"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇰🇷",
    searchKeys: ["そうる", "ソウル", "seoul", "korea", "韓国"]
  },
  {
    id: "beijing",
    nameJa: "北京",
    nameEn: "Beijing",
    country: "China",
    countryJa: "中国",
    timezone: "Asia/Shanghai",
    utcOffset: "UTC+8",
    lat: 39.9042,
    lng: 116.4074,
    area: "16,411",
    population: "2,189万人",
    laborForce: "約1,200万人",
    challenge: "大気汚染と不動産市場の低迷",
    news: [
      "北京のGDPが5兆元を突破、経済成長を維持",
      "AI産業の育成に重点投資、テックハブ化が加速",
      "冬季五輪施設の有効活用で観光振興を推進"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇨🇳",
    searchKeys: ["ぺきん", "ペキン", "beijing", "北京市", "中国", "china"]
  },
  {
    id: "shanghai",
    nameJa: "上海",
    nameEn: "Shanghai",
    country: "China",
    countryJa: "中国",
    timezone: "Asia/Shanghai",
    utcOffset: "UTC+8",
    lat: 31.2304,
    lng: 121.4737,
    area: "6,341",
    population: "2,489万人",
    laborForce: "約1,400万人",
    challenge: "人口過密と環境汚染への対応",
    news: [
      "上海自由貿易区の拡大で外国投資が増加",
      "EV産業が急成長、世界最大の生産拠点に",
      "浦東新区の再開発で国際金融センター機能を強化"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇨🇳",
    searchKeys: ["しゃんはい", "シャンハイ", "shanghai", "上海市"]
  },
  {
    id: "hongkong",
    nameJa: "香港",
    nameEn: "Hong Kong",
    country: "China (SAR)",
    countryJa: "中国（特別行政区）",
    timezone: "Asia/Hong_Kong",
    utcOffset: "UTC+8",
    lat: 22.3193,
    lng: 114.1694,
    area: "1,114",
    population: "750万人",
    laborForce: "約390万人",
    challenge: "政治的自治の縮小と人材流出",
    news: [
      "香港の金融市場が回復基調、IPO件数が増加",
      "グレーターベイエリア構想で深圳との連携強化",
      "観光業の回復が本格化、訪問者数がコロナ前水準に"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇭🇰",
    searchKeys: ["ほんこん", "ホンコン", "hongkong", "hong kong", "香港"]
  },
  {
    id: "taipei",
    nameJa: "台北",
    nameEn: "Taipei",
    country: "Taiwan",
    countryJa: "台湾",
    timezone: "Asia/Taipei",
    utcOffset: "UTC+8",
    lat: 25.0330,
    lng: 121.5654,
    area: "272",
    population: "264万人",
    laborForce: "約140万人",
    challenge: "地震リスクと中国との緊張関係",
    news: [
      "台湾の半導体産業が世界シェアを拡大",
      "台北メトロの新路線が開業、交通利便性が向上",
      "再生可能エネルギーへの転換を加速"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇹🇼",
    searchKeys: ["たいぺい", "タイペイ", "taipei", "台北市", "台湾", "taiwan"]
  },
  {
    id: "singapore",
    nameJa: "シンガポール",
    nameEn: "Singapore",
    country: "Singapore",
    countryJa: "シンガポール",
    timezone: "Asia/Singapore",
    utcOffset: "UTC+8",
    lat: 1.3521,
    lng: 103.8198,
    area: "734",
    population: "564万人",
    laborForce: "約370万人",
    challenge: "国土の狭さと外国人労働者への依存",
    news: [
      "シンガポール、世界都市ランキングで5位を維持",
      "グリーンファイナンスのハブとして存在感を強化",
      "AI・デジタル経済への投資を大幅拡大"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇸🇬",
    searchKeys: ["しんがぽーる", "シンガポール", "singapore"]
  },
  {
    id: "bangkok",
    nameJa: "バンコク",
    nameEn: "Bangkok",
    country: "Thailand",
    countryJa: "タイ",
    timezone: "Asia/Bangkok",
    utcOffset: "UTC+7",
    lat: 13.7563,
    lng: 100.5018,
    area: "1,569",
    population: "1,057万人",
    laborForce: "約580万人",
    challenge: "洪水リスクと交通渋滞の深刻化",
    news: [
      "バンコクの観光業が完全回復、過去最高の訪問者数",
      "BTS・MRTの延伸で都市交通網が拡大",
      "デジタルノマドの聖地として世界的に人気上昇"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇹🇭",
    searchKeys: ["ばんこく", "バンコク", "bangkok", "タイ", "thailand"]
  },
  {
    id: "mumbai",
    nameJa: "ムンバイ",
    nameEn: "Mumbai",
    country: "India",
    countryJa: "インド",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC+5:30",
    lat: 19.0760,
    lng: 72.8777,
    area: "603",
    population: "2,094万人",
    laborForce: "約900万人",
    challenge: "スラム問題と深刻な大気汚染",
    news: [
      "ムンバイの金融市場が活況、外国投資が急増",
      "メトロ新路線の開業で交通インフラが改善",
      "ボリウッド映画産業が国際的な影響力を拡大"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇮🇳",
    searchKeys: ["むんばい", "ムンバイ", "mumbai", "インド", "india", "ボンベイ", "bombay"]
  },
  {
    id: "delhi",
    nameJa: "デリー",
    nameEn: "Delhi",
    country: "India",
    countryJa: "インド",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC+5:30",
    lat: 28.7041,
    lng: 77.1025,
    area: "1,484",
    population: "3,290万人",
    laborForce: "約1,500万人",
    challenge: "世界最悪レベルの大気汚染と水不足",
    news: [
      "デリーの大気汚染対策として電気バスを大量導入",
      "インドのIT産業成長がデリー経済を牽引",
      "新都市計画で緑地面積の拡大を推進"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇮🇳",
    searchKeys: ["でりー", "デリー", "delhi", "ニューデリー", "new delhi", "インド", "india"]
  },
  {
    id: "jakarta",
    nameJa: "ジャカルタ",
    nameEn: "Jakarta",
    country: "Indonesia",
    countryJa: "インドネシア",
    timezone: "Asia/Jakarta",
    utcOffset: "UTC+7",
    lat: -6.2088,
    lng: 106.8456,
    area: "662",
    population: "4,200万人",
    laborForce: "約2,000万人",
    challenge: "地盤沈下と首都移転計画の遅延",
    news: [
      "ジャカルタが世界人口最多都市に（国連報告）",
      "新首都ヌサンタラへの移転計画が進行中",
      "デジタル経済の急成長で東南アジアのハブに"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇮🇩",
    searchKeys: ["じゃかるた", "ジャカルタ", "jakarta", "インドネシア", "indonesia"]
  },
  // ===== MIDDLE EAST =====
  {
    id: "dubai",
    nameJa: "ドバイ",
    nameEn: "Dubai",
    country: "UAE",
    countryJa: "アラブ首長国連邦",
    timezone: "Asia/Dubai",
    utcOffset: "UTC+4",
    lat: 25.2048,
    lng: 55.2708,
    area: "4,114",
    population: "367万人",
    laborForce: "約250万人",
    challenge: "外国人労働者への依存と猛暑対策",
    news: [
      "ドバイ、世界都市パワーインデックスで4位に躍進",
      "超高級不動産市場が活況、メガディール件数が過去最高",
      "AI・スマートシティ構想で中東のテックハブ化が加速"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇦🇪",
    searchKeys: ["どばい", "ドバイ", "dubai", "UAE", "アラブ"]
  },
  {
    id: "istanbul",
    nameJa: "イスタンブール",
    nameEn: "Istanbul",
    country: "Turkey",
    countryJa: "トルコ",
    timezone: "Europe/Istanbul",
    utcOffset: "UTC+3",
    lat: 41.0082,
    lng: 28.9784,
    area: "5,461",
    population: "1,584万人",
    laborForce: "約800万人",
    challenge: "地震リスクとインフレーション",
    news: [
      "イスタンブール、世界で最も訪問者の多い都市トップ5入り",
      "新イスタンブール空港の利用者数が急増",
      "歴史的建造物の修復プロジェクトが進行中"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇹🇷",
    searchKeys: ["いすたんぶーる", "イスタンブール", "istanbul", "トルコ", "turkey"]
  },
  // ===== EUROPE =====
  {
    id: "london",
    nameJa: "ロンドン",
    nameEn: "London",
    country: "United Kingdom",
    countryJa: "イギリス",
    timezone: "Europe/London",
    utcOffset: "UTC+0",
    lat: 51.5074,
    lng: -0.1278,
    area: "1,572",
    population: "961万人",
    laborForce: "約520万人",
    challenge: "Brexit後の経済調整と住宅不足",
    news: [
      "ロンドン、世界都市ランキングで首位を維持",
      "テムズ川沿いのグリーンインフラ整備が本格化",
      "フィンテック分野で欧州最大の投資額を記録"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇬🇧",
    searchKeys: ["ろんどん", "ロンドン", "london", "イギリス", "UK", "england"]
  },
  {
    id: "paris",
    nameJa: "パリ",
    nameEn: "Paris",
    country: "France",
    countryJa: "フランス",
    timezone: "Europe/Paris",
    utcOffset: "UTC+1",
    lat: 48.8566,
    lng: 2.3522,
    area: "105",
    population: "215万人",
    laborForce: "約120万人",
    challenge: "大気汚染と交通渋滞の慢性化",
    news: [
      "パリ五輪のレガシー施設が市民に開放、スポーツ振興へ",
      "15分都市構想の実現に向けた都市改造が進行中",
      "外国企業の対仏投資が政治不安の中でも堅調に推移"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇫🇷",
    searchKeys: ["ぱり", "パリ", "paris", "フランス", "france"]
  },
  {
    id: "berlin",
    nameJa: "ベルリン",
    nameEn: "Berlin",
    country: "Germany",
    countryJa: "ドイツ",
    timezone: "Europe/Berlin",
    utcOffset: "UTC+1",
    lat: 52.5200,
    lng: 13.4050,
    area: "892",
    population: "376万人",
    laborForce: "約200万人",
    challenge: "住宅不足とエネルギー転換の課題",
    news: [
      "ベルリンのスタートアップエコシステムが欧州トップ3に",
      "再生可能エネルギー比率が50%を突破",
      "文化・アート産業が都市経済の柱として成長"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇩🇪",
    searchKeys: ["べるりん", "ベルリン", "berlin", "ドイツ", "germany"]
  },
  {
    id: "madrid",
    nameJa: "マドリード",
    nameEn: "Madrid",
    country: "Spain",
    countryJa: "スペイン",
    timezone: "Europe/Madrid",
    utcOffset: "UTC+1",
    lat: 40.4168,
    lng: -3.7038,
    area: "604",
    population: "334万人",
    laborForce: "約180万人",
    challenge: "若年層の高い失業率と水不足",
    news: [
      "マドリード、欧州のテック投資先として注目度上昇",
      "再開発プロジェクトで都市の近代化が進行",
      "観光業が過去最高の収益を記録"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇪🇸",
    searchKeys: ["まどりーど", "マドリード", "madrid", "スペイン", "spain"]
  },
  {
    id: "rome",
    nameJa: "ローマ",
    nameEn: "Rome",
    country: "Italy",
    countryJa: "イタリア",
    timezone: "Europe/Rome",
    utcOffset: "UTC+1",
    lat: 41.9028,
    lng: 12.4964,
    area: "1,285",
    population: "287万人",
    laborForce: "約140万人",
    challenge: "インフラの老朽化と財政赤字",
    news: [
      "ローマ、2025年聖年で巡礼者が大幅増加",
      "コロッセオ周辺の歩行者天国化計画が進行",
      "イタリアのファッション産業がデジタル化を加速"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇮🇹",
    searchKeys: ["ろーま", "ローマ", "rome", "イタリア", "italy"]
  },
  {
    id: "amsterdam",
    nameJa: "アムステルダム",
    nameEn: "Amsterdam",
    country: "Netherlands",
    countryJa: "オランダ",
    timezone: "Europe/Amsterdam",
    utcOffset: "UTC+1",
    lat: 52.3676,
    lng: 4.9041,
    area: "219",
    population: "92万人",
    laborForce: "約50万人",
    challenge: "住宅価格の高騰と観光公害",
    news: [
      "アムステルダム、自転車インフラで世界をリード",
      "オーバーツーリズム対策として宿泊税を引き上げ",
      "サステナブル都市ランキングで上位を維持"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇳🇱",
    searchKeys: ["あむすてるだむ", "アムステルダム", "amsterdam", "オランダ", "netherlands"]
  },
  {
    id: "moscow",
    nameJa: "モスクワ",
    nameEn: "Moscow",
    country: "Russia",
    countryJa: "ロシア",
    timezone: "Europe/Moscow",
    utcOffset: "UTC+3",
    lat: 55.7558,
    lng: 37.6173,
    area: "2,562",
    population: "1,262万人",
    laborForce: "約700万人",
    challenge: "国際的孤立と経済制裁の影響",
    news: [
      "モスクワの都市開発プロジェクトが継続中",
      "ロシアのIT人材の国外流出が加速",
      "地下鉄網の拡張で交通利便性が向上"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇷🇺",
    searchKeys: ["もすくわ", "モスクワ", "moscow", "ロシア", "russia"]
  },
  {
    id: "zurich",
    nameJa: "チューリッヒ",
    nameEn: "Zurich",
    country: "Switzerland",
    countryJa: "スイス",
    timezone: "Europe/Zurich",
    utcOffset: "UTC+1",
    lat: 47.3769,
    lng: 8.5417,
    area: "88",
    population: "43万人",
    laborForce: "約25万人",
    challenge: "生活コストの高さと住宅不足",
    news: [
      "チューリッヒ、世界で最も住みやすい都市トップ3に",
      "フィンテック・暗号資産産業が成長を継続",
      "持続可能な都市開発で国際的な模範に"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇨🇭",
    searchKeys: ["ちゅーりっひ", "チューリッヒ", "zurich", "スイス", "switzerland"]
  },
  {
    id: "stockholm",
    nameJa: "ストックホルム",
    nameEn: "Stockholm",
    country: "Sweden",
    countryJa: "スウェーデン",
    timezone: "Europe/Stockholm",
    utcOffset: "UTC+1",
    lat: 59.3293,
    lng: 18.0686,
    area: "188",
    population: "98万人",
    laborForce: "約55万人",
    challenge: "移民統合と冬季の日照不足",
    news: [
      "ストックホルム、ユニコーン企業の輩出率で世界2位",
      "カーボンニュートラル目標の達成に向け順調に進行",
      "北欧デザインの国際的影響力がさらに拡大"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇸🇪",
    searchKeys: ["すとっくほるむ", "ストックホルム", "stockholm", "スウェーデン", "sweden"]
  },
  // ===== NORTH AMERICA =====
  {
    id: "newyork",
    nameJa: "ニューヨーク",
    nameEn: "New York",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/New_York",
    utcOffset: "UTC-5",
    lat: 40.7128,
    lng: -74.0060,
    area: "783",
    population: "841万人",
    laborForce: "約430万人",
    challenge: "住宅価格の高騰とホームレス問題",
    news: [
      "マンハッタンのオフィス回帰率が70%を超え、経済活性化の兆し",
      "地下鉄システムの大規模近代化計画を発表",
      "AI産業の集積が進み、テック企業の雇用が急増"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇺🇸",
    searchKeys: ["にゅーよーく", "ニューヨーク", "newyork", "new york", "NYC", "アメリカ"]
  },
  {
    id: "losangeles",
    nameJa: "ロサンゼルス",
    nameEn: "Los Angeles",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/Los_Angeles",
    utcOffset: "UTC-8",
    lat: 34.0522,
    lng: -118.2437,
    area: "1,302",
    population: "397万人",
    laborForce: "約210万人",
    challenge: "山火事リスクと水不足、ホームレス問題",
    news: [
      "ロサンゼルスの山火事被害が拡大、復興計画を策定",
      "2028年オリンピックに向けたインフラ整備が加速",
      "エンターテインメント産業がAI技術を積極導入"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇺🇸",
    searchKeys: ["ろさんぜるす", "ロサンゼルス", "losangeles", "los angeles", "LA"]
  },
  {
    id: "seattle",
    nameJa: "シアトル",
    nameEn: "Seattle",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/Los_Angeles",
    utcOffset: "UTC-8",
    lat: 47.6062,
    lng: -122.3321,
    area: "369",
    population: "75万人",
    laborForce: "約45万人",
    challenge: "住宅価格の急騰とホームレス問題",
    news: [
      "Amazon・Microsoftの本社があるテックハブとして成長継続",
      "シアトルの住宅価格が全米トップクラスの上昇率",
      "グリーンエネルギー政策で2030年カーボンニュートラルを目指す"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇺🇸",
    searchKeys: ["しあとる", "シアトル", "seattle", "ワシントン州"]
  },
  {
    id: "phoenix",
    nameJa: "フェニックス",
    nameEn: "Phoenix",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/Phoenix",
    utcOffset: "UTC-7",
    lat: 33.4484,
    lng: -112.0740,
    area: "1,341",
    population: "173万人",
    laborForce: "約90万人",
    challenge: "極端な猛暑と水資源の枯渇リスク",
    news: [
      "フェニックスの人口増加率が全米トップクラス",
      "半導体工場の誘致に成功、TSMCの新工場が稼働開始",
      "猛暑対策として都市緑化プロジェクトを大規模展開"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇺🇸",
    searchKeys: ["ふぇにっくす", "フェニックス", "phoenix", "アリゾナ", "arizona"]
  },
  {
    id: "chicago",
    nameJa: "シカゴ",
    nameEn: "Chicago",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/Chicago",
    utcOffset: "UTC-6",
    lat: 41.8781,
    lng: -87.6298,
    area: "606",
    population: "269万人",
    laborForce: "約140万人",
    challenge: "銃犯罪の多さと人口減少",
    news: [
      "シカゴの建築ツアーが世界的な観光資源として注目",
      "グリーンインフラ投資で都市の持続可能性を強化",
      "金融・商品取引の中心地としての地位を維持"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇺🇸",
    searchKeys: ["しかご", "シカゴ", "chicago", "イリノイ"]
  },
  {
    id: "sanfrancisco",
    nameJa: "サンフランシスコ",
    nameEn: "San Francisco",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/Los_Angeles",
    utcOffset: "UTC-8",
    lat: 37.7749,
    lng: -122.4194,
    area: "121",
    population: "87万人",
    laborForce: "約50万人",
    challenge: "生活コストの高さとテック企業の流出",
    news: [
      "AI産業の中心地として世界中から投資が集中",
      "ダウンタウンの空室率改善に向けた再活性化計画",
      "自動運転タクシーの商用サービスが拡大"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇺🇸",
    searchKeys: ["さんふらんしすこ", "サンフランシスコ", "sanfrancisco", "san francisco", "SF", "シリコンバレー"]
  },
  {
    id: "toronto",
    nameJa: "トロント",
    nameEn: "Toronto",
    country: "Canada",
    countryJa: "カナダ",
    timezone: "America/Toronto",
    utcOffset: "UTC-5",
    lat: 43.6532,
    lng: -79.3832,
    area: "630",
    population: "293万人",
    laborForce: "約160万人",
    challenge: "住宅価格の高騰と移民受け入れ体制",
    news: [
      "トロントの多文化共生モデルが世界的に注目",
      "AI研究のハブとして大学・企業の連携が強化",
      "不動産市場の調整局面で住宅供給政策を見直し"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇨🇦",
    searchKeys: ["とろんと", "トロント", "toronto", "カナダ", "canada"]
  },
  {
    id: "vancouver",
    nameJa: "バンクーバー",
    nameEn: "Vancouver",
    country: "Canada",
    countryJa: "カナダ",
    timezone: "America/Vancouver",
    utcOffset: "UTC-8",
    lat: 49.2827,
    lng: -123.1207,
    area: "115",
    population: "66万人",
    laborForce: "約36万人",
    challenge: "住宅価格の世界的な高さと薬物問題",
    news: [
      "バンクーバー、世界で最も住みやすい都市トップ5に",
      "映画・VFX産業が「ハリウッドノース」として成長",
      "気候変動対策で2030年グリーン目標を設定"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇨🇦",
    searchKeys: ["ばんくーばー", "バンクーバー", "vancouver", "カナダ"]
  },
  {
    id: "mexicocity",
    nameJa: "メキシコシティ",
    nameEn: "Mexico City",
    country: "Mexico",
    countryJa: "メキシコ",
    timezone: "America/Mexico_City",
    utcOffset: "UTC-6",
    lat: 19.4326,
    lng: -99.1332,
    area: "1,485",
    population: "2,181万人",
    laborForce: "約1,000万人",
    challenge: "大気汚染と水不足、治安問題",
    news: [
      "メキシコシティ、デジタルノマドの人気都市として急上昇",
      "ニアショアリング効果で製造業投資が急増",
      "歴史的中心部の修復プロジェクトが進行中"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇲🇽",
    searchKeys: ["めきしこしてぃ", "メキシコシティ", "mexicocity", "mexico city", "メキシコ"]
  },
  // ===== SOUTH AMERICA =====
  {
    id: "saopaulo",
    nameJa: "サンパウロ",
    nameEn: "São Paulo",
    country: "Brazil",
    countryJa: "ブラジル",
    timezone: "America/Sao_Paulo",
    utcOffset: "UTC-3",
    lat: -23.5505,
    lng: -46.6333,
    area: "1,521",
    population: "1,233万人",
    laborForce: "約650万人",
    challenge: "治安問題と経済格差",
    news: [
      "サンパウロのフィンテック産業が南米最大規模に成長",
      "都市交通の改善に向けたメトロ拡張計画が進行",
      "文化・美食の都市として国際的な評価が上昇"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇧🇷",
    searchKeys: ["さんぱうろ", "サンパウロ", "saopaulo", "sao paulo", "ブラジル", "brazil"]
  },
  {
    id: "buenosaires",
    nameJa: "ブエノスアイレス",
    nameEn: "Buenos Aires",
    country: "Argentina",
    countryJa: "アルゼンチン",
    timezone: "America/Argentina/Buenos_Aires",
    utcOffset: "UTC-3",
    lat: -34.6037,
    lng: -58.3816,
    area: "203",
    population: "306万人",
    laborForce: "約160万人",
    challenge: "ハイパーインフレと経済不安定",
    news: [
      "アルゼンチンの経済改革が進行、インフレ率が低下傾向",
      "ブエノスアイレスのタンゴ文化がユネスコ遺産に",
      "テック産業の成長で若年層の雇用が改善"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇦🇷",
    searchKeys: ["ぶえのすあいれす", "ブエノスアイレス", "buenosaires", "buenos aires", "アルゼンチン"]
  },
  // ===== OCEANIA =====
  {
    id: "sydney",
    nameJa: "シドニー",
    nameEn: "Sydney",
    country: "Australia",
    countryJa: "オーストラリア",
    timezone: "Australia/Sydney",
    utcOffset: "UTC+11",
    lat: -33.8688,
    lng: 151.2093,
    area: "12,368",
    population: "564万人",
    laborForce: "約290万人",
    challenge: "山火事リスクと水資源の確保",
    news: [
      "シドニー、世界最高の都市トップ10にランクイン",
      "再生可能エネルギーへの転換が加速、太陽光発電が急成長",
      "オーバーツーリズム対策として観光客分散策を導入"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇦🇺",
    searchKeys: ["しどにー", "シドニー", "sydney", "オーストラリア", "australia"]
  },
  {
    id: "melbourne",
    nameJa: "メルボルン",
    nameEn: "Melbourne",
    country: "Australia",
    countryJa: "オーストラリア",
    timezone: "Australia/Melbourne",
    utcOffset: "UTC+11",
    lat: -37.8136,
    lng: 144.9631,
    area: "9,993",
    population: "516万人",
    laborForce: "約270万人",
    challenge: "都市スプロールと交通インフラの不足",
    news: [
      "メルボルン、世界で最も住みやすい都市に再選出",
      "アート・カフェ文化が観光の主要な魅力に",
      "郊外鉄ネットワークの大規模拡張計画が承認"
    ],
    accentColor: "oklch(0.58 0.18 270)",
    flag: "🇦🇺",
    searchKeys: ["めるぼるん", "メルボルン", "melbourne", "オーストラリア"]
  },
  {
    id: "auckland",
    nameJa: "オークランド",
    nameEn: "Auckland",
    country: "New Zealand",
    countryJa: "ニュージーランド",
    timezone: "Pacific/Auckland",
    utcOffset: "UTC+13",
    lat: -36.8485,
    lng: 174.7633,
    area: "1,086",
    population: "171万人",
    laborForce: "約90万人",
    challenge: "住宅価格の高騰と交通渋滞",
    news: [
      "オークランド、生活の質ランキングで世界上位を維持",
      "テック産業の成長でスタートアップエコシステムが発展",
      "気候変動対策として沿岸部の防災強化を推進"
    ],
    accentColor: "oklch(0.66 0.14 160)",
    flag: "🇳🇿",
    searchKeys: ["おーくらんど", "オークランド", "auckland", "ニュージーランド", "new zealand"]
  },
  // ===== AFRICA =====
  {
    id: "cairo",
    nameJa: "カイロ",
    nameEn: "Cairo",
    country: "Egypt",
    countryJa: "エジプト",
    timezone: "Africa/Cairo",
    utcOffset: "UTC+2",
    lat: 30.0444,
    lng: 31.2357,
    area: "3,085",
    population: "2,128万人",
    laborForce: "約900万人",
    challenge: "人口過密と水資源の不足",
    news: [
      "新行政首都の建設が進行、政府機関の移転が開始",
      "エジプトの観光業が回復、ピラミッド訪問者が急増",
      "再生可能エネルギーへの投資で電力供給を安定化"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇪🇬",
    searchKeys: ["かいろ", "カイロ", "cairo", "エジプト", "egypt"]
  },
  {
    id: "nairobi",
    nameJa: "ナイロビ",
    nameEn: "Nairobi",
    country: "Kenya",
    countryJa: "ケニア",
    timezone: "Africa/Nairobi",
    utcOffset: "UTC+3",
    lat: -1.2921,
    lng: 36.8219,
    area: "696",
    population: "491万人",
    laborForce: "約220万人",
    challenge: "都市化による格差拡大とインフラ不足",
    news: [
      "ナイロビ、アフリカのテックハブ「シリコンサバンナ」として成長",
      "モバイル決済M-Pesaの普及率がさらに上昇",
      "気候変動対策として都市緑化プロジェクトを推進"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇰🇪",
    searchKeys: ["ないろび", "ナイロビ", "nairobi", "ケニア", "kenya"]
  },
  {
    id: "capetown",
    nameJa: "ケープタウン",
    nameEn: "Cape Town",
    country: "South Africa",
    countryJa: "南アフリカ",
    timezone: "Africa/Johannesburg",
    utcOffset: "UTC+2",
    lat: -33.9249,
    lng: 18.4241,
    area: "2,461",
    population: "471万人",
    laborForce: "約200万人",
    challenge: "水不足と経済格差、治安問題",
    news: [
      "ケープタウン、アフリカ最高の観光都市に選出",
      "再生可能エネルギー産業が急成長",
      "テック産業の成長でアフリカのイノベーション拠点に"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇿🇦",
    searchKeys: ["けーぷたうん", "ケープタウン", "capetown", "cape town", "南アフリカ"]
  },
  // ===== ADDITIONAL POPULAR CITIES =====
  {
    id: "honolulu",
    nameJa: "ホノルル",
    nameEn: "Honolulu",
    country: "United States",
    countryJa: "アメリカ（ハワイ）",
    timezone: "Pacific/Honolulu",
    utcOffset: "UTC-10",
    lat: 21.3069,
    lng: -157.8583,
    area: "177",
    population: "35万人",
    laborForce: "約20万人",
    challenge: "生活コストの高さと気候変動による海面上昇",
    news: [
      "ハワイの観光業が完全回復、持続可能な観光を推進",
      "再生可能エネルギー100%目標に向けた取り組みが加速",
      "住宅価格の高騰で地元住民の流出が課題に"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇺🇸",
    searchKeys: ["ほのるる", "ホノルル", "honolulu", "ハワイ", "hawaii"]
  },
  {
    id: "denver",
    nameJa: "デンバー",
    nameEn: "Denver",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/Denver",
    utcOffset: "UTC-7",
    lat: 39.7392,
    lng: -104.9903,
    area: "401",
    population: "72万人",
    laborForce: "約40万人",
    challenge: "急激な人口増加と水資源の不足",
    news: [
      "デンバーのテック産業が急成長、シリコンバレーからの移転が増加",
      "マイルハイシティの不動産市場が活況",
      "アウトドア観光とウェルネス産業が経済を牽引"
    ],
    accentColor: "oklch(0.58 0.18 270)",
    flag: "🇺🇸",
    searchKeys: ["でんばー", "デンバー", "denver", "コロラド", "colorado"]
  },
  {
    id: "miami",
    nameJa: "マイアミ",
    nameEn: "Miami",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/New_York",
    utcOffset: "UTC-5",
    lat: 25.7617,
    lng: -80.1918,
    area: "143",
    population: "44万人",
    laborForce: "約25万人",
    challenge: "海面上昇リスクとハリケーン被害",
    news: [
      "マイアミ、暗号資産・Web3産業のハブとして急成長",
      "ラテンアメリカとの経済的つながりが強化",
      "気候変動対策として大規模な防潮インフラを建設"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇺🇸",
    searchKeys: ["まいあみ", "マイアミ", "miami", "フロリダ", "florida"]
  },
  {
    id: "lisbon",
    nameJa: "リスボン",
    nameEn: "Lisbon",
    country: "Portugal",
    countryJa: "ポルトガル",
    timezone: "Europe/Lisbon",
    utcOffset: "UTC+0",
    lat: 38.7223,
    lng: -9.1393,
    area: "100",
    population: "55万人",
    laborForce: "約30万人",
    challenge: "住宅価格の高騰とジェントリフィケーション",
    news: [
      "リスボン、欧州のデジタルノマドの聖地として人気急上昇",
      "Web Summitの開催地として世界的なテックイベントを誘致",
      "歴史的街並みの保全と近代化の両立を推進"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇵🇹",
    searchKeys: ["りすぼん", "リスボン", "lisbon", "ポルトガル", "portugal"]
  },
  {
    id: "helsinki",
    nameJa: "ヘルシンキ",
    nameEn: "Helsinki",
    country: "Finland",
    countryJa: "フィンランド",
    timezone: "Europe/Helsinki",
    utcOffset: "UTC+2",
    lat: 60.1699,
    lng: 24.9384,
    area: "214",
    population: "66万人",
    laborForce: "約36万人",
    challenge: "高い生活コストと冬季の厳しい気候",
    news: [
      "フィンランド、世界幸福度ランキングで7年連続1位",
      "ヘルシンキのスタートアップエコシステムが急成長",
      "教育テクノロジーの輸出が新たな経済の柱に"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇫🇮",
    searchKeys: ["へるしんき", "ヘルシンキ", "helsinki", "フィンランド", "finland"]
  },
  {
    id: "vienna",
    nameJa: "ウィーン",
    nameEn: "Vienna",
    country: "Austria",
    countryJa: "オーストリア",
    timezone: "Europe/Vienna",
    utcOffset: "UTC+1",
    lat: 48.2082,
    lng: 16.3738,
    area: "415",
    population: "197万人",
    laborForce: "約100万人",
    challenge: "移民統合と住宅需要の増加",
    news: [
      "ウィーン、世界で最も住みやすい都市ランキング上位を維持",
      "音楽・文化産業が観光の主要な牽引力に",
      "公共交通機関の年間パスが格安で市民の移動を支援"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇦🇹",
    searchKeys: ["うぃーん", "ウィーン", "vienna", "オーストリア", "austria"]
  },
  {
    id: "barcelona",
    nameJa: "バルセロナ",
    nameEn: "Barcelona",
    country: "Spain",
    countryJa: "スペイン",
    timezone: "Europe/Madrid",
    utcOffset: "UTC+1",
    lat: 41.3874,
    lng: 2.1686,
    area: "101",
    population: "162万人",
    laborForce: "約85万人",
    challenge: "オーバーツーリズムと住宅価格の高騰",
    news: [
      "バルセロナ、観光客制限策を強化し持続可能な観光を推進",
      "スマートシティ技術の導入で都市管理を効率化",
      "テック産業の成長で南欧のイノベーション拠点に"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇪🇸",
    searchKeys: ["ばるせろな", "バルセロナ", "barcelona", "スペイン"]
  },
  {
    id: "kualalumpur",
    nameJa: "クアラルンプール",
    nameEn: "Kuala Lumpur",
    country: "Malaysia",
    countryJa: "マレーシア",
    timezone: "Asia/Kuala_Lumpur",
    utcOffset: "UTC+8",
    lat: 3.1390,
    lng: 101.6869,
    area: "243",
    population: "183万人",
    laborForce: "約100万人",
    challenge: "交通渋滞と急速な都市化による環境問題",
    news: [
      "クアラルンプール、東南アジアのデジタル経済ハブとして成長",
      "ペトロナスツインタワー周辺の再開発が進行",
      "ハラール産業の世界的な中心地としての地位を強化"
    ],
    accentColor: "oklch(0.66 0.14 160)",
    flag: "🇲🇾",
    searchKeys: ["くあらるんぷーる", "クアラルンプール", "kualalumpur", "kuala lumpur", "KL", "マレーシア", "malaysia"]
  },
  {
    id: "hanoi",
    nameJa: "ハノイ",
    nameEn: "Hanoi",
    country: "Vietnam",
    countryJa: "ベトナム",
    timezone: "Asia/Ho_Chi_Minh",
    utcOffset: "UTC+7",
    lat: 21.0285,
    lng: 105.8542,
    area: "3,329",
    population: "850万人",
    laborForce: "約450万人",
    challenge: "大気汚染と急速な都市化",
    news: [
      "ベトナムのGDP成長率がASEAN最高水準を維持",
      "ハノイの製造業がサプライチェーン多角化の恩恵を受ける",
      "都市鉄道の開業で交通インフラが大幅改善"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇻🇳",
    searchKeys: ["はのい", "ハノイ", "hanoi", "ベトナム", "vietnam"]
  },
];

/** Default cities shown on first visit */
export const DEFAULT_CITY_IDS = ["tokyo", "seattle", "phoenix", "london", "dubai", "delhi"];

/** Search cities by query (supports Japanese, English, hiragana, katakana) */
export function searchCities(query: string): CityInfo[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return allCities.filter(city =>
    city.nameJa.includes(q) ||
    city.nameEn.toLowerCase().includes(q) ||
    city.countryJa.includes(q) ||
    city.country.toLowerCase().includes(q) ||
    city.searchKeys.some(key => key.toLowerCase().includes(q))
  );
}
