import{t as e}from"./modulepreload-polyfill-D3Tm_XB5.js";import{n as t,t as n}from"./config-BdaNtURP.js";e((()=>{n();var e=document.getElementById(`send-button`),r=`<svg
          height="25"
          width="25"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.41 25L30 21.41L28.59 20L25 23.59L21.41 20L20 21.41L23.59 25L20 28.59L21.41 30L25 26.41L28.59 30L30 28.59L26.41 25zM18 2A12.035 12.035 0 0 0 6 14v6.2l-3.6-3.6L1 18l6 6l6-6l-1.4-1.4L8 20.2V14a10 10 0 0 1 20 0v3h2v-3A12.035 12.035 0 0 0 18 2z"
            fill="red"
          />
        </svg>`,i=`<svg
        height="25"
        width="25"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>`,a=async n=>{try{let{error:r}=t.auth.resetPasswordForEmail(n);if(r)throw r;s(`Check your email box for a reset link`,i),e.disabled=!0}catch(e){console.log(e.message),c(`${e.message}`,r)}},o=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);document.getElementById(`emailForm`).addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`email-input`).value.trim();o(t)?a(t):c(`Please enter a valid email`,r)});var s=(e,t)=>{let n=document.getElementById(`notifContainer`),r=document.getElementById(`svgContainer`);r.innerHTML=t;let i=document.getElementById(`notifText`);i.textContent=e,i.style.color=`green`,n.style.backgroundColor=`#9eff90`,n.style.display=`inline-flex`},c=(e,t)=>{let n=document.getElementById(`notifContainer`),r=document.getElementById(`svgContainer`);r.innerHTML=t;let i=document.getElementById(`notifText`);i.textContent=e,i.style.color=`white`,n.style.backgroundColor=`lightcoral`,n.style.display=`inline-flex`},l=document.getElementById(`email-input`);l.onfocus=()=>{document.getElementById(`notifContainer`).style.display=`none`,e.disabled=!1}}))();