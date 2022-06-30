$("#big").css({"width" : "700px", "height" : "482px", "background-color" : "grey", "margin" : "0 auto", "display" : "flex", "justify-content" : "center",})
$("#mini").css({"width" : "50px" , "height" : "50px" , "background-color" : "gold"});
$("#food").css({"width" : "30px" , "height" : "50px" , "background-color" : "green" , "position" : "absolute"})
var foods = document.getElementById("food")
var mini = document.getElementById("mini")
setInterval(function g(){  
    var p =  $("#food").position()
    // var foods_top = p.top
    
    var bottom = Math.floor(Math.random() * 432)
    var right = Math.floor(Math.random() * 628)
    var left = Math.floor(Math.random() * 632)
        foods.style.marginLeft = right + "px"
        foods.style.marginRight = left + "px"
        foods.style.marginTop = bottom + "px"
},15000)
var bottom = 0
var turn = 0
var size = 0
$("body").keydown(function(event){
    var x = event.which
    if(x == 40 && bottom != 432){
        bottom += 1 
        $("#mini").css("margin-top" , bottom + "px")
    }
    if(x == 38 && bottom != 0){
        bottom -= 1
        $("#mini").css("margin-top" , bottom + "px")
    }
    if(x == 37 && turn != 644){
        turn += 1
        $("#mini").css("margin-right" , turn + "px")
    }
    if(x == 39 && turn != -644){
        turn -= 1
        $("#mini").css("margin-right" , turn + "px")
    }

    var p =  $("#food").position()
    var pp = $("#mini").position()
    if(p.left == pp.left || p.right == pp.left){
        size += 60
        $("#mini").css("width" , size + "px")
    }
})

// var l = 0
// var b = 0
// var size = 0
// function f(event){  
//     var push = event.keyCode
//     if(push == 39 && l != 628){
//         l += 1
//         mini.style.marginLeft = l + "px"
//         console.log(l)
//     }
//     if(push == 40 && b != 432){
//         b += 1
//         mini.style.marginTop = b + "px"
//     }
//     if(push == 37 && l != 632){
//         l -= 1
//         mini.style.marginLeft = l + "px"
//     }
//     if(push == 38 && b != 0){
//         b -= 1
//         mini.style.marginTop = b + "px"
//     }
    
//     var place = foods.getBoundingClientRect()
//     var place1 = mini.getBoundingClientRect()  
    
//     if(place.left == place1.left || place.y == place1.top || place.right == place1.right){
//         size += 50
//         mini.style.width = size + "px"
//     }
// }




