<?php
    function generate_response($code,$response){
        return json_encode(array(
            "code" => $code,
            "response" => $response,
        ));
    }
?>