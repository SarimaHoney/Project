// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// ===================== SIDEBAR ========================

// remove active class from all menu items
 const changeActiveItem = () => {
    menuItems.forEach(item => {
    item.classList.remove('active');   
    })   
}
 menuItems.forEach(item => {
    item.addEventListener('click', () => {
     changeActiveItem();
    item.classList.add('active');
    if(item.id != 'notifications'){
    document.querySelector('.notifications-popup').
    style.display = 'none';
} else {
    document.querySelector('.notifications-popup').
    style.display = 'block';
    document.querySelector('#notifications .notification-count').style.display = 'none';
}
    })
})

// ========================== MESSAGES =============================

// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}


// search chat
messageSearch.addEventListener('keyup', searchMessage);



// highlight messages card when messages menu item is clicked 
messagesNotification.addEventListener('click' , () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})