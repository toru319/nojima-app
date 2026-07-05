# イヤホン商品調査メモ

更新日: 2026-07-06

## 今回の整理方針

従来の `tags` は接客フィルター用の粗い分類だったため、「ノイズキャンセリングあり」「インナーイヤー型」「LDAC対応」「ケース込み再生時間」のような比較に必要な仕様を十分に扱えなかった。今回、登録済みイヤホン22商品に `specs` を追加し、絞り込み、商品カード、比較表で使える構造化仕様に分けた。

公式確認できない仕様は `要確認` として表示する。`要確認` の値は絞り込み条件に一致させない。

## specs項目

| キー | 内容 |
| --- | --- |
| `formFactor` | `カナル型`、`インナーイヤー型`、`オープンイヤー型`、`イヤーカフ型`、`睡眠特化型`、`要確認` |
| `anc` | アクティブノイズキャンセリング。`true` / `false` / `要確認` |
| `ambientMode` | 外音取り込み。`true` / `false` / `要確認` |
| `codecs` | 対応コーデック。例: `SBC`, `AAC`, `LDAC`, `LC3` |
| `spatialAudio` | 空間オーディオ、Dolby、3D系。`true` / `false` / `要確認` |
| `multipoint` | マルチポイント接続。`true` / `false` / `要確認` |
| `waterResistance` | 防水等級。例: `IPX4`, `IP55` |
| `batterySingle` | イヤホン単体の最大再生時間。数値または `要確認` |
| `batteryTotal` | ケース込み最大再生時間。数値または `要確認` |
| `weightEach` | 片耳重量。数値または `要確認` |
| `wirelessCharging` | ケースのワイヤレス充電。`true` / `false` / `要確認` |
| `appSupport` | 専用アプリ対応。`true` / `false` / `要確認` |
| `callFeatures` | 通話ノイズ低減、AI通話、マイク非搭載など |
| `notes` | 接客上の補足 |
| `sourceStatus` | `公式確認` または `要確認` |

## 商品別構造化仕様

| 商品 | 装着方式 | ANC | 外音 | コーデック | 空間 | マルチ | 防水 | 単体/合計 | 重量 | 充電 | 確認 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Soundcore Liberty 5 Pro | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 |
| Soundcore Liberty 5 | カナル型 | あり | あり | SBC/AAC/LDAC | あり | 要確認 | IP55 | 12h/48h | 要確認 | 要確認 | 公式確認 |
| Soundcore Liberty 4 Pro | カナル型 | あり | あり | SBC/AAC/LDAC | あり | あり | IP55 | 10h/40h | 要確認 | あり | 公式確認 |
| Soundcore Liberty 4 | カナル型 | あり | あり | SBC/AAC/LDAC | あり | 要確認 | IPX4 | 9h/28h | 要確認 | 要確認 | 公式確認 |
| Soundcore Sleep A20 | 睡眠特化型 | なし | なし | SBC/AAC | なし | なし | IPX4 | 10h/55h | 3g | なし | 公式確認 |
| Soundcore C50i | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 |
| Soundcore C40i | イヤーカフ型 | なし | なし | SBC/AAC | あり | あり | IPX4 | 7h/21h | 要確認 | なし | 公式確認 |
| Soundcore AeroClip | イヤーカフ型 | なし | なし | SBC/AAC/LDAC | なし | あり | IP55 | 8h/32h | 要確認 | なし | 公式確認 |
| Soundcore Liberty Buds | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 | 要確認 |
| Soundcore P40i | カナル型 | あり | あり | SBC/AAC | なし | あり | IPX5 | 12h/60h | 要確認 | なし | 公式確認 |
| Soundcore K20i | インナーイヤー型 | なし | なし | SBC/AAC | なし | なし | IPX5 | 6h/36h | 3.3g | なし | 公式確認 |
| Victor HA-FX150T | カナル型 | あり | あり | SBC/AAC | なし | なし | IPX4 | 7.5h/21h | 4.4g | なし | 公式確認 |
| Victor HA-A22T | カナル型 | あり | あり | SBC/AAC | なし | なし | IPX4 | 要確認/26h | 要確認 | なし | 公式確認 |
| Victor HA-NP1T | イヤーカフ型 | なし | なし | SBC/AAC | なし | なし | IPX4 | 8h/24h | 4.9g | なし | 公式確認 |
| Victor HA-A110T | カナル型 | あり | あり | SBC/AAC/LDAC | なし | あり | IPX4 | 11h/44h | 要確認 | あり | 公式確認 |
| SONY WF-1000XM6 | カナル型 | あり | あり | SBC/AAC/LDAC/LC3 | あり | あり | IPX4 | 8h/24h | 要確認 | あり | 公式確認 |
| SONY LinkBuds Fit | カナル型 | あり | あり | SBC/AAC/LDAC/LC3 | あり | あり | IPX4 | 5.5h/21h | 4.9g | なし | 公式確認 |
| SONY LinkBuds S | カナル型 | あり | あり | SBC/AAC/LDAC/LC3 | あり | あり | IPX4 | 6h/20h | 4.8g | なし | 公式確認 |
| SONY WF-C710N | カナル型 | あり | あり | SBC/AAC | なし | あり | IPX4 | 8.5h/30h | 要確認 | なし | 公式確認 |
| SONY WF-C510 | カナル型 | なし | あり | SBC/AAC | なし | あり | IPX4 | 11h/22h | 4.6g | なし | 公式確認 |
| Technics EAH-AZ100 | カナル型 | あり | あり | SBC/AAC/LDAC/LC3 | あり | あり | IPX4 | 10h/28h | 5.9g | あり | 公式確認 |
| Technics EAH-AZ40M2 | カナル型 | あり | あり | SBC/AAC/LDAC | なし | あり | IPX4 | 5.5h/18h | 要確認 | なし | 公式確認 |

