"use strict";(self.webpackChunkvue3_date_time_picker_documentation=self.webpackChunkvue3_date_time_picker_documentation||[]).push([[5],{4005:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var o=a(6252);const d={class:"demo-wrap"};var n=a(8680),i=a(2650);const l={components:{Datepicker:n.Z},props:["placeholder","noToday","minTime","maxTime","startDate","startTime","disabledWeekDays","allowedDates","showNowButton","nowButtonLabel"],data:()=>({date:null,dark:!0}),mounted(){this.dark=(0,i.vs)()},computed:{hasAllowedDates(){return this.allowedDates?[new Date,new Date((new Date).setDate((new Date).getDate()+1))]:[]}}},s=(0,a(3744).Z)(l,[["render",function(e,t,a,n,i,l){const s=(0,o.up)("Datepicker");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(s,{modelValue:i.date,"onUpdate:modelValue":t[0]||(t[0]=e=>i.date=e),placeholder:a.placeholder,dark:i.dark,"no-today":a.noToday,"min-time":a.minTime,"max-time":a.maxTime,"start-date":a.startDate,"start-time":a.startTime,"disabled-week-days":a.disabledWeekDays,"allowed-dates":l.hasAllowedDates,"show-now-button":a.showNowButton,"now-button-label":a.nowButtonLabel},null,8,["modelValue","placeholder","dark","no-today","min-time","max-time","start-date","start-time","disabled-week-days","allowed-dates","show-now-button","now-button-label"])])}]])},2650:(e,t,a)=>{a.d(t,{vs:()=>o.vs});var o=a(2791);a(8639)},8639:(e,t,a)=>{a.d(t,{Fg:()=>i,c9:()=>d});var o=a(7788);const d=e=>!(0,o.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,n={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},i=({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:i,editLinkPattern:l})=>{const s=d(e);let r;return l?r=l:null!==s&&(r=n[s]),r?r.replace(/:repo/,(0,o.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,o.FY)(`${(0,o.U1)(a)}/${i}`)):null}}}]);