var e=function(e,s,t,a,i){var n=document.querySelector("body"),c=document.createElement("div");switch(c.style.top=e+"px",c.style.right=s+"px",c.insertAdjacentHTML("afterbegin",'<h2 class="title">'.concat(t,"</h2>")),c.insertAdjacentHTML("beforeend","<p>".concat(a,"</p>")),c.classList.add("notification"),i){case"success":c.classList.add("success");break;case"warning":c.classList.add("warning");break;default:c.classList.add("error")}n.appendChild(c),setTimeout(function(){return c.style.display="none"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.eaf36f59.js.map
