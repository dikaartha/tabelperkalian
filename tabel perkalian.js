<html> 
    <head> 
        <title>TUGAS TABEL PERKALIAN</title> 
    </head> 
    <body> <h2>INPUTKAN KOLOM & BARIS</h2> 
 
    <form method="post" action=""> 
    Masukkan Baris <input type="text" name="baris" />
    Masukkan Kolom <input type="text" name="kolom" /><br />
    <input type="submit" name="submit" value="Hitung!" /> 

    </form> 
    </body>
    <?php
        $bil1 = isset ($_POST['baris']) ? $_POST['baris']:'';
        $bil2 = isset ($_POST['kolom']) ? $_POST['kolom']:'';
?>
    <main>
    <table border = 1 cellpadding = 6 cellspacing = 0 align=left>
      <thead>
      
                  <tr>
                      <th scope="col">#</th>
                      <?php for($a=0; $a<=$bil2; $a++) : ?>
                            <th scope="col"><?php echo " ".$a; ?></th>
                      <?php endfor ?>
                  </tr>
                  
            </thead>
            <tbody>
                <?php for($b=0; $b<=$bil1; $b++) : ?>
                  <tr>
                    <th scope="row"><?php echo " ".$b; ?></th>
                      
                      <?php for($a=0; $a<=$bil2; $a++) :  ?>
                                  
                          <td><?php echo " ".($a * $b);  ?></td>
                  
                      <?php endfor; ?>

                  </tr>
              <?php endfor ?> 
            </tbody>
    </main>
</html>