export default class {
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return `
            <section class="contact-section">
                <h2 class="contact-title">Contactate con nuesto equipo</h2>
                <div class="contact-group">
                    <h4>Contáctanos</h4>
                    <div class="margen">
                        <button type="button" class="bot-contact">
                        <i class="fa-solid fa-envelope"></i>
                        </button>
                        <span>straypaws@gmail.com</span>
                    </div>

                    <div class="margen">
                        <button type="button" class="bot-contact">
                        <i class="fa-solid fa-square-phone"></i>
                        </button>
                        <span>0800-123-729</span>
                    </div>

                    <div class="margen">
                        <button type="button" class="bot-contact">
                        <i class="fa-brands fa-instagram-square"></i>
                        </button>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">StrayPaws</a>
                    </div>

                </div>

                <form class="contactForm" name="adopt">
                    <div class="row">
                        <div class="form-group col">
                            <label for="inputName">Nombre</label>
                            <input type="text" name="nombre" class="form-control" id="inputName" placeholder="Nombre" value="">
                            <div class="error-nombre">Campo invalido.</div>
                        </div>
                        <div class="form-group col">
                            <label for="inputApellido">Apellido</label>
                            <input type="text" name="apellido" class="form-control" id="inputApellido" placeholder="Apellido">
                            <div class="error-apellido">Campo invalido.</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputCorreo">Dirección de correo</label>
                        <input type="email" name="email" class="form-control" id="inputCorreo" placeholder="example@mail.com">
                        <div class="error-email">Campo invalido.</div>
                    </div>
                    <div class="form-group">
                        <label for="inputTelefono">Télefono</label>
                        <input type="text" name="tel" class="form-control" id="inputTelefono" placeholder="0000-000-000">
                        <div class="error-tel">Campo invalido.</div>
                    </div>
                    <div class="form-group">
                        <label for="exampleMsg">Dejanos tu mensaje</label>
                        <textarea name="text" class="form-control" id="exampleMsg" rows="3" placeholder="Tu mensaje aquí..."></textarea>
                    </div>
                    <button type="submit" class="bot-form" >Enviar</button>
                </form>
                <h3 class="map-title">Donde podés ubicarnos</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.083462785704!2d-4.460349084639731!3d40.18495597939276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4035b57551b6f3%3A0x84be095154d712f6!2sC.%20Falsa%2C%2045908%20Aldea%20en%20Cabo%2C%20Toledo%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1654206554146!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </section>   

        `
    }

}