//make easy http library virsion 2

/* class EasyHTTP {

    //make an http GET request without promise
    get(url) {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
} */


class EasyHTTP {

    //make an http GET request with promise
   async get(url) {
       const response = await fetch(url);
       const resData =  await response.json();
       return resData;
   
     
    }


     //make an http POST request with promise
      async post(url,data) {
   
        const response = await fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)

            })
       const resData =  await response.json();
       return resData;
   

     
    }

     //make an http PUT request with promise
     async put(url,data) {
   
        const response = await fetch(url, {
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)

            })
       const resData =  await response.json();
       return resData;
   

     
    }

      //make an http DELETE request with promise
      async delete(url) {
   
        const response = await fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }

            })
       const resData =  await 'user deleted';
       return resData;
   

     
    }


}