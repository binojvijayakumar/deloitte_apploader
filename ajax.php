<?php
$methodName = $_POST['method'];
switch ($methodName) {
    case 'emptyEntry':
        echo addEmptyEntry();
        break;
    case 'update':
        echo updateEntries();
        break;
    default:
        # code...
        break;
}

function addEmptyEntry()
{
    $data = file_get_contents ("formdata.json");
    if (!empty($data) && $data!='null') {
        $json = json_decode($data, true);        
    }
    else {
        $json = array('id' => '', 'display'=>'', 'url'=>'', 'data'=>'');
    }    
    array_push($json, array('id' => '', 'display'=>'', 'url'=>'', 'data'=>''));
    file_put_contents ("formdata.json",json_encode($json));
    return true;
}

function updateEntries()
{
    $json = json_decode($_POST['data'], true);
    file_put_contents ("formdata.json",json_encode($json));
    return true;
}