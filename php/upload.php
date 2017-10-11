<?php
if(!empty($_FILES['data'])) {
    // PDF is located at $_FILES['data']['tmp_name']
    // rename(...) it or send via email etc.
    $content = file_get_contents($_FILES['data']['tmp_name']);
} else {
    throw new Exception("no data");
}
?>