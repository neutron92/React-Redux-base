let Api = {
    fetchUsers:()=>{
        var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
        
        return fetch(url, {
           method: 'GET', // or 'PUT'
           headers:{
             'Content-Type': 'application/json'
           }
         }).then(res => res.json())
         .catch(error => {
             console.log("errorerror",error);
             throw new Error(error.message)
              
         });
    },
    fetchUsers2:()=>{
        var url = 'http://qweqwejqklwelkqwe.ca/';
        
       return fetch(url, {
          method: 'POST', // or 'PUT'
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json().map(child => child.data))
        .catch(error => {
            console.log("errorerror",error);
            throw new Error(error.message)
             
        });
    }
}

export default Api;