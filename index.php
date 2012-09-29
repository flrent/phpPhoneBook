<?php
	require('controllers/DbController.php');
	require('controllers/ApiController.php');
	require('models/Contact.php');

	$dbController = new DbController();
	$apiController = new ApiController($dbController);
	$resultat;

	ob_start(); // temporisation pour pouvoir mettre en cache avant de rendre la page et ainsi manipuler les headers plus aisément

	
	//router
	if (isset($_GET['action'])) {
		header('Cache-Control: no-cache, must-revalidate'); //IE FIX
		header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // IE FIX
		header('Content-type: application/json');

		$action = $_GET['action'];

		switch($action) {

			case 'all':
				$resultat = $apiController->getAll();
				break;

			case 'add':
				if(isset($_GET['firstname'], $_GET['lastname'],$_GET['number'])) {
					$newContact = new Contact(0, $_GET['lastname'],$_GET['firstname'], $_GET['number']);
					$resultat = $apiController->add($newContact);				
				}
				break;

			case 'delete':
				if(isset($_GET['id'])) {
					$resultat = $apiController->delete($_GET['id']);
				}
				break;

			case 'update':
				if(isset($_GET['firstname'],$_GET['id'], $_GET['lastname'],$_GET['number'])) {
					$newContact = new Contact($_GET['id'], $_GET['lastname'],$_GET['firstname'],$_GET['number']);
					$resultat = $apiController->update($newContact);
				}
				break;

			default:
				$resultat = include('public/index.html');
				break;
		}
		echo json_encode($resultat);
	}
	else {
		$resultat = include('public/index.html');

	}
	ob_get_contents();
?>