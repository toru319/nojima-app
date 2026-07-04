# スマートウォッチ商品調査メモ

作成日: 2026-07-04

## 接客フィルター構想

スマートウォッチは「何を測りたいか」と「どこまでスマホなしで使いたいか」を先に確認すると提案しやすい。

- 使い方: 健康管理、睡眠、運動・ランニング、通知・通話、決済
- 本体・画面: 軽さ、大画面、デザイン、防水
- 機能の深さ: 内蔵GPS、ストレス・情緒、屋外スポーツ、上位健康センサー
- 予算・電池: 低価格帯、バランス、高機能、長時間バッテリー

内部タグは `health`、`sleep`、`built-in-gps`、`payment`、`call-on-wrist` などで管理し、画面には日本語の接客フィルターだけを表示する。

## 調査結果

| メーカー | 商品 | 主なタイプ | 接客で見る性能 | アプリ登録上の注意 |
| --- | --- | --- | --- | --- |
| Mibro | Mibro C4 | 大画面Bluetooth通話対応スマートウォッチ | 2.01インチクラスの大画面、Bluetooth通話、心拍/血中酸素/ストレス、100以上のスポーツモード、2ATM、最大10日 | GPS仕様と国内JANは実販売前に確認 |
| Fitbit | FB424BKYWFBCJK / Fitbit Inspire 3 | 軽量ヘルス&フィットネストラッカー | バンド型、最大10日、50m耐水、SpO2、皮膚温変動、HRV、呼吸数、Connected GPS | コードと公式色展開から Morning Glow / Black と推定。JAN未確認 |
| Fitbit | FB523RGRWFRCJK / Fitbit Versa 4 | GPS・決済対応フィットネススマートウォッチ | 40以上の運動モード、内蔵GPS、Google Maps、Google Wallet、Bluetooth通話、6日以上、50m耐水 | コードと公式色展開から Pink Sand / Copper Rose Aluminum と推定。JAN未確認 |
| Fitbit | FB521GLBMFRCJK / Fitbit Sense 2 | ストレス・健康管理重視スマートウォッチ | cEDA、ストレス通知、心電図、皮膚温、SpO2、内蔵GPS、Google Wallet、Bluetooth通話、6日以上 | コードと公式色展開から Blue Mist / Soft Gold Aluminum と推定。JAN未確認 |
| HUAWEI | HUAWEI WATCH FIT 4 | 高輝度GPSフィットネススマートウォッチ | 1.82インチAMOLED、2,000nits、約27g、L1/L5 GNSS、気圧計、5ATM、通常約10日、Bluetooth通話 | グレーのみNFC対応など、色ごとの差分は販売時に確認 |
| HUAWEI | HUAWEI WATCH FIT 3 | 軽量スクエアフィットネススマートウォッチ | 1.82インチAMOLED、約26g、GPS、100以上の運動モード、5ATM、最大10日、Android/iOS対応 | 日本公式スペックページは現行一覧へリダイレクト。補助ソースで確認 |
| HUAWEI | HUAWEI Band 10 | 睡眠分析重視スマートバンド | 約14-15g、厚さ約8.99mm、1.47インチAMOLED、睡眠HRV、呼吸乱れ、5ATM、通常約14日 | 内蔵GPS、通話、決済は主目的にしない |

## 主な参照元

- Mibro C4 https://www.mibrofit.com/products/mibro-watch-c4
- Fitbit Inspire 3 / Google Store https://www.fitbit.com/global/us/products/trackers/inspire3
- Fitbit Versa 4 / Google Store https://www.fitbit.com/global/us/products/smartwatches/versa4
- Fitbit Sense 2 / Google Store https://www.fitbit.com/global/us/products/smartwatches/sense2
- HUAWEI WATCH FIT 4 機能 https://consumer.huawei.com/jp/wearables/watch-fit4/
- HUAWEI WATCH FIT 4 スペック https://consumer.huawei.com/jp/wearables/watch-fit4/specs/
- HUAWEI WATCH FIT 3 補助情報 https://www.bild.de/service/digital/huawei-watch-fit-3-launch-angebot-neue-watch-fit-3-punktet-mit-ultraschlankem-design-66430f39515dc512b1104ae7
- HUAWEI Band 10 機能 https://consumer.huawei.com/jp/wearables/band10/
- HUAWEI Band 10 スペック https://consumer.huawei.com/jp/wearables/band10/specs/

## 実運用前チェック

- `JAN未確認-...` の商品はJAN検索用の実JANではない。店頭でJAN検索を使う前に正規JANへ差し替える。
- Fitbitの3コードは商品コードとして `modelNumber` に残した。JANか店舗独自コードかは実販売データで確認する。
- Fitbitの色名は、公式Google Store上の色展開とコードからの推定。商品ラベルやノジマ販売ページで確認する。
- HUAWEI WATCH FIT 3 は日本公式スペックページが現行ウェアラブル一覧へリダイレクトされたため、補助ソースも併用した。
- 健康機能は医療目的ではなく、体調管理の参考情報として案内する。
