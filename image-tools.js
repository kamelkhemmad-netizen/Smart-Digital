function compressImage() {
const input = document.getElementById('imageInput');
const preview = document.getElementById('preview');

const file = input.files[0];
const reader = new FileReader();

reader.onload = function(e) {
preview.src = e.target.result;
};

reader.readAsDataURL(file);
}
