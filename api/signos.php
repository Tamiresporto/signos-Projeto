<?php
header('Content-Type: application/json');
$xml = simplexml_load_file('../signos.xml');
$signos = [];
foreach ($xml->signo as $signo) {
    $signos[] = [
        'nome' => (string)$signo->signoNome,
        'inicio' => str_replace('/', '-', (string)$signo->dataInicio),
        'fim' => str_replace('/', '-', (string)$signo->dataFim),
        'descricao' => (string)$signo->descricao
    ];
}
echo json_encode($signos);
