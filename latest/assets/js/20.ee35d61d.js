(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{466:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"旧バージョンからの移行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旧バージョンからの移行"}},[t._v("#")]),t._v(" 旧バージョンからの移行")]),t._v(" "),s("h2",{attrs:{id:"v2-0-0-への移行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0-への移行"}},[t._v("#")]),t._v(" v2.0.0 への移行")]),t._v(" "),s("h3",{attrs:{id:"互換性を損なう変更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#互換性を損なう変更"}},[t._v("#")]),t._v(" 互換性を損なう変更")]),t._v(" "),s("p",[t._v("新しいChart.jsのバージョンへの移行に伴う、より一般的な互換性を損なう変更の影響を受ける可能性がありますので、"),s("a",{attrs:{href:"https://www.chartjs.org/docs/latest/getting-started/v3-migration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chart.js v3 移行ガイド"),s("OutboundLink")],1),t._v("も必ずお読みください。")]),t._v(" "),s("h4",{attrs:{id:"明示的なプラグイン登録"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#明示的なプラグイン登録"}},[t._v("#")]),t._v(" 明示的なプラグイン登録")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ja/guide/getting-started.html#モジュール"}},[t._v("使い方")]),t._v("で説明したように、モジュールバンドラーを使ってビルドする際には、このプラグインを手動で登録する必要があります。")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ChartStreaming "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chartjs-plugin-streaming'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nChart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ChartStreaming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"デフォルトオプション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトオプション"}},[t._v("#")]),t._v(" デフォルトオプション")]),t._v(" "),s("p",[t._v("本プラグインのデフォルトオプションは、"),s("code",[t._v("Chart.defaults.global.plugins.streaming.*")]),t._v("ではなく、"),s("code",[t._v("Chart.defaults.plugins.streaming.*")]),t._v(" で指定するようになり、以下の方法で変更できます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugins.streaming'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("詳しくは、"),s("RouterLink",{attrs:{to:"/ja/guide/getting-started.html#設定"}},[t._v("使い方 › 設定")]),t._v(" をご覧ください。")],1),t._v(" "),s("h4",{attrs:{id:"time-スケールのオーバーライド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-スケールのオーバーライド"}},[t._v("#")]),t._v(" Time スケールのオーバーライド")]),t._v(" "),s("p",[t._v("歴史的な理由により、前バージョンでは 'realtime' スケールだけでなく 'time' スケールでも自動スクロールが有効になっていました。バージョン2.xでは、'realtime' スケールでのみ自動スクロールが有効になっています。")]),t._v(" "),s("h4",{attrs:{id:"update-のトランジションモード"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-のトランジションモード"}},[t._v("#")]),t._v(" Update のトランジションモード")]),t._v(" "),s("p",[s("code",[t._v("onRefresh")]),t._v(" コールバック関数の外側でデータを追加する場合、"),s("code",[t._v("chart.update()")]),t._v(" を明示的に呼び出す必要があります。実行中のアニメーションを中断させないために、前バージョンでは "),s("code",[t._v("update")]),t._v(" 関数で "),s("code",[t._v("preservation")]),t._v(" 設定プロパティをサポートしていましたが、本バージョンではサポートされません。")]),t._v(" "),s("p",[t._v("Chart.js v3 ではトランジションモードを指定する引数が導入され、本プラグインではこの目的のために "),s("code",[t._v("'quiet'")]),t._v(" モードをサポートしています。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quiet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("詳しくは、"),s("RouterLink",{attrs:{to:"/ja/guide/data-feed-models.html#プルモデル-ポーリング型-非同期"}},[t._v("データフィードモデル › プルモデル（ポーリング型） - 非同期")]),t._v(" をご覧ください。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);