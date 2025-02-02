let form = document.querySelector("form");
        // The document.querySelector() method returns the first element that matches a specified CSS selector.
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
            document.querySelector("#sub").value = "Submiting..";
            // Change the value of the submit button to "Submitting..." while the form is being submitted.
            let data = new FormData(form);
            // The FormData() method creates a new FormData object that contains the values of all the form fields.
            fetch('https://script.google.com/macros/s/AKfycbzHY7bDpgSHtnKR1Ssi0_BwDkysFR9tgukzGm_c9MVIVH6RdyQuT-QFleVuDfOTSCbq/exec', {
                    method: "POST",
                    body: data
                })
                // The fetch() method is used to make a request to the server and retrieve data.
                // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
                .then(res => res.text())
                // The .then() method is used to handle the response from the server.
                // The response is converted to text using the res.text() method.
                .then(data => {
                    // document.querySelector("#msg").innerHTML = data;
                    let successMsg = document.querySelector("#msg");
                    successMsg.innerHTML = "Message successfully submitted!";
                    successMsg.style.display = "inline-block";
                    successMsg.style.backgroundColor = "#FFD700";  // gold color
                    successMsg.style.color = "black";
                    successMsg.style.fontSize = "18px"; 
                    successMsg.style.padding = "7px";
                    successMsg.style.borderRadius = "5px";
                    successMsg.style.marginTop = "10px";
                    successMsg.style.marginLeft = "5px";
                    successMsg.style.textAlign = "center";
                    form.reset();
                    // The innerHTML property sets or returns the HTML content of an element.
                    // Here, we are setting the content of the <h1> element to the response from the server.
                    document.querySelector("#sub").value = "Submit"
                    // Change the value of the submit button back to "Submit" after the form has been submitted.
                    setTimeout(() => {
                        successMsg.style.display = "none";
                    }, 5000);
                });
        });