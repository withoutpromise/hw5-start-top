// Generated by LiveScript 1.3.1
(function(){
  var makeAllButtonCanBeClicked, robotClickAToE, rebornAllButtons, makeButtonDisable, makeButtonEnable, getNumber, waitNumber, getResult;
  window.onload = function(){
    makeAllButtonCanBeClicked();
    $("button").onmouseleave = rebornAllButtons;
    $("icon").addEventListener('click', robotClickAToE);
  };
  makeAllButtonCanBeClicked = function(){
    var abcde, i$, to$, i;
    abcde = $("control-ring").children;
    for (i$ = 0, to$ = abcde.length; i$ < to$; ++i$) {
      i = i$;
      abcde[i].addEventListener('click', getNumber);
    }
  };
  robotClickAToE = function(){
    var abcde, i$, to$, i;
    $("icon").removeEventListener('click', robotClickAToE);
    abcde = $("control-ring").children;
    for (i$ = 0, to$ = abcde.length; i$ < to$; ++i$) {
      i = i$;
      abcde[i].click();
    }
  };
  rebornAllButtons = function(){
    var abcde, i$, to$, i, bubble;
    abcde = $("control-ring").children;
    for (i$ = 0, to$ = abcde.length; i$ < to$; ++i$) {
      i = i$;
      if (abcde[i].childNodes.length === 2) {
        abcde[i].removeChild(abcde[i].childNodes[1]);
      }
      makeButtonEnable(abcde[i]);
    }
    bubble = $("info");
    bubble.removeEventListener('click', getResult);
    bubble.style.backgroundColor = 'grey';
    bubble.innerHTML = "";
    $("icon").addEventListener('click', robotClickAToE);
  };
  makeButtonDisable = function(button){
    button.removeEventListener('click', getNumber);
    button.style.backgroundColor = 'grey';
  };
  makeButtonEnable = function(button){
    button.addEventListener('click', getNumber);
    button.style.backgroundColor = 'blue';
  };
  getNumber = function(){
    var rc, abcde, thisbutton, xmlhttp;
    rc = document.createElement('span');
    rc.innerText = '...';
    rc.className = 'redcircle';
    rc.style.fontSize = '5px';
    this.appendChild(rc);
    abcde = $("control-ring").children;
    thisbutton = this;
    /* for i from 0 til abcde.length
    	if abcde[i] isnt @
    		make-button-disable abcde[i] */
    /* sent-request-to-server rc,thisbutton */
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        rc.innerText = xmlhttp.responseText;
        waitNumber(thisbutton);
      }
    };
    xmlhttp.open('GET', '/?randnum=' + Math.random(), true);
    xmlhttp.send();
  };
  /*sent-request-to-server = (rc, thisbutton) !->
  	$.get('/', (data, status) !->
  					rc.innerText = xmlhttp.data
  					wait-number thisbutton)*/
  waitNumber = function(thisbutton){
    var flag, abcde, i$, to$, i;
    flag = 1;
    abcde = $("control-ring").children;
    for (i$ = 0, to$ = abcde.length; i$ < to$; ++i$) {
      i = i$;
      if (abcde[i].childNodes.length === 1) {
        makeButtonEnable(abcde[i]);
        flag = 0;
      }
      makeButtonDisable(thisbutton);
      if (flag === 1) {
        getResult();
      }
    }
  };
  getResult = function(){
    var abcde, bubble, sum, i$, to$, i;
    abcde = $("control-ring").children;
    bubble = $("info");
    sum = 0;
    for (i$ = 0, to$ = abcde.length; i$ < to$; ++i$) {
      i = i$;
      sum = sum + parseInt(abcde[i].lastChild.innerText);
    }
    if (!isNaN(sum)) {
      bubble.innerHTML = sum;
    }
    bubble.removeEventListener('click', getResult);
    bubble.style.backgroundColor = 'grey';
  };
}).call(this);
