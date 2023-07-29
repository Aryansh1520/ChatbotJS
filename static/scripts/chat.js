var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function quick_reply_click(inp,query_number = 'null'){
    var userText = '';
    console.log(inp);
    try {
        document.querySelectorAll(".quick_reply").forEach(el => el.remove());

    } catch (e) {
        console.log(e);
    }

    switch (inp) {
        case 'new_user':
            userText = '1'
            buttonSendText('New User');
            getHardResponse(userText)
            break;

        case 'old_user':
            userText = '2';
            buttonSendText('Existing Customer');
            getHardResponse(userText)
            break;
            
        case '1':
            userText = inp;
            buttonSendText('Inventory Management Software(RADE)');
            getHardResponse(userText)
            break;
        case '2':
            userText = inp;
            buttonSendText('CRM');
            getHardResponse(userText)
            break;
        case '3':
            userText = inp;
            buttonSendText('Order Management Software');
            getHardResponse(userText)
            break;

        case 'Yes':
            userText = inp;
            buttonSendText('Yes');
            getHardResponse(userText)
            break;
        case 'No':
            userText = inp;
            buttonSendText('No');
            getHardResponse(userText);
            break;
        case 'gen_tick':

            buttonSendText('Generate Ticket');
            getHardResponse('1')
            break;
        case 'tick_status':

            buttonSendText('Ticket Status');
            getHardResponse('2');
            break;
        case 'Inventory Management Software(RADE)':
        case 'CRM':
        case 'Order Management Software':
            buttonSendText(inp);
            getHardResponse(query_number)
            break;

        default:
            console.log('DEFAULT')
            userText = inp;
            buttonSendText(userText);
            break;
    }

}
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {

    const old_user_button = `<input type="button" class="quick_reply" id = "old_user" value="2. Existing Customer " onclick = "quick_reply_click('old_user')" />`
    const new_user_button = `<input type="button" class="quick_reply" id = "new_user" value="1. New User " onclick = "quick_reply_click('new_user')" />`



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
    $("#new_user_product").val('0')
    $("#chat_end").val('0')
    let firstMessage = "Welcome to PSM Softtech<br>How may I help you today?<br><br>"+new_user_button+"<br>"+old_user_button
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function backButton() {
    let mess = back_button()
    let bot = '<p class="botText"><span>' +'Returning...<br>'+ mess + '</span></p>';
    $("#chatbox").append(bot);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
