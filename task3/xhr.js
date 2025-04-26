let xhr=new XMLHttpRequest()

const url="https://jsonplaceholder.typicode.com/posts"

xhr.open('GET',url,true)

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        const response=JSON.parse(xhr.responseText)
        console.log("response:",response)
    }
    else{
        console.log("Error:",xhr.status)
    }
}

xhr.onerror=function(){
    console.log("Request error")
}

xhr.send()