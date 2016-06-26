  var ProjectList =
  [
      {TITLE: "IPA", SRC: "./Images/diploma.jpg", LOGO:"./Images/legon01.jpg", LOGOSRC: "http://legon.ch/", DATE:"2016", INFO: "Abschlussarbeit: Patientenprofilverwaltungs- und Management-Tool", LINK: "http://www.google.ch/"},
      {TITLE: "SPEEDVIEWER", SRC: "./Images/speed01.jpg", LOGO:"./Images/legon01.jpg", LOGOSRC: "http://legon.ch/", DATE:"2016", INFO: "Viewer zur Einsicht in Patientenakten"},
      {TITLE: "KSA", SRC: "./Images/kreuzer01.jpg", LOGO:"./Images/legon01.jpg", LOGOSRC: "http://legon.ch/", DATE:"2016", INFO: "Kreuzer"},
      {TITLE: "4", SRC: "./Images/helm02.jpg", LOGO:"./Images/logo-48.png", LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "Adminslair", SRC: "./Images/logo-48.png", LOGO:"./Images/logo-48.png", LOGOSRC:"#", DATE:"2016", INFO: "Admin island"},
      {TITLE: "6", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "7", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "8", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "9", SRC: "./Images/helm02.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "10", SRC: "./Images/helm02.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "11", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "12", SRC: "./Images/helm02.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "13", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "14", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "15", SRC: "./Images/helm02.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"},
      {TITLE: "16", SRC: "./Images/helm01.jpg", LOGO:"./Images/logo-48.png",LOGOSRC:"#", DATE:"1.1.1970", INFO: "x"}
  ];
  var Changelog =
  [
    {VNR: "0.3.0", TITLE: "Basics", DATE: "18.06.2016"},
    {VNR: "0.4.0", TITLE: "Changelog", DATE: "26.06.2016"}
  ];

function main(){
    console.log("ready");

    getProjects();
    getProList();
    getChangelog();
}
function getProList()
{
  var html1 = "<tr><td style='font-style: italic;'>"
  var html2 = "</td><td style='padding: 0px 5px;'>";
  var html3 = "</td><td style='text-align: right;'>";
  var html4 = "</tr>";
   for (var i = 0; i < ProjectList.length; i++)
   {
      var html = html1 + (i+1) + html2 + ProjectList[i].TITLE + html3 + ProjectList[i].DATE + html4;
       $('#tr_projects4').before(html);
   }
}
function getProjects()
{
  var html1 = "<tr class='tr_projects'><td><a href='";
  var html2 ="'><img class='img' src='";         //bild
  var html3 = "'></a></td><td class='td_proTitle'><span>";  //name
  var html4 = "</span><a href='";
  var html5 = "'><img style='float:right;'height='20px' src='";
  var html6 = "'></a><br><span class='info'>";
  var html7 = "</span><br><span class='datum'>";
  var html8 = "</span></td></tr>";                      //logo datum

  for (var i = 0; i < 12; i++) {

    var html = html1 + ProjectList[i].LINK + html2 + ProjectList[i].SRC + html3 + ProjectList[i].TITLE + html4 + ProjectList[i].LOGOSRC + html5 + ProjectList[i].LOGO + html6 + ProjectList[i].INFO + html7 + ProjectList[i].DATE + html8;
 
    if(i < 5){
      $('#tr_projects1').before(html);
    }
    if (i >= 5 && i < 10) {
      $('#tr_projects2').before(html);
    } 
    if(i >= 10 && i < 15){
      $('#tr_projects3').before(html);
    /*var newContainer = "<div id='grid_left2'><table><tr id='tr_projects1'><td>HALLO</td></tr></table></div>";
    $('#grid_left').append(newContainer);*/
    }
  }
}

function getChangelog()
{
  var html1 = "<tr><td style='font-style: italic;'>"
  var html2 = "</td><td style='padding: 0px 5px;'>";
  var html3 = "</td><td style='font-size: 12px;'>";
  var html4 = "</tr>";
   for (var i = 0; i < Changelog.length; i++)
   {
      var html = html1 + Changelog[i].VNR + html2 + Changelog[i].TITLE + html3 + Changelog[i].DATE + html4;
       $('#tr_changelog').before(html);
   }
   $('#span_lastupdate').append(Changelog[(Changelog.length - 1)].DATE);
}

function myMove() {
    move();
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 180) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            $('#probar01').empty().append(width + "%");
        }
    }
}


$(document).ready(function() {
    main();
});