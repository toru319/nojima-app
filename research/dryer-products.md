# 店舗在庫ドライヤー調査メモ

調査日: 2026-07-05

## 前提

依頼文の手順には「プリンター」とあるが、対象リストと冒頭文はドライヤーのため、ドライヤーとして調査・実装した。現在のアプリではJAN未確認の店舗在庫型番を試験投入し、実運用前にノジマ商品マスターまたはJAN付き販売ページで差し替える。

## 接客フィルター構想

ドライヤーは、販売時に以下の4軸で絞ると候補を出しやすい。

- 速乾: 毛量多め、ロング、家族利用、朝の時短
- 髪ケア: うるおい、まとまり、静電気、カラー/ダメージ、頭皮ケア
- 本体: 軽さ、収納、I字型、折りたたみ、旅行/海外対応
- 予算: 低価格、価格と機能のバランス、プレミアム美容家電

既存の `categoryFilterProfiles["hair-dryer"]` はこの軸に合っているため、フィルター構造は維持し、商品タグを49件分に付与した。

## 商品別メモ

| 指定型番 | アプリ登録名 | メーカー | タイプ | 接客メモ | 要確認 |
| --- | --- | --- | --- | --- | --- |
| EHNC80 | ヘアードライヤー ナノケア ULTIMATE EH-NC80 | Panasonic | 髪悩み別ケア最上位 | 第2世代高浸透ナノイー、髪質別メニュー、速乾も訴求 | 色、JAN、EH-NC50との差 |
| EHNC50 | ヘアードライヤー ナノケア ULTIMATE EH-NC50 | Panasonic | 高浸透ナノイー上位 | ULTIMATE系で髪ケア重視、EH-NC80よりシンプルな上位候補 | 色、JAN、付属品 |
| EHNA0K | ヘアードライヤー ナノケア EH-NA0K | Panasonic | 高浸透ナノイー定番上位 | 上位ナノケアとして、うるおい、まとまり、速乾を提案 | 色、JAN、EH-NA9Mとの差 |
| EHNA9F | ヘアードライヤー ナノケア EH-NA9F | Panasonic | 海外対応ナノケア | 旅行/出張でもナノケアを使いたい人向け | 電圧、プラグ、JAN |
| EHNA9M | ヘアードライヤー ナノケア EH-NA9M | Panasonic | スマートセンシング搭載 | ナノイー、ミネラル、速乾ノズル、スカルプ/温冷ケア | 色、JAN、上位機との差 |
| EHNA7M | ヘアードライヤー ナノケア EH-NA7M | Panasonic | ナノケア標準 | ナノケアを中価格寄りで見たい人に提案 | 高浸透ナノイー有無、JAN |
| KH302 | KINUJO Hair Dryer モカ | KINUJO | 軽量大風量ヘアケア | 約348g、超遠赤外線、大風量、GLOSS/SCULP/SWING | JAN、国内専用 |
| KH301 | KINUJO Hair Dryer ホワイト | KINUJO | 軽量大風量ヘアケア | KH302の色違い候補。軽さと速乾、デザインで提案 | JAN、色別在庫 |
| HW001 | HW001 ドライヤー | ReFa/美容系 | 美容ケア高機能 | 美容系の仕上がり・温度配慮候補として仮登録 | 正式メーカー、商品名、JAN |
| IBP802 | Plasmacluster Beauty ドライヤー IB-P802 | SHARP | プラズマクラスター上位 | 約5.1m3/分、HOT/WARM/BEAUTY/SCALP/COLD、髪/地肌ケア | 色、JAN |
| SAL23209 | SALONIA ドライヤー SAL23209 | SALONIA | デザイン重視ヘアケア | デザイン、価格、美容ケア感のバランス候補 | 正式商品名、色、JAN |
| EHNE9N | ヘアードライヤー イオニティ EH-NE9N | Panasonic | 温冷リズム搭載ミドル | 温冷リズム、軽さ、イオンケアのバランス | 色、JAN |
| EHNE8N | ヘアードライヤー イオニティ EH-NE8N | Panasonic | 大風量イオニティ | イオニティ系で速乾とマイナスイオンを重視 | 色、JAN、EH-NE9Nとの差 |
| KHDB500C | KOIZUMI BLDCドライヤー ベージュ | KOIZUMI | 軽量BLDC | 軽さ、風の強さ、デザインのバランス | 正式シリーズ、JAN |
| KHDB500K | KOIZUMI BLDCドライヤー ブラック | KOIZUMI | 軽量BLDC | KHDB500Cの色違い候補 | 色、JAN |
| HC20N1 | リフトドライヤー HC20N1 | YA-MAN | 美顔器発想リフトケア | 頭皮/美容ケア、ブランド感、ギフト需要 | 付属品、JAN、正式色 |
| HD19VLP | Dyson Supersonic r HD19 | Dyson | 軽量プレミアム速乾 | 軽さ、速乾、温度制御、アタッチメント提案 | 色、セット内容、JAN |
| HD17VLP | Dyson Supersonic Nural Shine HD17 | Dyson | 頭皮保護センサー搭載 | 頭皮/熱ダメージ配慮と速乾を両立 | 色、付属品、JAN |
| HD17CPATO | Dyson Supersonic Nural Shine HD17 CPATO | Dyson | 頭皮保護センサー搭載 | HD17系の色/セット違い候補 | 正式カラー、JAN |
| HD16VLP | Dyson Supersonic Shine HD16 | Dyson | プレミアム速乾 | Dyson速乾、アタッチメント、仕上げ重視 | HD17/HD19との差、JAN |
| YJHC2W | YA-MAN リフトドライヤー系 YJHC2W | YA-MAN | 美容ケア高機能 | 頭皮ケア、美容家電、白系デザイン | 正式商品名、JAN |
| YJHR4L | YA-MAN ドライヤー YJHR4L | YA-MAN | 美容ケア高機能 | YA-MAN美容ケア系として仮登録 | 正式商品名、カテゴリ、JAN |
| HC21B | リフトドライヤー HC21B | YA-MAN | 美顔器発想リフトケア | HC20N1の比較候補。美容ケア上位感 | 機能差、JAN |
| YJHB6 | YA-MAN ドライヤー YJHB6 | YA-MAN | 美容ケア | 上位リフト系より価格を抑えた美容ケア候補 | 正式商品名、JAN |
| YJHB1N | YA-MAN ドライヤー YJHB1N | YA-MAN | 美容ケアエントリー | YA-MANを試したい人向けの価格バランス候補 | 正式商品名、JAN |
| IBP602 | Plasmacluster Beauty ドライヤー IB-P602 | SHARP | プラズマクラスター標準 | 約5.1m3/分、TURBO/SET/COLD、シンプル大風量 | 色、JAN |
| SAL23210 | SALONIA ドライヤー SAL23210 | SALONIA | デザイン重視ヘアケア | SAL23209の色/セット違い候補 | 正式色、JAN |
| KHDW990K | MONSTER ダブルファンドライヤー KHD-W990-K | KOIZUMI | 大風量速乾 | 毛量多め、家族利用、速乾最優先 | 重量、音、JAN |
| EHNE7N | ヘアードライヤー イオニティ EH-NE7N | Panasonic | 低温ケア対応 | 低価格帯でイオン/低温ケアを案内 | 色、JAN |
| TD570A | プロテクトイオンヘアードライヤー TD570A | TESCOM | 大風量軽量コスパ | 約2.3m3/分クラス、軽量、プロテクトイオン | 色、JAN |
| KHD9240H | KOIZUMI ドライヤー KHD-9240-H | KOIZUMI | 大風量バランス | 価格と速乾のバランス候補 | 正式シリーズ、JAN |
| KHDM800A | KOIZUMI ドライヤー KHD-M800-A | KOIZUMI | 高機能速乾 | KOIZUMI高機能系として仮登録 | 正式シリーズ、JAN |
| MXDR700AGY | MAXZEN ドライヤー MXDR700A-GY | MAXZEN | 低価格大風量 | 価格を抑えた速乾候補 | 正式メーカー表記、JAN |
| TD760A | マイナスイオンヘアドライヤー TD760A | TESCOM | 軽量静音I字型 | BLDC、I字型、自動温冷、収納性 | 色、JAN |
| SL013GR | SALONIA スピーディーイオンドライヤー グレー | SALONIA | 低価格シンプル速乾 | 低価格、デザイン、速乾の入口 | JAN、上位SALONIAとの差 |
| KHD9330 | KOIZUMI ドライヤー KHD-9330 | KOIZUMI | 大風量スタンダード | 速乾と価格のスタンダード候補 | 正式シリーズ、JAN |
| TD260B | TESCOM ヘアードライヤー TD260B | TESCOM | 低価格コンパクト | 価格、軽さ、シンプル操作 | 風量、JAN |
| HDRM201 | LAVIEL ドライヤー HDR-M201 | LAVIEL | デザイン系バランス | デザインと価格のバランス候補 | 正式メーカー表記、JAN |
| TD561A | プロテクトイオンヘアードライヤー TD561A | TESCOM | 低価格大風量 | 価格を抑えた速乾/イオン候補 | TD570Aとの差、JAN |
| EHNE4K | ヘアードライヤー イオニティ EH-NE4K | Panasonic | イオニティ低価格 | Panasonic指名、価格重視、マイナスイオン | 色、JAN |
| EHNE2K | ヘアードライヤー イオニティ EH-NE2K | Panasonic | イオニティエントリー | とにかく価格を抑えるPanasonic候補 | 風量、JAN |
| HDRM101 | LAVIEL ドライヤー HDR-M101 | LAVIEL | 低価格デザイン | 基本機能と見た目を重視する低価格候補 | 風量、JAN |
| TD620A | プロテクトイオンヘアードライヤー TD620A | TESCOM | 大風量ヘアケア | TESCOM中価格帯の速乾/イオン候補 | TD570Aとの差、JAN |
| IBP300 | Dimple flow dryer IB-P300 | SHARP | 超大風量シンプル速乾 | 約4.8m3/分、TURBO/SET/COLD、マイナスイオン | 色、JAN |
| MHD1234 | mod's hair ドライヤー MHD-1234 | mod's hair | コンパクトデザイン | 収納性とデザインを重視する候補 | 海外対応、JAN |
| KDD0020N | KOIZUMI ドライヤー KDD-0020-N | KOIZUMI | 携帯/旅行向け | 旅行、出張、サブ機、コンパクト需要 | 海外対応、JAN |
| TD565A | プロテクトイオンヘアードライヤー TD565A | TESCOM | 低価格大風量 | 価格、風量、イオンケアのバランス | TD561A/TD570Aとの差、JAN |
| TD105B | TESCOM ヘアードライヤー TD105B | TESCOM | ミニマム低価格 | サブ機、短髪、一人暮らし向け | 風量、JAN |
| KHD9802W | MONSTER ダブルファンドライヤー KHD-9802-W | KOIZUMI | 大風量速乾 | MONSTER系の白系大風量候補 | 世代、重量、JAN |

