     const myRequest = new Request("flowers.jpg");
     fetch(myRequest)
       .then((response) => {
         console.log("response.statusText =", response.statusText); // response.statusText = "OK"
         return response.blob();
       })
       .then((myBlob) => {
         const objectURL = URL.createObjectURL(myBlob);
         myImage.src = objectURL;
       });
     