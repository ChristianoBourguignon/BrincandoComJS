<!DOCTYPE html>
<html lang="br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brincando</title>
</head>
<body>
    <p id="soma"></p>
    <script>
        let nm1 = 0;
        let nm2 = 0;
        let nm = [];
        let soma = 0;
        async function calculadora(){
            for (let i = 1; i <= 2; i++){
              nm[i] = parseFloat(prompt(`Digite o ${i}° numero...`));
              while(isNaN(nm[i]) || nm[i] == null){
                  nm[i] = parseFloat(prompt(`Digite o ${i}° numero...`));
              }
          }
          let operacao = prompt('Digite a operação: / + - *');
          while (operacao !== '/' && operacao !== '+' && operacao !=='-' && operacao !=='*'){
              operacao = prompt(`Digite a operação: / + - * (o ${operacao} não é aceitavel. )`)
          }
          switch (operacao) {
              case '/':
                  soma = nm[1] / nm[2];
                  break;
              case '-':
                  soma = nm[1] - nm[2];
                  break;
              case '*':
                  soma = nm[1] * nm[2];
                  break;
              case '+':
                  soma = nm[1] + nm[2];
                  break;
          }
          alert(soma)
          document.getElementById('valor').insertAdjacentElement('beforeend',soma)
        }
        calculadora();
    </script>

</body>
</html>
