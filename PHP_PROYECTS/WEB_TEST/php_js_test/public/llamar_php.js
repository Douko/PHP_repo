function callphp() {
  document.getElementById("php").innerHTML =
    "<?php include('llamar_php.php') ?>";
}

function call_js() {
  const fileContentDisplay = document.getElementById("php");
  const reader = new FileReader();
  reader.onload = () => {
    fileContentDisplay.textContent = reader.result;
  };
  reader.onerror = () => {
    showMessage("Error reading the file. Please try again.", "error");
  };
}
