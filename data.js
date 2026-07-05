const researchNotes = {
  researchedAt: "2026-07-04",
  sources: [
    "https://online.nojima.co.jp/category/10000740/",
    "https://online.nojima.co.jp/commodity/1/4549980975039/",
    "https://online.nojima.co.jp/commodity/1/4974011803829/",
    "https://online.nojima.co.jp/commodity/1/4550719001479/",
    "https://online.nojima.co.jp/commodity/1/4975302157010/",
    "https://online.nojima.co.jp/commodity/1/4589946770773/",
    "https://online.nojima.co.jp/commodity/1/4981747079985/",
    "https://online.nojima.co.jp/commodity/1/4549980767948/",
    "https://online.nojima.co.jp/commodity/1/4549980973998/",
    "https://online.nojima.co.jp/commodity/1/4975302176035/",
    "https://online.nojima.co.jp/commodity/1/4975302150035/",
    "https://online.nojima.co.jp/commodity/1/4550556183406/"
  ],
  note: "価格は調査メモのみで扱い、アプリ上は価格帯として表示します。"
};

const departments = [
  {
    id: "communication",
    name: "通信",
    description: "スマホ本体と周辺機器を中心に、契約前後の提案を支えます。",
    categoryIds: ["smartphone", "earphone", "mobile-battery", "adapter", "landline-intercom"]
  },
  {
    id: "information",
    name: "情報",
    description: "PC、タブレット、ネットワーク、印刷まわりを整理します。",
    categoryIds: ["tablet", "smartwatch", "pc", "printer", "router"]
  },
  {
    id: "home-appliance",
    name: "家電",
    description: "生活家電と美容家電を、使い方から提案します。",
    categoryIds: ["hair-dryer", "hair-iron", "rice-cooker", "microwave", "washing-machine", "refrigerator", "iron", "vacuum-cleaner"]
  },
  {
    id: "seasonal-av",
    name: "季節AV",
    description: "季節家電とAV商品の接客導線をまとめます。",
    categoryIds: ["air-conditioner", "tv", "electric-fan", "air-purifier", "radio"]
  }
];

const categories = [
  {
    id: "smartphone",
    department: "communication",
    name: "スマホ",
    icon: "📱",
    description: "カメラ・電池持ち・画面サイズ・操作性"
  },
  {
    id: "earphone",
    department: "communication",
    name: "イヤホン",
    icon: "🎧",
    description: "音質・通話・ノイズ対策・装着感"
  },
  {
    id: "mobile-battery",
    department: "communication",
    name: "モバイルバッテリー",
    icon: "🔋",
    description: "容量・出力・持ち運び・安全性"
  },
  {
    id: "adapter",
    department: "communication",
    name: "アダプター",
    icon: "🔌",
    description: "急速充電・端子・同時充電"
  },
  {
    id: "landline-intercom",
    department: "communication",
    name: "固定電話/インターフォン",
    icon: "☎",
    description: "親機子機・防犯・聞こえやすさ"
  },
  {
    id: "tablet",
    department: "information",
    name: "タブレット",
    icon: "▣",
    description: "画面サイズ・用途・持ち運び"
  },
  {
    id: "smartwatch",
    department: "information",
    name: "スマートウォッチ",
    icon: "⌚",
    description: "健康管理・通知・運動記録・スマホ連携"
  },
  {
    id: "pc",
    department: "information",
    name: "PC",
    icon: "💻",
    description: "用途・持ち運び・性能・画面サイズ"
  },
  {
    id: "printer",
    department: "information",
    name: "プリンター",
    icon: "▤",
    description: "印刷頻度・写真・ランニングコスト"
  },
  {
    id: "router",
    department: "information",
    name: "ルーター",
    icon: "⌁",
    description: "間取り・台数・Wi-Fi規格"
  },
  {
    id: "hair-dryer",
    department: "home-appliance",
    name: "ドライヤー",
    icon: "≋",
    description: "速乾・髪へのやさしさ・軽さ・収納性"
  },
  {
    id: "hair-iron",
    department: "home-appliance",
    name: "ヘアアイロン",
    icon: "↔",
    description: "ストレート・カール・温度調整"
  },
  {
    id: "rice-cooker",
    department: "home-appliance",
    name: "炊飯器",
    icon: "🍚",
    description: "容量・炊き分け・保温・手入れ"
  },
  {
    id: "microwave",
    department: "home-appliance",
    name: "レンジ/オーブンレンジ",
    icon: "▦",
    description: "温め・解凍・調理・設置幅"
  },
  {
    id: "washing-machine",
    department: "home-appliance",
    name: "洗濯機",
    icon: "◉",
    description: "人数・洗濯頻度・乾燥機能・設置条件"
  },
  {
    id: "refrigerator",
    department: "home-appliance",
    name: "冷蔵庫",
    icon: "▥",
    description: "人数・容量・冷凍室・省エネ性能"
  },
  {
    id: "iron",
    department: "home-appliance",
    name: "アイロン",
    icon: "▲",
    description: "スチーム・衣類量・立ち上がり"
  },
  {
    id: "vacuum-cleaner",
    department: "home-appliance",
    name: "掃除機",
    icon: "↯",
    description: "床材・吸引力・軽さ・ゴミ捨て"
  },
  {
    id: "air-conditioner",
    department: "seasonal-av",
    name: "エアコン",
    icon: "❄",
    description: "部屋の広さ・使用場所・省エネ・清掃性"
  },
  {
    id: "tv",
    department: "seasonal-av",
    name: "テレビ",
    icon: "▭",
    description: "視聴距離・画質・動画配信・ゲーム用途"
  },
  {
    id: "electric-fan",
    department: "seasonal-av",
    name: "扇風機",
    icon: "✣",
    description: "部屋・静音性・風量・収納"
  },
  {
    id: "air-purifier",
    department: "seasonal-av",
    name: "空気清浄機",
    icon: "◎",
    description: "部屋サイズ・花粉・加湿・手入れ"
  },
  {
    id: "radio",
    department: "seasonal-av",
    name: "ラジオ",
    icon: "◍",
    description: "防災・携帯性・電源方式"
  }
];

const categoryFilterProfiles = {
  printer: {
    title: "プリンター接客フィルター",
    description: "印刷用途、ランニングコスト、用紙サイズ、仕事機能から絞り込みます。複数選ぶと、条件をすべて満たす商品だけに絞ります。",
    groups: [
      {
        id: "printer-use",
        label: "よく印刷するもの",
        options: [
          {
            id: "printer-photo",
            label: "写真をきれいに印刷したい",
            description: "写真画質や多色インクを重視",
            tags: ["photo-quality", "six-color", "premium-photo"]
          },
          {
            id: "printer-document",
            label: "文書・学校書類が中心",
            description: "文字くっきり、コピー、スキャンを重視",
            tags: ["document", "copy-scan", "pigment-black"]
          },
          {
            id: "printer-work",
            label: "在宅ワーク・小規模オフィス",
            description: "ADF、FAX、有線LAN、耐久性を確認",
            tags: ["business", "adf", "fax", "wired-lan"]
          },
          {
            id: "printer-phone-photo",
            label: "スマホ写真を手軽に印刷",
            description: "スマホアプリやWi-Fi接続を重視",
            tags: ["smartphone-print", "wifi", "easy-use"]
          }
        ]
      },
      {
        id: "printer-cost",
        label: "インク代・印刷量",
        options: [
          {
            id: "printer-low-running-cost",
            label: "インク代を抑えたい",
            description: "大容量インク、エコタンク、ギガタンクを優先",
            tags: ["low-running-cost", "tank-ink", "high-volume"]
          },
          {
            id: "printer-occasional",
            label: "たまに印刷できれば十分",
            description: "本体価格やシンプルさを重視",
            tags: ["price-focused", "simple"]
          },
          {
            id: "printer-many-pages",
            label: "毎月たくさん印刷する",
            description: "給紙容量、速度、大容量インクを確認",
            tags: ["high-volume", "business", "fast-print"]
          },
          {
            id: "printer-independent-ink",
            label: "なくなった色だけ交換したい",
            description: "独立インク方式を確認",
            tags: ["independent-ink"]
          }
        ]
      },
      {
        id: "printer-paper",
        label: "用紙・機能",
        options: [
          {
            id: "printer-a3",
            label: "A3も印刷したい",
            description: "A3、A3ノビ、背面給紙を確認",
            tags: ["a3", "wide-format"]
          },
          {
            id: "printer-adf",
            label: "複数枚コピー・スキャンしたい",
            description: "ADFや両面ADFを確認",
            tags: ["adf"]
          },
          {
            id: "printer-fax",
            label: "FAXも必要",
            description: "電話/FAX複合機やビジネスFAXを確認",
            tags: ["fax"]
          },
          {
            id: "printer-auto-duplex",
            label: "両面印刷したい",
            description: "自動両面印刷を確認",
            tags: ["auto-duplex"]
          }
        ]
      },
      {
        id: "printer-body",
        label: "置き場所・予算",
        options: [
          {
            id: "printer-compact",
            label: "置き場所を小さくしたい",
            description: "本体サイズや前面操作を確認",
            tags: ["compact"]
          },
          {
            id: "printer-low-budget",
            label: "本体価格を抑えたい",
            description: "低価格帯の候補から見たい",
            tags: ["price-focused"],
            priceBands: ["低価格帯"]
          },
          {
            id: "printer-balance",
            label: "機能と価格のバランス",
            description: "中価格帯を中心に比較",
            tags: ["price-balance"],
            priceBands: ["中価格帯"]
          },
          {
            id: "printer-premium",
            label: "写真・仕事用の上位機がいい",
            description: "多色インク、A3、ビジネス機能を重視",
            tags: ["premium", "high-function"],
            priceBands: ["高価格帯", "プレミアム価格帯"]
          }
        ]
      }
    ]
  },
  smartwatch: {
    title: "スマートウォッチ接客フィルター",
    description: "健康管理、運動、通知、電池持ち、装着感から絞り込みます。複数選ぶと、条件をすべて満たす商品だけに絞ります。",
    groups: [
      {
        id: "smartwatch-use",
        label: "使い方",
        options: [
          {
            id: "smartwatch-health",
            label: "健康管理をしっかり見たい",
            description: "心拍、血中酸素、ストレス、体調傾向を確認",
            tags: ["health", "daily-care"]
          },
          {
            id: "smartwatch-sleep",
            label: "睡眠を詳しく見たい",
            description: "睡眠分析、HRV、呼吸乱れなどを確認",
            tags: ["sleep"]
          },
          {
            id: "smartwatch-sports",
            label: "運動・ランニングで使う",
            description: "運動モード、GPS、ワークアウト分析を確認",
            tags: ["sports", "gps", "built-in-gps"]
          },
          {
            id: "smartwatch-notification",
            label: "通知や通話を手元で見たい",
            description: "着信、アプリ通知、Bluetooth通話を確認",
            tags: ["notification", "call-on-wrist"]
          },
          {
            id: "smartwatch-payment",
            label: "決済も使いたい",
            description: "Google WalletやNFC対応を確認",
            tags: ["payment", "nfc"]
          }
        ]
      },
      {
        id: "smartwatch-body",
        label: "本体・画面",
        options: [
          {
            id: "smartwatch-light",
            label: "軽くて寝る時も着けたい",
            description: "薄さ、軽さ、バンド型の快適さを重視",
            tags: ["lightweight", "compact-band"]
          },
          {
            id: "smartwatch-large-screen",
            label: "大きく見やすい画面がいい",
            description: "AMOLEDや大画面、明るさを確認",
            tags: ["large-screen"]
          },
          {
            id: "smartwatch-design",
            label: "見た目や色も重視",
            description: "カラー、ケース素材、文字盤カスタムを確認",
            tags: ["fashion", "design"]
          },
          {
            id: "smartwatch-water",
            label: "水まわりや運動でも使いたい",
            description: "5ATMや2ATMなど防水性能を確認",
            tags: ["water-resistant"]
          }
        ]
      },
      {
        id: "smartwatch-function",
        label: "機能の深さ",
        options: [
          {
            id: "smartwatch-built-in-gps",
            label: "スマホなしでGPS記録したい",
            description: "内蔵GPSや測位システムを重視",
            tags: ["built-in-gps", "gps"]
          },
          {
            id: "smartwatch-stress",
            label: "ストレスや気分も見たい",
            description: "ストレス通知、情緒モニタリング、cEDAを確認",
            tags: ["stress", "emotion"]
          },
          {
            id: "smartwatch-outdoor",
            label: "登山・屋外スポーツで使いたい",
            description: "気圧計、高度、ルート、屋外モードを確認",
            tags: ["outdoor", "barometer", "built-in-gps"]
          },
          {
            id: "smartwatch-premium-health",
            label: "上位の健康機能が欲しい",
            description: "心電図、皮膚温、体反応センサーなどを確認",
            tags: ["premium-health", "ecg", "body-response"]
          }
        ]
      },
      {
        id: "smartwatch-budget",
        label: "予算・電池",
        options: [
          {
            id: "smartwatch-low-budget",
            label: "予算を抑えたい",
            description: "バンド型や低価格帯から見たい",
            tags: ["price-focused"],
            priceBands: ["低価格帯"]
          },
          {
            id: "smartwatch-balance",
            label: "機能と価格のバランス",
            description: "日常と運動の機能を広く押さえたい",
            tags: ["price-balance"],
            priceBands: ["中価格帯"]
          },
          {
            id: "smartwatch-high-function",
            label: "高機能モデルで選ぶ",
            description: "GPS、決済、健康センサーをまとめて重視",
            tags: ["high-function", "premium"],
            priceBands: ["高価格帯", "プレミアム価格帯"]
          },
          {
            id: "smartwatch-long-battery",
            label: "充電回数を減らしたい",
            description: "10日以上や6日以上の電池持ちを確認",
            tags: ["long-battery", "battery"]
          }
        ]
      }
    ]
  },
  earphone: {
    title: "イヤホン接客フィルター",
    description: "装着方式、ノイズ制御、音質、通話、使い勝手から絞り込みます。要確認の仕様は条件一致に含めません。",
    groups: [
      {
        id: "wearing-style",
        label: "装着方式",
        options: [
          {
            id: "earphone-canal",
            label: "カナル型",
            description: "密閉感と低音、ANCを重視",
            specs: [{ key: "formFactor", values: ["カナル型"] }]
          },
          {
            id: "earphone-inner-ear",
            label: "インナーイヤー型",
            description: "耳栓感が苦手な人向け",
            specs: [{ key: "formFactor", values: ["インナーイヤー型"] }]
          },
          {
            id: "earphone-open-style",
            label: "耳をふさがない",
            description: "周囲の音を聞きながら使いやすい",
            specs: [{ key: "formFactor", values: ["オープンイヤー型", "イヤーカフ型"] }]
          },
          {
            id: "earphone-ear-cuff",
            label: "イヤーカフ型",
            description: "アクセサリー感覚で装着しやすい",
            specs: [{ key: "formFactor", values: ["イヤーカフ型"] }]
          },
          {
            id: "earphone-sleep",
            label: "睡眠向け",
            description: "横向き寝や睡眠モードを確認",
            specs: [{ key: "formFactor", values: ["睡眠特化型"] }],
            tags: ["sleep"]
          }
        ]
      },
      {
        id: "noise-control",
        label: "ノイズ制御",
        options: [
          {
            id: "earphone-anc",
            label: "ノイズキャンセリングあり",
            description: "電車や店内騒音を抑えたい",
            specs: [{ key: "anc", equals: true }]
          },
          {
            id: "earphone-ambient",
            label: "外音取り込みあり",
            description: "会話やアナウンスも聞きたい",
            specs: [{ key: "ambientMode", equals: true }]
          },
          {
            id: "earphone-no-anc-ok",
            label: "ANCなしでもよい",
            description: "価格、軽さ、開放感を優先",
            specs: [{ key: "anc", equals: false }]
          }
        ]
      },
      {
        id: "sound",
        label: "音の好み",
        options: [
          {
            id: "earphone-hires",
            label: "ハイレゾ・音質重視",
            description: "LDAC対応や高音質設計を確認",
            specs: [{ key: "codecs", includes: "LDAC" }]
          },
          {
            id: "earphone-bass",
            label: "低音をしっかり",
            description: "迫力ある低音や大きめドライバーを重視",
            tags: ["bass"]
          },
          {
            id: "earphone-spatial",
            label: "映画・空間オーディオ",
            description: "Dolby、3D、360などの立体音響を確認",
            specs: [{ key: "spatialAudio", equals: true }]
          },
          {
            id: "earphone-studio",
            label: "ボーカルや細かい音",
            description: "解像感やチューニングを重視",
            tags: ["studio-tuned", "sound-quality"]
          }
        ]
      },
      {
        id: "work-call",
        label: "仕事・通話",
        options: [
          {
            id: "earphone-multipoint",
            label: "マルチポイントあり",
            description: "スマホとPCを切り替えたい",
            specs: [{ key: "multipoint", equals: true }]
          },
          {
            id: "earphone-call-noise",
            label: "通話ノイズ低減あり",
            description: "Web会議や電話の聞こえやすさを重視",
            specs: [{ key: "callFeatures", includes: "通話ノイズ低減" }]
          },
          {
            id: "earphone-work-call",
            label: "Web会議向け",
            description: "通話品質と複数端末接続を重視",
            specs: [
              { key: "multipoint", equals: true },
              { key: "callFeatures", includes: "通話ノイズ低減" }
            ]
          }
        ]
      },
      {
        id: "daily-use",
        label: "使い勝手",
        options: [
          {
            id: "earphone-water-resistant",
            label: "防水あり",
            description: "汗や小雨でも使いやすい",
            specs: [{ key: "waterResistance", exists: true }]
          },
          {
            id: "earphone-long-battery",
            label: "電池持ち重視",
            description: "ケース込み30時間以上を目安にする",
            specs: [{ key: "batteryTotal", min: 30 }]
          },
          {
            id: "earphone-small-light",
            label: "小さく軽い",
            description: "片耳5g以下や小型モデルを優先",
            specs: [{ key: "weightEach", max: 5 }],
            tags: ["lightweight", "compact", "small-ear"]
          },
          {
            id: "earphone-wireless-charge",
            label: "ワイヤレス充電あり",
            description: "ケース充電の手軽さを重視",
            specs: [{ key: "wirelessCharging", equals: true }]
          },
          {
            id: "earphone-low-budget",
            label: "1万円前後まで",
            description: "価格を抑えた候補から見たい",
            tags: ["price-focused"],
            priceBands: ["低価格帯"]
          },
          {
            id: "earphone-balance",
            label: "機能と価格のバランス",
            description: "日常使いの機能を広く押さえたい",
            tags: ["price-balance"],
            priceBands: ["中価格帯"]
          },
          {
            id: "earphone-premium",
            label: "上位モデルで選ぶ",
            description: "音質、ANC、通話品質をまとめて重視",
            tags: ["premium", "high-function"],
            priceBands: ["高価格帯", "プレミアム価格帯"]
          }
        ]
      }
    ]
  },
  "hair-dryer": {
    title: "接客フィルター",
    description: "お客様の言葉に近いボタンで絞り込みます。複数選ぶと、条件をすべて満たす商品だけに絞ります。",
    groups: [
      {
        id: "customer-voice",
        label: "お客様の一言",
        options: [
          {
            id: "want-fast-dry",
            label: "早く乾かしたい",
            description: "ロング、毛量多め、家族利用で乾燥時間を短くしたい",
            tags: ["quick-dry", "high-airflow"]
          },
          {
            id: "care-frizz",
            label: "広がり・パサつきが気になる",
            description: "まとまり、ツヤ、静電気対策を話したい",
            tags: ["hair-care", "ion-care"]
          },
          {
            id: "avoid-heavy",
            label: "重いのが苦手",
            description: "毎日使うので腕の負担を減らしたい",
            tags: ["lightweight"]
          },
          {
            id: "small-storage",
            label: "置き場所が狭い",
            description: "洗面台や棚にしまいやすいものを探している",
            tags: ["compact"]
          },
          {
            id: "night-use",
            label: "夜に使うことが多い",
            description: "音や熱ダメージ、家族への配慮も確認したい",
            tags: ["quiet", "low-temperature"]
          },
          {
            id: "travel-use",
            label: "旅行・出張でも使いたい",
            description: "持ち運びや海外対応を確認したい",
            tags: ["compact", "overseas"]
          }
        ]
      },
      {
        id: "hair-concern",
        label: "髪・頭皮の悩み",
        options: [
          {
            id: "long-thick-hair",
            label: "ロング・毛量多め",
            description: "風量や乾燥時間を重視",
            tags: ["quick-dry", "high-airflow"]
          },
          {
            id: "damage-care",
            label: "カラー・ダメージ毛",
            description: "熱ダメージや保湿ケアを重視",
            tags: ["hair-care", "low-temperature", "premium"]
          },
          {
            id: "scalp-care",
            label: "頭皮もケアしたい",
            description: "低温風やスカルプモードを説明したい",
            tags: ["scalp-care", "low-temperature"]
          },
          {
            id: "simple-short-hair",
            label: "短髪・シンプルで十分",
            description: "複雑なモードより操作性と価格を重視",
            tags: ["simple", "price-focused"]
          }
        ]
      },
      {
        id: "budget-body",
        label: "予算・本体",
        options: [
          {
            id: "low-budget",
            label: "予算を抑えたい",
            description: "まず低価格帯から見たい",
            tags: ["price-focused"],
            priceBands: ["低価格帯"]
          },
          {
            id: "balanced-budget",
            label: "価格と機能のバランス",
            description: "中価格帯を中心に提案したい",
            tags: ["price-balance"],
            priceBands: ["中価格帯"]
          },
          {
            id: "premium-ok",
            label: "高くても髪に良いもの",
            description: "上位モデルや美容ケアを重視",
            tags: ["premium", "high-function", "hair-care"],
            priceBands: ["高価格帯", "プレミアム価格帯"]
          },
          {
            id: "many-functions",
            label: "モードが多い方がいい",
            description: "温冷、自動切替、スカルプなどの機能を比較",
            tags: ["high-function", "scalp-care", "low-temperature"]
          }
        ]
      },
      {
        id: "closing-check",
        label: "最後に確認したい条件",
        options: [
          {
            id: "ion-care-needed",
            label: "イオンケアあり",
            description: "静電気やまとまりを気にする人向け",
            tags: ["ion-care"]
          },
          {
            id: "auto-temp",
            label: "温冷・低温ケアあり",
            description: "熱ダメージを抑える使い方を説明したい",
            tags: ["low-temperature"]
          },
          {
            id: "easy-maintenance",
            label: "お手入れしやすい",
            description: "吸込口やフィルター掃除も確認したい",
            tags: ["easy-clean"]
          },
          {
            id: "salon-finish",
            label: "サロン級の仕上がり",
            description: "仕上がり重視の上位モデルを見せたい",
            tags: ["premium", "hair-care", "high-function"]
          }
        ]
      }
    ]
  }
};

