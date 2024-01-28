let thumbContainer = document.getElementById('thumb-container')
let displayImage = document.getElementById('display')

let images = [
    {
    url: `https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`CapeTown`
    },
    {
    url: `https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`VictoriaFalls `
    }, 
    {
    url: `https://images.unsplash.com/photo-1595077387858-9365a6379cb9?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds://unsplash.com/photos/snow-covered-mountain-during-daytime-Vl2OBElyJu4`,
    alt:`NamibDessert`
    },

    {
    url: `https://images.unsplash.com/photo-1612456480283-ded19cf15203?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`Botswana`
    },

    {
    url: `https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`Zanzibar`
    },

    {
    url: `https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`Egypt`
    },

    {
    url: `https://images.unsplash.com/photo-1558694440-03ade9215d7b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`Madagascar`
    },

    {
    url:`https://images.unsplash.com/photo-1569440703456-29b9c31765ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`Morrocco`
    },
    {
    url:`https://images.unsplash.com/photo-1659947234448-bf0ab56ce0c5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt:`Cameroon`
    }

]

var currentImageIndex = 0;

function createThumbnails (arrayOfImages ) {
    arrayOfImages.forEach((image) => {
        let imgElement = document.createElement('img');

        imgElement.src = image.url
        imgElement.alt = image.alt


        imgElement.addEventListener('click', () => {
            createDisplayImg(image)
        })

        thumbContainer.appendChild(imgElement)
    })
}

function createDisplayImg(image) {
    displayImage.innerHTML =''

   let largeDisplayImg = document.createElement('img')
   largeDisplayImg.src = image.url
   largeDisplayImg.alt = image.alt

   displayImage.appendChild(largeDisplayImg);
}

createThumbnails(images)

next.addEventListener('click', function() { selectNextImage(1) })
prev.addEventListener('click', function() { selectNextImage(-1)})

function selectNextImage(direction) {
    console.log('selectNextImage was trigger')
    updateDisplayImage(direction)

    // let currentImageIndex = index+1;
    // // currentImageIndex += 1;

    // if (currentImageIndex >= images.length) currentImageIndex = 0
    // if (currentImageIndex < 0) currentImageIndex = images.length - 1
    // console.log(currentImageIndex)


}


function updateDisplayImage(direction) {
    displayImage.innerHTML =''

   let largeDisplayImg = document.createElement('img')
   let imageArrayLenghth = images.length;
   
   if(currentImageIndex == (imageArrayLenghth - 1)){
    currentImageIndex = 0;
    largeDisplayImg.src = images[currentImageIndex].url;
    return
   }

   if(currentImageIndex == (0 - images.length)){
    currentImageIndex = 0;
    largeDisplayImg.src = images[currentImageIndex].url;
    return
   }

   currentImageIndex = currentImageIndex+direction;
   largeDisplayImg.src = images[currentImageIndex].url;

   displayImage.appendChild(largeDisplayImg);

}
