//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loader = document.getElementById("loader")
const error=document.getElementById("error")
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
  // return new Promise((resolve, reject) => {
  //   const img=new Image();
  //   img.src=url;
  //   img.onload=()=>resolve(img);
  //   img.onerror=()=>reject("error")
    

  // })
	return Promise.resolve(Object.assign(new Image(),{src:url}))
}

function renderImage() {
  loader.style.display = "block"
	 const promises = images.map(img => downloadImage(img.url));

	Promise.all(promises).then(images=>{
    images.forEach(img=>output.appendChild(img))
  })
  .catch((error)=>{
    // console.log("error",error)
    error.textContent=error;
  })
  .finally(()=>{
    loader.style.display="none"
  })


}




btn.addEventListener("click", renderImage)