<?php
    require_once("inc/db.php");
    require("inc/simple_html_dom.php");

    function ucwords_tr($text){
        $problem = array(
            "I" => "ı",
            "i" => "İ"
        );
        $text = strtr($text,$problem);
        $text = mb_convert_case($text, MB_CASE_TITLE, "UTF-8");
        return $text;
    }

    $date_prefix = date('my');
    $ch = curl_init();
    $hc = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36";
    curl_setopt($ch, CURLOPT_REFERER, 'http://www.mku.edu.tr/');
    curl_setopt($ch, CURLOPT_URL, "http://www.mku.edu.tr/FoodList.aspx");
    curl_setopt($ch, CURLOPT_USERAGENT, $hc);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $html = curl_exec($ch);
    curl_close($ch);
    $document = str_get_html($html);
    $menus = $document->find('.event-item');
    foreach($menus as $menu){
        $day = $menu->find('.date-number',0)->innertext;
        $date =  $day.$date_prefix;
        $details_html = $menu->find('.taos_text',0)->innertext;
        $food_list_sec = strstr($details_html,'<strong>',true);
        $calorie_sec = strstr($details_html,'<strong>');
        preg_match_all('/\* ([a-zA-ZğüşıöçĞÜŞİÖÇ\.\+ ]*)\s{2}/i', $food_list_sec, $foods);
        $foods = array_map('trim',$foods[1]);
        $foods = array_map('ucwords_tr', $foods);
        preg_match_all('/\d+/i', $calorie_sec, $calorie);
        $calorie = (int) $calorie[0][0];
        array_push($foods, "Kalori: {$calorie}");
        $foods_json = json_encode($foods);
        $query = $db->prepare("SELECT date FROM foodlist WHERE date = ?");
        $query->execute(array(
            $date
        ));
        $check = $query->fetch();
        if($check){
            $query = $db->prepare("UPDATE foodlist SET foods = ? WHERE date = ?");
            $update = $query->execute(array(
                $foods_json,
                $date
            ));
            if($update){
                echo sprintf("Güncellenen Kayıt: %s, %s <br>", $date, $foods_json);
            }
        }else{
            $query = $db->prepare('INSERT INTO foodlist (date, foods) VALUES(?, ?)');
            $insert = $query->execute(array(
                $date,
                $foods_json
            ));
            if($insert){
                echo sprintf("Eklenen Kayıt: %s, %s <br>", $date, $foods_json);
            }
        }
    }
?>