## 接客・実装上の注意

- `Soundcore Liberty 5 Pro`、`Soundcore C50i`、`Soundcore Liberty Buds` は公式確認が弱いため、`sourceStatus: "要確認"` とし、ANCやLDACなどの機能フィルターには一致させない。
- `ANCなしでもよい` は `anc: false` の商品だけに一致する。`要確認` は含めない。
- `防水あり` は `waterResistance` が `IPX4` や `IP55` など確認済みの場合だけ一致する。
- `電池持ち重視` はケース込み30時間以上を目安にした。
- 重量が未確認の商品は「小さく軽い」フィルターには仕様条件では一致しないが、既存タグがある場合はチップ表示では補助的に見える。

## 主な参照元

- Anker Japan: Soundcore Liberty 5 https://www.ankerjapan.com/products/a3957
- Anker Japan: Soundcore Liberty 4 Pro https://www.ankerjapan.com/products/a3954
- Anker Japan: Soundcore Liberty 4 https://www.ankerjapan.com/products/a3953
- Anker Japan: Soundcore Sleep A20 https://www.ankerjapan.com/products/a6611
- Anker Japan: Soundcore C40i https://www.ankerjapan.com/products/a3331
- Anker Japan: Soundcore AeroClip https://www.ankerjapan.com/products/a3388
- Anker Japan: Soundcore P40i https://www.ankerjapan.com/products/a3955
- Anker Japan: Soundcore K20i https://www.ankerjapan.com/products/a3994
- Victor HA-FX150T https://www.victor.jp/headphones/lineup/ha-fx150t/
- Victor HA-A22T https://www.victor.jp/headphones/lineup/ha-a22t/
- Victor HA-NP1T https://www.victor.jp/headphones/lineup/ha-np1t/
- Victor HA-A110T https://www.victor.jp/headphones/lineup/ha-a110t/
- SONY WF-1000XM6 https://www.sony.jp/headphone/products/WF-1000XM6/
- SONY LinkBuds Fit https://www.sony.jp/headphone/products/LinkBuds_Fit/
- SONY LinkBuds S https://www.sony.jp/headphone/products/LinkBuds_S/
- SONY WF-C710N https://www.sony.jp/headphone/products/WF-C710N/
- SONY WF-C510 https://www.sony.jp/headphone/products/WF-C510/
- Technics EAH-AZ100 https://jp.technics.com/products/tws/az100/
- Technics EAH-AZ40M2 https://jp.technics.com/products/tws/az40m2/

## 実運用前チェック

- `JAN未確認-...` は実JANではない。店頭JAN検索を使う前に正規JANへ差し替える。
- 仕様はメーカー公式と商品マスターで最終確認する。
- 価格は変動するため、アプリでは低価格帯/中価格帯/高価格帯/プレミアム価格帯のみを表示する。
