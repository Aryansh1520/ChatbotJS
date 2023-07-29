const prod_1 = `<input type="button" class="quick_reply" id = "prod_1" value="1.Inventory Management Software(RADE) " onclick = "quick_reply_click('1')" />`
const prod_2 = `<input type="button" class="quick_reply" id = "prod_2" value="2. CRM " onclick = "quick_reply_click('2')" />`
const prod_3 = `<input type="button" class="quick_reply" id = "prod_3" value="3.Order Management Software " onclick = "quick_reply_click('3')" />`
const old_user_button = `<input type="button" class="quick_reply" id = "old_user" value="2. Existing Customer " onclick = "quick_reply_click('old_user')" />`
const new_user_button = `<input type="button" class="quick_reply" id = "new_user" value="1. New User " onclick = "quick_reply_click('new_user')" />`
const generate_ticket = `<input type="button" class="quick_reply" id = "generate_ticket" value="1. Generate Ticket/Request Callback " onclick = "quick_reply_click('gen_tick')" />`
const tick_status = `<input type="button" class="quick_reply" id = "generate_ticket" value="2. Check Ticket Status " onclick = "quick_reply_click('tick_status')" />`
var customer_info = {'8104823815':['Aryan','Inventory Management Software(RADE)','Order Management Software'],'9920013683':['Person 2','CRM']};
var str = 'Which Product do you need support for?<br><br>';
var arr = ['8104823815','9920013683']


function verify_otp(otp){
    if(otp == '5555' ){
        let botHtml = '<p class="botText"><span>' + `OTP Verified <br>Thank You, ${$("#new_name").val()} for registering with PSM Softtech ` + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        return 'Please Select One Of The Following Products  <br><br>'+ prod_1 + '<br>'+ prod_2 + '<br>'+ prod_3
    }
    else{
        $("#new_user_details").val('3')
        return 'Wrong OTP Please try again'
    }
} 



function back_button() {
    if (($("#begun").val()!='0')){

    try {
        document.querySelectorAll(".quick_reply").forEach(el => el.remove());

    } catch (e) {
        console.log(e);
    }
    //console.log($("#begun").val() , $("#new_user_details").val() , $("#is_new").val());
    }
    if ($("#begun").val()=='1'  && $("#is_new").val()=='1' ) {
        switch ($("#new_user_details").val()) {
            case '1':
                let firstMessage = "Welcome to PSM Softtech<br>How may I help you today?<br><br>"


                reset_chat()


                return firstMessage+`${new_user_button}<br>${old_user_button}`;
            case '2':
                $("#new_user_details").val('1')
                return 'Please Enter You Name'
            case '3':
                $("#new_user_details").val('2')
                return 'Enter Your Mobile Number'
            
            default:
                return 'Error!!!'
        }

    }
    
    else if($("#begun").val()=='1' && $("#is_new").val()=='0'){
        
        switch ($("#old_user_verification").val() ) {
            case '1':
                let firstMessage = "Welcome to PSM Softtech<br>How may I help you today?<br><br>"+`${new_user_button}<br>${old_user_button}`;
                reset_chat()
                return firstMessage
            case '2':
                $("#old_user_verification").val('1')
                return 'Please Enter Your Registered Mobile Number'
            case '3':
                $("#old_user_verification").val('2')

                for (var counter =1; counter< customer_info[$("#old_user_phone").val()].length;counter++) {
                    let str_cou = String(counter)
                    str = str +`<input type="button" class="quick_reply" id = "old_prod" value="${str_cou}.  ${customer_info[$("#old_user_phone").val()][counter]}" onclick = "quick_reply_click('${customer_info[number][counter]}','${str_cou}')" />` +'<br>';
                }
                var name = customer_info[$("#old_user_phone").val()][0]

                return `Hello ${name}! `+ str;  


            default:
                return 'Error ! ';
        }

    }
    else{
        return 'Error! Please wait or try again'
    }
}

function reset_chat(){
    $("#begun").val('0')
    $("#new_user_details").val('0')
    $("#new_name").val('0')
    $("#new_phone").val('0')
    $("#new_otp").val('0')
    $("#old_user_verification").val('0')
    $("#old_user_phone").val('0')
    $("#is_new").val('0')
    $("#product_no").val('0')
    $("#service_no").val('0')
    $("#section_number").val('0')
}

