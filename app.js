const STORAGE_KEY = "papa-parameter-mini-state-v1";

const BASE_STATS = ["筋力", "知力", "実行力", "素直さ", "察知力", "忍耐力"];
const NORMAL_SKILL_LIMIT = 4;
const TITLE_EQUIP_LIMIT = 3;
const STAT_RANKS = [
  { name: "見習い", min: 1, color: "#d29a18" },
  { name: "初級", min: 10, color: "#7fb35b" },
  { name: "中級", min: 20, color: "#28845d" },
  { name: "上級", min: 35, color: "#2f8fb0" },
  { name: "主婦", min: 55, color: "#8e66c9" },
  { name: "家族", min: 80, color: "#d36a8a" },
  { name: "神", min: 110, color: "#e0b33f" },
  { name: "仏", min: 145, color: "#f2df9b" },
];
const STAT_DISPLAY_CAP = STAT_RANKS.at(-1).min;
const RELATIVE_RELATION_OPTIONS = [
  "",
  "自分の父",
  "自分の母",
  "パートナーの父",
  "パートナーの母",
  "自分の祖父",
  "自分の祖母",
  "パートナーの祖父",
  "パートナーの祖母",
  "自分の兄弟姉妹",
  "パートナーの兄弟姉妹",
  "甥っ子",
  "姪っ子",
  "いとこ",
  "家族ぐるみの知人",
  "その他",
];
const SKILL_LIKE_MEMORIAL_NAMES = [
  "足でおしゃぶり拾い",
  "片手抱っこ二刀流",
  "パン屋に見えない粘土制作",
  "もう一回地獄耐性",
  "ママ会潜入成功",
];
const EVENT_MEMORIAL_SKILL_NAMES = [
  "子連れ旅行運用",
  "子連れ移動対応",
  "子連れ宿泊運用",
  "成長イベント記録",
  "誕生日準備",
  "節目のお参り準備",
  "園・学校イベント管理",
  "節目の見届け",
  "親族イベント参加",
];
const ROLE_SKILL_CATEGORY_NAMES = ["サポーター", "リーダー", "サポーターとリーダー", "リーダー/サポーター", "役割"];
const UNIQUE_SKILL_DEFINITIONS = [
  uniqueSkill("こどもちゃれんじ伴走", ["こどもちゃれんじ", "しまじろう"], ["教材", "ワーク", "一緒", "取り組", "やった", "続け", "毎日"]),
  uniqueSkill("DWE英語環境づくり", ["DWE", "ディズニー英語システム", "ディズニー英語"], ["教材", "聞いた", "流した", "英語", "レッスン", "取り組", "毎日"]),
  uniqueSkill("空手キッズ育成", ["空手", "からて"], ["習い事", "教室", "稽古", "練習", "型", "帯", "先生", "通う", "始め"]),
  uniqueSkill("合気道キッズ育成", ["合気道"], ["習い事", "教室", "稽古", "練習", "先生", "通う", "始め"]),
  uniqueSkill("スイミング伴走", ["スイミング", "水泳", "プール"], ["習い事", "教室", "レッスン", "練習", "級", "通う", "始め"]),
  uniqueSkill("ダンスレッスン伴走", ["ダンス"], ["習い事", "教室", "レッスン", "練習", "発表会", "通う", "始め"]),
  uniqueSkill("チア練習サポート", ["チア", "チアガール"], ["習い事", "教室", "レッスン", "練習", "発表会", "通う", "始め"]),
  uniqueSkill("ピアノ練習伴走", ["ピアノ"], ["習い事", "教室", "レッスン", "練習", "宿題", "発表会", "通う", "始め"]),
  uniqueSkill("バレエ見守り", ["バレエ"], ["習い事", "教室", "レッスン", "練習", "発表会", "通う", "始め"]),
  uniqueSkill("子役チャレンジ支援", ["子役", "オーディション"], ["習い事", "レッスン", "練習", "撮影", "応募", "通う", "始め"]),
  uniqueSkill("英語レッスン伴走", ["英語レッスン", "英会話"], ["習い事", "教室", "レッスン", "宿題", "練習", "通う", "始め"]),
  uniqueSkill("プログラミング伴走", ["プログラミング"], ["習い事", "教室", "レッスン", "宿題", "練習", "教材", "通う", "始め"]),
  uniqueSkill("テニス練習伴走", ["テニス"], ["習い事", "教室", "レッスン", "練習", "ラケット", "通う", "始め"]),
  uniqueSkill("サッカー練習伴走", ["サッカー"], ["習い事", "教室", "チーム", "スクール", "練習", "試合", "通う", "始め"]),
  uniqueSkill("野球練習伴走", ["野球"], ["習い事", "教室", "チーム", "スクール", "練習", "試合", "通う", "始め"]),
  uniqueSkill("体操教室伴走", ["体操"], ["習い事", "教室", "レッスン", "練習", "発表会", "通う", "始め"]),
  uniqueSkill("KUMON宿題伴走", ["KUMON", "クモン", "公文"], ["宿題", "プリント", "教室", "教材", "丸つけ", "一緒", "通う", "始め"]),
];
const DINOSAUR_COLLECTION = [
  dinosaurEntry("アパトサウルス", ["ブロントサウルス"]),
  dinosaurEntry("アルゼンチノサウルス"),
  dinosaurEntry("アロサウルス"),
  dinosaurEntry("アンキロサウルス", ["アンキロ"]),
  dinosaurEntry("イグアノドン"),
  dinosaurEntry("イクチオサウルス"),
  dinosaurEntry("ヴェロキラプトル", ["ラプトル"]),
  dinosaurEntry("エラスモサウルス"),
  dinosaurEntry("カルノタウルス"),
  dinosaurEntry("ガリミムス"),
  dinosaurEntry("ギガノトサウルス"),
  dinosaurEntry("クロノサウルス"),
  dinosaurEntry("ケツァルコアトルス"),
  dinosaurEntry("ケラトサウルス"),
  dinosaurEntry("サルコスクス"),
  dinosaurEntry("始祖鳥", ["アーケオプテリクス"]),
  dinosaurEntry("スティラコサウルス"),
  dinosaurEntry("ステゴサウルス", ["ステゴ"]),
  dinosaurEntry("スピノサウルス", ["スピノ"]),
  dinosaurEntry("タルボサウルス"),
  dinosaurEntry("ティタノサウルス"),
  dinosaurEntry("デイノケイルス"),
  dinosaurEntry("デイノニクス"),
  dinosaurEntry("ディプロドクス"),
  dinosaurEntry("ディモルフォドン"),
  dinosaurEntry("ティラノサウルス", ["ティラノ", "Tレックス", "Ｔレックス"]),
  dinosaurEntry("ディロフォサウルス"),
  dinosaurEntry("テリジノサウルス"),
  dinosaurEntry("トリケラトプス", ["トリケラ"]),
  dinosaurEntry("ニッポノサウルス"),
  dinosaurEntry("パキケファロサウルス", ["パキケファロ"]),
  dinosaurEntry("パラサウロロフス", ["パラサウロ"]),
  dinosaurEntry("バリオニクス"),
  dinosaurEntry("フクイサウルス"),
  dinosaurEntry("フクイラプトル"),
  dinosaurEntry("プテラノドン"),
  dinosaurEntry("ブラキオサウルス", ["ブラキオ"]),
  dinosaurEntry("プラテオサウルス"),
  dinosaurEntry("プレシオサウルス"),
  dinosaurEntry("プロトケラトプス"),
  dinosaurEntry("ペンタケラトプス"),
  dinosaurEntry("マイアサウラ"),
  dinosaurEntry("マジュンガサウルス"),
  dinosaurEntry("マメンチサウルス"),
  dinosaurEntry("ミクロラプトル"),
  dinosaurEntry("ミフネリュウ"),
  dinosaurEntry("メガロサウルス"),
  dinosaurEntry("モササウルス", ["モサ"]),
  dinosaurEntry("ユタラプトル"),
  dinosaurEntry("リオプレウロドン"),
];
const NAME_COLLECTIONS = [
  {
    id: "dinosaurs",
    label: "恐竜図鑑",
    shortLabel: "恐竜",
    themeWords: ["恐竜", "化石", "博物館", "恐竜の本", "恐竜の絵本"],
    skillName: "恐竜図鑑調査",
    skillTags: ["勉強", "恐竜", "図鑑"],
    category: "勉強",
    items: DINOSAUR_COLLECTION,
    titleThresholds: [
      { count: 1, title: "恐竜見習い" },
      { count: 3, title: "恐竜博士見習い" },
      { count: 5, title: "小さな古生物学者の相棒" },
      { count: 10, title: "恐竜図鑑を埋める親" },
      { count: 25, title: "恐竜図鑑中級者" },
      { count: 40, title: "恐竜博士の助手" },
      { count: DINOSAUR_COLLECTION.length, title: "恐竜図鑑コンプリート" },
    ],
  },
  {
    id: "vehicles",
    label: "乗り物図鑑",
    shortLabel: "乗り物",
    themeWords: ["乗り物", "新幹線", "電車", "車", "くるま", "バス", "飛行機", "船", "はたらく車"],
    skillName: "乗り物図鑑調査",
    skillTags: ["勉強", "乗り物", "図鑑"],
    category: "勉強",
    items: [
      nameEntry("新幹線"),
      nameEntry("電車"),
      nameEntry("竹馬"),
      nameEntry("モノレール"),
      nameEntry("バス"),
      nameEntry("タクシー"),
      nameEntry("車", ["くるま", "自動車"]),
      nameEntry("スポーツカー"),
      nameEntry("パトカー"),
      nameEntry("消防車"),
      nameEntry("救急車"),
      nameEntry("白バイ"),
      nameEntry("ゴミ収集車", ["ごみ収集車"]),
      nameEntry("トラック"),
      nameEntry("ダンプカー"),
      nameEntry("ミキサー車"),
      nameEntry("タンクローリー"),
      nameEntry("クレーン車"),
      nameEntry("ショベルカー"),
      nameEntry("ブルドーザー"),
      nameEntry("ロードローラー"),
      nameEntry("フォークリフト"),
      nameEntry("トラクター"),
      nameEntry("はしご車"),
      nameEntry("除雪車"),
      nameEntry("清掃車"),
      nameEntry("トレーラー"),
      nameEntry("リムジン"),
      nameEntry("一輪車"),
      nameEntry("自転車"),
      nameEntry("三輪車"),
      nameEntry("キックボード"),
      nameEntry("ベビーカー"),
      nameEntry("飛行機"),
      nameEntry("ヘリコプター"),
      nameEntry("ロケット"),
      nameEntry("船"),
      nameEntry("フェリー"),
      nameEntry("ヨット"),
      nameEntry("潜水艦"),
      nameEntry("ケーブルカー"),
      nameEntry("ロープウェイ"),
      nameEntry("観覧車"),
      nameEntry("メリーゴーランド"),
      nameEntry("ジェットコースター"),
      nameEntry("ゴーカート"),
      nameEntry("エレベーター"),
      nameEntry("エスカレーター"),
      nameEntry("バイク"),
      nameEntry("スクーター"),
    ],
    titleThresholds: [
      { count: 1, title: "乗り物見習い" },
      { count: 5, title: "まちの乗り物探検隊" },
      { count: 10, title: "はたらく車を見つける親" },
      { count: 25, title: "乗り物図鑑中級者" },
      { count: 50, title: "乗り物図鑑コンプリート" },
    ],
  },
  {
    id: "animals",
    label: "動物図鑑",
    shortLabel: "動物",
    themeWords: ["動物", "動物園", "犬", "猫", "ライオン", "ぞう", "ゾウ", "キリン", "たぬき", "ワシ"],
    skillName: "動物図鑑調査",
    skillTags: ["勉強", "動物", "図鑑"],
    category: "勉強",
    items: [
      nameEntry("犬", ["いぬ", "ワンワン"]),
      nameEntry("猫", ["ねこ", "にゃんこ"]),
      nameEntry("うさぎ", ["ウサギ"]),
      nameEntry("たぬき", ["タヌキ", "狸"]),
      nameEntry("モルモット"),
      nameEntry("リス"),
      nameEntry("ねずみ", ["ネズミ"]),
      nameEntry("馬", ["うま"]),
      nameEntry("牛", ["うし"]),
      nameEntry("豚", ["ぶた"]),
      nameEntry("羊", ["ひつじ"]),
      nameEntry("やぎ", ["ヤギ"]),
      nameEntry("ライオン"),
      nameEntry("トラ", ["虎"]),
      nameEntry("チーター"),
      nameEntry("ヒョウ"),
      nameEntry("ぞう", ["ゾウ", "象"]),
      nameEntry("キリン"),
      nameEntry("シマウマ"),
      nameEntry("カバ"),
      nameEntry("サイ"),
      nameEntry("ゴリラ"),
      nameEntry("チンパンジー"),
      nameEntry("オランウータン"),
      nameEntry("パンダ"),
      nameEntry("コアラ"),
      nameEntry("カンガルー"),
      nameEntry("カピバラ"),
      nameEntry("アルパカ"),
      nameEntry("ラクダ"),
      nameEntry("シカ", ["鹿"]),
      nameEntry("クマ"),
      nameEntry("ホッキョクグマ", ["白くま", "シロクマ"]),
      nameEntry("ペンギン"),
      nameEntry("アザラシ"),
      nameEntry("アシカ"),
      nameEntry("イルカ"),
      nameEntry("クジラ"),
      nameEntry("ラッコ"),
      nameEntry("カワウソ"),
      nameEntry("ペリカン"),
      nameEntry("フラミンゴ"),
      nameEntry("ワニ"),
      nameEntry("カメ"),
      nameEntry("ヘビ"),
      nameEntry("カエル"),
      nameEntry("フクロウ"),
      nameEntry("ワシ", ["鷲", "タカ", "鷹"]),
      nameEntry("ニワトリ"),
      nameEntry("キツネ"),
    ],
    titleThresholds: [
      { count: 1, title: "動物見習い" },
      { count: 5, title: "動物園を楽しむ親" },
      { count: 10, title: "いきもの観察係" },
      { count: 25, title: "動物図鑑中級者" },
      { count: 50, title: "動物図鑑コンプリート" },
    ],
  },
  {
    id: "bugs",
    label: "虫図鑑",
    shortLabel: "虫",
    themeWords: ["虫", "昆虫", "カブトムシ", "クワガタ", "ちょうちょ", "ダンゴムシ"],
    skillName: "虫図鑑調査",
    skillTags: ["勉強", "虫", "図鑑"],
    category: "勉強",
    items: [
      nameEntry("カブトムシ"),
      nameEntry("クワガタ", ["クワガタムシ"]),
      nameEntry("テントウムシ"),
      nameEntry("ダンゴムシ"),
      nameEntry("アリ"),
      nameEntry("ハチ"),
      nameEntry("チョウ", ["蝶", "ちょうちょ"]),
      nameEntry("ガ"),
      nameEntry("トンボ"),
      nameEntry("セミ"),
      nameEntry("バッタ"),
      nameEntry("コオロギ"),
      nameEntry("キリギリス"),
      nameEntry("カマキリ"),
      nameEntry("カミキリムシ"),
      nameEntry("タマムシ"),
      nameEntry("カナブン"),
      nameEntry("コガネムシ"),
      nameEntry("ホタル"),
      nameEntry("ゲンゴロウ"),
      nameEntry("タガメ"),
      nameEntry("アメンボ"),
      nameEntry("ミズスマシ"),
      nameEntry("オケラ"),
      nameEntry("ナナフシ"),
      nameEntry("ハナムグリ"),
      nameEntry("ゾウムシ"),
      nameEntry("ゴマダラカミキリ"),
      nameEntry("カメムシ"),
      nameEntry("アブ"),
      nameEntry("ブヨ"),
      nameEntry("ユスリカ"),
      nameEntry("蚊", ["カ"]),
      nameEntry("ハエ"),
      nameEntry("ゴキブリ"),
      nameEntry("シロアリ"),
      nameEntry("ノミ"),
      nameEntry("シラミ"),
      nameEntry("毛虫", ["けむし"]),
      nameEntry("青虫", ["あおむし"]),
      nameEntry("イモムシ"),
      nameEntry("サナギ"),
      nameEntry("幼虫", ["ようちゅう"]),
      nameEntry("成虫", ["せいちゅう"]),
      nameEntry("セミの抜け殻", ["蝉の抜け殻", "抜け殻"]),
      nameEntry("アゲハチョウ"),
      nameEntry("モンシロチョウ"),
      nameEntry("オニヤンマ"),
      nameEntry("ギンヤンマ"),
      nameEntry("スズメバチ"),
    ],
    titleThresholds: [
      { count: 1, title: "虫見習い" },
      { count: 5, title: "公園の小さな発見係" },
      { count: 10, title: "虫探しに付き合う親" },
      { count: 25, title: "虫図鑑中級者" },
      { count: 50, title: "虫図鑑コンプリート" },
    ],
  },
  {
    id: "foods",
    label: "料理名図鑑",
    shortLabel: "料理",
    themeWords: ["料理", "ごはん", "食べ物", "メニュー"],
    skillName: "料理名図鑑調査",
    skillTags: ["料理", "図鑑"],
    category: "料理",
    items: [
      nameEntry("おにぎり"),
      nameEntry("オムライス"),
      nameEntry("カレーライス", ["カレー"]),
      nameEntry("チャーハン"),
      nameEntry("牛丼"),
      nameEntry("親子丼"),
      nameEntry("かつ丼", ["カツ丼"]),
      nameEntry("卵かけご飯", ["TKG"]),
      nameEntry("唐揚げ", ["からあげ"]),
      nameEntry("ハンバーグ"),
      nameEntry("とんかつ", ["トンカツ"]),
      nameEntry("焼肉"),
      nameEntry("焼き鳥"),
      nameEntry("豚の生姜焼き", ["生姜焼き"]),
      nameEntry("肉じゃが"),
      nameEntry("コロッケ"),
      nameEntry("チキンナゲット"),
      nameEntry("ミートボール"),
      nameEntry("ラーメン"),
      nameEntry("カレーうどん"),
      nameEntry("うどん"),
      nameEntry("そば", ["蕎麦"]),
      nameEntry("焼きそば"),
      nameEntry("そうめん"),
      nameEntry("ナポリタン"),
      nameEntry("寿司"),
      nameEntry("刺身"),
      nameEntry("焼鮭", ["焼き鮭"]),
      nameEntry("エビフライ"),
      nameEntry("おでん"),
      nameEntry("お好み焼き", ["お好み焼き(関西風)", "お好み焼き(広島風)"]),
      nameEntry("たこ焼き"),
      nameEntry("焼き餃子", ["餃子"]),
      nameEntry("麻婆豆腐"),
      nameEntry("天ぷら"),
      nameEntry("目玉焼き"),
      nameEntry("グラタン"),
      nameEntry("クリームシチュー", ["シチュー"]),
      nameEntry("サンドイッチ"),
      nameEntry("ハンバーガー"),
      nameEntry("ピザ"),
      nameEntry("ホットケーキ"),
      nameEntry("ホットドッグ"),
      nameEntry("フレンチトースト"),
      nameEntry("メロンパン"),
      nameEntry("カレーパン"),
      nameEntry("フライドポテト", ["ポテト"]),
      nameEntry("味噌汁", ["お味噌汁"]),
      nameEntry("豚汁"),
      nameEntry("コーンポタージュ"),
    ],
  },
  {
    id: "sweets",
    label: "スイーツ図鑑",
    shortLabel: "スイーツ",
    themeWords: ["スイーツ", "ケーキ", "お菓子", "甘い"],
    skillName: "スイーツ図鑑調査",
    skillTags: ["料理", "スイーツ", "図鑑"],
    category: "料理",
    items: [
      nameEntry("ショートケーキ"),
      nameEntry("チョコミント"),
      nameEntry("チーズケーキ"),
      nameEntry("ロールケーキ"),
      nameEntry("パンケーキ"),
      nameEntry("プリン"),
      nameEntry("ゼリー"),
      nameEntry("ヨーグルト"),
      nameEntry("アイス", ["アイスクリーム"]),
      nameEntry("ソフトクリーム"),
      nameEntry("かき氷"),
      nameEntry("パフェ"),
      nameEntry("クレープ"),
      nameEntry("ドーナツ"),
      nameEntry("シュークリーム"),
      nameEntry("フィナンシェ"),
      nameEntry("クッキー"),
      nameEntry("ビスケット"),
      nameEntry("チョコレート"),
      nameEntry("グミ"),
      nameEntry("キャンディ"),
      nameEntry("ラムネ"),
      nameEntry("せんべい"),
      nameEntry("ポテトチップス"),
      nameEntry("バニラアイス"),
      nameEntry("たまごボーロ"),
      nameEntry("ウエハース"),
      nameEntry("マシュマロ"),
      nameEntry("キャラメル"),
      nameEntry("カステラ"),
      nameEntry("たい焼き"),
      nameEntry("どら焼き"),
      nameEntry("団子"),
      nameEntry("大福"),
      nameEntry("おはぎ"),
      nameEntry("わらび餅"),
      nameEntry("まんじゅう", ["饅頭"]),
      nameEntry("マドレーヌ"),
      nameEntry("金平糖", ["こんぺいとう"]),
      nameEntry("綿あめ", ["わたあめ"]),
      nameEntry("りんご飴", ["りんごあめ"]),
      nameEntry("ベビーカステラ"),
      nameEntry("チュロス"),
      nameEntry("ポップコーン"),
      nameEntry("ガム"),
      nameEntry("ミルクせんべい"),
      nameEntry("モンブラン"),
      nameEntry("ソーダアイス"),
      nameEntry("ブルーハワイ"),
      nameEntry("フルーツ飴", ["フルーツあめ"]),
    ],
    titleThresholds: [
      { count: 1, title: "スイーツ見習い" },
      { count: 5, title: "おやつ時間の案内人" },
      { count: 10, title: "甘いもの図鑑を埋める親" },
      { count: 25, title: "スイーツ図鑑中級者" },
      { count: 50, title: "スイーツ図鑑コンプリート" },
    ],
  },
  {
    id: "fashion",
    label: "おしゃれ図鑑",
    shortLabel: "おしゃれ",
    themeWords: ["おしゃれ", "服", "化粧", "メイク", "髪型", "かわいい", "可愛い", "似合う"],
    skillName: "おしゃれ図鑑調査",
    skillTags: ["勉強", "おしゃれ", "図鑑"],
    category: "勉強",
    items: [
      nameEntry("ワンピース"),
      nameEntry("スカート"),
      nameEntry("ズボン", ["パンツ"]),
      nameEntry("Tシャツ", ["ティーシャツ"]),
      nameEntry("ブラウス"),
      nameEntry("シャツ"),
      nameEntry("パーカー"),
      nameEntry("カーディガン"),
      nameEntry("セーター"),
      nameEntry("コート"),
      nameEntry("ジャンパー"),
      nameEntry("レギンス"),
      nameEntry("タイツ"),
      nameEntry("靴下", ["くつした"]),
      nameEntry("スニーカー"),
      nameEntry("サンダル"),
      nameEntry("長靴", ["ながぐつ"]),
      nameEntry("帽子", ["ぼうし"]),
      nameEntry("リボン"),
      nameEntry("ヘアゴム"),
      nameEntry("ヘアピン"),
      nameEntry("カチューシャ"),
      nameEntry("ポニーテール"),
      nameEntry("ツインテール"),
      nameEntry("三つ編み", ["みつあみ"]),
      nameEntry("お団子ヘア", ["おだんごヘア", "お団子"]),
      nameEntry("前髪", ["まえがみ"]),
      nameEntry("寝ぐせ", ["寝癖", "ねぐせ"]),
      nameEntry("爪切り", ["つめきり"]),
      nameEntry("爪みがき", ["つめみがき"]),
      nameEntry("ハンドクリーム"),
      nameEntry("リップクリーム"),
      nameEntry("日焼け止め", ["ひやけどめ"]),
      nameEntry("香水", ["こうすい"]),
      nameEntry("口紅", ["くちべに"]),
      nameEntry("チーク"),
      nameEntry("アイシャドウ"),
      nameEntry("マニキュア"),
      nameEntry("ネイル"),
      nameEntry("鏡", ["かがみ"]),
      nameEntry("ポーチ"),
      nameEntry("バッグ"),
      nameEntry("イヤリング"),
      nameEntry("ネックレス"),
      nameEntry("ブレスレット"),
      nameEntry("指輪", ["ゆびわ"]),
      nameEntry("ハンカチ"),
      nameEntry("パジャマ"),
      nameEntry("水着", ["みずぎ"]),
      nameEntry("ラッシュガード"),
    ],
    titleThresholds: [
      { count: 1, title: "おしゃれ見習い" },
      { count: 5, title: "似合うを見つける親" },
      { count: 10, title: "身だしなみ観察係" },
      { count: 25, title: "おしゃれ図鑑中級者" },
      { count: 50, title: "おしゃれ図鑑コンプリート" },
    ],
  },
];

const HOME_SKILL_NAME_LIST = [
  "炊飯ルーティン",
  "食材下ごしらえ",
  "作り置き運用",
  "離乳食ストック作成",
  "食事提供",
  "リクエスト料理対応",
  "定番ごはん化",
  "生活導線リフォーム",
  "麦茶補給ライン",
  "洗い物完了",
  "食材買い出し",
  "おやつ調達",
  "消耗品補給",
  "買い忘れ防止",
  "冷蔵庫在庫管理",
  "ゴミ捨て運用",
  "おむつ処理",
  "うんち処理",
  "水回り掃除",
  "お風呂掃除",
  "掃除機運用",
  "おもちゃ片付け",
  "絵本整理",
  "制作物整理",
  "洗濯ルーティン",
  "洗濯物たたみ",
  "通園通学準備",
  "シーツ対応",
  "収納導線づくり",
  "薬収納管理",
];

const DAILY_SKILL_NAME_LIST = [
  "日々の育児ログ",
  "ピヨログ記録",
  "オムツ記録",
  "うんち記録",
  "ミルク記録",
  "離乳食記録",
  "睡眠記録",
  "体調メモ",
  "連絡帳チェック",
  "保育園アプリ確認",
  "朝の支度ルーティン",
  "夜の寝る前ルーティン",
  "帰宅後ルーティン",
  "お風呂前後の流れ",
  "歯磨き声かけ",
  "着替え声かけ",
  "忘れ物チェック",
  "持ち物補充",
  "明日の準備",
  "家族スケジュール確認",
  "写真を残す",
  "動画を残す",
  "成長メモ",
  "小さな変化に気づく",
  "できたこと記録",
  "しんどさの言語化",
  "ありがとう記録",
  "ごめんね記録",
  "寝ます宣言",
  "今日も生きた",
];

const WORK_SKILL_NAME_LIST = [
  "定時帰宅チャレンジ",
  "急ぎ帰宅判断",
  "残業耐久",
  "仕事切り上げ判断",
  "育児のための休み申請",
  "子どもの病欠対応",
  "保育園呼び出し対応",
  "朝の出勤準備突破",
  "在宅勤務と育児両立",
  "仕事前の育児タスク処理",
  "育休取得準備",
  "育休中の職場調整",
  "復職準備",
  "復職後リズム調整",
  "職場への育児共有",
  "上司相談",
  "同僚連携",
  "引き継ぎ整理",
  "仕事量調整",
  "スケジュール防衛",
  "メンタル切り替え",
  "仕事愚痴の言語化",
  "疲労帰宅からの合流",
  "帰宅後パパママモード起動",
  "休日出勤ダメージ処理",
  "出張・外出調整",
  "仕事道具管理",
  "通勤中の家族連絡",
  "収入維持プレッシャー耐性",
  "働く親の段取り力",
];

const initialState = {
  level: 1,
  exp: 0,
  hp: 30,
  maxHp: 30,
  mp: 30,
  maxMp: 30,
  stats: Object.fromEntries(BASE_STATS.map((name) => [name, 1])),
  skills: [],
  equippedSkillIds: [],
  activeSkillCategory: "",
  expandedSkillCategories: [],
  currentView: "home",
  nameCollections: {},
  expandedNameCollections: [],
  dinosaurs: {},
  titles: [],
  selectedTitle: "",
  selectedTitles: [],
  titleSources: {},
  roles: { leader: 0, supporter: 0 },
  specialRoll: null,
  setupComplete: false,
  familyProfile: {
    children: [{ nickname: "", gender: "", birthday: "", relation: "長女" }],
    selfCall: "",
    partnerCall: "ママ",
    relatives: [],
  },
  logs: [],
  lastSleepAt: null,
};

let state = loadState();
if (!state.setupComplete) state.currentView = "settings";
let growthPopupSteps = [];
let growthPopupIndex = 0;

const $ = (id) => document.getElementById(id);

const SKILL_CATEGORIES = [
  {
    name: "家事",
    words: [
      "家事",
      "料理",
      "ミルク",
      "離乳食",
      "食事",
      "ごはん",
      "ご飯",
      "炊飯",
      "作り置き",
      "冷凍",
      "ストック",
      "買い物",
      "買い出し",
      "買い忘れ",
      "リマインダー",
      "消耗品",
      "ラップ",
      "アルミホイル",
      "洗剤",
      "洗濯槽",
      "シャンプー",
      "リンス",
      "ボディーソープ",
      "掃除",
      "ごみ",
      "ゴミ",
      "洗濯",
      "収納",
      "片付け",
      "模様替え",
      "レイアウト",
      "導線",
    ],
  },
  {
    name: "料理",
    words: [
      "料理",
      "ミルク",
      "離乳食",
      "食事",
      "ごはん",
      "幼児食",
      "弁当",
      "おにぎり",
      "コンビニ飯",
      "冷凍",
      "炊飯",
      "おかゆ",
      "がゆ",
      "ペースト",
      "スープ",
      "ケーキ",
      "包丁",
      "まな板",
      "味噌汁",
      "レンジ",
      "オーブン",
      "食器",
      "洗い物",
      "お茶",
      "麦茶",
      "白湯",
      "やかん",
      "買い物",
      "おやつ",
      "食卓",
      "野菜",
      "煮",
      "そぼろ",
      "作り置き",
      "ストック",
      "カップラーメン",
      "カップスープ",
      "冷凍食品",
      "冷凍保存",
      "10倍がゆ",
      "7倍がゆ",
      "5倍がゆ",
      "倍がゆ",
      "お味噌汁",
      "ミルクを買う",
      "離乳食を買う",
    ],
  },
  {
    name: "遊び",
    words: [
      "遊び",
      "鬼ごっこ",
      "かけっこ",
      "かくれんぼ",
      "ごっこ",
      "おもちゃ",
      "ゲーム",
      "映画",
      "映画館",
      "ショー",
      "ヒーローショー",
      "キャラクターショー",
      "アンパンマン",
      "プリキュア",
      "仮面ライダー",
      "ヒーロー",
      "ぬいぐるみ",
      "祭り",
      "プール",
      "海",
      "ダンス",
      "歌",
      "ボール",
      "体操",
      "高い高い",
      "人間遊具",
      "組体操",
      "のしかかり",
      "肩車",
      "追いかけ",
      "公園",
      "ブランコ",
      "ユニバ",
      "USJ",
      "ディズニー",
      "ディズニーランド",
      "ディズニーシー",
      "アンパンマンミュージアム",
      "遊園地",
      "創作あそび",
      "粘土",
    ],
  },
  {
    name: "親族",
    words: [
      "親族",
      "親戚",
      "実家",
      "義実家",
      "家族行事",
      "甥",
      "姪",
      "甥っ子",
      "姪っ子",
      "預か",
      "預け",
      "一升餅",
      "選び取り",
      "祖父",
      "祖母",
      "お母さん",
      "手伝",
      "LINE",
      "ライン",
      "みてね",
      "写真",
      "動画",
      "遠隔コミュニケーション",
      "親戚交友力",
    ],
  },
  {
    name: "夫婦",
    words: [
      "夫婦",
      "妻",
      "夫",
      "ハグ",
      "ありがとう",
      "ごめん",
      "不満",
      "お酒",
      "デート",
      "息抜き",
      "結婚記念日",
      "2人でお出かけ",
      "二人でお出かけ",
      "子供を預けて",
      "子どもを預けて",
      "楽しみ",
      "可愛い",
      "かわいい",
      "かっこいい",
      "素敵",
      "褒め",
      "会話",
      "思い出",
      "休息",
      "ひとり時間",
      "予定",
      "役割分担",
    ],
  },
  {
    name: "親子",
    words: ["親子", "娘", "息子", "大好き", "嫌い", "おんぶ", "抱っこ", "だっこ", "抱き上げ", "お出かけ", "ハグ", "ぎゅー", "突進", "飛びつ"],
  },
  {
    name: "育児",
    words: [
      "育児",
      "寝かしつけ",
      "抱っこ",
      "おむつ",
      "オムツ",
      "うんち",
      "ウンチ",
      "母乳",
      "混合育児",
      "お昼寝",
      "夜泣き",
      "泣き",
      "新生児",
      "赤ちゃん",
      "産後",
      "ピヨログ",
      "見守り",
      "ワンオペ",
      "育児ログ",
      "保育園",
      "学校",
      "送迎",
      "体温",
      "薬",
      "病院",
      "予防接種",
      "爪切り",
      "歯磨き",
      "お風呂",
      "服",
      "着替え",
      "お漏らし",
      "シーツ",
      "虫よけ",
      "日焼け止め",
      "アレルギー",
      "連絡帳",
      "忘れ物",
      "通園",
      "通学",
      "習い事",
      "レッスン",
      "スイミング",
      "ピアノ",
      "習字",
      "塾",
      "持ち物",
    ],
  },
  {
    name: "家計設計",
    words: [
      "家計",
      "NISA",
      "iDeCo",
      "iDECO",
      "iDeCo",
      "買い物",
      "自炊",
      "節約",
      "無駄遣い",
      "家計簿",
      "銀行",
      "貯金",
      "家賃",
      "ローン",
      "給付金",
      "クーポン",
      "福利厚生",
      "自治体",
      "育児センター",
      "支援センター",
    ],
  },
  {
    name: "仕事",
    words: ["仕事", "残業", "早く帰", "急いで帰", "休み申請", "病気", "看病", "育休", "育児休業", "仕事復帰", "出勤", "人間関係", "仕事整理", "引き継ぎ", "調整", "切替"],
  },
  {
    name: "掃除",
    words: [
      "掃除",
      "ごみ",
      "ゴミ",
      "おむつ",
      "オムツ",
      "うんち",
      "ウンチ",
      "処理",
      "分別",
      "ゴミ箱",
      "回収",
      "ペットボトル",
      "缶",
      "瓶",
      "燃えないごみ",
      "大型家具",
      "ゴミ袋",
      "ポリ袋",
      "掃除機",
      "クイックル",
      "雑巾",
      "風呂掃除",
      "水回り",
      "おもちゃの片付け",
      "片付け",
      "絵本整理",
      "絵本の整理",
      "子供の制作物",
      "子どもの制作物",
      "制作物",
    ],
  },
  {
    name: "洗濯",
    words: ["洗濯", "ドラム式", "外干し", "外ぼし", "畳む", "たたむ", "直す", "しまう", "竿", "紐", "ハンガー", "カーテン", "ベットマット", "ベッドマット", "ぬいぐるみ", "水通し", "タグ", "ワッペン", "雑巾作り"],
  },
  {
    name: "収納",
    words: ["収納", "棚", "仕切り", "タンス", "壁掛け", "ウォールポケット", "洗濯かご", "おもちゃ箱", "ハンガーサイズ", "薬の収納"],
  },
  {
    name: "勉強",
    words: [
      "勉強",
      "学び",
      "宿題",
      "ドリル",
      "音読",
      "丸つけ",
      "プリント",
      "習い事の宿題",
      "習い事宿題",
      "練習を見",
      "家で練習",
      "レッスンの復習",
      "絵本",
      "読み聞かせ",
      "英語",
      "タブレット",
      "映画",
      "ブロック",
      "粘土",
      "お絵描き",
      "文字",
      "数字",
      "本",
      "漫画",
      "アニメ",
      "ニュース",
      "NHK",
      "実験",
      "科学",
      "国語",
      "算数",
      "計算",
      "お金",
      "お金の計算",
      "レジ",
      "おままごと",
      "お化粧",
      "おしゃれ",
      "なぜなぜ",
    ],
  },
  {
    name: "イベント",
    words: [
      "イベント",
      "旅行",
      "ユニバ",
      "USJ",
      "ディズニーランド",
      "ディズニーシー",
      "ディズニー",
      "アンパンマンミュージアム",
      "遊園地",
      "テーマパーク",
      "動物園",
      "水族館",
      "科学館",
      "博物館",
      "キャンプ",
      "旅館",
      "ホテル",
      "イオンモール",
      "ショッピングモール",
      "映画館",
      "ショー",
      "キャラクターショー",
      "ヒーローショー",
      "舞台",
      "遠征",
      "遠出",
      "誕生日",
      "お宮参り",
      "運動会",
      "参観",
      "出産",
      "保育園準備",
      "学校準備",
      "入学",
      "卒業",
      "入園",
      "卒園",
      "記念",
    ],
  },
  {
    name: "毎日の積み重ね",
    words: ["生活", "日常", "記録", "管理", "改善", "回復", "自己把握", "基礎", "毎日", "積み重ね"],
  },
  {
    name: "ユニーク",
    words: ["ユニーク", "習い事", "教室", "レッスン", "教材", "ワーク", "練習", "宿題", "こどもちゃれんじ", "DWE", "KUMON", "クモン"],
  },
];

const SKILL_CATEGORY_DISPLAY_ORDER = [
  "育児",
  "毎日の積み重ね",
  "親子",
  "夫婦",
  "家事",
  "遊び",
  "勉強",
  "仕事",
  "家計設計",
  "親族",
  "イベント",
  "ユニーク",
];

const SKILL_BOOK_CANDIDATES = {
  家事: HOME_SKILL_NAME_LIST,
  毎日の積み重ね: DAILY_SKILL_NAME_LIST,
  仕事: WORK_SKILL_NAME_LIST,
  料理: [
    "ミルク補給ライン",
    "離乳食ストック作成",
    "離乳食段階調整",
    "食材下ごしらえ",
    "炊飯ルーティン",
    "おにぎり運用",
    "麦茶補給ライン",
    "白湯準備",
    "食器準備",
    "食後片付け",
    "洗い物完了",
    "おやつ調達",
    "買い物補給",
    "食材観察ナビ",
    "汁物で整える",
    "味噌汁ライン",
    "包丁まな板オペレーション",
    "調理家電活用",
    "定番ごはん化",
    "リクエスト料理対応",
    "冷凍ストック管理",
    "作り置き設計",
    "週次ごはんルーティン",
    "幼児食調整",
    "無理しない食事判断",
    "コンビニ飯判断",
    "冷凍食品活用",
    "記念日ケーキ制作",
    "食卓インフラ運用",
    "子どもごはん運用",
  ],
  遊び: [
    "鬼ごっこ対応",
    "かけっこ伴走",
    "公園あそび運用",
    "ブランコ押し職人",
    "すべり台見守り",
    "親子すべり台",
    "ジャングルジム見守り",
    "ハシゴ登りサポート",
    "砂場あそび対応",
    "地面お絵描き",
    "かくれんぼ演出",
    "ごっこ設定に乗る",
    "おままごと参加",
    "積み木建築サポート",
    "水遊び安全管理",
    "海あそび対応",
    "創作あそび",
    "全身ダンス参加",
    "歌あそび参加",
    "キャッチボール伴走",
    "サッカーあそび",
    "ドッジボール対応",
    "バスケバウンド練習",
    "高い高い担当",
    "肩車運用",
    "人間遊具マスター",
    "もう一回対応力",
    "帰宅時間管理",
    "公園撤収オペレーション",
    "切り上げ管理",
    "キックボード練習",
    "シャボン玉あそび",
    "乗り物練習サポート",
    "大型遊具攻略",
  ],
  親族: [
    "親族LINE返信",
    "遠隔コミュニケーション",
    "みてね更新",
    "写真動画共有",
    "親族感謝伝達",
    "手伝ってもらう素直さ",
    "親戚交友力",
    "プレゼント受け取り対応",
    "祖父母サポート受け取り",
    "子ども預け連携",
    "親族食事会対応",
    "自分実家訪問",
    "パートナー実家訪問",
    "親族あいさつ運用",
    "お祝い段取り",
    "親族訪問準備",
    "親族行事連携",
    "甥っ子姪っ子交流",
    "いとこ遊び調整",
    "親族間スケジュール調整",
    "内祝い・お返し管理",
    "親族写真整理",
    "子どもの呼び名共有",
    "親族への説明力",
    "家族間クッション役",
    "義実家距離感調整",
    "実家距離感調整",
    "頼る判断力",
    "誕生日お礼連絡",
    "いただきもの管理",
  ],
  夫婦: [
    "ありがとう伝達",
    "ごめんね伝達",
    "今日の共有",
    "家事育児の相談",
    "愚痴の受け止め",
    "しんどさ共有",
    "予定すり合わせ",
    "役割分担調整",
    "夫婦ハグ回復",
    "魅力を言葉にする",
    "好きの伝達",
    "褒め方調整",
    "夫婦の冗談共有",
    "寝る前会話",
    "相手の休息支援",
    "自分の休息確保",
    "夫婦デート確保",
    "子ども預けデート",
    "結婚記念日運用",
    "誕生日お祝い",
    "お酒時間共有",
    "写真と思い出共有",
    "昔の写真を味わう",
    "不満の話し合い",
    "仲直り運用",
    "ひとり時間の確保",
    "夫婦の金銭相談",
    "将来の相談",
    "チーム夫婦運用",
    "気持ちの言語化",
  ],
  育児: [
    "ミルク準備",
    "おむつ替え",
    "うんち対応",
    "着替え対応",
    "寝かしつけ",
    "夜泣き対応",
    "抱っこで落ち着かせる",
    "お昼寝設計",
    "離乳食提供",
    "食事介助",
    "水分補給管理",
    "通園通学準備",
    "習い事準備管理",
    "連絡帳・ピヨログ記録",
    "体温測定",
    "薬の管理",
    "体調不良対応",
    "ワンオペ対応",
    "お風呂対応",
    "歯磨き対応",
    "爪切り対応",
    "泣き叫び・癇癪対応",
    "保育園・学校送迎",
    "子ども衣類管理",
    "寝具・お漏らし対応",
    "病院受診",
    "予防接種対応",
    "虫・日焼け対策",
    "学校連絡確認",
    "アレルギー対応",
  ],
  勉強: [
    "絵本読み聞かせ",
    "読み聞かせ反応拾い",
    "恐竜博士への道",
    "生きもの観察学習",
    "水族館いきもの学習",
    "博物館学習ナビ",
    "小さな科学対応",
    "モール社会見学",
    "自然体験学習",
    "なぜなぜ対応",
    "文字あそび",
    "数字あそび",
    "お金の計算あそび",
    "レジごっこ学習",
    "ブロック構造理解",
    "粘土造形サポート",
    "お絵描き観察",
    "図鑑を一緒に見る",
    "映画から学ぶ",
    "キャラショー鑑賞",
    "宿題伴走",
    "英語に触れる",
    "実験あそび",
    "自然観察",
    "食材観察学習",
    "買い物社会学習",
    "おしゃれ観察学習",
    "ごっこ遊び学習",
    "習い事練習伴走",
    "好きの深掘り",
  ],
  掃除: [
    "掃除ルーティン運用",
    "掃除機ライン",
    "クイックル運用",
    "拭き掃除対応",
    "水回り防衛",
    "お風呂掃除",
    "トイレ掃除",
    "排水口チェック",
    "おむつ処理ライン",
    "うんち処理対応",
    "全ゴミ箱回収",
    "ゴミ出し管理",
    "ゴミ袋在庫管理",
    "ポリ袋運用",
    "分別判断",
    "ペットボトル缶瓶分別",
    "粗大ごみ手配",
    "大型廃棄オペレーション",
    "おもちゃ片付け",
    "絵本整理",
    "制作物アーカイブ",
    "保育園作品整理",
    "玄関リセット",
    "食卓下リセット",
    "床の小物回収",
    "ソファ下探索",
    "洗面台リセット",
    "キッチンリセット",
    "年末大掃除",
    "汚れ察知",
  ],
  親子: [
    "大好き受け取り",
    "好き受け取り",
    "甘え受け止め",
    "抱っこリクエスト対応",
    "ぎゅー回復",
    "突進受け止め",
    "パパママ呼び反応",
    "見て見て対応",
    "聞いて聞いて対応",
    "自分でやる見守り",
    "イヤイヤ受け止め",
    "褒めるタイミング",
    "できた共有",
    "一緒に笑う",
    "子どものツボに乗る",
    "朝のふれあい受け止め",
    "帰宅後の再会",
    "パパママ嫌いの受け止め",
    "パパママ大っ嫌い耐久",
    "一緒に驚く",
    "一緒に悔しがる",
    "気持ちの代弁",
    "親子お出かけ",
    "親子の約束",
    "仲直り親子",
    "怒った後のフォロー",
    "泣いた後の安心作り",
    "成長にじーん",
    "親子の秘密共有",
    "名前を呼ぶ幸せ",
  ],
};
const highFrequencyStages = (level3, level7, level15, level30) => [
  { level: 3, name: level3 },
  { level: 7, name: level7 },
  { level: 15, name: level15 },
  { level: 30, name: level30 },
];

const midFrequencyStages = (level2, level5, level12, level25) => [
  { level: 2, name: level2 },
  { level: 5, name: level5 },
  { level: 12, name: level12 },
  { level: 25, name: level25 },
];

const lowFrequencyStages = (level1, level5, level15) => [
  { level: 1, name: level1 },
  { level: 5, name: level5 },
  { level: 15, name: level15 },
];

const DAILY_SKILL_EVOLUTIONS = {
  日々の育児ログ: highFrequencyStages("記録見習い", "毎日メモ係", "家族ログ職人", "継続の親"),
  ピヨログ記録: highFrequencyStages("ピヨログ初心者", "記録係", "生活リズム管理人", "育児ログマスター"),
  オムツ記録: highFrequencyStages("オムツメモ係", "排泄チェック係", "体調察知係", "おしり管理者"),
  うんち記録: highFrequencyStages("うんち確認係", "便コンディション係", "体調読み取り人", "うんち博士"),
  ミルク記録: midFrequencyStages("ミルクメモ係", "授乳リズム係", "飲み具合観察者", "ミルク管理人"),
  離乳食記録: midFrequencyStages("離乳食メモ係", "食べ具合記録係", "月齢ごはん観察者", "離乳食ログ管理人"),
  睡眠記録: midFrequencyStages("ねんねメモ係", "睡眠リズム係", "夜の観察者", "眠りの管理人"),
  体調メモ: midFrequencyStages("体調チェック係", "変化察知係", "不調の早期発見者", "家族ヘルス番"),
  連絡帳チェック: highFrequencyStages("連絡帳確認係", "園との連携係", "忘れ物防衛係", "通園連絡マスター"),
  保育園アプリ確認: highFrequencyStages("アプリ確認係", "お知らせ拾い", "園情報管理人", "通園情報司令塔"),
  朝の支度ルーティン: highFrequencyStages("朝支度係", "バタバタ突破者", "朝の段取り人", "登園前の守護者"),
  夜の寝る前ルーティン: highFrequencyStages("寝る前係", "夜支度管理人", "おやすみ導線係", "夜の整え職人"),
  帰宅後ルーティン: highFrequencyStages("帰宅後係", "帰宅後リセット人", "夜への接続係", "帰宅後オペレーター"),
  お風呂前後の流れ: highFrequencyStages("お風呂前後係", "湯上がり段取り人", "風呂導線管理人", "湯上がりルーティン職人"),
  歯磨き声かけ: highFrequencyStages("歯磨き声かけ係", "仕上げ誘導係", "歯磨き交渉人", "虫歯防衛隊長"),
  着替え声かけ: highFrequencyStages("着替え声かけ係", "服チェンジ係", "朝の衣装係", "着替えマスター"),
  忘れ物チェック: highFrequencyStages("忘れ物確認係", "持ち物点検係", "朝の防衛線", "忘れ物ブロッカー"),
  持ち物補充: highFrequencyStages("持ち物補充係", "残量チェック係", "通園補給担当", "持ち物インフラ管理人"),
  明日の準備: highFrequencyStages("明日準備係", "前日セット係", "朝ラク設計者", "明日の平和職人"),
  家族スケジュール確認: highFrequencyStages("予定確認係", "家族カレンダー係", "予定衝突回避人", "家族予定の番人"),
  写真を残す: midFrequencyStages("写真を残す人", "今日の一枚係", "成長写真ログ係", "家族アルバム職人"),
  動画を残す: midFrequencyStages("動画を残す人", "一瞬の記録係", "動きの成長ログ係", "家族ムービー職人"),
  成長メモ: midFrequencyStages("成長メモ係", "できた発見係", "成長の断片を拾う人", "成長記録の語り部"),
  小さな変化に気づく: midFrequencyStages("変化メモ係", "成長発見係", "今日の違いに気づく親", "成長観察者"),
  できたこと記録: midFrequencyStages("できたメモ係", "初成功キャッチ係", "できたを残す人", "成功体験アーカイバー"),
  しんどさの言語化: midFrequencyStages("しんどいメモ係", "限界申告係", "無理しない親", "自分を守れる人"),
  ありがとう記録: midFrequencyStages("ありがとうメモ係", "感謝を残す人", "家族空気整え係", "感謝の伝道師"),
  ごめんね記録: midFrequencyStages("ごめんねメモ係", "素直な反省係", "仲直りできる親", "関係修復職人"),
  寝ます宣言: highFrequencyStages("寝ます宣言係", "休息を選ぶ人", "回復ルーティン担当", "休む勇気の達人"),
  今日も生きた: highFrequencyStages("今日も生きた", "よく耐えた親", "明日につないだ人", "生活継続の勇者"),
  note更新継続: midFrequencyStages("note更新係", "言葉を残す親", "発信しながら整える人", "家族記録の編集者"),
  文章で整える力: midFrequencyStages("文章整理係", "気持ちの下書き人", "言葉で暮らしを整える人", "生活編集者"),
  LINE返信MP管理: midFrequencyStages("返信MP管理係", "返事を返す人", "連絡疲れの調整役", "返信MPマネージャー"),
  返事を返す実行力: midFrequencyStages("返事実行係", "後回し防止係", "連絡タスク処理人", "返信完了の達人"),
};

const WORK_SKILL_EVOLUTIONS = {
  定時帰宅チャレンジ: midFrequencyStages("定時帰宅見習い", "帰宅意識マン", "家族時間確保係", "定時帰宅の達人"),
  急ぎ帰宅判断: midFrequencyStages("急ぎ帰宅係", "家族優先ダッシュ", "呼び出し対応者", "帰宅判断マスター"),
  残業耐久: midFrequencyStages("残業耐え", "疲労帰宅者", "夜の合流者", "残業後も親"),
  仕事切り上げ判断: midFrequencyStages("切り上げ見習い", "仕事区切り係", "優先順位判断者", "家族時間防衛者"),
  育児のための休み申請: lowFrequencyStages("休み申請者", "家族都合を言える人", "育児休み交渉人"),
  子どもの病欠対応: lowFrequencyStages("病欠対応者", "仕事と看病の橋渡し", "家族緊急対応者"),
  保育園呼び出し対応: lowFrequencyStages("呼び出し対応者", "お迎え緊急出動", "呼び出しの守護者"),
  朝の出勤準備突破: highFrequencyStages("出勤準備係", "のしかかり突破者", "朝の妨害耐性", "出勤前の戦士"),
  在宅勤務と育児両立: midFrequencyStages("在宅見習い", "作業中育児対応", "家仕事両立係", "在宅育児オペレーター"),
  仕事前の育児タスク処理: highFrequencyStages("出勤前タスク係", "朝タスク処理係", "仕事前段取り人", "朝の処理職人"),
  育休取得準備: lowFrequencyStages("育休準備者", "職場根回し係", "育休取得の開拓者"),
  育休中の職場調整: lowFrequencyStages("育休連絡係", "職場との距離管理人", "育休運用者"),
  復職準備: lowFrequencyStages("復職準備者", "生活再設計係", "復職の橋渡し人"),
  復職後リズム調整: midFrequencyStages("復職後調整係", "仕事育児リズム係", "疲労配分管理者", "復職後の安定者"),
  職場への育児共有: lowFrequencyStages("育児共有者", "家庭事情を伝える人", "育児共有の翻訳者"),
  上司相談: lowFrequencyStages("上司相談者", "事情説明係", "相談できる親"),
  同僚連携: midFrequencyStages("同僚連携係", "助け合い調整", "チーム育児理解係", "職場連携職人"),
  引き継ぎ整理: lowFrequencyStages("引き継ぎメモ係", "抜け漏れ防衛者", "引き継ぎ職人"),
  仕事量調整: midFrequencyStages("仕事量見直し係", "タスク圧縮係", "無理量調整者", "仕事配分マスター"),
  スケジュール防衛: midFrequencyStages("予定確認係", "カレンダー防衛係", "家族時間ブロック係", "スケジュールの番人"),
  メンタル切り替え: midFrequencyStages("切り替え見習い", "仕事脳オフ係", "帰宅後リセット人", "家庭モード変身者"),
  仕事愚痴の言語化: midFrequencyStages("愚痴メモ係", "疲れを言える人", "仕事ダメージ翻訳者", "外の負荷をほどく人"),
  疲労帰宅からの合流: midFrequencyStages("疲労帰宅者", "帰って合流する人", "疲れても混ざる親", "帰宅後合流マスター"),
  帰宅後パパママモード起動: midFrequencyStages("帰宅後起動係", "仕事服を脱ぐ人", "家庭モード起動者", "帰宅後パパママモード"),
  休日出勤ダメージ処理: lowFrequencyStages("休日出勤耐え", "休日ダメージ処理係", "休日出勤サバイバー"),
  出張・外出調整: lowFrequencyStages("外出調整係", "不在段取り担当", "外出仕事の調整者"),
  仕事道具管理: midFrequencyStages("仕事道具係", "忘れ物防止係", "出勤装備管理人", "仕事装備マスター"),
  通勤中の家族連絡: midFrequencyStages("通勤連絡係", "移動中共有者", "すき間連絡職人", "通勤コミュニケーター"),
  収入維持プレッシャー耐性: lowFrequencyStages("収入プレッシャー耐え", "家族を支える覚悟", "働く親の背中"),
  働く親の段取り力: midFrequencyStages("働く親見習い", "両立段取り係", "仕事家庭調整者", "働く親の段取り職人"),
  仕事と家庭の切替: midFrequencyStages("仕事家庭切替係", "仕事脳オフ担当", "帰宅後リセット人", "家庭モード起動者"),
  家庭優先の帰還判断: midFrequencyStages("家庭優先帰還係", "急ぎ帰宅判断者", "家族時間確保係", "家族時間防衛者"),
  病気時の休み申請: lowFrequencyStages("病気時休み申請者", "看病シフト調整者", "家族緊急対応者"),
  仕事整理で家庭時間を作る: midFrequencyStages("仕事整理係", "家庭時間を作る人", "仕事量調整者", "家庭時間防衛者"),
  育休取得オペレーション: lowFrequencyStages("育休取得準備者", "職場調整の実行者", "育休取得の開拓者"),
};

const SKILL_EVOLUTIONS = {
  ...DAILY_SKILL_EVOLUTIONS,
  ...WORK_SKILL_EVOLUTIONS,
  生きもの観察学習: [
    { level: 3, name: "生きもの観察係" },
    { level: 10, name: "好きな動物を見つける親" },
    { level: 30, name: "いきもの観察ナビゲーター" },
  ],
  水族館いきもの学習: [
    { level: 3, name: "水槽前の観察係" },
    { level: 10, name: "海の生きもの案内人" },
    { level: 30, name: "水族館学習ナビゲーター" },
  ],
  博物館学習ナビ: [
    { level: 3, name: "展示を見る親" },
    { level: 10, name: "学びの横に立つ人" },
    { level: 30, name: "博物館学習ナビゲーター" },
  ],
  小さな科学対応: [
    { level: 3, name: "なんで対応係" },
    { level: 10, name: "実験に付き合う親" },
    { level: 30, name: "小さな科学の案内人" },
  ],
  モール社会見学: [
    { level: 3, name: "モール社会見学係" },
    { level: 10, name: "買い物学習の案内人" },
    { level: 30, name: "生活社会ナビゲーター" },
  ],
  買い物社会学習: [
    { level: 3, name: "買い物社会学習係" },
    { level: 10, name: "商品と値段の案内人" },
    { level: 30, name: "生活を学びに変える親" },
  ],
  食材観察学習: [
    { level: 3, name: "食材観察係" },
    { level: 10, name: "野菜と肉の案内人" },
    { level: 30, name: "食卓前の学び職人" },
  ],
  自然体験学習: [
    { level: 3, name: "自然体験係" },
    { level: 10, name: "外遊び学習の案内人" },
    { level: 30, name: "自然体験ナビゲーター" },
  ],
  映画から学ぶ: [
    { level: 3, name: "親子映画鑑賞係" },
    { level: 10, name: "物語を一緒に味わう親" },
    { level: 30, name: "映画時間の回復術師" },
  ],
  キャラショー鑑賞: [
    { level: 3, name: "キャラショー見守り係" },
    { level: 10, name: "推し活付き添い親" },
    { level: 30, name: "子どもの推し世界案内人" },
  ],
  外遊び安全管理: [
    { level: 3, name: "外遊び安全係" },
    { level: 10, name: "外出リスク察知係" },
    { level: 30, name: "外遊び安全マスター" },
  ],
  子連れテーマパーク運用: [
    { level: 3, name: "テーマパーク見習い" },
    { level: 10, name: "待ち時間オペレーター" },
    { level: 30, name: "子連れテーマパーク攻略者" },
  ],
  高負荷おでかけ回復: [
    { level: 3, name: "高負荷おでかけ係" },
    { level: 10, name: "疲れても楽しむ親" },
    { level: 30, name: "思い出遠征オペレーター" },
  ],
  子連れ旅行運用: [
    { level: 3, name: "子連れ旅行係" },
    { level: 10, name: "旅程と荷物の調整役" },
    { level: 30, name: "家族旅行オペレーター" },
  ],
  子連れ宿泊運用: [
    { level: 3, name: "子連れ宿泊係" },
    { level: 10, name: "お泊まり導線管理人" },
    { level: 30, name: "家族宿泊マスター" },
  ],
  炊飯ルーティン: [
    { level: 5, name: "米炊き係" },
    { level: 10, name: "ごはん安定供給者" },
    { level: 20, name: "食卓の土台職人" },
    { level: 30, name: "炊飯インフラ大臣" },
  ],
  食材下ごしらえ: [
    { level: 5, name: "カット準備係" },
    { level: 10, name: "食材段取り人" },
    { level: 20, name: "調理前線整備士" },
    { level: 30, name: "台所の先回り職人" },
  ],
  作り置き運用: [
    { level: 5, name: "冷蔵庫ストック係" },
    { level: 10, name: "平日ごはん支援者" },
    { level: 20, name: "週次ごはん設計士" },
    { level: 30, name: "家族食卓の備蓄官" },
  ],
  食事提供: [
    { level: 5, name: "ごはん出し係" },
    { level: 10, name: "食卓オペレーター" },
    { level: 20, name: "家族ごはん進行役" },
    { level: 30, name: "食事時間の守護者" },
  ],
  生活導線リフォーム: [
    { level: 5, name: "配置替え係" },
    { level: 10, name: "生活動線調整人" },
    { level: 20, name: "暮らしのレイアウト職人" },
    { level: 30, name: "家庭インフラ設計士" },
  ],
  食材買い出し: [
    { level: 5, name: "食材調達係" },
    { level: 10, name: "献立補給担当" },
    { level: 20, name: "冷蔵庫補給士" },
    { level: 30, name: "家族食材バイヤー" },
  ],
  消耗品補給: [
    { level: 5, name: "日用品買い足し係" },
    { level: 10, name: "切らさない担当" },
    { level: 20, name: "生活消耗品管理者" },
    { level: 30, name: "家庭補給ライン司令官" },
  ],
  買い忘れ防止: [
    { level: 5, name: "買い物メモ係" },
    { level: 10, name: "リマインダー運用者" },
    { level: 20, name: "補給ミス回避人" },
    { level: 30, name: "買い忘れゼロ司令塔" },
  ],
  冷蔵庫在庫管理: [
    { level: 5, name: "冷蔵庫チェック係" },
    { level: 10, name: "食材期限見張り人" },
    { level: 20, name: "冷蔵庫運用管理者" },
    { level: 30, name: "食材ロス削減マスター" },
  ],
  ゴミ捨て運用: [
    { level: 5, name: "ゴミ出し係" },
    { level: 10, name: "回収日チェック担当" },
    { level: 20, name: "ゴミ捨てルート管理者" },
    { level: 30, name: "家庭廃棄インフラ担当" },
  ],
  おむつ処理: [
    { level: 5, name: "おむつ袋係" },
    { level: 10, name: "におい封印担当" },
    { level: 20, name: "おむつ処理職人" },
    { level: 30, name: "新生児期の防衛隊長" },
  ],
  うんち処理: [
    { level: 5, name: "緊急処理係" },
    { level: 10, name: "におい耐性持ち" },
    { level: 20, name: "汚れ対応職人" },
    { level: 30, name: "現場復旧の達人" },
  ],
  水回り掃除: [
    { level: 5, name: "洗面台リセット係" },
    { level: 10, name: "排水口チェック担当" },
    { level: 20, name: "水回り復旧職人" },
    { level: 30, name: "清潔インフラ管理者" },
  ],
  掃除機運用: [
    { level: 5, name: "床リセット係" },
    { level: 10, name: "食べこぼし回収人" },
    { level: 20, name: "床面制圧担当" },
    { level: 30, name: "家庭清掃前線隊長" },
  ],
  通園通学準備: [
    { level: 5, name: "登園セット係" },
    { level: 10, name: "忘れ物チェック担当" },
    { level: 20, name: "通園通学オペレーター" },
    { level: 30, name: "朝の支度司令塔" },
  ],
  学校連絡確認: [
    { level: 3, name: "連絡確認係" },
    { level: 10, name: "プリント見落とし防衛係" },
    { level: 30, name: "学校連絡オペレーター" },
  ],
  習い事準備管理: [
    { level: 3, name: "習い事準備係" },
    { level: 10, name: "持ち物と時間の管理人" },
    { level: 30, name: "習い事運用マスター" },
  ],
  宿題伴走: [
    { level: 3, name: "宿題を見る親" },
    { level: 10, name: "横で粘る伴走者" },
    { level: 30, name: "宿題伴走マスター" },
  ],
  習い事練習伴走: [
    { level: 3, name: "習い事練習係" },
    { level: 10, name: "家練習の見守り人" },
    { level: 30, name: "習い事成長サポーター" },
  ],
  こどもちゃれんじ伴走: [
    { level: 3, name: "ちゃれんじ見守り係" },
    { level: 10, name: "ワーク伴走担当" },
    { level: 30, name: "ちゃれんじ育成マスター" },
  ],
  DWE英語環境づくり: [
    { level: 3, name: "DWEかけ流し係" },
    { level: 10, name: "英語環境づくり担当" },
    { level: 30, name: "DWEホームガイド" },
  ],
  空手キッズ育成: [
    { level: 3, name: "空手見守り係" },
    { level: 10, name: "稽古サポーター" },
    { level: 30, name: "空手キッズ師範代" },
  ],
  合気道キッズ育成: [
    { level: 3, name: "合気道見守り係" },
    { level: 10, name: "稽古サポーター" },
    { level: 30, name: "合気道キッズ師範代" },
  ],
  スイミング伴走: [
    { level: 3, name: "プール教室係" },
    { level: 10, name: "級アップ応援団" },
    { level: 30, name: "スイミング伴走マスター" },
  ],
  ダンスレッスン伴走: [
    { level: 3, name: "ダンス練習係" },
    { level: 10, name: "振り付け応援担当" },
    { level: 30, name: "ステージ裏の伴走者" },
  ],
  チア練習サポート: [
    { level: 3, name: "チア練習係" },
    { level: 10, name: "笑顔応援サポーター" },
    { level: 30, name: "チア育成マスター" },
  ],
  ピアノ練習伴走: [
    { level: 3, name: "ピアノ練習係" },
    { level: 10, name: "発表会までの伴走者" },
    { level: 30, name: "おうちピアノ監督" },
  ],
  バレエ見守り: [
    { level: 3, name: "バレエ見守り係" },
    { level: 10, name: "レッスン応援担当" },
    { level: 30, name: "バレエ成長サポーター" },
  ],
  子役チャレンジ支援: [
    { level: 3, name: "子役挑戦見守り係" },
    { level: 10, name: "表現チャレンジ伴走者" },
    { level: 30, name: "小さな舞台の支援者" },
  ],
  英語レッスン伴走: [
    { level: 3, name: "英語レッスン係" },
    { level: 10, name: "英会話ホーム伴走者" },
    { level: 30, name: "英語成長ナビゲーター" },
  ],
  プログラミング伴走: [
    { level: 3, name: "コード遊び見守り係" },
    { level: 10, name: "考える力サポーター" },
    { level: 30, name: "小さな開発伴走者" },
  ],
  テニス練習伴走: [
    { level: 3, name: "テニス練習係" },
    { level: 10, name: "ラケット応援担当" },
    { level: 30, name: "テニス伴走マスター" },
  ],
  サッカー練習伴走: [
    { level: 3, name: "サッカー練習係" },
    { level: 10, name: "チーム練習サポーター" },
    { level: 30, name: "サッカー伴走マスター" },
  ],
  野球練習伴走: [
    { level: 3, name: "野球練習係" },
    { level: 10, name: "キャッチボール応援担当" },
    { level: 30, name: "野球伴走マスター" },
  ],
  体操教室伴走: [
    { level: 3, name: "体操教室係" },
    { level: 10, name: "できたを支える人" },
    { level: 30, name: "体操成長サポーター" },
  ],
  KUMON宿題伴走: [
    { level: 3, name: "KUMONプリント係" },
    { level: 10, name: "毎日プリント伴走者" },
    { level: 30, name: "KUMON宿題マスター" },
  ],
  ミルク補給ライン: [
    { level: 5, name: "ミルク補給係" },
    { level: 30, name: "夜間補給マスター" },
  ],
  離乳食ストック作成: [
    { level: 5, name: "冷凍ストック職人" },
    { level: 30, name: "離乳食インフラ司令塔" },
  ],
  離乳食段階調整: [
    { level: 5, name: "月齢ごはん調整係" },
    { level: 30, name: "離乳食フェーズ管理者" },
  ],
  食材下ごしらえ: [
    { level: 5, name: "下ごしらえ担当" },
    { level: 30, name: "仕込みオペレーター" },
  ],
  炊飯ルーティン: [
    { level: 5, name: "ごはん炊き担当" },
    { level: 30, name: "家庭の米番長" },
  ],
  おにぎり運用: [
    { level: 5, name: "おにぎり係" },
    { level: 30, name: "携帯食マスター" },
  ],
  麦茶補給ライン: [
    { level: 5, name: "麦茶管理係" },
    { level: 30, name: "水分補給司令塔" },
  ],
  白湯準備: [{ level: 10, name: "白湯スタンバイ係" }],
  食器準備: [
    { level: 5, name: "食器セット係" },
    { level: 30, name: "食卓セッティング職人" },
  ],
  食後片付け: [
    { level: 5, name: "食後リセット係" },
    { level: 30, name: "食卓クローズ職人" },
  ],
  洗い物完了: [
    { level: 5, name: "洗い物担当" },
    { level: 30, name: "台所リセットマスター" },
  ],
  おやつ調達: [
    { level: 5, name: "おやつ補給係" },
    { level: 30, name: "小腹サポート職人" },
  ],
  買い物補給: [
    { level: 5, name: "買い物メモ担当" },
    { level: 30, name: "家庭補給ライン管理者" },
  ],
  食材観察ナビ: [
    { level: 5, name: "食材案内係" },
    { level: 30, name: "買い物学習ナビゲーター" },
  ],
  汁物で整える: [
    { level: 5, name: "汁物担当" },
    { level: 30, name: "食卓の温度管理人" },
  ],
  味噌汁ライン: [
    { level: 5, name: "味噌汁係" },
    { level: 30, name: "家庭汁物マスター" },
  ],
  包丁まな板オペレーション: [
    { level: 5, name: "包丁まな板担当" },
    { level: 30, name: "下ごしらえ司令塔" },
  ],
  調理家電活用: [
    { level: 5, name: "調理家電係" },
    { level: 30, name: "家電調理オペレーター" },
  ],
  定番ごはん化: [
    { level: 5, name: "定番ごはん係" },
    { level: 15, name: "家族の定番メニュー職人" },
    { level: 30, name: "また食べたい食卓職人" },
  ],
  リクエスト料理対応: [
    { level: 5, name: "リクエスト料理係" },
    { level: 15, name: "食べたいに応える人" },
    { level: 30, name: "家族リクエスト料理人" },
  ],
  冷凍ストック管理: [
    { level: 5, name: "冷凍庫管理係" },
    { level: 30, name: "冷凍インフラ司令塔" },
  ],
  作り置き設計: [
    { level: 5, name: "作り置き担当" },
    { level: 30, name: "週次食卓設計者" },
  ],
  週次ごはんルーティン: [
    { level: 5, name: "週次ごはん係" },
    { level: 30, name: "家庭食卓ルーティン職人" },
  ],
  幼児食調整: [
    { level: 5, name: "幼児食担当" },
    { level: 30, name: "子どもごはん調整者" },
  ],
  無理しない食事判断: [
    { level: 5, name: "無理しないごはん係" },
    { level: 30, name: "家庭の現実解マスター" },
  ],
  コンビニ飯判断: [{ level: 10, name: "コンビニ飯セレクター" }],
  冷凍食品活用: [{ level: 10, name: "冷凍食品セレクター" }],
  記念日ケーキ制作: [
    { level: 3, name: "記念日ケーキ係" },
    { level: 5, name: "家族イベントパティシエ" },
  ],
  食卓インフラ運用: [
    { level: 5, name: "食卓インフラ係" },
    { level: 30, name: "家庭補給司令塔" },
  ],
  子どもごはん運用: [
    { level: 5, name: "子どもごはん係" },
    { level: 30, name: "子ども食卓マスター" },
  ],
  鬼ごっこ対応: [
    { level: 5, name: "鬼ごっこ係" },
    { level: 30, name: "逃走演出マスター" },
  ],
  かけっこ伴走: [
    { level: 5, name: "かけっこ伴走係" },
    { level: 30, name: "全力疾走サポーター" },
  ],
  公園あそび運用: [
    { level: 5, name: "公園あそび担当" },
    { level: 30, name: "公園オペレーター" },
  ],
  キックボード練習: [
    { level: 3, name: "キックボード見守り係" },
    { level: 10, name: "バランス練習サポーター" },
    { level: 30, name: "乗り物練習ナビゲーター" },
  ],
  乗り物練習サポート: [
    { level: 3, name: "乗り物練習見守り係" },
    { level: 10, name: "バランス感覚サポーター" },
    { level: 30, name: "公園乗り物コーチ" },
  ],
  大型遊具攻略: [
    { level: 3, name: "大型遊具見守り係" },
    { level: 10, name: "迷路と城の案内人" },
    { level: 30, name: "公園アスレチック攻略者" },
  ],
  シャボン玉あそび: [
    { level: 3, name: "シャボン玉係" },
    { level: 10, name: "ふわふわ観察担当" },
    { level: 30, name: "空に飛ばす遊び職人" },
  ],
  ブランコ押し職人: [
    { level: 5, name: "ブランコ押し係" },
    { level: 30, name: "ゆらゆら職人" },
  ],
  すべり台見守り: [
    { level: 5, name: "すべり台見守り係" },
    { level: 30, name: "遊具安全ナビ" },
  ],
  親子すべり台: [
    { level: 5, name: "親子すべり台係" },
    { level: 30, name: "一緒に滑る名人" },
  ],
  ジャングルジム見守り: [
    { level: 5, name: "登り遊具見守り係" },
    { level: 30, name: "高さ見守りマスター" },
  ],
  ハシゴ登りサポート: [
    { level: 5, name: "ハシゴ支え係" },
    { level: 30, name: "登り動線サポーター" },
  ],
  砂場あそび対応: [
    { level: 5, name: "砂場あそび係" },
    { level: 30, name: "砂場建築サポーター" },
  ],
  地面お絵描き: [
    { level: 5, name: "地面お絵描き係" },
    { level: 30, name: "路上キャンバス職人" },
  ],
  かくれんぼ演出: [
    { level: 5, name: "かくれんぼ係" },
    { level: 30, name: "発見タイミング職人" },
  ],
  ごっこ設定に乗る: [
    { level: 5, name: "ごっこ参加係" },
    { level: 30, name: "設定を壊さない名優" },
  ],
  おままごと参加: [
    { level: 5, name: "おままごと係" },
    { level: 30, name: "小さな世界の住人" },
  ],
  積み木建築サポート: [
    { level: 5, name: "積み木建築係" },
    { level: 30, name: "積み木構造アドバイザー" },
  ],
  水遊び安全管理: [
    { level: 5, name: "水遊び見守り係" },
    { level: 30, name: "水辺安全マスター" },
  ],
  海あそび対応: [
    { level: 5, name: "海あそび係" },
    { level: 30, name: "波打ち際サポーター" },
  ],
  創作あそび: [
    { level: 5, name: "創作あそび係" },
    { level: 30, name: "作品名受け止め職人" },
  ],
  全身ダンス参加: [
    { level: 5, name: "ダンス参加係" },
    { level: 30, name: "全身ダンスプレイヤー" },
  ],
  歌あそび参加: [
    { level: 5, name: "歌あそび係" },
    { level: 30, name: "親子ライブ参加者" },
  ],
  キャッチボール伴走: [
    { level: 5, name: "キャッチボール係" },
    { level: 30, name: "投げ返し職人" },
  ],
  サッカーあそび: [
    { level: 5, name: "サッカーあそび係" },
    { level: 30, name: "親子キックマスター" },
  ],
  ドッジボール対応: [
    { level: 5, name: "ドッジボール係" },
    { level: 30, name: "投げ避けサポーター" },
  ],
  バスケバウンド練習: [
    { level: 5, name: "バウンド練習係" },
    { level: 30, name: "ドリブル伴走者" },
  ],
  高い高い担当: [
    { level: 5, name: "高い高い係" },
    { level: 30, name: "空中遊び職人" },
  ],
  肩車運用: [
    { level: 5, name: "肩車係" },
    { level: 30, name: "視界拡張マスター" },
  ],
  人間遊具マスター: [
    { level: 5, name: "人間遊具係" },
    { level: 30, name: "全身アトラクション" },
  ],
  もう一回対応力: [
    { level: 5, name: "もう一回対応係" },
    { level: 30, name: "無限リピート耐性" },
  ],
  帰宅時間管理: [
    { level: 5, name: "帰る時間係" },
    { level: 30, name: "遊び時間マネージャー" },
  ],
  公園撤収オペレーション: [
    { level: 5, name: "公園撤収係" },
    { level: 30, name: "泣いても帰る司令塔" },
  ],
  切り上げ管理: [
    { level: 5, name: "あと1回予告係" },
    { level: 30, name: "切り替え運用マスター" },
  ],
  親族LINE返信: [
    { level: 5, name: "LINE返信係" },
    { level: 30, name: "親族連絡の番人" },
  ],
  遠隔コミュニケーション: [
    { level: 5, name: "遠隔連絡係" },
    { level: 30, name: "親族ネットワーク管理人" },
  ],
  みてね更新: [
    { level: 5, name: "みてね更新係" },
    { level: 30, name: "家族アルバム配信者" },
  ],
  写真動画共有: [
    { level: 5, name: "成長共有係" },
    { level: 30, name: "写真動画配信マスター" },
  ],
  親族感謝伝達: [
    { level: 5, name: "お礼を言える親" },
    { level: 30, name: "感謝循環の作り手" },
  ],
  手伝ってもらう素直さ: [
    { level: 5, name: "頼れる親" },
    { level: 30, name: "家族に頼る達人" },
  ],
  親戚交友力: [
    { level: 5, name: "親戚交流係" },
    { level: 30, name: "親族ネットワークの育て手" },
  ],
  プレゼント受け取り対応: [
    { level: 5, name: "受け取りお礼係" },
    { level: 30, name: "贈り物リアクション職人" },
  ],
  祖父母サポート受け取り: [
    { level: 5, name: "祖父母サポート受け取り係" },
    { level: 30, name: "頼れる家族連携者" },
  ],
  子ども預け連携: [
    { level: 5, name: "預け段取り係" },
    { level: 30, name: "安心引き渡しマスター" },
  ],
  親族食事会対応: [
    { level: 5, name: "食事会参加係" },
    { level: 30, name: "親族テーブル調整役" },
  ],
  自分実家訪問: [
    { level: 5, name: "自分実家訪問係" },
    { level: 30, name: "自分実家ルート管理人" },
  ],
  パートナー実家訪問: [
    { level: 5, name: "パートナー実家訪問係" },
    { level: 30, name: "パートナー実家バランサー" },
  ],
  親族あいさつ運用: [
    { level: 5, name: "親族あいさつ係" },
    { level: 30, name: "家族間あいさつマスター" },
  ],
  お祝い段取り: [
    { level: 5, name: "お祝い準備係" },
    { level: 30, name: "家族祝いプロデューサー" },
  ],
  親族訪問準備: [
    { level: 5, name: "訪問準備係" },
    { level: 30, name: "親族訪問オペレーター" },
  ],
  親族行事連携: [
    { level: 5, name: "親族行事係" },
    { level: 30, name: "家族行事の連携役" },
  ],
  甥っ子姪っ子交流: [
    { level: 5, name: "甥姪あそび係" },
    { level: 30, name: "親族キッズ交流担当" },
  ],
  いとこ遊び調整: [
    { level: 5, name: "いとこ遊び係" },
    { level: 30, name: "子ども同士の橋渡し役" },
  ],
  親族間スケジュール調整: [
    { level: 5, name: "日程調整係" },
    { level: 30, name: "親族カレンダー管理人" },
  ],
  "内祝い・お返し管理": [
    { level: 5, name: "お返し確認係" },
    { level: 30, name: "感謝返礼マスター" },
  ],
  親族写真整理: [
    { level: 5, name: "写真整理係" },
    { level: 30, name: "家族記録アーカイバー" },
  ],
  子どもの呼び名共有: [
    { level: 5, name: "呼び名共有係" },
    { level: 30, name: "家族内ネーム管理人" },
  ],
  親族への説明力: [
    { level: 5, name: "状況説明係" },
    { level: 30, name: "家族間通訳者" },
  ],
  家族間クッション役: [
    { level: 5, name: "間に入る係" },
    { level: 30, name: "家族間バランサー" },
  ],
  義実家距離感調整: [
    { level: 5, name: "義実家距離感係" },
    { level: 30, name: "義実家バランス職人" },
  ],
  実家距離感調整: [
    { level: 5, name: "実家距離感係" },
    { level: 30, name: "実家バランス職人" },
  ],
  頼る判断力: [
    { level: 5, name: "頼る判断係" },
    { level: 30, name: "無理しない連携マスター" },
  ],
  誕生日お礼連絡: [
    { level: 5, name: "お祝いお礼係" },
    { level: 30, name: "記念日感謝マスター" },
  ],
  いただきもの管理: [
    { level: 5, name: "いただきもの管理係" },
    { level: 30, name: "家族ギフト台帳担当" },
  ],
  ありがとう伝達: [
    { level: 2, name: "ありがとうを言える人" },
    { level: 5, name: "ありがとう係" },
    { level: 10, name: "感謝を忘れない人" },
    { level: 20, name: "感謝を渡す習慣の人" },
    { level: 30, name: "感謝の伝道師" },
  ],
  ごめんね伝達: [
    { level: 2, name: "ごめんねを言えた人" },
    { level: 5, name: "ごめんね係" },
    { level: 10, name: "素直に謝れる人" },
    { level: 20, name: "関係修復の一言担当" },
    { level: 30, name: "謝罪の達人" },
  ],
  今日の共有: [
    { level: 2, name: "今日を話せる人" },
    { level: 5, name: "今日の共有係" },
    { level: 10, name: "一日報告の相棒" },
    { level: 20, name: "日々を一緒に見返す人" },
    { level: 30, name: "家庭ログの語り部" },
  ],
  家事育児の相談: [
    { level: 2, name: "家庭相談を始めた人" },
    { level: 5, name: "家庭相談係" },
    { level: 10, name: "家事育児会議メンバー" },
    { level: 20, name: "家庭運営の相談役" },
    { level: 30, name: "家事育児会議の相棒" },
  ],
  愚痴の受け止め: [
    { level: 2, name: "愚痴を聞けた人" },
    { level: 5, name: "愚痴受け止め係" },
    { level: 10, name: "吐き出し安全地帯" },
    { level: 20, name: "心の換気係" },
    { level: 30, name: "安心して吐き出せる相手" },
  ],
  しんどさ共有: [
    { level: 2, name: "しんどいを言えた人" },
    { level: 5, name: "しんどさ共有係" },
    { level: 10, name: "無理の早期発見者" },
    { level: 20, name: "夫婦の限界アラート係" },
    { level: 30, name: "無理を隠さない夫婦" },
  ],
  予定すり合わせ: [
    { level: 2, name: "予定を合わせた人" },
    { level: 5, name: "予定すり合わせ係" },
    { level: 10, name: "家庭カレンダー係" },
    { level: 20, name: "予定衝突回避職人" },
    { level: 30, name: "家庭カレンダー共同管理者" },
  ],
  役割分担調整: [
    { level: 2, name: "役割を話せた人" },
    { level: 5, name: "役割分担係" },
    { level: 10, name: "家庭タスク調整者" },
    { level: 20, name: "チーム家庭の調整役" },
    { level: 30, name: "家庭運営バランサー" },
  ],
  夫婦ハグ回復: [
    { level: 2, name: "ハグできる人" },
    { level: 5, name: "ハグ回復係" },
    { level: 10, name: "心を戻すハグ係" },
    { level: 20, name: "夫婦回復スポット" },
    { level: 30, name: "抱擁の回復術師" },
  ],
  魅力を言葉にする: [
    { level: 2, name: "魅力を言える人" },
    { level: 5, name: "魅力を伝える人" },
    { level: 10, name: "ちゃんと見てる人" },
    { level: 20, name: "惚れ直し報告係" },
    { level: 30, name: "愛の褒め職人" },
  ],
  好きの伝達: [
    { level: 2, name: "好きを言える人" },
    { level: 5, name: "好き伝達係" },
    { level: 10, name: "好きを照れずに出す人" },
    { level: 20, name: "好きの更新者" },
    { level: 30, name: "愛情表現マスター" },
  ],
  褒め方調整: [
    { level: 2, name: "褒め方を探る人" },
    { level: 5, name: "褒め方調整係" },
    { level: 10, name: "言葉の温度見習い" },
    { level: 20, name: "言葉の温度管理人" },
    { level: 30, name: "相手に届く言葉職人" },
  ],
  夫婦の冗談共有: [
    { level: 2, name: "冗談を拾う人" },
    { level: 5, name: "夫婦の小笑い係" },
    { level: 10, name: "家の空気を軽くする人" },
    { level: 20, name: "夫婦漫才の受け手" },
    { level: 30, name: "家庭の空気清浄機" },
  ],
  寝る前会話: [
    { level: 2, name: "寝る前に話せた人" },
    { level: 5, name: "寝る前会話係" },
    { level: 10, name: "一日の終わり係" },
    { level: 20, name: "夜の気持ち整備士" },
    { level: 30, name: "一日の終わりを整える人" },
  ],
  相手の休息支援: [
    { level: 2, name: "休ませようとした人" },
    { level: 5, name: "休ませる係" },
    { level: 10, name: "相手の休息番" },
    { level: 20, name: "余白を作る人" },
    { level: 30, name: "相手の余白を守る人" },
  ],
  自分の休息確保: [
    { level: 5, name: "自分を休ませる係" },
    { level: 15, name: "倒れる前に整える人" },
    { level: 30, name: "自分メンテの達人" },
  ],
  夫婦デート確保: [
    { level: 5, name: "デート段取り係" },
    { level: 15, name: "夫婦時間の設計者" },
    { level: 30, name: "ふたり時間プロデューサー" },
  ],
  子ども預けデート: [
    { level: 5, name: "預けデート係" },
    { level: 15, name: "ふたり時間の再起動係" },
    { level: 30, name: "夫婦復活イベント管理人" },
  ],
  結婚記念日運用: [
    { level: 5, name: "記念日係" },
    { level: 15, name: "結婚記念日の守り人" },
    { level: 30, name: "夫婦記念日の神官" },
  ],
  誕生日お祝い: [
    { level: 5, name: "誕生日お祝い係" },
    { level: 15, name: "相手の誕生日プロデューサー" },
    { level: 30, name: "誕生日演出家" },
  ],
  お酒時間共有: [
    { level: 5, name: "晩酌共有係" },
    { level: 15, name: "夫婦の乾杯担当" },
    { level: 30, name: "夜の乾杯マスター" },
  ],
  写真と思い出共有: [
    { level: 5, name: "思い出共有係" },
    { level: 15, name: "ふたりの記録を味わう人" },
    { level: 30, name: "思い出再生職人" },
  ],
  昔の写真を味わう: [
    { level: 5, name: "昔の写真係" },
    { level: 15, name: "昔の君も見つめる人" },
    { level: 30, name: "時間差惚れ直し職人" },
  ],
  不満の話し合い: [
    { level: 5, name: "不満を話せる人" },
    { level: 15, name: "逃げずに聞く人" },
    { level: 30, name: "逃げずに話し合う人" },
  ],
  仲直り運用: [
    { level: 5, name: "仲直り係" },
    { level: 15, name: "関係を戻す修復者" },
    { level: 30, name: "夫婦リカバリーマスター" },
  ],
  ひとり時間の確保: [
    { level: 5, name: "ひとり時間係" },
    { level: 15, name: "それぞれの余白係" },
    { level: 30, name: "夫婦それぞれの余白係" },
  ],
  夫婦の金銭相談: [
    { level: 5, name: "お金相談係" },
    { level: 15, name: "家計の未来会議メンバー" },
    { level: 30, name: "夫婦家計参謀" },
  ],
  将来の相談: [
    { level: 5, name: "将来相談係" },
    { level: 15, name: "家族の未来設計者" },
    { level: 30, name: "未来会議の共同議長" },
  ],
  チーム夫婦運用: [
    { level: 5, name: "チーム夫婦係" },
    { level: 15, name: "家庭共同運営者" },
    { level: 30, name: "夫婦パーティー司令塔" },
  ],
  気持ちの言語化: [
    { level: 5, name: "気持ちを言う人" },
    { level: 15, name: "心の翻訳者" },
    { level: 30, name: "感情ログ職人" },
  ],
  ミルク準備: [
    { level: 2, name: "ミルク準備見習い" },
    { level: 5, name: "ミルク準備係" },
    { level: 10, name: "補給タイミング係" },
    { level: 20, name: "夜間補給ライン担当" },
    { level: 30, name: "ミルク補給司令塔" },
  ],
  おむつ替え: [
    { level: 2, name: "おむつ替え見習い" },
    { level: 5, name: "おむつ替え係" },
    { level: 10, name: "おむつ交換職人" },
    { level: 20, name: "おしり快適整備士" },
    { level: 30, name: "おむつラインマスター" },
  ],
  うんち対応: [
    { level: 2, name: "うんち対応見習い" },
    { level: 5, name: "うんち対応係" },
    { level: 10, name: "便状態観察係" },
    { level: 20, name: "お腹の変化察知者" },
    { level: 30, name: "うんちログ鑑定士" },
  ],
  着替え対応: [
    { level: 2, name: "着替え補助見習い" },
    { level: 5, name: "着替え対応係" },
    { level: 10, name: "朝の着替え回し係" },
    { level: 20, name: "服イヤイヤ調整役" },
    { level: 30, name: "着替えオペレーター" },
  ],
  寝かしつけ: [
    { level: 2, name: "寝かしつけ見習い" },
    { level: 5, name: "寝かしつけ係" },
    { level: 10, name: "眠気の案内人" },
    { level: 20, name: "寝室ルーティン職人" },
    { level: 30, name: "寝かしつけの守護者" },
  ],
  夜泣き対応: [
    { level: 2, name: "夜泣き初動係" },
    { level: 5, name: "夜泣き対応係" },
    { level: 10, name: "深夜鎮静スタッフ" },
    { level: 20, name: "睡眠不足サバイバー" },
    { level: 30, name: "夜間育児の守護者" },
  ],
  抱っこで落ち着かせる: [
    { level: 2, name: "抱っこ鎮静見習い" },
    { level: 5, name: "抱っこ鎮静係" },
    { level: 10, name: "安心基地担当" },
    { level: 20, name: "泣き声翻訳抱っこ係" },
    { level: 30, name: "抱っこ鎮静マスター" },
  ],
  お昼寝設計: [
    { level: 2, name: "お昼寝見守り係" },
    { level: 5, name: "お昼寝設計係" },
    { level: 10, name: "眠気リズム調整者" },
    { level: 20, name: "昼寝タイムキーパー" },
    { level: 30, name: "お昼寝ルーティン設計士" },
  ],
  離乳食提供: [
    { level: 2, name: "離乳食提供見習い" },
    { level: 5, name: "離乳食提供係" },
    { level: 10, name: "月齢ごはん配膳係" },
    { level: 20, name: "食べムラ受け止め担当" },
    { level: 30, name: "離乳食実務マスター" },
  ],
  食事介助: [
    { level: 2, name: "食事介助見習い" },
    { level: 5, name: "食事介助係" },
    { level: 10, name: "こぼしても進める人" },
    { level: 20, name: "食卓見守り職人" },
    { level: 30, name: "食事介助マスター" },
  ],
  水分補給管理: [
    { level: 2, name: "水分確認係" },
    { level: 5, name: "水分補給係" },
    { level: 10, name: "麦茶タイミング係" },
    { level: 20, name: "脱水予防ウォッチャー" },
    { level: 30, name: "水分補給司令塔" },
  ],
  "保育園・学校準備": [
    { level: 2, name: "持ち物確認係" },
    { level: 5, name: "園学校準備係" },
    { level: 10, name: "朝準備オペレーター" },
    { level: 20, name: "忘れ物防止担当" },
    { level: 30, name: "登園登校準備マスター" },
  ],
  "連絡帳・ピヨログ記録": [
    { level: 2, name: "記録を残す人" },
    { level: 5, name: "育児ログ係" },
    { level: 10, name: "連絡帳ピヨログ担当" },
    { level: 20, name: "育児ログ継続者" },
    { level: 30, name: "日々の育児記録官" },
  ],
  体温測定: [
    { level: 2, name: "体温チェック係" },
    { level: 5, name: "体温測定係" },
    { level: 10, name: "発熱察知担当" },
    { level: 20, name: "体調変化ウォッチャー" },
    { level: 30, name: "体温管理マスター" },
  ],
  薬の管理: [
    { level: 2, name: "薬確認係" },
    { level: 5, name: "薬管理係" },
    { level: 10, name: "服薬タイミング担当" },
    { level: 20, name: "薬スケジュール管理人" },
    { level: 30, name: "服薬オペレーションマスター" },
  ],
  体調不良対応: [
    { level: 2, name: "体調不良初動係" },
    { level: 5, name: "体調不良対応係" },
    { level: 10, name: "様子見判断係" },
    { level: 20, name: "家庭内看護スタッフ" },
    { level: 30, name: "体調不良対応マスター" },
  ],
  ワンオペ対応: [
    { level: 2, name: "ワンオペ生還者" },
    { level: 5, name: "ワンオペ対応係" },
    { level: 10, name: "ひとり育児オペレーター" },
    { level: 20, name: "家庭単独運用者" },
    { level: 30, name: "ワンオペ戦線司令塔" },
  ],
  お風呂対応: [
    { level: 2, name: "お風呂補助係" },
    { level: 5, name: "お風呂対応係" },
    { level: 10, name: "洗う拭く着せる担当" },
    { level: 20, name: "湯上がりオペレーター" },
    { level: 30, name: "お風呂ルーティン職人" },
  ],
  歯磨き対応: [
    { level: 2, name: "歯磨き声かけ係" },
    { level: 5, name: "歯磨き対応係" },
    { level: 10, name: "仕上げ磨き担当" },
    { level: 20, name: "虫歯予防番長" },
    { level: 30, name: "歯磨きバトルマスター" },
  ],
  爪切り対応: [
    { level: 2, name: "爪チェック係" },
    { level: 5, name: "爪切り係" },
    { level: 10, name: "小さな爪の整備士" },
    { level: 20, name: "週次爪メンテ担当" },
    { level: 30, name: "爪切り職人" },
  ],
  "泣き叫び・癇癪対応": [
    { level: 2, name: "泣き叫び初動係" },
    { level: 5, name: "癇癪対応係" },
    { level: 10, name: "大荒れ耐久者" },
    { level: 20, name: "感情嵐の見守り人" },
    { level: 30, name: "癇癪対応の賢者" },
  ],
  "保育園・学校送迎": [
    { level: 2, name: "送迎見習い" },
    { level: 5, name: "送迎係" },
    { level: 10, name: "朝夕ルート担当" },
    { level: 20, name: "時間厳守オペレーター" },
    { level: 30, name: "送迎ルートマスター" },
  ],
  育児消耗品チェック: [
    { level: 2, name: "残量チェック係" },
    { level: 5, name: "消耗品チェック係" },
    { level: 10, name: "補充タイミング担当" },
    { level: 20, name: "育児在庫ウォッチャー" },
    { level: 30, name: "育児インフラ管理人" },
  ],
  子ども衣類管理: [
    { level: 2, name: "服ストック確認係" },
    { level: 5, name: "子ども衣類管理係" },
    { level: 10, name: "季節服切替担当" },
    { level: 20, name: "保育園服ローテ職人" },
    { level: 30, name: "子ども衣類マスター" },
  ],
  "寝具・お漏らし対応": [
    { level: 2, name: "シーツ対応係" },
    { level: 5, name: "お漏らし対応係" },
    { level: 10, name: "夜間寝具リカバリー係" },
    { level: 20, name: "防水シーツ管理人" },
    { level: 30, name: "寝具復旧マスター" },
  ],
  病院受診: [
    { level: 5, name: "病院受診係" },
    { level: 15, name: "受診判断担当" },
    { level: 30, name: "通院オペレーター" },
  ],
  予防接種対応: [
    { level: 5, name: "予防接種係" },
    { level: 15, name: "母子手帳チェック担当" },
    { level: 30, name: "接種スケジュール管理人" },
  ],
  "虫・日焼け対策": [
    { level: 5, name: "虫日焼け対策係" },
    { level: 15, name: "夏の外出防衛担当" },
    { level: 30, name: "外遊び防御マスター" },
  ],
  "園・学校イベント管理": [
    { level: 5, name: "園学校イベント係" },
    { level: 15, name: "行事持ち物管理人" },
    { level: 30, name: "園学校イベント司令塔" },
  ],
  アレルギー対応: [
    { level: 5, name: "アレルギー確認係" },
    { level: 15, name: "成分表示ウォッチャー" },
    { level: 30, name: "アレルギー対応参謀" },
  ],
  大好き受け取り: [
    { level: 2, name: "大好きを受け取った人" },
    { level: 5, name: "大好き回復係" },
    { level: 10, name: "愛情充電スポット" },
    { level: 20, name: "心の満タン係" },
    { level: 30, name: "限界突破愛情タンク" },
  ],
  好き受け取り: [
    { level: 2, name: "好きを受け取った人" },
    { level: 5, name: "好き回復係" },
    { level: 10, name: "にこにこ充電係" },
    { level: 20, name: "愛情受信アンテナ" },
    { level: 30, name: "日常愛情の受信者" },
  ],
  甘え受け止め: [
    { level: 2, name: "甘えに気づいた人" },
    { level: 5, name: "甘え受け止め係" },
    { level: 10, name: "安心基地見習い" },
    { level: 20, name: "帰ってこられる場所" },
    { level: 30, name: "子どもの安心基地" },
  ],
  抱っこリクエスト対応: [
    { level: 2, name: "抱っこして係" },
    { level: 5, name: "抱っこリクエスト係" },
    { level: 10, name: "腕の安心スポット" },
    { level: 20, name: "抱っこ補給所" },
    { level: 30, name: "抱っこ要求対応マスター" },
  ],
  ぎゅー回復: [
    { level: 2, name: "ぎゅーを返せた人" },
    { level: 5, name: "ぎゅー回復係" },
    { level: 10, name: "ぎゅー往復担当" },
    { level: 20, name: "愛情キャッチボール係" },
    { level: 30, name: "ぎゅー循環マスター" },
  ],
  突進受け止め: [
    { level: 2, name: "突進を受けた人" },
    { level: 5, name: "突進受け止め係" },
    { level: 10, name: "体当たり歓迎係" },
    { level: 20, name: "全力突進クッション" },
    { level: 30, name: "帰宅後迎撃マスター" },
  ],
  パパママ呼び反応: [
    { level: 2, name: "呼ばれて返事した人" },
    { level: 5, name: "パパママ反応係" },
    { level: 10, name: "呼び声即応係" },
    { level: 20, name: "名前を呼ばれたら動く人" },
    { level: 30, name: "呼び声反応マスター" },
  ],
  見て見て対応: [
    { level: 2, name: "見てを見た人" },
    { level: 5, name: "見て見て係" },
    { level: 10, name: "注目リクエスト担当" },
    { level: 20, name: "ちゃんと見てる人" },
    { level: 30, name: "見て見て鑑定士" },
  ],
  聞いて聞いて対応: [
    { level: 2, name: "聞いてを聞いた人" },
    { level: 5, name: "聞いて聞いて係" },
    { level: 10, name: "小さな話の聞き役" },
    { level: 20, name: "話したい気持ちの受け皿" },
    { level: 30, name: "聞いて聞いてマスター" },
  ],
  自分でやる見守り: [
    { level: 2, name: "手を出さず待った人" },
    { level: 5, name: "自分で見守り係" },
    { level: 10, name: "待てる親見習い" },
    { level: 20, name: "成長待機職人" },
    { level: 30, name: "自分でやる守護者" },
  ],
  イヤイヤ受け止め: [
    { level: 2, name: "イヤを受けた人" },
    { level: 5, name: "イヤイヤ受け止め係" },
    { level: 10, name: "反対意見の受信者" },
    { level: 20, name: "荒れ気味ハート見守り役" },
    { level: 30, name: "イヤイヤ期の伴走者" },
  ],
  褒めるタイミング: [
    { level: 2, name: "いいねを言えた人" },
    { level: 5, name: "褒めタイミング係" },
    { level: 10, name: "成長発見担当" },
    { level: 20, name: "自信の火付け役" },
    { level: 30, name: "褒め時マスター" },
  ],
  できた共有: [
    { level: 2, name: "できたを見た人" },
    { level: 5, name: "できた共有係" },
    { level: 10, name: "成功リアクション担当" },
    { level: 20, name: "小さな達成の証人" },
    { level: 30, name: "できた瞬間の立会人" },
  ],
  一緒に笑う: [
    { level: 2, name: "一緒に笑った人" },
    { level: 5, name: "笑い共有係" },
    { level: 10, name: "親子爆笑ポイント" },
    { level: 20, name: "笑いの同伴者" },
    { level: 30, name: "親子ゲラゲラ職人" },
  ],
  子どものツボに乗る: [
    { level: 2, name: "ツボに気づいた人" },
    { level: 5, name: "ツボ乗り係" },
    { level: 10, name: "好きの波に乗る人" },
    { level: 20, name: "子どもワールド参加者" },
    { level: 30, name: "子どものツボ職人" },
  ],
  朝のふれあい受け止め: [
    { level: 2, name: "朝の起こされ係" },
    { level: 5, name: "朝のふれあい係" },
    { level: 10, name: "布団襲撃受け止め役" },
    { level: 20, name: "朝イチ親子チャージャー" },
    { level: 30, name: "起床前線の守り人" },
  ],
  帰宅後の再会: [
    { level: 2, name: "帰宅後に迎えられた人" },
    { level: 5, name: "帰宅後再会係" },
    { level: 10, name: "おかえり充電係" },
    { level: 20, name: "帰宅後愛情受信者" },
    { level: 30, name: "帰宅後再会マスター" },
  ],
  パパママ嫌いの受け止め: [
    { level: 5, name: "嫌いを受けた親" },
    { level: 15, name: "MP0から立つ親" },
    { level: 30, name: "嫌いの奥を見守る親" },
  ],
  パパママ大っ嫌い耐久: [
    { level: 5, name: "大っ嫌いを浴びた親" },
    { level: 15, name: "MPマイナス帰還者" },
    { level: 30, name: "大っ嫌いも抱えた親" },
  ],
  一緒に驚く: [
    { level: 5, name: "驚き共有係" },
    { level: 15, name: "発見リアクション職人" },
    { level: 30, name: "世界初見の相棒" },
  ],
  一緒に悔しがる: [
    { level: 5, name: "悔しさ共有係" },
    { level: 15, name: "負けた気持ちの隣人" },
    { level: 30, name: "悔しさを次に変える親" },
  ],
  気持ちの代弁: [
    { level: 5, name: "気持ち代弁係" },
    { level: 15, name: "ことば前の翻訳者" },
    { level: 30, name: "小さな心の通訳者" },
  ],
  親子お出かけ: [
    { level: 5, name: "親子お出かけ係" },
    { level: 15, name: "一緒に外へ出る人" },
    { level: 30, name: "親子外出の相棒" },
  ],
  親子の約束: [
    { level: 5, name: "約束した親" },
    { level: 15, name: "約束を守る親" },
    { level: 30, name: "親子約束の守り人" },
  ],
  仲直り親子: [
    { level: 5, name: "仲直りできた親" },
    { level: 15, name: "関係リカバリー係" },
    { level: 30, name: "親子修復マスター" },
  ],
  怒った後のフォロー: [
    { level: 5, name: "怒った後に戻る親" },
    { level: 15, name: "フォローを忘れない親" },
    { level: 30, name: "怒り後ケア職人" },
  ],
  泣いた後の安心作り: [
    { level: 5, name: "泣いた後の受け皿" },
    { level: 15, name: "涙のあとを整える親" },
    { level: 30, name: "安心再建マスター" },
  ],
  成長にじーん: [
    { level: 5, name: "成長を感じた親" },
    { level: 15, name: "小さな変化の証人" },
    { level: 30, name: "成長にじーんマスター" },
  ],
  親子の秘密共有: [
    { level: 5, name: "秘密を聞いた親" },
    { level: 15, name: "小さな秘密の保管人" },
    { level: 30, name: "親子秘密基地の番人" },
  ],
  名前を呼ぶ幸せ: [
    { level: 5, name: "名前を呼んだ親" },
    { level: 15, name: "呼び名に愛を込める人" },
    { level: 30, name: "名前を呼ぶ幸せの達人" },
  ],
};

const HOME_SKILL_EVOLUTIONS = {
  炊飯ルーティン: ["炊飯見習い", "米炊き係", "ごはん安定供給者", "食卓の土台職人", "炊飯インフラ大臣"],
  食材下ごしらえ: ["下ごしらえ見習い", "カット準備係", "食材段取り人", "調理前線整備士", "台所の先回り職人"],
  作り置き運用: ["作り置き見習い", "冷蔵庫ストック係", "平日ごはん支援者", "週次ごはん設計士", "家族食卓の備蓄官"],
  離乳食ストック作成: ["離乳食見習い", "冷凍キューブ係", "月齢ごはん調整人", "赤ちゃん食卓設計士", "離乳食インフラ職人"],
  食事提供: ["配膳見習い", "ごはん出し係", "食卓オペレーター", "家族ごはん進行役", "食事時間の守護者"],
  リクエスト料理対応: ["リクエスト聞き係", "食べたい対応人", "子ども注文調理係", "推しごはん職人", "家族専属シェフ"],
  定番ごはん化: ["たまに作る人", "また作っての人", "うちの味担当", "週次定番職人", "家族の定番メニュー職人"],
  生活導線リフォーム: ["模様替え見習い", "配置替え係", "生活動線調整人", "暮らしのレイアウト職人", "家庭インフラ設計士"],
  麦茶補給ライン: ["麦茶見習い", "麦茶作り係", "水分補給担当", "麦茶切らさない人", "家族水分インフラ担当"],
  洗い物完了: ["洗い物見習い", "食器リセット係", "シンク復旧担当", "台所リセット職人", "食後インフラ復旧班長"],
  食材買い出し: ["買い出し見習い", "食材調達係", "献立補給担当", "冷蔵庫補給士", "家族食材バイヤー"],
  おやつ調達: ["おやつ見習い", "おやつ補給係", "ご機嫌補給担当", "子どもおやつ選定士", "甘味外交官"],
  消耗品補給: ["補給見習い", "日用品買い足し係", "切らさない担当", "生活消耗品管理者", "家庭補給ライン司令官"],
  買い忘れ防止: ["メモ見習い", "買い物メモ係", "リマインダー運用者", "補給ミス回避人", "買い忘れゼロ司令塔"],
  冷蔵庫在庫管理: ["在庫確認見習い", "冷蔵庫チェック係", "食材期限見張り人", "冷蔵庫運用管理者", "食材ロス削減マスター"],
  ゴミ捨て運用: ["ゴミ捨て見習い", "ゴミ出し係", "回収日チェック担当", "ゴミ捨てルート管理者", "家庭廃棄インフラ担当"],
  おむつ処理: ["おむつ処理見習い", "おむつ袋係", "におい封印担当", "おむつ処理職人", "新生児期の防衛隊長"],
  うんち処理: ["うんち対応見習い", "緊急処理係", "におい耐性持ち", "汚れ対応職人", "現場復旧の達人"],
  水回り掃除: ["水回り見習い", "洗面台リセット係", "排水口チェック担当", "水回り復旧職人", "清潔インフラ管理者"],
  お風呂掃除: ["風呂掃除見習い", "浴槽リセット係", "入浴準備担当", "風呂場復旧職人", "湯船インフラ守護者"],
  掃除機運用: ["掃除機見習い", "床リセット係", "食べこぼし回収人", "床面制圧担当", "家庭清掃前線隊長"],
  おもちゃ片付け: ["片付け見習い", "おもちゃ回収係", "遊び場リセット担当", "おもちゃ収納職人", "子ども空間整備士"],
  絵本整理: ["絵本整理見習い", "本棚戻し係", "読み聞かせ棚担当", "絵本ローテ管理者", "小さな図書館長"],
  制作物整理: ["制作物保管見習い", "作品置き場係", "思い出仕分け担当", "制作物アーカイブ係", "家族ミュージアム管理人"],
  洗濯ルーティン: ["洗濯見習い", "洗濯回す係", "衣類補給担当", "洗濯サイクル管理者", "衣類インフラ大臣"],
  洗濯物たたみ: ["たたみ見習い", "洗濯物たたみ係", "収納前整備人", "衣類リセット職人", "タンス復旧マスター"],
  通園通学準備: ["持ち物確認見習い", "登園セット係", "忘れ物チェック担当", "通園通学オペレーター", "朝の支度司令塔"],
  シーツ対応: ["シーツ対応見習い", "寝具交換係", "お漏らし復旧担当", "寝床リセット職人", "睡眠環境守護者"],
  収納導線づくり: ["収納見習い", "置き場決め係", "家族導線調整人", "収納システム設計士", "暮らしの配置マスター"],
  薬収納管理: ["薬収納見習い", "薬置き場係", "期限チェック担当", "家庭薬管理者", "体調支援インフラ係"],
};

const patterns = [
  {
    id: "tag",
    words: ["鬼ごっこ", "追いかけ"],
    hp: -6,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 3, パパママ力: 1, 忍耐力: 1 },
    skills: [{ name: "鬼ごっこ対応", exp: 10, tags: ["遊び", "体力", "筋力"] }],
    title: "もう一回に立ち向かう親",
  },
  {
    id: "running-play",
    words: ["かけっこ", "走", "走った", "全力疾走"],
    hp: -6,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 3, パパママ力: 1, 忍耐力: 1 },
    skills: [{ name: "かけっこ伴走", exp: 10, tags: ["遊び", "体力", "筋力"] }],
    title: "全力の速さを調整した親",
  },
  {
    id: "park-play",
    words: ["公園", "遊具", "すべり台", "滑り台", "砂場", "鉄棒", "ブランコ", "ジャングルジム", "城", "巨大迷路", "迷路", "走り回", "シャボン玉", "自転車", "ストライダー"],
    hp: -6,
    mp: -4,
    maxHp: 1,
    maxMp: 1,
    stats: { 筋力: 3, 察知力: 2, 忍耐力: 1, パパママ力: 2 },
    skills: [{ name: "公園あそび運用", exp: 10, tags: ["遊び", "公園", "見守り"] }],
    title: "公園で全身を使い切った親",
  },
  {
    id: "zoo-outing",
    words: ["動物園", "キリン", "ゾウ", "ぞう", "象", "たぬき", "タヌキ", "狸", "ワシ", "鷲", "シカ", "鹿", "トラ", "虎", "動物を見", "動物みた"],
    hp: -4,
    mp: 8,
    maxHp: 1,
    maxMp: 2,
    stats: { 知力: 4, 察知力: 3, 実行力: 2, 素直さ: 1 },
    skills: [
      { name: "生きもの観察学習", exp: 18, tags: ["勉強", "動物", "観察"], category: "勉強" },
      { name: "親子お出かけ", exp: 8, tags: ["親子", "外出", "回復"], category: "親子" },
    ],
    title: "動物園で好きな生きものを見つけた親",
  },
  {
    id: "aquarium-outing",
    words: ["水族館", "イルカ", "ペンギン", "アザラシ", "アシカ", "ラッコ", "カワウソ", "魚を見", "お魚", "クラゲ", "水槽"],
    hp: -5,
    mp: 9,
    maxHp: 1,
    maxMp: 2,
    stats: { 知力: 4, 察知力: 3, 実行力: 2, 素直さ: 1 },
    skills: [
      { name: "水族館いきもの学習", exp: 16, tags: ["勉強", "水族館", "観察"], category: "勉強" },
      { name: "生きもの観察学習", exp: 10, tags: ["勉強", "動物", "観察"], category: "勉強" },
    ],
    title: "水族館で好きな生きものを見つけた親",
  },
  {
    id: "museum-science-outing",
    words: ["科学館", "博物館", "資料館", "展示", "化石", "実験", "プラネタリウム", "宇宙", "恐竜展", "企画展"],
    hp: -4,
    mp: 8,
    maxMp: 2,
    stats: { 知力: 5, 察知力: 3, 実行力: 2, 忍耐力: 1 },
    skills: [
      { name: "博物館学習ナビ", exp: 16, tags: ["勉強", "博物館", "上級"], category: "勉強" },
      { name: "小さな科学対応", exp: 12, tags: ["勉強", "科学", "知力"], category: "勉強" },
    ],
    title: "展示の前で学びを広げた親",
  },
  {
    id: "swing-play",
    words: ["ブランコ", "ぶらんこ", "押して", "押した", "ゆらゆら"],
    hp: -3,
    mp: 1,
    stats: { 察知力: 2, パパママ力: 2, 忍耐力: 1 },
    skills: [{ name: "ブランコ押し職人", exp: 9, tags: ["遊び", "公園", "リズム"] }],
    title: "ちょうどいい高さで背中を押した親",
  },
  {
    id: "bubble-play",
    words: ["シャボン玉", "しゃぼん玉", "泡遊び"],
    hp: -2,
    mp: -2,
    stats: { 察知力: 2, 知力: 1, 素直さ: 1 },
    skills: [{ name: "シャボン玉あそび", exp: 9, tags: ["遊び", "公園", "観察"], category: "遊び" }],
    title: "ふわふわを一緒に追いかけた親",
  },
  {
    id: "kickboard-practice",
    words: ["キックボード", "キックボート", "キックスケーター", "キックバイク", "ストライダー", "自転車", "三輪車", "乗れて", "練習"],
    hp: -5,
    mp: -3,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 3, 実行力: 2, 忍耐力: 1 },
    skills: [
      { name: "キックボード練習", exp: 14, tags: ["遊び", "乗り物", "練習"], category: "遊び" },
      { name: "乗り物練習サポート", exp: 10, tags: ["遊び", "乗り物", "見守り"], category: "遊び" },
      { name: "褒めるタイミング", exp: 7, tags: ["親子", "褒め", "成長"], category: "親子" },
    ],
    title: "バランスの成長を見届けた親",
  },
  {
    id: "slide-play",
    words: ["すべり台", "滑り台", "一緒に滑", "一緒にすべ", "親子で滑"],
    hp: -3,
    mp: 1,
    maxHp: 1,
    stats: { 筋力: 1, 察知力: 2, パパママ力: 2 },
    skills: [
      { name: "すべり台見守り", exp: 10, tags: ["遊び", "公園", "見守り"] },
      { name: "親子すべり台", exp: 8, tags: ["遊び", "公園", "親子"] },
    ],
    title: "すべり台の楽しさと安全を見た親",
  },
  {
    id: "climbing-play",
    words: ["ジャングルジム", "ハシゴ", "はしご", "登り", "登った", "高いところ", "城", "巨大迷路", "迷路", "大型遊具", "アスレチック"],
    hp: -5,
    mp: -2,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 4, 忍耐力: 1 },
    skills: [
      { name: "ジャングルジム見守り", exp: 12, tags: ["遊び", "公園", "見守り"] },
      { name: "ハシゴ登りサポート", exp: 10, tags: ["遊び", "公園", "支える"] },
      { name: "大型遊具攻略", exp: 10, tags: ["遊び", "公園", "大型遊具"], category: "遊び" },
    ],
    title: "高い遊具を見守った親",
  },
  {
    id: "ground-drawing",
    words: ["地面にお絵描き", "地面お絵描き", "チョーク", "石で描", "地面に描"],
    hp: -1,
    mp: 2,
    stats: { 知力: 1, 察知力: 1 },
    skills: [{ name: "地面お絵描き", exp: 9, tags: ["遊び", "創作", "公園"] }],
    title: "地面をキャンバスにした親",
  },
  {
    id: "hide-and-seek",
    words: ["かくれんぼ", "隠れ", "見つけた", "見つかった", "もういいかい"],
    hp: -3,
    mp: -2,
    stats: { 察知力: 2, 忍耐力: 1, パパママ力: 1 },
    skills: [{ name: "かくれんぼ演出", exp: 8, tags: ["遊び", "演技", "察知"] }],
    title: "見つけるタイミングを知る親",
  },
  {
    id: "toy-game-play",
    words: ["おもちゃ", "ゲーム", "カード", "積み木", "パズル"],
    hp: -1,
    mp: -3,
    stats: { 知力: 2, 察知力: 1, パパママ力: 1 },
    skills: [{ name: "おもちゃゲーム伴走", exp: 8, tags: ["遊び", "知力", "伴走"] }],
    title: "遊びのルールに付き合った親",
  },
  {
    id: "play-end-management",
    words: ["帰るよ", "帰ろう", "もう帰る", "あと1回", "あと一回", "おしまい", "終わり", "もう終わり", "切り上げ", "撤収", "片付けよう"],
    hp: -2,
    mp: -4,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 2, 忍耐力: 2 },
    skills: [
      { name: "帰宅時間管理", exp: 12, tags: ["遊び", "時間", "実行力"] },
      { name: "公園撤収オペレーション", exp: 12, tags: ["遊び", "公園", "切り替え"] },
      { name: "切り上げ管理", exp: 14, tags: ["遊び", "切り替え", "予告"] },
    ],
    title: "楽しいを切り上げる判断をした親",
  },
  {
    id: "festival-play",
    words: ["祭り", "お祭り", "縁日", "屋台", "盆踊り", "花火"],
    hp: -6,
    mp: -5,
    maxHp: 1,
    stats: { 実行力: 2, 察知力: 2, パパママ力: 2 },
    skills: [{ name: "子連れ祭り運用", exp: 12, tags: ["遊び", "イベント", "外出"] }],
    title: "人混みの中で楽しいを守った親",
  },
  {
    id: "theme-park",
    words: ["ユニバ", "USJ", "ＵＳＪ", "ディズニーランド", "ディズニーシー", "ディズニー", "アンパンマンミュージアム", "遊園地", "テーマパーク"],
    hp: -16,
    mp: 10,
    maxHp: 2,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 3, 筋力: 2, パパママ力: 3, 忍耐力: 2 },
    skills: [
      { name: "子連れテーマパーク運用", exp: 18, tags: ["遊び", "イベント", "外出"] },
      { name: "高負荷おでかけ回復", exp: 12, tags: ["遊び", "回復", "高難度"] },
    ],
    title: "しんどい一日を楽しい思い出に変えた親",
  },
  {
    id: "family-movie",
    words: ["映画", "映画館", "劇場版", "映画を見", "映画見", "映画に行", "映画行", "シアター"],
    hp: 7,
    mp: 12,
    maxHp: 1,
    maxMp: 2,
    stats: { 知力: 3, 察知力: 2, 素直さ: 2, 実行力: 1 },
    skills: [
      { name: "映画から学ぶ", exp: 16, tags: ["勉強", "映画", "回復"], category: "勉強" },
      { name: "親子お出かけ", exp: 8, tags: ["親子", "外出", "回復"], category: "親子" },
    ],
    title: "映画で一緒に回復した親",
  },
  {
    id: "character-show",
    words: [
      "アンパンマンショー",
      "ヒーローショー",
      "キャラクターショー",
      "プリキュアショー",
      "仮面ライダーショー",
      "アンパンマン",
      "ヒーロー",
      "プリキュア",
      "仮面ライダー",
      "ぬいぐるみショー",
      "着ぐるみ",
      "舞台",
      "握手会",
      "撮影会",
    ],
    hp: -3,
    mp: 11,
    maxHp: 1,
    maxMp: 2,
    stats: { 察知力: 3, 知力: 2, 実行力: 2, 素直さ: 2 },
    skills: [
      { name: "キャラショー鑑賞", exp: 16, tags: ["勉強", "ショー", "回復"], category: "勉強" },
      { name: "親子お出かけ", exp: 8, tags: ["親子", "外出", "回復"], category: "親子" },
    ],
    title: "推しの世界を一緒に見届けた親",
  },
  {
    id: "mall-outing",
    words: ["イオンモール", "イオン", "ショッピングモール", "モール", "フードコート", "キッズスペース", "ゲームセンター", "ガチャガチャ", "買い物ついで"],
    hp: -4,
    mp: 5,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 2, 知力: 1, 忍耐力: 1 },
    skills: [
      { name: "モール社会見学", exp: 14, tags: ["勉強", "買い物", "社会"], category: "勉強" },
      { name: "切り上げ管理", exp: 8, tags: ["遊び", "切り上げ", "外出"], category: "遊び" },
    ],
    title: "モールで用事と楽しみを回した親",
  },
  {
    id: "camp-outing",
    words: ["キャンプ", "テント", "バーベキュー", "BBQ", "焚き火", "寝袋", "キャンプ場", "デイキャンプ", "アウトドア"],
    hp: -16,
    mp: 9,
    maxHp: 3,
    maxMp: 2,
    stats: { 筋力: 4, 実行力: 4, 察知力: 4, 忍耐力: 3, 知力: 2 },
    skills: [
      { name: "自然体験学習", exp: 20, tags: ["勉強", "キャンプ", "自然"], category: "勉強" },
      { name: "外遊び安全管理", exp: 12, tags: ["遊び", "安全", "外出"], category: "遊び" },
    ],
    title: "自然の中で家族時間を守った親",
  },
  {
    id: "water-play",
    words: ["プール", "海", "水遊び", "水着", "浮き輪", "じゃぶじゃぶ"],
    hp: -9,
    mp: -4,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 3, 実行力: 1, パパママ力: 2 },
    skills: [
      { name: "水遊び安全管理", exp: 14, tags: ["遊び", "水遊び", "高難度"] },
      { name: "海あそび対応", exp: 10, tags: ["遊び", "水遊び", "外出"] },
    ],
    title: "水辺で楽しいと安全を両立した親",
  },
  {
    id: "clay",
    words: ["粘土", "工作", "お絵描き", "絵の具", "折り紙"],
    hp: -1,
    mp: -3,
    stats: { 知力: 1, 忍耐力: 1 },
    skills: [{ name: "創作あそび", exp: 5, tags: ["遊び", "集中"] }],
    title: "作品名を受け止める親",
  },
  {
    id: "pretend",
    words: ["おままごと", "ごっこ遊び", "ぬいぐるみ", "人形", "店員"],
    hp: -1,
    mp: -3,
    stats: { パパママ力: 1, 察知力: 1 },
    skills: [
      { name: "ごっこ設定に乗る", exp: 5, tags: ["遊び", "会話"] },
      { name: "おままごと参加", exp: 5, tags: ["遊び", "会話"] },
    ],
    title: "設定を壊さない親",
  },
  {
    id: "dance",
    words: ["ダンス", "踊", "歌", "ジャンプ", "滅", "カマキリ拳法"],
    hp: -5,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 3, パパママ力: 2, 忍耐力: 1 },
    skills: [
      { name: "全身ダンス参加", exp: 8, tags: ["遊び", "全身", "筋力"] },
      { name: "歌あそび参加", exp: 6, tags: ["遊び", "歌", "親子"] },
    ],
    title: "振付を知らない参加者",
  },
  {
    id: "catch-ball-play",
    words: ["キャッチボール", "投げた", "受けた", "キャッチ"],
    hp: -4,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 2 },
    skills: [{ name: "キャッチボール伴走", exp: 10, tags: ["遊び", "ボール", "運動"] }],
    title: "投げ返す距離を合わせた親",
  },
  {
    id: "soccer-play",
    words: ["サッカー", "キック", "蹴", "ボールを蹴"],
    hp: -5,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 3, 察知力: 1 },
    skills: [{ name: "サッカーあそび", exp: 10, tags: ["遊び", "ボール", "運動"] }],
    title: "親子キックに付き合った親",
  },
  {
    id: "dodge-ball-play",
    words: ["ドッジボール", "ドッヂボール", "当てっこ", "ボール当て"],
    hp: -5,
    mp: -2,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 3, 忍耐力: 1 },
    skills: [{ name: "ドッジボール対応", exp: 10, tags: ["遊び", "ボール", "運動"] }],
    title: "投げる強さを調整した親",
  },
  {
    id: "basket-ball-play",
    words: ["バスケ", "バウンド", "ドリブル"],
    hp: -4,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 2 },
    skills: [{ name: "バスケバウンド練習", exp: 10, tags: ["遊び", "ボール", "運動"] }],
    title: "ボールの跳ね方まで付き合った親",
  },
  {
    id: "ball-gym-play",
    words: ["ボール", "サッカー", "キャッチボール", "体操", "でんぐり返し", "マット"],
    hp: -5,
    mp: -1,
    maxHp: 1,
    stats: { 筋力: 2, 察知力: 1, パパママ力: 1 },
    skills: [{ name: "運動あそび伴走", exp: 9, tags: ["遊び", "運動", "筋力"] }],
    title: "体を動かす遊びに付き合った親",
  },
  {
    id: "picture-book",
    words: ["絵本", "読み聞かせ", "読んだ", "読書"],
    hp: -1,
    mp: 4,
    maxMp: 1,
    stats: { 知力: 3, 察知力: 1, 実行力: 1, パパママ力: 1 },
    skills: [{ name: "絵本読み聞かせ", exp: 12, tags: ["勉強", "言葉", "知力"] }],
    title: "ページをめくる親",
  },
  {
    id: "english-learning",
    words: ["英語", "ABC", "アルファベット", "英単語", "英語教育"],
    hp: -1,
    mp: 4,
    maxMp: 1,
    stats: { 知力: 4, 察知力: 2, 実行力: 1 },
    skills: [{ name: "英語あそび伴走", exp: 12, tags: ["勉強", "英語", "知力"] }],
    title: "知らない言葉の入口に立った親",
  },
  {
    id: "tablet-media-learning",
    words: ["タブレット", "映画", "アニメ", "漫画", "NHK", "ニュース", "動画"],
    hp: 0,
    mp: 3,
    maxMp: 1,
    stats: { 知力: 3, 察知力: 2, 実行力: 1 },
    skills: [{ name: "メディア学習ナビ", exp: 11, tags: ["勉強", "メディア", "知力"] }],
    title: "画面の中から学びを拾った親",
  },
  {
    id: "block-art-learning",
    words: ["ブロック", "粘土", "お絵描き", "絵の具", "工作", "折り紙"],
    hp: -2,
    mp: 4,
    maxMp: 1,
    stats: { 知力: 3, 察知力: 2, 実行力: 1, パパママ力: 1 },
    skills: [{ name: "創作知育伴走", exp: 12, tags: ["勉強", "創作", "知力"] }],
    title: "手を動かす学びに付き合った親",
  },
  {
    id: "letters-numbers",
    words: ["文字", "ひらがな", "カタカナ", "国語", "算数", "計算", "数字", "数える"],
    hp: -1,
    mp: 4,
    maxMp: 1,
    stats: { 知力: 5, 察知力: 2, 実行力: 1, 忍耐力: 1 },
    skills: [{ name: "文字数字の入口づくり", exp: 14, tags: ["勉強", "文字", "算数"] }],
    title: "文字と数字の扉を開けた親",
  },
  {
    id: "science-experiment",
    words: ["実験", "科学", "なぜ", "なんで", "しくみ", "仕組み"],
    hp: -1,
    mp: 5,
    maxMp: 1,
    stats: { 知力: 5, 察知力: 3, 実行力: 1 },
    skills: [{ name: "小さな科学対応", exp: 14, tags: ["勉強", "科学", "知力"] }],
    title: "小さな疑問を一緒に追いかけた親",
  },
  {
    id: "dinosaur-learning",
    words: ["恐竜", "絵本", "博物館", "骨", "化石", "恐竜の本"],
    hp: -4,
    mp: 7,
    maxMp: 1,
    stats: { 知力: 6, 察知力: 3, 忍耐力: 2, パパママ力: 2 },
    skills: [
      { name: "恐竜博士への道", exp: 18, tags: ["勉強", "恐竜", "知力"] },
      { name: "博物館学習ナビ", exp: 16, tags: ["勉強", "博物館", "上級"] },
      { name: "怖さの受け止め", exp: 10, tags: ["親子", "察知", "回復"] },
    ],
    title: "恐竜博士見習いを支えた親",
  },
  {
    id: "money-register-play",
    words: ["お金の計算", "お金", "レジ", "買い物ごっこ", "店員さん", "お店屋さん"],
    hp: -1,
    mp: 3,
    maxMp: 1,
    stats: { 知力: 4, 実行力: 2, 察知力: 1 },
    skills: [{ name: "お金ごっこ学習", exp: 12, tags: ["勉強", "お金", "計算"] }],
    title: "遊びの中でお金を学んだ親",
  },
  {
    id: "fashion-makeup-learning",
    words: ["お化粧", "おしゃれ", "服選び", "髪型", "アクセサリー"],
    hp: 0,
    mp: 5,
    maxMp: 1,
    stats: { 察知力: 3, 知力: 2, パパママ力: 2, 素直さ: 1 },
    skills: [{ name: "おしゃれ自己表現サポート", exp: 12, tags: ["勉強", "おしゃれ", "察知"] }],
    title: "好きな自分を選ぶ時間に付き合った親",
  },
  {
    id: "shared-excitement",
    words: ["ハマり", "大はしゃぎ", "はしゃ", "盛り上が", "爆笑", "笑った", "一緒に"],
    hp: -2,
    mp: 3,
    stats: { パパママ力: 2, 察知力: 1 },
    skills: [{ name: "子どものツボに乗る", exp: 7, tags: ["遊び", "共感"] }],
    title: "子どものツボで一緒に笑った親",
  },
  {
    id: "couple-affection",
    words: [
      "妻に可愛い",
      "妻が可愛い",
      "妻にかわいい",
      "妻がかわいい",
      "嫁に可愛い",
      "嫁が可愛い",
      "嫁にかわいい",
      "嫁がかわいい",
      "奥さんに可愛い",
      "奥さんが可愛い",
      "夫にかっこいい",
      "夫がかっこいい",
      "旦那にかっこいい",
      "旦那がかっこいい",
      "妻に素敵",
      "嫁に素敵",
      "夫に素敵",
      "旦那に素敵",
      "妻に似合う",
      "嫁に似合う",
      "夫に似合う",
      "旦那に似合う",
    ],
    hp: 3,
    mp: 10,
    stats: { 素直さ: 4, 察知力: 2, パパママ力: 1 },
    skills: [{ name: "魅力を言葉にする", exp: 10, tags: ["夫婦", "回復", "言葉"] }],
    title: "魅力をちゃんと言葉にできた親",
  },
  {
    id: "couple-love-words",
    words: ["好きって伝え", "好きと伝え", "好きと言った", "好きって言った", "好きだよ", "愛してる"],
    hp: 3,
    mp: 9,
    maxMp: 1,
    stats: { 素直さ: 2, 察知力: 1, パパママ力: 1 },
    skills: [{ name: "好きの伝達", exp: 11, tags: ["夫婦", "愛情", "回復"] }],
    title: "好きを言葉にした親",
  },
  {
    id: "thanks-sorry",
    words: ["ありがとう", "ごめん", "ごめんね", "謝った", "感謝", "助かった"],
    hp: 2,
    mp: 8,
    maxMp: 1,
    stats: { 素直さ: 4, 察知力: 2, パパママ力: 1 },
    skills: [
      { name: "ありがとう伝達", exp: 12, tags: ["夫婦", "感謝", "素直さ"] },
      { name: "ごめんね伝達", exp: 10, tags: ["夫婦", "謝る", "素直さ"] },
    ],
    title: "言えるうちに言えた親",
  },
  {
    id: "hug-recovery",
    words: ["ハグ", "ぎゅー", "抱きしめ", "抱きしめた"],
    hp: 6,
    mp: 8,
    maxMp: 1,
    stats: { 素直さ: 2, パパママ力: 3, 察知力: 1 },
    skills: [{ name: "夫婦ハグ回復", exp: 12, tags: ["夫婦", "親子", "回復"] }],
    title: "ハグで心を戻した親",
  },
  {
    id: "couple-date",
    words: ["夫婦デート", "デートした", "デートに行", "2人でお出かけ", "二人でお出かけ", "ふたりでお出かけ"],
    hp: 4,
    mp: 12,
    maxMp: 1,
    stats: { 素直さ: 2, 実行力: 2, パパママ力: 2 },
    skills: [{ name: "夫婦デート確保", exp: 12, tags: ["夫婦", "回復", "段取り"] }],
    title: "夫婦に戻る時間を作った親",
  },
  {
    id: "couple-trip",
    words: ["夫婦で旅行", "妻と旅行", "嫁と旅行", "夫と旅行", "旦那と旅行", "パートナーと旅行", "夫婦旅", "二人旅", "2人旅", "ふたり旅"],
    hp: -6,
    mp: 12,
    maxHp: 1,
    maxMp: 2,
    stats: { 素直さ: 2, 実行力: 3, 察知力: 2, 知力: 1 },
    skills: [
      { name: "夫婦デート確保", exp: 14, tags: ["夫婦", "旅行", "回復"] },
      { name: "チーム夫婦運用", exp: 12, tags: ["夫婦", "旅行", "段取り"] },
      { name: "予定すり合わせ", exp: 10, tags: ["夫婦", "旅行", "実行力"] },
    ],
    title: "ふたり旅を楽しんだ親",
  },
  {
    id: "couple-hot-spring",
    words: ["温泉", "大浴場", "露天風呂", "貸切風呂"],
    hp: 18,
    mp: 16,
    maxHp: 1,
    maxMp: 2,
    stats: { 素直さ: 2, 察知力: 2, 実行力: 2, 知力: 1 },
    skills: [
      { name: "夫婦デート確保", exp: 12, tags: ["夫婦", "温泉", "回復"] },
      { name: "ひとり時間の確保", exp: 8, tags: ["夫婦", "休息", "回復"] },
    ],
    title: "ふたりで湯にほどけた親",
  },
  {
    id: "child-hot-spring",
    words: ["温泉", "大浴場", "露天風呂", "貸切風呂"],
    hp: 22,
    mp: 7,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 2, 察知力: 2, 忍耐力: 1 },
    skills: [{ name: "親子お出かけ", exp: 8, tags: ["親子", "温泉", "回復"] }],
    title: "子連れ温泉を乗り切った親",
  },
  {
    id: "hot-spring-rest",
    words: ["温泉", "大浴場", "露天風呂", "貸切風呂"],
    hp: 7,
    mp: 7,
    maxHp: 1,
    maxMp: 1,
    stats: { 素直さ: 1, 察知力: 1 },
    skills: [{ name: "ひとり時間の確保", exp: 7, tags: ["休息", "温泉", "回復"] }],
    title: "湯で回復した親",
  },
  {
    id: "couple-childcare-date",
    words: ["子供を預けてデート", "子どもを預けてデート", "子供を預けて夫婦", "子どもを預けて夫婦", "預けてデート", "預けデート"],
    hp: 6,
    mp: 14,
    maxMp: 1,
    stats: { 素直さ: 2, 実行力: 3, パパママ力: 2 },
    skills: [{ name: "子ども預けデート", exp: 12, tags: ["夫婦", "回復", "預け"] }],
    title: "ふたり時間を再起動した親",
  },
  {
    id: "couple-anniversary",
    words: ["結婚記念日", "入籍記念日", "結婚した日", "記念日を祝"],
    hp: 4,
    mp: 12,
    maxMp: 1,
    stats: { 素直さ: 3, 実行力: 2, パパママ力: 2 },
    skills: [{ name: "結婚記念日運用", exp: 12, tags: ["夫婦", "記念日", "回復"] }],
    title: "結婚記念日を大事にした親",
  },
  {
    id: "couple-alcohol-time",
    words: ["夫婦で酎ハイ", "夫婦でチューハイ", "夫婦でお酒", "夫婦で飲", "晩酌", "酎ハイ", "チューハイ", "ビール", "ワイン", "乾杯"],
    hp: 2,
    mp: 8,
    maxMp: 1,
    stats: { 素直さ: 2, 察知力: 1, パパママ力: 1 },
    skills: [{ name: "お酒時間共有", exp: 11, tags: ["夫婦", "回復", "お酒"] }],
    title: "夫婦で乾杯できた親",
  },
  {
    id: "couple-difficult-talk",
    words: ["不満", "話し合い", "言い合い", "モヤモヤ", "相談した", "気持ちを話"],
    hp: -1,
    mp: 4,
    maxMp: 1,
    stats: { 素直さ: 3, 察知力: 2, 忍耐力: 1 },
    skills: [
      { name: "不満の話し合い", exp: 12, tags: ["夫婦", "会話", "素直さ"] },
      { name: "気持ちの言語化", exp: 9, tags: ["夫婦", "感情", "会話"] },
    ],
    title: "モヤモヤを会話に変えた親",
  },
  {
    id: "heartfelt-compliment",
    words: ["心を込めて", "そんなんちゃう", "言ってって", "言ってと", "伝えた", "可愛い可愛い"],
    hp: 1,
    mp: 4,
    stats: { 素直さ: 2, 察知力: 2, パパママ力: 1 },
    skills: [{ name: "褒め方調整", exp: 11, tags: ["夫婦", "会話", "言葉"] }],
    title: "言葉の温度を調整する親",
  },
  {
    id: "couple-memory",
    words: ["高校時代", "昔の写真", "若い頃", "思い出", "アルバム"],
    hp: 1,
    mp: 6,
    stats: { 知力: 1, パパママ力: 1 },
    skills: [
      { name: "写真と思い出共有", exp: 8, tags: ["夫婦", "記憶"] },
      { name: "昔の写真を味わう", exp: 8, tags: ["夫婦", "記憶"] },
    ],
    title: "昔の君も今の君も見た親",
  },
  {
    id: "couple-daily-share",
    words: ["今日あったこと", "今日の話", "今日の共有", "一日どうだった", "報告し合", "共有した"],
    hp: 1,
    mp: 5,
    maxMp: 1,
    stats: { 察知力: 2, 素直さ: 1 },
    skills: [{ name: "今日の共有", exp: 10, tags: ["夫婦", "会話", "回復"] }],
    title: "今日を一緒に見返した親",
  },
  {
    id: "couple-family-meeting",
    words: ["家事育児", "育児の相談", "家事の相談", "役割分担", "分担", "予定すり合わせ", "予定を合わせ", "スケジュール"],
    hp: -1,
    mp: 3,
    maxMp: 1,
    stats: { 実行力: 3, 知力: 1, 察知力: 1 },
    skills: [
      { name: "家事育児の相談", exp: 11, tags: ["夫婦", "相談", "実行力"] },
      { name: "予定すり合わせ", exp: 10, tags: ["夫婦", "予定", "実行力"] },
      { name: "役割分担調整", exp: 10, tags: ["夫婦", "分担", "実行力"] },
      { name: "チーム夫婦運用", exp: 8, tags: ["夫婦", "チーム"] },
    ],
    title: "家庭運営を話し合った親",
  },
  {
    id: "couple-venting",
    words: ["愚痴", "聞いた", "受け止め", "吐き出", "しんどい", "つらい", "疲れた", "無理"],
    hp: -1,
    mp: 5,
    maxMp: 1,
    stats: { 察知力: 3, 忍耐力: 1, 素直さ: 1 },
    skills: [
      { name: "愚痴の受け止め", exp: 11, tags: ["夫婦", "会話", "察知"] },
      { name: "しんどさ共有", exp: 11, tags: ["夫婦", "回復", "素直さ"] },
    ],
    title: "しんどさを夫婦で持った親",
  },
  {
    id: "couple-joke-night-talk",
    words: ["冗談", "笑った", "笑い合", "寝る前", "寝る前に話", "布団で話", "夜に話"],
    hp: 2,
    mp: 7,
    maxMp: 1,
    stats: { 素直さ: 1, 察知力: 1 },
    skills: [
      { name: "夫婦の冗談共有", exp: 9, tags: ["夫婦", "回復", "笑い"] },
      { name: "寝る前会話", exp: 10, tags: ["夫婦", "回復", "夜"] },
    ],
    title: "家の空気を軽くした親",
  },
  {
    id: "couple-rest-support",
    words: ["休ませた", "寝かせた", "息抜きしてもら", "一人で出かけ", "ひとりで出かけ", "時間を作った", "自由時間"],
    hp: -2,
    mp: 6,
    maxMp: 1,
    stats: { 実行力: 2, 察知力: 2, 素直さ: 1 },
    skills: [
      { name: "相手の休息支援", exp: 12, tags: ["夫婦", "休息", "察知"] },
      { name: "ひとり時間の確保", exp: 8, tags: ["夫婦", "休息"] },
    ],
    title: "相手の余白を作った親",
  },
  {
    id: "couple-self-rest",
    words: ["自分の時間", "自分も休", "休ませてもら", "息抜きできた", "ひとり時間", "一人時間"],
    hp: 6,
    mp: 8,
    maxMp: 1,
    stats: { 素直さ: 2, 察知力: 1 },
    skills: [
      { name: "自分の休息確保", exp: 11, tags: ["夫婦", "休息", "自己把握"] },
      { name: "ひとり時間の確保", exp: 8, tags: ["夫婦", "休息"] },
    ],
    title: "自分を倒れる前に整えた親",
  },
  {
    id: "couple-money-future",
    words: ["お金の相談", "家計", "貯金", "NISA", "将来", "家を買", "ローン", "教育費", "未来の話"],
    hp: -1,
    mp: 4,
    maxMp: 1,
    stats: { 知力: 3, 実行力: 1, 素直さ: 1 },
    skills: [
      { name: "夫婦の金銭相談", exp: 11, tags: ["夫婦", "お金", "知力"] },
      { name: "将来の相談", exp: 10, tags: ["夫婦", "未来", "知力"] },
    ],
    title: "未来の話を夫婦でできた親",
  },
  {
    id: "couple-repair",
    words: ["仲直り", "許して", "許した", "和解", "機嫌直", "関係を戻"],
    hp: 1,
    mp: 6,
    maxMp: 1,
    stats: { 素直さ: 3, 忍耐力: 1, 察知力: 1 },
    skills: [
      { name: "仲直り運用", exp: 12, tags: ["夫婦", "修復", "素直さ"] },
      { name: "気持ちの言語化", exp: 8, tags: ["夫婦", "感情"] },
    ],
    title: "関係を戻しにいけた親",
  },
  {
    id: "relative-help",
    words: ["手伝ってもら", "お母さんに手伝", "助けてもら", "実家に手伝", "親に手伝", "お願いした", "頼った", "甘えた", "任せた", "来てもら"],
    hp: 8,
    mp: 6,
    maxMp: 1,
    stats: { 素直さ: 4, 察知力: 2, パパママ力: 1 },
    skills: [
      { name: "手伝ってもらう素直さ", exp: 14, tags: ["親族", "素直さ", "回復"] },
      { name: "頼る判断力", exp: 10, tags: ["親族", "素直さ", "判断"] },
    ],
    title: "助けを受け取れた親",
  },
  {
    id: "relative-childcare",
    words: ["預かってもら", "預けた", "見てもらった", "子供を預け", "子どもを預け", "実家に預け", "子守り", "迎えに行ってもら", "送ってもら"],
    hp: 10,
    mp: 8,
    maxHp: 1,
    maxMp: 1,
    stats: { 素直さ: 3, 実行力: 2, 察知力: 2 },
    skills: [
      { name: "子ども預け連携", exp: 14, tags: ["親族", "段取り", "回復"] },
      { name: "手伝ってもらう素直さ", exp: 8, tags: ["親族", "素直さ", "回復"] },
    ],
    title: "預けて回復する選択ができた親",
  },
  {
    id: "cousin-play",
    words: ["甥っ子", "姪っ子", "甥", "姪", "いとこ", "従兄弟", "従姉妹"],
    hp: -3,
    mp: 6,
    stats: { パパママ力: 2, 察知力: 2, 筋力: 1 },
    skills: [
      { name: "甥っ子姪っ子交流", exp: 10, tags: ["親族", "遊び", "回復"] },
      { name: "いとこ遊び調整", exp: 8, tags: ["親族", "遊び", "調整"] },
    ],
    title: "親族の子どもたちとも遊んだ親",
  },
  {
    id: "family-gathering",
    words: ["親族との交流", "親族", "家族で集ま", "実家", "義実家", "祖父", "祖母", "じいじ", "ばあば", "会った", "話した"],
    hp: -2,
    mp: 3,
    stats: { 察知力: 2, 素直さ: 1, パパママ力: 1 },
    skills: [
      { name: "親戚交友力", exp: 12, tags: ["親族", "社交"] },
      { name: "親族あいさつ運用", exp: 6, tags: ["親族", "あいさつ"] },
    ],
    title: "家族の輪に入っていった親",
  },
  {
    id: "mitene-update",
    words: ["みてね", "写真あげ", "写真入れ", "動画あげ", "アルバムに入れ", "家族アルバム"],
    hp: 1,
    mp: 5,
    maxMp: 1,
    stats: { 素直さ: 2, 察知力: 1, 実行力: 1 },
    skills: [
      { name: "みてね更新", exp: 14, tags: ["親族", "写真", "共有"] },
      { name: "写真動画共有", exp: 10, tags: ["親族", "写真", "動画"] },
    ],
    title: "家族アルバムを更新した親",
  },
  {
    id: "relative-photo-organize",
    words: ["写真整理", "アルバム整理", "写真を整理", "昔の写真", "写真印刷", "フォトブック"],
    hp: 0,
    mp: 4,
    stats: { 実行力: 2, 察知力: 1 },
    skills: [{ name: "親族写真整理", exp: 10, tags: ["親族", "写真", "記録"] }],
    title: "家族の記録を整えた親",
  },
  {
    id: "relative-visit-prep",
    words: ["手土産", "来る準備", "行く準備", "訪問準備", "泊まり準備", "布団を用意", "部屋を片付け", "チャイルドシート準備"],
    hp: -2,
    mp: -2,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 2 },
    skills: [{ name: "親族訪問準備", exp: 12, tags: ["親族", "準備", "実行力"] }],
    title: "親族訪問の前段取りを整えた親",
  },
  {
    id: "relative-gift",
    words: ["プレゼント", "誕生日グッズ", "服を買ってくれ", "買ってくれ", "送ってくれ", "もらった", "いただきもの"],
    hp: 2,
    mp: 6,
    stats: { 素直さ: 3, 察知力: 1 },
    skills: [
      { name: "プレゼント受け取り対応", exp: 12, tags: ["親族", "贈り物", "感謝"] },
      { name: "いただきもの管理", exp: 8, tags: ["親族", "贈り物", "管理"] },
    ],
    title: "贈り物を受け取れた親",
  },
  {
    id: "relative-thanks",
    words: ["ありがとう", "助かった", "感謝", "お礼", "ありがたい", "嬉しかった"],
    hp: 2,
    mp: 7,
    maxMp: 1,
    stats: { 素直さ: 4, 察知力: 1 },
    skills: [{ name: "親族感謝伝達", exp: 13, tags: ["親族", "感謝", "素直さ"] }],
    title: "親族にありがとうを渡した親",
  },
  {
    id: "child-love-recovery",
    words: ["パパ大好き", "ママ大好き", "パパ好き", "ママ好き"],
    hp: 6,
    mp: 8,
    maxMp: 1,
    stats: { パパママ力: 3, 素直さ: 2, 察知力: 1 },
    skills: [
      { name: "大好き受け取り", exp: 14, tags: ["親子", "回復", "素直さ"] },
      { name: "好き受け取り", exp: 5, tags: ["親子", "回復", "素直さ"] },
    ],
    title: "好きをちゃんと受け取った親",
  },
  {
    id: "child-rejection-patience",
    words: ["パパ嫌い", "ママ嫌い", "パパきらい", "ママきらい", "パパ大っ嫌い", "ママ大っ嫌い", "あっち行って", "来ないで"],
    hp: -2,
    mp: -6,
    maxMp: 1,
    stats: { 忍耐力: 3, 察知力: 2, 素直さ: 1 },
    skills: [
      { name: "パパママ嫌いの受け止め", exp: 14, tags: ["親子", "忍耐", "察知"] },
      { name: "パパママ大っ嫌い耐久", exp: 10, tags: ["親子", "高難度", "MP"] },
    ],
    title: "嫌いの奥にある気持ちを待った親",
  },
  {
    id: "piggyback-outing",
    words: ["お出かけ", "親子でお出かけ", "娘とお出かけ", "息子とお出かけ"],
    hp: -4,
    mp: 6,
    maxHp: 1,
    stats: { 筋力: 2, パパママ力: 2, 実行力: 1 },
    skills: [{ name: "親子お出かけ", exp: 12, tags: ["親子", "外出", "回復"] }],
    title: "一緒に外へ出た親",
  },
  {
    id: "why-interest",
    words: ["しくみ", "なぜ", "なんで", "理由", "仕組み"],
    hp: 0,
    mp: -2,
    stats: { 知力: 1, 察知力: 1 },
    skills: [{ name: "なぜなぜ対応", exp: 5, tags: ["学び", "会話"] }],
    title: "小さな疑問に付き合った親",
  },
  {
    id: "parent-child-request",
    words: ["抱っこして", "だっこして", "甘え", "くっついて", "膝に乗", "見て見て", "みてみて", "聞いて聞いて", "きいてきいて", "パパ見て", "ママ見て"],
    hp: -2,
    mp: 4,
    maxMp: 1,
    stats: { 察知力: 3, 素直さ: 1, 忍耐力: 1 },
    skills: [
      { name: "甘え受け止め", exp: 10, tags: ["親子", "安心", "回復"] },
      { name: "抱っこリクエスト対応", exp: 10, tags: ["親子", "抱っこ"] },
      { name: "見て見て対応", exp: 9, tags: ["親子", "注目"] },
      { name: "聞いて聞いて対応", exp: 9, tags: ["親子", "会話"] },
    ],
    title: "小さな呼びかけに応えた親",
  },
  {
    id: "parent-child-hug",
    words: ["ぎゅー", "ギュー", "ハグ", "抱きしめ", "寝る前にぎゅ", "おやすみぎゅ"],
    hp: 5,
    mp: 8,
    maxMp: 1,
    stats: { 素直さ: 2, 察知力: 1 },
    skills: [{ name: "ぎゅー回復", exp: 12, tags: ["親子", "回復", "愛情"] }],
    title: "ぎゅーで回復した親",
  },
  {
    id: "parent-child-charge",
    words: ["突進", "飛びつ", "抱きつ", "パパに突進", "ママに突進", "おかえり", "帰ってきたら", "帰ったら"],
    hp: 3,
    mp: 8,
    maxHp: 1,
    stats: { 筋力: 1, 素直さ: 1, 察知力: 1 },
    skills: [
      { name: "突進受け止め", exp: 11, tags: ["親子", "再会", "回復"] },
      { name: "帰宅後の再会", exp: 11, tags: ["親子", "帰宅", "回復"] },
    ],
    title: "帰宅後の愛情を受け止めた親",
  },
  {
    id: "parent-call-response",
    words: ["パパ呼", "ママ呼", "パパって", "ママって", "呼ばれた", "返事した"],
    hp: 1,
    mp: 4,
    stats: { 察知力: 2, 素直さ: 1 },
    skills: [
      { name: "パパママ呼び反応", exp: 9, tags: ["親子", "呼び声"] },
      { name: "名前を呼ぶ幸せ", exp: 7, tags: ["親子", "呼び名"] },
    ],
    title: "呼び声に返事した親",
  },
  {
    id: "self-do-watch",
    words: ["自分でやる", "自分で！", "自分でする", "自分でやりたい", "手を出さず", "最後まで待", "見守った"],
    hp: -5,
    mp: -14,
    maxMp: 1,
    stats: { 実行力: 4, 察知力: 5, 忍耐力: 5, 素直さ: 1 },
    skills: [{ name: "自分でやる見守り", exp: 16, tags: ["親子", "見守り", "高難度"] }],
    title: "自分でやるを見守った親",
  },
  {
    id: "iyaiya-watch",
    words: ["イヤイヤ", "いやいや", "いやだ", "イヤだ", "ぐず", "反抗", "やらない"],
    hp: -2,
    mp: -8,
    maxMp: 1,
    stats: { 忍耐力: 3, 察知力: 3, 素直さ: 1 },
    skills: [{ name: "イヤイヤ受け止め", exp: 12, tags: ["親子", "忍耐", "察知"] }],
    title: "イヤの奥を見守った親",
  },
  {
    id: "achievement-share",
    words: ["できた", "できるようになった", "上手になった", "褒めた", "すごいね", "えらいね", "頑張ったね"],
    hp: 3,
    mp: 6,
    maxMp: 1,
    stats: { 察知力: 3, 素直さ: 2 },
    skills: [
      { name: "褒めるタイミング", exp: 10, tags: ["親子", "褒め"] },
      { name: "できた共有", exp: 12, tags: ["親子", "成長", "回復"] },
    ],
    title: "できた瞬間を一緒に喜んだ親",
  },
  {
    id: "child-charm-reaction",
    words: [
      "うちの子が可愛い",
      "うちの子可愛い",
      "うちの子がかわいい",
      "うちの子かわいい",
      "子どもが可愛い",
      "子供が可愛い",
      "娘が可愛い",
      "息子が可愛い",
      "可愛すぎる",
      "かわいすぎる",
      "何してても可愛い",
      "何しててもかわいい",
      "何着せても似合う",
      "娘に似合う",
      "息子に似合う",
      "かっこいいー",
      "かっこいいね",
    ],
    hp: 4,
    mp: 7,
    maxMp: 1,
    stats: { 素直さ: 2, 察知力: 2, パパママ力: 2 },
    skills: [
      { name: "褒めるタイミング", exp: 10, tags: ["親子", "褒め", "回復"] },
      { name: "成長にじーん", exp: 7, tags: ["親子", "愛情", "記録"] },
    ],
    title: "うちの子かわいいを受け止めた親",
  },
  {
    id: "child-growth-emotion",
    words: ["身体測定", "身長", "体重", "大きくなった", "成長を感じ", "じーん", "ジーン", "服が小さ", "初めてでき"],
    hp: 2,
    mp: 8,
    maxMp: 1,
    stats: { 察知力: 3, 素直さ: 2, 知力: 1 },
    skills: [{ name: "成長にじーん", exp: 13, tags: ["親子", "成長", "記録"] }],
    title: "成長にじーんとした親",
  },
  {
    id: "shared-parent-child-emotion",
    words: ["一緒に笑", "大笑い", "爆笑", "一緒に驚", "びっくり", "一緒に悔", "悔しが"],
    hp: 2,
    mp: 5,
    stats: { 察知力: 2, 素直さ: 1 },
    skills: [
      { name: "一緒に笑う", exp: 10, tags: ["親子", "笑い", "回復"] },
      { name: "一緒に驚く", exp: 8, tags: ["親子", "発見"] },
      { name: "一緒に悔しがる", exp: 8, tags: ["親子", "感情"] },
    ],
    title: "同じ気持ちで隣にいた親",
  },
  {
    id: "child-feeling-translate",
    words: ["気持ちを代弁", "気持ちを言葉", "本当は", "言いたかった", "悲しかったん", "悔しかったん", "寂しかったん"],
    hp: -1,
    mp: -5,
    maxMp: 1,
    stats: { 察知力: 5, 知力: 2, 忍耐力: 1 },
    skills: [{ name: "気持ちの代弁", exp: 14, tags: ["親子", "察知", "言葉"] }],
    title: "小さな気持ちを言葉にした親",
  },
  {
    id: "parent-child-repair",
    words: ["怒った後", "怒りすぎ", "フォロー", "仲直り", "謝った", "ごめんねした", "泣いた後", "安心させ"],
    hp: -1,
    mp: 3,
    maxMp: 1,
    stats: { 素直さ: 4, 察知力: 3, 忍耐力: 2 },
    skills: [
      { name: "仲直り親子", exp: 10, tags: ["親子", "修復"] },
      { name: "怒った後のフォロー", exp: 12, tags: ["親子", "フォロー"] },
      { name: "泣いた後の安心作り", exp: 10, tags: ["親子", "安心"] },
    ],
    title: "怒った後も戻りにいけた親",
  },
  {
    id: "parent-child-promise-secret",
    words: ["約束", "秘密", "内緒", "ふたりだけ", "二人だけ", "また行こう", "今度しよう"],
    hp: 1,
    mp: 5,
    maxMp: 1,
    stats: { 素直さ: 2, 実行力: 1, 察知力: 1 },
    skills: [
      { name: "親子の約束", exp: 10, tags: ["親子", "約束"] },
      { name: "親子の秘密共有", exp: 8, tags: ["親子", "秘密"] },
    ],
    title: "親子だけの約束を持った親",
  },
  {
    id: "piyolog",
    words: ["ピヨログ", "記録", "オムツ", "おむつ", "うんち", "ウンチ", "ミルク"],
    hp: -3,
    mp: -3,
    stats: { 実行力: 1, パパママ力: 1 },
    skills: [
      { name: "連絡帳・ピヨログ記録", exp: 8, tags: ["育児", "生活", "記録"] },
      { name: "おむつ替え", exp: 5, tags: ["育児", "おむつ"] },
      { name: "うんち対応", exp: 5, tags: ["育児", "記録"] },
    ],
    title: "記録を残す親",
  },
  {
    id: "food",
    words: ["料理", "ごはん", "ご飯", "食事", "幼児食", "弁当", "買い物", "スーパー", "炊いて", "炊飯", "野菜", "そぼろ", "冷凍", "作り置き", "唐揚げ", "からあげ", "揚げた"],
    hp: -7,
    mp: -6,
    maxHp: 1,
    stats: { 実行力: 3, 知力: 2, パパママ力: 2, 忍耐力: 1 },
    skills: [{ name: "食事提供", exp: 10, tags: ["家事", "料理", "生活", "実行力"] }],
    title: "食卓を回す親",
  },
  {
    id: "karaage-standard",
    words: ["唐揚げ", "からあげ", "から揚げ", "揚げた", "毎週の定番", "定番になって"],
    hp: -6,
    mp: 3,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 4, 筋力: 1, 知力: 2, 素直さ: 1 },
    skills: [
      { name: "定番ごはん化", exp: 16, tags: ["料理", "定番", "継続"] },
      { name: "リクエスト料理対応", exp: 12, tags: ["料理", "親子", "リクエスト"] },
      { name: "週次ごはんルーティン", exp: 10, tags: ["料理", "継続", "生活"] },
    ],
    title: "また食べたいを作れた親",
  },
  {
    id: "milk-operation",
    words: ["ミルク", "白湯", "哺乳瓶", "粉ミルク", "ミルクを買う", "調乳"],
    hp: -3,
    mp: -4,
    maxMp: 1,
    stats: { 実行力: 2, 察知力: 2, パパママ力: 2 },
    skills: [{ name: "ミルク準備", exp: 12, tags: ["育児", "ミルク", "補給"] }],
    title: "ミルクの補給線を守った親",
  },
  {
    id: "baby-food-stock",
    words: ["離乳食", "冷凍", "野菜", "煮", "そぼろ", "ご飯炊", "炊いて", "毎週"],
    hp: -8,
    mp: -5,
    maxHp: 1,
    stats: { 実行力: 4, 知力: 2, パパママ力: 3, 忍耐力: 2 },
    skills: [
      { name: "離乳食ストック作成", exp: 16, tags: ["家事", "料理", "離乳食", "冷凍"] },
      { name: "食材下ごしらえ", exp: 10, tags: ["家事", "料理", "野菜", "そぼろ"] },
      { name: "離乳食提供", exp: 8, tags: ["育児", "離乳食"] },
    ],
    title: "冷凍庫に未来のごはんを仕込んだ親",
  },
  {
    id: "porridge-puree",
    words: ["おかゆ", "お粥", "倍がゆ", "10倍がゆ", "７倍がゆ", "7倍がゆ", "５倍がゆ", "5倍がゆ", "ペースト", "すりつぶ"],
    hp: -5,
    mp: -6,
    maxMp: 1,
    stats: { 知力: 3, 実行力: 2, 察知力: 2, パパママ力: 2 },
    skills: [{ name: "離乳食ストック作成", exp: 14, tags: ["家事", "料理", "離乳食", "知力"] }],
    title: "食べられる形まで寄り添った親",
  },
  {
    id: "rice-cooking",
    words: ["炊飯", "ご飯炊", "ごはん炊", "米を炊", "お米", "炊いて"],
    hp: -3,
    mp: -2,
    maxHp: 1,
    stats: { 実行力: 2, パパママ力: 1 },
    skills: [{ name: "炊飯ルーティン", exp: 9, tags: ["家事", "料理", "炊飯", "生活"] }],
    title: "炊飯で食卓の土台を作った親",
  },
  {
    id: "meal-assist-water",
    words: ["食事介助", "食べさせ", "スプーン", "こぼした", "食べムラ", "水分補給", "麦茶", "お茶を飲", "水を飲"],
    hp: -3,
    mp: -4,
    maxMp: 1,
    stats: { 察知力: 3, 忍耐力: 2, 実行力: 1 },
    skills: [
      { name: "食事介助", exp: 11, tags: ["育児", "食事", "忍耐"] },
      { name: "水分補給管理", exp: 10, tags: ["育児", "水分", "察知"] },
    ],
    title: "食べる飲むを見守った親",
  },
  {
    id: "nap-design",
    words: ["お昼寝", "昼寝", "寝る時間", "眠そう", "昼寝設計", "お昼寝設計"],
    hp: -2,
    mp: -4,
    maxMp: 1,
    stats: { 察知力: 3, 実行力: 1, 忍耐力: 1 },
    skills: [{ name: "お昼寝設計", exp: 11, tags: ["育児", "睡眠", "察知"] }],
    title: "眠気のタイミングを見た親",
  },
  {
    id: "instant-emergency-food",
    words: ["カップラーメン", "カップ麺", "カップスープ", "コンビニ飯", "冷凍食品", "レトルト", "マクド", "マック", "ハッピーセット", "ハンバーガー", "フライドポテト", "ポテト"],
    hp: 2,
    mp: 3,
    maxMp: 1,
    stats: { 実行力: 1, 素直さ: 1, 知力: 1 },
    skills: [{ name: "食事提供", exp: 10, tags: ["家事", "料理", "回復", "判断"] }],
    title: "今日はこれでいいを選べた親",
  },
  {
    id: "rice-ball-snack",
    words: ["おにぎり", "おやつ", "補食", "軽食"],
    hp: -2,
    mp: 2,
    stats: { 実行力: 1, 察知力: 1, パパママ力: 1 },
    skills: [{ name: "おやつ調達", exp: 8, tags: ["家事", "料理", "おやつ", "親子"] }],
    title: "小さなお腹を支えた親",
  },
  {
    id: "sweet-recovery",
    words: ["スイーツ", "お菓子", "甘いもの", "甘い物", "ケーキ", "ケーキ屋", "ケーキ屋さん", "モンブラン", "アイス", "プリン", "饅頭", "まんじゅう", "食べて回復", "食べたら回復", "買って食べ"],
    hp: 3,
    mp: 5,
    maxMp: 1,
    stats: { 素直さ: 1, 察知力: 1 },
    skills: [{ name: "おやつ調達", exp: 8, tags: ["家事", "料理", "スイーツ", "回復"] }],
    title: "甘いもので持ち直した親",
  },
  {
    id: "soup-miso",
    words: ["スープ", "味噌汁", "お味噌汁", "みそ汁", "汁物"],
    hp: -3,
    mp: -2,
    stats: { 知力: 1, 実行力: 2, パパママ力: 1 },
    skills: [{ name: "食事提供", exp: 9, tags: ["家事", "料理", "スープ", "生活"] }],
    title: "一杯で食卓を温めた親",
  },
  {
    id: "kitchen-tools",
    words: ["包丁", "まな板", "切った", "刻んだ", "みじん切り"],
    hp: -4,
    mp: -3,
    stats: { 実行力: 2, 知力: 1, 忍耐力: 1 },
    skills: [{ name: "食材下ごしらえ", exp: 10, tags: ["家事", "料理", "下ごしらえ", "実行力"] }],
    title: "まな板の上で未来を刻んだ親",
  },
  {
    id: "appliance-cooking",
    words: ["レンジ", "電子レンジ", "オーブン", "温め", "焼いた"],
    hp: -2,
    mp: -2,
    stats: { 知力: 2, 実行力: 1 },
    skills: [{ name: "食事提供", exp: 9, tags: ["家事", "料理", "レンジ", "オーブン"] }],
    title: "道具を使って食卓を早めた親",
  },
  {
    id: "tea-dish-line",
    words: ["食器", "洗い物", "皿洗い", "お茶作り", "麦茶", "やかん", "お茶"],
    hp: -3,
    mp: -2,
    maxMp: 1,
    stats: { 実行力: 2, 察知力: 2, パパママ力: 1 },
    skills: [
      { name: "麦茶補給ライン", exp: 7, tags: ["家事", "お茶", "補給"] },
      { name: "洗い物完了", exp: 7, tags: ["家事", "洗い物"] },
    ],
    title: "食後まで食卓を閉じた親",
  },
  {
    id: "food-shopping",
    words: ["ミルクを買う", "離乳食を買う", "おやつを買う", "食器購入", "買ってきた", "スーパー"],
    hp: -4,
    mp: -3,
    maxHp: 1,
    stats: { 実行力: 3, 察知力: 2, 知力: 1 },
    skills: [{ name: "食材買い出し", exp: 11, tags: ["家事", "買い物", "補給"] }],
    title: "食卓の在庫を切らさなかった親",
  },
  {
    id: "shopping-reminder-success",
    words: ["LINE", "ライン", "買い物メモ", "買い物リスト", "リマインダー", "忘れず買", "ちゃんと買", "買ってきた"],
    hp: -2,
    mp: 1,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 2, 素直さ: 1 },
    skills: [
      { name: "買い忘れ防止", exp: 12, tags: ["家事", "買い物", "メモ", "リマインダー"] },
      { name: "消耗品補給", exp: 6, tags: ["家事", "補給"] },
    ],
    title: "頼まれた買い物を回収した親",
  },
  {
    id: "shopping-reminder-miss",
    words: ["買い忘れ", "買い忘れた", "買ってこなかった", "買って来なかった", "入れ忘れ", "リマインダーに入れ忘", "メモしたのに忘", "LINEで送ったのに"],
    hp: 0,
    mp: -6,
    maxMp: 2,
    stats: { 実行力: -2, 素直さ: 2, 察知力: 2 },
    skills: [{ name: "買い忘れ防止", exp: 10, tags: ["家事", "失敗", "改善", "メモ"] }],
    title: "買い忘れから仕組みに戻る親",
  },
  {
    id: "shopping-learning-bridge",
    words: ["何買ってきた", "買ってきたもの", "買ってきた物", "見て勉強", "野菜やお肉", "食材を見", "買ったものを見", "一緒に買い物", "子どもと買い物", "娘と買い物", "息子と買い物", "スーパーで勉強", "レジを見"],
    hp: -3,
    mp: 5,
    maxHp: 1,
    maxMp: 1,
    stats: { 知力: 5, 実行力: 3, 察知力: 3, パパママ力: 2 },
    skills: [
      { name: "食材買い出し", exp: 18, tags: ["家事", "買い物", "上級"] },
      { name: "冷蔵庫在庫管理", exp: 10, tags: ["家事", "食材", "知力"] },
      { name: "買い物社会学習", exp: 14, tags: ["勉強", "生活", "親子"], category: "勉強" },
    ],
    title: "買い物を学びに変えた親",
  },
  {
    id: "cake-baking",
    words: ["ケーキ作り", "ケーキを作", "ケーキ", "オーブン", "誕生日ケーキ"],
    hp: -7,
    mp: 4,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 3, 知力: 2, パパママ力: 3 },
    skills: [{ name: "調理家電活用", exp: 10, tags: ["家事", "料理", "ケーキ"] }],
    title: "甘い記念日を焼き上げた親",
  },
  {
    id: "weekly-meal-prep",
    words: ["毎週", "作って", "冷凍", "今日も頑張った", "頑張った"],
    hp: -3,
    mp: 3,
    stats: { 実行力: 2, 素直さ: 1, パパママ力: 1 },
    skills: [{ name: "作り置き運用", exp: 12, tags: ["家事", "継続", "生活"] }],
    title: "毎週のごはんラインを守った親",
  },
  {
    id: "cleaning",
    words: ["掃除", "掃除機", "クイックル", "雑巾", "毎日掃除", "こまめな掃除", "拭き掃除", "年末年始の掃除"],
    hp: -5,
    mp: -3,
    maxHp: 1,
    stats: { 実行力: 3, 察知力: 3, 忍耐力: 1 },
    skills: [{ name: "掃除機運用", exp: 12, tags: ["家事", "掃除", "実行力", "察知力"] }],
    title: "家の見えない場所を見る親",
  },
  {
    id: "diaper-trash",
    words: ["おむつの処理", "オムツの処理", "うんちの処理", "ウンチの処理", "おむつ捨て", "オムツ捨て", "ポリ袋"],
    hp: -3,
    mp: -4,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 3, 忍耐力: 2 },
    skills: [{ name: "おむつ処理", exp: 12, tags: ["家事", "掃除", "育児", "処理"] }],
    title: "臭いが広がる前に動いた親",
  },
  {
    id: "trash-collection",
    words: ["ごみ処理", "ゴミ処理", "ゴミ箱", "ごみ箱", "ゴミを回収", "ごみを回収", "ゴミ出し", "ごみ出し", "ゴミ袋"],
    hp: -5,
    mp: -3,
    maxHp: 1,
    stats: { 実行力: 4, 察知力: 3 },
    skills: [{ name: "ゴミ捨て運用", exp: 13, tags: ["家事", "掃除", "ゴミ", "実行力"] }],
    title: "家中のゴミを一手に集めた親",
  },
  {
    id: "daily-consumable-supply",
    words: [
      "消耗品",
      "ラップ",
      "アルミホイル",
      "キッチンペーパー",
      "ティッシュ",
      "トイレットペーパー",
      "洗剤",
      "柔軟剤",
      "漂白剤",
      "洗濯槽ハイター",
      "洗濯槽クリーナー",
      "シャンプー",
      "リンス",
      "コンディショナー",
      "ボディーソープ",
      "ハンドソープ",
      "おしりふき",
      "ウェットティッシュ",
      "電池",
      "日用品",
    ],
    hp: -2,
    mp: -2,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 3, 知力: 1 },
    skills: [
      { name: "消耗品補給", exp: 13, tags: ["家事", "補給", "察知力"] },
      { name: "買い忘れ防止", exp: 6, tags: ["家事", "買い物", "メモ"] },
    ],
    title: "生活消耗品を切らさなかった親",
  },
  {
    id: "room-layout-change",
    words: ["模様替え", "レイアウト", "家具移動", "配置換え", "配置替え", "部屋づくり", "生活導線", "導線", "ベビーゲート", "棚を移動"],
    hp: -7,
    mp: -4,
    maxHp: 2,
    maxMp: 1,
    stats: { 実行力: 4, 知力: 3, 察知力: 3 },
    skills: [
      { name: "生活導線リフォーム", exp: 16, tags: ["家事", "収納", "導線"] },
      { name: "収納導線づくり", exp: 10, tags: ["家事", "収納"] },
    ],
    title: "部屋の動線を作り替えた親",
  },
  {
    id: "trash-sorting",
    words: ["分別", "ペットボトル", "缶", "瓶", "燃えないごみ", "燃えないゴミ", "資源ごみ", "資源ゴミ"],
    hp: -3,
    mp: -5,
    maxMp: 1,
    stats: { 知力: 2, 実行力: 3, 察知力: 3 },
    skills: [{ name: "分別判断", exp: 12, tags: ["掃除", "分別", "知力"] }],
    title: "分別の迷宮を抜けた親",
  },
  {
    id: "large-disposal",
    words: ["大型家具", "粗大ごみ", "粗大ゴミ", "廃棄処理", "捨てに行", "処分した"],
    hp: -10,
    mp: -6,
    maxHp: 2,
    stats: { 筋力: 2, 実行力: 4, 察知力: 2, 知力: 1 },
    skills: [{ name: "大型廃棄オペレーション", exp: 16, tags: ["掃除", "高負荷", "実行力"] }],
    title: "大物を家から退場させた親",
  },
  {
    id: "bath-water-cleaning",
    words: ["お風呂掃除", "風呂掃除", "水回り", "洗面所", "トイレ掃除", "排水口"],
    hp: -6,
    mp: -4,
    maxHp: 1,
    stats: { 実行力: 3, 察知力: 4, 忍耐力: 1 },
    skills: [{ name: "水回り防衛", exp: 14, tags: ["掃除", "水回り", "察知力"] }],
    title: "水回りの平和を守った親",
  },
  {
    id: "toy-book-tidy",
    words: ["おもちゃの片付け", "おもちゃ片付け", "絵本の整理", "絵本整理", "片付け"],
    hp: -3,
    mp: -3,
    stats: { 実行力: 3, 察知力: 2, パパママ力: 1 },
    skills: [{ name: "おもちゃ絵本リセット", exp: 12, tags: ["掃除", "片付け", "親子"] }],
    title: "遊び終わった部屋を戻した親",
  },
  {
    id: "kids-art-archive",
    words: ["子供の制作物", "子どもの制作物", "制作物の整理", "作品整理", "保育園の作品"],
    hp: -2,
    mp: -5,
    maxMp: 1,
    stats: { 察知力: 3, 知力: 2, 実行力: 2, パパママ力: 1 },
    skills: [{ name: "制作物アーカイブ", exp: 12, tags: ["掃除", "整理", "記念"] }],
    title: "小さな作品の行き先を作った親",
  },
  {
    id: "laundry",
    words: ["洗濯", "日々の洗濯", "毎日洗濯", "外干し", "外ぼし"],
    hp: -5,
    mp: -2,
    maxHp: 1,
    stats: { 実行力: 3, 知力: 2, 察知力: 1 },
    skills: [{ name: "洗濯ルーティン運用", exp: 12, tags: ["洗濯", "実行力", "HP"] }],
    title: "洗濯機を止めない親",
  },
  {
    id: "laundry-machine-investment",
    words: ["ドラム式", "洗濯機の購入", "ドラム式洗濯機", "乾燥機", "洗濯機買"],
    hp: -2,
    mp: -6,
    maxHp: 1,
    maxMp: 1,
    stats: { 知力: 5, 実行力: 3, 察知力: 2 },
    skills: [{ name: "洗濯インフラ投資", exp: 16, tags: ["洗濯", "知力", "設備"] }],
    title: "洗濯インフラを整えた親",
  },
  {
    id: "newborn-laundry",
    words: ["新生児", "1日2回", "1日３回", "1日3回", "２・３回", "2・3回", "何回も洗濯"],
    hp: -10,
    mp: -5,
    maxHp: 2,
    stats: { 実行力: 4, 知力: 2, 忍耐力: 3, 察知力: 2 },
    skills: [{ name: "新生児洗濯サバイブ", exp: 18, tags: ["洗濯", "新生児", "高負荷"] }],
    title: "新生児期の洗濯波を越えた親",
  },
  {
    id: "fold-store-laundry",
    words: ["洗濯物畳", "洗濯物を畳", "畳む", "たたむ", "洗濯物を直す", "しまう", "収納した"],
    hp: -3,
    mp: -3,
    maxHp: 1,
    stats: { 実行力: 3, 知力: 2, 察知力: 1 },
    skills: [{ name: "畳んでしまう完了力", exp: 12, tags: ["洗濯", "収納", "実行力"] }],
    title: "洗濯を畳むところまで終わらせた親",
  },
  {
    id: "laundry-tools",
    words: ["洗濯物の竿", "物干し竿", "紐を買", "洗濯紐", "ハンガーの整理", "ハンガー整理"],
    hp: -3,
    mp: -4,
    maxHp: 1,
    stats: { 知力: 3, 実行力: 3, 察知力: 2 },
    skills: [{ name: "干す導線設計", exp: 13, tags: ["洗濯", "知力", "導線"] }],
    title: "干す場所まで設計した親",
  },
  {
    id: "large-fabric-care",
    words: ["カーテン洗", "ベットマット", "ベッドマット", "通気", "立てる", "ぬいぐるみを洗", "ぬいぐるみ洗"],
    hp: -8,
    mp: -4,
    maxHp: 2,
    stats: { 実行力: 3, 知力: 3, 筋力: 2, 察知力: 2 },
    skills: [{ name: "大型布物メンテ", exp: 16, tags: ["洗濯", "高負荷", "知力"] }],
    title: "大きな布物まで面倒を見た親",
  },
  {
    id: "prewash-prep",
    words: ["水通し", "新しいおもちゃ", "新しい服", "タグを切", "タグ切", "ワッペン", "雑巾作り"],
    hp: -4,
    mp: -5,
    maxMp: 1,
    stats: { 知力: 4, 実行力: 3, 察知力: 2, パパママ力: 1 },
    skills: [{ name: "使う前の準備洗濯", exp: 14, tags: ["洗濯", "準備", "知力"] }],
    title: "使う前から整えた親",
  },
  {
    id: "storage",
    words: ["収納", "収納棚", "仕切り", "タンス", "壁掛け", "ウォールポケット", "洗濯かご", "おもちゃ箱", "薬の収納"],
    hp: -3,
    mp: -4,
    stats: { 知力: 1, 実行力: 1, 察知力: 1 },
    skills: [{ name: "収納設計", exp: 5, tags: ["収納", "生活"] }],
    title: "置き場を作る親",
  },
  {
    id: "family-finance",
    words: ["家計", "家計簿", "節約", "無駄遣い", "銀行", "貯金", "家賃", "ローン"],
    hp: -1,
    mp: -5,
    maxMp: 1,
    stats: { 知力: 4, 実行力: 2, 察知力: 2 },
    skills: [{ name: "家計見える化", exp: 12, tags: ["家計設計", "知力", "生活"] }],
    title: "財布のHPを見える化した親",
  },
  {
    id: "investment-design",
    words: ["NISA", "新NISA", "iDeCo", "iDECO", "投資", "積立", "つみたて"],
    hp: 0,
    mp: -6,
    maxMp: 1,
    stats: { 知力: 6, 実行力: 2, 察知力: 2 },
    skills: [{ name: "未来資産設計", exp: 16, tags: ["家計設計", "投資", "知力"] }],
    title: "未来の家計に種をまいた親",
  },
  {
    id: "benefit-hunting",
    words: ["給付金", "クーポン", "福利厚生", "自治体", "育児センター", "支援センター", "申請", "制度"],
    hp: -1,
    mp: -7,
    maxMp: 1,
    stats: { 知力: 6, 実行力: 3, 察知力: 3 },
    skills: [{ name: "制度回収アンテナ", exp: 18, tags: ["家計設計", "制度", "知力"] }],
    title: "使える制度を取りに行った親",
  },
  {
    id: "saving-shopping",
    words: ["買い物", "自炊", "節約", "安く", "セール", "まとめ買い", "ポイント"],
    hp: -2,
    mp: -3,
    maxHp: 1,
    stats: { 知力: 4, 実行力: 3, 察知力: 2 },
    skills: [{ name: "節約買い物判断", exp: 13, tags: ["家計設計", "買い物", "知力"] }],
    title: "小さな節約を家族の余力に変えた親",
  },
  {
    id: "fixed-cost-review",
    words: ["家賃", "ローン", "固定費", "保険", "通信費", "光熱費"],
    hp: 0,
    mp: -8,
    maxMp: 1,
    stats: { 知力: 7, 実行力: 2, 察知力: 2 },
    skills: [{ name: "固定費見直し", exp: 16, tags: ["家計設計", "固定費", "知力"] }],
    title: "毎月の重さを見直した親",
  },
  {
    id: "house",
    words: ["掃除", "洗濯", "片付け", "家計簿", "日用品", "保育園準備"],
    hp: -5,
    mp: -4,
    stats: { 実行力: 1, 察知力: 1, パパママ力: 1 },
    skills: [{ name: "生活管理", exp: 5, tags: ["生活", "管理"] }],
    title: "家の見えない場所を見る親",
  },
  {
    id: "sleepcare",
    words: ["寝かしつけ", "夜泣き", "トントン", "おしゃぶり", "横になれない"],
    hp: -7,
    mp: -10,
    stats: { 忍耐力: 2, 察知力: 2, パパママ力: 2 },
    skills: [
      { name: "寝かしつけ", exp: 10, tags: ["育児", "睡眠"] },
      { name: "夜泣き対応", exp: 12, tags: ["育児", "夜", "高難度"] },
    ],
    title: "夜泣きの波を抱っこで越えた親",
  },
  {
    id: "cuddle-play",
    words: ["抱っこ", "だっこ", "抱き上げ", "抱えて"],
    hp: -4,
    mp: 2,
    stats: { 筋力: 2, パパママ力: 2 },
    skills: [{ name: "抱っこ安心基地", exp: 8, tags: ["抱っこ", "親子", "回復"] }],
    title: "抱っこで安心を作った親",
  },
  {
    id: "sleepless-night",
    words: ["寝れない", "眠れない", "寝不足", "徹夜", "細切れ睡眠", "何度も起き", "起こされた"],
    hp: -14,
    mp: -18,
    stats: { 忍耐力: 3, 察知力: 2, 素直さ: 1, パパママ力: 1 },
    skills: [{ name: "夜泣き対応", exp: 16, tags: ["夜", "高難度", "育児"] }],
    title: "眠れない夜を守り切った親",
  },
  {
    id: "milk-not-answer",
    words: ["ミルクじゃない", "ミルクではない", "ミルクじゃなかった", "ミルクじゃなく"],
    hp: -2,
    mp: -8,
    stats: { 察知力: 3, 忍耐力: 1, パパママ力: 2 },
    skills: [
      { name: "夜泣き対応", exp: 10, tags: ["育児", "察知", "夜"] },
      { name: "抱っこで落ち着かせる", exp: 8, tags: ["育児", "抱っこ"] },
    ],
    title: "ミルクじゃない泣きを見抜いた親",
  },
  {
    id: "cry-stopped-by-hold",
    words: ["泣くのは治る", "泣き止", "泣きやむ", "抱っこでなんとか", "抱っこで治る"],
    hp: -6,
    mp: -6,
    stats: { 察知力: 2, 忍耐力: 2, パパママ力: 3, 筋力: 1 },
    skills: [{ name: "抱っこで落ち着かせる", exp: 14, tags: ["抱っこ", "育児", "高難度"] }],
    title: "泣き声の中に安心を作った親",
  },
  {
    id: "birth-phase",
    words: ["出産", "生まれる", "生まれた", "産後", "退院", "新生児", "赤ちゃん"],
    hp: -16,
    mp: -18,
    maxHp: 1,
    maxMp: 1,
    stats: { 実行力: 2, 忍耐力: 3, 察知力: 2, パパママ力: 3 },
    skills: [{ name: "出産直後フェーズ対応", exp: 16, tags: ["出産", "高難度"] }],
    title: "出産直後フェーズを越えた親",
  },
  {
    id: "first-birth-unknown",
    words: ["1人目の時", "１人目の時", "一人目の時", "知らないこと", "初めての出産", "準備しておいてよかった"],
    hp: -14,
    mp: -18,
    maxHp: 1,
    maxMp: 1,
    stats: { 知力: 2, 実行力: 2, 察知力: 2, 忍耐力: 2, パパママ力: 2 },
    skills: [{ name: "一人目出産の初見対応", exp: 18, tags: ["一人目", "出産"] }],
    title: "初見の出産ダンジョンを越えた親",
  },
  {
    id: "delivery-attendance",
    words: ["立ち会い出産", "立ち会って", "立ち会う", "分娩", "助産師", "手を握って", "頑張れ"],
    hp: -8,
    mp: -16,
    maxMp: 1,
    stats: { 察知力: 2, 忍耐力: 2, パパママ力: 3 },
    skills: [{ name: "立ち会い出産サポート", exp: 16, tags: ["出産", "夫婦"] }],
    title: "分娩室で手を握った親",
  },
  {
    id: "water-break-midnight",
    words: ["破水", "夜中", "12時", "１２時", "そっと起こされ", "病院へ向か"],
    hp: -10,
    mp: -14,
    stats: { 察知力: 2, 実行力: 2, 忍耐力: 1 },
    skills: [{ name: "夜中の破水対応", exp: 14, tags: ["出産", "夜"] }],
    title: "夜中の合図で起動した親",
  },
  {
    id: "rapid-second-delivery",
    words: ["もう生まれます", "早すぎる", "30分", "３０分", "あっという間", "待ったなし"],
    hp: -12,
    mp: -20,
    maxMp: 1,
    stats: { 実行力: 3, 察知力: 3, 忍耐力: 2, 知力: 1 },
    skills: [{ name: "急展開出産への即応", exp: 18, tags: ["二人目", "高難度"] }],
    title: "30分出産に追いついた親",
  },
  {
    id: "older-child-at-birth",
    words: ["上の子も一緒", "上の子がいる", "上の子を車", "上の子をどうする", "誰が見る", "どこで引き渡す", "家族全体"],
    hp: -10,
    mp: -18,
    maxHp: 1,
    stats: { 知力: 3, 実行力: 3, 察知力: 3, パパママ力: 3 },
    skills: [{ name: "上の子同伴出産オペレーション", exp: 20, tags: ["二人目", "家族運用"] }],
    title: "上の子ごと出産に向かった親",
  },
  {
    id: "birth-support-items",
    words: ["お茶", "ストロー", "準備できますか", "今出してます", "必要そうなもの", "すぐ出す"],
    hp: -2,
    mp: -4,
    stats: { 実行力: 2, 察知力: 2, 知力: 1 },
    skills: [{ name: "分娩室サポート物資展開", exp: 12, tags: ["出産", "準備"] }],
    title: "ストロー付きお茶を即出しした親",
  },
  {
    id: "second-birth-rule-change",
    words: ["1人目とは全然違う", "１人目とは全然違う", "同じようにはいかない", "成功体験", "当てはまらない", "予定はあっという間に崩れ"],
    hp: -4,
    mp: -10,
    stats: { 素直さ: 2, 知力: 2, 察知力: 2 },
    skills: [{ name: "成功体験の更新", exp: 14, tags: ["二人目", "学習"] }],
    title: "一人目の地図を更新した親",
  },
  {
    id: "first-child-postpartum",
    words: ["1人目", "１人目", "一人目", "産後3ヶ月", "産後３ヶ月", "記憶が薄い", "夜中の2時", "夜中の3時"],
    hp: -18,
    mp: -20,
    maxHp: 1,
    maxMp: 1,
    stats: { 忍耐力: 3, 素直さ: 2, 察知力: 2, パパママ力: 2 },
    skills: [{ name: "一人目産後サバイブ", exp: 18, tags: ["一人目", "夜"] }],
    title: "一人目の産後を覚えている親",
  },
  {
    id: "second-child-strategy",
    words: ["2人目", "２人目", "二人目", "上の子", "下の子", "5ヶ月育休", "５ヶ月育休"],
    hp: -10,
    mp: -12,
    maxHp: 1,
    stats: { 知力: 2, 実行力: 3, 察知力: 2, パパママ力: 3 },
    skills: [{ name: "二人目育児の布陣づくり", exp: 16, tags: ["二人目", "設計"] }],
    title: "二人目の布陣を組んだ親",
  },
  {
    id: "postpartum-household-infra",
    words: ["妻を休ませる", "赤ちゃんを見る", "上の子を見る", "家を回す", "保育園の送り迎え", "家庭の非常事態"],
    hp: -14,
    mp: -10,
    maxHp: 1,
    stats: { 実行力: 3, パパママ力: 3, 察知力: 2, 忍耐力: 2 },
    skills: [{ name: "産後家庭インフラ運用", exp: 18, tags: ["産後", "生活"] }],
    title: "家庭インフラになった親",
  },
  {
    id: "adult-conversation-lifeline",
    words: ["会話がつながる大人", "話したかった", "24時間一緒", "言葉は返ってこない", "ワンオペ感覚"],
    hp: -2,
    mp: -14,
    maxMp: 1,
    stats: { 察知力: 3, 素直さ: 2, パパママ力: 2 },
    skills: [{ name: "会話がつながる大人になる", exp: 14, tags: ["夫婦", "産後"] }],
    title: "会話のライフラインになった親",
  },
  {
    id: "parental-leave-meaning",
    words: ["育休を取って", "育休を取る意味", "家庭が保たれて", "次の未来", "家族が次", "妻のワンオペ感覚"],
    hp: -4,
    mp: 6,
    maxMp: 1,
    stats: { 知力: 2, 素直さ: 2, パパママ力: 3 },
    skills: [{ name: "育休の意味を体感する", exp: 16, tags: ["育休", "理解"] }],
    title: "育休の意味を体感した親",
  },
  {
    id: "social",
    words: ["ママ会", "保護者", "空気", "気を使", "児童館", "支援センター"],
    hp: -4,
    mp: -16,
    stats: { 察知力: 2, 忍耐力: 1, パパママ力: 1 },
    skills: [{ name: "保護者コミュニケーション", exp: 6, tags: ["社交", "MP"] }],
    title: "MPを削って場を読む親",
  },
  {
    id: "note-update-load",
    words: ["note更新", "noteの更新", "note投稿", "noteの記事", "ブログ更新", "ブログ投稿", "記事更新", "記事を書", "公開作業"],
    hp: -2,
    mp: -14,
    maxMp: 2,
    stats: { 知力: 2, 実行力: 2, 忍耐力: 2, 素直さ: 1 },
    skills: [
      { name: "note更新継続", exp: 12, tags: ["発信", "MP", "継続"] },
      { name: "文章で整える力", exp: 8, tags: ["発信", "知力"] },
    ],
    title: "MPを削って言葉を残した親",
  },
  {
    id: "line-reply-load",
    words: ["LINE返信", "LINEの返信", "LINE返", "ライン返信", "ラインの返信", "ライン返", "返事しんど", "返信しんど"],
    hp: -1,
    mp: -13,
    maxMp: 1,
    stats: { 素直さ: 2, 忍耐力: 2, 察知力: 1 },
    skills: [
      { name: "LINE返信MP管理", exp: 12, tags: ["連絡", "MP", "返信"] },
      { name: "返事を返す実行力", exp: 8, tags: ["連絡", "実行力"] },
    ],
    title: "返信MPを振り絞った親",
  },
  {
    id: "work",
    words: ["残業", "仕事復帰", "仕事の愚痴", "愚痴", "疲れた", "出勤", "重い荷物", "日曜大工"],
    hp: -10,
    mp: -8,
    maxHp: 2,
    stats: { 筋力: 3, 忍耐力: 2, 実行力: 1 },
    skills: [{ name: "仕事と家庭の切替", exp: 10, tags: ["仕事", "切替", "筋力"] }],
    title: "仕事を越えて帰ってきた親",
  },
  {
    id: "quick-return",
    words: ["早く帰", "急いで帰", "定時", "帰るため", "切り上げ"],
    hp: -4,
    mp: -3,
    maxHp: 1,
    stats: { 素直さ: 3, 実行力: 3, パパママ力: 2 },
    skills: [{ name: "家庭優先の帰還判断", exp: 12, tags: ["仕事", "素直さ", "実行力"] }],
    title: "家庭に向かって仕事を切り上げた親",
  },
  {
    id: "sick-leave-request",
    words: ["病気", "体調不良", "熱", "休み申請", "休みを申請", "休んだ", "看病", "病院に連れて"],
    hp: -3,
    mp: -6,
    maxMp: 1,
    stats: { 素直さ: 4, 実行力: 3, 察知力: 2, パパママ力: 2 },
    skills: [{ name: "病気時の休み申請", exp: 14, tags: ["仕事", "育児", "素直さ"] }],
    title: "休むべき時に休みを取りに行った親",
  },
  {
    id: "work-organization",
    words: ["仕事整理", "業務整理", "タスク整理", "引き継ぎ", "調整した", "段取りした"],
    hp: -4,
    mp: -5,
    maxHp: 1,
    maxMp: 1,
    stats: { 知力: 3, 実行力: 3, 忍耐力: 2 },
    skills: [{ name: "仕事整理で家庭時間を作る", exp: 14, tags: ["仕事", "知力", "実行力"] }],
    title: "仕事を整理して家庭の余白を作った親",
  },
  {
    id: "welcome-home-attack",
    words: ["帰ったら", "みんな起きてた", "突進", "お迎え", "飛びつ", "抱きつ"],
    hp: -3,
    mp: 8,
    stats: { パパママ力: 2, 察知力: 1 },
    skills: [{ name: "帰宅後の子ども迎撃対応", exp: 8, tags: ["帰宅", "回復"] }],
    title: "帰宅後に迎撃された親",
  },
  {
    id: "two-kids-carry",
    words: ["2人を抱っこ", "二人を抱っこ", "2人抱っこ", "二人抱っこ", "両手に", "同時抱っこ"],
    hp: -10,
    mp: 3,
    stats: { 筋力: 2, パパママ力: 2, 忍耐力: 1 },
    skills: [{ name: "二人同時抱っこ", exp: 10, tags: ["抱っこ", "高負荷"] }],
    title: "両腕で世界を支えた親",
  },
  {
    id: "human-playground",
    words: ["高い高い", "人間遊具", "組体操", "のぼって", "登って", "よじ登", "飛行機", "ぐるぐる"],
    hp: -9,
    mp: 2,
    maxHp: 1,
    stats: { 筋力: 4, 忍耐力: 2, パパママ力: 2 },
    skills: [
      { name: "高い高い担当", exp: 10, tags: ["遊び", "筋力", "高負荷"] },
      { name: "人間遊具マスター", exp: 12, tags: ["遊び", "筋力", "高負荷"] },
    ],
    title: "体を遊具にして笑わせた親",
  },
  {
    id: "morning-kids-weight",
    words: ["のしかかり", "乗られ", "乗ってき", "飛び乗ってき", "叩き起こ", "起こされた", "パパ起きて", "ママ起きて", "子供2人", "子ども2人", "仕事の準備", "朝の準備", "出勤準備"],
    hp: -9,
    mp: -2,
    maxHp: 1,
    stats: { 筋力: 3, 実行力: 1, パパママ力: 2, 忍耐力: 1 },
    skills: [{ name: "朝のふれあい受け止め", exp: 12, tags: ["親子", "朝", "筋力"] }],
    title: "朝から二人を受け止めた親",
  },
  {
    id: "shoulder-ride",
    words: ["肩車", "肩ぐるま"],
    hp: -8,
    mp: 2,
    maxHp: 1,
    stats: { 筋力: 4, パパママ力: 1, 忍耐力: 1 },
    skills: [{ name: "肩車運用", exp: 12, tags: ["遊び", "筋力", "高負荷"] }],
    title: "肩の上に世界を乗せた親",
  },
  {
    id: "late-home",
    words: ["帰宅遅い", "帰り遅い", "帰宅が遅い", "帰るの遅い", "帰宅遅", "遅く帰"],
    hp: -4,
    mp: -10,
    stats: { 忍耐力: 1, 察知力: 1 },
    skills: [{ name: "遅い帰宅日の立て直し", exp: 6, tags: ["家庭", "MP"] }],
    title: "遅い帰宅を受け止めた親",
  },
  {
    id: "solo-care",
    words: ["ワンオペ", "2人ワンオペ", "二人ワンオペ", "ひとりで2人", "ひとりで二人", "1人で2人", "一人で二人", "2人みて大変", "二人みて大変"],
    hp: -12,
    mp: -18,
    maxHp: 2,
    maxMp: 3,
    stats: { 実行力: 3, 忍耐力: 5, 察知力: 3, パパママ力: 2 },
    skills: [{ name: "ワンオペ対応", exp: 16, tags: ["育児", "高難度", "忍耐"] }],
    title: "ワンオペ戦線を支えた親",
  },
  {
    id: "hard-day",
    words: ["しんどい", "きつい", "つらい", "無理", "限界", "疲弊"],
    hp: -5,
    mp: -12,
    stats: { 素直さ: 1, 忍耐力: 1 },
    skills: [{ name: "しんどさの言語化", exp: 7, tags: ["回復", "自己把握"] }],
    title: "しんどいと言えた親",
  },
  {
    id: "travel",
    words: ["旅行", "家族旅行", "子連れ旅行", "帰省", "遠出", "長距離移動", "観光", "温泉旅行", "一泊", "泊まり旅行"],
    hp: -18,
    mp: 4,
    maxHp: 2,
    maxMp: 1,
    stats: { 実行力: 3, 知力: 2, 察知力: 3, パパママ力: 3, 忍耐力: 2 },
    skills: [],
    title: "家族旅行",
  },
  {
    id: "transport-trip",
    words: ["新幹線", "飛行機", "電車移動", "長距離移動", "車移動"],
    hp: -10,
    mp: -2,
    maxHp: 1,
    stats: { 実行力: 2, 察知力: 3, 忍耐力: 2 },
    skills: [],
    title: "子連れ移動",
  },
  {
    id: "stay-trip",
    words: ["ホテル", "旅館", "宿泊", "泊まった", "お泊まり", "温泉", "チェックイン", "チェックアウト", "朝食バイキング", "布団を敷", "大浴場"],
    hp: -7,
    mp: 5,
    maxMp: 1,
    stats: { 実行力: 2, 察知力: 2, パパママ力: 2 },
    skills: [],
    title: "家族でお泊まり",
  },
  {
    id: "homecoming-trip",
    words: ["帰省", "実家に帰", "義実家に帰", "祖父母に会"],
    hp: -5,
    mp: 5,
    maxMp: 1,
    stats: { 察知力: 2, 素直さ: 1, パパママ力: 2 },
    skills: [
      { name: "自分実家訪問", exp: 8, tags: ["イベント", "親族", "実家"] },
      { name: "親戚交友力", exp: 8, tags: ["親族", "交流", "回復"] },
    ],
    title: "帰省",
  },
  {
    id: "parent-profile",
    words: ["育てる", "育児中", "父親です", "母親です", "パパです", "ママです"],
    hp: 0,
    mp: 0,
    stats: { パパママ力: 1 },
    skills: [{ name: "親として歩く", exp: 6, tags: ["基礎", "家族"] }],
    title: "親として歩き始めた人",
  },
  {
    id: "child-age",
    words: ["3歳", "３歳", "1歳", "１歳", "誕生日", "バースデー"],
    hp: -3,
    mp: -2,
    stats: { パパママ力: 1, 察知力: 1 },
    skills: [],
    title: "成長記念日",
  },
  {
    id: "birthday",
    words: ["ケーキ", "飾り付け", "部屋を飾", "誕生日", "祝"],
    hp: -6,
    mp: 4,
    maxMp: 1,
    stats: { 実行力: 2, パパママ力: 2, 知力: 1 },
    skills: [],
    title: "誕生日",
  },
  {
    id: "family-event",
    words: ["妻の実家", "家族", "選び取り", "一升餅", "親戚", "義実家"],
    hp: -4,
    mp: -8,
    stats: { 察知力: 1, 忍耐力: 1, パパママ力: 1 },
    skills: [
      { name: "パートナー実家訪問", exp: 8, tags: ["親族", "義実家", "訪問"] },
    ],
    title: "家族行事",
  },
  {
    id: "shrine-visit",
    words: ["お宮参り", "七五三", "神社", "お参り"],
    hp: -5,
    mp: 5,
    maxMp: 1,
    stats: { 実行力: 2, 察知力: 2, パパママ力: 2 },
    skills: [],
    title: "お宮参り",
  },
  {
    id: "school-event",
    words: ["運動会", "参観", "保育参観", "発表会", "生活発表会"],
    hp: -5,
    mp: 7,
    maxMp: 1,
    stats: { パパママ力: 3, 察知力: 2, 実行力: 1 },
    skills: [],
    title: "参観",
  },
  {
    id: "school-prep-event",
    words: [
      "保育園準備",
      "学校準備",
      "入園準備",
      "入学準備",
      "持ち物準備",
      "登園準備",
      "登校準備",
      "通園準備",
      "通学準備",
      "連絡帳",
      "宿題チェック",
      "宿題確認",
      "宿題を持",
      "水筒",
      "上靴",
      "上履き",
      "給食袋",
      "体操服",
      "名札",
      "プリント",
      "明日の準備",
      "忘れ物チェック",
    ],
    hp: -6,
    mp: -4,
    maxHp: 1,
    stats: { 実行力: 3, 知力: 2, 察知力: 2 },
    skills: [
      { name: "通園通学準備", exp: 12, tags: ["家事", "育児", "準備", "実行力"] },
      { name: "学校連絡確認", exp: 8, tags: ["育児", "学校", "連絡", "察知"], category: "育児" },
    ],
    title: "準備完了",
  },
  {
    id: "school-prep-miss",
    words: ["宿題忘れ", "宿題を忘れ", "連絡帳忘れ", "連絡帳を忘れ", "忘れてた", "忘れた", "準備忘れ", "入れ忘れ", "持っていくの忘れ", "やってなかった"],
    hp: -1,
    mp: -6,
    maxMp: 1,
    stats: { 実行力: -2, 素直さ: 3, 察知力: 2 },
    skills: [
      { name: "通園通学準備", exp: 8, tags: ["育児", "準備", "改善"], category: "育児" },
      { name: "忘れ物チェック", exp: 8, tags: ["毎日の積み重ね", "改善"], category: "毎日の積み重ね" },
    ],
    title: "忘れたところから仕組みに戻った親",
  },
  {
    id: "homework-support",
    words: ["宿題を見", "宿題見", "宿題の面倒", "宿題を一緒", "宿題一緒", "ドリルを見", "ドリル一緒", "音読を聞", "計算カード", "丸つけ", "プリントを見"],
    hp: -2,
    mp: -7,
    maxMp: 1,
    stats: { 知力: 4, 忍耐力: 3, 察知力: 3, 実行力: 1 },
    skills: [
      { name: "宿題伴走", exp: 15, tags: ["勉強", "宿題", "伴走"], category: "勉強" },
      { name: "小さな変化に気づく", exp: 6, tags: ["毎日の積み重ね", "察知"], category: "毎日の積み重ね" },
    ],
    title: "宿題の横で一緒に粘った親",
  },
  {
    id: "lesson-prep",
    words: ["習い事の準備", "習い事準備", "レッスン準備", "スイミング準備", "ピアノ準備", "体操教室準備", "習字準備", "塾準備", "習い事の持ち物", "レッスンバッグ"],
    hp: -3,
    mp: -5,
    maxHp: 1,
    stats: { 実行力: 4, 察知力: 3, 知力: 2 },
    skills: [{ name: "習い事準備管理", exp: 14, tags: ["育児", "習い事", "準備"], category: "育児" }],
    title: "習い事の出発準備を整えた親",
  },
  {
    id: "lesson-practice-support",
    words: ["習い事の宿題", "習い事宿題", "ピアノの練習", "ピアノ練習", "スイミングの練習", "習字の練習", "体操の練習", "レッスンの復習", "家で練習", "練習を見"],
    hp: -2,
    mp: -6,
    maxMp: 1,
    stats: { 知力: 3, 忍耐力: 3, 察知力: 3, 実行力: 1 },
    skills: [{ name: "習い事練習伴走", exp: 15, tags: ["勉強", "習い事", "伴走"], category: "勉強" }],
    title: "家での練習に付き合った親",
  },
  {
    id: "school-commute",
    words: ["保育園送迎", "学校送迎", "送り迎え", "送っていった", "迎えに行", "登園", "登校", "下校"],
    hp: -5,
    mp: -3,
    maxHp: 1,
    stats: { 実行力: 3, 察知力: 2, 忍耐力: 1 },
    skills: [{ name: "保育園・学校送迎", exp: 12, tags: ["育児", "送迎", "実行力"] }],
    title: "送迎ルートを回した親",
  },
  {
    id: "child-health-basic",
    words: ["体温", "熱を測", "検温", "発熱", "熱が出", "風邪", "体調不良", "咳", "鼻水"],
    hp: -4,
    mp: -8,
    maxMp: 1,
    stats: { 察知力: 4, 実行力: 2, 知力: 1 },
    skills: [
      { name: "体温測定", exp: 10, tags: ["育児", "体調", "察知"] },
      { name: "体調不良対応", exp: 12, tags: ["育児", "体調", "高難度"] },
    ],
    title: "体調の変化を見た親",
  },
  {
    id: "medicine-care",
    words: ["薬", "服薬", "薬飲", "塗り薬", "座薬", "シロップ", "粉薬", "処方"],
    hp: -2,
    mp: -6,
    maxMp: 1,
    stats: { 実行力: 3, 知力: 2, 察知力: 2 },
    skills: [{ name: "薬の管理", exp: 12, tags: ["育児", "薬", "実行力"] }],
    title: "薬のタイミングを守った親",
  },
  {
    id: "hospital-vaccine",
    words: ["病院", "小児科", "受診", "通院", "予防接種", "ワクチン", "問診票", "母子手帳", "副反応"],
    hp: -5,
    mp: -8,
    maxMp: 1,
    stats: { 実行力: 3, 知力: 2, 察知力: 2 },
    skills: [
      { name: "病院受診", exp: 11, tags: ["育児", "病院", "実行力"] },
      { name: "予防接種対応", exp: 10, tags: ["育児", "予防接種", "知力"] },
    ],
    title: "医療イベントを回した親",
  },
  {
    id: "daily-care-routine",
    words: ["お風呂", "歯磨き", "仕上げ磨き", "爪切り", "爪を切", "着替え", "服を着", "パジャマ"],
    hp: -4,
    mp: -3,
    maxHp: 1,
    stats: { 実行力: 3, 忍耐力: 2, 察知力: 1 },
    skills: [
      { name: "お風呂対応", exp: 9, tags: ["育児", "清潔"] },
      { name: "歯磨き対応", exp: 9, tags: ["育児", "清潔"] },
      { name: "爪切り対応", exp: 10, tags: ["育児", "清潔"] },
      { name: "着替え対応", exp: 8, tags: ["育児", "服"] },
    ],
    title: "日々のケアを回した親",
  },
  {
    id: "child-clothes-supplies",
    words: ["保育園用の服", "汚れてもいい服", "着替えストック", "パンツ", "下着", "サイズアウト", "水着", "ラッシュガード", "帽子", "おむつ残り", "おしりふき", "タオル", "ビニール袋", "マスク", "文房具", "名札", "雑巾"],
    hp: -2,
    mp: -4,
    maxMp: 1,
    stats: { 察知力: 3, 実行力: 3, 知力: 1 },
    skills: [
      { name: "消耗品補給", exp: 12, tags: ["家事", "在庫", "察知"], category: "家事" },
      { name: "子ども衣類管理", exp: 12, tags: ["育児", "服", "管理"] },
    ],
    title: "育児インフラの残量を見た親",
  },
  {
    id: "bedding-accident-care",
    words: ["お漏らし", "おねしょ", "防水シーツ", "シーツ", "布団", "寝具", "夜中の着替え"],
    hp: -7,
    mp: -8,
    maxHp: 1,
    stats: { 忍耐力: 3, 実行力: 3, 察知力: 2 },
    skills: [{ name: "寝具・お漏らし対応", exp: 14, tags: ["育児", "夜", "復旧"] }],
    title: "夜の寝具トラブルを復旧した親",
  },
  {
    id: "bug-sun-care",
    words: ["虫よけ", "虫除け", "蚊", "虫刺され", "日焼け止め", "日焼け", "ラッシュガード", "夏の準備"],
    hp: -2,
    mp: -3,
    maxMp: 1,
    stats: { 察知力: 3, 知力: 1, 実行力: 1 },
    skills: [{ name: "虫・日焼け対策", exp: 11, tags: ["育児", "外出", "夏"] }],
    title: "外遊びの防御を固めた親",
  },
  {
    id: "allergy-care",
    words: ["アレルギー", "アレルゲン", "除去食", "成分表示", "代替食", "食べられるか確認", "入ってないか確認", "病院で相談", "保育園に伝え", "学校に伝え", "蕁麻疹", "じんましん"],
    hp: -2,
    mp: -9,
    maxMp: 1,
    stats: { 知力: 5, 察知力: 4, 実行力: 2 },
    skills: [{ name: "アレルギー対応", exp: 15, tags: ["育児", "知力", "安全"] }],
    title: "食べられる安心を調べた親",
  },
  {
    id: "entrance-graduation",
    words: ["入学", "卒業", "入園", "卒園"],
    hp: -4,
    mp: 8,
    maxMp: 1,
    stats: { パパママ力: 3, 素直さ: 2, 察知力: 1 },
    skills: [],
    title: "節目の日",
  },
  {
    id: "parental-leave",
    words: ["育休", "育児休業", "5ヶ月", "５ヶ月", "育休取る", "育休を取る", "人間関係構築", "人間関係整理"],
    hp: -4,
    mp: -8,
    maxHp: 1,
    maxMp: 1,
    stats: { 素直さ: 4, 実行力: 4, 忍耐力: 3, 知力: 3, パパママ力: 2 },
    skills: [{ name: "育休取得オペレーション", exp: 18, tags: ["仕事", "育休", "素直さ"] }],
    title: "育休を生活に変えた親",
  },
  {
    id: "sorry",
    words: ["忘れた", "できなかった", "謝", "指摘", "怒られ", "反省"],
    hp: 0,
    mp: -8,
    stats: { 実行力: -1, 素直さ: 2 },
    skills: [{ name: "リカバリー", exp: 4, tags: ["失敗", "改善"] }],
    title: "忘れたあとが本番の親",
  },
  {
    id: "patience",
    words: ["自分で", "待った", "見守", "イヤイヤ", "ぐず", "泣", "癇癪", "かんしゃく", "泣き叫"],
    hp: -2,
    mp: -10,
    stats: { 忍耐力: 2, 察知力: 1 },
    skills: [{ name: "泣き叫び・癇癪対応", exp: 10, tags: ["育児", "忍耐", "察知"] }],
    title: "手を出さずに待った親",
  },
];

const memorialSeeds = [
  {
    words: ["出産", "生まれ"],
    name: "出産の日",
    title: "家族が増えた日",
  },
  {
    words: ["初めて", "ミルク"],
    name: "初めてのミルク",
    title: "初ミルクを見届けた親",
  },
  {
    words: ["初めて", "言葉"],
    name: "初めての言葉",
    title: "最初の言葉を受け取った親",
  },
  {
    words: ["初めて", "保育園"],
    name: "初めての保育園",
    title: "初登園を見送った親",
  },
  {
    words: ["初旅行"],
    name: "初めての家族旅行",
    title: "初旅行を刻んだ親",
  },
  {
    words: ["初めて", "旅行"],
    name: "初めての家族旅行",
    title: "初旅行を刻んだ親",
  },
  {
    words: ["お宮参り"],
    name: "お宮参り",
    title: "お宮参りを見届けた親",
  },
  {
    words: ["七五三"],
    name: "七五三",
    title: "七五三を見届けた親",
  },
  {
    words: ["誕生日"],
    name: "誕生日",
    title: "誕生日を祝った親",
  },
  {
    words: ["運動会"],
    name: "運動会",
    title: "運動会を見届けた親",
  },
  {
    words: ["参観"],
    name: "参観日",
    title: "参観で成長を見届けた親",
  },
  {
    words: ["発表会"],
    name: "発表会",
    title: "発表会を見届けた親",
  },
  {
    words: ["入園"],
    name: "入園の日",
    title: "入園を見送った親",
  },
  {
    words: ["卒園"],
    name: "卒園の日",
    title: "卒園を見届けた親",
  },
  {
    words: ["入学"],
    name: "入学の日",
    title: "入学を見送った親",
  },
  {
    words: ["卒業"],
    name: "卒業の日",
    title: "卒業を見届けた親",
  },
  {
    words: ["初めて", "友達", "呼"],
    name: "初めて友達を呼んだ日",
    title: "友達を迎えた家の親",
  },
  {
    words: ["初めて", "夫婦", "デート"],
    name: "子どもを預けて初めての夫婦デート",
    title: "夫婦時間を取り戻した親",
  },
  {
    words: ["10回目"],
    name: "10回目の節目",
    title: "10回続けた親",
  },
  {
    words: ["１０回目"],
    name: "10回目の節目",
    title: "10回続けた親",
  },
  {
    words: ["100回目"],
    name: "100回目の節目",
    title: "100回積み重ねた親",
  },
  {
    words: ["１００回目"],
    name: "100回目の節目",
    title: "100回積み重ねた親",
  },
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(initialState);
    const migratedSelectedTitles = saved.selectedTitles || (saved.selectedTitle ? [saved.selectedTitle] : []);
    const collectionSkillNames = new Set(NAME_COLLECTIONS.map((collection) => collection.skillName));
    return {
      ...structuredClone(initialState),
      ...saved,
      stats: { ...initialState.stats, ...(saved.stats || {}) },
      skills: migrateSkills(saved.skills || []),
      equippedSkillIds: saved.equippedSkillIds || [],
      activeSkillCategory: saved.activeSkillCategory || "",
      expandedSkillCategories: saved.expandedSkillCategories || [],
      currentView: saved.currentView || "home",
      nameCollections: saved.nameCollections || { dinosaurs: saved.dinosaurs || {} },
      expandedNameCollections: saved.expandedNameCollections || [],
      dinosaurs: saved.dinosaurs || {},
      titles: saved.titles || [],
      selectedTitle: saved.selectedTitle || (saved.titles && saved.titles[0]) || "",
      selectedTitles: migratedSelectedTitles.slice(0, TITLE_EQUIP_LIMIT),
      titleSources: saved.titleSources || {},
      roles: { ...initialState.roles, ...(saved.roles || {}) },
      specialRoll: saved.specialRoll || null,
      setupComplete: saved.setupComplete || false,
      familyProfile: normalizeFamilyProfile(saved.familyProfile),
      logs: (saved.logs || []).map((log) => ({
        ...log,
        skills: (log.skills || []).filter((skill) => !collectionSkillNames.has(skill.name)),
      })),
    };
  } catch {
    return structuredClone(initialState);
  }
}

function normalizeFamilyProfile(profile = {}) {
  const base = structuredClone(initialState.familyProfile);
  const children = (profile.children || base.children).length ? profile.children || base.children : base.children;
  return {
    children: children.map((child) => ({
      nickname: child.nickname || "",
      gender: child.gender || "",
      birthday: child.birthday || "",
      relation: child.relation || "",
    })),
    selfCall: profile.selfCall || base.selfCall,
    partnerCall: profile.partnerCall || base.partnerCall,
    relatives: (profile.relatives || []).map((relative) => ({
      nickname: relative.nickname || "",
      relation: relative.relation || "",
    })),
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveReportState() {
  const snapshot = {
    ...state,
    exportedAt: new Date().toISOString(),
    appName: "パパパラメーター mini",
    saveVersion: 1,
  };
  return snapshot;
}

function encodeReportPayload(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function decodeReportPayload(encoded) {
  const binary = atob(encoded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function createSaveReport() {
  const payload = saveReportState();
  const code = encodeReportPayload(payload);
  const createdAt = formatDate(payload.exportedAt);
  const playerName = reportPlayerName();
  return [
    "パパパラメーター mini セーブレポート",
    `作成: ${createdAt}`,
    `プレイヤー: ${playerName}`,
    `総合Lv: ${state.level}`,
    `HP: ${state.hp}/${state.maxHp}`,
    `MP: ${state.mp}/${state.maxMp}`,
    `スキル: ${state.skills.length}個`,
    `称号: ${state.titles.length}個`,
    "",
    "この下のコードを残しておくと、データが消えても復元できます。",
    "----- PAPA_PARAMETER_SAVE_START -----",
    code,
    "----- PAPA_PARAMETER_SAVE_END -----",
  ].join("\n");
}

function reportPlayerName() {
  const title = currentSelectedTitles()[0] || state.selectedTitle || "";
  const selfCall = state.familyProfile?.selfCall || "";
  const child = (state.familyProfile?.children || []).find((item) => item.nickname)?.nickname || "";
  if (title) return title;
  if (child && selfCall) return `${child}の${selfCall}`;
  if (selfCall) return selfCall;
  return "プレイヤー";
}

function reportFileName() {
  const name = sanitizeFileName(reportPlayerName()).slice(0, 28) || "プレイヤー";
  const date = new Date().toISOString().slice(0, 10);
  return `パパパラメーター_${name}_Lv${state.level}_${date}.papa`;
}

function sanitizeFileName(value) {
  return String(value)
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, "_")
    .trim();
}

function extractReportPayload(text) {
  const match = text.match(/----- PAPA_PARAMETER_SAVE_START -----\s*([A-Za-z0-9+/=]+)\s*----- PAPA_PARAMETER_SAVE_END -----/);
  const encoded = match ? match[1] : text.trim();
  return decodeReportPayload(encoded);
}

function exportReport() {
  $("reportText").value = createSaveReport();
  $("reportStatus").textContent = "作成済み";
  showReportMemory("save-ready", "レポートを作成しました");
}

async function copyReport() {
  if (!$("reportText").value.trim()) exportReport();
  try {
    await navigator.clipboard.writeText($("reportText").value);
    $("reportStatus").textContent = "コピー済み";
  } catch {
    $("reportText").select();
    $("reportStatus").textContent = "選択してコピー";
  }
}

function saveReportFile() {
  const text = createSaveReport();
  $("reportText").value = text;
  const blob = new Blob([text], { type: "application/x-papa-parameter;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = reportFileName();
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  $("reportStatus").textContent = "保存しました";
  showReportMemory("save-done", "冒険の記録を保存しました");
}

function chooseReportFile() {
  $("reportFileInput").value = "";
  $("reportFileInput").click();
}

function loadReportFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const text =
      reader.result instanceof ArrayBuffer
        ? new TextDecoder("utf-8").decode(reader.result)
        : String(reader.result || "");
    $("reportText").value = text;
    $("reportStatus").textContent = "読み込み待ち";
    showReportMemory("load", "きろくを よみこみますか？");
  });
  reader.addEventListener("error", () => {
    alert("ファイルを読み込めませんでした。");
  });
  reader.readAsArrayBuffer(file);
}

function restoreReport() {
  const text = $("reportText").value.trim();
  if (!text) {
    alert("復元するレポートを貼ってください。");
    return;
  }
  let restored;
  try {
    restored = extractReportPayload(text);
  } catch {
    alert("レポートを読み取れませんでした。セーブコード部分まで含めて貼ってください。");
    return;
  }
  if (!restored || restored.appName !== "パパパラメーター mini") {
    alert("パパパラメーター mini のレポートではなさそうです。");
    return;
  }
  if (!confirm("現在のデータを、このレポートの内容で上書きして復元しますか？")) return;
  showLoadWipe(() => applyRestoredReport(restored));
}

function applyRestoredReport(restored) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
  state = loadState();
  state.currentView = "home";
  saveState();
  render();
  $("resultPanel").innerHTML = `<p class="empty-result">レポートから復元しました。</p>`;
}

function showLoadWipe(onCovered) {
  const wipe = $("loadWipe");
  if (!wipe) {
    onCovered();
    return;
  }
  wipe.classList.add("active");
  wipe.setAttribute("aria-hidden", "false");
  window.setTimeout(onCovered, 640);
  window.setTimeout(() => {
    wipe.classList.remove("active");
    wipe.setAttribute("aria-hidden", "true");
  }, 1550);
}

function showReportMemory(mode, message) {
  const card = $("reportMemoryCard");
  if (!card) return;
  const isLoad = mode === "load";
  const isSaveReady = mode === "save-ready";
  const createdAt = formatDate(new Date().toISOString());
  card.hidden = false;
  card.innerHTML = `
    <img src="./assets/roll/${isLoad ? "report-load.png" : "report-save.png"}" alt="${isLoad ? "きろくをよみこみますか" : "きろくしました"}" />
    <div>
      <strong>${escapeHtml(message)}</strong>
      <span>${escapeHtml(reportPlayerName())} Lv.${state.level}</span>
      <small>${escapeHtml(createdAt)}</small>
      ${
        isSaveReady
          ? `<p>ファイルを保存しておくと、データが消えても後でロードできます。</p><button class="primary-button report-save-big-button" id="saveReportFileInlineButton" type="button">保存する</button>`
          : isLoad
            ? `<p>このセーブデータから再開できます。内容を確認したらロードしてください。</p><button class="primary-button report-save-big-button" id="restoreReportInlineButton" type="button">ロードする</button>`
          : ""
      }
    </div>
  `;
  if (isSaveReady) $("saveReportFileInlineButton").addEventListener("click", saveReportFile);
  if (isLoad) $("restoreReportInlineButton").addEventListener("click", restoreReport);
}

function migrateSkills(skills) {
  const collectionSkillNames = new Set(NAME_COLLECTIONS.map((collection) => collection.skillName));
  const eventMemorialSkillNames = new Set(EVENT_MEMORIAL_SKILL_NAMES);
  const roleSkillCategoryNames = new Set(ROLE_SKILL_CATEGORY_NAMES);
  const renameMap = {
    唐揚げ定番化: "定番ごはん化",
    揚げ物オペレーション: "定番ごはん化",
    子どもリクエスト料理: "リクエスト料理対応",
    作り置き設計: "作り置き運用",
    買い物補給: "食材買い出し",
    食材補給調達: "食材買い出し",
    食材観察ナビ: "食材買い出し",
    食後片付け: "洗い物完了",
    食卓インフラ運用: "食事提供",
    子どもごはん運用: "食事提供",
    冷凍ストック管理: "作り置き運用",
    掃除ルーティン運用: "掃除機運用",
    掃除機ライン: "掃除機運用",
    水回り防衛: "水回り掃除",
    おむつ処理ライン: "おむつ処理",
    うんち処理対応: "うんち処理",
    全ゴミ箱回収: "ゴミ捨て運用",
    ゴミ出し管理: "ゴミ捨て運用",
    制作物アーカイブ: "制作物整理",
    保育園作品整理: "制作物整理",
    キッチンリセット: "水回り掃除",
    保育園服準備: "通園通学準備",
    "保育園・学校準備": "通園通学準備",
    離乳食段階調整: "離乳食ストック作成",
    食後と水分ライン管理: "洗い物完了",
    小腹サポート: "おやつ調達",
    汁物で整える: "食事提供",
    味噌汁ライン: "食事提供",
    包丁まな板オペレーション: "食材下ごしらえ",
    調理家電活用: "食事提供",
    無理しない食事判断: "食事提供",
    コンビニ飯判断: "食事提供",
    冷凍食品活用: "食事提供",
    食器準備: "食事提供",
    生活知育への接続: "買い物社会学習",
    親族イベント参加: "親族行事連携",
  };
  const migratedSkills = skills
    .filter((skill) => !collectionSkillNames.has(skill.name) && !roleSkillCategoryNames.has(skill.category))
    .map((skill) => {
    if (eventMemorialSkillNames.has(skill.name) || skill.category === "イベント") {
      const migrated = {
        ...skill,
        type: "memorial",
        category: "イベント",
        tags: Array.from(new Set([...(skill.tags || []), "記念", "イベント"])),
      };
      return migrated;
    }
    if (skill.type === "memorial" && SKILL_LIKE_MEMORIAL_NAMES.includes(skill.name)) {
      const migrated = {
        ...skill,
        type: "normal",
        tags: Array.from(new Set([...(skill.tags || []).filter((tag) => tag !== "記念" && tag !== "思い出"), "発見技"])),
      };
      return {
        ...migrated,
        category: migrated.category || correctedSkillCategory(migrated),
      };
    }
    return {
      ...skill,
      category: correctedSkillCategory(skill),
      tags: (skill.tags || []).map((tag) => (tag === "日常" ? "毎日の積み重ね" : tag)),
    };
  });
  const merged = new Map();
  migratedSkills.forEach((skill) => {
    const name = renameMap[skill.name] || skill.name;
    const normalized = {
      ...skill,
      name,
      type: name === "記念日ケーキ制作" || eventMemorialSkillNames.has(name) ? "memorial" : skill.type,
      tags: Array.from(new Set([...(skill.tags || []), ...(renameMap[skill.name] ? ["家事"] : [])])),
      category: homeSkillNames().has(name) ? "家事" : correctedSkillCategory({ ...skill, name }),
    };
    const key = `${normalized.type || "normal"}:${normalized.name}`;
    const existing = merged.get(key);
    if (!existing) {
      merged.set(key, normalized);
      return;
    }
    existing.exp = (existing.exp || 0) + (normalized.exp || 0);
    existing.level = skillLevel(existing.exp || 0);
    existing.tags = Array.from(new Set([...(existing.tags || []), ...(normalized.tags || [])]));
    existing.sourceLogIds = Array.from(new Set([...(existing.sourceLogIds || []), ...(normalized.sourceLogIds || [])]));
  });
  return Array.from(merged.values());
}

function correctedSkillCategory(skill) {
  if (skill.type === "unique" || skill.category === "ユニーク" || (skill.tags || []).includes("ユニーク")) return "ユニーク";
  if (skill.name === "絵本読み聞かせ") return "勉強";
  if (skill.category === "日常") return "毎日の積み重ね";
  if (homeSkillNames().has(skill.name) || ["料理", "掃除", "洗濯", "収納"].includes(skill.category)) return "家事";
  if (skill.category) return skill.category;
  const haystack = [skill.name, ...(skill.tags || [])].join(" ");
  if (includesAny(haystack, ["育児", "おむつ", "ミルク", "夜泣き", "保育園", "学校"])) return "育児";
  if (includesAny(haystack, ["親子", "大好き", "抱っこ", "見守り"])) return "親子";
  if (includesAny(haystack, ["夫婦", "妻", "夫", "ありがとう", "ごめん"])) return "夫婦";
  if (includesAny(haystack, ["遊び", "公園", "ダンス", "鬼ごっこ"])) return "遊び";
  if (includesAny(haystack, ["勉強", "絵本", "図鑑", "読み聞かせ"])) return "勉強";
  if (includesAny(haystack, ["仕事", "残業", "育休"])) return "仕事";
  if (includesAny(haystack, ["親族", "親戚", "実家", "LINE", "みてね"])) return "親族";
  if (includesAny(haystack, ["イベント", "誕生日", "出産", "参観", "運動会"])) return "イベント";
  return "毎日の積み重ね";
}

function homeSkillNames() {
  return new Set(HOME_SKILL_NAME_LIST);
}

function dinosaurEntry(name, aliases = []) {
  return nameEntry(name, aliases);
}

function nameEntry(name, aliases = []) {
  return { name, words: [name, ...aliases] };
}

function uniqueSkill(name, words, contextWords = [], exp = 18) {
  return { name, words, contextWords, exp };
}

const NAME_READING_HINTS = {
  新幹線: "しん",
  電車: "でん",
  竹馬: "たけ",
  車: "くる",
  消防車: "しょ",
  救急車: "きゅ",
  白バイ: "しろ",
  ゴミ収集車: "ごみ",
  ミキサー車: "みき",
  クレーン車: "くれ",
  はしご車: "はし",
  除雪車: "じょ",
  清掃車: "せい",
  一輪車: "いち",
  自転車: "じて",
  三輪車: "さん",
  飛行機: "ひこ",
  船: "ふね",
  潜水艦: "せん",
  観覧車: "かん",
  金平糖: "こん",
  綿あめ: "わた",
  りんご飴: "りん",
  フルーツ飴: "ふる",
  団子: "だん",
  大福: "だい",
  わらび餅: "わら",
  始祖鳥: "しそ",
  牛丼: "ぎゅ",
  親子丼: "おや",
  天丼: "てん",
  炊き込みご飯: "たき",
  卵かけご飯: "たま",
  唐揚げ: "から",
  焼肉: "やき",
  焼き鳥: "やき",
  豚の生姜焼き: "ぶた",
  肉じゃが: "にく",
  寿司: "すし",
  刺身: "さし",
  海鮮丼: "かい",
  焼鮭: "やき",
  焼き餃子: "やき",
  春巻き: "はる",
  天ぷら: "てん",
  目玉焼き: "めだ",
  冷奴: "ひや",
  豚汁: "とん",
  肉吸い: "にく",
  切り干し大根: "きり",
  大学芋: "だい",
  茶碗蒸し: "ちゃ",
  犬: "いぬ",
  猫: "ねこ",
  馬: "うま",
  牛: "うし",
  豚: "ぶた",
  羊: "ひつ",
  象: "ぞう",
  靴下: "くつ",
  長靴: "なが",
  帽子: "ぼう",
  三つ編み: "みつ",
  お団子ヘア: "おだ",
  前髪: "まえ",
  寝ぐせ: "ねぐ",
  爪切り: "つめ",
  爪みがき: "つめ",
  日焼け止め: "ひや",
  香水: "こう",
  口紅: "くち",
  鏡: "かが",
  指輪: "ゆび",
  水着: "みず",
  蝶: "ちょ",
  蚊: "か",
  毛虫: "けむ",
  青虫: "あお",
  幼虫: "よう",
  成虫: "せい",
  セミの抜け殻: "せみ",
};

function unrevealedNameHint(item) {
  const reading = NAME_READING_HINTS[item.name];
  if (reading) return `${reading.slice(0, 2)}？`;
  const kanaAlias = item.words.find((word) => /^[ぁ-んァ-ンー]+$/.test(word));
  const source = kanaAlias || item.name;
  return `${Array.from(source).slice(0, 2).join("")}？`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function includesAll(text, words) {
  return words.every((word) => text.includes(word));
}

function patternStrength(text, pattern) {
  if (pattern.id === "couple-affection" && isPartnerCharmText(text)) return 1;
  if (pattern.id === "mall-outing" && !isMallOutingText(text)) return 0;
  if (pattern.id === "character-show" && !isCharacterShowText(text)) return 0;
  if (pattern.id === "tablet-media-learning" && isFamilyMovieText(text)) return 0;
  if (pattern.id === "soccer-play" && isKickRideText(text) && !includesAny(text, ["サッカー", "ボールを蹴", "ボール蹴", "蹴った", "蹴る"])) {
    return 0;
  }
  if (pattern.id === "cake-baking" && !isCakeMakingText(text)) return 0;
  if (pattern.id === "baby-food-stock" && !isBabyFoodStockText(text)) return 0;
  if (pattern.id === "dinosaur-learning" && !includesAny(text, ["恐竜", "化石", "骨", "恐竜展"])) return 0;
  if (pattern.id === "shopping-reminder-success" && !isShoppingReminderSuccessText(text)) return 0;
  if (pattern.id === "shopping-reminder-miss" && !isShoppingReminderMissText(text)) return 0;
  if (pattern.id === "shopping-learning-bridge" && !isShoppingLearningText(text)) return 0;
  if (pattern.id === "school-prep-miss" && !isSchoolPrepMissText(text)) return 0;
  if (pattern.id === "couple-hot-spring" && !isCoupleHotSpringText(text)) return 0;
  if (pattern.id === "child-hot-spring" && !isChildHotSpringText(text)) return 0;
  if (pattern.id === "hot-spring-rest" && !isPlainHotSpringText(text)) return 0;
  if ((pattern.id === "birthday" || pattern.id === "child-age") && !isBirthdayText(text)) return 0;
  const hits = pattern.words.reduce((total, word) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return total + (text.match(new RegExp(escaped, "g")) || []).length;
  }, 0);
  if (!hits) return 0;
  return Math.min(5, 1 + Math.floor((hits - 1) / 2));
}

function isKickRideText(text) {
  return includesAny(text, ["キックボード", "キックスケーター", "キックバイク"]);
}

function isMallOutingText(text) {
  return includesAny(text, ["イオンモール", "ショッピングモール", "フードコート", "キッズスペース", "ゲームセンター", "ガチャガチャ", "買い物ついで"]);
}

function isFamilyMovieText(text) {
  return includesAny(text, ["映画", "映画館", "劇場版", "映画を見", "映画見", "映画に行", "映画行", "シアター"]);
}

function isCharacterShowText(text) {
  const characterContext = includesAny(text, ["アンパンマン", "ヒーロー", "プリキュア", "仮面ライダー", "ぬいぐるみ", "着ぐるみ"]);
  const showContext = includesAny(text, ["ショー", "舞台", "映画", "劇場版", "握手会", "撮影会"]);
  const watchContext = includesAny(text, ["見た", "観た", "みに行", "見に行", "行った", "会った"]);
  return showContext || (characterContext && watchContext);
}

function isCakeMakingText(text) {
  return includesAny(text, ["誕生日ケーキ", "ケーキ作り", "ケーキを作", "ケーキ作った", "ケーキ制作", "焼いた", "オーブン"]);
}

function isBabyFoodStockText(text) {
  return includesAny(text, ["離乳食", "おかゆ", "お粥", "倍がゆ", "ペースト", "すりつぶ", "赤ちゃんごはん", "ベビーフード"]);
}

function isShoppingReminderSuccessText(text) {
  const memoContext = includesAny(text, ["LINE", "ライン", "メモ", "リマインダー", "買い物リスト", "頼まれ"]);
  const shoppingContext = includesAny(text, ["買い物", "買って", "買えた", "買った", "買い出し", "スーパー"]);
  const successContext = includesAny(text, ["忘れず", "ちゃんと", "リスト", "入れて", "見て", "頼まれ"]);
  return shoppingContext && (memoContext || successContext);
}

function isShoppingReminderMissText(text) {
  const missContext = includesAny(text, ["忘れ", "買ってこなかった", "買って来なかった"]);
  const shoppingContext = includesAny(text, ["買い物", "買う", "買って", "買い出し", "スーパー", "メモ", "リマインダー", "LINE", "ライン"]);
  return missContext && shoppingContext;
}

function isShoppingLearningText(text) {
  const shoppingContext = includesAny(text, ["買い物", "買ってきた", "買ったもの", "買ってきたもの", "スーパー", "レジ", "商品", "食材", "野菜", "お肉", "パン", "おやつ"]);
  const childContext = includesAny(text, ["子ども", "子供", "娘", "息子", "あたちゃん", "にゃーちゃん", "一緒", "一緒に"]);
  const learningContext = includesAny(text, ["勉強", "見て", "見た", "教え", "覚え", "学", "これは何", "何買ってきた", "レジ", "値段", "商品"]);
  return shoppingContext && childContext && learningContext;
}

function isSchoolPrepMissText(text) {
  const missContext = includesAny(text, ["忘れ", "やってなかった", "できてなかった", "入れ忘れ", "持っていくの忘れ"]);
  const schoolContext = includesAny(text, [
    "宿題",
    "連絡帳",
    "プリント",
    "水筒",
    "上靴",
    "上履き",
    "給食袋",
    "体操服",
    "名札",
    "持ち物",
    "準備",
    "保育園",
    "学校",
    "通園",
    "通学",
    "習い事",
    "レッスン",
    "スイミング",
    "ピアノ",
    "習字",
    "塾",
  ]);
  return missContext && schoolContext;
}

function isBirthdayText(text) {
  return includesAny(text, ["誕生日", "バースデー", "birthday", "Birthday"]);
}

function isHotSpringText(text) {
  return includesAny(text, ["温泉", "大浴場", "露天風呂", "貸切風呂"]);
}

function isChildContextText(text) {
  return includesAny(text, ["子ども", "子供", "こども", "娘", "息子", "あたちゃん", "にゃーちゃん", "家族", "子連れ"]);
}

function isCoupleContextText(text) {
  return includesAny(text, ["夫婦", "妻", "嫁", "奥さん", "夫", "旦那", "パートナー", "2人", "二人", "ふたり"]);
}

function isCoupleHotSpringText(text) {
  return isHotSpringText(text) && isCoupleContextText(text) && !isChildContextText(text);
}

function isChildHotSpringText(text) {
  return isHotSpringText(text) && isChildContextText(text);
}

function isPlainHotSpringText(text) {
  return isHotSpringText(text) && !isCoupleHotSpringText(text) && !isChildHotSpringText(text);
}

function isPartnerCharmText(text) {
  const partnerWords = ["妻", "嫁", "奥さん", "夫", "旦那", "パートナー", "夫婦で", "二人で", "2人で"];
  const charmWords = ["可愛い", "かわいい", "可愛かった", "かわいかった", "かっこいい", "格好いい", "素敵", "似合う"];
  const tellWords = ["伝え", "言った", "言う", "褒め", "可愛いと", "かわいいと", "かっこいいと", "素敵と", "似合うと"];
  return includesAny(text, partnerWords) && includesAny(text, charmWords) && includesAny(text, tellWords);
}

function levelFromExp(exp) {
  let level = 1;
  let remaining = exp;
  while (level < 100) {
    const needed = 18 + level * 6 + Math.floor(level ** 1.35);
    if (remaining < needed) break;
    remaining -= needed;
    level += 1;
  }
  return level;
}

function skillLevel(exp) {
  return Math.max(1, Math.min(99, Math.floor(Math.sqrt(exp / 6)) + 1));
}

function skillLevelInfo(exp) {
  const level = skillLevel(exp);
  const currentLevelStart = 6 * (level - 1) ** 2;
  const nextLevelStart = 6 * level ** 2;
  const currentExp = Math.max(0, exp - currentLevelStart);
  const neededExp = Math.max(1, nextLevelStart - currentLevelStart);
  return {
    level,
    currentExp,
    neededExp,
    progress: clamp(Math.round((currentExp / neededExp) * 100), 4, 100),
  };
}

function skillCategoryName(skill) {
  const haystack = [skill.name, ...(skill.tags || [])].join(" ");
  return categoryNameFromText(haystack);
}

function titleCategoryName(title) {
  const sourceText = titleSourceLogs(title)
    .map((log) => `${log.title || ""} ${log.text || ""}`)
    .join(" ");
  const haystack = `${title} ${sourceText}`;
  return categoryNameFromText(haystack);
}

function categoryNameFromText(text) {
  const categoriesByName = new Map(SKILL_CATEGORIES.map((category) => [category.name, category]));
  const category = orderedSkillCategoryNames()
    .map((name) => categoriesByName.get(name))
    .filter(Boolean)
    .find((item) => includesAny(text, item.words));
  return category ? category.name : "毎日の積み重ね";
}

function addTitle(title, sourceLogId = null) {
  if (!state.titles.includes(title)) state.titles.unshift(title);
  if (!state.selectedTitle) state.selectedTitle = title;
  if (!state.selectedTitles.length) state.selectedTitles = [title];
  if (sourceLogId) {
    state.titleSources[title] = Array.from(new Set([...(state.titleSources[title] || []), sourceLogId]));
  }
}

function addSkill(skill, sourceLogId, type = "normal") {
  const existing = state.skills.find((item) => item.name === skill.name && item.type === type);
  if (existing) {
    const expBefore = existing.exp;
    const levelBefore = existing.level;
    existing.exp += skill.exp;
    existing.level = skillLevel(existing.exp);
    existing.tags = Array.from(new Set([...(existing.tags || []), ...(skill.tags || [])]));
    existing.category = correctedSkillCategory({ ...existing, ...skill, category: skill.category || existing.category });
    if (sourceLogId && !existing.sourceLogIds.includes(sourceLogId)) existing.sourceLogIds.push(sourceLogId);
    return {
      name: existing.name,
      level: existing.level,
      levelBefore,
      exp: skill.exp,
      expBefore,
      expAfter: existing.exp,
      isNew: false,
      type,
    };
  }

  const entry = {
    id: `skill_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    name: skill.name,
    type,
    exp: skill.exp,
    level: skillLevel(skill.exp),
    tags: skill.tags || [],
    category: correctedSkillCategory(skill),
    createdAt: new Date().toISOString(),
    sourceLogIds: sourceLogId ? [sourceLogId] : [],
  };
  state.skills.unshift(entry);
  if (type !== "memorial" && currentEquippedSkillIds(entry.category).length < NORMAL_SKILL_LIMIT) {
    state.equippedSkillIds = [...currentEquippedSkillIds(), entry.id];
  }
  return { name: entry.name, level: entry.level, levelBefore: 0, exp: skill.exp, expBefore: 0, expAfter: entry.exp, isNew: true, type };
}

function normalSkillCount() {
  return state.skills.filter((skill) => skill.type !== "memorial").length;
}

function currentEquippedSkillIds(categoryName = null) {
  const normalSkills = state.skills.filter((skill) => skill.type !== "memorial");
  const normalIds = new Set(normalSkills.map((skill) => skill.id));
  const validIds = (state.equippedSkillIds || []).filter((id) => normalIds.has(id));
  if (!categoryName) return validIds;
  const skillsById = new Map(normalSkills.map((skill) => [skill.id, skill]));
  return validIds
    .filter((id) => (skillsById.get(id)?.category || skillCategoryName(skillsById.get(id))) === categoryName)
    .slice(0, NORMAL_SKILL_LIMIT);
}

function findSkillAbsorptionTarget(skill) {
  const categoryName = skill.category || skillCategoryName(skill);
  const tags = new Set(skill.tags || []);
  const normalSkills = state.skills.filter((item) => item.type !== "memorial");
  const scored = normalSkills
    .map((item) => {
      const sharedTags = (item.tags || []).filter((tag) => tags.has(tag)).length;
      const sameCategory = (item.category || skillCategoryName(item)) === categoryName ? 3 : 0;
      const nameOverlap = skill.name.includes(item.name) || item.name.includes(skill.name) ? 2 : 0;
      return { item, score: sameCategory + sharedTags + nameOverlap + item.level / 100 };
    })
    .sort((a, b) => b.score - a.score);
  return scored[0]?.item || normalSkills[0] || null;
}

function analyzeText(rawText, mode = "daily") {
  const text = rawText.trim();
  state.specialRoll = null;
  const logId = `log_${Date.now()}`;
  const matched = patterns
    .map((pattern) => ({ ...pattern, strength: patternStrength(text, pattern) }))
    .filter((pattern) => pattern.strength > 0);
  const activePatterns = matched.length
    ? matched
    : [
        {
          id: "default",
          strength: 1,
          hp: -2,
          mp: -2,
          stats: { 実行力: 1 },
          skills: [{ name: "日々の育児ログ", exp: 3, tags: ["毎日の積み重ね"] }],
          title: "今日を記録した親",
        },
      ];

  const isPastLeveling = mode === "past";
  const modifier = isPastLeveling ? 0.72 : 1;
  const maxLevelGain = mode === "past" ? 30 : 2;
  const beforeLevel = state.level;
  const beforeHp = state.hp;
  const beforeMp = state.mp;
  const beforeMaxHp = state.maxHp;
  const beforeMaxMp = state.maxMp;
  const beforeStats = { ...state.stats };
  const statDelta = {};
  const skillResults = [];
  let hpDelta = 0;
  let mpDelta = 0;
  let maxHpDelta = 0;
  let maxMpDelta = 0;
  let totalLevelStatBonus = 0;

  activePatterns.forEach((pattern) => {
    const strength = isPastLeveling ? pattern.strength : 1;
    const effectScale = isPastLeveling ? Math.sqrt(strength) : 1;
    hpDelta += Math.round(pattern.hp * modifier * effectScale);
    mpDelta += Math.round(pattern.mp * modifier * effectScale);
    maxHpDelta += pattern.maxHp ? Math.round(pattern.maxHp * modifier) : 0;
    maxMpDelta += pattern.maxMp ? Math.round(pattern.maxMp * modifier) : 0;
    Object.entries(pattern.stats).forEach(([name, value]) => {
      if (name === "パパママ力") {
        totalLevelStatBonus += Math.max(0, Math.round(value * effectScale));
        return;
      }
      statDelta[name] = (statDelta[name] || 0) + Math.round(value * effectScale);
    });
    pattern.skills.forEach((skill) => {
      skillResults.push(addSkill({ ...skill, exp: Math.max(1, Math.round(skill.exp * modifier * strength)) }, logId));
    });
    if (!isPastLeveling) addTitle(pattern.title, logId);
  });

  if (!isPastLeveling) {
    const severeIds = ["solo-care", "sleepcare", "sleepless-night", "travel"];
    const hasSevereEvent = activePatterns.some((pattern) => severeIds.includes(pattern.id));
    const dailyDrainLimit = hasSevereEvent ? 0.85 : 0.35;
    hpDelta = Math.max(hpDelta, -Math.round(state.maxHp * dailyDrainLimit));
    mpDelta = Math.max(mpDelta, -Math.round(state.maxMp * dailyDrainLimit));
  }

  const memorialResults = memorialSeeds
    .filter((seed) => includesAll(text, seed.words))
    .map((seed) => {
      addTitle(seed.title, logId);
      return addSkill({ name: seed.name, exp: 1, tags: ["記念", "節目"] }, logId, "memorial");
    });
  const nameCollectionResults = discoverNameCollections(text, logId, isPastLeveling);
  const uniqueSkillResults = discoverUniqueSkills(text, logId, isPastLeveling);
  const familyMentionResults = discoverFamilyMentions(text, logId, isPastLeveling);
  const parentBondResults = discoverParentBondEvent(text, logId, isPastLeveling);
  const childCharmResults = discoverChildCharmMentions(text, logId, isPastLeveling);
  hpDelta += familyMentionResults.hp;
  mpDelta += familyMentionResults.mp;
  maxHpDelta += familyMentionResults.maxHp;
  maxMpDelta += familyMentionResults.maxMp;
  Object.entries(familyMentionResults.stats).forEach(([name, value]) => {
    statDelta[name] = (statDelta[name] || 0) + value;
  });
  hpDelta += parentBondResults.hp;
  mpDelta += parentBondResults.mp;
  maxHpDelta += parentBondResults.maxHp;
  maxMpDelta += parentBondResults.maxMp;
  Object.entries(parentBondResults.stats).forEach(([name, value]) => {
    if (name === "パパママ力") {
      totalLevelStatBonus += Math.max(0, value);
      return;
    }
    statDelta[name] = (statDelta[name] || 0) + value;
  });
  hpDelta += childCharmResults.hp;
  mpDelta += childCharmResults.mp;
  maxHpDelta += childCharmResults.maxHp;
  maxMpDelta += childCharmResults.maxMp;
  Object.entries(childCharmResults.stats).forEach(([name, value]) => {
    if (name === "パパママ力") {
      totalLevelStatBonus += Math.max(0, value);
      return;
    }
    statDelta[name] = (statDelta[name] || 0) + value;
  });
  Object.entries(uniqueSkillResults.stats).forEach(([name, value]) => {
    statDelta[name] = (statDelta[name] || 0) + value;
  });

  Object.entries(statDelta).forEach(([name, value]) => {
    state.stats[name] = clamp((state.stats[name] || 1) + value, 0, 99);
  });

  const capacityGrowth = capacityGrowthFromPatterns(activePatterns, hpDelta, mpDelta, isPastLeveling);
  maxHpDelta += capacityGrowth.hp;
  maxMpDelta += capacityGrowth.mp;

  if (isPastLeveling) {
    const staminaMemory = Math.max(0, Math.abs(hpDelta));
    const mindMemory = Math.max(0, Math.abs(mpDelta));
    if (staminaMemory >= 10) maxHpDelta += 1;
    if (mindMemory >= 10) maxMpDelta += 1;
    state.maxHp += maxHpDelta;
    state.maxMp += maxMpDelta;
    state.hp = state.maxHp;
    state.mp = state.maxMp;
  } else {
    state.maxHp += maxHpDelta;
    state.maxMp += maxMpDelta;
    state.hp = clamp(state.hp + hpDelta + Math.ceil(maxHpDelta / 2), 0, state.maxHp);
    state.mp = clamp(state.mp + mpDelta + Math.ceil(maxMpDelta / 2), 0, state.maxMp);
    if (shouldFullRecover(text)) {
      state.hp = state.maxHp;
      state.mp = state.maxMp;
      addTitle("しっかり回復できた親", logId);
    }
    applyOvercapSpecials(text, logId);
    applyParentBondSpecial(parentBondResults, logId);
  }

  const totalStrength = activePatterns.reduce((sum, pattern) => sum + (pattern.strength || 1), 0) + parentBondResults.strength;
  const phaseCap = estimatePhaseCap(text);
  const eventExp = isPastLeveling
    ? Math.max(120, Math.round((totalStrength * 95 + (skillResults.length + uniqueSkillResults.skills.length) * 34 + totalLevelStatBonus * 18 + text.length / 4) * modifier))
    : Math.max(6, Math.round((activePatterns.length * 12 + (skillResults.length + uniqueSkillResults.skills.length) * 4 + totalLevelStatBonus * 6) * modifier));
  state.exp += eventExp;
  const calculatedLevel = levelFromExp(state.exp);
  state.level = isPastLeveling
    ? Math.min(beforeLevel + maxLevelGain, calculatedLevel, phaseCap)
    : Math.min(beforeLevel + maxLevelGain, calculatedLevel);

  if (state.level > beforeLevel && state.level % 5 === 0) {
    state.maxHp += 1;
    state.maxMp += 1;
    maxHpDelta += 1;
    maxMpDelta += 1;
    state.hp = Math.min(state.maxHp, state.hp + 1);
    state.mp = Math.min(state.maxMp, state.mp + 1);
  }

  const allSkillResults = [
    ...skillResults,
    ...memorialResults,
    ...familyMentionResults.skills,
    ...parentBondResults.skills,
    ...childCharmResults.skills,
    ...uniqueSkillResults.skills,
  ];
  const title = isPastLeveling ? choosePastTitle(activePatterns, memorialResults) : chooseTodayTitle(activePatterns, memorialResults);
  addTitle(title, logId);
  if (isBirthdayText(`${text} ${title} ${allSkillResults.map((skill) => skill.name).join(" ")}`)) {
    state.specialRoll = { type: "birthday", sourceLogId: logId };
  }
  const roleDelta = roleDeltaFromLog(text, activePatterns, allSkillResults, title, isPastLeveling);
  state.roles.leader += roleDelta.leader;
  state.roles.supporter += roleDelta.supporter;

  const log = {
    id: logId,
    type: mode,
    text,
    createdAt: new Date().toISOString(),
    hpBefore: beforeHp,
    mpBefore: beforeMp,
    maxHpBefore: beforeMaxHp,
    maxMpBefore: beforeMaxMp,
    hpAfter: state.hp,
    mpAfter: state.mp,
    maxHpAfter: state.maxHp,
    maxMpAfter: state.maxMp,
    hpDelta: state.hp - beforeHp,
    mpDelta: state.mp - beforeMp,
    hpIntentDelta: hpDelta,
    mpIntentDelta: mpDelta,
    maxHpDelta,
    maxMpDelta,
    statBefore: beforeStats,
    statAfter: { ...state.stats },
    statDelta,
    skills: allSkillResults,
    nameCollections: nameCollectionResults.found,
    dinosaurs: nameCollectionResults.found.find((group) => group.id === "dinosaurs")?.names || [],
    roleDelta,
    title,
    levelBefore: beforeLevel,
    levelAfter: state.level,
  };
  state.logs.unshift(log);
  saveState();
  render();
  renderResult(log);
  showGrowthPopup(log);
}

function capacityGrowthFromPatterns(activePatterns, hpDelta, mpDelta, isPastLeveling) {
  const ids = activePatterns.map((pattern) => pattern.id);
  const hasPhysical = ids.some((id) => ["tag", "dance", "cuddle-play", "two-kids-carry", "morning-kids-weight", "shoulder-ride", "travel", "food", "baby-food-stock"].includes(id));
  const hasMental = ids.some((id) =>
    [
      "sleepcare",
      "sleepless-night",
      "milk-not-answer",
      "cry-stopped-by-hold",
      "solo-care",
      "social",
      "note-update-load",
      "line-reply-load",
      "hard-day",
      "work",
    ].includes(id)
  );
  const textScale = isPastLeveling ? 2 : 1;
  let hp = textScale;
  let mp = textScale;
  if (hasPhysical || Math.abs(hpDelta) > Math.abs(mpDelta)) hp += textScale;
  if (hasMental || Math.abs(mpDelta) >= Math.abs(hpDelta)) mp += textScale;
  return { hp, mp };
}

function shouldFullRecover(text) {
  return includesAny(text, [
    "ぐっすり",
    "よく寝た",
    "朝まで寝",
    "朝まで眠",
    "仮眠できた",
    "夫婦でデート",
    "夫婦デート",
    "息抜きできた",
    "しっかり休めた",
    "ゆっくり休めた",
  ]);
}

function applyOvercapSpecials(text, logId) {
  const hpOverWords = [
    "HP上限突破",
    "HP限界突破",
    "体力上限突破",
    "体力限界突破",
    "爆睡",
    "熟睡",
    "爆睡できた",
    "ぐっすり寝た",
    "朝まで寝た",
    "朝まで眠れた",
    "ゆっくり昼寝",
    "昼寝できた",
    "昼寝した",
    "仮眠できた",
    "しっかり寝れた",
    "しっかり眠れた",
    "たっぷり寝た",
    "寝だめ",
    "体力めっちゃ回復",
  ];
  const mpOverWords = [
    "MP上限突破",
    "MP限界突破",
    "精神力上限突破",
    "精神力限界突破",
    "精神力めっちゃ回復",
    "頭が冴え",
    "1人の時間ができた",
    "１人の時間ができた",
    "一人の時間ができた",
    "ひとりの時間ができた",
    "1人の時間が確保",
    "１人の時間が確保",
    "一人の時間が確保",
    "ひとりの時間が確保",
    "ひとり時間が確保",
    "一人時間が確保",
    "自分の時間ができた",
    "自分の時間が確保",
  ];

  const soloTimeWords = [
    "1人の時間",
    "１人の時間",
    "一人の時間",
    "ひとりの時間",
    "ひとり時間",
    "一人時間",
    "自分の時間",
    "自由時間",
    "自分だけの時間",
  ];
  const hobbyRecoveryWords = [
    "好きなテレビ",
    "テレビを思う存分",
    "YouTubeを思う存分",
    "youtubeを思う存分",
    "動画を思う存分",
    "ゲームを思う存分",
    "好きなゲーム",
    "ゆっくりゲーム",
    "ゆっくりお風呂",
    "1人でお風呂",
    "１人でお風呂",
    "一人でお風呂",
    "ひとりでお風呂",
    "ゆっくりお風呂に入れた",
    "ゆっくりお風呂に浸かれた",
    "ゆっくりお風呂に疲れた",
    "ゆっくり風呂",
    "1人で風呂",
    "１人で風呂",
    "一人で風呂",
    "ひとりで風呂",
    "リフレッシュできた",
    "息抜き最高",
    "心が回復",
    "心が満たされ",
    "めっちゃ癒",
  ];

  const hpOver = includesAny(text, hpOverWords);
  const mpOver = includesAny(text, mpOverWords) || (includesAny(text, soloTimeWords) && includesAny(text, hobbyRecoveryWords));
  if (hpOver) {
    state.hp = Math.max(state.hp, Math.ceil(state.maxHp * 1.2));
    addTitle("体力を限界突破まで回復した親", logId);
  }
  if (mpOver) {
    state.mp = Math.max(state.mp, Math.ceil(state.maxMp * 1.2));
    addTitle("ひとり時間で精神力を取り戻した親", logId);
  }
}

function discoverUniqueSkills(text, logId, isPastLeveling) {
  const found = UNIQUE_SKILL_DEFINITIONS.filter((definition) => isUniqueSkillText(text, definition));
  if (!found.length) return { skills: [], stats: {} };
  const modifier = isPastLeveling ? 0.72 : 1;
  const skills = found.map((definition) =>
    addSkill(
      {
        name: definition.name,
        exp: Math.max(6, Math.round(definition.exp * modifier)),
        tags: ["ユニーク", "習い事", "本格伴走"],
        category: "ユニーク",
      },
      logId,
      "unique"
    )
  );
  if (!isPastLeveling) addTitle("本格ルートを見つけた親", logId);
  return {
    skills,
    stats: {
      知力: Math.min(5, found.length * 2),
      忍耐力: Math.min(4, found.length * 2),
      察知力: Math.min(4, found.length),
      実行力: Math.min(3, found.length),
    },
  };
}

function isUniqueSkillText(text, definition) {
  const exactSkillContext = includesAny(text, definition.words);
  if (!exactSkillContext) return false;
  const seriousContext = includesAny(text, [
    ...definition.contextWords,
    "習い事",
    "教室",
    "レッスン",
    "教材",
    "ワーク",
    "プリント",
    "宿題",
    "練習",
    "復習",
    "稽古",
    "通う",
    "通い",
    "始めた",
    "習い始め",
    "先生",
    "発表会",
    "級",
  ]);
  const playOnlyContext = includesAny(text, ["ごっこ", "おもちゃ", "遊んだ", "公園", "走り回", "踊った", "歌った"]);
  return seriousContext && !(playOnlyContext && !includesAny(text, ["習い事", "教室", "レッスン", "教材", "ワーク", "プリント", "宿題", "練習", "稽古"]));
}

function discoverNameCollections(text, logId, isPastLeveling) {
  const foundGroups = [];

  NAME_COLLECTIONS.forEach((collection) => {
    const foundItems = collection.items.filter((item) => includesAny(text, item.words));
    const hasTheme = includesAny(text, collection.themeWords || []);
    if (!foundItems.length && !hasTheme) return;

    const store = collectionState(collection.id);
    const beforeCount = discoveredNameCount(collection.id);
    const newlyFound = [];
    foundItems.forEach((item) => {
      const current = store[item.name] || { count: 0, firstLogId: logId };
      if (!current.count) newlyFound.push(item.name);
      store[item.name] = {
        count: current.count + 1,
        firstLogId: current.firstLogId || logId,
        lastLogId: logId,
        updatedAt: new Date().toISOString(),
      };
    });
    if (collection.id === "dinosaurs") state.dinosaurs = store;

    const afterCount = discoveredNameCount(collection.id);
    collectionTitlesForCount(collection, beforeCount, afterCount).forEach((title) => addTitle(title, logId));
    if (newlyFound.length) addTitle(`${newlyFound[0]}を発見した親`, logId);
    if (hasTheme && afterCount === 0) addTitle(`${collection.shortLabel}図鑑の入口に立った親`, logId);

    if (foundItems.length) {
      foundGroups.push({
        id: collection.id,
        label: collection.label,
        names: foundItems.map((item) => item.name),
        newlyFound,
      });
    }
  });

  return { found: foundGroups, skills: [] };
}

function collectionState(collectionId) {
  if (!state.nameCollections) state.nameCollections = {};
  if (!state.nameCollections[collectionId]) {
    state.nameCollections[collectionId] = collectionId === "dinosaurs" ? { ...(state.dinosaurs || {}) } : {};
  }
  return state.nameCollections[collectionId];
}

function discoveredNameCount(collectionId) {
  const collection = NAME_COLLECTIONS.find((item) => item.id === collectionId);
  if (!collection) return 0;
  const store = collectionState(collectionId);
  return collection.items.filter((item) => (store[item.name]?.count || 0) > 0).length;
}

function discoveredNameTotal() {
  return NAME_COLLECTIONS.reduce((total, collection) => total + discoveredNameCount(collection.id), 0);
}

function nameCollectionTotal() {
  return NAME_COLLECTIONS.reduce((total, collection) => total + collection.items.length, 0);
}

function discoveredDinosaurCount() {
  return discoveredNameCount("dinosaurs");
}

function collectionTitlesForCount(collection, before, after) {
  const thresholds =
    collection.titleThresholds ||
    [
      { count: 1, title: `${collection.shortLabel}見習い` },
      { count: 5, title: `${collection.shortLabel}集めの相棒` },
      { count: 10, title: `${collection.shortLabel}図鑑を埋める親` },
      { count: 30, title: `${collection.shortLabel}図鑑中級者` },
      { count: 50, title: `${collection.shortLabel}博士の助手` },
      { count: collection.items.length, title: `${collection.shortLabel}図鑑コンプリート` },
    ];
  return thresholds
    .filter((item) => item.count > 0 && before < item.count && after >= item.count)
    .map((item) => item.title);
}

function discoverFamilyMentions(text, logId, isPastLeveling) {
  const relatives = (state.familyProfile?.relatives || []).filter((relative) => relative.nickname);
  const mentioned = [
    ...relatives.filter((relative) => text.includes(relative.nickname)),
    ...inferRelativeNicknames(text).map((nickname) => ({ nickname, relation: "未登録の親族" })),
  ];
  if (!mentioned.length) return { skills: [], stats: {}, hp: 0, mp: 0, maxHp: 0, maxMp: 0 };

  const remoteWords = ["LINE", "ライン", "電話", "通話", "ビデオ通話", "メール", "メッセージ", "DM"];
  const photoWords = ["写真", "動画", "送ってくれ", "写真送", "動画送", "共有"];
  const miteneWords = ["みてね", "アルバムに入れ", "写真あげ", "写真入れ", "動画あげ", "家族アルバム"];
  const supportWords = ["手伝", "助けてもら", "お願いした", "頼った", "甘えた", "任せた", "来てくれ"];
  const childcareWords = ["預か", "預け", "見てもら", "子守り", "迎えに行ってもら", "送ってもら"];
  const giftWords = ["買ってくれ", "買ってもら", "プレゼント", "誕生日グッズ", "服もいっぱい", "持ってき", "送ってくれ", "いただきもの", "もらった"];
  const thanksWords = ["ありがとう", "助かった", "感謝", "お礼", "ありがたい", "嬉しかった", "祝って"];
  const eventWords = ["誕生日", "お宮参り", "一升餅", "選び取り", "旅行", "帰省", "お祝い", "家族行事"];
  const prepWords = ["手土産", "来る準備", "行く準備", "訪問準備", "泊まり準備", "布団を用意", "部屋を片付け", "チャイルドシート準備"];
  const scheduleWords = ["日程", "予定", "スケジュール", "調整", "いつ行く", "何時"];
  const mealWords = ["ご飯", "ごはん", "食事", "外食", "食べた", "晩ご飯", "昼ご飯"];
  const playWords = ["遊ん", "抱っこ", "公園", "会った", "一緒", "家で遊"];
  const cousinWords = ["甥っ子", "姪っ子", "甥", "姪", "いとこ", "従兄弟", "従姉妹"];
  const greetingWords = ["あいさつ", "挨拶", "こんにちは", "おはよう", "こんばんは", "久しぶり"];
  const explanationWords = ["説明", "伝えた", "話した", "相談", "状況", "報告"];
  const hasRemote = includesAny(text, remoteWords);
  const hasPhoto = includesAny(text, photoWords);
  const hasMitene = includesAny(text, miteneWords);
  const hasSupport = includesAny(text, supportWords);
  const hasChildcare = includesAny(text, childcareWords);
  const hasGift = includesAny(text, giftWords);
  const hasThanks = includesAny(text, thanksWords);
  const hasEvent = includesAny(text, eventWords);
  const hasPrep = includesAny(text, prepWords);
  const hasSchedule = includesAny(text, scheduleWords);
  const hasMeal = includesAny(text, mealWords);
  const hasPlay = includesAny(text, playWords);
  const hasCousin = includesAny(text, cousinWords);
  const hasGreeting = includesAny(text, greetingWords);
  const hasExplanation = includesAny(text, explanationWords);
  const hasSelfHome = text.includes("自分の実家") || text.includes("自分実家") || (text.includes("実家") && !text.includes("妻の実家") && !text.includes("夫の実家") && !text.includes("義実家"));
  const hasPartnerHome = text.includes("妻の実家") || text.includes("夫の実家") || text.includes("パートナーの実家") || text.includes("義実家");
  const hasSelfSideRelative = mentioned.some((relative) => relativeSide(relative) === "self");
  const hasPartnerSideRelative = mentioned.some((relative) => relativeSide(relative) === "partner");
  const scale = isPastLeveling ? 0.72 : 1;
  const skills = [];
  const stats = { 素直さ: 1, 察知力: 1 };
  let hp = 1;
  let mp = 3;
  let maxHp = 0;
  let maxMp = 1;
  const addFamilySkill = (name, exp, tags = []) => {
    skills.push(
      addSkill(
        {
          name,
          exp: Math.max(1, Math.round(exp * scale)),
          tags: ["親族", ...tags],
          category: "親族",
        },
        logId
      )
    );
  };

  if (hasRemote) {
    addFamilySkill("遠隔コミュニケーション", hasPhoto ? 13 : 10, ["LINE", "連絡"]);
    if (text.includes("LINE") || text.includes("ライン")) addFamilySkill("親族LINE返信", 10, ["LINE", "返信"]);
    stats.素直さ += 1;
    mp += 3;
  }

  if (hasMitene) {
    addFamilySkill("みてね更新", 15, ["写真", "共有"]);
    addFamilySkill("写真動画共有", 10, ["写真", "動画"]);
    stats.実行力 = (stats.実行力 || 0) + 1;
    mp += 4;
  } else if (hasPhoto) {
    addFamilySkill("写真動画共有", 11, ["写真", "動画"]);
    mp += 3;
  }

  if (hasSupport) {
    addFamilySkill("手伝ってもらう素直さ", 14, ["素直さ", "回復"]);
    addFamilySkill("頼る判断力", 9, ["判断", "回復"]);
    stats.素直さ += 3;
    hp += 5;
    mp += 4;
  }

  if (hasChildcare) {
    addFamilySkill("子ども預け連携", 14, ["預け", "段取り"]);
    addFamilySkill("手伝ってもらう素直さ", 8, ["素直さ", "回復"]);
    stats.素直さ += 2;
    stats.実行力 = (stats.実行力 || 0) + 2;
    hp += 5;
    mp += 5;
  }

  if (hasGift) {
    addFamilySkill("プレゼント受け取り対応", 12, ["贈り物", "感謝"]);
    addFamilySkill("いただきもの管理", 8, ["贈り物", "管理"]);
    stats.素直さ += 2;
    mp += 4;
  }

  if (hasThanks) {
    addFamilySkill("親族感謝伝達", 13, ["感謝", "素直さ"]);
    stats.素直さ += 3;
    mp += 5;
  }

  if (hasEvent || hasPlay || hasMeal || hasSelfHome || hasPartnerHome || hasSelfSideRelative || hasPartnerSideRelative) {
    addFamilySkill("親戚交友力", hasEvent ? 16 : 12, ["交流", "回復"]);
    stats.実行力 = (stats.実行力 || 0) + (hasEvent ? 2 : 1);
    stats.素直さ += 1;
    hp += hasPlay ? 2 : 1;
    mp += hasEvent ? 5 : 2;
  }

  if (hasSelfHome || hasSelfSideRelative) {
    addFamilySkill("自分実家訪問", 10, ["実家", "訪問"]);
    addFamilySkill("実家距離感調整", 6, ["実家", "距離感"]);
  }

  if (hasPartnerHome || hasPartnerSideRelative) {
    addFamilySkill("パートナー実家訪問", 10, ["義実家", "訪問"]);
    addFamilySkill("義実家距離感調整", 6, ["義実家", "距離感"]);
  }

  if (hasPrep) {
    addFamilySkill("親族訪問準備", 12, ["準備", "実行力"]);
    stats.実行力 = (stats.実行力 || 0) + 2;
  }

  if (hasSchedule) {
    addFamilySkill("親族間スケジュール調整", 10, ["日程", "調整"]);
    stats.知力 = (stats.知力 || 0) + 1;
    stats.実行力 = (stats.実行力 || 0) + 1;
  }

  if (hasMeal) addFamilySkill("親族食事会対応", 10, ["食事", "交流"]);
  if (hasCousin) {
    addFamilySkill("甥っ子姪っ子交流", 10, ["遊び", "子ども"]);
    addFamilySkill("いとこ遊び調整", 8, ["遊び", "調整"]);
  }
  if (hasGreeting) addFamilySkill("親族あいさつ運用", 8, ["あいさつ"]);
  if (hasExplanation) addFamilySkill("親族への説明力", 8, ["説明", "共有"]);
  if (hasEvent) {
    addFamilySkill("親族行事連携", 12, ["行事", "連携"]);
    if (text.includes("誕生日")) addFamilySkill("誕生日お礼連絡", 10, ["誕生日", "お礼"]);
    if (text.includes("お祝い") || text.includes("祝って")) addFamilySkill("お祝い段取り", 8, ["お祝い", "準備"]);
  }

  if (includesAny(text, ["内祝い", "お返し", "返礼"])) {
    addFamilySkill("内祝い・お返し管理", 12, ["お返し", "感謝"]);
  }
  if (includesAny(text, ["呼び名", "なんて呼ぶ", "呼んで", "あだ名"])) {
    addFamilySkill("子どもの呼び名共有", 8, ["呼び名", "共有"]);
  }
  if (includesAny(text, ["間に入", "仲介", "板挟み", "クッション"])) {
    addFamilySkill("家族間クッション役", 10, ["調整", "バランス"]);
  }

  if (!skills.length) {
    addFamilySkill("親戚交友力", 8, ["毎日の積み重ね"]);
  }

  if (hasSupport || hasChildcare) addTitle("親族の支えを受け取れた親", logId);
  if (hasRemote) addTitle("離れていてもつながる親", logId);
  if (hasEvent) addTitle("親族と節目を育てた親", logId);
  if (hasMitene) addTitle("みてねを更新した親", logId);

  return { skills, stats, hp, mp, maxHp, maxMp };
}

function relativeSide(relative) {
  const relation = relative?.relation || "";
  if (includesAny(relation, ["パートナー", "妻", "夫", "義", "ママ側", "相手"])) return "partner";
  if (includesAny(relation, ["自分", "自分側", "パパ側"])) return "self";
  return "";
}

function discoverParentBondEvent(text, logId, isPastLeveling) {
  const eventType = parentBondEventType(text);
  if (!eventType) return { skills: [], stats: {}, hp: 0, mp: 0, maxHp: 0, maxMp: 0, strength: 0, eventType: "" };

  const scale = isPastLeveling ? 0.72 : 1;
  const skills = [];
  const addParentSkill = (name, exp, tags = []) => {
    skills.push(
      addSkill(
        {
          name,
          exp: Math.max(1, Math.round(exp * scale)),
          tags: ["親子", ...tags],
          category: "親子",
        },
        logId
      )
    );
  };

  if (eventType === "big-love") {
    addParentSkill("大好き受け取り", 18, ["上限突破", "回復"]);
    addParentSkill("好き受け取り", 8, ["回復"]);
    addTitle("大好きで限界突破した親", logId);
    return {
      skills,
      stats: { 素直さ: 3, 察知力: 2, パパママ力: 3 },
      hp: Math.ceil(state.maxHp * 0.25),
      mp: Math.ceil(state.maxMp * 0.25),
      maxHp: 1,
      maxMp: 1,
      strength: 2,
      eventType,
    };
  }

  if (eventType === "love") {
    addParentSkill("好き受け取り", 13, ["回復"]);
    addTitle("好きを受け取った親", logId);
    return {
      skills,
      stats: { 素直さ: 2, 察知力: 1, パパママ力: 2 },
      hp: Math.ceil(state.maxHp * 0.18),
      mp: Math.ceil(state.maxMp * 0.18),
      maxHp: 0,
      maxMp: 1,
      strength: 1,
      eventType,
    };
  }

  if (eventType === "big-dislike") {
    addParentSkill("パパママ大っ嫌い耐久", 20, ["MPマイナス", "高難度"]);
    addParentSkill("パパママ嫌いの受け止め", 12, ["忍耐", "察知"]);
    addTitle("大っ嫌いを抱えた親", logId);
    return {
      skills,
      stats: { 忍耐力: 5, 察知力: 3, 素直さ: 1, パパママ力: 2 },
      hp: -3,
      mp: -state.maxMp,
      maxHp: 0,
      maxMp: 10,
      strength: 2,
      eventType,
    };
  }

  addParentSkill("パパママ嫌いの受け止め", 16, ["MP0", "忍耐"]);
  addTitle("嫌いを受け止めた親", logId);
  return {
    skills,
    stats: { 忍耐力: 3, 察知力: 2, 素直さ: 1, パパママ力: 1 },
    hp: -2,
    mp: -state.maxMp,
    maxHp: 0,
    maxMp: 5,
    strength: 1.5,
    eventType,
  };
}

function applyParentBondSpecial(result, logId) {
  if (!result.eventType) return;
  if (result.eventType === "big-love") {
    state.hp = Math.max(state.hp, Math.ceil(state.maxHp * 1.2));
    state.mp = Math.max(state.mp, Math.ceil(state.maxMp * 1.2));
    return;
  }
  if (result.eventType === "love") {
    state.hp = Math.max(state.hp, state.maxHp);
    state.mp = Math.max(state.mp, state.maxMp);
    return;
  }
  if (result.eventType === "big-dislike") {
    state.mp = -Math.max(5, Math.ceil(state.maxMp * 0.2));
    if (state.mp < 0) addTitle("MPマイナスから帰ってきた親", logId);
    return;
  }
  if (result.eventType === "dislike") state.mp = 0;
}

function discoverChildCharmMentions(text, logId, isPastLeveling) {
  const children = (state.familyProfile?.children || []).filter((child) => child.nickname);
  const childWords = [
    ...children.map((child) => child.nickname),
    "娘",
    "息子",
    "子ども",
    "子供",
    "うちの子",
  ].filter(Boolean);
  if (!childWords.length) return { skills: [], stats: {}, hp: 0, mp: 0, maxHp: 0, maxMp: 0 };
  const charmWords = ["可愛い", "かわいい", "可愛すぎ", "かわいすぎ", "かっこいい", "格好いい", "素敵", "似合う"];
  const hasChild = childWords.some((word) => text.includes(word));
  const hasCharm = includesAny(text, charmWords);
  if (!hasChild || !hasCharm) return { skills: [], stats: {}, hp: 0, mp: 0, maxHp: 0, maxMp: 0 };

  const scale = isPastLeveling ? 0.72 : 1;
  const skills = [
    addSkill(
      {
        name: "褒めるタイミング",
        exp: Math.max(1, Math.round(10 * scale)),
        tags: ["親子", "褒め", "回復"],
        category: "親子",
      },
      logId
    ),
    addSkill(
      {
        name: "成長にじーん",
        exp: Math.max(1, Math.round(7 * scale)),
        tags: ["親子", "愛情", "記録"],
        category: "親子",
      },
      logId
    ),
  ];
  addTitle("うちの子かわいいを受け止めた親", logId);
  return {
    skills,
    stats: { 素直さ: 2, 察知力: 2, パパママ力: 2 },
    hp: 4,
    mp: 7,
    maxHp: 0,
    maxMp: 1,
  };
}

function parentBondEventType(text) {
  const calls = parentCallWords();
  if (!calls.length) return "";
  const patterns = calls.map((call) => escapeRegExp(call)).join("|");
  const bigDislike = new RegExp(`(?:${patterns})(?:が|は|のこと)?(?:大っ嫌い|大嫌い|だいっきらい|だいきらい)`);
  const dislike = new RegExp(`(?:${patterns})(?:が|は|のこと)?(?:嫌い|きらい)`);
  const bigLove = new RegExp(`(?:${patterns})(?:が|は|のこと)?(?:大好き|だいすき)`);
  const love = new RegExp(`(?:${patterns})(?:が|は|のこと)?(?:好き|すき)`);
  if (bigDislike.test(text)) return "big-dislike";
  if (dislike.test(text)) return "dislike";
  if (bigLove.test(text)) return "big-love";
  if (love.test(text)) return "love";
  return "";
}

function parentCallWords() {
  const profile = state.familyProfile || {};
  return Array.from(
    new Set([
      profile.selfCall,
      profile.partnerCall,
      "パパ",
      "ぱぱ",
      "ママ",
      "まま",
      "お父さん",
      "お母さん",
      "父ちゃん",
      "母ちゃん",
      "とうちゃん",
      "かあちゃん",
    ])
  ).filter((word) => word && word.length >= 2);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function inferRelativeNicknames(text) {
  const nicknames = new Set();
  const patterns = [
    /[ぁ-んァ-ン一-龥々ー]{1,8}(?:じい|じぃ|じーじ|爺|ばあ|ばぁ|ばーば|婆)/g,
    /(?:おじ|おば|叔父|叔母|伯父|伯母)[ぁ-んァ-ン一-龥々ー]{0,6}/g,
  ];
  patterns.forEach((pattern) => {
    [...text.matchAll(pattern)].forEach((match) => nicknames.add(match[0]));
  });
  return [...nicknames];
}

function roleDeltaFromLog(text, activePatterns, skills, title, isPastLeveling) {
  const haystack = [
    text,
    title,
    activePatterns.map((pattern) => `${pattern.id} ${pattern.title || ""}`).join(" "),
  ].join(" ");
  const leaderWords = [
    "司令塔",
    "段取り",
    "設計",
    "準備",
    "申請",
    "制度",
    "家計",
    "NISA",
    "iDeCo",
    "仕事整理",
    "育休",
    "保育園準備",
    "学校準備",
    "オペレーション",
    "運用",
    "調整",
    "手配",
    "見直し",
    "判断",
    "記録",
    "予約",
    "確認",
    "登録",
    "買っておいた",
    "買いに行",
    "調べ",
    "共有した",
    "説明した",
  ];
  const supporterWords = [
    "支える",
    "手伝",
    "サポート",
    "休ませ",
    "代わ",
    "寄り添",
    "抱っこ",
    "ハグ",
    "ありがとう",
    "ごめん",
    "預け",
    "預か",
    "見守",
    "聞いた",
    "受け取",
    "安心",
    "回復",
    "見守",
    "話を聞",
    "愚痴",
    "代わった",
    "任せた",
    "頼った",
    "助けてもら",
  ];
  const scale = isPastLeveling ? 2 : 1;
  const leaderHits = countRoleHits(haystack, leaderWords);
  const supporterHits = countRoleHits(haystack, supporterWords);
  if (!leaderHits && !supporterHits) {
    return { leader: scale, supporter: scale };
  }
  let leader = leaderHits ? Math.ceil(leaderHits / 3) * scale : 0;
  let supporter = supporterHits ? Math.ceil(supporterHits / 3) * scale : 0;
  return {
    leader: clamp(leader, 0, 2 * scale),
    supporter: clamp(supporter, 0, 2 * scale),
  };
}

function countRoleHits(text, words) {
  return words.reduce((total, word) => total + (text.includes(word) ? 1 : 0), 0);
}

function chooseTodayTitle(activePatterns, memorialResults) {
  if (memorialResults.length) return `記念ログ「${memorialResults[0].name}」を刻んだ親`;
  const priorityIds = [
    "solo-care",
    "birth-phase",
    "first-birth-unknown",
    "delivery-attendance",
    "water-break-midnight",
    "rapid-second-delivery",
    "older-child-at-birth",
    "birth-support-items",
    "second-birth-rule-change",
    "first-child-postpartum",
    "second-child-strategy",
    "postpartum-household-infra",
    "adult-conversation-lifeline",
    "parental-leave-meaning",
    "sleepless-night",
    "travel",
    "hard-day",
    "birthday",
    "morning-kids-weight",
    "two-kids-carry",
    "welcome-home-attack",
    "shoulder-ride",
    "heartfelt-compliment",
    "couple-affection",
    "couple-memory",
    "shared-excitement",
    "picture-book",
    "sleepcare",
    "late-home",
    "patience",
  ];
  const priority = priorityIds
    .map((id) => activePatterns.find((pattern) => pattern.id === id))
    .find(Boolean);
  if (priority) return priority.title;
  const candidates = activePatterns.map((pattern) => pattern.title).filter(Boolean);
  return candidates[0] || "今日を記録した親";
}

function choosePastTitle(activePatterns, memorialResults) {
  if (memorialResults.length) return `過去の記念ログ「${memorialResults[0].name}」を反映`;
  if (activePatterns.some((pattern) => pattern.id === "older-child-at-birth")) return "上の子同伴出産オペレーションを反映";
  if (activePatterns.some((pattern) => pattern.id === "rapid-second-delivery")) return "二人目急展開出産の経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "delivery-attendance")) return "立ち会い出産サポートの経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "first-child-postpartum")) return "一人目産後サバイブの経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "postpartum-household-infra")) return "産後家庭インフラの経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "second-child-strategy")) return "二人目育児の布陣を反映";
  if (activePatterns.some((pattern) => pattern.id === "birth-phase")) return "出産直後フェーズの経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "birthday")) return "誕生日クエストの経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "parental-leave")) return "育休クエストの経験を反映";
  if (activePatterns.some((pattern) => pattern.id === "family-event")) return "家族行事の経験を反映";
  const hasCare = activePatterns.some((pattern) => ["piyolog", "food", "house", "sleepcare", "patience"].includes(pattern.id));
  const hasPlay = activePatterns.some((pattern) => ["tag", "clay", "pretend", "dance"].includes(pattern.id));
  const hasSocial = activePatterns.some((pattern) => ["social", "work"].includes(pattern.id));
  if (hasCare && hasPlay) return "育児生活の初期レベリング完了";
  if (hasCare) return "生活運用の過去経験を反映";
  if (hasPlay) return "遊びスキルの過去経験を反映";
  if (hasSocial) return "外の負荷を越えた経験を反映";
  return "過去レベリング完了";
}

function estimatePhaseCap(text) {
  if (/(小6|小６|小学6|小学６|小学校卒業)/.test(text)) return 100;
  if (/(小5|小５|小4|小４|高学年)/.test(text)) return 90;
  if (/(小3|小３|小2|小２|中学年)/.test(text)) return 80;
  if (/(小1|小１|小学生|低学年)/.test(text)) return 70;
  if (/(年長|卒園|保育園卒業|幼稚園卒業)/.test(text)) return 60;
  if (/(年中|4歳|４歳|5歳|５歳)/.test(text)) return 55;
  if (/(3歳|３歳)/.test(text)) return 50;
  if (/(2歳|２歳)/.test(text)) return 42;
  if (/(1歳|１歳)/.test(text)) return 32;
  if (/(0歳|０歳|新生児|赤ちゃん)/.test(text)) return 22;
  return 60;
}

function showSleepCurtain() {
  const curtain = $("sleepCurtain");
  if (!curtain || curtain.classList.contains("active")) return;

  const growthDialog = $("growthDialog");
  const detailDialog = $("detailDialog");
  if (growthDialog?.open) growthDialog.close();
  if (detailDialog?.open) detailDialog.close();

  curtain.classList.add("active");
  curtain.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    state.currentView = "home";
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 820);

  window.setTimeout(() => {
    curtain.classList.remove("active");
    curtain.setAttribute("aria-hidden", "true");
  }, 1800);
}

function sleepNow() {
  const curtain = $("sleepCurtain");
  if (curtain?.classList.contains("active")) return;

  const now = new Date();
  const logId = `log_${Date.now()}`;
  const hour = now.getHours() + now.getMinutes() / 60;
  let title = "眠りに向かった親";
  if (hour >= 21 && hour < 22) {
    title = "伝説の早寝";
  } else if (hour >= 22 && hour < 23) {
    title = "明日の自分に渡した親";
  } else if (hour >= 23 && hour < 24) {
    title = "今日を閉じた親";
  } else if (hour < 1) {
    title = "深夜に帰還した親";
  } else {
    title = "夜更かしから生還する親";
  }

  const beforeHp = state.hp;
  const beforeMp = state.mp;
  const targetHp = Math.ceil(state.maxHp * 0.8);
  const targetMp = Math.ceil(state.maxMp * 0.8);
  state.hp = clamp(targetHp, 0, state.maxHp);
  state.mp = clamp(targetMp, 0, state.maxMp);
  state.lastSleepAt = now.toISOString();
  addTitle(title, logId);

  const log = {
    id: logId,
    type: "sleep",
    text: "寝ます",
    createdAt: now.toISOString(),
    hpBefore: beforeHp,
    mpBefore: beforeMp,
    maxHpBefore: state.maxHp,
    maxMpBefore: state.maxMp,
    hpAfter: state.hp,
    mpAfter: state.mp,
    maxHpAfter: state.maxHp,
    maxMpAfter: state.maxMp,
    hpDelta: state.hp - beforeHp,
    mpDelta: state.mp - beforeMp,
    statDelta: {},
    skills: [],
    title,
    levelBefore: state.level,
    levelAfter: state.level,
  };
  state.logs.unshift(log);
  saveState();
  render();
  renderResult(log);
  showSleepCurtain();
}

function organizeSkills() {
  const normalSkills = state.skills.filter((skill) => skill.type !== "memorial");
  if (!normalSkills.length) {
    renderResult({
      title: "整理するスキルはまだありません",
      text: "ログを増やすと、装備スキルを自動で選べるようになります。",
      hpDelta: 0,
      mpDelta: 0,
      statDelta: {},
      skills: [],
      levelBefore: state.level,
      levelAfter: state.level,
      type: "system",
    });
    return;
  }

  const grouped = new Map();
  normalSkills.forEach((skill) => {
    const categoryName = skill.category || skillCategoryName(skill);
    if (!grouped.has(categoryName)) grouped.set(categoryName, []);
    grouped.get(categoryName).push(skill);
  });
  const selected = [];
  grouped.forEach((items) => {
    selected.push(
      ...items
        .sort((a, b) => b.level - a.level || b.exp - a.exp || a.name.localeCompare(b.name, "ja"))
        .slice(0, NORMAL_SKILL_LIMIT)
    );
  });

  state.equippedSkillIds = selected.map((skill) => skill.id);
  const title = "スキル装備を自動整理した";
  const resultText = skillCategoriesWithSkills(normalSkills)
    .map((category) => `${category.name} ${currentEquippedSkillIds(category.name).length}/${NORMAL_SKILL_LIMIT}`)
    .join(" / ");
  const previewSkills = selected
    .map((skill) => `${skill.name} Lv.${skill.level}`)
    .slice(0, 10)
    .join(" / ");
  saveState();
  render();

  renderResult({
    title,
    text: `大元ごとに装備スキルを整理しました。\n${resultText}\n${previewSkills}`,
    hpDelta: 0,
    mpDelta: 0,
    statDelta: {},
    skills: selected.slice(0, 6).map((skill) => ({ name: skill.name, level: skill.level, exp: 0, isNew: false, type: "normal" })),
    levelBefore: state.level,
    levelAfter: state.level,
    type: "system",
  });
}

function synthesizeSkill() {
  const normalSkills = state.skills.filter((skill) => skill.type !== "memorial");
  if (!normalSkills.length) {
    renderResult({
      title: "合成するスキルはまだありません",
      text: "ログからスキルが増えると、合成できるようになります。",
      hpDelta: 0,
      mpDelta: 0,
      statDelta: {},
      skills: [],
      levelBefore: state.level,
      levelAfter: state.level,
      type: "system",
    });
    return;
  }

  const candidates = fusionCandidateGroups(normalSkills);
  let result;
  let title;
  let text;
  if (candidates.length) {
    const group = randomItem(candidates);
    const fusionCount = Math.min(group.items.length, 2 + Math.floor(Math.random() * 3));
    const ingredients = shuffle(group.items).slice(0, fusionCount);
    const resultName = chooseFusionSkillName(group, ingredients);
    const exp = ingredients.reduce((total, skill) => total + Math.max(4, Math.round(skill.exp * 0.18)), 0) + 8 + Math.floor(Math.random() * 9);
    const tags = Array.from(new Set([group.name, "合成", ...ingredients.flatMap((skill) => skill.tags || [])])).slice(0, 6);
    const sourceIds = Array.from(new Set(ingredients.flatMap((skill) => skill.sourceLogIds || [])));
    const existing = state.skills.find((skill) => skill.name === resultName && skill.type !== "memorial");
    result = addSkill(
      {
        name: resultName,
        exp,
        tags,
        category: skillCategoryName({ name: resultName, tags: [group.name, ...tags] }),
      },
      sourceIds[0] || null
    );
    const fusedSkill = state.skills.find((skill) => skill.name === result.name && skill.type !== "memorial");
    if (fusedSkill) {
      fusedSkill.sourceLogIds = Array.from(new Set([...(fusedSkill.sourceLogIds || []), ...sourceIds]));
      if (currentEquippedSkillIds(fusedSkill.category).length < NORMAL_SKILL_LIMIT && !currentEquippedSkillIds().includes(fusedSkill.id)) {
        state.equippedSkillIds = [...currentEquippedSkillIds(), fusedSkill.id];
      }
    }
    title = existing ? "合成で既存スキルが育った" : "スキル合成で新しい技が生まれた";
    text = `${ingredients.map((skill) => `${skill.name} Lv.${skill.level}`).join(" + ")}\n=> ${result.name} Lv.${result.level}\n${existing ? "持っている技に経験値が流れ込みました。" : "新しいスキルとして図鑑に追加されました。"}`;
  } else {
    const target = randomItem([...normalSkills].sort((a, b) => b.level - a.level || b.exp - a.exp).slice(0, Math.min(6, normalSkills.length)));
    const exp = 8 + Math.floor(Math.random() * 12);
    const expBefore = target.exp;
    const levelBefore = target.level;
    target.exp += exp;
    target.level = skillLevel(target.exp);
    target.tags = Array.from(new Set([...(target.tags || []), "合成強化"]));
    result = { name: target.name, level: target.level, levelBefore, exp, expBefore, expAfter: target.exp, isNew: false, type: "normal" };
    title = "合成で既存スキルが育った";
    text = `近い素材がまだ少なかったので、${target.name}に経験値が入りました。\n${target.name} Lv.${target.level} / EXP +${exp}`;
  }

  saveState();
  render();
  renderResult({
    title,
    text,
    hpDelta: 0,
    mpDelta: 0,
    statDelta: {},
    skills: [result],
    levelBefore: state.level,
    levelAfter: state.level,
    type: "system",
  });
}

function fusionCandidateGroups(skills) {
  const groups = new Map();
  skills.forEach((skill) => {
    const keys = new Set([skill.category || skillCategoryName(skill), ...(skill.tags || [])]);
    keys.forEach((key) => {
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(skill);
    });
  });
  return Array.from(groups.entries())
    .map(([name, items]) => ({ name, items: Array.from(new Map(items.map((skill) => [skill.id, skill])).values()) }))
    .filter((group) => group.items.length >= 2);
}

function chooseFusionSkillName(group, ingredients) {
  const haystack = `${group.name} ${ingredients.map((skill) => `${skill.name} ${(skill.tags || []).join(" ")}`).join(" ")}`;
  const recipes = [
    { words: ["夜", "夜泣き", "寝れない", "高難度"], names: ["夜間育児サバイブ", "寝室守護術", "夜泣き対応の型"] },
    { words: ["抱っこ", "親子"], names: ["抱っこ安心運用", "抱っこ鎮静術", "腕の中の避難所"] },
    { words: ["公園", "ブランコ", "遊具"], names: ["公園あそびマスター", "遊具見守り術", "外遊びオペレーション"] },
    { words: ["テーマパーク", "ユニバ", "USJ", "ディズニー", "遊園地"], names: ["子連れテーマパーク攻略", "高負荷おでかけ運用", "思い出遠征オペレーション"] },
    { words: ["水遊び", "プール", "海"], names: ["水辺あそび管理", "水遊び安全オペレーション", "夏の外遊び対応"] },
    { words: ["人間遊具", "高負荷", "肩車", "高い高い"], names: ["人間遊具マスター", "全身あそび運用", "体力あそびマスター"] },
    { words: ["遊び", "筋力", "走", "鬼ごっこ", "ダンス"], names: ["全身あそび運用", "体力あそびマスター", "もう一回対応力"] },
    { words: ["ミルク", "白湯", "哺乳瓶"], names: ["乳児補給オペレーション", "ミルク管理熟練", "夜間ミルク補給線"] },
    { words: ["離乳食", "おかゆ", "ペースト", "冷凍"], names: ["離乳食フェーズ管理", "冷凍ストック司令塔", "食べられる形づくり"] },
    { words: ["炊飯", "スープ", "味噌汁", "おにぎり"], names: ["食卓基礎工事", "毎日のごはん運用", "家庭の補給ライン"] },
    { words: ["レンジ", "オーブン", "包丁", "まな板"], names: ["台所オペレーション", "調理導線最適化", "下ごしらえ熟練"] },
    { words: ["お茶", "麦茶", "洗い物", "食器"], names: ["食卓クローズ運用", "水分補給ライン", "台所後処理熟練"] },
    { words: ["料理", "食事", "ミルク", "離乳食"], names: ["食卓オペレーション", "子どもごはん運用", "補給ライン構築"] },
    { words: ["親族", "預け", "頼る", "手伝"], names: ["親族連携オペレーション", "頼れる育児チーム", "預け先ネットワーク"] },
    { words: ["親子", "大好き", "ハグ", "お出かけ"], names: ["親子回復ルート", "愛情受け取り熟練", "親子外出オペレーション"] },
    { words: ["ありがとう", "ごめん", "素直さ"], names: ["素直な関係修復", "ありがとう運用", "ごめんねリカバリー"] },
    { words: ["家計設計", "NISA", "iDeCo", "投資"], names: ["長期家計戦略", "未来資産オペレーション", "家族資産設計"] },
    { words: ["制度", "給付金", "自治体", "福利厚生"], names: ["制度回収マスター", "自治体リサーチ熟練", "使える支援の探索"] },
    { words: ["節約", "買い物", "家計簿", "固定費"], names: ["家計防衛ライン", "節約判断熟練", "固定費スリム化"] },
    { words: ["買い物", "食材", "勉強", "生活"], names: ["買い物学習オペレーション", "食材知育マスター", "生活を学びに変える力"] },
    { words: ["仕事", "残業", "切替", "帰還"], names: ["仕事家庭切替マスター", "帰宅ルート確保", "外の負荷サバイブ"] },
    { words: ["育休", "休み申請", "病気", "素直さ"], names: ["家庭優先オペレーション", "休む判断の実行力", "育休取得戦略"] },
    { words: ["ゴミ", "ごみ", "分別", "処理"], names: ["ゴミ処理司令塔", "分別回収オペレーション", "生活排出ライン管理"] },
    { words: ["掃除", "水回り", "片付け", "制作物"], names: ["掃除察知マスター", "部屋リセット熟練", "家の違和感センサー"] },
    { words: ["洗濯", "水通し", "畳", "ハンガー"], names: ["洗濯導線マスター", "衣類インフラ運用", "洗って畳む完了術"] },
    { words: ["新生児", "大型布物", "ドラム式", "高負荷"], names: ["洗濯インフラ司令塔", "新生児洗濯耐性", "布物メンテナンス熟練"] },
    { words: ["勉強", "絵本", "文字", "算数"], names: ["学びの入口づくり", "知育伴走マスター", "言葉と数字の土台"] },
    { words: ["科学", "実験", "なぜ", "メディア"], names: ["小さな研究室運用", "なぜなぜ研究員", "世界のしくみ案内"] },
    { words: ["お金", "レジ", "おしゃれ", "創作"], names: ["生活の中の学び化", "ごっこ学習オペレーション", "自己表現サポート"] },
    { words: ["旅行", "移動", "宿泊", "帰省"], names: ["家族旅行オペレーション", "子連れ移動マスター", "思い出遠征記録"] },
    { words: ["イベント", "誕生日", "参観", "準備"], names: ["家族イベント記録", "節目の見届け係", "記念日オペレーション"] },
    { words: ["掃除", "洗濯", "収納", "生活"], names: ["生活インフラ整備", "家事ライン運用", "家庭メンテナンス"] },
    { words: ["夫婦", "会話", "回復"], names: ["夫婦回復会話", "言葉の温度管理", "パートナーケア"] },
    { words: ["出産", "二人目", "産後"], names: ["家族フェーズ移行", "産後オペレーション", "出産サポート熟練"] },
  ];
  const recipe = recipes.find((item) => includesAny(haystack, item.words));
  if (recipe) return randomItem(recipe.names);
  return `${group.name}の統合運用`;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function render() {
  renderActiveView();
  renderAppTitle();
  $("levelValue").textContent = state.level;
  renderSetupForm();
  const equippedTitles = currentSelectedTitles();
  $("activeTitle").innerHTML = equippedTitles.length
    ? equippedTitles.map((title, index) => `<span class="${index === 0 ? "main-title-chip" : "sub-title-chip"}">${escapeHtml(title)}</span>`).join("")
    : "称号未設定";
  $("topHpText").textContent = `${state.hp} / ${state.maxHp}`;
  $("topMpText").textContent = `${state.mp} / ${state.maxMp}`;
  $("topHpBar").style.width = `${clamp((state.hp / state.maxHp) * 100, 0, 120)}%`;
  $("topMpBar").style.width = `${clamp((state.mp / state.maxMp) * 100, 0, 120)}%`;
  renderRollStatus();

  $("statList").innerHTML = BASE_STATS.map((name) => {
    const value = state.stats[name] || 0;
    const rank = statRank(value);
    return `
      <div class="stat-row">
        <span>${name}<small style="${statBadgeStyle(value)}">${rank}</small></span>
        ${renderStatTrack(value)}
        <strong>${value}</strong>
      </div>
    `;
  }).join("");

  const normalSkills = state.skills.filter((skill) => skill.type !== "memorial");
  const memorialSkills = state.skills.filter((skill) => skill.type === "memorial");
  syncEquippedSkills(normalSkills);
  const equippedTotal = currentEquippedSkillIds().length;
  $("skillCount").textContent = `装備 ${equippedTotal} / 所持 ${normalSkills.length}`;
  $("memorialCount").textContent = memorialSkills.length;
  $("dinosaurCount").textContent = `${discoveredNameTotal()}/${nameCollectionTotal()}`;
  $("titleCount").textContent = state.titles.length;
  $("logCount").textContent = state.logs.length;
  if ($("reportStatus") && !$("reportText").value.trim()) $("reportStatus").textContent = `Lv.${state.level} / ログ${state.logs.length}`;
  if ($("roleTotal")) $("roleTotal").textContent = (state.roles.leader || 0) + (state.roles.supporter || 0);
  if ($("rolePanel")) $("rolePanel").innerHTML = renderRolePanel();
  $("skillList").innerHTML = normalSkills.length
    ? renderSkillGroups(normalSkills)
    : `<p class="small-empty">まだスキルはありません。</p>`;
  $("memorialList").innerHTML = memorialSkills.length
    ? memorialSkills.map(renderMemorialCard).join("")
    : `<p class="small-empty">記念ログはまだ眠っています。</p>`;
  $("dinosaurList").innerHTML = renderNameCollections();
  $("titleList").innerHTML = state.titles.length
    ? renderTitleGroups(state.titles)
    : `<p class="small-empty">まだ称号はありません。</p>`;
  $("logList").innerHTML = state.logs.length ? state.logs.slice(0, 20).map(renderLogCard).join("") : `<p class="small-empty">ログはまだありません。</p>`;

  document.querySelectorAll("[data-skill-id]").forEach((button) => {
    button.addEventListener("click", () => showSkillDetail(button.dataset.skillId));
  });
  document.querySelectorAll("[data-equip-skill-id]").forEach((button) => {
    button.addEventListener("click", () => toggleSkillEquip(button.dataset.equipSkillId));
  });
  document.querySelectorAll("[data-toggle-skill-book]").forEach((button) => {
    button.addEventListener("click", () => toggleSkillBook(button.dataset.toggleSkillBook));
  });
  document.querySelectorAll("[data-toggle-name-collection]").forEach((button) => {
    button.addEventListener("click", () => toggleNameCollection(button.dataset.toggleNameCollection));
  });
  document.querySelectorAll("[data-title-index]").forEach((button) => {
    button.addEventListener("click", () => selectTitle(Number(button.dataset.titleIndex)));
  });
  document.querySelectorAll("[data-title-log-index]").forEach((button) => {
    button.addEventListener("click", () => showTitleLogs(Number(button.dataset.titleLogIndex)));
  });
  document.querySelectorAll("[data-remove-child]").forEach((button) => {
    button.addEventListener("click", () => removeFamilyRow("children", Number(button.dataset.removeChild)));
  });
  document.querySelectorAll("[data-remove-relative]").forEach((button) => {
    button.addEventListener("click", () => removeFamilyRow("relatives", Number(button.dataset.removeRelative)));
  });
}

function appParameterTitle() {
  const selfCall = String(state.familyProfile?.selfCall || "").trim();
  return selfCall ? `${selfCall}パラメーター` : "パパパラメーター";
}

function renderAppTitle() {
  const title = appParameterTitle();
  if ($("appTitle")) $("appTitle").textContent = title;
  document.title = `${title} mini`;
}

function renderRollStatus() {
  const status = rollStatus();
  if ($("rollImage")) {
    $("rollImage").src = status.src;
    $("rollImage").alt = `ロールくん: ${status.label}`;
  }
  if ($("rollLabel")) $("rollLabel").textContent = status.label;
  if ($("rollCaption")) $("rollCaption").textContent = status.caption;
}

function rollStatus() {
  if (state.specialRoll?.type === "birthday") {
    return {
      label: "おたんじょうび！",
      caption: "今日は特別なお祝いモード！",
      src: "./assets/roll/roll-birthday.png",
    };
  }
  const hpPercent = state.maxHp ? (state.hp / state.maxHp) * 100 : 0;
  if (hpPercent > 100 || state.hp <= 0 || hpPercent <= 25) return rollStatusFromHp();

  const mpPercent = state.maxMp ? (state.mp / state.maxMp) * 100 : 0;
  if (mpPercent > 100) {
    return {
      label: "超サポート！",
      caption: "頭が冴えわたる！サポート力MAX！",
      src: "./assets/roll/roll-mp-over.png",
    };
  }
  if (state.mp <= 0) {
    return {
      label: "エンプティ...",
      caption: "精神力ゼロ...今日はもう考えられない。",
      src: "./assets/roll/roll-mp-0.png",
    };
  }
  if (mpPercent <= 25) {
    return {
      label: "もう限界...",
      caption: "頭がパンク寸前...誰か助けてー！",
      src: "./assets/roll/roll-mp-25.png",
    };
  }
  return rollStatusFromHp();
}

function rollStatusFromHp() {
  const percent = state.maxHp ? (state.hp / state.maxHp) * 100 : 0;
  if (percent > 100) {
    return {
      label: "超元気！",
      caption: "ぼー！！やる気MAX！ノリノリだ！",
      src: "./assets/roll/roll-hp-over.png",
    };
  }
  if (state.hp <= 0) {
    return {
      label: "ばたんきゅー...",
      caption: "体力ゼロ...寝ますで立て直したい。",
      src: "./assets/roll/roll-hp-0.png",
    };
  }
  if (percent <= 25) {
    return {
      label: "瀕死...",
      caption: "もう限界まじか...なんとか踏ん張る！",
      src: "./assets/roll/roll-hp-25.png",
    };
  }
  if (percent <= 50) {
    return {
      label: "疲労...",
      caption: "ちょっとお疲れ...休憩したいかも。",
      src: "./assets/roll/roll-hp-50.png",
    };
  }
  if (percent <= 75) {
    return {
      label: "通常",
      caption: "ぼちぼち順調。いい感じ！",
      src: "./assets/roll/roll-hp-75.png",
    };
  }
  return {
    label: "元気！",
    caption: "絶好調！やる気まんまん！",
    src: "./assets/roll/roll-hp-100.png",
  };
}

function renderSetupForm() {
  if (!$("childrenFields")) return;
  const profile = state.familyProfile || normalizeFamilyProfile();
  $("setupStatus").textContent = state.setupComplete ? "設定済み" : "初回設定";
  $("childrenFields").innerHTML = profile.children.map(renderChildFields).join("");
  $("relativeFields").innerHTML = profile.relatives.length
    ? profile.relatives.map(renderRelativeFields).join("")
    : `<p class="small-empty">親族はまだ登録されていません。</p>`;
  setCallSelect("selfCallSelect", "selfCallOther", profile.selfCall);
  setCallSelect("partnerCallSelect", "partnerCallOther", profile.partnerCall);
}

function renderChildFields(child, index) {
  return `
    <div class="family-card">
      <div class="field-row">
        <label>呼び名</label>
        <input type="text" data-child-field="nickname" data-index="${index}" value="${escapeHtml(child.nickname)}" placeholder="例: あたちゃん" />
      </div>
      <div class="field-row">
        <label>性別</label>
        <select data-child-field="gender" data-index="${index}">
          ${["", "女の子", "男の子", "未設定"].map((value) => `<option ${child.gender === value ? "selected" : ""}>${value}</option>`).join("")}
        </select>
      </div>
      <div class="field-row">
        <label>誕生日</label>
        <input type="date" data-child-field="birthday" data-index="${index}" value="${escapeHtml(child.birthday)}" />
        <small>${escapeHtml(childAgeLabel(child.birthday))}</small>
      </div>
      <div class="field-row">
        <label>関係</label>
        <input type="text" data-child-field="relation" data-index="${index}" value="${escapeHtml(child.relation)}" placeholder="例: 長女" />
      </div>
      <button class="ghost-button compact" type="button" data-remove-child="${index}">削除</button>
    </div>
  `;
}

function childAgeLabel(birthday) {
  if (!birthday) return "年齢は誕生日から自動計算";
  const birthDate = new Date(`${birthday}T00:00:00`);
  if (Number.isNaN(birthDate.getTime())) return "誕生日を確認してください";
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  if (today.getDate() < birthDate.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years <= 0) return `${months}か月`;
  return `${years}歳${months ? `${months}か月` : ""}`;
}

function renderRelativeFields(relative, index) {
  const relationValue = relative.relation || "";
  const isPreset = RELATIVE_RELATION_OPTIONS.includes(relationValue);
  return `
    <div class="family-card compact-family-card">
      <div class="field-row">
        <label>呼び名</label>
        <input type="text" data-relative-field="nickname" data-index="${index}" value="${escapeHtml(relative.nickname)}" placeholder="例: ばあば" />
      </div>
      <div class="field-row">
        <label>関係</label>
        <select data-relative-field="relation" data-index="${index}">
          ${RELATIVE_RELATION_OPTIONS.map((value) => `<option ${isPreset && relationValue === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}
        </select>
      </div>
      <div class="field-row">
        <label>その他</label>
        <input type="text" data-relative-field="relationOther" data-index="${index}" value="${isPreset ? "" : escapeHtml(relationValue)}" placeholder="例: 妻のいとこ" />
      </div>
      <button class="ghost-button compact" type="button" data-remove-relative="${index}">削除</button>
    </div>
  `;
}

function setCallSelect(selectId, otherId, value) {
  const select = $(selectId);
  const other = $(otherId);
  if (!select || !other) return;
  const options = Array.from(select.options).map((option) => option.value);
  if (options.includes(value)) {
    select.value = value;
    other.value = "";
  } else {
    select.value = "その他";
    other.value = value || "";
  }
}

function selectedCall(selectId, otherId) {
  const selected = $(selectId).value;
  const other = $(otherId).value.trim();
  return selected === "その他" ? other : selected;
}

function collectFamilyForm() {
  const children = [];
  document.querySelectorAll("[data-child-field='nickname']").forEach((input) => {
    const index = Number(input.dataset.index);
    children[index] = children[index] || {};
  });
  document.querySelectorAll("[data-child-field]").forEach((input) => {
    const index = Number(input.dataset.index);
    children[index] = children[index] || {};
    children[index][input.dataset.childField] = input.value.trim();
  });
  const relatives = [];
  document.querySelectorAll("[data-relative-field='nickname']").forEach((input) => {
    const index = Number(input.dataset.index);
    relatives[index] = relatives[index] || {};
  });
  document.querySelectorAll("[data-relative-field]").forEach((input) => {
    const index = Number(input.dataset.index);
    relatives[index] = relatives[index] || {};
    const field = input.dataset.relativeField;
    if (field === "relationOther") return;
    relatives[index][field] = input.value.trim();
  });
  document.querySelectorAll("[data-relative-field='relationOther']").forEach((input) => {
    const index = Number(input.dataset.index);
    relatives[index] = relatives[index] || {};
    if (relatives[index].relation === "その他" || input.value.trim()) {
      relatives[index].relation = input.value.trim() || "その他";
    }
  });
  return {
    children: (children.length ? children : state.familyProfile.children).filter(Boolean),
    selfCall: selectedCall("selfCallSelect", "selfCallOther"),
    partnerCall: selectedCall("partnerCallSelect", "partnerCallOther"),
    relatives: relatives.filter((relative) => relative && (relative.nickname || relative.relation)),
  };
}

function addFamilyRow(type) {
  state.familyProfile = collectFamilyForm();
  if (type === "children") state.familyProfile.children.push({ nickname: "", gender: "", birthday: "", relation: "" });
  if (type === "relatives") state.familyProfile.relatives.push({ nickname: "", relation: "" });
  saveState();
  render();
}

function removeFamilyRow(type, index) {
  state.familyProfile = collectFamilyForm();
  state.familyProfile[type] = state.familyProfile[type].filter((_, itemIndex) => itemIndex !== index);
  if (type === "children" && !state.familyProfile.children.length) {
    state.familyProfile.children.push({ nickname: "", gender: "", birthday: "", relation: "" });
  }
  saveState();
  render();
}

function saveSetup(complete = true) {
  state.familyProfile = normalizeFamilyProfile(collectFamilyForm());
  if (complete && !state.familyProfile.selfCall) {
    alert("あなたの呼び名を入力してください。あとで設定する場合は「あとで設定」を押してください。");
    return;
  }
  state.setupComplete = complete;
  state.currentView = complete ? "home" : state.currentView;
  saveState();
  render();
}

function renderActiveView() {
  const currentView = state.currentView || "home";
  document.querySelectorAll("[data-view]").forEach((section) => {
    const viewNames = section.dataset.view.split(/\s+/);
    section.classList.toggle("view-hidden", !viewNames.includes(currentView));
  });
  document.querySelectorAll("[data-view-button]").forEach((button) => {
    const isActive = button.dataset.viewButton === currentView;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });
  document.body.dataset.currentView = currentView;
}

function switchView(viewName) {
  state.currentView = viewName;
  saveState();
  render();
}

function renderSkillGroups(skills) {
  const grouped = new Map(orderedSkillCategoryNames().map((name) => [name, []]));
  skills.forEach((skill) => {
    const categoryName = skill.category || skillCategoryName(skill);
    if (!grouped.has(categoryName)) grouped.set(categoryName, []);
    grouped.get(categoryName).push(skill);
  });

  return Array.from(grouped.entries())
    .filter(([, items]) => items.length)
    .map(([categoryName, items]) => {
      const sortedItems = [...items].sort((a, b) => b.level - a.level || b.exp - a.exp || a.name.localeCompare(b.name, "ja"));
      const equippedIds = currentEquippedSkillIds(categoryName);
      const equippedItems = equippedIds.map((id) => items.find((skill) => skill.id === id)).filter(Boolean);
      const isExpanded = (state.expandedSkillCategories || []).includes(categoryName);
      const categoryExp = items.reduce((total, skill) => total + skill.exp, 0);
      const levelInfo = skillLevelInfo(categoryExp);
      const rankName = majorSkillRankName(categoryName, levelInfo.level);
      const missingCandidates = missingSkillCandidates(categoryName, items);
      return `
        <section class="skill-group">
          <div class="major-skill-head">
            <h3>
              <span class="major-skill-label">${escapeHtml(categoryName)}スキル Lv.${levelInfo.level}</span>
              <span class="major-skill-rank">${escapeHtml(rankName)}</span>
            </h3>
          </div>
          ${categoryName === "ユニーク" ? renderUniqueSkillNote() : ""}
          <div class="major-skill-meter">
            <div class="mini-track"><div class="mini-fill" style="width:${levelInfo.progress}%"></div></div>
            <small>EXP ${levelInfo.currentExp}/${levelInfo.neededExp} / 装備 ${equippedItems.length}/${NORMAL_SKILL_LIMIT} / 所持 ${items.length}</small>
          </div>
          <div class="skill-group-list">
            ${equippedItems.length ? equippedItems.map((skill) => renderSkillCard(skill)).join("") : `<p class="small-empty">装備スキルはありません。</p>`}
          </div>
          <button class="skill-book-toggle" type="button" data-toggle-skill-book="${escapeHtml(categoryName)}">
            ${isExpanded ? "スキル図鑑を閉じる" : `スキル図鑑を開く（所持 ${items.length}）`}
          </button>
          ${
            isExpanded
              ? `<div class="skill-book-drawer">
                  <div class="skill-book-summary">
                    <strong>${escapeHtml(categoryName)}スキル図鑑</strong>
                    <span>所持 ${items.length} / 未所持候補 ${missingCandidates.length} / 装備 ${equippedItems.length}/${NORMAL_SKILL_LIMIT}</span>
                  </div>
                  <div class="skill-book-section-label">所持スキル</div>
                  ${sortedItems.map((skill) => renderSkillCard(skill)).join("")}
                  ${
                    missingCandidates.length
                      ? `<div class="skill-book-section-label">未所持ヒント</div>
                         ${missingCandidates.map((name) => renderMissingSkillHint(name)).join("")}`
                      : `<p class="small-empty">このカテゴリの候補はだいたい見つけています。</p>`
                  }
                </div>`
              : ""
          }
        </section>
      `;
    })
    .join("");
}

function renderUniqueSkillNote() {
  return `
    <p class="unique-skill-note">
      ユニークスキルは、習い事名や教材名を具体的に書くと発動します。例：空手の稽古を見た / DWEを一緒に聞いた / クモンの宿題を見た
    </p>
  `;
}

function renderSkillGroup(categoryName, items) {
  if (!items.length) return `<p class="small-empty">この大元のスキルはまだありません。</p>`;
  const sortedItems = [...items].sort((a, b) => b.level - a.level || b.exp - a.exp || a.name.localeCompare(b.name, "ja"));
  const categoryExp = items.reduce((total, skill) => total + skill.exp, 0);
  const levelInfo = skillLevelInfo(categoryExp);
  return `
    <section class="skill-group">
      <div class="major-skill-head">
        <div>
          <h3>${escapeHtml(majorSkillRankName(categoryName, levelInfo.level))}</h3>
          <span class="major-skill-type">${escapeHtml(categoryName)}スキル</span>
        </div>
        <strong>Lv.${levelInfo.level}</strong>
      </div>
      <div class="major-skill-meter">
        <div class="mini-track"><div class="mini-fill" style="width:${levelInfo.progress}%"></div></div>
        <small>EXP ${levelInfo.currentExp}/${levelInfo.neededExp} / ${items.length}スキル</small>
      </div>
      <div class="skill-group-list">
        ${sortedItems.map((skill) => renderSkillCard(skill)).join("")}
      </div>
    </section>
  `;
}

function majorSkillRankName(categoryName, level) {
  const ranksByCategory = {
    家事: ["家事見習い", "生活を回す人", "家庭インフラ係", "暮らしの整備士", "家事スキルの司令塔"],
    料理: ["見習い料理人", "台所担当", "家庭料理人", "主婦料理", "食卓の司令塔"],
    遊び: ["見習い遊び相手", "遊び担当", "全身あそび係", "遊び職人", "人間遊具マスター"],
    親族: ["親族見習い", "あいさつ担当", "親族連携係", "親戚交友家", "家族ネットワーカー"],
    夫婦: ["会話見習い", "ありがとう係", "夫婦時間担当", "関係メンテ係", "夫婦回復職人"],
    親子: ["親子見習い", "抱っこ担当", "安心基地", "親子時間職人", "愛情タンク係"],
    育児: ["育児見習い", "日常対応係", "育児オペレーター", "育児司令塔", "育児マスター"],
    家計設計: ["家計見習い", "節約担当", "制度リサーチ係", "家計設計者", "未来資産司令塔"],
    仕事: ["帰宅見習い", "仕事家庭切替係", "家庭優先調整役", "両立オペレーター", "家族時間防衛隊"],
    掃除: ["掃除見習い", "片付け担当", "生活リセット係", "掃除察知職人", "家の整備士"],
    洗濯: ["洗濯見習い", "洗濯担当", "衣類インフラ係", "洗濯導線職人", "布物メンテ司令塔"],
    収納: ["収納見習い", "片付け設計係", "収納改善担当", "生活導線設計者", "家の配置職人"],
    勉強: ["学び見習い", "読み聞かせ係", "知育伴走者", "学びの案内人", "小さな研究室長"],
    イベント: ["イベント見習い", "準備担当", "節目の記録係", "イベント運営者", "思い出プロデューサー"],
    毎日の積み重ね: ["今日を残す人", "生活ログ係", "毎日の積み重ね", "家族日誌の担い手", "日々を育てる親"],
    ユニーク: ["本格ルート見習い", "習い事伴走者", "家庭ルート開拓者", "才能の見守り人", "虹色育成マスター"],
  };
  const fallback = ["見習い", "初級担当", "中級担当", "上級担当", "達人"];
  const ranks = ranksByCategory[categoryName] || fallback;
  const index = level >= 40 ? 4 : level >= 25 ? 3 : level >= 12 ? 2 : level >= 5 ? 1 : 0;
  return ranks[index];
}

function skillCategoriesWithSkills(skills) {
  const counts = new Map();
  skills.forEach((skill) => {
    const categoryName = skill.category || skillCategoryName(skill);
    counts.set(categoryName, (counts.get(categoryName) || 0) + 1);
  });
  const ordered = orderedSkillCategoryNames().filter((name) => counts.has(name));
  const extra = Array.from(counts.keys()).filter((name) => !ordered.includes(name)).sort((a, b) => a.localeCompare(b, "ja"));
  return [...ordered, ...extra].map((name) => ({ name, count: counts.get(name) }));
}

function orderedSkillCategoryNames() {
  const known = SKILL_CATEGORIES.map((category) => category.name);
  return [...SKILL_CATEGORY_DISPLAY_ORDER, ...known.filter((name) => !SKILL_CATEGORY_DISPLAY_ORDER.includes(name))];
}

function toggleSkillBook(categoryName) {
  const expanded = state.expandedSkillCategories || [];
  state.expandedSkillCategories = expanded.includes(categoryName)
    ? expanded.filter((name) => name !== categoryName)
    : [...expanded, categoryName];
  saveState();
  render();
}

function toggleNameCollection(collectionId) {
  const expanded = state.expandedNameCollections || [];
  state.expandedNameCollections = expanded.includes(collectionId)
    ? expanded.filter((id) => id !== collectionId)
    : [...expanded, collectionId];
  saveState();
  render();
}

function syncEquippedSkills(normalSkills) {
  const normalIds = new Set(normalSkills.map((skill) => skill.id));
  const grouped = new Map();
  normalSkills.forEach((skill) => {
    const categoryName = skill.category || skillCategoryName(skill);
    if (!grouped.has(categoryName)) grouped.set(categoryName, []);
    grouped.get(categoryName).push(skill);
  });
  const nextEquipped = (state.equippedSkillIds || []).filter((id) => normalIds.has(id));
  grouped.forEach((items, categoryName) => {
    const equippedInCategory = nextEquipped.filter((id) => items.some((skill) => skill.id === id));
    if (equippedInCategory.length) return;
    const top = [...items]
      .sort((a, b) => b.level - a.level || b.exp - a.exp || a.name.localeCompare(b.name, "ja"))
      .slice(0, NORMAL_SKILL_LIMIT)
      .map((skill) => skill.id);
    nextEquipped.push(...top);
  });
  const trimmed = [];
  grouped.forEach((items, categoryName) => {
    const itemIds = new Set(items.map((skill) => skill.id));
    const ids = nextEquipped.filter((id) => itemIds.has(id)).slice(0, NORMAL_SKILL_LIMIT);
    trimmed.push(...ids);
  });
  if (trimmed.join("|") !== (state.equippedSkillIds || []).join("|")) {
    state.equippedSkillIds = trimmed;
    saveState();
  }
}

function renderRolePanel() {
  const latestRole = state.logs.find((log) => log.roleDelta)?.roleDelta;
  const totalLeader = state.roles.leader || 0;
  const totalSupporter = state.roles.supporter || 0;
  const total = totalLeader + totalSupporter;
  const leaderPercent = total ? Math.round((totalLeader / total) * 100) : 50;
  const supporterPercent = total ? 100 - leaderPercent : 50;
  const latestLeader = latestRole?.leader || 0;
  const latestSupporter = latestRole?.supporter || 0;
  const note = total ? `累計ポイント リーダー${totalLeader} / サポーター${totalSupporter}` : "ログが増えると傾向が育ちます。";
  return `
    <div class="role-summary">
      <span>累計の立ち回り</span>
      <strong>リーダー ${leaderPercent}% / サポーター ${supporterPercent}%</strong>
    </div>
    <div class="role-track" aria-hidden="true">
      <div class="role-leader" style="width:${leaderPercent}%"></div>
      <div class="role-supporter" style="width:${supporterPercent}%"></div>
    </div>
    <div class="role-labels">
      <span>段取り・判断・設計</span>
      <span>支える・寄り添う・回復</span>
    </div>
    <div class="role-current">
      <span>今回</span>
      <strong>${escapeHtml(roleTrendLabel(latestLeader, latestSupporter))}</strong>
      <small>${latestRole ? `リーダー +${latestLeader} / サポーター +${latestSupporter}` : "次の育成で表示されます"}</small>
    </div>
    <p>${note}</p>
  `;
}

function roleTrendLabel(leader, supporter) {
  if (!leader && !supporter) return "まだ未判定";
  if (leader >= supporter + 2) return "リーダー強め";
  if (supporter >= leader + 2) return "サポーター強め";
  if (leader > supporter) return "少しリーダー寄り";
  if (supporter > leader) return "少しサポーター寄り";
  return "バランス型";
}

function renderSkillCard(skill, memorial = false) {
  const isEquipped = currentEquippedSkillIds().includes(skill.id);
  const displayName = evolvedSkillName(skill.name, skill.level);
  return `
    <div class="skill-card ${memorial ? "memorial" : ""} ${skill.type === "unique" ? "unique" : ""} ${isEquipped ? "equipped" : ""}">
      <button class="skill-open" type="button" data-skill-id="${skill.id}">
        <span>${escapeHtml(displayName)}</span><strong>Lv.${skill.level}</strong>
      </button>
      ${memorial ? "" : `<button class="skill-equip-button" type="button" data-equip-skill-id="${skill.id}">${isEquipped ? "外す" : "つける"}</button>`}
    </div>
  `;
}

function renderSkillBookCard(skill) {
  const isEquipped = currentEquippedSkillIds().includes(skill.id);
  const displayName = skillDisplayName(skill);
  return `
    <div class="skill-card skill-book-card ${isEquipped ? "equipped" : ""}">
      <button class="skill-open" type="button" data-skill-id="${skill.id}">
        <span>${escapeHtml(displayName)}</span><strong>Lv.${skill.level}</strong>
      </button>
      <button class="skill-equip-button" type="button" data-equip-skill-id="${skill.id}">${isEquipped ? "装備中" : "つける"}</button>
    </div>
  `;
}

function hiddenSkillLabel(name) {
  return `${Array.from(name).slice(0, 3).join("")}？？？`;
}

function evolvedSkillName(name, level) {
  const homeStages = HOME_SKILL_EVOLUTIONS[name];
  if (homeStages) {
    const index = level >= 30 ? 4 : level >= 20 ? 3 : level >= 10 ? 2 : level >= 5 ? 1 : 0;
    return homeStages[index] || name;
  }
  const evolutions = SKILL_EVOLUTIONS[name] || [];
  return evolutions.reduce((current, evolution) => (level >= evolution.level ? evolution.name : current), name);
}

function skillDisplayName(skill) {
  return evolvedSkillName(skill.name, skill.level || 1);
}

function renderMissingSkillHint(name) {
  return `
    <div class="skill-card skill-book-card missing-skill-card">
      <span>${escapeHtml(hiddenSkillLabel(name))}</span><strong>未所持</strong>
    </div>
  `;
}

function missingSkillCandidates(categoryName, ownedSkills) {
  const ownedNames = new Set(ownedSkills.map((skill) => skill.name));
  const candidates = new Set();
  (SKILL_BOOK_CANDIDATES[categoryName] || []).forEach((name) => {
    if (!ownedNames.has(name)) candidates.add(name);
  });
  patterns.forEach((pattern) => {
    (pattern.skills || []).forEach((skill) => {
      const skillCategory = skill.category || skillCategoryName(skill);
      if (skillCategory === categoryName && !ownedNames.has(skill.name)) candidates.add(skill.name);
    });
  });
  return [...candidates].sort((a, b) => a.localeCompare(b, "ja")).slice(0, 30);
}

function renderMemorialCard(skill) {
  return `
    <button class="skill-card memorial" type="button" data-skill-id="${skill.id}">
      <span>${escapeHtml(skill.name)}</span><strong>記念</strong>
    </button>
  `;
}

function renderNameCollections() {
  return NAME_COLLECTIONS.map((collection) => {
    const discovered = discoveredNameCount(collection.id);
    const total = collection.items.length;
    const percent = total ? Math.round((discovered / total) * 100) : 0;
    const isUnlocked = discovered > 0;
    const isExpanded = (state.expandedNameCollections || []).includes(collection.id);
    const displayName = isUnlocked ? collection.label : "？？？";
    const statusText = total ? `${discovered}/${total}` : "準備中";
    return `
      <section class="name-collection-section">
        <button class="name-collection-head ${isUnlocked ? "unlocked" : ""}" type="button" data-toggle-name-collection="${collection.id}">
          <div>
            <h3>${escapeHtml(displayName)}</h3>
            <small>${isUnlocked ? `${collection.shortLabel}の名前を発見中` : "未解放図鑑"}</small>
          </div>
          <strong>${statusText} ${isExpanded ? "閉じる" : "開く"}</strong>
        </button>
        <div class="collection-summary">
          <div class="mini-track"><div class="mini-fill" style="width:${percent}%"></div></div>
          <small>${total ? `${percent}% 発見` : "名前リストを入れると遊べます"}</small>
        </div>
        ${
          isExpanded && total
            ? `<div class="dinosaur-grid">
                ${collection.items
                  .map((item) => {
                    const entry = collectionState(collection.id)[item.name];
                    const found = (entry?.count || 0) > 0;
                    return `
                      <div class="dinosaur-card ${found ? "found" : ""}">
                        <strong>${found ? escapeHtml(item.name) : escapeHtml(unrevealedNameHint(item))}</strong>
                        <small>${found ? `${entry.count}回 / 発見済み` : "未発見"}</small>
                      </div>
                    `;
                  })
                  .join("")}
              </div>`
            : ""
        }
        ${isExpanded && !total ? `<p class="small-empty">ここに名前リストを入れると、入力ログから自動で解放されます。</p>` : ""}
      </section>
    `;
  }).join("");
}

function renderTitleGroups(titles) {
  const query = $("titleSearch") ? $("titleSearch").value.trim() : "";
  const filteredTitles = query
    ? titles.filter((title) => {
        const logs = titleSourceLogs(title).map((log) => `${log.title || ""} ${log.text || ""}`).join(" ");
        return `${title} ${logs}`.includes(query);
      })
    : titles;
  if (!filteredTitles.length) return `<p class="small-empty">見つかりませんでした。</p>`;

  const grouped = new Map(orderedSkillCategoryNames().map((name) => [name, []]));
  filteredTitles.forEach((title) => {
    const categoryName = titleCategoryName(title);
    if (!grouped.has(categoryName)) grouped.set(categoryName, []);
    grouped.get(categoryName).push(title);
  });

  return Array.from(grouped.entries())
    .filter(([, items]) => items.length)
    .map(([categoryName, items]) => `
      <section class="title-group">
        <div class="title-group-head">
          <h3>${escapeHtml(categoryName)}</h3>
          <span>${items.length}</span>
        </div>
        <div class="title-group-list">
          ${items.map((title) => renderTitleCard(title, state.titles.indexOf(title))).join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderTitleCard(title, index) {
  const isActive = currentSelectedTitles().includes(title);
  const sourceCount = titleSourceLogs(title).length;
  return `
    <article class="title-card ${isActive ? "active" : ""}">
      <div>
        <span>${escapeHtml(title)}</span>
        <small>${isActive ? "装備中" : "未装備"}${sourceCount ? ` / ${sourceCount}ログ` : ""}</small>
      </div>
      <div class="title-card-actions">
        <button class="title-equip-button" type="button" data-title-index="${index}">${isActive ? "外す" : "つける"}</button>
        <button class="title-log-button" type="button" data-title-log-index="${index}">ログ</button>
      </div>
    </article>
  `;
}

function selectTitle(index) {
  const title = state.titles[index];
  if (!title) return;
  const selected = currentSelectedTitles();
  if (selected.includes(title)) {
    state.selectedTitles = selected.filter((item) => item !== title);
  } else if (selected.length < TITLE_EQUIP_LIMIT) {
    state.selectedTitles = [...selected, title];
  } else {
    alert(`表示できる称号は${TITLE_EQUIP_LIMIT}個までです。外してから付け替えてください。`);
    return;
  }
  state.selectedTitle = state.selectedTitles[0] || "";
  saveState();
  render();
}

function toggleSkillEquip(skillId) {
  const skill = state.skills.find((item) => item.id === skillId && item.type !== "memorial");
  if (!skill) return;
  const categoryName = skill.category || skillCategoryName(skill);
  const equipped = currentEquippedSkillIds(categoryName);
  const otherEquipped = currentEquippedSkillIds().filter((id) => {
    const item = state.skills.find((candidate) => candidate.id === id);
    return item && (item.category || skillCategoryName(item)) !== categoryName;
  });
  if (equipped.includes(skillId)) {
    state.equippedSkillIds = [...otherEquipped, ...equipped.filter((id) => id !== skillId)];
  } else if (equipped.length < NORMAL_SKILL_LIMIT) {
    state.equippedSkillIds = [...otherEquipped, ...equipped, skillId];
  } else {
    const removeName = state.skills.find((item) => item.id === equipped[0])?.name || "先頭のスキル";
    if (!confirm(`${categoryName}で装備できるスキルは${NORMAL_SKILL_LIMIT}個までです。\n${removeName}を外して、${skill.name}をつけますか？`)) return;
    state.equippedSkillIds = [...otherEquipped, ...equipped.slice(1), skillId];
  }
  saveState();
  render();
}

function currentSelectedTitles() {
  const selected = state.selectedTitles && state.selectedTitles.length ? state.selectedTitles : state.selectedTitle ? [state.selectedTitle] : [];
  return selected.filter((title) => state.titles.includes(title)).slice(0, TITLE_EQUIP_LIMIT);
}

function showTitleLogs(index) {
  const title = state.titles[index];
  if (!title) return;
  const sourceLogs = titleSourceLogs(title);
  $("dialogBody").innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    <p class="skill-meta">称号 / ${sourceLogs.length}ログ</p>
    ${
      sourceLogs.length
        ? sourceLogs
            .map(
              (log) => `
                <p>${escapeHtml(log.text)}</p>
                <p class="skill-meta">${formatDate(log.createdAt)} / ${escapeHtml(log.title || "")}</p>
              `
            )
            .join("")
        : "<p>この称号の元ログはまだありません。</p>"
    }
  `;
  $("detailDialog").showModal();
}

function titleSourceLogs(title) {
  const explicitIds = state.titleSources[title] || [];
  const explicitLogs = explicitIds.map((id) => state.logs.find((log) => log.id === id)).filter(Boolean);
  const titleLogs = state.logs.filter((log) => log.title === title);
  return Array.from(new Map([...explicitLogs, ...titleLogs].map((log) => [log.id, log])).values());
}

function renderStatTrack(value) {
  const segments = STAT_RANKS.map((rank, index) => {
    const nextRank = STAT_RANKS[index + 1];
    const segmentStart = rank.min;
    const segmentEnd = nextRank ? nextRank.min : STAT_DISPLAY_CAP;
    let fill = 0;
    if (value >= segmentEnd) {
      fill = 100;
    } else if (value >= segmentStart) {
      fill = ((value - segmentStart) / Math.max(1, segmentEnd - segmentStart)) * 100;
    }
    if (index === 0 && value > 0) fill = Math.max(fill, 12);
    return `
      <span class="stat-segment" style="background:${rank.color}22">
        <span class="stat-segment-fill" style="width:${clamp(Math.round(fill), 0, 100)}%; background:${rank.color}"></span>
      </span>
    `;
  }).join("");
  return `<div class="stat-track">${segments}</div>`;
}

function statRank(value) {
  return [...STAT_RANKS].reverse().find((rank) => value >= rank.min).name;
}

function currentStatRank(value) {
  return [...STAT_RANKS].reverse().find((rank) => value >= rank.min) || STAT_RANKS[0];
}

function statBadgeStyle(value) {
  const rank = currentStatRank(value);
  return `background:${rank.color}; color:${rank.name === "仏" ? "#4b3b15" : "#fff"};`;
}

function renderLogCard(log) {
  return `
    <article class="log-card">
      <p>${escapeHtml(log.text)}</p>
      <div class="log-date">${formatDate(log.createdAt)} / ${escapeHtml(log.title || "")}</div>
    </article>
  `;
}

function renderResult(log) {
  const statLines = Object.entries(log.statDelta || {})
    .map(([name, value]) => `${name} ${value > 0 ? "+" : ""}${value}`)
    .join(" / ");
  const maxLines = [
    log.maxHpDelta ? `最大HP +${log.maxHpDelta}` : "",
    log.maxMpDelta ? `最大MP +${log.maxMpDelta}` : "",
  ]
    .filter(Boolean)
    .join(" / ");
  const skillHtml = renderResultSkillLog(log.skills || []);
  const hpDisplay = formatDelta(log.hpDelta, log.hpIntentDelta);
  const mpDisplay = formatDelta(log.mpDelta, log.mpIntentDelta);
  $("resultPanel").innerHTML = `
    <div class="result-title">
      <strong>${escapeHtml(log.title || "育成結果")}</strong>
      <span class="result-pill">Lv ${log.levelBefore} → ${log.levelAfter}</span>
    </div>
    <div class="delta-grid">
      <div class="delta-card ${log.hpDelta < 0 ? "cost" : "recovery"}"><span>HP</span><strong>${hpDisplay}</strong></div>
      <div class="delta-card ${log.mpDelta < 0 ? "cost" : "recovery"}"><span>MP</span><strong>${mpDisplay}</strong></div>
      <div class="delta-card growth"><span>成長</span><strong>${escapeHtml([statLines, maxLines].filter(Boolean).join(" / ") || "変化なし")}</strong></div>
      <div class="delta-card skill-growth"><span>スキル</span><strong>${skillHtml}</strong></div>
    </div>
    ${log.type === "system" ? `<p style="white-space: pre-line; margin: 14px 0 0;">${escapeHtml(log.text)}</p>` : ""}
  `;
}

function renderResultSkillLog(skills) {
  const visible = skills.slice(0, 6);
  if (!visible.length) return "変化なし";
  return visible
    .map((skill) => {
      const prefix = skill.type === "unique"
        ? `<span class="unique-text-badge">UNIQUE</span>`
        : skill.isNew
        ? `<span class="new-text-badge">NEW</span>`
        : skill.absorbedFrom
          ? `<span class="absorb-text-badge">吸収</span>`
          : "";
      return `<span class="result-skill-line">${prefix}${escapeHtml(skillDisplayName(skill))} Lv.${skill.level} / EXP +${skill.exp}</span>`;
    })
    .join(' <span class="result-skill-separator">/</span> ');
}

function formatDelta(actual, intended = actual) {
  if (actual === 0 && intended > 0) return "+0 満タン";
  return `${actual > 0 ? "+" : ""}${actual}`;
}

function showGrowthPopup(log) {
  if (!$("growthDialog")) return;
  growthPopupSteps = buildGrowthPopupSteps(log);
  growthPopupIndex = 0;
  renderGrowthPopupStep();
  $("growthDialog").showModal();
}

function buildGrowthPopupSteps(log) {
  const statLines = Object.entries(log.statDelta || {})
    .map(([name, value]) => `${name} ${value > 0 ? "+" : ""}${value}`);
  const maxLines = [
    log.maxHpDelta ? `最大HP +${log.maxHpDelta}` : "",
    log.maxMpDelta ? `最大MP +${log.maxMpDelta}` : "",
  ].filter(Boolean);
  const skillLines = (log.skills || []).map((skill) =>
    `${skill.type === "unique" ? "ユニーク " : skill.isNew ? "新スキル " : skill.absorbedFrom ? "吸収 " : ""}${skillDisplayName(skill)} Lv.${skill.level} / EXP +${skill.exp}`
  );
  const steps = [
    {
      label: "称号",
      title: log.title || "育成結果",
      body: `Lv ${log.levelBefore} → ${log.levelAfter}`,
      html: birthdayRollHtml(log) || "",
      tone: "title",
    },
    {
      label: "HP / MP",
      title: "今日の消耗と回復",
      body: `HP ${formatDelta(log.hpDelta, log.hpIntentDelta)}\nMP ${formatDelta(log.mpDelta, log.mpIntentDelta)}`,
      html: renderVitalGrowthBars(log),
      tone: log.hpDelta < 0 || log.mpDelta < 0 ? "cost" : "recovery",
    },
  ];
  if (statLines.length || maxLines.length) {
    steps.push({
      label: "成長",
      title: "基礎パラメーター",
      body: [...statLines, ...maxLines].join("\n"),
      html: `${renderStatGrowthBars(log)}${maxLines.length ? `<p>${escapeHtml(maxLines.join("\n"))}</p>` : ""}`,
      tone: "growth",
    });
  }
  if (skillLines.length) {
    steps.push({
      label: "スキル",
      title: "スキル経験値",
      body: skillLines.join("\n"),
      html: renderSkillGrowthList(log),
      tone: "skill",
    });
  }
  const foundNameGroups =
    log.nameCollections || ((log.dinosaurs || []).length ? [{ label: "恐竜図鑑", names: log.dinosaurs }] : []);
  if (foundNameGroups.length) {
    steps.push({
      label: "名前図鑑",
      title: "図鑑を発見",
      body: foundNameGroups.flatMap((group) => group.names).join("\n"),
      html: foundNameGroups
        .map(
          (group) => `
            <div class="popup-found-group">
              <strong>${escapeHtml(group.label)}</strong>
              <div class="popup-dino-found">${group.names.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div>
            </div>
          `
        )
        .join(""),
      tone: "skill",
    });
  }
  steps.push({
    label: "保存",
    title: "ログを保存しました",
    body: "今日の育児経験値がパパパラメーターに刻まれました。",
    tone: "done",
  });
  return steps;
}

function birthdayRollHtml(log) {
  const haystack = `${log.title || ""} ${log.text || ""} ${(log.skills || []).map((skill) => skill.name).join(" ")}`;
  if (!isBirthdayText(haystack)) return "";
  return `
    <div class="birthday-roll">
      <img src="./assets/roll/roll-birthday.png" alt="おたんじょうびおめでとうロールくん" />
      <p>誕生日の称号を獲得しました。</p>
      <strong>Lv ${log.levelBefore} → ${log.levelAfter}</strong>
    </div>
  `;
}

function renderGrowthPopupStep() {
  const step = growthPopupSteps[growthPopupIndex];
  if (!step) return;
  $("growthDialogBody").innerHTML = `
    <div class="growth-step ${step.tone}">
      <span>${escapeHtml(step.label)}</span>
      <h3>${escapeHtml(step.title)}</h3>
      ${step.html || `<p>${escapeHtml(step.body)}</p>`}
    </div>
  `;
  $("growthStepText").textContent = `${growthPopupIndex + 1}/${growthPopupSteps.length}`;
  $("growthNextButton").textContent = growthPopupIndex === growthPopupSteps.length - 1 ? "閉じる" : "次へ";
}

function nextGrowthPopupStep() {
  if (growthPopupIndex >= growthPopupSteps.length - 1) {
    $("growthDialog").close();
    return;
  }
  growthPopupIndex += 1;
  renderGrowthPopupStep();
}

function renderVitalGrowthBars(log) {
  return `
    <div class="popup-meter-list">
      ${renderPopupMeter({
        name: "HP",
        before: log.hpBefore ?? Math.max(0, (log.hpAfter ?? 0) - (log.hpDelta || 0)),
        after: log.hpAfter ?? state.hp,
        maxBefore: log.maxHpBefore ?? log.maxHpAfter ?? state.maxHp,
        maxAfter: log.maxHpAfter ?? state.maxHp,
        delta: formatDelta(log.hpDelta, log.hpIntentDelta),
        kind: "hp",
      })}
      ${renderPopupMeter({
        name: "MP",
        before: log.mpBefore ?? Math.max(0, (log.mpAfter ?? 0) - (log.mpDelta || 0)),
        after: log.mpAfter ?? state.mp,
        maxBefore: log.maxMpBefore ?? log.maxMpAfter ?? state.maxMp,
        maxAfter: log.maxMpAfter ?? state.maxMp,
        delta: formatDelta(log.mpDelta, log.mpIntentDelta),
        kind: "mp",
      })}
    </div>
  `;
}

function renderStatGrowthBars(log) {
  const entries = Object.entries(log.statDelta || {});
  if (!entries.length) return "";
  return `
    <div class="popup-meter-list compact">
      ${entries
        .map(([name, delta]) => {
          const before = log.statBefore?.[name] ?? Math.max(0, (log.statAfter?.[name] ?? state.stats[name] ?? 1) - delta);
          const after = log.statAfter?.[name] ?? before + delta;
          return renderPopupMeter({
            name,
            before,
            after,
            maxBefore: STAT_DISPLAY_CAP,
            maxAfter: STAT_DISPLAY_CAP,
            delta: `${delta > 0 ? "+" : ""}${delta}`,
            kind: "stat",
          });
        })
        .join("")}
    </div>
  `;
}

function renderPopupMeter({ name, before, after, maxBefore, maxAfter, delta, kind }) {
  const beforePct = clamp(Math.round((before / Math.max(1, maxBefore)) * 100), 0, 100);
  const afterPct = clamp(Math.round((after / Math.max(1, maxAfter)) * 100), 0, 100);
  const deltaClass = after > before ? "delta-up" : after < before ? "delta-down" : "delta-flat";
  return `
    <div class="popup-meter ${kind}">
      <div class="popup-meter-head">
        <strong>${escapeHtml(name)}</strong>
        <span class="popup-meter-value ${deltaClass}">
          ${escapeHtml(String(before))} → ${escapeHtml(String(after))} / ${escapeHtml(String(maxAfter))}
          <b>${escapeHtml(delta)}</b>
        </span>
      </div>
      <div class="popup-track">
        <div class="popup-fill before" style="width:${beforePct}%"></div>
        <div class="popup-fill after" style="width:${afterPct}%"></div>
      </div>
    </div>
  `;
}

function renderSkillGrowthList(log) {
  const skills = log.skills || [];
  if (!skills.length) return "";
  return `
    <div class="popup-skill-list">
      ${skills.slice(0, 8).map(renderPopupSkill).join("")}
    </div>
  `;
}

function renderPopupSkill(skill) {
  const displayName = skillDisplayName(skill);
  if (skill.type === "unique") {
    return `
      <div class="popup-skill unique">
        <div class="popup-skill-head">
          <strong><span class="unique-badge">UNIQUE</span>${escapeHtml(displayName)}</strong>
          <small>Lv.${skill.level} / EXP +${escapeHtml(String(skill.exp))}</small>
        </div>
        <p>習い事・教材の本格ルートを発見しました。次からも「空手の練習」「DWEを聞いた」みたいに具体名を書くと育ちます。</p>
      </div>
    `;
  }
  if (skill.isNew) {
    return `
      <div class="popup-skill new">
        <div class="popup-skill-head">
          <strong><span class="new-badge">NEW</span>${escapeHtml(displayName)}</strong>
          <small>Lv.${skill.level}</small>
        </div>
        <p>EXP +${escapeHtml(String(skill.exp))}</p>
      </div>
    `;
  }
  const expBefore = skill.expBefore ?? 0;
  const expAfter = skill.expAfter ?? expBefore + (skill.exp || 0);
  const levelBefore = skill.levelBefore ?? skill.level;
  const info = skillLevelInfo(expAfter);
  const currentLevelStart = 6 * (info.level - 1) ** 2;
  const beforeInLevel = Math.max(0, expBefore - currentLevelStart);
  const afterInLevel = Math.max(0, expAfter - currentLevelStart);
  const beforePct = clamp(Math.round((beforeInLevel / info.neededExp) * 100), 0, 100);
  const afterPct = clamp(Math.round((afterInLevel / info.neededExp) * 100), 4, 100);
  return `
    <div class="popup-skill">
      <div class="popup-skill-head">
        <strong>${escapeHtml(skill.absorbedFrom ? `${skill.absorbedFrom} → ${displayName}` : displayName)}</strong>
        <small>Lv.${levelBefore} → Lv.${skill.level} / EXP +${escapeHtml(String(skill.exp))}</small>
      </div>
      <div class="popup-track skill-track">
        <div class="popup-fill before" style="width:${beforePct}%"></div>
        <div class="popup-fill after" style="width:${afterPct}%"></div>
      </div>
    </div>
  `;
}

function showSkillDetail(skillId) {
  const skill = state.skills.find((item) => item.id === skillId);
  if (!skill) return;
  const levelInfo = skillLevelInfo(skill.exp);
  const sourceLogs = (skill.sourceLogIds || [])
    .map((id) => state.logs.find((log) => log.id === id))
    .filter(Boolean);
  const displayName = evolvedSkillName(skill.name, skill.level);
  const typeLabel = skill.type === "unique" ? "ユニークスキル" : skill.type === "memorial" ? "記念ログ" : "通常スキル";
  $("dialogBody").innerHTML = `
    <h3>${escapeHtml(displayName)} Lv.${skill.level}</h3>
    <p class="skill-meta">${typeLabel} / 獲得日 ${formatDate(skill.createdAt)}</p>
    ${skill.type === "unique" ? `<p class="unique-skill-note detail">習い事名や教材名を具体的に書くと伸びる、家庭ごとの裏ルートです。</p>` : ""}
    <div class="skill-detail-meter">
      <div class="mini-track"><div class="mini-fill" style="width:${levelInfo.progress}%"></div></div>
      <p class="skill-meta">EXP ${levelInfo.currentExp} / ${levelInfo.neededExp}</p>
    </div>
    <div class="skill-tags">${(skill.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    <h4>生まれたログ</h4>
    ${
      sourceLogs.length
        ? sourceLogs.map((log) => `<p>${escapeHtml(log.text)}</p><p class="skill-meta">${formatDate(log.createdAt)} / ${escapeHtml(log.title)}</p>`).join("")
        : "<p>元ログはまだありません。</p>"
    }
  `;
  $("detailDialog").showModal();
}

function formatDate(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

$("analyzeButton").addEventListener("click", () => {
  const text = $("entryInput").value;
  if (!text.trim()) return;
  analyzeText(text, "daily");
  $("entryInput").value = "";
});

$("pastButton").addEventListener("click", () => {
  const text = $("entryInput").value;
  if (!text.trim()) return;
  analyzeText(text, "past");
  $("entryInput").value = "";
});

$("sleepButton").addEventListener("click", sleepNow);
$("fusionButton").addEventListener("click", synthesizeSkill);
$("organizeButton").addEventListener("click", organizeSkills);
$("addChildButton").addEventListener("click", () => addFamilyRow("children"));
$("addRelativeButton").addEventListener("click", () => addFamilyRow("relatives"));
$("saveSetupButton").addEventListener("click", () => saveSetup(true));
$("skipSetupButton").addEventListener("click", () => {
  saveSetup(false);
  state.currentView = "home";
  saveState();
  render();
});
$("titleSearch").addEventListener("focus", () => {
  if (state.currentView !== "titles") switchView("titles");
});
document.querySelectorAll("[data-view-button]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.viewButton));
});
$("titleSearch").addEventListener("input", render);
$("closeDialog").addEventListener("click", () => $("detailDialog").close());
$("growthNextButton").addEventListener("click", nextGrowthPopupStep);
$("growthCloseButton").addEventListener("click", () => $("growthDialog").close());
$("exportReportButton").addEventListener("click", exportReport);
$("loadReportFileButton").addEventListener("click", chooseReportFile);
$("reportFileInput").addEventListener("change", loadReportFile);
if ($("copyReportButton")) $("copyReportButton").addEventListener("click", copyReport);
if ($("restoreReportButton")) $("restoreReportButton").addEventListener("click", restoreReport);
$("resetButton").addEventListener("click", () => {
  if (!confirm("パパパラメーター mini を初期化しますか？")) return;
  state = structuredClone(initialState);
  state.currentView = "settings";
  saveState();
  render();
  $("resultPanel").innerHTML = `<p class="empty-result">初期化しました。</p>`;
});

render();
