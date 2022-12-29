function toggle(){

    var body = document.body; 
    body.id = ( body.id ) ? body.id : 'body_id'; // ffox

    body.use_custom_cursor = !body.use_custom_cursor;

    body.style.cursor = body.use_custom_cursor ? 'wait' : 'auto';
}

function open_nav() {
    if (document.getElementById('navigation').style.visibility == 'hidden') { 
        document.getElementById('navigation').style.height = '75px';
        document.getElementById('navigation').style.visibility = 'visible';        
    } else {
        document.getElementById('navigation').style.height = '0px';
        document.getElementById('navigation').style.visibility = 'hidden'; 
    }

}
