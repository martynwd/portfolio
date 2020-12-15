class EventEmitter {
    constructor() {
        this.events = {};
    }

    emit(eventName, data) {
        const event = this.events[eventName];
        if (event) {
            event.forEach(fn => {
                fn.call(null, data);
            });
        }
    }

    subscribe(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(fn);
        return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
        }
    }

}

let generateMessage = (data) => {
    let messageDiv = document.createElement('div');
    let messageText = document.createElement('span');
    let deleteButton = document.createElement('span');
    deleteButton.id = 'deleteButton'
    messageText.innerHTML = data;
    messageDiv.classList.add('visitorMessage')
    messageDiv.appendChild(messageText)
    messageDiv.appendChild(deleteButton)

    return messageDiv;
}

let generateAnswer = () => {
    let messageDiv = document.createElement('div');
    let messageText = document.createElement('span');
    let deleteButton = document.createElement('span');
    deleteButton.id = 'deleteButton'
    messageDiv.classList.add('botMessage')
    messageText.innerHTML = dict.first[Math.floor(Math.random() * dict.first.length)] + dict.second[Math.floor(Math.random() * dict.second.length)] + dict.third[Math.floor(Math.random() * dict.third.length)];
    messageDiv.appendChild(messageText)
    messageDiv.appendChild(deleteButton)

    return messageDiv;
}
let dict = {
    first: ['q ', 'ку ', 'кульянити ', 'здарова ', 'приветствую '],
    second: ['работяга ', 'смотрящий ', 'очередной ', 'забулдыга ', 'душный ', 'ПАПУГА '],
    third: ['че жрал? ', 'что ел ', 'че седня жрал ', 'что хавал ', 'сколько регнул ']
}
let emmiter = new EventEmitter();

let chatDiv = document.getElementById('chat');

let startBtn = document.getElementById('chatStartButton');
let closeBtn = document.getElementById('closeButton');
let sendButton = document.getElementById('sendButton');

let deleteButton = document.getElementById('deleteButton');

let input = document.querySelector('input')

startBtn.addEventListener('click', () => {
    emmiter.emit('chat:start', {})
})

closeBtn.addEventListener('click', () => {
    emmiter.emit('chat:stop', {})
})

sendButton.addEventListener('click', () => {
    emmiter.emit('chat:sendMessage', {})
})


emmiter.subscribe('chat:start', () => {
    chatDiv.style.display = 'flex';
    console.log('BLM', sendButton.parentNode)
})

emmiter.subscribe('chat:stop', (deleteButton) => {
    chatDiv.style.display = 'none';
})

emmiter.subscribe('chat:deleteMessage', () => {
    console.log('che')
    chatDiv.removeChild(deleteButton.parentNode)
})

emmiter.subscribe('chat:sendMessage', () => {
    let input = document.querySelector('input');
    input, addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            event.preventDefault()
            sendButton.click()
        }
    })
    let message = generateMessage(input.value);
    input.value = ''
    chatDiv.appendChild(message)
    setTimeout(() => chatDiv.appendChild(generateAnswer()), 1000)
    let sru = message.querySelector('deleteButton')
    console.log(message)
})