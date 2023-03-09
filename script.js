window.onload = () => {
  
  const text = document.querySelector('.text');
  // input
  const inputMin = document.querySelector('.min');
  const inputMax = document.querySelector('.max');
  // ketika tombol ditekan
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    // ambil semua value input
    const min = Number(inputMin.value.trim());
    const max = Number(inputMax.value.trim());
    // validasi
    if (validate(min, max) == true) {
      // generate angka secara acak
      const result = getRandomNumber(min, max);
      // tampilkan 
      text.textContent = result;
    }
  });
  
  function validate(min, max) {
    // jika semua field kosong
    if (!min && !max) return sweetalert('error', 'Error!', 'field\'s is empty!');
    // jika masih ada field yang kosong
    if (!min || !max) return sweetalert('error', 'Error!', 'field is empty!');
    // jika berhasil melewati semua validasi
    return true;
  }
  
  // plugin dari sweetalert2
  function sweetalert(icon, title, text, position = 'center') {
    swal.fire ({
      position: position,
      icon: icon,
      title: title,
      text: text
    });
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
}