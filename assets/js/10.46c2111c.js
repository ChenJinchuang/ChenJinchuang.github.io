(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{360:function(s,a,t){"use strict";t.r(a);var n=t(43),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"后端起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端起步"}},[s._v("#")]),s._v(" 后端起步")]),s._v(" "),t("h1",{attrs:{id:"你需要了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你需要了解"}},[s._v("#")]),s._v(" 你需要了解")]),s._v(" "),t("p",[s._v("入门一个新框架最好的方式就是将这个框架的 demo 运行起来。由于 Lin 采用的是前后端分离的架构，所以相比于传统的网站，它的环境搭建会稍显麻烦。但 Lin 并没有采用任何冷门的技术，相比于传统网站，只不过多出了一些对于 Vue 运行环境的支持。")]),s._v(" "),t("p",[s._v("Lin 的 Server 端是基于PHP的第三方开源框架 ThinkPHP 的, 所以你必须首先在自己的 PC 上安装 PHP 环境包。此外，Lin 是一个完整的框架，数据库是必然需要的。")]),s._v(" "),t("p",[s._v("无需担心，我们将详细阐述安装的步骤，让你轻松将 Lin 运行起来。")]),s._v(" "),t("h1",{attrs:{id:"快速开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[s._v("#")]),s._v(" 快速开始")]),s._v(" "),t("h2",{attrs:{id:"server-端必备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-端必备环境"}},[s._v("#")]),s._v(" Server 端必备环境")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装MySQL（version： 5.6+）")])]),s._v(" "),t("li",[t("p",[s._v("安装PHP环境(version： 7.1+)")])])]),s._v(" "),t("h2",{attrs:{id:"获取工程项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取工程项目"}},[s._v("#")]),s._v(" 获取工程项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ChenJinchuang/lin-cms-tp5.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("执行完毕后会生成lin-cms-tp5目录，目前TP5版本适配的前端是0.2.x版本，请注意后面在拉取lin-cms-vue后需要在lin-cms-vue的根目录下运行如下命令：git checkout -b 0.2.x origin/0.2.x   新版本的适配工作已近尾声，请留意更新日志")])]),s._v(" "),t("h2",{attrs:{id:"安装依赖包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包"}},[s._v("#")]),s._v(" 安装依赖包")]),s._v(" "),t("p",[s._v("执行命令前请确保你已经安装了composer工具")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" lin-cms-tp5\n\ncomposer "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  // 如果长时间卡光标,请更换composer源或者挂梯子\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"数据库配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[s._v("#")]),s._v(" 数据库配置")]),s._v(" "),t("p",[s._v("Lin 需要你自己在 MySQL 中新建一个数据库，名字由你自己决定。例如，新建一个名为 lin-cms 的数据库。接着，我们需要在工程中进行一项简单的配置。使用编辑器打开 Lin 工程根目录下"),t("code",[s._v("/config/database.php")]),s._v("，找到如下配置项：")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器地址")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'hostname'")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数据库名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'database'")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'lin-cms'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用户名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'username'")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 密码")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'password'")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//省略后面一堆的配置项")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("请务必根据自己的实际情况修改此配置项")])]),s._v(" "),t("h2",{attrs:{id:"数据迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移"}},[s._v("#")]),s._v(" 数据迁移")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你已经部署过官方团队其他版本的Lin-cms后端，并且已经生成了相应基础数据库表，可以略过数据迁移章节，但必须将原来lin_user表中super记录删除(密码加密方式不一致，会导致登陆失败)，并在根目录下运行")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("php think seed:run  //这条命令会为你在lin_user表中插入一条记录,即super\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置完数据库连接信息后，我们需要为数据库导入一些核心的基础表，在项目根目录中，打开命令行，输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("php think migrate:run\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你看到如下提示时，说明迁移脚本已经启动并在数据库中生成了相应的基础数据库表")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427113042")]),s._v(" User"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427113042")]),s._v(" User"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0540")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125215")]),s._v(" Book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125215")]),s._v(" Book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0593")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125517")]),s._v(" Image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125517")]),s._v(" Image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0557")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125655")]),s._v(" LinAuth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125655")]),s._v(" LinAuth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0721")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125839")]),s._v(" LinEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125839")]),s._v(" LinEvent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0648")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125956")]),s._v(" LinGroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427125956")]),s._v(" LinGroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0656")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130203")]),s._v(" LinLog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130203")]),s._v(" LinLog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0558")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130637")]),s._v(" LinPoem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrating\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190427130637")]),s._v(" LinPoem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" migrated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0879")]),s._v("s\n\nAll Done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Took "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6255")]),s._v("s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("迁移成功后我们需要为lin_user表插入一条数据，作为超级管理员，方便你后续在前端项目中登陆和测试，继续在命令行中输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("php think seed:run\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你看到如下提示时，说明迁移脚本已经启动并在lin_user表中创建了一条记录")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" UserSeeder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" seeding\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" UserSeeder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" seeded "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0351")]),s._v("s\n\nAll Done"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Took "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0385")]),s._v("s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("如果前面的过程一切顺利，项目所需的准备工作就已经全部完成，这时候你就可以试着让工程运行起来了。在工程的根目录打开命令行，输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("php think run --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" //启动thinkPHP内置的Web服务器\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("ThinkPHP Development server is started On "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//127.0.0.1:5000/>")]),s._v("\nYou can "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v(" with `"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CTRL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v("`\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("打开浏览器，访问"),t("code",[s._v("http://127.0.0.1:5000")]),s._v("，你会看到一个欢迎界面，至此，Lin-cms-tp5部署完毕，可搭配"),t("a",{attrs:{href:"https://github.com/TaleLin/lin-cms-vue",target:"_blank",rel:"noopener noreferrer"}},[s._v("lin-cms-vue"),t("OutboundLink")],1),s._v("使用了。")]),s._v(" "),t("p",[s._v("如果你安装时遇到问题，那么尝试看看常见问题汇总，看能否解决，或者去我们的 github 仓库看 issue。如果没有出现你的问题，请给我们提 issue。")])])}),[],!1,null,null,null);a.default=e.exports}}]);