(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7270)}])},7270:function(s,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var n=a(5893),t=a(7526),i=a.n(t),c=a(7294),l=a(1343),o=a(990),r=a(5317);function d(){var s=new Date,e=new Date("2023-06-16T18:00:00").getTime()/1e3-s.getTime()/1e3,a=Math.floor(e/86400),t=Math.floor((e-=86400*a)/3600)%24,d=Math.floor((e-=3600*t)/60)%60,h=(e-=60*d)%60;return e-=60*h,(0,c.useEffect)(()=>{({$el:i()(".countdown"),countdown_interval:null,total_seconds:0,init:function(){this.$={days:this.$el.find(".bloc-time.days .figure"),hours:this.$el.find(".bloc-time.hours .figure"),minutes:this.$el.find(".bloc-time.min .figure"),seconds:this.$el.find(".bloc-time.sec .figure")},this.values={days:a,hours:t,minutes:d,seconds:h},this.total_seconds=86400*this.values.days+3600*this.values.hours+60*this.values.minutes+this.values.seconds,console.log(this),this.count()},count:function(){var s=this,e=this.$.days.eq(0),a=this.$.days.eq(1),n=this.$.hours.eq(0),t=this.$.hours.eq(1),i=this.$.minutes.eq(0),c=this.$.minutes.eq(1),l=this.$.seconds.eq(0),o=this.$.seconds.eq(1);this.countdown_interval=setInterval(function(){s.total_seconds>0?(--s.values.seconds,s.values.minutes>=0&&s.values.seconds<0&&(s.values.seconds=59,--s.values.minutes),s.values.hours>=0&&s.values.minutes<0&&(s.values.minutes=59,--s.values.hours),s.values.days>=0&&s.values.hours<0&&(s.values.hours=23,--s.values.days),s.checkHour(s.values.days,e,a),s.checkHour(s.values.hours,n,t),s.checkHour(s.values.minutes,i,c),s.checkHour(s.values.seconds,l,o),--s.total_seconds):clearInterval(s.countdown_interval)},1e3)},animateFigure:function(s,e){var a=s.find(".top"),n=s.find(".bottom"),t=s.find(".top-back"),i=s.find(".bottom-back");t.find("span").html(e),i.find("span").html(e),o.Q3.to(a,.8,{rotationX:"-180deg",transformPerspective:300,ease:r.CQ.easeOut,onComplete:function(){a.html(e),n.html(e),o.Q3.set(a,{rotationX:0})}}),o.Q3.to(t,.8,{rotationX:0,transformPerspective:300,ease:r.CQ.easeOut,clearProps:"all"})},checkHour:function(s,e,a){var n=s.toString().charAt(0),t=s.toString().charAt(1),i=e.find(".top").html(),c=a.find(".top").html();s>=10?(i!==n&&this.animateFigure(e,n),c!==t&&this.animateFigure(a,t)):("0"!==i&&this.animateFigure(e,0),c!==n&&this.animateFigure(a,n))}}).init()},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:l.all,children:(0,n.jsx)("div",{className:l.container,children:(0,n.jsx)("div",{className:l.content,children:(0,n.jsx)("div",{className:"wrap",children:(0,n.jsxs)("div",{className:"countdown mt-5 ",children:[(0,n.jsxs)("div",{className:"bloc-time days","data-init-value":"0",children:[(0,n.jsx)("span",{className:"count-title",children:"Giorni"}),(0,n.jsxs)("div",{className:"figure days days-1",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]}),(0,n.jsxs)("div",{className:"figure days days-2",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]})]}),(0,n.jsxs)("div",{className:"bloc-time hours","data-init-value":"0",children:[(0,n.jsx)("span",{className:"count-title",children:"Ore"}),(0,n.jsxs)("div",{className:"figure hours hours-1",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]}),(0,n.jsxs)("div",{className:"figure hours hours-2",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]})]}),(0,n.jsxs)("div",{className:"bloc-time min","data-init-value":"0",children:[(0,n.jsx)("span",{className:"count-title",children:"Minuti"}),(0,n.jsxs)("div",{className:"figure min min-1",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]}),(0,n.jsxs)("div",{className:"figure min min-2",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]})]}),(0,n.jsxs)("div",{className:"bloc-time sec","data-init-value":"0",children:[(0,n.jsx)("span",{className:"count-title",children:"Secondi"}),(0,n.jsxs)("div",{className:"figure sec sec-1",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]}),(0,n.jsxs)("div",{className:"figure sec sec-2 mb-5",children:[(0,n.jsx)("span",{className:"top",children:"0"}),(0,n.jsx)("span",{className:"top-back",children:(0,n.jsx)("span",{children:"0"})}),(0,n.jsx)("span",{className:"bottom",children:"0"}),(0,n.jsx)("span",{className:"bottom-back",children:(0,n.jsx)("span",{children:"0"})})]})]})]})})})})})})}var h=a(1664),u=a.n(h),m=a(682),x=a(4051),p=a(1555),A=a(9836),j=a(2115),N={src:"/2023/_next/static/media/lambrockarco.6e50d61e.png",height:1616,width:4477,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEX40uD61uD/wOD60N3/3fT72ub4zNolckKaAAAAB3RSTlMmZgE8C1NMQpCI3QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5JREFUeJwFwYEBAAAIgjDE6v+T25AkhzSFZmFUhwcCUQAuD/HD8QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},b={src:"/2023/_next/static/media/lupiFalo.0903e437.png",height:4169,width:5906,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEX+//+PkJLj4+S4ubrv8PDW19eurrB9fYDQ0NGgoKKEhIZra25Bw3UMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nCWKyQ0AMAyD7Nxp99+3SsMLIQCY4SMaKiOR3SwATjIn6bG6vtvwAAzoAHsZxXeIAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6};function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{src:b,alt:"lupifalo",layout:"fill",objectFit:"cover",objectPosition:"center",priority:!0,style:{zIndex:-1}}),(0,n.jsx)("div",{className:"position-fixed w-100 h-100",style:{background:"#0003"}}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(x.Z,{className:"d-flex align-items-center justify-content-center",children:(0,n.jsx)(p.Z,{xs:{span:20,order:1},sm:{span:12,order:1},children:(0,n.jsx)(j.Z,{src:N,layout:"responsive",alt:"LambrockArco",className:A.lambrockarco,priority:!0})})})}),(0,n.jsxs)(m.Z,{fluid:!0,className:"mb-5",zIndex:1,children:[(0,n.jsx)(x.Z,{className:"mb-5 d-flex align-items-center justify-content-center text-center",children:(0,n.jsx)(p.Z,{sm:12,children:(0,n.jsxs)("h2",{className:A.date,children:["Giugno ",(0,n.jsx)("span",{children:"16/17/18"})]})})}),(0,n.jsx)(x.Z,{className:"d-flex align-items-center justify-content-center text-center",children:(0,n.jsx)(u(),{href:"/home",className:A.btn,children:"Entra nella tana del lupo"})})]}),(0,n.jsx)(x.Z,{className:"d-flex",children:(0,n.jsx)(p.Z,{sm:12,children:(0,n.jsx)(d,{})})})]})}},1343:function(s){s.exports={container:"Countdown_container__iSM5T",content:"Countdown_content__JFzHl",lupifalocol:"Countdown_lupifalocol__sEgKo",date:"Countdown_date__9vBt9"}},9836:function(s){s.exports={btn:"Index_btn__gVooN",date:"Index_date__hHcc5"}}},function(s){s.O(0,[571,802,39,990,774,888,179],function(){return s(s.s=5557)}),_N_E=s.O()}]);