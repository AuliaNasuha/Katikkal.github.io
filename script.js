    // Validate Input Form Hitung Luas & Keliling
    function validateInput(value) {
        if (isNaN(value) || value <= 0) {
          alert("Nilai sisi harus angka positif!");
          return false;
        }
        return true;
      }
  
      // Create Logic For Hitung Luas & Keliling with JavaScript
      function hitungLuas() {
        var sisi = document.getElementById("sisi-luas").value;
  
        if (!validateInput(sisi)) {
          return;
        }
  
        var luas = sisi * sisi;
        document.getElementById("output_luas").innerHTML = "Luas: " + luas;
      }
  
      function hitungKeliling() {
        var sisi = document.getElementById("sisi-keliling").value;
  
        if (!validateInput(sisi)) {
          return;
        }
  
        var keliling = 4 * sisi;
        document.getElementById("output_keliling").innerHTML = "Keliling: " + keliling;
      }
  
      function calculateRectangleArea() {
        var length = document.getElementById("length").value;
        var width = document.getElementById("width").value;
  
        if (!validateInput(length) || !validateInput(width)) {
          return;
        }
  
        var area = length * width;
        document.getElementById("rectangle-area-result").innerHTML = "Luas: " + area;
      }
  
      function calculateRectanglePerimeter() {
        var length = document.getElementById("length").value;
        var width = document.getElementById("width").value;
  
        if (!validateInput(length) || !validateInput(width)) {
          return;
        }
  
        var perimeter = 2 * (parseInt(length) + parseInt(width));
        document.getElementById("rectangle-perimeter-result").innerHTML = "Keliling: " + perimeter;
      }