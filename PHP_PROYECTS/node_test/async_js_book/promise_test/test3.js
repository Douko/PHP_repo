function mipromesa(x) {
  return new Promise((resolve, reject) => {
    if (x == 0) {
      resolve("ok");
    } else {
      reject("not ok");
    }
  });
}

function mostrar(message) {
  console.log(message);
}
mipromesa(1)
  .then((value) => mostrar(value))
  .catch((error) => mostrar(error));
