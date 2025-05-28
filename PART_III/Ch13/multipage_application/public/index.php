<?php
require_once '../src/controllerFunctions.php';

$action = filter_input(INPUT_GET,  'action');

switch ($action) {
    case 'contact':
        displayContactUs();
        break;
    
    case 'inquiryForm':
        displayInquiryForm();
        break;

    case 'processForm':
        processForm();
        break;

    default:
        displayHomePage();
}