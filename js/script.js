console.log('JS OK')

const { createApp } = Vue;

createApp({
    data(){
        return {
            newChatlog: '',
            chatsLog: [
                {  
                    image: './img/avatar_1.png',
                    name: 'Michele',
                },
                {  
                    image: './img/avatar_2.png',
                    name: 'Fabio',
                },
                {  
                    image: './img/avatar_3.png',
                    name: 'Samuele',
                },
                {  
                    image: './img/avatar_4.png',
                    name: 'Alessandro L.',
                },
                {  
                    image: './img/avatar_5.png',
                    name: 'Alessandro B',
                },
                {  
                    image: './img/avatar_6.png',
                    name: 'Claudia',
                },
                {  
                    image: './img/avatar_7.png',
                    name: 'Federico',
                },
                {  
                    image: './img/avatar_8.png',
                    name: 'Davide',
                },
            ]
        }
    }
}).mount('#app')