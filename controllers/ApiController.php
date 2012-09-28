<?php
	class ApiController { 
	    protected $dbController; 

	    public function __construct(DbController $dbController) { 
	    	$this->dbController=$dbController;
	    } 

	    public function add($contact) { 
	    	return $this->dbController->addContact($contact);
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