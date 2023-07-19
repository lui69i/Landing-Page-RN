const imageUpload = document.getElementById('imageUpload');
const previewImage = document.getElementById('previewImage');

imageUpload.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    previewImage.src = event.target.result;
  }

  reader.readAsDataURL(file);
});
