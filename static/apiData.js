fetch('/users')
    .then(response => response.json())
    .then(users => {
        console.log(users)
        const utilisateurs = document.querySelector("#users")
        const tableau = `<table class='table table-striped'><thead><tr></tr></thead></table>`

        utilisateurs.innerHTML = tableau    

        let enTete = Object.keys(users[0])

        console.log(enTete)

        for (keys of enTete) {
            let th = document.createElement('th')
            th.innerHTML = `${keys}`;
            document.querySelector("tr").appendChild(th);
        }

        let tBody = document.createElement('tbody');
        document.querySelector("table").appendChild(tBody);

        for (user of users) {

            let tr = document.createElement('tr')
            document.querySelector("tbody").appendChild(tr);

            for (let i = 0; i < enTete.length; i++) {

                let td = document.createElement("td");
                let key = enTete[i];
                if (enTete[i] == "address") {
                    let adresse = user[key];
                    for (detail of Object.entries(adresse)) {
                        td.innerHTML += ` ${detail[1]}`;
                    }
                    tr.appendChild(td);
                } else {
                    td.innerHTML = (user[key]);
                    tr.appendChild(td);
                }

            }
        }
    })