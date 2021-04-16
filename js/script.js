

/*VALIDA CNPJ CONTATO */
function FormataCnpj(campo, teclapres) {
  var tecla = teclapres.keyCode;
  var vr = new String(campo.value);
  vr = vr.replace(".", "");
  vr = vr.replace("/", "");
  vr = vr.replace("-", "");
  tam = vr.length + 1;
  if (tecla != 14) {
    if (tam == 3) campo.value = vr.substr(0, 2) + ".";
    if (tam == 6) campo.value = vr.substr(0, 2) + "." + vr.substr(2, 5) + ".";
    if (tam == 10)
      campo.value =
        vr.substr(0, 2) + "." + vr.substr(2, 3) + "." + vr.substr(6, 3) + "/";
    if (tam == 15)
      campo.value =
        vr.substr(0, 2) +
        "." +
        vr.substr(2, 3) +
        "." +
        vr.substr(6, 3) +
        "/" +
        vr.substr(9, 4) +
        "-" +
        vr.substr(13, 2);
  }
}

function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Validando
  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}
/*VALIDA CNPJ CONTATO */