const communicationQuestions = [
  question("main_use", "主な用途は何ですか？", [["普段使い", "daily", ["daily-use", "balance"]], ["音楽・動画", "media", ["media", "battery"]], ["仕事・学校", "work", ["office", "reliable"]]]),
  question("priority", "一番重視することは何ですか？", [["価格", "price", ["price-focused"]], ["使いやすさ", "easy", ["easy-use", "simple"]], ["性能", "function", ["high-function"]]]),
  question("portability", "持ち運びやすさは重要ですか？", [["重要", "yes", ["lightweight", "compact"]], ["普通", "normal", ["balance"]], ["据え置き中心", "no", ["home-use"]]])
];

const informationQuestions = [
  question("main_use", "主な用途は何ですか？", [["学習・仕事", "work", ["office", "student"]], ["家庭用", "home", ["home-use", "easy-use"]], ["高性能用途", "performance", ["high-performance", "high-function"]]]),
  question("connectivity", "接続や連携は重視しますか？", [["重視する", "yes", ["connectivity"]], ["普通", "normal", ["balance"]], ["単体で使う", "single", ["simple"]]]),
  question("priority", "価格と性能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["性能重視", "performance", ["high-performance"]]])
];

const homeApplianceQuestions = [
  question("household", "使う人数や頻度はどれくらいですか？", [["一人・少なめ", "small", ["single", "compact"]], ["標準", "normal", ["balance"]], ["家族・多め", "family", ["family", "large-capacity"]]]),
  question("care", "お手入れのしやすさを重視しますか？", [["重視する", "yes", ["easy-clean"]], ["普通", "normal", ["balance"]], ["機能優先", "function", ["high-function"]]]),
  question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["機能重視", "function", ["high-function"]]])
];

const seasonalAvQuestions = [
  question("place", "どこで使いますか？", [["個室", "private", ["small-room", "compact"]], ["リビング", "living", ["living-room", "large-capacity"]], ["持ち運び", "portable", ["portable", "compact"]]]),
  question("comfort", "快適性や静音性を重視しますか？", [["重視する", "yes", ["quiet", "comfort"]], ["普通", "normal", ["balance"]], ["価格優先", "price", ["price-focused"]]]),
  question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["機能重視", "function", ["high-function"]]])
];

const questions = {
  earphone: communicationQuestions,
  "mobile-battery": communicationQuestions,
  adapter: communicationQuestions,
  "landline-intercom": communicationQuestions,
  tablet: informationQuestions,
  printer: informationQuestions,
  router: informationQuestions,
  "hair-iron": homeApplianceQuestions,
  "rice-cooker": homeApplianceQuestions,
  microwave: homeApplianceQuestions,
  iron: homeApplianceQuestions,
  "vacuum-cleaner": homeApplianceQuestions,
  "electric-fan": seasonalAvQuestions,
  "air-purifier": seasonalAvQuestions,
  radio: seasonalAvQuestions,
  refrigerator: [
    question("family_size", "何人暮らしですか？", [["一人暮らし", "single", ["single", "compact", "space-saving"]], ["2人暮らし", "couple", ["couple", "medium-capacity"]], ["3〜4人家族", "family", ["family", "large-capacity"]]]),
    question("width", "設置スペースの幅はどれくらいですか？", [["狭め", "narrow", ["space-saving", "compact"]], ["標準", "standard", ["standard-size"]], ["余裕あり", "wide", ["large-capacity"]]]),
    question("frozen", "冷凍食品はよく使いますか？", [["よく使う", "often", ["freezer-focused"]], ["普通", "normal", ["balance"]], ["あまり使わない", "rare", ["fresh-food"]]]),
    question("cook", "料理はよくしますか？", [["よくする", "often", ["fresh-food", "large-capacity"]], ["時々", "sometimes", ["balance"]], ["少なめ", "rare", ["simple"]]]),
    question("energy", "省エネ性能を重視しますか？", [["重視する", "yes", ["energy-saving"]], ["普通", "normal", ["balance"]], ["価格優先", "price", ["price-focused"]]]),
    question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["機能重視", "function", ["high-function"]]])
  ],
  "washing-machine": [
    question("family_size", "何人暮らしですか？", [["一人暮らし", "single", ["single", "compact"]], ["2〜3人", "small-family", ["medium-capacity"]], ["4人以上", "family", ["family", "large-capacity"]]]),
    question("frequency", "洗濯頻度はどれくらいですか？", [["毎日", "daily", ["daily-use", "large-capacity"]], ["週数回", "weekly", ["balance"]], ["まとめ洗い", "bulk", ["large-capacity", "time-saving"]]]),
    question("dryer", "乾燥機能は必要ですか？", [["必要", "yes", ["drying", "high-function"]], ["あると便利", "maybe", ["price-balance"]], ["不要", "no", ["price-focused", "simple"]]]),
    question("space", "設置スペースに余裕はありますか？", [["狭い", "narrow", ["compact"]], ["標準", "standard", ["balance"]], ["余裕あり", "wide", ["large-capacity"]]]),
    question("priority_feature", "洗浄力・時短・静音性のどれを重視しますか？", [["洗浄力", "clean", ["cleaning-power"]], ["時短", "time", ["time-saving"]], ["静音性", "silent", ["quiet"]]]),
    question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["機能重視", "function", ["high-function"]]])
  ],
  tv: [
    question("usage", "主にどの用途で使いますか？", [["地デジ中心", "broadcast", ["simple", "price-focused"]], ["動画配信", "streaming", ["streaming", "smart"]], ["ゲーム", "game", ["gaming", "high-refresh"]]]),
    question("distance", "視聴距離はどれくらいですか？", [["近い", "near", ["compact"]], ["標準", "standard", ["standard-size"]], ["離れて見る", "far", ["large-screen"]]]),
    question("picture", "画質を重視しますか？", [["重視する", "yes", ["high-picture-quality"]], ["普通", "normal", ["balance"]], ["価格優先", "price", ["price-focused"]]]),
    question("streaming", "動画配信サービスをよく使いますか？", [["よく使う", "often", ["streaming", "smart"]], ["たまに", "sometimes", ["balance"]], ["使わない", "no", ["simple"]]]),
    question("game", "ゲームをしますか？", [["よくする", "often", ["gaming", "high-function"]], ["少し", "sometimes", ["balance"]], ["しない", "no", ["simple"]]]),
    question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["機能重視", "function", ["high-function"]]])
  ],
  "air-conditioner": [
    question("room_size", "部屋の広さはどれくらいですか？", [["6畳前後", "small", ["small-room"]], ["10〜14畳", "living", ["living-room"]], ["広め", "large", ["large-room", "high-power"]]]),
    question("place", "どこで使いますか？", [["寝室", "bedroom", ["quiet", "bedroom"]], ["リビング", "living", ["living-room", "energy-saving"]], ["子ども部屋", "kids", ["simple", "safe-use"]]]),
    question("energy", "省エネ性能を重視しますか？", [["重視する", "yes", ["energy-saving"]], ["普通", "normal", ["balance"]], ["価格優先", "price", ["price-focused"]]]),
    question("cleaning", "掃除のしやすさを重視しますか？", [["重視する", "yes", ["easy-clean", "auto-clean"]], ["普通", "normal", ["balance"]], ["不要", "no", ["simple"]]]),
    question("heating", "暖房性能も重視しますか？", [["重視する", "yes", ["heating", "high-power"]], ["普通", "normal", ["balance"]], ["冷房中心", "cooling", ["cooling"]]]),
    question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["機能重視", "function", ["high-function"]]])
  ],
  pc: [
    question("usage", "主な用途は何ですか？", [["学習・文書", "office", ["office", "student"]], ["動画編集", "creative", ["creative", "high-performance"]], ["ゲーム", "gaming", ["gaming", "high-performance"]]]),
    question("mobile", "持ち運びますか？", [["毎日", "daily", ["lightweight", "mobile"]], ["時々", "sometimes", ["balance"]], ["ほぼ据え置き", "no", ["large-screen"]]]),
    question("office", "Office作業をしますか？", [["よくする", "yes", ["office"]], ["少し", "maybe", ["balance"]], ["しない", "no", ["simple"]]]),
    question("heavy", "動画編集やゲームをしますか？", [["する", "yes", ["high-performance"]], ["少し", "maybe", ["price-balance"]], ["しない", "no", ["price-focused"]]]),
    question("screen", "画面サイズを重視しますか？", [["大きめ", "large", ["large-screen"]], ["標準", "standard", ["balance"]], ["小さく軽く", "small", ["compact", "lightweight"]]]),
    question("priority", "価格と性能のどちらを重視しますか？", [["価格重視", "price", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["性能重視", "performance", ["high-performance"]]])
  ],
  smartphone: [
    question("usage", "主な用途は何ですか？", [["連絡中心", "basic", ["simple", "price-focused"]], ["写真・動画", "camera", ["camera"]], ["ゲーム・動画", "entertainment", ["large-screen", "battery"]]]),
    question("camera", "カメラ性能を重視しますか？", [["重視する", "yes", ["camera"]], ["普通", "normal", ["balance"]], ["不要", "no", ["price-focused"]]]),
    question("battery", "バッテリー持ちを重視しますか？", [["重視する", "yes", ["battery"]], ["普通", "normal", ["balance"]], ["軽さ優先", "light", ["lightweight"]]]),
    question("screen", "画面サイズの希望はありますか？", [["大きめ", "large", ["large-screen"]], ["標準", "standard", ["balance"]], ["小さめ", "small", ["compact"]]]),
    question("price", "価格を重視しますか？", [["重視する", "yes", ["price-focused"]], ["バランス", "balance", ["price-balance"]], ["性能優先", "performance", ["high-function"]]]),
    question("easy", "操作の簡単さを重視しますか？", [["重視する", "yes", ["easy-use", "simple"]], ["普通", "normal", ["balance"]], ["慣れている", "advanced", ["high-function"]]])
  ],
  smartwatch: [
    question("phone", "使っているスマホは何ですか？", [["iPhone", "iphone", ["iphone"]], ["Android", "android", ["android"]], ["まだ決まっていない", "unknown", ["price-balance"]]]),
    question("usage", "主な用途は何ですか？", [["健康管理", "health", ["health", "daily-care"]], ["通知確認", "notification", ["notification"]], ["運動記録", "sports", ["sports", "gps"]], ["電子決済", "payment", ["payment"]], ["ファッション", "fashion", ["fashion", "design"]]]),
    question("sports", "運動記録を重視しますか？", [["重視する", "yes", ["sports", "gps"]], ["少し使う", "maybe", ["balance"]], ["あまり使わない", "no", ["simple"]]]),
    question("battery", "バッテリー持ちは重要ですか？", [["とても重要", "yes", ["battery"]], ["普通", "normal", ["balance"]], ["そこまで重視しない", "no", ["high-function"]]]),
    question("screen", "画面の見やすさを重視しますか？", [["大きめがよい", "large", ["large-screen"]], ["普通", "normal", ["balance"]], ["小さめでよい", "small", ["light"]]]),
    question("priority", "価格と機能のどちらを重視しますか？", [["価格重視", "price", ["price-focused", "entry"]], ["バランス重視", "balance", ["price-balance"]], ["高機能重視", "function", ["high-function"]]])
  ],
  "hair-dryer": [
    question("priority", "一番重視したいことは何ですか？", [["早く乾くこと", "quick", ["quick-dry", "high-airflow"]], ["髪へのやさしさ", "care", ["hair-care", "ion-care"]], ["価格", "price", ["price-focused"]], ["軽さ", "light", ["lightweight"]]]),
    question("hair_length", "髪の長さや量はどれに近いですか？", [["短め・少なめ", "short", ["compact", "simple"]], ["標準", "normal", ["balance"]], ["長め・多め", "long", ["quick-dry", "high-airflow"]]]),
    question("temperature", "熱ダメージへの配慮は必要ですか？", [["必要", "yes", ["hair-care", "low-temperature"]], ["普通", "normal", ["balance"]], ["速乾優先", "quick", ["quick-dry"]]]),
    question("storage", "収納や持ち運びを重視しますか？", [["重視する", "yes", ["compact", "lightweight"]], ["旅行でも使いたい", "travel", ["compact", "overseas"]], ["あまり重視しない", "no", ["high-function"]]]),
    question("budget", "価格帯の希望はありますか？", [["低価格帯", "low", ["price-focused"]], ["中価格帯", "middle", ["price-balance"]], ["高価格帯でもよい", "high", ["premium", "high-function"]]]),
    question("finish", "仕上がりで気になることは何ですか？", [["広がり", "spread", ["ion-care", "hair-care"]], ["ツヤ", "shine", ["hair-care", "premium"]], ["乾燥時間", "time", ["quick-dry", "high-airflow"]]])
  ]
};

