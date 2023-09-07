// Set Highcharts options
if (typeof Highcharts !== 'undefined') Highcharts.setOptions({
  credits: {enabled: false},
  title: {text: undefined},
  chart: {/*height: 300, borderWidth: 1, borderColor: "lightgray",*/ style: {"font-family": "inherit"}},
  plotOptions: {series: {animation: false}},
  lang: {thousandsSep: ','},
  colors: [
    "#2daae2", //blue 
    "#3F61C4", //indigo
    "#007882", //teal
    "#ff635d", //red
    "#fa91b6", //pink
    "#1ac987", //green
    "#8a68c8", //purple
    "#ff8200", //orange 
  ]
});
window.addEventListener('load', function(){
  // Check if embedded
  function inIframe () {
    try {return window.self !== window.top}
    catch (e) {return true}
  }
  if (inIframe()) {
    document.documentElement.style.backgroundColor = "white";
    document.body.style.maxWidth = "100%";
    document.getElementById("who").style.display = "none";
    //document.querySelector("header").style.display = "none";
    if (document.getElementById("reader")) document.getElementById("reader").style.display = "none";
    document.querySelector("main").style.padding = "50px";
    //document.querySelector("main").style.paddingRight = "20px";
    document.querySelector("main").style.paddingTop = "20px";
    document.querySelector("footer").style.display = "none";
    Highcharts.charts.forEach((x) => x.reflow());
  }
  // Set links to open in new window
  document.querySelectorAll("a[href^='http']").forEach(x => x.setAttribute('target', '_blank'));
  // Process maths
  renderMathInElement(document.body, {
    delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
    throwOnError: false
  });
  // Highlight text
  const params = new URLSearchParams(window.location.search);
  const param = params.get("s");
  if (param) {
    const regex = new RegExp(param, "gi");
    document.querySelectorAll("header, main").forEach(elt => {
      elt.innerHTML = elt.innerHTML.replace(regex, '<mark class="searched">$&</mark>');
    });
  }
});
window.addEventListener("beforeprint", () => {
  document.querySelectorAll('details').forEach((elt) => {elt.setAttribute('open', '')});
});
