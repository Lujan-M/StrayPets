export default class {
   
    setTitle(title) {
        document.title = title;
    }


    async getHtml() {
        return `
        <section class="bg-container">
            <h1>Adopta un amor puro y verdadero</h1>
            <div class="home-left">
                <img class="bg_img" src="./static/doggo2.png" alt="Cat">
                <div class="home-text">
                    <h3>Tanto si eres amante de los PERROS</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt molestiae modi repellat rem, reprehenderit natus perspiciatis delectus quidem ab dolor beatae eius similique vel exercitationem quod? Inventore facilis dignissimos itaque?</p>
                </div>
            </div>
            <div class="home-right">
                <img class="bg_img" src="./static/Cat2.png" alt="Doggo">
                <div class="home-text">
                    <h3>O eres un amante GATUNO</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi officia architecto dolor qui magni ad, earum minima vero aliquid veritatis aspernatur. Dolorum, fuga sunt eaque numquam ipsum quae quis!</p>
                </div>
            </div>
        </section>

        <section >
            <h2 class="home-history">Nuestras Historias</h2>
            <div class="history_container">
                <div class="history">
                    <img class="history-image" src="./static/doggo.jpg" alt="Pichichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Pichichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
                <div class="history">
                    <img class="history-image" src="./static/Cat.jpg" alt="Michichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Michichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
                <div class="history">
                    <img class="history-image" src="./static/doggo.jpg" alt="Pichichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Pichichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
                <div class="history">
                    <img class="history-image" src="./static/Cat.jpg" alt="Michichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Michichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
            </div>
        </section>

        `; 
    }
}