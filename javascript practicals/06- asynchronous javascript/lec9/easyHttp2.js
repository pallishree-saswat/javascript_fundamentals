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
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
     
    }


     //make an http POST request with promise
     post(url,data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)

            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
     
    }

     //make an http PUT request with promise
     put(url,data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)

            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
     
    }

      //make an http DELETE request with promise
      delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
               

            })
            .then(res => res.json())
            .then(()=> resolve('  user deleted '))
            .catch(err => reject(err))
        })
     
    }


}