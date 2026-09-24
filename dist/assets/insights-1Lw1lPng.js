import{t as e}from"./modulepreload-polyfill-D3Tm_XB5.js";import{n as t,t as n}from"./config-BdaNtURP.js";e((()=>{n();var e=e=>{let t=new Date(e),n=t.getDay(),r=n===0?7:n;return t.setDate(t.getDate()-r+1),t},r=t=>{let n={};return t.forEach(t=>{let r=e(t.created_at).toISOString().split(`T`)[0];n[r]||(n[r]={items:0,revenue:0,cost:0,itemsMap:{}}),n[r].items+=t.quantity,n[r].revenue+=t.total,n[r].cost+=t.items.cost*t.quantity;let i=t.items.name;n[r].itemsMap[i]||(n[r].itemsMap[i]=0),n[r].itemsMap[i]+=t.quantity}),n},i=e=>{let t=Object.entries(e);return t.sort((e,t)=>t[1]-e[1]),{most:t[0],least:t[t.length-1]}},a=e=>new Date(e).toLocaleDateString(`en-GB`),o=e=>{let t=document.getElementById(`container`);t.innerHTML=``;for(let n in e){let r=e[n],{most:o,least:s}=i(r.itemsMap),c=new Date(n);c.setDate(c.getDate()+6);let l=r.revenue-r.cost,u=`

        <table>
          <caption id="weekDate">
            ${a(n)} - ${a(c)}
          </caption>
          <thead>
            <tr>
              <td>ITEMS SOLD</td>
              <td>TOTAL REVENUE</td>
              <td>MOST SOLD</td>
              <td>LEAST SOLD</td>
              <td>GROSS PROFIT</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${r.items}</td>
              <td>${r.revenue} MAD</td>
              <td>${o[0]} (${o[1]})</td>
              <td>${s[0]} (${s[1]})</td>
              <td>${l} MAD</td>
            </tr>
          </tbody>
        </table>
        `;t.innerHTML+=u}},s=async()=>{let{data:e,error:n}=await t.auth.getUser();if(n){console.log(`Error getting user : ${n.message}`);return}let i=e.user,{data:a,error:s}=await t.from(`sales`).select(`item_id, quantity, total, created_at, items(name, cost)`).eq(`user_id`,i.id).order(`created_at`,{ascending:!1});if(s){console.log(`Error getting sales : ${s.message}`);return}if(!a.length){document.querySelector(`.container`).innerHTML=`<p style="text-align: center;" >No sales tracked this week yet. </p>`;return}o(r(a))},c=async()=>{let{data:e}=await t.auth.getSession();e.session||(window.location.href=`auth.html`)};document.addEventListener(`DOMContentLoaded`,async()=>{await c(),await s()})}))();