<?php include('layouts/header.php'); ?>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <?php
      if (isset($_POST['data_nascimento'])) {
        $data_nascimento = $_POST['data_nascimento'];
        $signos = simplexml_load_file("signos.xml");
        $data = DateTime::createFromFormat('Y-m-d', $data_nascimento);
        $dia = $data->format('d');
        $mes = $data->format('m');
        $data_formatada = $dia . '/' . $mes;
        $signo_encontrado = null;

        foreach ($signos->signo as $signo) {
          $inicio = DateTime::createFromFormat('d/m', (string)$signo->dataInicio);
          $fim = DateTime::createFromFormat('d/m', (string)$signo->dataFim);
          $nasc = DateTime::createFromFormat('d/m', $data_formatada);

          // Ajusta para signos que passam de dezembro para janeiro
          if ($inicio > $fim) {
            if ($nasc >= $inicio || $nasc <= $fim) {
              $signo_encontrado = $signo;
              break;
            }
          } else {
            if ($nasc >= $inicio && $nasc <= $fim) {
              $signo_encontrado = $signo;
              break;
            }
          }
        }

        if ($signo_encontrado) {
          echo "<div class='card p-4 shadow'>";
          echo "<h2 class='text-center mb-3'>Seu signo é: <span class='text-primary'>{$signo_encontrado->signoNome}</span></h2>";
          echo "<p class='text-center'>{$signo_encontrado->descricao}</p>";
          echo "</div>";
        } else {
          echo "<div class='alert alert-warning text-center'>Signo não encontrado.</div>";
        }
        echo "<div class='text-center mt-4'><a href='index.php' class='btn btn-secondary'>Voltar</a></div>";
      } else {
        echo "<div class='alert alert-danger text-center'>Data de nascimento não informada.</div>";
        echo "<div class='text-center mt-4'><a href='index.php' class='btn btn-secondary'>Voltar</a></div>";
      }
      ?>
    </div>
  </div>
</div>
</body>
</html>
