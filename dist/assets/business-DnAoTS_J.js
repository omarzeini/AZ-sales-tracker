import{t as e}from"./modulepreload-polyfill-D3Tm_XB5.js";import{n as t,t as n}from"./config-BdaNtURP.js";import{n as r,t as i}from"./getUser-DU8lhiHH.js";e((()=>{r(),n();var e,a,o=`
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
`,s=`
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
`,l={overlay:document.getElementById(`overlay`),logOutModal:document.getElementById(`logOutModel`),cancelLogOut:document.getElementById(`cancelLogOut`),confirmLogOut:document.getElementById(`confirmLogOut`),profileIcon:document.getElementById(`profileIcon`),bottomProfileIcon:document.getElementById(`bottom-profile-icon`),profileCard:document.getElementById(`profileCard`),closeProfileCard:document.getElementById(`closeProfileCard`),displayName:document.getElementById(`business-name`),productsCount:document.getElementById(`products-count`),userEmail:document.getElementById(`userEmail`),darkModeButton:document.getElementById(`dark_mode`),lightModeButton:document.getElementById(`light_mode`),selectedPage:document.getElementById(`selected_page`),salesTable:document.getElementById(`salesTable`),tableBody:document.getElementById(`table-body`),totalRevenueDisplay:document.getElementById(`totalRevenueDisplay`),notifContainer:document.getElementById(`notifContainer`),progressBar:document.getElementById(`progress_bar`),svgContainer:document.getElementById(`svgContainer`),notifText:document.getElementById(`notifText`),logOutButton:document.getElementById(`logOut`),changeNameButton:document.getElementById(`change-name-btn change-name-btn`),updateProductButton:document.getElementById(`update-product-btn`),addNewProductButtonLarge:document.getElementById(`add-new-product-btn-large`),addNewProductButtonSmall:document.getElementById(`add-new-product-btn-small`)},u=(e,t)=>{let{notifContainer:n,progressBar:r,svgContainer:i,notifText:a}=l;i.innerHTML=t,a.textContent=e,n.classList.add(`show_notif`),setTimeout(()=>{r.classList.add(`move`)},100),setTimeout(()=>{n.classList.remove(`show_notif`),r.classList.remove(`move`)},3300)},d=async()=>{let{data:{session:e},error:n}=await t.auth.getSession();return n?(console.error(`Error checking session:`,n),!1):e?!0:(window.location.href=`auth.html`,!1)},f=async()=>{let{data:{user:e},error:n}=await t.auth.getUser();if(n){console.error(`Error getting user:`,n),n.message?.toLowerCase().includes(`expired`)&&(u(`Session expired. Please sign in again.`,c),setTimeout(()=>{window.location.href=`auth.html`},2e3));return}return e&&(l.userEmail.textContent=e.email,a=e.email),e.email},p=async()=>{let{error:e}=await t.auth.signOut();if(e){console.error(`Error signing out:`,e),u(`Error signing out: ${e.message}`,s);return}window.location.href=`auth.html`},m=async e=>{if(!e||e===``)return;let n=document.getElementById(`save-business-name-btn`);try{n.textContent=`Saving...`,n.disabled=!0,n.style.opacity=`0.5`;let r=await i();if(!r)throw Error(`Couldn't Get User!`);let{error:a}=await t.from(`businesses`).update({name:e}).eq(`owner_id`,r.id);if(a)throw a;n.textContent=`Save`,n.disabled=!1,n.style.opacity=`1`,document.getElementById(`change-name-model`).style.display=`none`,l.overlay.style.display=`none`,v(),u(`Business Name Changed`,o)}catch(e){console.log(`Error changing business name: `,e.message||e),u(`Error changing business name : ${e.message||e} `,s),n.textContent=`Save`,n.disabled=!1,n.style.opacity=`1`}},h=e=>{let t=e===`dark`;document.body.classList.toggle(`dark_mode`,t),l.darkModeButton.style.display=t?`none`:`block`,l.lightModeButton.style.display=t?`block`:`none`},g=()=>{h(localStorage.getItem(`theme`)||`light`),l.darkModeButton.addEventListener(`click`,()=>{localStorage.setItem(`theme`,`dark`),h(`dark`)}),l.lightModeButton.addEventListener(`click`,()=>{localStorage.setItem(`theme`,`light`),h(`light`)})},_=e=>{let t=e.split(` `);return t.length>1?t[0][0].toUpperCase()+t[1][0].toUpperCase():t[0].split(``)[0].toUpperCase()},v=async()=>{try{let e=await i();if(!e)return;let{data:n,error:r}=await t.from(`businesses`).select(`name`).eq(`owner_id`,e.id),{data:o,error:s}=await t.from(`items`).select(`id`).eq(`user_id`,e.id);if(r||s)throw r||s;l.productsCount.textContent=`Total Products : ${o.length}`;let c=_(n[0].name),u=c;document.getElementById(`business-default-avatar`).textContent=c,l.displayName.textContent=n[0].name,document.querySelectorAll(`.business-name`).forEach(e=>e.textContent=n[0].name),l.profileIcon.innerHTML=`<span>${u}</span>`,l.bottomProfileIcon.innerHTML=`<span>${u}</span>`,a=await f(),document.getElementById(`profile-right-container`).innerHTML=`
       <p>
                  <span class="business-name">${n[0].name} </span>
                  <span id="change-name-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-square-pen"
                    >
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      />
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      />
                    </svg>
                  </span>
                </p>
                <p class="products-count business-email">${a}</p>
    `}catch(e){console.log(`Error getting business name : `,e)}};v();var y=async(e=``)=>{document.getElementById(`products-wrapper`).innerHTML=``;try{let n=await i();if(!n)throw Error(`User not found!`);let{data:r,error:a}=await t.from(`items`).select(`id, name, price, cost`).eq(`user_id`,n.id);if(a)throw a;r.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())).map(e=>{let t=document.createElement(`div`);t.className=`product-container`,t.innerHTML=`
      <p class="product-name"> <span>${e.name}</span>  </p>
      <p class="product-price">Price : ${e.price} <span class="price-mad">MAD</span> </p>
        <p class="product-cost">Cost : ${e.cost} <span class="cost-mad">MAD</span> </p>
      `;let n=document.createElement(`div`);n.className=`actions-container`,n.innerHTML=`
      <button data-name="${e.name}" data-price="${e.price}" data-cost="${e.cost}"  class="edit-btn" data-id="${e.id}" ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-pen"
                >
                  <path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  />
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  /></svg> </button>
         
 <button class="delete-btn" data-id=${e.id}> <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
        </svg> </button>
                 
      `,t.append(n),document.getElementById(`products-wrapper`).prepend(t)})}catch(e){console.log(`Error rendering products`,e)}};y();var b=async(e,n,r)=>{let a=document.getElementById(`add-new-product-btn`);try{a.textContent=`Adding...`,a.disabled=!0,a.style.opacity=`0.5`;let s=await i();if(!s)throw Error(`Couldn't get user`);let{error:c}=await t.from(`items`).insert([{name:e,price:n,cost:r,user_email:s.email}]).eq(`user_id`,s.id);if(c)throw c.message.includes(`duplicate key`)?Error(`This product exists already.`):c;u(`Product Added.`,o),a.textContent=`Add Product`,a.disabled=!1,a.style.opacity=`1`,await y(),await v()}catch(e){console.log(`Error Adding new Product: `,e.message||e),u(`Error Adding New Product: ${e.message||e} `,s),a.textContent=`Add Product`,a.disabled=!1,a.style.opacity=`1`}},x=async()=>{let e=document.getElementById(`change-name-model`),t=document.getElementById(`new-product-model`);await v(),document.getElementById(`change-name-btn`).onclick=()=>{l.overlay.style.display=`block`,e.style.display=`flex`},e.querySelector(`.cancel-btn`).onclick=()=>{l.overlay.style.display=`none`,e.style.display=`none`},e.querySelector(`.change-name-form`).onsubmit=async t=>{t.preventDefault(),await m(e.querySelector(`#new-business-name`).value.trim())},document.querySelectorAll(`.add-new-product`).forEach(e=>e.onclick=()=>{overlay.style.display=`flex`,t.style.display=`flex`}),t.querySelector(`.cancel_btn`).onclick=()=>{l.overlay.style.display=`none`,t.style.display=`none`},t.querySelector(`#new-product-form`).onsubmit=async e=>{e.preventDefault();let n=t.querySelector(`#product-name`).value.trim(),r=t.querySelector(`#product-price`).value.trim(),i=t.querySelector(`#product-cost`).value.trim();!n||!r||!i||(await b(n,r,i),t.querySelector(`#product-name`).value=``,t.querySelector(`#product-price`).value=``,t.querySelector(`#product-cost`).value=``,l.overlay.style.display=`none`,t.style.display=`none`)}};x();var S=()=>{l.profileIcon.addEventListener(`click`,()=>{l.profileCard.classList.toggle(`show`)}),l.closeProfileCard.addEventListener(`click`,()=>{l.profileCard.classList.remove(`show`)})},C=()=>{l.logOutButton.addEventListener(`click`,()=>{l.overlay.style.display=`block`,l.logOutModal.style.display=`flex`}),l.cancelLogOut.addEventListener(`click`,()=>{l.overlay.style.display=`none`,l.logOutModal.style.display=`none`}),l.confirmLogOut.addEventListener(`click`,p)},w=async e=>{try{let{data:n,error:r}=await t.from(`sales`).select(`id`).eq(`business_day_id`,e);if(r)throw r;document.getElementById(`total-sales-btn`).textContent=` ${n.length}`}catch(e){console.log(`couldn't get sales count`,e),u(`Couldn't get today sales count, Try refreshing the page.`+e.message,s)}},T=async()=>{let n=new Date().toISOString().split(`T`)[0],{data:r,error:i}=await t.from(`business_days`).select(`*`).order(`open_time`,{ascending:!1}).limit(1);if(i){console.log(`Error fetching business day`,i),u(`An error occured, Please refresh the page`,s);return}if(!r||r.length===0)return await startNewDay(n);let a=r[0],o=a.date_label;if(o===n&&a.is_active)return e=a.id,e;if(o!==n)return console.log(`Closing old business day !`),await closeDay(a.id),await startNewDay(n),e;if(o===n&&!a.is_active)return await startNewDay(n),e},E=async()=>{document.getElementById(`products-wrapper`).addEventListener(`click`,async e=>{let t=e.target.closest(`.edit-btn`),n=e.target.closest(`.delete-btn`);if(t){let e=t.dataset.id,n=t.dataset.name,r=t.dataset.price,i=t.dataset.cost;await D(e,n,r,i)}if(n){let e=n.dataset.id;await O(e)}})},D=async(e,n,r,i)=>{let a=document.getElementById(`update-product-model`),d=a.querySelector(`.save-btn`),f=a.querySelector(`.cancel-btn`),p=a.querySelector(`#updated-product-name`),m=a.querySelector(`#updated-price`),h=a.querySelector(`#updated-cost`);l.overlay.style.display=`block`,a.style.display=`flex`,p.value=n,m.value=r,h.value=i,f.onclick=()=>{a.style.display=`none`,l.overlay.style.display=`none`},d.onclick=async f=>{if(f.preventDefault(),!p.value||!m.value||!h.value){console.warn(`no input values: `,p.value,m.value,h.value);return}let g={name:p.value.trim(),price:m.value.trim(),cost:h.value.trim()};if(g.name===n&&g.price===r&&g.cost===i){u(`No Changes Spotted`,c);return}d.disabled=!0,d.style.opacity=`0.5`,d.textContent=`Saving Updates...`;try{let{error:n}=await t.from(`items`).update({name:g.name,price:g.price,cost:g.cost}).eq(`id`,e);if(n)throw n;y(),u(`Product Updated successfully`,o),a.style.display=`none`,l.overlay.style.display=`none`,console.log(`product updated successfully`)}catch(e){console.log(`Error updating Product: `,e.message||e),u(`Error updating Product: ${e.message||e}`,s)}finally{d.disabled=!1,d.style.opacity=`1`,d.textContent=`Save Updates`}}},O=async e=>{let n=document.getElementById(`delete-popup`),r=n.querySelector(`.cancel-btn`),i=n.querySelector(`.delete-btn`);n.style.display=`flex`,l.overlay.style.display=`block`,r.onclick=()=>{n.style.display=`none`,l.overlay.style.display=`none`},i.onclick=async()=>{try{i.disabled=!0,i.style.opacity=`0.5`,i.textContent=`Deleting...`;let{error:r}=await t.from(`items`).delete().eq(`id`,e);if(r)throw r;u(`Product Deleted`,o),n.style.display=`none`,l.overlay.style.display=`none`,await y(),await v()}catch(e){console.log(`Error deleting product: `,e.message||e),u(`Error deleting Product: ${e.message||e} `,s)}finally{i.disabled=!1,i.style.opacity=`1`,i.textContent=`Delete`}}};(()=>{let e=document.getElementById(`search-products-form`),t=document.getElementById(`search-input`);e.addEventListener(`submit`,e=>{e.preventDefault(),y(t.value)})})(),document.addEventListener(`DOMContentLoaded`,async()=>{try{if(!await d())return;g(),S(),C(),await T(),await w(e),await f(),E(),x()}catch(e){console.error(`Application initialization failed:`,e),u(`Something went wrong while loading the page.`+e,s)}})}))();