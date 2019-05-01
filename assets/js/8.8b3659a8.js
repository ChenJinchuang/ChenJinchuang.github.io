(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("入门一个新框架最好的方式就是将这个框架的 demo 运行起来。由于 Lin 采用的是前后端分离的架构，所以相比于传统的网站，它的环境搭建会稍显麻烦。但 Lin 并没有采用任何冷门的技术，相比于传统网站，只不过多出了一些对于 Vue 运行环境的支持。")]),s._v(" "),a("p",[s._v("Lin 的 Server 端是基于PHP的第三方开源框架 ThinkPHP 的, 所以你必须首先在自己的 PC 上安装 PHP 环境包。此外，Lin 是一个完整的框架，数据库是必然需要的。")]),s._v(" "),a("p",[s._v("无需担心，我们将详细阐述安装的步骤，让你轻松将 Lin 运行起来。")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._v(" "),a("p",[s._v("执行命令前请确保你已经安装了composer工具")]),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),a("p",[s._v("配置完数据库连接信息后，我们需要为数据库导入一些核心的基础表，在项目根目录中，打开命令行，输入：")]),s._v(" "),s._m(16),a("p",[s._v("当你看到如下提示时，说明迁移脚本已经启动并在数据库中生成了相应的基础数据库表")]),s._v(" "),s._m(17),a("p",[s._v("迁移成功后我们需要为lin_user表插入一条数据，作为超级管理员，方便你后续在前端项目中登陆和测试，继续在命令行中输入：")]),s._v(" "),s._m(18),a("p",[s._v("当你看到如下提示时，说明迁移脚本已经启动并在lin_user表中创建了一条记录")]),s._v(" "),s._m(19),s._m(20),s._v(" "),a("p",[s._v("如果前面的过程一切顺利，项目所需的准备工作就已经全部完成，这时候你就可以试着让工程运行起来了。在工程的根目录打开命令行，输入：")]),s._v(" "),s._m(21),s._m(22),a("p",[s._v("打开浏览器，访问"),a("code",[s._v("http://127.0.0.1:8000")]),s._v("，你会看到一个欢迎界面，至此，Lin-cms-tp5部署完毕，可搭配"),a("a",{attrs:{href:"https://github.com/TaleLin/lin-cms-vue",target:"_blank",rel:"noopener noreferrer"}},[s._v("lin-cms-vue"),a("OutboundLink")],1),s._v("使用了。")]),s._v(" "),a("p",[s._v("如果你安装时遇到问题，那么尝试看看常见问题汇总，看能否解决，或者去我们的 github 仓库看 issue。如果没有出现你的问题，请给我们提 issue。")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"后端起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端起步","aria-hidden":"true"}},[this._v("#")]),this._v(" 后端起步")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"你需要了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你需要了解","aria-hidden":"true"}},[this._v("#")]),this._v(" 你需要了解")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"快速开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速开始","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速开始")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"server-端必备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-端必备环境","aria-hidden":"true"}},[this._v("#")]),this._v(" Server 端必备环境")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("p",[this._v("安装MySQL（version： 5.6+）")])]),this._v(" "),t("li",[t("p",[this._v("安装PHP环境(version： 7.1+)")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"获取工程项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取工程项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取工程项目")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/ChenJinchuang/lin-cms-tp5.git\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("执行完毕后会生成lin-cms-tp5目录")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"安装依赖包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装依赖包")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" lin-cms-tp5\n\ncomposer "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  // 如果长时间卡光标,请更换composer源或者挂梯子\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"数据库配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库配置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Lin 需要你自己在 MySQL 中新建一个数据库，名字由你自己决定。例如，新建一个名为 lin-cms 的数据库。接着，我们需要在工程中进行一项简单的配置。使用编辑器打开 Lin 工程根目录下"),t("code",[this._v("/config/database.php")]),this._v("，找到如下配置项：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'hostname'")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数据库名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'database'")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'lin-cms'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用户名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'username'")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 密码")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'password'")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//省略后面一堆的配置项")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("请务必根据自己的实际情况修改此配置项")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"数据迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据迁移")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("如果你已经部署过官方团队其他版本的Lin-cms后端，并且已经生成了相应基础数据库表和测试数据，可以略过数据迁移章节")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php think migrate:run\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427113042")]),s._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427113042")]),s._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0540")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125215")]),s._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125215")]),s._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0593")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125517")]),s._v(" Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125517")]),s._v(" Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0557")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125655")]),s._v(" LinAuth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125655")]),s._v(" LinAuth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0721")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125839")]),s._v(" LinEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125839")]),s._v(" LinEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0648")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125956")]),s._v(" LinGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125956")]),s._v(" LinGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0656")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130203")]),s._v(" LinLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130203")]),s._v(" LinLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0558")]),s._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130637")]),s._v(" LinPoem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130637")]),s._v(" LinPoem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0879")]),s._v("s\n\nAll Done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Took "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6255")]),s._v("s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php think seed:run\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" UserSeeder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" seeding\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" UserSeeder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" seeded "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0351")]),s._v("s\n\nAll Done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Took "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0385")]),s._v("s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php think run //启动thinkPHP内置的Web服务器\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("ThinkPHP Development server is started On "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//127.0.0.1:8000/>")]),s._v("\nYou can "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" with `"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CTRL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v("`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])}],!1,null,null,null);t.default=e.exports}}]);