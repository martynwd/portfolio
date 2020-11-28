const gallery = () => {
    
    const previews = document.querySelectorAll(".room-preview img");
    const previewsDiv = document.querySelector(".room-preview");

    const loading = document.querySelector('.loading')
    const gallery = document.querySelector('.room-gallery')

    let highlight = new Image()
    highlight.src = 'img/gallery1.jpg'
    highlight.classList.add('gallery-main')

    highlight.onload = () =>{
      gallery.removeChild(loading);
      gallery.insertBefore(highlight, previewsDiv)
    }

    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("room-active"));
        highlight.src = bigSrc;
        preview.classList.add("room-active");
      });
    });
  }
  
  gallery();