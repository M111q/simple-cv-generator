<?php

$data['name'] = $_GET['name'];
$data['surname'] = $_GET['surname'];
$data['date_of_birth'] = $_GET['date_of_birth'];
$data['address'] = $_GET['address'];
$data['phone_number'] = $_GET['phone_number'];
$data['email'] = $_GET['email'];
$data['foreign_language'] = $_GET['foreign_language'];
$data['hobby'] = $_GET['hobby'];

?>
<html>
    <head>
      <meta charset="UTF-8">
      <title>Simple CV Generator</title>
      <link href="Style.css" rel="stylesheet" />
    </head>
    <body>
        <div id="wrapper">
            <header>
                <div>
                    <span><?php echo $data['name']." ".$data['surname'];?></span>
                </div>
                <div>
                   <span>Curriculum Vitae</span> <!--TODO do wyboru czy CV-->
                </div>
            </header>
            <main>
                <div>
                    <img src="img/main-photo.jpg" alt="zdjecie CV"/>
                    <h3>Dane osobowe</h3>
                    <h4>Data urodzenia:</h4>
                    <span><?php echo $data['date_of_birth'];?></span>
                    <h4>Adres:</h4>
                    <span><?php echo $data['address'];?></span>
                    <h4>Telefon:</h4>
                    <span><?php echo $data['phone_number'];?></span>
                    <h4>E-mail:</h4>
                    <span><?php echo $data['email'];?></span>
                    <h3>Zainteresowania</h3>
                    <span><?php echo $data['hobby'];?></span>
                    <h3>Języki obce</h3>
                    <span><?php echo $data['foreign_language'];?></span>
                </div>
                <div>
                    <section id="edukacja">
                        <h1>Edukacja</h1>
                        <button class="btn" type="button">Dodaj</button>
                    </section>
                    <section id="umiejetnosci">
                        <h1>Umiejętności</h1>
                    </section>
                    <section id="doswiadczenie">
                        <h1>Doświadczenie</h1>
                    </section>
                </div>
            </main>
            <footer>
                    <p>"Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; (tekst jednolity: Dz. U. 2016 r. poz. 922)."</p>
            </footer>
        </div>
        <script src="add.js"></script>
    </body>

</html>
