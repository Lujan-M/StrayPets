
export default class {
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return `
            <section>
                <h2 class="adopt-title">Nuestras patitas en adopción</h2>
                <div id="carta-container">
                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>
                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="carta">
                        <div class="pet-img">
                            <img src="./static/doggo.jpg">
                        </div>
                        <div class="info">
                            <h6>Nombre</h6>
                            <p>Ciudad, Provincia</p>
                            <p>Sexo:</p>
                            <p>Edad:</p>
                        </div>
                        <div class="paw">
                            <button type="button" class="bot-paw" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span class="paw-text">Adoptar</span>
                                <i class="fa-solid fa-paw"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
            <form name="myForm" class="modal-dialog" action="" onsubmit="return validateForm()" method="post">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="contactModalLabel">Aplicar</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nombre</label>
                        <input name="nombre" type="text" class="form-control" id="recipient-name">
                        <div class="error-nombre">Campo requerido</div>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Apellido</label>
                        <input type="text" class="form-control" id="recipient-name" name="apellido">
                        <div class="error-apellido">Campo requerido</div>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Dirección de correo</label>
                        <input type="text" class="form-control" id="recipient-name" name="email">
                        <div class="error-email">Campo requerido</div>
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Teléfono</label>
                        <input type="text" class="form-control" id="recipient-name" name="tel">
                        <div class="error-tel">Campo requerido</div>
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Mensaje</label>
                        <textarea class="form-control" id="message-text" name="text"></textarea>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="bot-close" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="bot-form">Enviar</button>
                  <div class="error"></div>
                </div>
            </form>
        </div>
            
        `;
    }
}