const dryerInventory = [
  {
    id: "panasonic_nanocare_eh_nc80",
    maker: "Panasonic",
    name: "ヘアードライヤー ナノケア ULTIMATE EH-NC80",
    modelNumber: "EHNC80 / EH-NC80",
    productType: "髪悩み別ケア最上位モデル",
    priceBand: "プレミアム価格帯",
    tags: ["hair-care", "ion-care", "quick-dry", "premium", "high-function", "scalp-care", "low-temperature", "easy-clean"],
    strengths: ["第2世代高浸透ナノイーのプレミアムケアを訴求しやすい", "MOIST、STRAIGHT、AIRY、SMOOTHなど髪質に合わせた提案ができる", "パワフルな高回転モーターで速乾も説明しやすい"],
    goodFor: "価格より髪悩み別の仕上がり、うるおい、まとまりを重視する人",
    caution: "高価格帯のため、髪悩みの具体性と毎日の使用頻度を確認する"
  },
  {
    id: "panasonic_nanocare_eh_nc50",
    maker: "Panasonic",
    name: "ヘアードライヤー ナノケア ULTIMATE EH-NC50",
    modelNumber: "EHNC50 / EH-NC50",
    productType: "高浸透ナノイー上位ケアモデル",
    priceBand: "プレミアム価格帯",
    tags: ["hair-care", "ion-care", "quick-dry", "premium", "high-function", "scalp-care", "low-temperature"],
    strengths: ["第2世代高浸透ナノイー系のうるおいケアを案内しやすい", "髪のパサつき、広がり、まとまりを重視する人に向く", "EH-NC80よりシンプルな上位候補として比較しやすい"],
    goodFor: "ナノケア最上位級の髪ケアは欲しいが、メニュー数は絞って選びたい人",
    caution: "EH-NC80とのモード、付属品、店頭価格差を確認する"
  },
  {
    id: "panasonic_nanocare_eh_na0k",
    maker: "Panasonic",
    name: "ヘアードライヤー ナノケア EH-NA0K",
    modelNumber: "EHNA0K / EH-NA0K",
    productType: "高浸透ナノイー定番上位モデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "ion-care", "quick-dry", "premium", "high-function", "low-temperature"],
    strengths: ["高浸透ナノイーで髪のうるおいとまとまりを提案しやすい", "速乾とヘアケアの両方を重視する定番上位候補", "髪質改善感より毎日の乾かしやすさも説明しやすい"],
    goodFor: "上位ナノケアを選びたいが、ULTIMATEほどのプレミアム価格は抑えたい人",
    caution: "色、付属ノズル、EH-NA9MやEH-NC系との違いを確認する"
  },
  {
    id: "panasonic_nanocare_eh_na9f",
    maker: "Panasonic",
    name: "ヘアードライヤー ナノケア EH-NA9F",
    modelNumber: "EHNA9F / EH-NA9F",
    productType: "海外対応ナノケアモデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "ion-care", "overseas", "premium", "compact", "low-temperature"],
    strengths: ["海外対応ニーズがある人にナノケア系として提案しやすい", "旅行や出張でも髪ケアを維持したい人向け", "ナノイー、ミネラル系のまとまりケアを説明しやすい"],
    goodFor: "海外出張や旅行があり、ホテル備品より髪ケアを重視したい人",
    caution: "渡航先電圧、プラグ形状、国内専用モデルとの風量差を確認する"
  },
  {
    id: "panasonic_nanocare_eh_na9m",
    maker: "Panasonic",
    name: "ヘアードライヤー ナノケア EH-NA9M",
    modelNumber: "EHNA9M / EH-NA9M",
    productType: "スマートセンシング搭載ナノケアモデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "ion-care", "quick-dry", "premium", "high-function", "scalp-care", "low-temperature"],
    strengths: ["ナノイー、ミネラル、マイナスイオンでキューティクル密着ケアを説明しやすい", "速乾ノズルとスマートセンシングで快適な乾燥を提案できる", "スカルプや温冷ケアも含めたバランス上位候補"],
    goodFor: "髪のパサつき、紫外線ダメージ、熱さを抑えた乾燥を気にする人",
    caution: "EH-NA0KやEH-NC系とのケア成分、モード差を比較する"
  },
  {
    id: "panasonic_nanocare_eh_na7m",
    maker: "Panasonic",
    name: "ヘアードライヤー ナノケア EH-NA7M",
    modelNumber: "EHNA7M / EH-NA7M",
    productType: "ナノケア標準モデル",
    priceBand: "中価格帯",
    tags: ["hair-care", "ion-care", "price-balance", "low-temperature", "scalp-care"],
    strengths: ["ナノケア系の髪ケアを比較的選びやすい価格帯で提案できる", "広がり、パサつき、まとまりの悩みに案内しやすい", "イオニティよりケア重視、上位ナノケアより予算重視の中間候補"],
    goodFor: "ナノケアを使いたいが、上位価格帯までは上げたくない人",
    caution: "高浸透ナノイー搭載有無や上位機との差を確認する"
  },
  {
    id: "kinujo_hair_dryer_kh302",
    maker: "KINUJO",
    name: "KINUJO Hair Dryer モカ",
    modelNumber: "KH302",
    productType: "軽量大風量ヘアケアモデル",
    priceBand: "高価格帯",
    tags: ["quick-dry", "high-airflow", "hair-care", "lightweight", "compact", "premium", "ion-care", "low-temperature", "easy-clean"],
    strengths: ["約348gの軽量ボディで腕の負担を抑えやすい", "大風量と超遠赤外線で速乾とまとまりを提案しやすい", "GLOSS、SCULP、SWINGモードで仕上がりを選べる"],
    goodFor: "軽くて早く乾き、デザインや仕上がりも重視したい人",
    caution: "国内専用のため海外使用ニーズがある場合は別モデルを比較する"
  },
  {
    id: "kinujo_hair_dryer_kh301",
    maker: "KINUJO",
    name: "KINUJO Hair Dryer ホワイト",
    modelNumber: "KH301",
    productType: "軽量大風量ヘアケアモデル",
    priceBand: "高価格帯",
    tags: ["quick-dry", "high-airflow", "hair-care", "lightweight", "compact", "premium", "ion-care", "low-temperature", "easy-clean"],
    strengths: ["KH302と同系統の軽量大風量モデルとして色違い提案がしやすい", "超遠赤外線とマイナスイオンでうるツヤ速乾を訴求できる", "折りたたみ時も収納しやすい"],
    goodFor: "軽さ、速乾、白系デザインを重視する人",
    caution: "色違いJANと在庫、国内専用仕様を確認する"
  },
  {
    id: "refa_like_hw001",
    maker: "ReFa/美容系",
    name: "HW001 ドライヤー",
    modelNumber: "HW001",
    productType: "美容ケア高機能モデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "premium", "high-function", "low-temperature", "design"],
    strengths: ["美容系ドライヤーとして温度配慮と仕上がり重視で案内する", "デザインやブランド感を重視する人の比較候補にできる", "髪のまとまり、ツヤ、熱ダメージをヒアリングしやすい"],
    goodFor: "速乾だけでなく、美容家電としての仕上がりや見た目も重視する人",
    caution: "正式メーカー名、正式商品名、JAN、海外対応有無を商品マスターで確認する"
  },
  {
    id: "sharp_plasmacluster_ib_p802",
    maker: "SHARP",
    name: "Plasmacluster Beauty ドライヤー IB-P802",
    modelNumber: "IBP802 / IB-P802",
    productType: "プラズマクラスター上位ケアモデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "ion-care", "quick-dry", "premium", "high-function", "low-temperature"],
    strengths: ["プラズマクラスターで静電気やまとまりの悩みに提案しやすい", "上位シリーズとして髪へのケアと速乾を両立して説明できる", "温度配慮やモード切替を比較しやすい"],
    goodFor: "静電気、広がり、髪のまとまりを気にする人",
    caution: "IB-P602、IB-P300との風量、重さ、モード差を確認する"
  },
  {
    id: "salonia_sal23209",
    maker: "SALONIA",
    name: "SALONIA ドライヤー SAL23209",
    modelNumber: "SAL23209",
    productType: "デザイン重視ヘアケアモデル",
    priceBand: "中価格帯",
    tags: ["price-balance", "hair-care", "ion-care", "compact", "design", "low-temperature"],
    strengths: ["SALONIAらしいシンプルなデザインで案内しやすい", "価格と美容ケア感のバランスを取りやすい", "毎日使うドライヤーを見た目込みで選びたい人向け"],
    goodFor: "高級機までは不要だが、デザインと髪への配慮を両方見たい人",
    caution: "SAL23210との色、付属品、正式商品名を確認する"
  },
  {
    id: "panasonic_ionity_eh_ne9n",
    maker: "Panasonic",
    name: "ヘアードライヤー イオニティ EH-NE9N",
    modelNumber: "EHNE9N / EH-NE9N",
    productType: "温冷リズム搭載ミドルモデル",
    priceBand: "中価格帯",
    tags: ["ion-care", "low-temperature", "price-balance", "lightweight", "hair-care"],
    strengths: ["温冷リズムや風温、風量切替で仕上げを調整しやすい", "イオニティ上位寄りで価格とケアのバランスを取りやすい", "約455gクラスで扱いやすさを説明しやすい"],
    goodFor: "低価格モデルより少し機能を上げ、温冷ケアも使いたい人",
    caution: "ナノケアほどのケア性能を求める場合はEH-NA系も比較する"
  },
  {
    id: "panasonic_ionity_eh_ne8n",
    maker: "Panasonic",
    name: "ヘアードライヤー イオニティ EH-NE8N",
    modelNumber: "EHNE8N / EH-NE8N",
    productType: "大風量イオニティモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "ion-care", "price-balance", "low-temperature"],
    strengths: ["イオニティ系で速乾とマイナスイオンを提案しやすい", "上位ナノケアほど高くせず、乾きやすさを重視できる", "家族利用や毛量多めの人に比較候補として出しやすい"],
    goodFor: "価格を抑えつつ、風量とイオンケアを重視する人",
    caution: "EH-NE9Nとの温冷機能、重さ、価格差を確認する"
  },
  {
    id: "koizumi_khd_b500_c",
    maker: "KOIZUMI",
    name: "KOIZUMI BLDCドライヤー ベージュ",
    modelNumber: "KHDB500C / KHD-B500-C",
    productType: "軽量BLDCバランスモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "lightweight", "compact", "price-balance", "ion-care", "easy-clean"],
    strengths: ["BLDCモーター系として軽さと風の強さを説明しやすい", "ベージュ系カラーでデザインも提案しやすい", "価格と機能のバランス候補にしやすい"],
    goodFor: "軽めで乾きやすく、デザインもシンプルなものを選びたい人",
    caution: "KHD-B500-Kとの色、JAN、店頭在庫を確認する"
  },
  {
    id: "koizumi_khd_b500_k",
    maker: "KOIZUMI",
    name: "KOIZUMI BLDCドライヤー ブラック",
    modelNumber: "KHDB500K / KHD-B500-K",
    productType: "軽量BLDCバランスモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "lightweight", "compact", "price-balance", "ion-care", "easy-clean"],
    strengths: ["BLDCモーター系として軽さと風の強さを説明しやすい", "黒系カラーで男性やシンプル志向にも案内しやすい", "日常使いの扱いやすさを比較しやすい"],
    goodFor: "軽量、速乾、黒系デザインを重視する人",
    caution: "KHD-B500-Cとの色、JAN、価格差を確認する"
  },
  {
    id: "ya_man_hc20n1",
    maker: "YA-MAN",
    name: "リフトドライヤー HC20N1",
    modelNumber: "HC20N1 / HC-20N-1",
    productType: "美顔器発想リフトケアモデル",
    priceBand: "プレミアム価格帯",
    tags: ["hair-care", "premium", "high-function", "scalp-care", "low-temperature", "design"],
    strengths: ["髪を乾かすだけでなく頭皮ケアや美容機能を提案しやすい", "YA-MAN系の美容家電としてギフトや自分磨き需要に向く", "スカルプやフェイスケアの確認につなげやすい"],
    goodFor: "ドライヤーにも美容ケア、頭皮ケア、ブランド感を求める人",
    caution: "アタッチメント、フェイス使用条件、正式色を確認する"
  },
  {
    id: "dyson_hd19_vlp",
    maker: "Dyson",
    name: "Dyson Supersonic r HD19",
    modelNumber: "HD19VLP / HD19 VLP",
    productType: "軽量プレミアム速乾モデル",
    priceBand: "プレミアム価格帯",
    tags: ["quick-dry", "high-airflow", "lightweight", "premium", "high-function", "low-temperature", "design"],
    strengths: ["Dysonの上位軽量系として速乾と扱いやすさを訴求しやすい", "温度制御とアタッチメントで仕上げを変えられる", "プレミアム感とデザイン性を重視する人に向く"],
    goodFor: "高価格でも軽さ、速乾、ブランド性、仕上げ用アタッチメントを重視する人",
    caution: "同梱アタッチメント、色、収納ケース、HD17/HD16との差を確認する"
  },
  {
    id: "dyson_hd17_vlp",
    maker: "Dyson",
    name: "Dyson Supersonic Nural Shine HD17",
    modelNumber: "HD17VLP / HD17 VLP",
    productType: "頭皮保護センサー搭載プレミアムモデル",
    priceBand: "プレミアム価格帯",
    tags: ["quick-dry", "high-airflow", "premium", "high-function", "scalp-care", "low-temperature", "design"],
    strengths: ["頭皮や熱ダメージへの配慮を重視する人に提案しやすい", "速乾とアタッチメントの使い分けを説明しやすい", "Dysonらしい風量と温度制御を比較軸にできる"],
    goodFor: "熱すぎる風が苦手で、速乾と頭皮への配慮を両立したい人",
    caution: "HD17の色違い、付属アタッチメント、販売セット名を確認する"
  },
  {
    id: "dyson_hd17_cpato",
    maker: "Dyson",
    name: "Dyson Supersonic Nural Shine HD17 CPATO",
    modelNumber: "HD17CPATO / HD17 CPATO",
    productType: "頭皮保護センサー搭載プレミアムモデル",
    priceBand: "プレミアム価格帯",
    tags: ["quick-dry", "high-airflow", "premium", "high-function", "scalp-care", "low-temperature", "design"],
    strengths: ["HD17系の色違い、セット違い候補として案内しやすい", "頭皮ケアと熱ダメージ配慮を強く訴求できる", "プレミアムギフト需要にも比較しやすい"],
    goodFor: "Dysonの最新系で色やセット内容までこだわりたい人",
    caution: "CPATOの正式カラー名、JAN、付属品構成を確認する"
  },
  {
    id: "dyson_hd16_vlp",
    maker: "Dyson",
    name: "Dyson Supersonic Shine HD16",
    modelNumber: "HD16VLP / HD16 VLP",
    productType: "プレミアム速乾スタイリングモデル",
    priceBand: "プレミアム価格帯",
    tags: ["quick-dry", "high-airflow", "premium", "high-function", "low-temperature", "design"],
    strengths: ["Dysonの速乾とアタッチメント提案がしやすい", "まとまりや浮き毛抑制など仕上げ重視で比較できる", "HD17より価格やセット差を見たい人の候補にできる"],
    goodFor: "Dysonの速乾力と仕上げ用アタッチメントを重視する人",
    caution: "HD17/HD19とのセンサー機能、重さ、付属品差を確認する"
  },
  {
    id: "ya_man_yjhc2w",
    maker: "YA-MAN",
    name: "YA-MAN リフトドライヤー系 YJHC2W",
    modelNumber: "YJHC2W / YJHC2-W",
    productType: "美容ケア高機能モデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "premium", "high-function", "scalp-care", "low-temperature", "design"],
    strengths: ["髪を乾かしながら頭皮ケアや美容感を提案しやすい", "白系デザインで洗面台に置きやすい印象を作れる", "YA-MANの美容家電と一緒に提案しやすい"],
    goodFor: "頭皮ケア、美容家電らしさ、見た目を重視する人",
    caution: "正式商品名、アタッチメント、JANを商品マスターで確認する"
  },
  {
    id: "ya_man_yjhr4l",
    maker: "YA-MAN",
    name: "YA-MAN ドライヤー YJHR4L",
    modelNumber: "YJHR4L / YJHR4-L",
    productType: "美容ケア高機能モデル",
    priceBand: "高価格帯",
    tags: ["hair-care", "premium", "high-function", "scalp-care", "low-temperature", "design"],
    strengths: ["YA-MAN系の美容ケア需要に合わせて提案しやすい", "髪や頭皮への温度配慮を話しやすい", "色やデザインで選ぶ候補にもできる"],
    goodFor: "美容機能やブランドでドライヤーを選びたい人",
    caution: "正式商品名、カテゴリ、色、JANを確認する"
  },
  {
    id: "ya_man_hc21b",
    maker: "YA-MAN",
    name: "リフトドライヤー HC21B",
    modelNumber: "HC21B / HC-21B",
    productType: "美顔器発想リフトケアモデル",
    priceBand: "プレミアム価格帯",
    tags: ["hair-care", "premium", "high-function", "scalp-care", "low-temperature", "design"],
    strengths: ["頭皮やフェイスケア発想のプレミアム候補として案内しやすい", "美容家電に詳しいお客様の比較候補にできる", "乾かすだけでなくケア時間として提案しやすい"],
    goodFor: "ドライヤーに頭皮ケア、美容ケア、上位感を求める人",
    caution: "HC20N1との機能差、正式色、付属品を確認する"
  },
  {
    id: "ya_man_yjhb6",
    maker: "YA-MAN",
    name: "YA-MAN ドライヤー YJHB6",
    modelNumber: "YJHB6 / YJHB-6",
    productType: "美容ケアモデル",
    priceBand: "中価格帯",
    tags: ["hair-care", "ion-care", "price-balance", "compact", "low-temperature"],
    strengths: ["YA-MAN系の髪ケア候補として中価格帯で比較しやすい", "美容ケアと扱いやすさのバランスを提案しやすい", "上位リフトドライヤーより予算を抑えたい人向け"],
    goodFor: "美容ケア感は欲しいが、プレミアム価格帯は避けたい人",
    caution: "正式商品名、JAN、上位機との差を確認する"
  },
  {
    id: "ya_man_yjhb1n",
    maker: "YA-MAN",
    name: "YA-MAN ドライヤー YJHB1N",
    modelNumber: "YJHB1N / YJHB1-N",
    productType: "美容ケアエントリーモデル",
    priceBand: "中価格帯",
    tags: ["hair-care", "price-balance", "compact", "simple", "low-temperature"],
    strengths: ["YA-MAN系のエントリー候補として案内しやすい", "髪ケア感と価格バランスを取りたい人に向く", "シンプルに使える美容家電として比較できる"],
    goodFor: "YA-MANブランドを試したいが、価格は抑えたい人",
    caution: "正式商品名、色、JAN、現行取扱を確認する"
  },
  {
    id: "sharp_plasmacluster_ib_p602",
    maker: "SHARP",
    name: "Plasmacluster Beauty ドライヤー IB-P602",
    modelNumber: "IBP602 / IB-P602",
    productType: "プラズマクラスター標準ケアモデル",
    priceBand: "中価格帯",
    tags: ["hair-care", "ion-care", "price-balance", "low-temperature", "compact"],
    strengths: ["プラズマクラスターで静電気や広がりの悩みに案内しやすい", "IB-P802より価格を抑えたケア候補にできる", "SHARP指名買いのお客様にも提案しやすい"],
    goodFor: "髪のまとまりや静電気対策を中価格帯で見たい人",
    caution: "IB-P802やIB-P300との風量、サイズ、価格差を確認する"
  },
  {
    id: "salonia_sal23210",
    maker: "SALONIA",
    name: "SALONIA ドライヤー SAL23210",
    modelNumber: "SAL23210",
    productType: "デザイン重視ヘアケアモデル",
    priceBand: "中価格帯",
    tags: ["price-balance", "hair-care", "ion-care", "compact", "design", "low-temperature"],
    strengths: ["SAL23209の色違い、セット違い候補として比較しやすい", "シンプルデザインと美容ケア感を両立して提案できる", "高級機までは不要な人に案内しやすい"],
    goodFor: "デザイン、価格、髪への配慮のバランスを見たい人",
    caution: "SAL23209との正式色、JAN、仕様差を確認する"
  },
  {
    id: "koizumi_monster_khd_w990_k",
    maker: "KOIZUMI",
    name: "MONSTER ダブルファンドライヤー KHD-W990-K",
    modelNumber: "KHDW990K / KHD-W990-K",
    productType: "大風量速乾パワーモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "ion-care", "scalp-care", "high-function", "low-temperature", "easy-clean"],
    strengths: ["MONSTER系の大風量で乾燥時間短縮を強く提案できる", "毛量多め、家族利用、ロングヘアに案内しやすい", "温冷やスカルプ系の機能も比較軸にできる"],
    goodFor: "髪の量が多く、とにかく早く乾かしたい人",
    caution: "重量感と音の大きさを店頭で確認してもらう"
  },
  {
    id: "panasonic_ionity_eh_ne7n",
    maker: "Panasonic",
    name: "ヘアードライヤー イオニティ EH-NE7N",
    modelNumber: "EHNE7N / EH-NE7N",
    productType: "低温ケア対応バランスモデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "ion-care", "low-temperature", "balance", "compact"],
    strengths: ["価格を抑えながらマイナスイオンや低温ケアを案内できる", "折りたたみ収納しやすい家庭用候補", "上位機ほど複雑な機能が不要な人に向く"],
    goodFor: "予算を抑えつつ、髪へのやさしさも少し欲しい人",
    caution: "大風量最優先ならMONSTERやTESCOM大風量機も比較する"
  },
  {
    id: "tescom_td570a",
    maker: "TESCOM",
    name: "プロテクトイオンヘアードライヤー TD570A",
    modelNumber: "TD570A",
    productType: "大風量軽量コスパモデル",
    priceBand: "低価格帯",
    tags: ["quick-dry", "high-airflow", "lightweight", "price-focused", "ion-care", "easy-clean", "simple"],
    strengths: ["2.3m3/分クラスの大風量で速乾を提案しやすい", "本体のみ約435gクラスで扱いやすい", "プロテクトイオンと掃除しやすい吸込口を訴求できる"],
    goodFor: "低価格帯で軽くて早く乾くドライヤーを探している人",
    caution: "1300Wクラスのため使用場所の電源環境を確認する"
  },
  {
    id: "koizumi_khd_9240_h",
    maker: "KOIZUMI",
    name: "KOIZUMI ドライヤー KHD-9240-H",
    modelNumber: "KHD9240H / KHD-9240-H",
    productType: "大風量バランスモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "ion-care", "price-balance", "easy-clean"],
    strengths: ["KOIZUMIの大風量系として価格と速乾を説明しやすい", "シンプル操作で家族利用に向く", "MONSTER上位より予算を抑えたい人に提案しやすい"],
    goodFor: "価格と乾きやすさのバランスを重視する人",
    caution: "MONSTER系か通常大風量系か、正式シリーズ名を確認する"
  },
  {
    id: "koizumi_khd_m800_a",
    maker: "KOIZUMI",
    name: "KOIZUMI ドライヤー KHD-M800-A",
    modelNumber: "KHDM800A / KHD-M800-A",
    productType: "高機能速乾モデル",
    priceBand: "高価格帯",
    tags: ["quick-dry", "high-airflow", "ion-care", "high-function", "low-temperature", "design"],
    strengths: ["KOIZUMIの高機能系として速乾とモードを比較しやすい", "デザインと機能を両方見たい人に案内できる", "中価格帯から少し上げた候補として提案しやすい"],
    goodFor: "KOIZUMIで機能性を重視し、乾かし方を調整したい人",
    caution: "正式シリーズ、風量、重量、JANを確認する"
  },
  {
    id: "maxzen_mxdr700a_gy",
    maker: "MAXZEN",
    name: "MAXZEN ドライヤー MXDR700A-GY",
    modelNumber: "MXDR700AGY / MXDR700A-GY",
    productType: "低価格大風量モデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "quick-dry", "high-airflow", "simple", "compact"],
    strengths: ["価格を抑えた速乾候補として提案しやすい", "細かな美容機能より基本性能を重視する人に向く", "一人暮らしや買い替え需要に案内しやすい"],
    goodFor: "なるべく安く、日常的にしっかり乾かせるものが欲しい人",
    caution: "正式メーカー表記、風量、重量、保証条件を確認する"
  },
  {
    id: "tescom_td760a",
    maker: "TESCOM",
    name: "マイナスイオンヘアドライヤー TD760A",
    modelNumber: "TD760A",
    productType: "軽量静音I字型モデル",
    priceBand: "中価格帯",
    tags: ["lightweight", "compact", "quiet", "ion-care", "low-temperature", "price-balance"],
    strengths: ["高速ブラシレスDCモーターで軽さと風圧を両立しやすい", "I字型で収納しやすく毎日扱いやすい", "AUTOモードで温風と冷風を自動切替できる"],
    goodFor: "軽さ、静かさ、収納性を重視して毎日使いたい人",
    caution: "風量数値だけでなく風圧感や音を店頭で確認する"
  },
  {
    id: "salonia_sl013gr",
    maker: "SALONIA",
    name: "SALONIA スピーディーイオンドライヤー グレー",
    modelNumber: "SL013GR / SL-013GR",
    productType: "低価格シンプル速乾モデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "quick-dry", "simple", "compact", "ion-care", "design"],
    strengths: ["低価格帯でデザインと速乾を両立して提案しやすい", "一人暮らしや買い替え需要に向く", "シンプルな操作性を説明しやすい"],
    goodFor: "価格を抑えつつ、見た目も悪くないドライヤーが欲しい人",
    caution: "上位SALONIAとの風量、重さ、ケア機能差を確認する"
  },
  {
    id: "koizumi_khd_9330",
    maker: "KOIZUMI",
    name: "KOIZUMI ドライヤー KHD-9330",
    modelNumber: "KHD9330 / KHD-9330",
    productType: "大風量スタンダードモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "price-balance", "ion-care", "simple"],
    strengths: ["KOIZUMIの速乾系スタンダードとして提案しやすい", "家族で使う日常機として比較しやすい", "価格と風量のバランスを案内できる"],
    goodFor: "複雑な美容機能より、乾きやすさと価格を重視する人",
    caution: "KHD-9240やKHD-W990とのシリーズ差を確認する"
  },
  {
    id: "tescom_td260b",
    maker: "TESCOM",
    name: "TESCOM ヘアードライヤー TD260B",
    modelNumber: "TD260B",
    productType: "低価格コンパクトモデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact", "lightweight", "simple"],
    strengths: ["本体価格を抑えたシンプル候補として案内しやすい", "軽めで扱いやすく短髪や一人暮らしにも向く", "複雑なモードが不要な人に提案できる"],
    goodFor: "最低限の機能でよく、価格と扱いやすさを重視する人",
    caution: "速乾やヘアケアを求める場合は上位機を比較する"
  },
  {
    id: "lavil_hdr_m201",
    maker: "LAVIEL",
    name: "LAVIEL ドライヤー HDR-M201",
    modelNumber: "HDRM201 / HDR-M201",
    productType: "デザイン系バランスモデル",
    priceBand: "中価格帯",
    tags: ["price-balance", "hair-care", "compact", "design", "ion-care"],
    strengths: ["デザインと価格のバランス候補として案内しやすい", "シンプルな美容家電として比較できる", "一人暮らしやプレゼントにも話しやすい"],
    goodFor: "価格を抑えつつ、見た目と髪ケア感も少し欲しい人",
    caution: "正式メーカー表記、風量、重量、JANを確認する"
  },
  {
    id: "tescom_td561a",
    maker: "TESCOM",
    name: "プロテクトイオンヘアードライヤー TD561A",
    modelNumber: "TD561A",
    productType: "低価格大風量モデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "quick-dry", "high-airflow", "ion-care", "easy-clean", "simple"],
    strengths: ["低価格帯で速乾とイオンケアを提案しやすい", "シンプルな家族用ドライヤーとして案内できる", "吸込口のお手入れしやすさも確認しやすい"],
    goodFor: "価格を抑えながら、そこそこ早く乾くものが欲しい人",
    caution: "TD570AやTD565Aとの風量、重さ、価格差を確認する"
  },
  {
    id: "panasonic_ionity_eh_ne4k",
    maker: "Panasonic",
    name: "ヘアードライヤー イオニティ EH-NE4K",
    modelNumber: "EHNE4K / EH-NE4K",
    productType: "イオニティ低価格モデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "ion-care", "simple", "compact"],
    strengths: ["Panasonic指名で価格を抑えたい人に提案しやすい", "マイナスイオン付きのシンプル候補として比較できる", "折りたたみ収納しやすい家庭用候補"],
    goodFor: "メーカー安心感と価格のバランスを重視する人",
    caution: "速乾や温冷ケア重視ならEH-NE7N以上も比較する"
  },
  {
    id: "panasonic_ionity_eh_ne2k",
    maker: "Panasonic",
    name: "ヘアードライヤー イオニティ EH-NE2K",
    modelNumber: "EHNE2K / EH-NE2K",
    productType: "イオニティエントリーモデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "ion-care", "simple", "compact", "lightweight"],
    strengths: ["Panasonicの低価格エントリーとして案内しやすい", "シンプルな日常用、短髪、一人暮らしに向く", "マイナスイオン付きで最低限の髪ケア感を説明できる"],
    goodFor: "とにかく価格を抑えつつ、メーカー品を選びたい人",
    caution: "毛量が多い人や家族利用では風量上位機を比較する"
  },
  {
    id: "lavil_hdr_m101",
    maker: "LAVIEL",
    name: "LAVIEL ドライヤー HDR-M101",
    modelNumber: "HDRM101 / HDR-M101",
    productType: "低価格デザインモデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact", "simple", "design"],
    strengths: ["低価格でデザインも見たい人に案内しやすい", "一人暮らしやサブ機として提案できる", "難しい機能が不要な人に向く"],
    goodFor: "基本機能と見た目を重視し、価格を抑えたい人",
    caution: "風量、イオン機能、保証条件を確認する"
  },
  {
    id: "tescom_td620a",
    maker: "TESCOM",
    name: "プロテクトイオンヘアードライヤー TD620A",
    modelNumber: "TD620A",
    productType: "大風量ヘアケアモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "ion-care", "price-balance", "easy-clean"],
    strengths: ["大風量とプロテクトイオンを中価格帯で提案しやすい", "家族利用や毛量多めにも比較候補にできる", "お手入れしやすさも確認しやすい"],
    goodFor: "TESCOMで速乾と髪のまとまりをバランスよく見たい人",
    caution: "TD570A、TD565Aとの違いを店頭で確認する"
  },
  {
    id: "sharp_dimple_flow_ib_p300",
    maker: "SHARP",
    name: "Dimple flow dryer IB-P300",
    modelNumber: "IBP300 / IB-P300",
    productType: "超大風量シンプル速乾モデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "lightweight", "simple", "price-balance"],
    strengths: ["約4.8m3/分クラスの大風量で速乾を強く訴求できる", "大風量ながら扱いやすい重量感を説明しやすい", "TURBO、SET、COLDのシンプル操作"],
    goodFor: "複雑なモードより早く乾くことを重視したい人",
    caution: "髪ケアモードを細かく使いたい場合はIB-P802/602も比較する"
  },
  {
    id: "mods_hair_mhd_1234",
    maker: "mod's hair",
    name: "mod's hair ドライヤー MHD-1234",
    modelNumber: "MHD1234 / MHD-1234",
    productType: "コンパクトデザインモデル",
    priceBand: "中価格帯",
    tags: ["compact", "design", "price-balance", "simple", "lightweight"],
    strengths: ["デザインと収納性を重視する人に案内しやすい", "シンプルな日常用として比較できる", "旅行や洗面台収納のヒアリングにつなげやすい"],
    goodFor: "大きすぎない本体で、デザインも重視したい人",
    caution: "海外対応有無、風量、折りたたみ可否、JANを確認する"
  },
  {
    id: "koizumi_kdd_0020_n",
    maker: "KOIZUMI",
    name: "KOIZUMI ドライヤー KDD-0020-N",
    modelNumber: "KDD0020N / KDD-0020-N",
    productType: "携帯・旅行向けコンパクトモデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact", "travel", "simple", "lightweight"],
    strengths: ["旅行や出張用、サブ機として提案しやすい", "コンパクトさと価格を重視する人に向く", "毎日用とは別に持ち運び需要を確認しやすい"],
    goodFor: "旅行用や予備用に小さめのドライヤーを探している人",
    caution: "海外対応、電圧、風量、持ち運び時のサイズを確認する"
  },
  {
    id: "tescom_td565a",
    maker: "TESCOM",
    name: "プロテクトイオンヘアードライヤー TD565A",
    modelNumber: "TD565A",
    productType: "低価格大風量バランスモデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "quick-dry", "high-airflow", "ion-care", "easy-clean", "simple"],
    strengths: ["低価格帯で速乾とプロテクトイオンを提案しやすい", "TD561Aより少し機能を見たい人の候補にできる", "家族用の買い替えに案内しやすい"],
    goodFor: "価格を抑えつつ、風量とイオンケアも欲しい人",
    caution: "TD570AやTD620Aとの重量、風量、価格差を確認する"
  },
  {
    id: "tescom_td105b",
    maker: "TESCOM",
    name: "TESCOM ヘアードライヤー TD105B",
    modelNumber: "TD105B",
    productType: "ミニマム低価格モデル",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact", "lightweight", "simple"],
    strengths: ["最小限の機能で価格を抑えたい人に案内しやすい", "サブ機、短髪、一人暮らし向けに提案できる", "操作がシンプルで迷いにくい"],
    goodFor: "安くてシンプルなドライヤーを探している人",
    caution: "速乾やヘアケアを重視する場合は上位TESCOMを比較する"
  },
  {
    id: "koizumi_monster_khd_9802_w",
    maker: "KOIZUMI",
    name: "MONSTER ダブルファンドライヤー KHD-9802-W",
    modelNumber: "KHD9802W / KHD-9802-W",
    productType: "大風量速乾パワーモデル",
    priceBand: "中価格帯",
    tags: ["quick-dry", "high-airflow", "ion-care", "scalp-care", "high-function", "low-temperature"],
    strengths: ["MONSTER系の大風量で乾燥時間短縮を提案しやすい", "白系カラーで洗面台に合わせやすい", "毛量多めや家族利用の候補にしやすい"],
    goodFor: "とにかく早く乾かしたいが、白系の本体色も重視する人",
    caution: "KHD-W990やKHD-9330との世代、重量、風量差を確認する"
  }
];

