import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";function m(e){s.error({message:e,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#EF4040",progressBarColor:"#FFBEBE;",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:5e3,iconUrl:"../img/error-icon.svg",theme:"dark"})}function l(e){s.success({message:e,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#59A10D",progressBarColor:"#B5EA7C",title:"Ok",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:5e3,iconUrl:"../img/success-icon.svg",theme:"dark"})}const i=document.querySelector(".form"),a=document.querySelector(".delay-input");i.addEventListener("submit",e=>{e.preventDefault();const r=document.querySelector("input[name='state']:checked"),o=a.value;setTimeout(()=>{new Promise((t,n)=>{r.value==="fulfilled"?t(`Fulfilled promise in ${o}ms`):n(`Rejected promise in ${o}ms`)}).then(t=>{l(t)}).catch(t=>{m(t)})},o),i.reset()});
//# sourceMappingURL=commonHelpers2.js.map
