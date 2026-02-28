function small_domestic(id){
    const Shallow_Groundwater= document.getElementById(id);
    
    Shallow_Groundwater.style.display = "block";
}
//functions for displaying answers for the prompts
function message(){
    let message = document.querySelector("#message");

    message.innerHTML = "Nitrogen Effuent Limit Is Not Required";
}
//message copy used to separate between "exceeds 20k GPD" prompt and "Exceed Domestic WW strength" prompt
function message_copy(){
    let message = document.querySelector("#message_copy");

    message.innerHTML = "Nitrogen Effuent Limit Is Not Required";
}

function message1(){
    let message1 = document.querySelector("#message1");

    message1.innerHTML = "Nitrogen Limits Not Needed Based on Site Specific Conditions";
}

function message1_copy(){
    let message1 = document.querySelector("#message1_copy");

    message1.innerHTML = "Nitrogen Limits Not Needed Based on Site Specific Conditions";
}
function message1_copy_1(){
    let message1 = document.querySelector("#message1_copy_1");

    message1.innerHTML = "Nitrogen Limits Not Needed Based on Site Specific Conditions";
}
function message1_copy_2(){
    let message1 = document.querySelector("#message1_copy_2");

    message1.innerHTML = "Nitrogen Limits Not Needed Based on Site Specific Conditions";
}
function message1_copy_3(){
    let message1 = document.querySelector("#message1_copy_3");

    message1.innerHTML = "Nitrogen Limits Not Needed Based on Site Specific Conditions";
}
function message2(){
    
    let message2 = document.querySelector("#message2");

    message2.innerHTML = "BOD = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}

function message2_copy(){
    
    let message2 = document.querySelector("#message2_copy");

    message2.innerHTML = "BOD = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message2_copy_1(){
    
    let message2 = document.querySelector("#message2_copy_1");

    message2.innerHTML = "BOD = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message2_copy_2(){
    
    let message2 = document.querySelector("#message2_copy_2");

    message2.innerHTML = "BOD = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message3(){
    
    let message3 = document.querySelector("#message3");

    message3.innerHTML = "TSS = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message3_copy(){
    
    let message3 = document.querySelector("#message3_copy");

    message3.innerHTML = "TSS = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message3_copy_1(){
    
    let message3 = document.querySelector("#message3_copy_1");

    message3.innerHTML = "TSS = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message3_copy_2(){
    
    let message3 = document.querySelector("#message3_copy_2");

    message3.innerHTML = "TSS = 30 mg/L (monthly average) and 45 mg/L (7-day average)";
}
function message4(){
    
    let message4 = document.querySelector("#message4");

    message4.innerHTML = "Total Nitrogen = 10 mg/L";
}

function message4_copy(){
    
    let message4 = document.querySelector("#message4_copy");

    message4.innerHTML = "Total Nitrogen = 10 mg/L";
}
function message4_copy_1(){
    
    let message4 = document.querySelector("#message4_copy_1");

    message4.innerHTML = "Total Nitrogen = 10 mg/L";
}
function message4_copy_2(){
    
    let message4 = document.querySelector("#message4_copy_2");

    message4.innerHTML = "Total Nitrogen = 10 mg/L";
}
function message5(){
    let message5 = document.querySelector("#message5");

    message5.innerHTML = "If No, Then Total Nitrogen Limit Is Not Required";
}
function message5_copy(){
    let message5 = document.querySelector("#message5_copy");

    message5.innerHTML = "If No, Then Total Nitrogen Limit Is Not Required";
}
function message5_copy_1(){
    let message5 = document.querySelector("#message5_copy_1");

    message5.innerHTML = "If No, Then Total Nitrogen Limit Is Not Required";
}
function message5_copy_2(){
    let message5 = document.querySelector("#message5_copy_2");

    message5.innerHTML = "If No, Then Total Nitrogen Limit Is Not Required";
}
function message5_copy_3(){
    let message5 = document.querySelector("#message5_copy_3");

    message5.innerHTML = "If No, Then Total Nitrogen Limit Is Not Required";
}
function message7(){
    let message7 = document.querySelector("#message7");

    message7.innerHTML = "Assign 10 mg/L effluent Requirement";
}
//function for caculating total nitrogen effuent limit
function average_annual(){
    let average_annual = document.querySelector("#average_annual");
    let message6 = document.querySelector("#message6")
    
    if(average_annual.value >= 10){
        let total_nitrogen = 0.5 * average_annual.value;
        
        message6.innerHTML = "Total nitrogen effluent limit = "+ total_nitrogen +" mg/L";
    }
}
//back functions for "previous" buttons for prompts
function back(id){
    const Flow_Rate= document.getElementById(id);
    
    if(Flow_Rate.style.display == "block"){
        Shallow_Groundwater.style.display = "none";
    }
    else{
        Shallow_Groundwater.style.display = "none";
    }
}

function back_1(id){
    const Shallow_Groundwater= document.getElementById(id);
        
    if(Shallow_Groundwater.display == "block"){
            Excessive_Perc_Rate.style.display = "none";
        }
    else{
            Excessive_Perc_Rate.style.display = "none";
        }
}

function back_2(id){
    const Excessive_Perc_Rate= document.getElementById(id);
        
    if(Excessive_Perc_Rate == "block"){
            Exceed_Domestic_Strength.style.display = "none";
        }
    else{
            Exceed_Domestic_Strength.style.display = "none";
        }
}

function back_3(id){
    const Exceed_Domestic_Strength= document.getElementById(id);
    let message_copy = document.querySelector("#message_copy");
 
    if(Exceed_Domestic_Strength == "block" && message_copy == "none"){
            Nitrogen_Removal.style.display = "none";
            message_copy.style.display = "none";
        }
    else{
            Nitrogen_Removal.style.display = "none";
            message_copy.style.display = "none";
        }
}
//back functions for "previous" buttons for sub-prompts
function back_4(id){
    const Flow_Rate = document.getElementById(id);
    let message1_copy = document.querySelector("#message1_copy");

    if(Flow_Rate == "block" && message1_copy == "none"){
        Nitrogen_Limit.style.display = "none";
        message1_copy.style.display = "none";
    }
    else{
        Nitrogen_Limit.style.display = "none";
        message1_copy.style.display = "none";
    }
}

function back_5(id){
    const Shallow_Groundwater = document.getElementById(id);
    let message5_copy = document.querySelector("#message5_copy");

    if(Shallow_Groundwater == "block" && message5 =="none"){
        Sludge_MBR_Similar.style.display = "none";
        message5_copy.style.display = "none";
    }
    else{
        Sludge_MBR_Similar.style.display = "none";
        message5_copy.style.display = "none";
    }
}

function back_6(id){
    const Shallow_Groundwater = document.getElementById(id);
    let message1_copy_1 = document.querySelector("#message1_copy_1");

    if(Shallow_Groundwater == "block" && message1_copy_1 == "none"){
        Nitrogen_Limit_1.style.display = "none";
        message1_copy_1.style.display = "none";
    }
    else{
        Nitrogen_Limit_1.style.display = "none";
        message1_copy_1.style.display = "none";
    }
}

function back_7(id){
    const Excessive_Perc_Rate = document.getElementById(id);
    let message5_copy_1 = document.querySelector("#message5_copy_1");

    if(Excessive_Perc_Rate == "block" && message5_copy_1 == "none"){
        Sludge_MBR_Similar_1.display = "none";
        message5_copy_1.style.display = "none";
    }
    else{
        Sludge_MBR_Similar_1.style.display = "none";
        message5_copy_1.style.display = "none";
    }
}
function back_8(id){
    const Excessive_Perc_Rate = document.getElementById(id);
    let message1_copy_2 = document.querySelector("#message1_copy_2");

    if(Excessive_Perc_Rate == "block" && message1_copy_2 == "none"){
        Nitrogen_Limit_2.display = "none";
        message1_copy_2.style.display = "none";
    }
    else{
        Nitrogen_Limit_2.style.display = "none";
        message1_copy_2.style.display = "none";
    }
}
function back_9(id){
    const Exceed_Domestic_Strength = document.getElementById(id);
    let message5_copy_2 = document.querySelector("#message5_copy_2");

    if(Exceed_Domestic_Strength == "block" && message5_copy_2 == "none"){
        Sludge_MBR_Similar_2.display = "none";
        message5_copy_2.style.display = "none";
    }
    else{
        Sludge_MBR_Similar_2.style.display = "none";
        message5_copy_2.style.display = "none";
    }
}
function back_10(id){
    const Nitrogen_Removal = document.getElementById(id);
    let message1_copy_3 = document.querySelector("#message1_copy_3");

    if(Nitrogen_Removal == "block" && message1_copy_3 == "none"){
        Nitrogen_Limit_3.display = "none";
        message1_copy_3.style.display = "none";
    }
    else{
        Nitrogen_Limit_3.style.display = "none";
        message1_copy_3.style.display = "none";
    }
}
function back_11(id){
    const Nitrogen_Removal = document.getElementById(id);
    let message5_copy_3 = document.querySelector("#message5_copy_3");

    if(Nitrogen_Removal == "block" && message5_copy_3 == "none"){
        Sludge_MBR_Similar_3.display = "none";
        message5_copy_3.style.display = "none";
    }
    else{
        Sludge_MBR_Similar_3.style.display = "none";
        message5_copy_3.style.display = "none";
    }
}
//this function displays the "nitrogen removal" question and its answer after clicking "no" the second time after selewcting the "previous" button
function nitrogen_removal_NoButton(id){
    const Nitrogen_Removal = document.getElementById(id);
    let message_copy = document.querySelector("#message_copy");

    if(Nitrogen_Removal == "block"){
        message_copy.style.display = "none";
    }
    else{
        message_copy.style.display = "block";
    }
}

function nitrogen_limit_NoButton(id){
    const Nitrogen_Limit = document.getElementById(id);
    let message1_copy = document.querySelector("#message1_copy");

    if(Nitrogen_Limit == "block"){
        message1_copy.style.display = "none";
    }
    else{
        message1_copy.style.display = "block";
    }
}

function nitrogen_limit_NoButton_1(id){
    const Nitrogen_Limit_1 = document.getElementById(id);
    let message1_copy_1 = document.querySelector("#message1_copy_1");

    if(Nitrogen_Limit_1 == "block"){
        message1_copy_1.style.display = "none";
    }
    else{
        message1_copy_1.style.display = "block";
    }
}
function nitrogen_limit_NoButton_2(id){
    const Nitrogen_Limit_2 = document.getElementById(id);
    let message1_copy_2 = document.querySelector("#message1_copy_2");

    if(Nitrogen_Limit_2 == "block"){
        message1_copy_2.style.display = "none";
    }
    else{
        message1_copy_2.style.display = "block";
    }
}
function nitrogen_limit_NoButton_3(id){
    const Nitrogen_Limit_3 = document.getElementById(id);
    let message1_copy_3 = document.querySelector("#message1_copy_3");

    if(Nitrogen_Limit_3 == "block"){
        message1_copy_3.style.display = "none";
    }
    else{
        message1_copy_3.style.display = "block";
    }
}

function sludge_mbr_similar_NoButton(id){
    const Sludge_MBR_Similar= document.getElementById(id);
    let message5_copy = document.querySelector("#message5_copy");

    if(Sludge_MBR_Similar == "block"){
        message5_copy.style.display = "none";
    }
    else{
        message5_copy.style.display = "block";
    }
}

function sludge_mbr_similar_NoButton_1(id){
    const Sludge_MBR_Similar_1= document.getElementById(id);
    let message5_copy_1 = document.querySelector("#message5_copy_1");

    if(Sludge_MBR_Similar_1 == "block"){
        message5_copy_1.style.display = "none";
    }
    else{
        message5_copy_1.style.display = "block";
    }
}
function sludge_mbr_similar_NoButton_2(id){
    const Sludge_MBR_Similar_2= document.getElementById(id);
    let message5_copy_2 = document.querySelector("#message5_copy_2");

    if(Sludge_MBR_Similar_2 == "block"){
        message5_copy_2.style.display = "none";
    }
    else{
        message5_copy_2.style.display = "block";
    }
}
function sludge_mbr_similar_NoButton_3(id){
    const Sludge_MBR_Similar_3= document.getElementById(id);
    let message5_copy_3 = document.querySelector("#message5_copy_3");

    if(Sludge_MBR_Similar_3 == "block"){
        message5_copy_3.style.display = "none";
    }
    else{
        message5_copy_3.style.display = "block";
    }
}

//left off here: create class in CSS to handle different behaviors for previous button
function sludge_mbr_similar_YESButton(id){
    const Nitrogen_Limit= document.getElementById(id);
    let message2_copy = document.querySelector("#message2_copy");
    let message3_copy = document.querySelector("#message3_copy");
    let message4_copy = document.querySelector("#message4_copy");

    if(Nitrogen_Limit == "block"){
        message2_copy.style.display = "none";
        message3_copy.style.display = "none";
        message4_copy.style.display = "none";
    }
    else{
        message2_copy.style.display = "block";
        message3_copy.style.display = "block";
        message4_copy.style.display = "block";
    }
}
function sludge_mbr_similar_YESButton_1(id){
    const Nitrogen_Limit_1= document.getElementById(id);
    let message2_copy_1 = document.querySelector("#message2_copy_1");
    let message3_copy_1 = document.querySelector("#message3_copy_1");
    let message4_copy_1 = document.querySelector("#message4_copy_1");

    if(Nitrogen_Limit_1 == "block"){
        message2_copy_1.style.display = "none";
        message3_copy_1.style.display = "none";
        message4_copy_1.style.display = "none";
    }
    else{
        message2_copy_1.style.display = "block";
        message3_copy_1.style.display = "block";
        message4_copy_1.style.display = "block";
    }
}
function sludge_mbr_similar_YESButton_2(id){
    const Nitrogen_Limit_2= document.getElementById(id);
    let message2_copy_2 = document.querySelector("#message2_copy_2");
    let message3_copy_2 = document.querySelector("#message3_copy_2");
    let message4_copy_2 = document.querySelector("#message4_copy_2");

    if(Nitrogen_Limit_2 == "block"){
        message2_copy_2.style.display = "none";
        message3_copy_2.style.display = "none";
        message4_copy_2.style.display = "none";
    }
    else{
        message2_copy_2.style.display = "block";
        message3_copy_2.style.display = "block";
        message4_copy_2.style.display = "block";
    }
}