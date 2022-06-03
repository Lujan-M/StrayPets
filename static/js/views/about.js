export default class {
    
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return `
        <section class="about-container">
            <div class="about-block-left">
                <img class="about-img" src="./static/Cat.jpg" alt="Cat">
                <div class="about-text">
                    <h3>¿Cómo comenzamos?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt molestiae modi repellat rem, reprehenderit natus perspiciatis delectus quidem ab dolor beatae eius similique vel exercitationem quod? Inventore facilis dignissimos itaque?</p>
                </div>
            </div>
            <div class="about-block-right">
                <img class="about-img" src="./static/doggo.jpg" alt="Doggo">
                <div class="about-text">
                    <h3>¿Qué nos motivo?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi officia architecto dolor qui magni ad, earum minima vero aliquid veritatis aspernatur. Dolorum, fuga sunt eaque numquam ipsum quae quis!</p>
                </div>
            </div>
            <div class="about-block-left">
                <img class="about-img" src="./static/Cat.jpg" alt="Cat">
                <div class="about-text">
                    <h3>Lo que nos gustaría lograr</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero quos ab id accusantium obcaecati qui, quas odit modi officiis consectetur? Saepe eligendi ex asperiores deserunt deleniti quos, distinctio nihil.</p>
                </div>
            </div>
        </section>         
        `;
    }
}