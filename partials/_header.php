<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Deloitte AppLoader</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" href="DDot-desktop.png" />
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style>
    body {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  </style>
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="css/main.css">

  <!--[if lt IE 9]>
            <script src="js/vendor/html5-3.6-respond-1.4.2.min.js"></script>
        <![endif]-->
</head>

<body>
  <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
          aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <?php $rootURL=dirname($_SERVER['PHP_SELF'])?>
        <a class="navbar-brand" href="<?php echo $rootURL?>">Deloitte AppLoader <?php /*echo*/ $_SERVER['PHP_SELF']?></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <div class="navbar-form navbar-right">
          <?php if (strpos($_SERVER['PHP_SELF'],'index.php')!==false) {
            ?>
                <div class="form-group">
                <input type="text" placeholder="Filter" class="form-control txtFilter">
              </div>
              <div class="form-group">
                <select id="comboForms" class="form-control">
                </select>
              </div>
              <button title="Load Form" type="button" class="btn btn-success btnLoadForm">
                <span class="glyphicon glyphicon-play" aria-hidden="true"></span>
              </button>
              <button title="Reload Details" type="button" class="btn btn-success btnReload">
                <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
              </button>
              <a href="edit.php">
              <button title="Edit Details" type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              </a>
          <?php }else{ ?>
              <a href="<?php echo $rootURL?>">
                <button title="Back" type="button" class="btn btn-success">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                </button>
              </a>
          <?php } ?>
          
        </div>
      </div>
      <!--/.navbar-collapse -->
    </div>
  </nav>