const dryerProducts = dryerInventory.map((item) => ({
  id: item.id,
  jan: [`JAN未確認-${item.modelNumber.split(" / ")[0].toLowerCase()}`],
  category: "hair-dryer",
  maker: item.maker,
  name: item.name,
  modelNumber: item.modelNumber,
  productType: item.productType,
  priceBand: item.priceBand,
  tags: item.tags,
  features: item.strengths,
  goodFor: item.goodFor,
  caution: `${item.caution} JANは実運用前に確認してください。`,
  hearingTips: ["髪の長さと毛量を確認する", "速乾、髪ケア、軽さ、価格の優先順位を確認する", "置き場所、重さ、海外対応の要否を確認する"],
  comparePoints: ["速乾", "髪ケア", "軽さ/収納", "価格帯"],
  talk: `${item.name}は、${item.goodFor}に提案しやすい候補です。${item.strengths[0]}`,
  lastUpdated: "2026-07-05"
}));

const earphoneSpecsById = {
  soundcore_liberty_5_pro: {
    formFactor: "要確認",
    anc: "要確認",
    ambientMode: "要確認",
    codecs: ["要確認"],
    spatialAudio: "要確認",
    multipoint: "要確認",
    waterResistance: "要確認",
    batterySingle: "要確認",
    batteryTotal: "要確認",
    weightEach: "要確認",
    wirelessCharging: "要確認",
    appSupport: "要確認",
    callFeatures: ["要確認"],
    notes: "日本公式ページで正式仕様を確認できていないため、販売可否、JAN、型番、機能を商品マスターで確認する。",
    sourceStatus: "要確認"
  },
  soundcore_liberty_5: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC"],
    spatialAudio: true,
    multipoint: "要確認",
    waterResistance: "IP55",
    batterySingle: 12,
    batteryTotal: 48,
    weightEach: "要確認",
    wirelessCharging: "要確認",
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "LDACやDolby Audioは対応端末とアプリ設定を確認する。",
    sourceStatus: "公式確認"
  },
  soundcore_liberty_4_pro: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC"],
    spatialAudio: true,
    multipoint: true,
    waterResistance: "IP55",
    batterySingle: 10,
    batteryTotal: 40,
    weightEach: "要確認",
    wirelessCharging: true,
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "スクリーン付きケースで本体操作を補助できる。",
    sourceStatus: "公式確認"
  },
  soundcore_liberty_4: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC"],
    spatialAudio: true,
    multipoint: "要確認",
    waterResistance: "IPX4",
    batterySingle: 9,
    batteryTotal: 28,
    weightEach: "要確認",
    wirelessCharging: "要確認",
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "3Dオーディオとヘルスモニタリングは利用端末とアプリ設定を確認する。",
    sourceStatus: "公式確認"
  },
  soundcore_sleep_a20: {
    formFactor: "睡眠特化型",
    anc: false,
    ambientMode: false,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: false,
    waterResistance: "IPX4",
    batterySingle: 10,
    batteryTotal: 55,
    weightEach: 3,
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["マイク非搭載"],
    notes: "睡眠モードは最大14時間。ANCとマイクは非搭載。",
    sourceStatus: "公式確認"
  },
  soundcore_c50i: {
    formFactor: "要確認",
    anc: "要確認",
    ambientMode: "要確認",
    codecs: ["要確認"],
    spatialAudio: "要確認",
    multipoint: "要確認",
    waterResistance: "要確認",
    batterySingle: "要確認",
    batteryTotal: "要確認",
    weightEach: "要確認",
    wirelessCharging: "要確認",
    appSupport: "要確認",
    callFeatures: ["要確認"],
    notes: "国内公式の詳細仕様を確認できていないため、イヤーカフ型として扱う前に正式仕様を確認する。",
    sourceStatus: "要確認"
  },
  soundcore_c40i: {
    formFactor: "イヤーカフ型",
    anc: false,
    ambientMode: false,
    codecs: ["SBC", "AAC"],
    spatialAudio: true,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 7,
    batteryTotal: 21,
    weightEach: "要確認",
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "オープンイヤーのため騒音環境での没入感と音漏れを店頭で確認する。",
    sourceStatus: "公式確認"
  },
  soundcore_aeroclip: {
    formFactor: "イヤーカフ型",
    anc: false,
    ambientMode: false,
    codecs: ["SBC", "AAC", "LDAC"],
    spatialAudio: false,
    multipoint: true,
    waterResistance: "IP55",
    batterySingle: 8,
    batteryTotal: 32,
    weightEach: "要確認",
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "オープンイヤー型でLDACを使う場合はAndroid端末とアプリ設定を確認する。",
    sourceStatus: "公式確認"
  },
  soundcore_liberty_buds: {
    formFactor: "要確認",
    anc: "要確認",
    ambientMode: "要確認",
    codecs: ["要確認"],
    spatialAudio: "要確認",
    multipoint: "要確認",
    waterResistance: "要確認",
    batterySingle: "要確認",
    batteryTotal: "要確認",
    weightEach: "要確認",
    wirelessCharging: "要確認",
    appSupport: "要確認",
    callFeatures: ["要確認"],
    notes: "同名の日本公式商品を確認できていないため、箱または商品ページの正式型番を確認する。",
    sourceStatus: "要確認"
  },
  soundcore_p40i: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: true,
    waterResistance: "IPX5",
    batterySingle: 12,
    batteryTotal: 60,
    weightEach: "要確認",
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "LDAC非対応。低音と長時間再生を価格帯の強みにする。",
    sourceStatus: "公式確認"
  },
  soundcore_k20i_a3994n21: {
    formFactor: "インナーイヤー型",
    anc: false,
    ambientMode: false,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: false,
    waterResistance: "IPX5",
    batterySingle: 6,
    batteryTotal: 36,
    weightEach: 3.3,
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "カナル型の圧迫感が苦手な人向け。ANCは非搭載。",
    sourceStatus: "公式確認"
  },
  victor_ha_fx150t: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: false,
    waterResistance: "IPX4",
    batterySingle: 7.5,
    batteryTotal: 21,
    weightEach: 4.4,
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "LDAC非対応。Victor Studioチューニングを音質訴求の中心にする。",
    sourceStatus: "公式確認"
  },
  victor_ha_a22t: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: false,
    waterResistance: "IPX4",
    batterySingle: "要確認",
    batteryTotal: 26,
    weightEach: "要確認",
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "小さい耳向けのXSイヤーピースとデザインを訴求する。",
    sourceStatus: "公式確認"
  },
  victor_ha_np1t: {
    formFactor: "イヤーカフ型",
    anc: false,
    ambientMode: false,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: false,
    waterResistance: "IPX4",
    batterySingle: 8,
    batteryTotal: 24,
    weightEach: 4.9,
    wirelessCharging: false,
    appSupport: false,
    callFeatures: ["通話対応"],
    notes: "オープンイヤー型のため、ANCや密閉感ではなく装着感とデザインで提案する。",
    sourceStatus: "公式確認"
  },
  victor_ha_a110t: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC"],
    spatialAudio: false,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 11,
    batteryTotal: 44,
    weightEach: "要確認",
    wirelessCharging: true,
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "ANCオン時は最大34時間目安。LDACと長時間再生を両立する上位候補。",
    sourceStatus: "公式確認"
  },
  sony_wf_1000xm6: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC", "LC3"],
    spatialAudio: true,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 8,
    batteryTotal: 24,
    weightEach: "要確認",
    wirelessCharging: true,
    appSupport: true,
    callFeatures: ["AI通話ノイズ低減"],
    notes: "最上位ANCとLDACを基準に比較する。重量は公式発表値の確認が必要。",
    sourceStatus: "公式確認"
  },
  sony_linkbuds_fit_wf_ls910n: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC", "LC3"],
    spatialAudio: true,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 5.5,
    batteryTotal: 21,
    weightEach: 4.9,
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "フィットサポーターによる装着安定性を重視する人向け。",
    sourceStatus: "公式確認"
  },
  sony_linkbuds_s_wf_ls900n: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC", "LC3"],
    spatialAudio: true,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 6,
    batteryTotal: 20,
    weightEach: 4.8,
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "小型軽量のANC機として、LinkBuds FitやWF-C710Nと比較する。",
    sourceStatus: "公式確認"
  },
  sony_wf_c710n: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 8.5,
    batteryTotal: 30,
    weightEach: "要確認",
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["通話ノイズ低減"],
    notes: "LDAC非対応。SONYのANCを中価格帯で選びたい人向け。",
    sourceStatus: "公式確認"
  },
  sony_wf_c510: {
    formFactor: "カナル型",
    anc: false,
    ambientMode: true,
    codecs: ["SBC", "AAC"],
    spatialAudio: false,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 11,
    batteryTotal: 22,
    weightEach: 4.6,
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["通話対応"],
    notes: "ANC非搭載。価格、軽さ、外音取り込みを重視する入門候補。",
    sourceStatus: "公式確認"
  },
  technics_eah_az100: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC", "LC3"],
    spatialAudio: true,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 10,
    batteryTotal: 28,
    weightEach: 5.9,
    wirelessCharging: true,
    appSupport: true,
    callFeatures: ["Voice Focus AI"],
    notes: "3台マルチポイント、Dolby Atmos、磁性流体ドライバーを上位差別化にする。",
    sourceStatus: "公式確認"
  },
  technics_eah_az40m2: {
    formFactor: "カナル型",
    anc: true,
    ambientMode: true,
    codecs: ["SBC", "AAC", "LDAC"],
    spatialAudio: false,
    multipoint: true,
    waterResistance: "IPX4",
    batterySingle: 5.5,
    batteryTotal: 18,
    weightEach: "要確認",
    wirelessCharging: false,
    appSupport: true,
    callFeatures: ["ビームフォーミング通話"],
    notes: "小型でTechnics音質を選びたい人向け。電池持ちはAZ100より短め。",
    sourceStatus: "公式確認"
  }
};

