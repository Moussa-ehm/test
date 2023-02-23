
fetch('service.json')
    .then(response => response.json())
    .then(data => {

        //Pacourir les données json (Recuperation du type "couvreur paysagiste etc...) et ( le nom services recuperer en bdd dans la table servicecommune "Renovation de toiture" )
        //En supprimant les espaces en php avec str_replace(' ', '', $var);
        let partitions = data.services.couvreur.Renovationdetoiture;
        console.log(partitions);

        //REcuparation des textes à rempalcer
        let listElements = document.querySelectorAll('p');

        //Parcour des p à remplacer par les valeurs en json
        listElements.forEach((listElement, index) => {
            // Récupérer le contenu correspondant de la partition
            let partitionContent = partitions[index].text;
            // remplacer le contenu de la liste à puce par le contenu de la partition
            listElement.innerHTML = partitionContent;
        });
    });