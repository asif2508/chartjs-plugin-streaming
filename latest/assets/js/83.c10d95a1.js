(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{529:function(n,t,a){"use strict";a.r(t);var o=a(19),e=Object(o.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"splash-of-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splash-of-color"}},[n._v("#")]),n._v(" Splash of color")]),n._v(" "),a("p",[n._v("Chart.js provides many options that can help you customize your charts with scales, tooltips, labels, colors, custom actions, and much more. See the Chart.js "),a("a",{attrs:{href:"https://www.chartjs.org/docs",target:"_blank",rel:"noopener noreferrer"}},[n._v("documentation"),a("OutboundLink")],1),n._v(" and "),a("a",{attrs:{href:"https://www.chartjs.org/samples",target:"_blank",rel:"noopener noreferrer"}},[n._v("samples"),a("OutboundLink")],1),n._v(" for more details.")]),n._v(" "),a("chart-editor",{attrs:{code:"// <block:config>\nconst config = {\n  type: 'line',\n  data: {\n    datasets: [\n      {\n        label: 'Dataset 1',\n        backgroundColor: 'rgba(255, 99, 132, 0.5)',\n        borderColor: 'rgb(255, 99, 132)',\n        borderDash: [8, 4],\n        fill: true,\n        data: []\n      },\n      {\n        label: 'Dataset 2',\n        backgroundColor: 'rgba(54, 162, 235, 0.5)',\n        borderColor: 'rgb(54, 162, 235)',\n        cubicInterpolationMode: 'monotone',\n        fill: true,\n        data: []\n      }\n    ]\n  },\n  options: {\n    scales: {\n      x: {\n        type: 'realtime',\n        realtime: {\n          delay: 2000,\n          onRefresh: chart => {\n            chart.data.datasets.forEach(dataset => {\n              dataset.data.push({\n                x: Date.now(),\n                y: Math.random()\n              });\n            });\n          }\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nconfig.options.plugins = {\n  annotation: false,\n  datalabels: false,\n  zoom: false\n};\n\nmodule.exports = {\n  config: config\n};\n"}}),a("p",[n._v("...and you're done!")]),n._v(" "),a("p",[n._v("See also "),a("a",{attrs:{href:"https://github.com/nagix/chartjs-plugin-streaming",target:"_blank",rel:"noopener noreferrer"}},[n._v("GitHub repository"),a("OutboundLink")],1),n._v(" and "),a("RouterLink",{attrs:{to:"/samples/"}},[n._v("samples")]),n._v(".")],1)],1)}),[],!1,null,null,null);t.default=e.exports}}]);