class Myheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand logo" href="index.html"> <img src="images/logo2.png" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link" href="index.html">HOME </a>
        </li>
        <li class="nav-item ">
        <a class="nav-link" href="aboutus.html">ABOUT US</a>
        </li>
        <li class="nav-item ">
        <a class="nav-link" href="department.html">DEPARTMENT</a>
        </li>

        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="treatment.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        TREATMENT
        </a>
        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="cancer.html">CANCER CARE</a></li>
          <li><a class="dropdown-item" href="neuroscience.html">NEUROSCIENCE</a></li>
        </ul>
      </li>


        <li class="nav-item ">
        <a class="nav-link" href="faq.html">FAQ's</a>
        </li>
        <li class="nav-item ">
        <a class="nav-link" href="contactus.html">CONTACT US</a>
        </li>
        
      </ul>
      <span class="navbar-text">
      <div class="registed">
      <a href="login.html"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;Sign In</a>
      <a href="registration.html"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Register</a>
  </div>
    </span>
    </div>
  </nav>
        
        
        `
  }

}

class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <p>Copyright @ MAX Hospital | <a href="terms.html">Terms & Conditions Apply</a></p>
    
    `
  }
}

customElements.define('my-header', Myheader)
customElements.define('my-footer', Myfooter)

function alert1() {
  alert("Thank You")
}

function alert2() {
  alert("You can leave")
}


jQuery(function($) {
  if ($(window).width() > 769) {
    $('.navbar .dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

    });

    $('.navbar .dropdown > a').click(function() {
      location.href = this.href;
    });

  }
});