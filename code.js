const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ROBLOX_ID_INPUT = urlParams.get('roblox_id');

var jsonObj = {
    code: "",
    expires: 0,
    roblox_id: 0
}

function generateRandomString(length) {
    const charset = "ABCDEFGIJKMNOPRSTVWXYZ2345678";
    let result = "";
 
    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * charset.length);
       result += charset[randomIndex];
    }
 
    return result;
};

window.addEventListener("DOMContentLoaded", (l) => {
    const GENERATE_BUTTON = document.getElementById('roblox_id_button');

    GENERATE_BUTTON.addEventListener('submit', function (event) {
        console.log('pressed');
    
        var code = generateRandomString(6);
        var expires = Math.floor(Date.now() / 1000) + 604800;
        jsonObj.code = code;
        jsonObj.expires = expires;
        jsonObj.roblox_id = ROBLOX_ID_INPUT;
    
        const JSON_TO_PARSE = JSON.stringify(jsonObj);
        localStorage.setItem(JSON_TO_PARSE);

        event.preventDefault();
    });
});
