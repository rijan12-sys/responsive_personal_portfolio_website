$(document).ready(function(){
//Team section
$("#teamOne").mouseover(function(){
    $("#teamOne").animate({
        width: "80%" ,
        height: "70%" ,
    })
    $("#nameTom").text("Tom") 
})
$("#teamTwo").mouseover(function(){
    $("#teamTwo").animate({
        width: "80%" ,
        height: "67%" ,
    })
    $("#nameJerry").text("Jerry")
})
$("#teamThree").mouseover(function(){
    $("#teamThree").animate({
        width: "80%" ,
        height: "70%" ,
    })
    $("#nameSpike").text("Spike")
})
$("#teamFour").mouseover(function(){
    $("#teamFour").animate({
        width: "80%" ,
        height: "67%" ,
    })
    $("#nameNibble").text("Nibble")
})
$("#teamTwo").mouseout(function(){
    $("#teamTwo").animate({
        height: "60%",
        margin: "20% 30% 30% 10%",
        width:"60%",
    })
    $("#nameJerry").text("")
})
$("#teamOne").mouseout(function(){
    $("#teamOne").animate({
        height: "60%",
        margin: "20% 30% 30% 10%",
        width:"60%",

    })
    $("#nameTom").text("")
})
$("#teamThree").mouseout(function(){
    $("#teamThree").animate({
        height: "60%",
        margin: "20% 30% 30% 10%",
        width:"60%",
    })
    $("#nameSpike").text("")
})
$("#teamFour").mouseout(function(){
    $("#teamFour").animate({
        height: "60%",
        margin: "20% 30% 30% 10%",
        width:"60%",
    })
    $("#nameNibble").text("")
})

// projects section

})