function uc_new(input){
    const old_user_button = `<input type="button" class="quick_reply" id = "old_user" value="2. Existing Customer " onclick = "quick_reply_click('old_user')" />`
    const new_user_button = `<input type="button" class="quick_reply" id = "new_user" value="1. New User " onclick = "quick_reply_click('new_user')" />`
    const yes = `<input type="button" class="quick_reply" id = "resp_yes" value=" Yes " onclick = "quick_reply_click('Yes')" />`
    const no = `<input type="button" class="quick_reply" id = "resp_no" value=" No " onclick = "quick_reply_click('No')" />`
    let p1 = `<input type="button" class="quick_reply" id = "prod_1" value="1.Inventory Management\n Software(RADE) " onclick = "quick_reply_click('1')" />`
    let p2 = `<input type="button" class="quick_reply" id = "prod_2" value="2. CRM " onclick = "quick_reply_click('2')" />`
    let p3 = `<input type="button" class="quick_reply" id = "prod_3" value="3.Order Managemnet Software " onclick = "quick_reply_click('3')" />`
    switch ($("#new_user_details").val()) {
        case '0':
            $("#new_user_details").val('1')
            return 'Please Enter Your Name'
        case '1':
            if (input.length!=0){
            $("#new_name").val(input)
            $("#new_user_details").val('2')
            console.log('name : '+ $("#new_name").val())
            return 'Please Enter Your Phone Number'
            }
            else{
                return 'Name Cannot Be Empty'
            }
        case '2':
            if (input.length ==10 && isNumeric(input)){
            $("#new_phone").val(input)
            $("#new_user_details").val('3')
            console.log('phone : ' +$("#new_phone").val())
            //console.log($("#new_name").val(),$("#new_phone").val())
            return 'Enter The OTP Sent to Your Mobile Number'
            }else{
            return 'Invalid Mobile Number Please Try Again'
            }
        case'3':
            $("#new_otp").val(input)
            $("#new_user_details").val('4')
            //console.log($("#new_name").val(),$("#new_otp").val())
            return verify_otp($("#new_otp").val())
        case'4':
            
            if (input>=1 && input<=3){
            $("#new_user_details").val('5')
            $("#new_user_product").val(input)
            let m = `Please Type <br><br> ${yes}   To Continue...<br><br> ${no}    To Go Back...`
            return m;
            }
            else{
                return 'Invalid Product Number Please Try Again'
            }
        case '5':
            switch (input) {
                case 'Yes':
                case 'YES':
                case 'yes':

                    console.log('PRODUCT ID: ',$("#new_user_product").val())
                    let new_ticket = 'dummy ticket'
                    let botHtml = '<p class="botText"><span>' + `Our Team Will Shortly Get Back To You To Schedule A Demo <br><br> Ticket Details (for future reference) : ${new_ticket}` + '</span></p>';
                    $("#chatbox").append(botHtml);
                    let str = `This chat session has now ended. To start again please select one of the following options <br><br>${new_user_button}</br><br>${old_user_button}`
                    reset_chat()
                    return str;
                case 'NO':
                case 'No':
                case 'no':
                    $("#new_user_details").val('4')
                    return `Please Select One Of The Following Product  <br>${p1}<br><br>${p2}<br><br>${p3}`
                default:
                    return 'Please Enter A Valid Input';
            }

        default:
            return 'Error Please Try Again';
    }
    
}

function isNumeric(number){
    return !isNaN(number)

}

function uc_old(number){

    switch ($("#old_user_verification").val()) {
        case '0':
            $("#old_user_verification").val('1')
            return 'Please Enter Your Registered Mobile Number'
        case '1':
            if (arr.includes(number) && number.length ==10 && isNumeric(number)) {
                $("#old_user_phone").val(number)
                console.log('Mobile : ',$("#old_user_phone").val())
                var name = customer_info[number][0]
                for (var counter =1; counter< customer_info[number].length;counter++) {
                    let str_cou = String(counter)
                    str = str +`<input type="button" class="quick_reply" id = "old_prod" value="${str_cou}.  ${customer_info[number][counter]}" onclick = "quick_reply_click('${customer_info[number][counter]}','${str_cou}')" />` +'<br>';
                }
                $("#old_user_verification").val('2')

                return `Welcome ${name}! `+ str ;  
            }else{
                return 'Sorry !Invalid Phone Number or Your Phone Number is not Registered With us. Please Try Again.'
            }
        case '2':
            $("#old_user_verification").val('3')
            $("#product_no").val(number)
            console.log("Prduct selected by o_user : ", $("#product_no").val())
            if((customer_info[$("#old_user_phone").val()].length-1 )>=number && number >0){
              
                return `Please select one of the following options: <br><br>${generate_ticket}<br>${tick_status}`
            }else{
                return 'Invalid  Input';
            }
        case '3':

            //console.log('STRING',number)
            if (['1','2'].includes(number)){
                $("#service_no").val(number)
                //console.log($("#service_no").val(),$("#product_no").val())
                if (number == '1'){
                    let ticket = '#random_ticket_here'
                    //SEND REQUEST HERE
                    reset_chat()
                    let botHtml = '<p class="botText"><span>' +`A ticket has been generated : ${ticket}<br><br> Please holdon for some time while we call you back.` + '</span></p>';
                    $("#chatbox").append(botHtml);
            
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
                    return `This chat session has now ended. To start again please select one of the following options  <br><br>${new_user_button} <br>${old_user_button}`
                }
                else{
                    //FETCH STATUS HERE
                    let status = 'dummy status'
                    reset_chat()
                    let botHtml = '<p class="botText"><span>' +`Current status :  ${status}` + '</span></p>';
                    $("#chatbox").append(botHtml);
            
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
                    return `This chat session has now ended. To start again please select one of the following options <br><br>${new_user_button} <br>${old_user_button}`

                }
            }
            else{
                return 'Invalid Input Here';
            }

        default:
            break;
    }
}

function getBotResponse(input) {
    //console.log($("#new_user_details").val())
    if (($("#begun").val()=='0')){

        switch (input) {
            case '1':
                $("#begun").val('1')
                $("#is_new").val('1')
                $("#section_number").val('1')
                return uc_new()

            case '2':
                $("#begun").val('1')
                $("#is_new").val('0')
                return uc_old()

            default:
                return 'Invalid Input! Please try again.'

        }
    }
    else if($("#begun").val()=='1'&& ($("#new_user_details").val()>=0 && $("#new_user_details").val()<=5 )&& $("#is_new").val()==1){
        return uc_new(input)
    }
    else if($("#begun").val()=='1'&& ($("#old_user_verification").val()>=0 && $("#old_user_verification").val()<=3 )&& $("#is_new").val()==0){
        return uc_old(input)
    }
    
    else{
        return 'Invalid Input! Please try again.'
    }
}
