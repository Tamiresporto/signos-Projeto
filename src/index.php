<?php include('layouts/header.php'); ?>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-3">
      <h1 class="mb-3 text-center" style="font-size:1.2rem;">Descubra seu signo do zodíaco</h1>
      <form id="signo-form" method="POST" action="show_zodiac_sign.php"
        class="card shadow"
        style="max-width:200px; margin:0 auto; padding:16px 8px;">
        <div class="mb-2">
          <label for="data_nascimento" class="form-label" style="font-size:0.95rem;">Data de nascimento:</label>
          <input type="date" class="form-control form-control-sm" id="data_nascimento" name="data_nascimento" required>
        </div>
        <button type="submit" class="btn btn-primary btn-sm w-100">Consultar Signo</button>
      </form>
    </div>
  </div>
</div>
</body>
</html>
