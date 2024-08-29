const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adios': 'Adios, ¡Que tengas un buen día!.',
    'como estas': 'Estoy muy bien, gracias por preguntar',
    'que puedes hacer': 'Puedo responder a preguntas básicas',
    'buenos dias': '¡Muy buenos dias!',
    'como te llamas': 'Mi nombre es ChatyBot',
    'gracias': '¡De nada! ¿En qué más puedo ayudarte?',
    'que hora es': 'Lo siento, no tengo un reloj, pero puedes verificar la hora en tu dispositivo.',
    'donde estas': 'Estoy en la nube, siempre listo para ayudarte.',
    'cuantos años tienes': 'No tengo edad, soy un programa de inteligencia artificial.',
    'cuentame un chiste': '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.',
    'que tiempo hace': 'No puedo verificar el clima, pero puedes consultar una aplicación de clima en tu dispositivo.',
    'te gusta la música': '¡Claro! Aunque no puedo escucharla, sé que la música es maravillosa.',
    'cuál es tu color favorito': 'No tengo preferencias, pero los colores son fascinantes.',
    'cuál es tu comida favorita': 'No como, pero sé que la comida es deliciosa.',
    'puedes ayudarme': '¡Por supuesto! ¿En qué necesitas ayuda?',
    'cuál es tu película favorita': 'No veo películas, pero hay muchas geniales por ahí.',
    'dime algo interesante': '¿Sabías que las abejas pueden reconocer rostros humanos?',
    'cuál es tu deporte favorito': 'No practico deportes, pero sé que son muy divertidos.'
};

const sendButton = document.querySelector('.send-button');
const textInput = document.querySelector('.text-input');
const chatText = document.querySelector('.chat-text');
const typingIndicator = document.getElementById('typing-indicator');

function scrollToBottom() {
    chatText.scrollTop = chatText.scrollHeight;
}

function sendMessage() {
    const message = textInput.value.trim().toLowerCase();
    if (message !== '') {
        const divMessage = document.createElement('div');
        const messageTitle = document.createElement('p');
        messageTitle.classList.add('message-title');
        const messageElement = document.createElement('p');
        messageElement.classList.add('message-style');
        messageTitle.textContent = 'User';
        messageElement.textContent = message;
        divMessage.appendChild(messageTitle);
        divMessage.appendChild(messageElement);
        chatText.appendChild(divMessage);
        textInput.value = '';

        setTimeout(() => {

            if (message in responses) {
                const divChatbot = document.createElement('div');
                divChatbot.classList.add('div-chatBot-response')
                const chatbotResponseTitle = document.createElement('p');
                chatbotResponseTitle.classList.add('response-title-style')
                chatbotResponseTitle.classList.add('message-title');
                const chatbotResponse = document.createElement('p');
                chatbotResponse.classList.add('responseChatbot-style')
                chatbotResponse.classList.add('message-style');
                chatbotResponseTitle.textContent = 'ChatyBot';
                chatbotResponse.textContent = responses[message];
                divChatbot.appendChild(chatbotResponseTitle);
                divChatbot.appendChild(chatbotResponse);
                chatText.appendChild(divChatbot);
            } else {
                const divChatbot = document.createElement('div');
                divChatbot.classList.add('div-chatBot-response')
                const chatbotResponseTitle = document.createElement('p');
                chatbotResponseTitle.classList.add('response-title-style')
                chatbotResponseTitle.classList.add('message-title');
                const chatbotResponse = document.createElement('p');
                chatbotResponse.classList.add('responseChatbot-style')
                chatbotResponse.classList.add('message-style');
                chatbotResponseTitle.textContent = 'Bot';
                chatbotResponse.textContent = 'No tengo capacitación para responder ese comentario';
                divChatbot.appendChild(chatbotResponseTitle);
                divChatbot.appendChild(chatbotResponse);
                chatText.appendChild(divChatbot);
            }

            scrollToBottom();
            
        }, 1000);
    }
};

sendButton.addEventListener('click', sendMessage);

textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
