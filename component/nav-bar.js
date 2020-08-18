class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div>
            <a class="navbar-brand" href="#">Covid 19</a>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#daftar-kasus">Case</a>
                </li>         
            </ul>
        </div>
        <div class="nav_social">
            <a href="" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/jezzjerry" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/reizhafajrian/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    </nav>`;
    }
}
customElements.define("nav-bar", Navbar);
export default Navbar;