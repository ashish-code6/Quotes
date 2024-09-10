const tweetQuote=document.querySelector('#tweet-quote');
const author=document.querySelector('#author');
const newQuote=document.querySelector('#new-quote');
const tweetBtn =document.querySelector('#tweet-btn');


const quote_api="https://api.quotable.io/random";

const getdata= async(url)=>{
    try{
        const response= await fetch(url);
        const data=await response.json();
        // console.log(data)
        tweetQuote.innerHTML=data.content;
        author.innerHTML=`~ ${data.author}`;
    }
    catch(error){
        console.error('Error:',error);
    }
};
newQuote.addEventListener('click',()=>{
        getdata(quote_api);
});

tweetBtn.addEventListener('click',()=>{
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;

   
    const width = Math.min(screenWidth * 0.8, 600); 
    const height = Math.min(screenHeight * 0.8, 400); 

    const left = (screenWidth - width) / 2; 
    const top = (screenHeight - height) / 2; 
    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetQuote.innerHTML + " " + author.innerHTML)}`,
        "Tweet Window",
        `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
    );

});

getdata(quote_api);

