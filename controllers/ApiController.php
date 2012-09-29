<?php
	class ApiController { 
	    protected $dbController; 

	    public function __construct(DbController $dbController) { 
	    	$this->dbController=$dbController;
	    } 

	    public function add($contact) { 
	    	$erreurs = array();
	    	if(strlen($contact->getLastname())==0) {
	    		array_push($erreurs, "Le nom de famille est obligatoire.");
	    	}
	    	if(strlen($contact->getFirstname())==0) {
	    		array_push($erreurs, "Le prénom est obligatoire.");
	    	}
	    	if(strlen($contact->getNumber())==0) {
	    		array_push($erreurs, "Vous ajoutez un contact sans numéro ?");
	    	}

	    	if(count($erreurs)==0) {
    			return $this->dbController->addContact($contact);
	    	}
	    	else {
	    		return $erreurs;
	    	}
	    }
	    public function get() { 
	        return $this->model->text = 'Text Updated'; 
	    }
	    public function getAll() { 
	    	return $this->dbController->getContacts();
	    }
	    public function update($contact) { 
	    	return $this->dbController->updateContact($contact);
	    }
	    public function delete($id) { 
	    	return $this->dbController->deleteContact($id);
	    }
	} 
?>