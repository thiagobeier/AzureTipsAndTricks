(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{510:function(t,a,r){"use strict";r.r(a);var e=r(43),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h4",{attrs:{id:"ensure-a-clean-rowkey-in-azure-storage-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ensure-a-clean-rowkey-in-azure-storage-table","aria-hidden":"true"}},[t._v("#")]),t._v(" Ensure a clean RowKey in Azure Storage Table")]),t._v(" "),r("p",[t._v("In case you are new to the Azure Storage Tables, we've reviewed the following items so far:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating your first Azure Storage Table"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding an item to a Azure Storage Table"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reading an item from a Azure Storage Table"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating an item from a Azure Storage Table"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deleting an item from a Azure Storage Table"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ensure a clean RowKey in Azure Storage Table"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"the-problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-problem","aria-hidden":"true"}},[t._v("#")]),t._v(" The problem")]),t._v(" "),r("p",[t._v("If you've ever been working with Azure Table Storage and tried to insert data and received "),r("strong",[t._v("400 Bad Request")]),t._v(", then you've probably narrowed this down to a malformed "),r("strong",[t._v("PartitionKey")]),t._v(" or "),r("strong",[t._v("RowKey")]),t._v(" after many hours. This is due to the fact that for "),r("strong",[t._v("PartitionKey")]),t._v(" and "),r("strong",[t._v("RowKey")]),t._v(", there are some disallowed characters such as:")]),t._v(" "),r("ul",[r("li",[t._v("The forward slash (/) character")]),t._v(" "),r("li",[t._v("The backslash () character")]),t._v(" "),r("li",[t._v("The number sign (#) character")]),t._v(" "),r("li",[t._v("The question mark (?) character")]),t._v(" "),r("li",[t._v("Control characters from U+0000 to U+001F, including:")]),t._v(" "),r("li",[t._v("The horizontal tab (\\t) character")]),t._v(" "),r("li",[t._v("The linefeed (\\n) character")]),t._v(" "),r("li",[t._v("The carriage return (\\r) character")]),t._v(" "),r("li",[t._v("Control characters from U+007F to U+009F")])]),t._v(" "),r("p",[r("strong",[t._v("Debugging in Visual Studio")]),t._v(" If you are debugging in Visual Studio, then you can also check the "),r("em",[t._v("StorageException.RequestInformation.ExtendedInformation")]),t._v(" to gain additional information about the error.")]),t._v(" "),r("h4",{attrs:{id:"the-solution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-solution","aria-hidden":"true"}},[t._v("#")]),t._v(" The Solution")]),t._v(" "),r("p",[t._v("There is many ways that you can handle this, but my favorite is this extension method that simply strips away those characters as shown below.")]),t._v(" "),r("div",{staticClass:"language-csharp line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-csharp"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToAzureKeyString")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" str"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sb "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" str\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\'")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?'")]),t._v("\n                    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsControl")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        sb"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("Append")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sb"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br")])])])},[],!1,null,null,null);a.default=s.exports}}]);