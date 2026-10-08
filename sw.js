const CACHE_NAME = "voxhelp30-c4";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png",

    "./pictogrammes/respiration.jpg",
    "./pictogrammes/aspirer.jpg",
    "./pictogrammes/secretions.jpg",
    "./pictogrammes/tracheodouleur.jpg",
    "./pictogrammes/boucheseche.jpg",
    "./pictogrammes/respiremieux.jpg",

    "./pictogrammes/couchez.jpg",
    "./pictogrammes/redressez.jpg",
    "./pictogrammes/montez.jpg",
    "./pictogrammes/tournez.jpg",
    "./pictogrammes/tete-lit-haute.jpg",
    "./pictogrammes/tete-lit-bas.jpg",
    "./pictogrammes/jambes-haut.jpg",
    "./pictogrammes/jambes-bas.jpg",
    "./pictogrammes/oreiller.jpg",
    "./pictogrammes/couverture.jpg",
    "./pictogrammes/position-mal.jpg",
    "./pictogrammes/position-ok.jpg",

    "./pictogrammes/aidezmoi.jpg",
    "./pictogrammes/senspasbien.jpg",
    "./pictogrammes/cavamieux.jpg",
    "./pictogrammes/intimité.jpg",
    "./pictogrammes/constipé.jpg",
    "./pictogrammes/gaz.jpg",
    "./pictogrammes/diarrhee.jpg",
    "./pictogrammes/nausee.jpg",
    "./pictogrammes/vertiges.jpg",
    "./pictogrammes/faible.jpg",
    "./pictogrammes/frissons.jpg",
    "./pictogrammes/medicpasok.jpg",
    "./pictogrammes/chaud.jpg",
    "./pictogrammes/froid.jpg",

    "./pictogrammes/chambre.jpg",
    "./pictogrammes/cafeteria.jpg",
    "./pictogrammes/dehors.jpg",
    "./pictogrammes/maison.jpg",

    "./pictogrammes/changezmoi.jpg",
    "./pictogrammes/uriner.jpg",
    "./pictogrammes/selle.jpg",
    "./pictogrammes/manger.jpg",
    "./pictogrammes/boire.jpg",
    "./pictogrammes/douche.jpg",
    "./pictogrammes/brosserdents.jpg",
    "./pictogrammes/laverface.jpg",
    "./pictogrammes/raser.jpg",
    "./pictogrammes/coiffer.jpg",
    "./pictogrammes/lunettes.jpg",
    "./pictogrammes/sonotone.jpg",
    "./pictogrammes/dentier.jpg",
    "./pictogrammes/tshirt.jpg",
    "./pictogrammes/pantalons.jpg",
    "./pictogrammes/pullover.jpg",
    "./pictogrammes/chaussures.jpg",

    "./pictogrammes/porte-fermer.jpg",
    "./pictogrammes/porte-ouvrir.jpg",
    "./pictogrammes/rideaux-fermer.jpg",
    "./pictogrammes/rideaux-ouvrir.jpg",
    "./pictogrammes/lumiere-on.jpg",
    "./pictogrammes/lumiere-off.jpg",
    "./pictogrammes/bruit.jpg",
    "./pictogrammes/fenetre-ouvrir.jpg",
    "./pictogrammes/fenetre-fermer.jpg",
    "./pictogrammes/television.jpg",
    "./pictogrammes/musique.jpg",
    "./pictogrammes/telephone.jpg",
    "./pictogrammes/chargez.jpg",
    "./pictogrammes/dormir.jpg",

    "./pictogrammes/peur.jpg",
    "./pictogrammes/triste.jpg",
    "./pictogrammes/colère.jpg",
    "./pictogrammes/marre.jpg",
    "./pictogrammes/découragé.jpg",
    "./pictogrammes/seul.jpg",
    "./pictogrammes/fatigué.jpg",
    "./pictogrammes/ennui.jpg",
    "./pictogrammes/content.jpg",
    "./pictogrammes/mieux.jpg",
    "./pictogrammes/restez.jpg",
    "./pictogrammes/partez.jpg",
    "./pictogrammes/pasparler.jpg",

    "./pictogrammes/mal-tête.jpg",
    "./pictogrammes/mal-cou.jpg",
    "./pictogrammes/mal-poitrine.jpg",
    "./pictogrammes/mal-dos.jpg",
    "./pictogrammes/mal-ventre.jpg",
    "./pictogrammes/mal-epaule.jpg",
    "./pictogrammes/mal-bras.jpg",
    "./pictogrammes/mal-main.jpg",
    "./pictogrammes/mal-hanche.jpg",
    "./pictogrammes/ma-cul.jpg",
    "./pictogrammes/mal-jambe.jpg",
    "./pictogrammes/mal-pied.jpg",

    "./pictogrammes/mal-front.jpg",
    "./pictogrammes/mal-nuque.jpg",
    "./pictogrammes/mal-oeil.jpg",
    "./pictogrammes/mal-oreille.jpg",
    "./pictogrammes/mal-machoire.jpg",
    "./pictogrammes/mal-toute-tete.jpg",

    "./pictogrammes/mal-poitrine-gauche.jpg",
    "./pictogrammes/mal-poitrine-droite.jpg",
    "./pictogrammes/mal-cotes.jpg",
    "./pictogrammes/mal-poitrine-centre.jpg",
    "./pictogrammes/mal-poitrine-toute.jpg",

    "./pictogrammes/mal-dos-haut.jpg",
    "./pictogrammes/mal-dos-centre.jpg",
    "./pictogrammes/mal-dos-gauche.jpg",
    "./pictogrammes/mal-dos-droite.jpg",
    "./pictogrammes/mal-dos-bas.jpg",
    "./pictogrammes/mal-dos-tout.jpg",

    "./pictogrammes/mal-ventre-haut.jpg",
    "./pictogrammes/mal-ventre-centre.jpg",
    "./pictogrammes/mal-ventre-gauche.jpg",
    "./pictogrammes/mal-ventre-droite.jpg",
    "./pictogrammes/mal-ventre-bas.jpg",
    "./pictogrammes/mal-ventre-vessie.jpg",
    "./pictogrammes/mal-ventre-genital.jpg",
    "./pictogrammes/mal-ventre-tout.jpg",

    "./pictogrammes/fesse-gauche.jpg",
    "./pictogrammes/fesse-droite.jpg",
    "./pictogrammes/sacrum.jpg",
    "./pictogrammes/anus.jpg",
    "./pictogrammes/fesses-deux.jpg"
];


self.addEventListener("install", function(event) {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(function(cache) {

                const requests =
                    FILES_TO_CACHE.map(function(url) {

                        return new Request(
                            url,
                            {
                                cache: "reload"
                            }
                        );

                    });

                return cache.addAll(requests);

            })
            .then(function() {

                return self.skipWaiting();

            })

    );

});


self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches
            .keys()
            .then(function(cacheNames) {

                return Promise.all(

                    cacheNames.map(function(cacheName) {

                        const isVoxHelpCache =
                            cacheName.startsWith("voxhelp")

                        if (
                            isVoxHelpCache &&
                            cacheName !== CACHE_NAME
                        ) {

                            return caches.delete(cacheName);

                        }

                    })

                );

            })
            .then(function() {

                return self.clients.claim();

            })

    );

});


self.addEventListener("fetch", function(event) {

    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(

			caches
				.match(
					event.request,
					{
						ignoreSearch: true
					}
				)
				.then(function(cachedResponse) {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request);

            })

    );

});