## 実装メモ

- 49件を `dryerInventory` に集約し、`dryerProducts` として `products` に展開する。
- 型番検索に対応するため、ハイフンなし指定型番とメーカー表記型番を `modelNumber` に併記する。
- 現在は全件 `JAN未確認-...`。旧試験データに入っていたJANは今回の店舗リスト全体と整合しないため、いったん外した。
- `HW001`、YA-MANの一部型番、LAVIEL、MAXZEN、mod's hairの一部は公式ページとの紐付けが弱いため、`caution` に正式商品名・JAN確認を残す。

## 主な出典

- Panasonic EH-NC80: https://panasonic.jp/hair/products/EH-NC80.html
- Panasonic EH-NC50: https://panasonic.jp/hair/products/EH-NC50.html
- Panasonic EH-NA0K: https://panasonic.jp/hair/products/EH-NA0K.html
- Panasonic EH-NA9M: https://panasonic.jp/hair/products/EH-NA9M.html
- Panasonic ヘアードライヤー製品一覧: https://panasonic.jp/hair/products.html
- KINUJO Hair Dryer: https://kinujo.jp/products_dryer/
- SHARP IB-P802: https://jp.sharp/beauty/products/ibp802/
- SHARP IB-P602: https://jp.sharp/beauty/products/ibp602/
- SHARP IB-P300: https://jp.sharp/beauty/products/ibp300/
- Dyson ヘアケア: https://www.dyson.co.jp/hair-care
- TESCOM Beauty ドライヤー: https://www.tescom-japan.co.jp/products/beauty/dryer/
- KOIZUMI Beauty ドライヤー: https://www.koizumiseiki.jp/products/list?category_id=47
- YA-MAN ヘアケア: https://www.ya-man-tokyo-japan.com/products/forhair/
- SALONIA 公式: https://salonia.jp/