const products = [
  {
    id: "canon_pixus_ts3730",
    jan: ["JAN未確認-pixusts3730"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS TS3730",
    modelNumber: "PIXUSTS3730 / TS3730",
    productType: "A4シンプル複合機",
    priceBand: "低価格帯",
    tags: ["price-focused", "simple", "document", "copy-scan", "wifi", "smartphone-print", "compact", "easy-use"],
    features: ["プリント、コピー、スキャンの基本機能を押さえた入門機", "Wi-Fiとスマホ印刷を使えるシンプルモデル", "本体価格を抑えてたまに印刷する用途に提案しやすい"],
    goodFor: "年賀状、学校書類、Webページなどを時々印刷できればよい人",
    caution: "大量印刷やインク代重視なら大容量インクモデルも比較する",
    hearingTips: ["毎月の印刷枚数を確認する", "写真画質をどこまで求めるか確認する", "両面印刷やADFが必要か確認する"],
    comparePoints: ["本体価格", "基本機能", "スマホ印刷", "インク方式"],
    talk: "たまに印刷できれば十分という方には、TS3730は本体価格を抑えたシンプルな候補として案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_pixus_ts6630",
    jan: ["JAN未確認-pixusts6630"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS TS6630",
    modelNumber: "PIXUSTS6630 / TS6630",
    productType: "A4標準複合機",
    priceBand: "中価格帯",
    tags: ["price-balance", "document", "copy-scan", "pigment-black", "auto-duplex", "wifi", "smartphone-print", "compact", "easy-use"],
    features: ["文書も写真も日常使いしやすいA4標準複合機", "自動両面印刷やスマホ印刷を確認しやすい", "文字印刷を重視する家庭用として提案しやすい"],
    goodFor: "家庭の書類、学習プリント、スマホ写真をバランスよく印刷したい人",
    caution: "写真画質最優先なら6色系、印刷量が多いならGシリーズも比較する",
    hearingTips: ["両面印刷を使うか確認する", "写真の頻度を確認する", "インク代への不安を確認する"],
    comparePoints: ["自動両面", "文書印刷", "スマホ連携", "価格帯"],
    talk: "家庭で一通り使いやすい機種を探している方には、TS6630は価格と機能のバランスで提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_pixus_ts5530",
    jan: ["JAN未確認-pixusts5530"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS TS5530",
    modelNumber: "PIXUSTS5530 / TS5530",
    productType: "A4コンパクト複合機",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact", "document", "copy-scan", "wifi", "smartphone-print", "simple", "easy-use"],
    features: ["家庭内に置きやすいコンパクトなA4複合機", "スマホからの印刷やコピー、スキャンを日常使いできる", "上位機ほどの機能は不要な人に提案しやすい"],
    goodFor: "置き場所と本体価格を抑えつつ、家庭用の基本機能が欲しい人",
    caution: "印刷頻度が高い場合は独立インクや大容量インクの候補も比較する",
    hearingTips: ["置き場所の奥行きを確認する", "年賀状や写真をどれくらい印刷するか確認する", "本体価格とインク代のどちらを重視するか確認する"],
    comparePoints: ["コンパクト", "価格帯", "スマホ印刷", "基本機能"],
    talk: "設置スペースや予算を抑えたい方には、TS5530は家庭用の基本候補として話しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_pixus_ts7630",
    jan: ["JAN未確認-pixusts7630"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS TS7630",
    modelNumber: "PIXUSTS7630 / TS7630",
    productType: "A4写真・文書バランス複合機",
    priceBand: "中価格帯",
    tags: ["price-balance", "photo-quality", "document", "copy-scan", "independent-ink", "auto-duplex", "wifi", "smartphone-print", "compact"],
    features: ["写真と文書をバランスよく使える中位モデル", "独立インク系として色ごとの交換を説明しやすい", "自動両面やスマホ印刷など日常機能を押さえやすい"],
    goodFor: "写真も文書もそこそこきれいに印刷したい家庭",
    caution: "写真品質の上位感を求める場合はTS8830やXK系も比較する",
    hearingTips: ["写真と文書の比率を確認する", "インク交換の分かりやすさを確認する", "本体サイズを確認する"],
    comparePoints: ["写真品質", "独立インク", "自動両面", "価格帯"],
    talk: "写真も書類もどちらも使う方には、TS7630は中間の候補として比較に入れやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_pixus_ts8830",
    jan: ["JAN未確認-pixusts8830"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS TS8830",
    modelNumber: "PIXUSTS8830 / TS8830",
    productType: "A4写真高画質複合機",
    priceBand: "高価格帯",
    tags: ["photo-quality", "six-color", "premium-photo", "document", "copy-scan", "independent-ink", "auto-duplex", "wifi", "smartphone-print", "premium", "high-function"],
    features: ["6色系の写真画質を重視したPIXUS上位モデル", "大きめの操作パネルや自動両面など使い勝手を説明しやすい", "写真、年賀状、文書を1台で高めにまとめたい人向け"],
    goodFor: "スマホ写真や年賀状をきれいに印刷し、操作性も重視したい人",
    caution: "印刷枚数が多い場合はXK系やGシリーズのランニングコストも比較する",
    hearingTips: ["写真品質へのこだわりを確認する", "年賀状印刷の頻度を確認する", "インク代重視か画質重視か確認する"],
    comparePoints: ["6色インク", "写真品質", "操作性", "自動両面"],
    talk: "写真をきれいに残したい方には、TS8830はPIXUSの写真画質を前面に出して提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_pixus_xk140",
    jan: ["JAN未確認-pixusxk140"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS XK140",
    modelNumber: "PIXUSXK140 / XK140",
    productType: "低ランニングコスト写真複合機",
    priceBand: "高価格帯",
    tags: ["low-running-cost", "photo-quality", "premium-photo", "document", "copy-scan", "independent-ink", "auto-duplex", "wifi", "smartphone-print", "premium", "high-function"],
    features: ["XKシリーズらしく写真品質とランニングコストの両立を訴求しやすい", "家庭の写真、年賀状、文書を高めの品質で使いやすい", "本体価格よりインク代を意識する人に提案しやすい"],
    goodFor: "写真も文書も印刷頻度があり、インク代も気になる人",
    caution: "本体価格が上がるため、年間印刷量を確認して納得感を作る",
    hearingTips: ["月の印刷枚数を確認する", "写真印刷の頻度を確認する", "本体価格とインク代の考え方を確認する"],
    comparePoints: ["ランニングコスト", "写真品質", "自動両面", "本体価格"],
    talk: "本体は少し上がってもインク代まで見たい方には、XK140を比較に入れると話がしやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_pixus_xk510",
    jan: ["JAN未確認-pixusxk510"],
    category: "printer",
    maker: "Canon",
    name: "PIXUS XK510",
    modelNumber: "PIXUSXK510 / XK510",
    productType: "写真高画質・低コスト上位複合機",
    priceBand: "プレミアム価格帯",
    tags: ["low-running-cost", "photo-quality", "six-color", "premium-photo", "document", "copy-scan", "independent-ink", "auto-duplex", "wifi", "smartphone-print", "premium", "high-function"],
    features: ["XKシリーズ上位として写真画質と低ランニングコストを両立しやすい", "写真や作品印刷をよく使う家庭に提案しやすい", "画質重視でもインク代を抑えたい人向け"],
    goodFor: "写真印刷が多く、長く使う前提でランニングコストも重視したい人",
    caution: "A3やFAXは別カテゴリの機種と比較する",
    hearingTips: ["写真印刷枚数を確認する", "作品やアルバム用途か確認する", "A4までで足りるか確認する"],
    comparePoints: ["写真品質", "低コスト", "上位機能", "A4まで"],
    talk: "写真をよく印刷する方には、XK510は画質とインク代をセットで話せる上位候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "canon_g3390",
    jan: ["JAN未確認-g3390"],
    category: "printer",
    maker: "Canon",
    name: "G3390",
    modelNumber: "G3390",
    productType: "大容量インクA4複合機",
    priceBand: "高価格帯",
    tags: ["low-running-cost", "tank-ink", "high-volume", "document", "copy-scan", "pigment-black", "wifi", "smartphone-print", "business", "price-balance"],
    features: ["大容量インクで印刷コストを抑えたい人に提案しやすい", "文書、教材、家庭内の大量印刷向け", "プリント、コピー、スキャンをまとめて使える"],
    goodFor: "学習プリントや資料を多く印刷し、インク代を強く抑えたい人",
    caution: "写真画質最優先ならPIXUS写真系も比較する",
    hearingTips: ["毎月の印刷枚数を確認する", "写真より文書中心か確認する", "本体価格が上がってもよいか確認する"],
    comparePoints: ["大容量インク", "印刷コスト", "文書", "写真品質"],
    talk: "印刷枚数が多い方には、G3390のような大容量インクモデルを見せるとインク代の不安を解消しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ew_056a",
    jan: ["JAN未確認-ew056a"],
    category: "printer",
    maker: "Epson",
    name: "EW-056A",
    modelNumber: "EW056A / EW-056A",
    productType: "A4シンプル複合機",
    priceBand: "低価格帯",
    tags: ["price-focused", "simple", "document", "copy-scan", "pigment-black", "wifi", "smartphone-print", "compact", "easy-use"],
    features: ["A4カラー、プリント、コピー、スキャンに対応したシンプルモデル", "無線LANとスマホ印刷に対応", "顔料ブラックで文書をくっきり印刷しやすい"],
    goodFor: "本体価格と置き場所を抑え、文書やスマホ写真を時々印刷したい人",
    caution: "L判写真の印刷速度やコストを重視する場合は上位機も比較する",
    hearingTips: ["コピーやスキャンを使う頻度を確認する", "写真品質へのこだわりを確認する", "自動両面印刷が必要か確認する"],
    comparePoints: ["本体価格", "無線LAN", "顔料ブラック", "コンパクト"],
    talk: "必要な基本機能を小さくまとめたい方には、EW-056Aは価格を抑えた入口として案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "brother_dcp_j929n",
    jan: ["JAN未確認-dcpj929n"],
    category: "printer",
    maker: "Brother",
    name: "DCP-J929N",
    modelNumber: "DCPJ929N / DCP-J929N",
    productType: "A4スタンダード複合機",
    priceBand: "中価格帯",
    tags: ["price-balance", "document", "copy-scan", "pigment-black", "adf", "auto-duplex", "wifi", "smartphone-print", "independent-ink", "compact"],
    features: ["A4プリント、コピー、スキャンの標準機能をバランスよく搭載", "ADFで複数枚の書類スキャンを案内しやすい", "スマホアプリからの印刷や4色インクを訴求しやすい"],
    goodFor: "家庭の書類、学校プリント、コピーやスキャンを便利に使いたい人",
    caution: "FAXが必要な場合はMFC系、A3が必要な場合はA3対応機を比較する",
    hearingTips: ["複数枚コピーやスキャンがあるか確認する", "FAXの要否を確認する", "写真と文書の比率を確認する"],
    comparePoints: ["ADF", "4色インク", "スマホ印刷", "自動両面"],
    talk: "コピーやスキャンもよく使う方には、DCP-J929Nは家庭用の標準候補として提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_px_s170t",
    jan: ["JAN未確認-pxs170t"],
    category: "printer",
    maker: "Epson",
    name: "PX-S170T",
    modelNumber: "PXS170T / PX-S170T",
    productType: "A4大容量インクビジネスプリンター",
    priceBand: "高価格帯",
    tags: ["low-running-cost", "tank-ink", "high-volume", "business", "document", "pigment-black", "fast-print", "wifi", "wired-lan"],
    features: ["大容量インクで文書印刷のランニングコストを抑えたい用途向け", "資料や帳票など、枚数が多い文書印刷を想定しやすい", "家庭よりも在宅ワーク、小規模事務所の印刷量に合わせて提案しやすい"],
    goodFor: "コピーや写真より、A4文書をたくさん印刷する人",
    caution: "コピー、スキャン、FAXの要否と正式な販売仕様を必ず確認する",
    hearingTips: ["単機能プリンターで足りるか確認する", "月間印刷枚数を確認する", "カラー印刷が必要か確認する"],
    comparePoints: ["大容量インク", "文書印刷", "ランニングコスト", "単機能/複合機"],
    talk: "文書をたくさん刷る方には、PX-S170Tのような大容量インク機を見せると、インク代の話がしやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "brother_dcp_j1270n",
    jan: ["JAN未確認-dcpj1270n"],
    category: "printer",
    maker: "Brother",
    name: "DCP-J1270N",
    modelNumber: "DCPJ1270N / DCP-J1270N",
    productType: "A4標準複合機",
    priceBand: "中価格帯",
    tags: ["price-balance", "document", "copy-scan", "pigment-black", "auto-duplex", "wifi", "smartphone-print", "independent-ink", "compact"],
    features: ["家庭用の文書、写真、コピー、スキャンを1台で使いやすい", "スマホ印刷や無線LANを確認しやすい", "自動両面や独立インクを重視する人の比較候補にしやすい"],
    goodFor: "家庭で一通り使えるA4複合機を、価格と機能のバランスで選びたい人",
    caution: "ADFやFAXが必要ならDCP-J929NやMFC系も比較する",
    hearingTips: ["両面印刷を使うか確認する", "複数枚スキャンの必要性を確認する", "インク交換の考え方を確認する"],
    comparePoints: ["自動両面", "スマホ印刷", "独立インク", "価格帯"],
    talk: "家庭用で基本機能をまとめたい方には、DCP-J1270Nはバランス型として案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ew_456a",
    jan: ["JAN未確認-ew456a"],
    category: "printer",
    maker: "Epson",
    name: "EW-456A",
    modelNumber: "EW456A / EW-456A",
    productType: "A4標準複合機",
    priceBand: "中価格帯",
    tags: ["price-balance", "document", "copy-scan", "pigment-black", "auto-duplex", "wifi", "smartphone-print", "compact", "easy-use"],
    features: ["A4カラー、コピー、スキャンを日常使いしやすい標準モデル", "自動両面印刷を確認したい家庭に提案しやすい", "無線LANとスマホ印刷に対応"],
    goodFor: "学校書類やWebページをよく印刷し、両面印刷も使いたい家庭",
    caution: "写真を多く印刷する場合は6色インクのEP系も比較する",
    hearingTips: ["自動両面を使うか確認する", "写真印刷の頻度を確認する", "本体サイズの置き場所を確認する"],
    comparePoints: ["自動両面", "文書印刷", "無線LAN", "価格帯"],
    talk: "EW-456Aは、シンプル機より便利に、でも上位写真機までは不要という方にちょうど話しやすい候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "brother_dcp_j529n",
    jan: ["JAN未確認-dcpj529n"],
    category: "printer",
    maker: "Brother",
    name: "DCP-J529N",
    modelNumber: "DCPJ529N / DCP-J529N",
    productType: "A4シンプル複合機",
    priceBand: "低価格帯",
    tags: ["price-focused", "simple", "document", "copy-scan", "pigment-black", "wifi", "smartphone-print", "independent-ink", "compact", "easy-use"],
    features: ["A4のプリント、コピー、スキャンを押さえたベーシック複合機", "スマホ印刷と無線LANを使える家庭向け候補", "本体価格を抑えながら独立インク系を比較しやすい"],
    goodFor: "たまに文書や写真を印刷し、難しい機能は不要な人",
    caution: "ADFやFAX、A3が必要な場合は別機種を提案する",
    hearingTips: ["印刷頻度を確認する", "複数枚コピーやスキャンの有無を確認する", "電話/FAXが必要か確認する"],
    comparePoints: ["価格帯", "基本機能", "独立インク", "スマホ印刷"],
    talk: "まず安くシンプルに使いたい方には、DCP-J529Nは基本候補として出しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ep_717a",
    jan: ["JAN未確認-ep717a"],
    category: "printer",
    maker: "Epson",
    name: "EP-717A",
    modelNumber: "EP717A / EP-717A",
    productType: "A4写真複合機",
    priceBand: "中価格帯",
    tags: ["photo-quality", "six-color", "document", "copy-scan", "wifi", "smartphone-print", "compact", "price-balance"],
    features: ["6色インクで写真をきれいに印刷しやすいカラリオ", "A4プリント、コピー、スキャンを1台で使える", "写真画質を重視しつつ価格も抑えたい人に提案しやすい"],
    goodFor: "スマホ写真、年賀状、家庭文書をバランスよく印刷したい人",
    caution: "自動両面や操作性を重視する場合はEP-817AやEP-887Aも比較する",
    hearingTips: ["写真印刷の頻度を確認する", "自動両面が必要か確認する", "設置場所の幅を確認する"],
    comparePoints: ["6色インク", "写真品質", "コピー/スキャン", "価格帯"],
    talk: "写真もきれいに印刷したいけれど価格も見たい方には、EP-717Aを中間候補として案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ep_m476t",
    jan: ["JAN未確認-epm476t"],
    category: "printer",
    maker: "Epson",
    name: "EP-M476T",
    modelNumber: "EPM476T / EP-M476T",
    productType: "A4エコタンク複合機",
    priceBand: "高価格帯",
    tags: ["low-running-cost", "tank-ink", "high-volume", "document", "copy-scan", "wifi", "smartphone-print", "price-balance"],
    features: ["エコタンク搭載で印刷コストを抑えたい家庭向け", "A4文書、コピー、スキャンを大容量インクで使いやすい", "学習プリントや資料印刷が多い家庭に提案しやすい"],
    goodFor: "本体価格よりも、長く使ったときのインク代を重視する人",
    caution: "写真画質を強く求める場合はEW-M873Tなど高画質系も比較する",
    hearingTips: ["月間印刷枚数を確認する", "写真より文書中心か確認する", "本体価格とインク代の考え方を確認する"],
    comparePoints: ["エコタンク", "印刷コスト", "文書印刷", "コピー/スキャン"],
    talk: "印刷枚数が多い家庭には、EP-M476Tのエコタンクを見せるとランニングコストの納得感を作りやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ep_817a",
    jan: ["JAN未確認-ep817a"],
    category: "printer",
    maker: "Epson",
    name: "EP-817A",
    modelNumber: "EP817A / EP-817A",
    productType: "A4写真・文書バランス複合機",
    priceBand: "高価格帯",
    tags: ["photo-quality", "six-color", "premium-photo", "document", "copy-scan", "auto-duplex", "wifi", "smartphone-print", "compact", "high-function"],
    features: ["6色インクで写真印刷を重視したA4複合機", "自動両面やスマホ印刷など日常機能も押さえやすい", "写真と文書を1台で高めにまとめたい家庭向け"],
    goodFor: "年賀状やスマホ写真をきれいに印刷し、文書も便利に使いたい人",
    caution: "A3が必要な場合はEP-988A3、低コスト重視ならエコタンクも比較する",
    hearingTips: ["写真品質へのこだわりを確認する", "A4までで足りるか確認する", "印刷枚数を確認する"],
    comparePoints: ["6色インク", "自動両面", "スマホ印刷", "A4まで"],
    talk: "写真も文書も家庭でしっかり使いたい方には、EP-817Aは上位寄りのバランス候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ew_m638t",
    jan: ["JAN未確認-ewm638t"],
    category: "printer",
    maker: "Epson",
    name: "EW-M638T",
    modelNumber: "EWM638T / EW-M638T",
    productType: "A4エコタンク複合機",
    priceBand: "高価格帯",
    tags: ["low-running-cost", "tank-ink", "high-volume", "document", "copy-scan", "pigment-black", "auto-duplex", "wifi", "smartphone-print", "business"],
    features: ["エコタンク搭載でA4文書の印刷コストを抑えやすい", "顔料ブラックと自動両面を重視する家庭、在宅ワークに提案しやすい", "プリント、コピー、スキャンを低コスト運用で使える"],
    goodFor: "資料や学習プリントを毎月多めに印刷し、文書の見やすさも重視する人",
    caution: "写真の作品画質を重視する場合はEW-M873TやEP系も比較する",
    hearingTips: ["月間印刷枚数を確認する", "両面印刷の頻度を確認する", "写真画質か文書コストかを確認する"],
    comparePoints: ["エコタンク", "顔料ブラック", "自動両面", "印刷コスト"],
    talk: "文書を多く刷る家庭や在宅ワークには、EW-M638Tの低コストと自動両面を軸に提案できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ep_988a3",
    jan: ["JAN未確認-ep988a3"],
    category: "printer",
    maker: "Epson",
    name: "EP-988A3",
    modelNumber: "EP988A3 / EP-988A3",
    productType: "A3対応写真複合機",
    priceBand: "プレミアム価格帯",
    tags: ["photo-quality", "six-color", "premium-photo", "a3", "wide-format", "document", "copy-scan", "auto-duplex", "wifi", "wired-lan", "smartphone-print", "high-function", "premium"],
    features: ["ふだんはA4、ときどきA3印刷に対応", "6色インクで写真をきれいに印刷しやすい", "自動両面、有線/無線LAN、タッチパネルなど上位機能を確認しやすい"],
    goodFor: "作品、写真、学校制作物などでA3も使いたい家庭",
    caution: "A3コピーの使い方や設置スペースは店頭で確認する",
    hearingTips: ["A3をどの頻度で使うか確認する", "写真品質へのこだわりを確認する", "設置スペースを確認する"],
    comparePoints: ["A3対応", "6色インク", "自動両面", "有線/無線LAN"],
    talk: "A4中心でも時々A3を使う方には、EP-988A3は写真画質と用紙サイズを両方説明できる候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ep_887a",
    jan: ["JAN未確認-ep887a"],
    category: "printer",
    maker: "Epson",
    name: "EP-887A",
    modelNumber: "EP887A / EP-887A",
    productType: "A4写真高画質複合機",
    priceBand: "高価格帯",
    tags: ["photo-quality", "six-color", "premium-photo", "document", "copy-scan", "auto-duplex", "wifi", "smartphone-print", "compact", "high-function"],
    features: ["6色インクで写真と年賀状をきれいに印刷しやすい", "コンパクトなA4上位系として置き場所を説明しやすい", "自動両面やスマホ印刷など便利機能も案内しやすい"],
    goodFor: "A4まででよく、写真品質と使いやすさを重視したい人",
    caution: "印刷量が多い場合はエコタンク、A3が必要ならEP-988A3も比較する",
    hearingTips: ["A4までで足りるか確認する", "写真印刷枚数を確認する", "本体色や設置場所を確認する"],
    comparePoints: ["写真品質", "6色インク", "自動両面", "コンパクト"],
    talk: "A4写真をきれいに、かつ本体も大きすぎないものが良い方には、EP-887Aを上位候補にできます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ew_m757tb",
    jan: ["JAN未確認-ewm757tb"],
    category: "printer",
    maker: "Epson",
    name: "EW-M757TB",
    modelNumber: "EWM757TB / EW-M757TB",
    productType: "A4エコタンク写真・文書複合機",
    priceBand: "高価格帯",
    tags: ["low-running-cost", "tank-ink", "high-volume", "photo-quality", "document", "copy-scan", "auto-duplex", "wifi", "smartphone-print", "high-function"],
    features: ["エコタンク搭載で文書も写真も低コストに使いやすい", "A4のプリント、コピー、スキャンをまとめて運用できる", "黒系ボディ指定の型番として色確認を促しやすい"],
    goodFor: "写真も文書もそこそこ多く印刷し、インク代を抑えたい家庭",
    caution: "型番末尾の色、正式JAN、店頭取扱色を確認する",
    hearingTips: ["写真と文書の比率を確認する", "インク代重視か画質重視か確認する", "本体色の希望を確認する"],
    comparePoints: ["エコタンク", "写真/文書両用", "自動両面", "本体色"],
    talk: "写真も文書も枚数がある方には、EW-M757TBはエコタンクでインク代を抑える候補として話しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_ew_m873t",
    jan: ["JAN未確認-ewm873t"],
    category: "printer",
    maker: "Epson",
    name: "EW-M873T",
    modelNumber: "EWM873T / EW-M873T",
    productType: "A4高画質エコタンク複合機",
    priceBand: "プレミアム価格帯",
    tags: ["low-running-cost", "tank-ink", "high-volume", "photo-quality", "six-color", "premium-photo", "document", "copy-scan", "auto-duplex", "wifi", "wired-lan", "smartphone-print", "premium", "high-function"],
    features: ["6色ボトルタイプのエコタンク搭載フラッグシップモデル", "写真作品画質と低印刷コストを両立して提案しやすい", "A4文書印刷やL判写真のコスト、速度も比較軸にしやすい"],
    goodFor: "写真を多く印刷し、画質もインク代も妥協したくない人",
    caution: "A3が必要ならEP-988A3、ビジネスFAXが必要ならPX/MFC系を比較する",
    hearingTips: ["写真印刷枚数を確認する", "A4までで足りるか確認する", "本体価格と低コストの見方を説明する"],
    comparePoints: ["6色エコタンク", "写真品質", "低印刷コスト", "有線/無線LAN"],
    talk: "写真をよく印刷する方には、EW-M873Tは画質とインク代を同時に説明できる上位候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_px_m6011f",
    jan: ["JAN未確認-pxm6011f"],
    category: "printer",
    maker: "Epson",
    name: "PX-M6011F",
    modelNumber: "PXM6011F / PX-M6011F",
    productType: "A3ノビ対応ビジネス複合機",
    priceBand: "プレミアム価格帯",
    tags: ["business", "a3", "wide-format", "adf", "fax", "auto-duplex", "wired-lan", "wifi", "high-volume", "fast-print", "pigment-ink", "high-function", "premium"],
    features: ["A3ノビ対応のビジネス向け複合機として提案しやすい", "ADF、FAX、有線LANなど仕事用途の確認項目がそろう", "給紙量や印刷速度を重視する小規模オフィス向け"],
    goodFor: "A3資料、見積書、FAX、複数枚スキャンをまとめて使う事務所",
    caution: "設置スペース、給紙段数、保守条件、正式JANを必ず確認する",
    hearingTips: ["A3/A3ノビの必要性を確認する", "FAXとADFの使用頻度を確認する", "設置場所と給紙量を確認する"],
    comparePoints: ["A3ノビ", "ADF/FAX", "有線LAN", "給紙力"],
    talk: "仕事でA3やFAXまで必要な方には、PX-M6011Fは家庭用とは別枠のビジネス候補として案内できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "epson_px_m6010f",
    jan: ["JAN未確認-pxm6010f"],
    category: "printer",
    maker: "Epson",
    name: "PX-M6010F",
    modelNumber: "PXM6010F / PX-M6010F",
    productType: "A3ノビ対応ビジネス複合機",
    priceBand: "高価格帯",
    tags: ["business", "a3", "wide-format", "adf", "fax", "auto-duplex", "wired-lan", "wifi", "high-volume", "fast-print", "pigment-ink", "high-function"],
    features: ["A3ノビ対応のビジネス複合機を比較的省スペースに案内しやすい", "ADF、FAX、有線LANなど事務所機能を確認できる", "A3資料や日常文書をまとめて扱う用途に向く"],
    goodFor: "A3もFAXも必要だが、給紙量や本体価格のバランスも見たい小規模事務所",
    caution: "PX-M6011Fとの給紙段数、設置サイズ、販売仕様の違いを確認する",
    hearingTips: ["A3印刷の頻度を確認する", "給紙段数が足りるか確認する", "FAX回線の有無を確認する"],
    comparePoints: ["A3ノビ", "ADF/FAX", "価格帯", "給紙段数"],
    talk: "A3対応の仕事用が必要でも大きすぎる機種は避けたい場合、PX-M6010Fを比較候補にできます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "brother_mfc_j7100cdw_alias_mfcj711cdw",
    jan: ["JAN未確認-mfcj711cdw"],
    category: "printer",
    maker: "Brother",
    name: "MFC-J7100CDW",
    modelNumber: "MFCJ711CDW / MFC-J7100CDW",
    productType: "A3対応ビジネス複合機",
    priceBand: "高価格帯",
    tags: ["business", "a3", "wide-format", "adf", "fax", "auto-duplex", "wired-lan", "wifi", "high-volume", "fast-print", "low-running-cost", "pigment-ink", "high-function"],
    features: ["A3対応でプリント、コピー、FAX、スキャンをまとめて使える", "高速プリントと高耐久を訴求しやすい", "1段用紙トレイと背面多目的トレイで業務用途に案内しやすい"],
    goodFor: "A3資料、FAX、複数枚スキャン、事務所の大量印刷を1台でまとめたい人",
    caution: "指定型番MFCJ711CDWはMFC-J7100CDWの可能性が高いため、正式型番を確認する",
    hearingTips: ["A3対応が必要か確認する", "FAXとADFの使用頻度を確認する", "月間印刷枚数を確認する"],
    comparePoints: ["A3", "FAX/ADF", "高速印刷", "低ランニングコスト"],
    talk: "A3もFAXも仕事で使う方には、MFC-J7100CDWは生産性と耐久性を軸に提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "brother_mfc_j742dn",
    jan: ["JAN未確認-mfcj742dn"],
    category: "printer",
    maker: "Brother",
    name: "MFC-J742DN",
    modelNumber: "MFCJ742DN / MFC-J742DN",
    productType: "電話・FAX付きA4複合機",
    priceBand: "高価格帯",
    tags: ["fax", "phone", "document", "copy-scan", "adf", "wifi", "smartphone-print", "business", "high-function"],
    features: ["電話、FAX、プリンター、コピー、スキャンをまとめたい家庭や小規模事務所向け", "FAXを残したいお客様に説明しやすい", "複合機として文書管理とスマホ印刷を案内しやすい"],
    goodFor: "固定電話やFAXを使いながら、A4文書の印刷、コピー、スキャンも必要な人",
    caution: "子機有無、電話回線仕様、FAX機能、正式JANを必ず確認する",
    hearingTips: ["電話子機が必要か確認する", "FAXの送受信頻度を確認する", "ADFや両面印刷の要否を確認する"],
    comparePoints: ["電話/FAX", "コピー/スキャン", "スマホ印刷", "子機構成"],
    talk: "FAXや固定電話も必要な方には、MFC-J742DNのような電話機能付き複合機を別枠で案内すると迷いにくいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "mibro_c4",
    jan: ["JAN未確認-mibro-c4"],
    category: "smartwatch",
    maker: "Mibro",
    name: "Mibro C4",
    modelNumber: "C4",
    productType: "大画面Bluetooth通話対応スマートウォッチ",
    priceBand: "低価格帯",
    tags: ["price-focused", "large-screen", "call-on-wrist", "notification", "health", "daily-care", "sleep", "stress", "sports", "battery", "long-battery", "water-resistant", "lightweight", "design", "android", "iphone", "easy-use"],
    features: ["2.01インチクラスの大画面で通知や運動データを見やすい", "Bluetooth通話、心拍・血中酸素・ストレス管理に対応", "100種類以上のスポーツモード、2ATM防水、最大10日使用を訴求しやすい"],
    goodFor: "価格を抑えながら、大きな画面、通話、健康管理をひと通り試したい人",
    caution: "GPS仕様や日本国内の正式JANは販売ページで再確認する",
    hearingTips: ["通話機能が必要か確認する", "運動記録でGPSまで必要か確認する", "価格重視か画面サイズ重視か確認する"],
    comparePoints: ["大画面", "Bluetooth通話", "最大10日", "2ATM防水"],
    talk: "まず低価格でスマートウォッチを試したい方には、Mibro C4は大画面と通話対応を分かりやすく提案できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "fitbit_inspire_3_fb424bkywfbcjk",
    jan: ["JAN未確認-fb424bkywfbcjk"],
    category: "smartwatch",
    maker: "Fitbit",
    name: "Fitbit Inspire 3 Morning Glow / Black",
    modelNumber: "FB424BKYWFBCJK",
    productType: "軽量ヘルス&フィットネストラッカー",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact-band", "lightweight", "health", "daily-care", "sleep", "stress", "battery", "long-battery", "connected-gps", "water-resistant", "notification", "design", "android", "iphone", "entry"],
    features: ["バンド型で軽く、睡眠中も装着しやすい", "心拍、SpO2、皮膚温変動、HRV、呼吸数など日々の体調傾向を確認しやすい", "最大10日クラスの電池持ちと50m耐水で日常利用に向く"],
    goodFor: "時計型より軽いバンド型で、歩数、睡眠、健康傾向を手軽に見たい人",
    caution: "内蔵GPS、通話、決済は主目的にしない。色名は公式色展開からの推定のため、実販売前に確認する",
    hearingTips: ["睡眠時にも着けたいか確認する", "ランニングでスマホなしGPSが必要か確認する", "通話や決済が必要か確認する"],
    comparePoints: ["軽さ", "健康指標", "最大10日", "GPS有無"],
    talk: "睡眠や健康の見える化を軽く始めたい方には、Inspire 3のバンド型と長い電池持ちが提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "fitbit_versa_4_fb523rgrwfrcjk",
    jan: ["JAN未確認-fb523rgrwfrcjk"],
    category: "smartwatch",
    maker: "Fitbit",
    name: "Fitbit Versa 4 Pink Sand / Copper Rose Aluminum",
    modelNumber: "FB523RGRWFRCJK",
    productType: "GPS・決済対応フィットネススマートウォッチ",
    priceBand: "高価格帯",
    tags: ["sports", "gps", "built-in-gps", "payment", "nfc", "call-on-wrist", "notification", "health", "daily-care", "sleep", "battery", "long-battery", "water-resistant", "design", "fashion", "android", "iphone", "high-function", "premium"],
    features: ["40種類以上の運動モードと内蔵GPSでスマホなしでも運動記録しやすい", "Google Maps、Google Wallet、Bluetooth通話に対応", "6日以上の電池持ちと50m耐水で毎日使いやすい"],
    goodFor: "運動記録、通知、決済をまとめて使いたいFitbitユーザー",
    caution: "上位健康センサーを重視する場合はSense 2と比較する。色名は公式色展開からの推定のため、実販売前に確認する",
    hearingTips: ["ランニングでスマホを持たないか確認する", "決済を使いたいか確認する", "ストレスや心電図まで必要か確認する"],
    comparePoints: ["内蔵GPS", "Google Wallet", "Bluetooth通話", "6日以上"],
    talk: "運動も通知も決済も使いたい方には、Versa 4はFitbitの中でバランスの良い時計型モデルです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "fitbit_sense_2_fb521glbmfrcjk",
    jan: ["JAN未確認-fb521glbmfrcjk"],
    category: "smartwatch",
    maker: "Fitbit",
    name: "Fitbit Sense 2 Blue Mist / Soft Gold Aluminum",
    modelNumber: "FB521GLBMFRCJK",
    productType: "ストレス・健康管理重視スマートウォッチ",
    priceBand: "高価格帯",
    tags: ["health", "daily-care", "sleep", "stress", "emotion", "premium-health", "ecg", "body-response", "sports", "gps", "built-in-gps", "payment", "nfc", "call-on-wrist", "notification", "battery", "long-battery", "water-resistant", "android", "iphone", "high-function", "premium"],
    features: ["cEDAセンサーで体のストレス反応を検知しやすい", "心電図アプリ、皮膚温、SpO2など上位健康機能を提案しやすい", "内蔵GPS、Google Wallet、Bluetooth通話、6日以上の電池持ちに対応"],
    goodFor: "運動だけでなく、ストレス、睡眠、体調傾向まで深く見たい人",
    caution: "医療機器として診断に使うものではない。色名は公式色展開からの推定のため、実販売前に確認する",
    hearingTips: ["ストレス通知や睡眠分析をどの程度重視するか確認する", "心電図アプリに関心があるか確認する", "価格差を許容できるか確認する"],
    comparePoints: ["cEDA", "心電図", "内蔵GPS", "決済"],
    talk: "ストレスや体調の変化まで見たい方には、Sense 2の上位健康センサーを軸に提案できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "huawei_watch_fit_4",
    jan: ["JAN未確認-huawei-watch-fit-4"],
    category: "smartwatch",
    maker: "HUAWEI",
    name: "HUAWEI WATCH FIT 4",
    modelNumber: "WATCH FIT 4",
    productType: "高輝度GPSフィットネススマートウォッチ",
    priceBand: "中価格帯",
    tags: ["price-balance", "large-screen", "lightweight", "design", "sports", "gps", "built-in-gps", "outdoor", "barometer", "call-on-wrist", "notification", "health", "daily-care", "sleep", "stress", "emotion", "battery", "long-battery", "water-resistant", "android", "iphone", "high-function"],
    features: ["1.82インチAMOLED、最大2,000nits、約27gの見やすく軽い本体", "L1/L5 GNSS、気圧計、高度やルート記録で屋外運動を提案しやすい", "通常使用約10日、ヘビーユース約7日、AOD約4日の電池持ち"],
    goodFor: "軽くて大画面の時計型で、ランニングや屋外スポーツも記録したい人",
    caution: "グレーのみNFC対応など、色ごとの差分は販売時に確認する",
    hearingTips: ["屋外ランニングやハイキングで使うか確認する", "AODを使いたいか確認する", "通話機能が必要か確認する"],
    comparePoints: ["2,000nits", "L1/L5 GNSS", "気圧計", "約10日"],
    talk: "軽さと見やすさを両立しながら屋外運動も記録したい方には、WATCH FIT 4がかなり説明しやすい候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "huawei_watch_fit_3",
    jan: ["JAN未確認-huawei-watch-fit-3"],
    category: "smartwatch",
    maker: "HUAWEI",
    name: "HUAWEI WATCH FIT 3",
    modelNumber: "WATCH FIT 3",
    productType: "軽量スクエアフィットネススマートウォッチ",
    priceBand: "中価格帯",
    tags: ["price-balance", "large-screen", "lightweight", "design", "sports", "gps", "built-in-gps", "call-on-wrist", "notification", "health", "daily-care", "sleep", "stress", "battery", "long-battery", "water-resistant", "android", "iphone"],
    features: ["1.82インチAMOLED、約26g、厚さ約9.9mmの軽量スクエアデザイン", "100種類以上の運動モード、GPS、5ATM防水で運動提案に使いやすい", "最大10日クラスの電池持ちとAndroid/iOS対応で日常使いしやすい"],
    goodFor: "価格と機能のバランスを取りながら、大画面で運動や健康管理をしたい人",
    caution: "WATCH FIT 4とは気圧計や測位、画面輝度などの差を比較して案内する",
    hearingTips: ["FIT 4との差額を確認する", "登山や高度計が必要か確認する", "大画面と軽さのどちらを優先するか確認する"],
    comparePoints: ["1.82インチ", "約26g", "GPS", "最大10日"],
    talk: "大画面で軽く、価格も見たい方には、WATCH FIT 3が日常と運動のバランス候補になります。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "huawei_band_10",
    jan: ["JAN未確認-huawei-band-10"],
    category: "smartwatch",
    maker: "HUAWEI",
    name: "HUAWEI Band 10",
    modelNumber: "Band 10",
    productType: "睡眠分析重視スマートバンド",
    priceBand: "低価格帯",
    tags: ["price-focused", "compact-band", "lightweight", "design", "health", "daily-care", "sleep", "stress", "emotion", "sports", "battery", "long-battery", "water-resistant", "android", "iphone", "entry"],
    features: ["約14gから15g、厚さ約8.99mmで睡眠中も着けやすい", "睡眠HRV、呼吸乱れ、睡眠分析アドバイスを提案しやすい", "1.47インチAMOLED、5ATM、通常約14日、ヘビーユース約8日の電池持ち"],
    goodFor: "軽いバンド型で睡眠、健康、通知を中心に見たい人",
    caution: "内蔵GPS、Bluetooth通話、決済を重視する場合はWATCH FITやFitbit上位を比較する",
    hearingTips: ["睡眠分析を一番見たいか確認する", "時計型よりバンド型がよいか確認する", "GPSや通話が必要か確認する"],
    comparePoints: ["睡眠HRV", "約14-15g", "約14日", "5ATM"],
    talk: "睡眠をしっかり見たいけれど軽さと価格も大事な方には、Band 10がかなり提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_liberty_5_pro",
    jan: ["JAN未確認-liberty-5-pro"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore Liberty 5 Pro",
    modelNumber: "Liberty 5 Pro",
    productType: "通話品質重視プレミアム完全ワイヤレス",
    priceBand: "高価格帯",
    tags: ["noise-canceling", "call-quality", "multipoint", "ldac", "high-resolution", "sound-quality", "premium", "high-function", "secure-fit", "water-resistant", "app-custom", "office", "media"],
    features: ["AIチップ搭載世代として通話ノイズ低減を訴求しやすい", "LDAC、適応型ANC、ケース画面など上位感を出しやすい", "IP55相当の防塵防水で外出用途にも話しやすい"],
    goodFor: "通勤、Web会議、音質をまとめて重視し、Soundcoreの上位機能を試したい人",
    caution: "日本公式販売情報とJANは未確認のため、実販売投入前に取扱状況を確認する",
    hearingTips: ["通話が多いか確認する", "ノイズキャンセリングをどの環境で使うか確認する", "日本での販売色と価格を確認する"],
    comparePoints: ["通話品質", "ANC", "LDAC", "ケース画面"],
    talk: "通話の聞こえやすさまで重視される方には、Liberty 5 Proは音質と会議用途をまとめて提案しやすい上位候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_liberty_5",
    jan: ["JAN未確認-a3957"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore Liberty 5",
    modelNumber: "A3957",
    productType: "ANCと長時間再生のバランスモデル",
    priceBand: "中価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "dolby", "spatial-audio", "long-battery", "battery", "water-resistant", "price-balance", "daily-use", "media", "balance"],
    features: ["ウルトラノイズキャンセリング3.5で通勤用途を提案しやすい", "LDACとDolby Audio対応で音質訴求もしやすい", "イヤホン単体最大12時間、ケース込み最大48時間の長時間再生"],
    goodFor: "価格を抑えすぎず、ANC、音質、電池持ちをバランスよく欲しい人",
    caution: "高音質コーデックは対応端末やアプリ設定を確認する",
    hearingTips: ["電車やバスで使うか確認する", "iPhoneかAndroidか確認する", "電池持ちをどの程度重視するか確認する"],
    comparePoints: ["ANC", "LDAC", "Dolby Audio", "再生時間"],
    talk: "通勤でも動画でも使いたい方には、Liberty 5はノイキャンと長時間再生を両方説明しやすいモデルです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_liberty_4_pro",
    jan: ["JAN未確認-a3954"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore Liberty 4 Pro",
    modelNumber: "A3954",
    productType: "ケース操作対応ハイエンド完全ワイヤレス",
    priceBand: "高価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "spatial-audio", "sound-quality", "multipoint", "call-quality", "premium", "high-function", "water-resistant", "app-custom", "media", "office"],
    features: ["A.C.A.A 4.0とLDACで音質重視に提案しやすい", "ウルトラノイズキャンセリング3.5と外音取り込みに対応", "スクリーン付きケースとタッチバーで操作感を説明しやすい"],
    goodFor: "Soundcoreの中で音質、ANC、便利機能をまとめて上げたい人",
    caution: "ケース画面の便利さを重視しない人にはLiberty 5なども比較する",
    hearingTips: ["ケースで操作したいか確認する", "音質とノイキャンのどちらを優先するか確認する", "ワイヤレス充電の要否を確認する"],
    comparePoints: ["ケース画面", "A.C.A.A 4.0", "ANC", "LDAC"],
    talk: "音もノイキャンも便利機能も欲しい方には、Liberty 4 Proは上位モデルらしさが伝わりやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_liberty_4",
    jan: ["JAN未確認-a3953"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore Liberty 4",
    modelNumber: "A3953",
    productType: "3Dオーディオ対応完全ワイヤレス",
    priceBand: "中価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "spatial-audio", "sound-quality", "water-resistant", "price-balance", "media", "daily-use", "balance"],
    features: ["A.C.A.A 3.0とLDACで音楽向けに説明しやすい", "3Dオーディオとヘッドトラッキングに対応", "ヘルスモニタリングなど独自機能もある"],
    goodFor: "音楽や動画を楽しみつつ、価格と機能のバランスも見たい人",
    caution: "新しいLiberty 5や上位Proと機能差を確認して案内する",
    hearingTips: ["立体音響に興味があるか確認する", "ノイズキャンセリングの強さをどこまで求めるか確認する", "最新世代でなくてもよいか確認する"],
    comparePoints: ["3Dオーディオ", "LDAC", "ANC", "価格帯"],
    talk: "音楽や動画を楽しく聴きたい方には、Liberty 4の3Dオーディオは話題にしやすいポイントです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_sleep_a20",
    jan: ["JAN未確認-a6611"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore Sleep A20",
    modelNumber: "A6611",
    productType: "睡眠特化ワイヤレスイヤホン",
    priceBand: "高価格帯",
    tags: ["sleep", "compact", "lightweight", "long-battery", "battery", "water-resistant", "app-custom", "daily-use"],
    features: ["横向き寝でも使いやすい睡眠向け形状", "ノイズマスキング、睡眠モニタリング、アラーム機能を搭載", "Bluetooth再生は最大10時間、睡眠モードは最大14時間"],
    goodFor: "寝る前の音楽、環境音、アラームをイヤホンで使いたい人",
    caution: "マイクとアクティブノイズキャンセリングは非搭載のため通話用には向かない",
    hearingTips: ["寝ながら使う目的か確認する", "通話を使わないか確認する", "遮音と環境音の好みを確認する"],
    comparePoints: ["睡眠向け形状", "マイク有無", "睡眠モニター", "再生時間"],
    talk: "睡眠用を探している方には、普通のイヤホンではなくSleep A20のような寝るための形状を案内できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_c50i",
    jan: ["JAN未確認-c50i"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore C50i",
    modelNumber: "C50i",
    productType: "オープンイヤー型イヤーカフモデル",
    priceBand: "中価格帯",
    tags: ["open-ear", "ear-cuff", "secure-fit", "lightweight", "fashion", "design", "long-battery", "battery", "daily-use"],
    features: ["耳をふさがないオープンイヤー型として提案しやすい", "片耳約5.5gクラスの軽量イヤーカフ型", "ケース込み最大28時間クラスの再生時間が目安"],
    goodFor: "周囲の音を聞きながら、アクセサリー感覚で軽く使いたい人",
    caution: "国内通常販売情報、JAN、詳細仕様は未確認のため、実販売前に確認する",
    hearingTips: ["耳をふさぐタイプが苦手か確認する", "音漏れが気になる場所で使うか確認する", "デザインや色の優先度を確認する"],
    comparePoints: ["オープンイヤー", "軽さ", "デザイン", "販売確認"],
    talk: "耳をふさがないタイプが良い方には、C50iはイヤーカフ感覚で使える候補として確認したいモデルです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_c40i",
    jan: ["JAN未確認-a3331"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore C40i",
    modelNumber: "A3331",
    productType: "イヤーカフ型オープンイヤーモデル",
    priceBand: "低価格帯",
    tags: ["open-ear", "ear-cuff", "secure-fit", "lightweight", "spatial-audio", "call-quality", "multipoint", "water-resistant", "price-focused", "daily-use", "easy-use"],
    features: ["耳をふさがないイヤーカフ型でながら聴きしやすい", "AIノイズリダクション通話とマルチポイントに対応", "3DオーディオとIPX4で日常利用を広く提案できる"],
    goodFor: "圧迫感が苦手で、家事や散歩中にも周囲の音を聞きたい人",
    caution: "密閉型ではないため、騒がしい場所の没入感や音漏れを確認する",
    hearingTips: ["耳穴をふさぎたくないか確認する", "通話も使うか確認する", "屋外利用や雨の日の使用を確認する"],
    comparePoints: ["イヤーカフ", "外音確認", "通話", "価格帯"],
    talk: "耳をふさぐイヤホンが苦手な方には、C40iは周囲の音を聞きながら使える分かりやすい候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_aeroclip",
    jan: ["JAN未確認-a3388"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore AeroClip",
    modelNumber: "A3388",
    productType: "LDAC対応オープンイヤーイヤーカフ",
    priceBand: "中価格帯",
    tags: ["open-ear", "ear-cuff", "secure-fit", "ldac", "high-resolution", "sound-quality", "long-battery", "battery", "multipoint", "water-resistant", "design", "price-balance", "media"],
    features: ["イヤーカフ型ながらLDAC対応で音質訴求がしやすい", "本体最大8時間、ケース込み最大32時間の長時間再生", "IP55とマルチポイント対応で外出や仕事にも使いやすい"],
    goodFor: "耳をふさがない装着感と、音質や電池持ちも両立したい人",
    caution: "LDACは対応端末とSoundcoreアプリ設定が必要",
    hearingTips: ["オープンイヤーでも音質を重視するか確認する", "Android端末か確認する", "イヤーカフの装着感を確認する"],
    comparePoints: ["LDAC", "オープンイヤー", "IP55", "再生時間"],
    talk: "ながら聴きでも音質を下げたくない方には、AeroClipのLDAC対応が分かりやすい差別化になります。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_liberty_buds",
    jan: ["JAN未確認-liberty-buds"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore Liberty Buds",
    modelNumber: "Liberty Buds",
    productType: "仕様確認中のLiberty系完全ワイヤレス",
    priceBand: "中価格帯",
    tags: ["price-balance", "compact", "daily-use", "media", "balance"],
    features: ["Liberty系として日常利用の完全ワイヤレス候補に分類", "詳細仕様は取扱商品名と型番の再確認が必要", "アプリ投入時はJAN、ANC有無、再生時間を確認する"],
    goodFor: "Libertyシリーズで探しているが、正確な型番確認が必要な接客メモ用",
    caution: "同名の公式商品ページを確認できていないため、実販売前に商品名、型番、JANを必ず確認する",
    hearingTips: ["お客様が見ている商品ページや箱の型番を確認する", "ノイキャン有無を確認する", "価格と世代を確認する"],
    comparePoints: ["型番確認", "ANC有無", "再生時間", "価格帯"],
    talk: "Liberty Budsとして確認が必要な商品は、まず箱や商品ページの型番を見てから、近いLibertyシリーズと比較すると案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_p40i",
    jan: ["JAN未確認-a3955"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore P40i",
    modelNumber: "A3955",
    productType: "長時間再生コスパ完全ワイヤレス",
    priceBand: "低価格帯",
    tags: ["noise-canceling", "bass", "long-battery", "battery", "call-quality", "multipoint", "water-resistant", "price-focused", "compact", "daily-use", "easy-use"],
    features: ["最大60時間の長時間再生で充電頻度を減らしやすい", "ウルトラノイズキャンセリング2.0と外音取り込みに対応", "11mmドライバーとBassUpで低音を訴求しやすい"],
    goodFor: "価格を抑えながら、ノイキャン、通話、電池持ちをひと通り欲しい人",
    caution: "高音質コーデック重視ならLDAC対応モデルも比較する",
    hearingTips: ["充電頻度を減らしたいか確認する", "低音の好みを確認する", "ワイヤレス充電が必要か確認する"],
    comparePoints: ["最大60時間", "ANC", "低音", "価格帯"],
    talk: "予算を抑えつつ機能を多めに欲しい方には、P40iは長時間再生とノイキャンをセットで案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "soundcore_k20i_a3994n21",
    jan: ["JAN未確認-a3994n21"],
    category: "earphone",
    maker: "Anker",
    name: "Soundcore K20i ホワイト",
    modelNumber: "A3994N21",
    productType: "インナーイヤー型エントリーモデル",
    priceBand: "低価格帯",
    tags: ["inner-ear", "lightweight", "bass", "call-quality", "water-resistant", "price-focused", "compact", "daily-use", "easy-use", "simple"],
    features: ["片耳約3.3gの軽量インナーイヤー型", "13mmドライバーで低音も説明しやすい", "AIノイズリダクション通話、IPX5、最大36時間再生に対応"],
    goodFor: "カナル型の圧迫感が苦手で、低価格帯のシンプルなワイヤレスを探す人",
    caution: "アクティブノイズキャンセリングはないため、電車内の静かさ重視なら別候補を見せる",
    hearingTips: ["カナル型が苦手か確認する", "ノイキャンが必要か確認する", "白色指定か確認する"],
    comparePoints: ["インナーイヤー", "価格帯", "軽さ", "ANC有無"],
    talk: "耳栓のような密閉感が苦手な方には、K20iのようなインナーイヤー型を低価格候補として見せやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "victor_ha_fx150t",
    jan: ["JAN未確認-ha-fx150t"],
    category: "earphone",
    maker: "Victor",
    name: "HA-FX150T",
    modelNumber: "HA-FX150T",
    productType: "スタジオチューニングANCモデル",
    priceBand: "中価格帯",
    tags: ["noise-canceling", "studio-tuned", "sound-quality", "compact", "lightweight", "call-quality", "water-resistant", "price-balance", "media", "daily-use"],
    features: ["Tuned by Victor Studioで音質を訴求しやすい", "ノイズキャンセリングと外音取り込みに対応", "片耳約4.4gの小型軽量で耳が小さい人にも話しやすい"],
    goodFor: "Victorらしい音作りと、通勤向けのノイキャンを両方欲しい人",
    caution: "対応コーデックはSBC/AACのため、LDAC重視なら別候補を比較する",
    hearingTips: ["音の自然さを重視するか確認する", "小型軽量が必要か確認する", "低遅延モードを使うか確認する"],
    comparePoints: ["Victor音質", "ANC", "軽さ", "コーデック"],
    talk: "音の作り込みを気にされる方には、Victor Studioチューニングを軸にHA-FX150Tを案内できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "victor_ha_a22t",
    jan: ["JAN未確認-ha-a22t"],
    category: "earphone",
    maker: "Victor",
    name: "HA-A22T",
    modelNumber: "HA-A22T",
    productType: "デザイン重視ANCエントリーモデル",
    priceBand: "低価格帯",
    tags: ["noise-canceling", "design", "fashion", "small-ear", "compact", "lightweight", "water-resistant", "price-focused", "daily-use", "easy-use"],
    features: ["シアーケースとカラーで見た目を提案しやすい", "ノイズキャンセリングと外音取り込みに対応", "XSイヤーピース付属で小さい耳にも案内しやすい"],
    goodFor: "1万円前後で、見た目と基本機能の両方を重視したい人",
    caution: "音質最優先やLDAC希望なら上位モデルも比較する",
    hearingTips: ["色やケースデザインを重視するか確認する", "耳が小さいか確認する", "ノイズキャンセリングの必要度を確認する"],
    comparePoints: ["デザイン", "ANC", "小さめイヤーピース", "価格帯"],
    talk: "見た目もかわいく、ノイキャンも欲しい方には、HA-A22Tは価格を抑えた候補として話しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "victor_ha_np1t",
    jan: ["JAN未確認-ha-np1t"],
    category: "earphone",
    maker: "Victor",
    name: "音アクセ HA-NP1T",
    modelNumber: "HA-NP1T",
    productType: "アクセサリー感覚オープンイヤー",
    priceBand: "高価格帯",
    tags: ["open-ear", "ear-cuff", "secure-fit", "fashion", "design", "lightweight", "long-battery", "battery", "daily-use"],
    features: ["アクセサリー感覚のイヤーカフスタイルで色を提案しやすい", "オープンイヤータイプで周囲の音を聞きながら使える", "片耳約4.9g、ケース込み最大24時間再生に対応"],
    goodFor: "イヤホンをファッションとしても楽しみ、耳をふさがず使いたい人",
    caution: "ANC非搭載のオープンイヤーなので、静かな没入感を求める人には別候補も見せる",
    hearingTips: ["色やファッション性を重視するか確認する", "周囲の音を聞きたいか確認する", "騒がしい場所で使うか確認する"],
    comparePoints: ["イヤーカフ", "色展開", "オープンイヤー", "ANC有無"],
    talk: "イヤホンっぽさを抑えて身につけたい方には、HA-NP1Tはアクセサリー感覚で提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "victor_ha_a110t",
    jan: ["JAN未確認-ha-a110t"],
    category: "earphone",
    maker: "Victor",
    name: "HA-A110T",
    modelNumber: "HA-A110T",
    productType: "LDAC対応オールインワンモデル",
    priceBand: "高価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "sound-quality", "long-battery", "battery", "multipoint", "water-resistant", "high-function", "premium", "media", "office"],
    features: ["ハイブリッドノイズキャンセリングとLDACに対応", "ANCオフ最大44時間、ANCオン最大34時間の長時間再生", "10mmドライバー、ワイヤレス充電、アプリ対応で機能が広い"],
    goodFor: "Victorで音質、ノイキャン、長時間再生をまとめて選びたい人",
    caution: "価格帯が上がるため、低価格のHA-A22TやHA-FX150Tとの違いを説明する",
    hearingTips: ["LDAC対応端末か確認する", "長時間再生を重視するか確認する", "ワイヤレス充電が必要か確認する"],
    comparePoints: ["LDAC", "ANC", "長時間再生", "ワイヤレス充電"],
    talk: "Victorで全部入りに近い候補を探すなら、HA-A110Tは音質と電池持ちをまとめて説明できます。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "sony_wf_1000xm6",
    jan: ["JAN未確認-wf-1000xm6"],
    category: "earphone",
    maker: "SONY",
    name: "WF-1000XM6",
    modelNumber: "WF-1000XM6",
    productType: "最上位ノイズキャンセリング完全ワイヤレス",
    priceBand: "プレミアム価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "sound-quality", "call-quality", "premium", "high-function", "water-resistant", "media", "office"],
    features: ["世界最高クラスのノイズキャンセリングを訴求しやすい", "高音質プロセッサーとLDACで音質重視に強い", "8マイク構成など通話品質も上位候補として案内しやすい"],
    goodFor: "価格よりも静けさ、音質、通話品質を最優先したい人",
    caution: "プレミアム価格帯のため、LinkBuds系やWF-C710Nとの予算差を確認する",
    hearingTips: ["ノイキャンを使う場所を確認する", "AndroidでLDACを使うか確認する", "予算上限を確認する"],
    comparePoints: ["ANC", "LDAC", "通話品質", "価格帯"],
    talk: "静けさと音質を最優先される方には、WF-1000XM6はまず比較軸の基準にしやすいモデルです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "sony_linkbuds_fit_wf_ls910n",
    jan: ["JAN未確認-wf-ls910n"],
    category: "earphone",
    maker: "SONY",
    name: "LinkBuds Fit",
    modelNumber: "WF-LS910N",
    productType: "軽快フィットANCモデル",
    priceBand: "高価格帯",
    tags: ["noise-canceling", "ambient", "ldac", "high-resolution", "sound-quality", "secure-fit", "small-ear", "design", "high-function", "daily-use", "media"],
    features: ["フィットサポーターとイヤーピースで軽快な装着感を訴求しやすい", "外音取り込みとノイズキャンセリングの両方に対応", "LDACとDSEE Extremeで音質提案もできる"],
    goodFor: "装着感を重視しつつ、SONYのノイキャンと音質も欲しい人",
    caution: "最上位ノイキャン重視ならWF-1000XM6と比較する",
    hearingTips: ["イヤホンが落ちやすいか確認する", "周囲の音も聞きたいか確認する", "アクセサリー色も見たいか確認する"],
    comparePoints: ["フィット感", "ANC", "外音取り込み", "LDAC"],
    talk: "落ちにくさや装着感を気にされる方には、LinkBuds FitはSONYの音質機能と合わせて提案しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "sony_linkbuds_s_wf_ls900n",
    jan: ["JAN未確認-wf-ls900n"],
    category: "earphone",
    maker: "SONY",
    name: "LinkBuds S",
    modelNumber: "WF-LS900N",
    productType: "小型軽量ANCモデル",
    priceBand: "高価格帯",
    tags: ["noise-canceling", "ambient", "ldac", "high-resolution", "sound-quality", "call-quality", "small-ear", "compact", "lightweight", "daily-use", "media"],
    features: ["小型軽量で長時間装着しやすい", "自然な外音取り込みとノイズキャンセリングに対応", "LDAC、DSEE Extreme、高い通話品質を訴求できる"],
    goodFor: "小さく軽いSONYのノイキャンイヤホンを探す人",
    caution: "新しいLinkBuds Fitや最上位WF-1000XM6との違いを確認する",
    hearingTips: ["耳の小ささや重さへの不安を確認する", "通話も多いか確認する", "自然な外音取り込みが必要か確認する"],
    comparePoints: ["軽さ", "ANC", "外音取り込み", "通話"],
    talk: "小さく軽いノイキャンイヤホンを探す方には、LinkBuds Sは装着感を軸に案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "sony_wf_c710n",
    jan: ["JAN未確認-wf-c710n"],
    category: "earphone",
    maker: "SONY",
    name: "WF-C710N",
    modelNumber: "WF-C710N",
    productType: "ミドルANC完全ワイヤレス",
    priceBand: "中価格帯",
    tags: ["noise-canceling", "ambient", "long-battery", "battery", "compact", "price-balance", "daily-use", "easy-use", "media"],
    features: ["高性能ノイズキャンセリングと外音取り込みに対応", "ANCオンで本体最大8.5時間、ケース込み最大30時間", "5分充電で約60分使えるクイック充電に対応"],
    goodFor: "SONYのノイキャンを、上位機より価格を抑えて選びたい人",
    caution: "LDAC非対応のため、ハイレゾ重視ならLinkBudsやWF-1000XM6を比較する",
    hearingTips: ["SONYで予算を抑えたいか確認する", "LDACが必要か確認する", "通勤でノイキャンを使うか確認する"],
    comparePoints: ["ANC", "価格帯", "電池持ち", "LDAC有無"],
    talk: "SONYのノイキャンが欲しいけれど価格も見たい方には、WF-C710Nがちょうど比較しやすい中間候補です。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "sony_wf_c510",
    jan: ["JAN未確認-wf-c510"],
    category: "earphone",
    maker: "SONY",
    name: "WF-C510",
    modelNumber: "WF-C510",
    productType: "小型軽量エントリー完全ワイヤレス",
    priceBand: "低価格帯",
    tags: ["ambient", "compact", "lightweight", "long-battery", "battery", "multipoint", "price-focused", "daily-use", "easy-use", "simple"],
    features: ["小型軽量で毎日使いやすい", "本体最大11時間、ケース込み最大22時間の再生時間", "外音取り込み、DSEE、マルチポイントに対応"],
    goodFor: "ノイキャンより軽さ、価格、SONYブランドを重視する人",
    caution: "アクティブノイズキャンセリングは非搭載のため、電車用途ではWF-C710Nも見せる",
    hearingTips: ["ノイキャンが必要か確認する", "小ささや軽さを重視するか確認する", "複数端末接続を使うか確認する"],
    comparePoints: ["価格帯", "軽さ", "外音取り込み", "ANC有無"],
    talk: "価格と軽さを重視する方には、WF-C510はSONYの入門候補として案内しやすいです。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "technics_eah_az100",
    jan: ["JAN未確認-eah-az100"],
    category: "earphone",
    maker: "Technics",
    name: "EAH-AZ100",
    modelNumber: "EAH-AZ100",
    productType: "音質重視プレミアム完全ワイヤレス",
    priceBand: "プレミアム価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "sound-quality", "spatial-audio", "dolby", "call-quality", "multipoint", "long-battery", "battery", "premium", "high-function", "media", "office"],
    features: ["磁性流体ドライバーでHi-Fiらしい音質を訴求しやすい", "業界最高クラスのノイズキャンセリングとVoice Focus AIに対応", "3台マルチポイント、LDAC、Dolby Atmos、ワイヤレス充電に対応"],
    goodFor: "音楽の質感、ノイキャン、仕事利用をすべて上位で選びたい人",
    caution: "プレミアム価格帯のため、AZ40M2やSONY上位との優先軸を確認する",
    hearingTips: ["音質を最優先するか確認する", "3台接続が必要か確認する", "通話品質も重視するか確認する"],
    comparePoints: ["磁性流体ドライバー", "ANC", "3台マルチポイント", "Dolby Atmos"],
    talk: "音質をかなり重視される方には、Technics AZ100は音楽用としても仕事用としても上位候補になります。",
    lastUpdated: "2026-07-04"
  },
  {
    id: "technics_eah_az40m2",
    jan: ["JAN未確認-eah-az40m2"],
    category: "earphone",
    maker: "Technics",
    name: "EAH-AZ40M2",
    modelNumber: "EAH-AZ40M2",
    productType: "小型高音質ANCモデル",
    priceBand: "高価格帯",
    tags: ["noise-canceling", "ldac", "high-resolution", "sound-quality", "multipoint", "call-quality", "small-ear", "compact", "water-resistant", "high-function", "media", "office"],
    features: ["小型ながらTechnicsの高音質を提案しやすい", "ノイズキャンセリングとLDACに対応", "3台マルチポイントとビームフォーミング通話で仕事にも使いやすい"],
    goodFor: "Technicsの音質を小型モデルで選びたい人",
    caution: "電池持ちはAZ100より短めのため、長時間重視なら比較する",
    hearingTips: ["小型が必要か確認する", "3台接続を使うか確認する", "長時間再生とサイズのどちらを優先するか確認する"],
    comparePoints: ["小型", "LDAC", "3台マルチポイント", "ANC"],
    talk: "Technicsの音で小さめが良い方には、AZ40M2はサイズと機能のバランスを説明しやすいです。",
    lastUpdated: "2026-07-04"
  },
  ...dryerProducts
];

products.forEach((product) => {
  if (earphoneSpecsById[product.id]) {
    product.specs = earphoneSpecsById[product.id];
  }
});

function question(id, text, options) {
  return {
    id,
    text,
    options: options.map(([label, value, tags]) => ({ label, value, tags }))
  };
}
