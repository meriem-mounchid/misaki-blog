//  menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive"
    }else{
        x.className = "";
    }
}

// select link
function selectlink(link){
    var option = document.querySelectorAll('#links a');
    option[0].className = "";
    option[1].className = "";
    option[2].className = "";
    option[3].className = "";
    option[4].className = "";
    link.className = "selected"

    var x = document.getElementById("nav");
    x.className = "";
}

// scrolling
// window.onscroll = function(){
//     effectskills()
// };

// function effectskills(){
//     var skills = document.getElementById("skills");
//     var dist = window.innerHeight - skills.getBoundingClientRect().top;
//     if (dist >= 300) {
//         document.getElementById("html").classList.add(percentage1);
//         document.getElementById("k8s").classList.add(percentage2);
//         document.getElementById("docker").classList.add(percentage3);
//         document.getElementById("shell").classList.add(percentage4);
//     }
// }