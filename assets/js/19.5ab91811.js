(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{328:function(e,t,o){"use strict";o.r(t);var r=o(43),i=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility","aria-hidden":"true"}},[e._v("#")]),e._v(" A multi-part series showing an end-to-end possibility")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crystal Tenn"),o("OutboundLink")],1),e._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),e._v(" "),o("p",[e._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - SQL Server"),o("OutboundLink")],1),e._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - Visual Studio and Swagger"),o("OutboundLink")],1),e._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger - Learn how to use Swagger for API management"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the SQL database to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding the project to VSTS with Git"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/todolist-diagram.png")}}),e._v(" "),o("h4",{attrs:{id:"two-ways-to-skin-a-cat"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#two-ways-to-skin-a-cat","aria-hidden":"true"}},[e._v("#")]),e._v(" Two ways to skin a cat")]),e._v(" "),o("p",[e._v("We have one Visual Studio Solution and 2 web projects that need to be deployed to Azure. We can tackle this in different ways depending on the operation of our team.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("If we think that one project will be worked on by one team, and another by a different team, we could separate the code into two solutions and upload both to VSTS.  We could also keep them in the same solution and have two Build (CI) definitions, one to build the Angular project and one to build the API project.  Then we could follow it with two separate Release (CD) definitions so that each part can be separately deployed.")])]),e._v(" "),o("li",[o("p",[e._v("Some enterprises will choose to put all pieces of their solution through as a whole, and some places only want to deploy one part at a time. It depends on the complexity of the code, the amount of CI/CD setup you are willing to setup, how the solution(s)/project(s) are divided, and performance requirements (speed/size of CI/CD process).")])])]),e._v(" "),o("p",[e._v("Note: For the simplicity of this little project and to just teach the basics, I am choosing to group these as one solution that gets built as a whole, then I will have one Release that deploys both parts.")]),e._v(" "),o("h4",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("p",[e._v("1.) Make sure that you've completed the following two steps before moving forward:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("04a Azure Deployment - Deploy the SQL database to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("04b Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("The resources must exist before you can complete the CI/CD steps.")]),e._v(" "),o("p",[e._v("2.)  Click on the "),o("strong",[e._v("Build")]),e._v(" tab then hit "),o("strong",[e._v("New Build Definition")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc01.jpg")}}),e._v(" "),o("p",[e._v("3.) Leave all the "),o("strong",[e._v("defaults")]),e._v(" and hit "),o("strong",[e._v("Continue")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc02.jpg")}}),e._v(" "),o("p",[e._v("4.) Select the "),o("strong",[e._v("ASP.NET template")]),e._v(", mouseover it, and hit "),o("strong",[e._v("Apply")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc3.jpg")}}),e._v(" "),o("p",[e._v("5.) You should see the following on the left, choose "),o("strong",[e._v("Process")]),e._v(" first.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc3b.jpg")}}),e._v(" "),o("p",[e._v("6.) Under "),o("strong",[e._v("process")]),e._v(", it will populate a name.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc4.jpg")}}),e._v(" "),o("p",[e._v("7.) Choose "),o("strong",[e._v("Save & Queue")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc5.jpg")}}),e._v(" "),o("p",[e._v("8.) A modal will popup, leave the "),o("strong",[e._v("defaults")]),e._v(", hit "),o("strong",[e._v("Save & Queue")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc6.jpg")}}),e._v(" "),o("p",[e._v("9.) You will see a notification show up with your "),o("strong",[e._v("Build number/name")]),e._v(", click on it:")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc7.jpg")}}),e._v(" "),o("p",[e._v("10.) You will be brought to a "),o("strong",[e._v("build screen")]),e._v(', wait for it to complete and it will show that the "Build succeeded".')]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/blog6-mc8.jpg")}})])},[],!1,null,null,null);t.default=i.exports}}]);