<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $dados = "Nome: $nome\nEmail: $email\nMensagem: $mensagem\n\n";

    $arquivo = fopen("https://marcus20rcb.github.io/dados_formulario.txt", "a");
    fwrite($arquivo, $dados);
    fclose($arquivo);

    echo "Dados salvos com sucesso!";
} else {
    echo "Método de requisição inválido.";
}
?>