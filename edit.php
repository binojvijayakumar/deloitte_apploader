<?php include_once('partials/_header.php') ?>
  <!-- /container -->
  <div class="container">
    <hr>
    <?php
    
        $data = file_get_contents ("formdata.json");
        $json = json_decode($data, true);
        $count = 0;
        foreach ($json as $key => $dataArr) {          
        ?>
            
    
    <div class="row">

      <div class="form-horizontal formArea">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control txtTitle" placeholder="Title" value="<?php echo $json[$key]['display']?>">
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">URL</label>
          <div class="col-sm-10">
            <input type="text" class="form-control txtURL" placeholder="URL" value="<?php echo $json[$key]['url']?>">
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">JSON Data</label>
          <div class="col-sm-10">
            <textarea class="form-control txtJSON" rows="3"><?php
              $jdata = $json[$key]['data'];
              echo empty($jdata) ? "" : trim(json_encode($jdata),'"');
            ?></textarea>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-primary btnSave">Save</button>
            <button type="button" class="btn btn-danger btnRemove" removeid="<?php echo $count?>">Remove</button>
          </div>
        </div>
      </div>


    </div>
    <hr>     

    <?php
       $count++; }    
    ?>

      <div class="row">
        <div class="form-horizontal">
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-success" id="btnEmptyDetail">
              Add an Empty Detail
              </button>
            </div>
          </div>
        </div>
      </div>

        
  </div>
  <!-- /container -->
  <?php include_once('partials/_footer.php') ?>