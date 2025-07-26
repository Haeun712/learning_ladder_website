<?php if(!defined('IN_GS')){ die('you cannot load this page directly.'); }?>
<!DOCTYPE html>
<html lang="en">
<!-- template.php/ Haeun Yang/ 7/9/2023 -->
<head>
	<title><?php get_page_clean_title(); ?> - <?php get_site_name(); ?></title>
	<meta charset="utf-8">
	<meta name="description" content="<?php get_page_meta_desc(); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preload" href="<?php get_theme_url(); ?>/images/ladder.jpg" as="image">
	<link rel="preload" type="text/css" href="<?php get_theme_url(); ?>/reset.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
	<link rel="preload" type="text/css" href="<?php get_theme_url(); ?>/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
	<link rel="preload" type="text/css" href="<?php get_theme_url(); ?>/specific_style.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
	 <script defer src="<?php get_theme_url(); ?>/cookie_homepage.js"></script>	
	 <script defer src="<?php get_theme_url(); ?>/game_registration.js"></script>
</head>
<body onload="viewed_cookie()">
	<!-- header&nav -->
	<?php include('header.php');?>
	<!-- contents -->
	<?php get_page_content(); ?>
	<!-- footer -->
	<?php include('footer.php'); ?>
</body>
</html>
