let C; 
let AAP; 
let C_unadusted; 
let A_acres; 
let Q_GPD;
const R_LR = 35000;

function effluent_limit(){
    let Flow_Rate = document.querySelector("#Flow_Rate");
    let A_acres = document.querySelector("#a_Acres");
    let AAP = document.querySelector("#AAP");
    let message = document.querySelector("#message");

    if(Flow_Rate.value > 0 && A_acres.value > 0){
        C_unadusted = (R_LR * A_acres.value) / Flow_Rate.value;

        if(AAP.value <= 15){
            let precip_adjust = 0.2;
            C = precip_adjust * C_unadusted;
            C_exact = C.toFixed(2);
            message.innerHTML = "the maximum allowable concentration not to exceed an MCL of 10 mg/L requires an effuent limitation of " + C_exact + " mg/L";
        }

        else if(AAP.value > 15 && AAP.value <= 20){
            let precip_adjust = 0.25;
            C = precip_adjust * C_unadusted;
            C_exact = C.toFixed(2);
            message.innerHTML = "the maximum allowable concentration not to exceed an MCL of 10 mg/L requires an effuent limitation of " + C_exact + " mg/L";
        }

        else if(AAP.value > 20 && AAP.value <= 25){
            let precip_adjust = 0.33;
            C = precip_adjust * C_unadusted;
            C_exact = C.toFixed(2);
            message.innerHTML = "the maximum allowable concentration not to exceed an MCL of 10 mg/L requires an effuent limitation of " + C_exact + " mg/L";
        }

        else if(AAP.value > 25 && AAP.value <= 35){
            let precip_adjust = 0.5;
            C = precip_adjust * C_unadusted;
            C_exact = C.toFixed(2);
            message.innerHTML = "the maximum allowable concentration not to exceed an MCL of 10 mg/L requires an effuent limitation of " + C_exact + " mg/L";
        }

        else if(AAP.value > 35 && AAP.value <= 40){
            let precip_adjust = 0.67;
            C = precip_adjust * C_unadusted;
            C_exact = C.toFixed(2);
            message.innerHTML = "the maximum allowable concentration not to exceed an MCL of 10 mg/L requires an effuent limitation of " + C_exact + " mg/L";
        }

        else if(AAP.value > 40){
            let precip_adjust = 1;
            C = precip_adjust * C_unadusted;
            C_exact = C.toFixed(2);
            message.innerHTML = "the maximum allowable concentration not to exceed an MCL of 10 mg/L requires an effuent limitation of " + C_exact + " mg/L";
        }
    }
}