<?php if(!defined('IN_GS')){ die('you cannot load this page directly.'); }?>
<!DOCTYPE html>
<html lang="en">
<!-- xml_template.php/ Haeun Yang/ 19/9/2023 -->
<head>
	<title><?php get_page_clean_title(); ?> - <?php get_site_name(); ?></title>
	<meta charset="utf-8">
	<meta name="description" content="<?php get_page_meta_desc(); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preload" href="<?php get_theme_url(); ?>/images/ladder.jpg" as="image">
	<link rel="preload" type="text/css" href="<?php get_theme_url(); ?>/reset.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
	<link rel="preload" type="text/css" href="<?php get_theme_url(); ?>/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
	<link rel="preload" type="text/css" href="<?php get_theme_url(); ?>/specific_style.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
	<script defer src="<?php get_theme_url(); ?>/cookie_xml.js"></script>
</head>
<body onload="Cookie('<?php echo $_GET["category"]?>')">
<?php include('header.php');?>
<?php
    $filename = GSDATAPAGESPATH."/games/".$_GET["category"].".xml";
    $file = simplexml_load_file($filename);
	echo '<div class="title">';
    echo '<h1>'.$_GET["category"].'</h1>';
	echo '</div>';
?>
<div class="category">
<p id="viewed_id">Last viewed: </p>
<?php
	$sort_array = $file->xpath('./*');
	function sort_fuction($x,$y) {
		return strcmp($x['game_name'],$y['game_name']);
	}
	
	usort($sort_array,'sort_fuction');
    foreach($sort_array as $game) {
		echo '<hr>';
        echo '<div class="games_category">';
		// game name
        echo '<h2>'.$game->name.'</h2>';
		//picture
		echo '<picture>';
        foreach ($game->xpath("picture") as $picture) {
			$small = strpos($picture,".webp");
			if($small!='') {
				echo '<source media="(max-width:399px)" srcset="'.$picture.'" width="300" height="200">';
			} else {
				echo '<source media="(min-width:400px)" srcset="'.$picture.'" width="600" height="400">';
				echo '<img loading="lazy" alt="Error, the image could not be loaded" src="'.$picture.'"/>';
			}
        }
		echo '</picture>';
		// genre
        echo '<p>Genre:';
        foreach ($game->xpath("genre") as $genre) {
            echo ' '.$genre.' ';
        }
        echo '</p>';
		// publsiher
        if ($game->pub == "") {
			echo '';
		} else {
			echo '<p> Publisher:';
			foreach ($game->xpath("pub") as $pub) {
				echo ' '.$pub.' ';
			}
			echo '</p>';
        }
		// single or multi player-the number of player
		if ($game->player['mode']== "multi") {
            $player = $game->player;
            echo '<p>Multiplayer Game   '.$player.'</p>';
        } else {
            echo '<p>Singleplayer Game</p>';
        }
		// play time
        if ($game->playTime == "") {
			echo '';
		} else {
            $playTime = $game->playTime;
            echo '<p>Play Time: '.$playTime.'</p>';
        }
		// subject
        echo '<p>Related Subject: '.$game->subject.'</p>';
		// grade
        echo '<p>Recommned grade: '.$game->grade.'</p>';
		// description
		echo '<div class="game_desc">';
		echo '<p>Description:</p>';
        echo '<p>'.$game->desc.'</p>';
		echo '</div>';
		//search tag
        if ($game->xpath("search")) {
            echo '<p>Search Tag:</p>';
            echo '<ul>';
            foreach ($game->xpath("search") as $search) {
                echo '<li>'.$search.'</li>';
            }
            echo '</ul>';
        }
		//cost
        if ($game->cost) {
            echo '<p>Cost: $'.$game->cost.'</p>';
        }
		// required equipment
        echo '<p>Required Equipment:</p>';
        echo '<ul>';
        foreach ($game->xpath("equipment") as $equipment) {
			// equipment name
            echo '<li>'.$equipment->equipName.' ';
            if ($equipment->extraCost != '') {
			// equipment cost
				echo ' $'.$equipment->extraCost.'</li>';
			} else {
				echo '</li>';
            }
        }
        echo '</ul>';
		// platform
        if ($game->xpath("platform")) {
            echo '<p>Platform:</p>';
            echo '<ul>';
            foreach ($game->xpath("platform") as $platform) {
                echo '<li>'.$platform.'</li>';
            }
            echo '</ul>';
        }
		// review
        if ($game->xpath("review")) {
            echo '<p>Review:</p>';
            foreach ($game->xpath("review") as $review) {
				//star, comment
				$star = $review['star'];
                echo '<p>'.$star.':	'.$review.'</p>';
            }
        }
		// related website
        echo '<p>Related Website: <a href="'.$game->url.'">'.$game->url.'</a></p>';
		echo '</div>';
    }
?>
</div>
<?php include('footer.php'); ?>
</body>
</html>