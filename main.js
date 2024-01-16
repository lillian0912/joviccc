

const app = Vue.createApp({
    data(){
        return{

           
            moneytree: './assets/images/moneytree.png',
            questionpeople: './assets/images/questionpeople.png',
            DM: './assets/images/DM.png',
            brain: './assets/images/brain.png',
            mail: './assets/images/mail.png',

            RFC:'https://smartasset.com/financial-advisor/registered-financial-consultant',
            CFP:'https://www.investopedia.com/terms/c/cfp.asp',
             
           
        }
    },
    methods: {
          pagechange() {
            // 新頁面的 URL
            var newPageUrl = "https://icooon-mono.com/";
            window.location.href = newPageUrl;
          },
          
            navigateToRFC() {
              window.location.href = 'https://smartasset.com/financial-advisor/registered-financial-consultant';
            },
            navigateToCFP() {
              window.location.href = 'https://www.investopedia.com/terms/c/cfp.asp';
            },    
              
        
      },
      

}) 

const mountedApp = app.mount('#app');
    


