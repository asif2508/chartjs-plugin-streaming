(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{528:function(t,n,a){"use strict";a.r(n);var s=a(19),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-a-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-chart"}},[t._v("#")]),t._v(" Create a chart")]),t._v(" "),a("p",[t._v("Now, we can create a chart. We add a script to our page. Use the default settings for now. These can be tweaked later.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:config>\nconst config = {\n  type: 'line',\n  data: {\n    datasets: [\n      {\n        data: []\n      },\n      {\n        data: []\n      }\n    ]\n  },\n  options: {\n    scales: {\n      x: {\n        type: 'realtime'\n      }\n    }\n  }\n};\n// </block:config>\n\nconfig.options.plugins = {\n  annotation: false,\n  datalabels: false,\n  zoom: false\n};\n\nmodule.exports = {\n  config: config\n};\n"}}),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myChart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  config\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);