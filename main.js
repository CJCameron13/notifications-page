//Set variables for elements that will be called -- Note for me: each creates an array of all elements with that class name
const unreadMessage = document.querySelectorAll('.unread');
const unread = document.getElementById('unread-counter');
const markAll = document.getElementById('mark-all');
//Sets counter to number of messages still identified as unread
unread.innerText = unreadMessage.length

//forEach method calls each item in the array
unreadMessage.forEach((message) => {
    message.addEventListener("click", () => {
        //removes class identification from the element on click
        message.classList.remove('unread');
        //runs new unread message count
        const newUnreadMessage = document.querySelectorAll('.unread');
        unread.innerText = newUnreadMessage.length;
    })
})

markAll.addEventListener("click", () => {
    unreadMessage.forEach(message => message.classList.remove('unread'))
    const newUnreadMessage = document.querySelectorAll('.unread');
    unread.innerText = newUnreadMessage.length
})