import{n as e,t}from"./modulepreload-polyfill-D3Tm_XB5.js";import{n,t as r}from"./config-BdaNtURP.js";import{n as i,t as a}from"./getUser-DU8lhiHH.js";var o,s=e((()=>{o=e=>e.split(` `).map(e=>e[0].toUpperCase()+e.slice(1)).join(` `)}));t((()=>{r(),s(),i();var e=`
  <svg
    height="25"
    width="25"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>
`,t=`
  <svg
    height="25"
    width="25"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.41 25L30 21.41L28.59 20L25 23.59L21.41 20L20 21.41L23.59 25L20 28.59L21.41 30L25 26.41L28.59 30L30 28.59L26.41 25zM18 2A12.035 12.035 0 0 0 6 14v6.2l-3.6-3.6L1 18l6 6l6-6l-1.4-1.4L8 20.2V14a10 10 0 0 1 20 0v3h2v-3A12.035 12.035 0 0 0 18 2z"
      fill="currentColor"
    />
  </svg>
`,c=`
  <svg
    height="20"
    width="20"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64s-64 28.656-64 64s28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512c0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01z"
      fill="currentColor"
    />
  </svg>
`,l=null,u={overlay:document.getElementById(`overlay`),logOutModal:document.getElementById(`logOutModel`),cancelLogOut:document.getElementById(`cancelLogOut`),confirmLogOut:document.getElementById(`confirmLogOut`),profileIcon:document.getElementById(`profileIcon`),bottomProfileIcon:document.getElementById(`bottom-profile-icon`),profileCard:document.getElementById(`profileCard`),closeProfileCard:document.getElementById(`closeProfileCard`),displayName:document.getElementById(`business-name`),productsCount:document.getElementById(`products-count`),userEmail:document.getElementById(`userEmail`),darkModeButton:document.getElementById(`dark_mode`),lightModeButton:document.getElementById(`light_mode`),selectedPage:document.getElementById(`selected_page`),salesTable:document.getElementById(`salesTable`),tableBody:document.getElementById(`table-body`),totalRevenueDisplay:document.getElementById(`totalRevenueDisplay`),notifContainer:document.getElementById(`notifContainer`),progressBar:document.getElementById(`progress_bar`),svgContainer:document.getElementById(`svgContainer`),notifText:document.getElementById(`notifText`),logOutButton:document.getElementById(`logOut`)},d=(e,t)=>{let{notifContainer:n,progressBar:r,svgContainer:i,notifText:a}=u;i.innerHTML=t,a.textContent=e,n.classList.add(`show_notif`),setTimeout(()=>{r.classList.add(`move`)},100),setTimeout(()=>{n.classList.remove(`show_notif`),r.classList.remove(`move`)},3300)},f=async()=>{let{data:{session:e},error:t}=await n.auth.getSession();return t?(console.error(`Error checking session:`,t),!1):e?!0:(window.location.href=`auth.html`,!1)},p=async()=>{let{data:{user:e},error:t}=await n.auth.getUser();if(t){console.error(`Error getting user:`,t),t.message?.toLowerCase().includes(`expired`)&&(d(`Session expired. Please sign in again.`,c),setTimeout(()=>{window.location.href=`auth.html`},2e3));return}e&&(u.userEmail.textContent=e.email)},m=async()=>{let{error:e}=await n.auth.signOut();if(e){console.error(`Error signing out:`,e),d(`Error signing out: ${e.message}`,t);return}window.location.href=`auth.html`},h=e=>{let t=e===`dark`;document.body.classList.toggle(`dark_mode`,t),u.darkModeButton.style.display=t?`none`:`block`,u.lightModeButton.style.display=t?`block`:`none`},g=()=>{h(localStorage.getItem(`theme`)||`light`),u.darkModeButton.addEventListener(`click`,()=>{localStorage.setItem(`theme`,`dark`),h(`dark`)}),u.lightModeButton.addEventListener(`click`,()=>{localStorage.setItem(`theme`,`light`),h(`light`)})},_=()=>new Date().toISOString().split(`T`)[0],v=async e=>{let{data:t,error:r}=await n.from(`business_days`).insert({date_label:e,is_active:!0,open_time:new Date().toISOString()}).select(`id`).single();if(r)throw console.error(`Error starting business day:`,r),r;return l=t.id,d(`New business day started`,c),l},y=async e=>{let{error:t}=await n.from(`business_days`).update({is_active:!0,open_time:new Date().toISOString(),close_time:null}).eq(`id`,e);if(t)throw console.error(`Error reactivating business day:`,t),t;return l=e,d(`Business day reopened`,c),l},b=async e=>{let{data:t,error:r}=await n.from(`sales`).select(`
      quantity,
      items (
        price
      )
    `).eq(`business_day_id`,e);if(r)throw console.error(`Error fetching sales before closing day:`,r),r;let i=t.reduce((e,t)=>e+t.quantity*t.items.price,0),a=t.reduce((e,t)=>e+t.quantity,0),{error:o}=await n.from(`daily_summary`).insert({business_day_id:e,date:_(),total_revenue:i,total_items_sold:a});if(o)throw console.error(`Error saving daily summary:`,o),o;let{error:s}=await n.from(`business_days`).update({is_active:!1,close_time:new Date().toISOString()}).eq(`id`,e);if(s)throw console.error(`Error closing business day:`,s),s},x=async()=>{let e=_(),{data:t,error:r}=await n.from(`business_days`).select(`id, date_label, is_active`).order(`open_time`,{ascending:!1}).limit(1).maybeSingle();if(r)throw console.error(`Error fetching business day:`,r),r;if(!t)return v(e);let i=t.date_label===e;return i&&t.is_active?(l=t.id,l):i&&!t.is_active?y(t.id):(!i&&t.is_active&&await b(t.id),v(e))},S=async()=>{l||=await x();let{data:e,error:t}=await n.from(`sales`).select(`
      id,
      quantity,
      items (
        name,
        price
      )
    `).eq(`business_day_id`,l);if(t)throw console.error(`Error fetching sales:`,t),t;return e??[]},C=e=>e.reduce((e,t)=>e+t.quantity*t.items.price,0),w=e=>{let t=document.createElement(`tr`),n=o(e.items.name),r=e.quantity*e.items.price;return t.innerHTML=`
    <td > 
  <span class="bullet"></span> ${n}
    </td>

    <td class="align-center quantity">
      <span class="quantity-badge">
        ${e.quantity}
      </span>
    </td>

    <td class="align-right revenue">
      <span class="revenue-number">
        ${r}
      </span>

      <span class="currency">
        MAD
      </span>
    </td>

    <td class="center-content">
      <button
        type="button"
        class="delete-row-btn"
        data-id="${e.id}"
        data-name="${n}"
        title="Remove Sale"
        aria-label="Remove ${n} sale"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </td>
  `,t},T=e=>{if(u.tableBody.innerHTML=``,salesTable.style.display=`none`,!e.length){let e=document.createElement(`tr`);e.innerHTML=`
      <td colspan="4" class="noItemsFeedback">
        No sales tracked for today
      </td>
    `,u.tableBody.append(e),u.totalRevenueDisplay.textContent=`0 MAD`;return}let t=document.createDocumentFragment();e.forEach(e=>{t.prepend(w(e))}),u.tableBody.append(t);let n=C(e);u.totalRevenueDisplay.textContent=`${n} MAD`},E=async()=>{try{let e=await S();T(e),document.getElementById(`total-sales-btn`).textContent=` ${e.length}`}catch(e){console.error(`Error loading sales summary:`,e),d(`An error occurred while loading sales. Please refresh the page.`,t)}},D=async r=>{let i=document.getElementById(`delete-popup`),o=i.querySelector(`.cancel-btn`),s=i.querySelector(`.delete-btn`);u.overlay.style.display=`block`,i.style.display=`flex`,o.onclick=()=>{u.overlay.style.display=`none`,i.style.display=`none`},s.onclick=async()=>{s.disabled=!0,s.style.opacity=`0.5`,s.textContent=`Removing...`;try{if(!await a())throw Error(`Could not find the current user.`);l||=await x();let{data:t,error:o}=await n.from(`sales`).delete().eq(`id`,r).select(`id`);if(o)throw o;if(!t?.length)throw Error(`No matching sale was deleted. Check the sale ID or database permissions.`);d(`Sale Removed`,e),await E(),u.overlay.style.display=`none`,i.style.display=`none`}catch(e){console.error(`Error deleting sale:`,e),d(`Error deleting sale: ${e.message}`,t)}finally{s.disabled=!1,s.style.opacity=`1`,s.textContent=`Remove`}}},O=()=>n.channel(`sales_updates`).on(`postgres_changes`,{event:`*`,schema:`public`,table:`sales`},async e=>{console.log(`Sales update:`,e.eventType),await E()}).subscribe(),k=e=>{let t=e.split(` `);return t.length>1?t[0][0].toUpperCase()+t[1][0].toUpperCase():t[0].split(``)[0].toUpperCase()};(async()=>{try{let e=await a();if(!e)return;let{data:t,error:r}=await n.from(`businesses`).select(`name`).eq(`owner_id`,e.id),{data:i,error:o}=await n.from(`items`).select(`id`).eq(`user_id`,e.id);if(r||o)throw r||o;u.productsCount.textContent=`Total Products : ${i.length}`;let s=k(t[0].name);u.displayName.textContent=t[0].name,document.querySelector(`.business-name`).textContent=t[0].name,u.profileIcon.innerHTML=`<span>${s}</span>`,u.bottomProfileIcon.innerHTML=`<span>${s}</span>`}catch(e){console.log(`Error getting user`,e)}})();var A=()=>{u.profileIcon.addEventListener(`click`,()=>{u.profileCard.classList.toggle(`show`)}),u.closeProfileCard.addEventListener(`click`,()=>{u.profileCard.classList.remove(`show`)})},j=()=>{u.logOutButton.addEventListener(`click`,()=>{u.overlay.style.display=`block`,u.logOutModal.style.display=`flex`}),u.cancelLogOut.addEventListener(`click`,()=>{u.overlay.style.display=`none`,u.logOutModal.style.display=`none`}),u.confirmLogOut.addEventListener(`click`,m)},M=()=>{u.tableBody.addEventListener(`click`,async e=>{let t=e.target.closest(`.delete-row-btn`);if(!t)return;let n=t.dataset.id;if(!n){console.warn(`Sale button has no data-id`);return}t.disabled=!0,await D(n),t.disabled=!1})};document.addEventListener(`DOMContentLoaded`,async()=>{try{if(!await f())return;g(),A(),j(),M(),await p(),l=await x(),await E(),O()}catch(e){console.error(`Application initialization failed:`,e),d(`Something went wrong while loading the page.`,t)}})}))();