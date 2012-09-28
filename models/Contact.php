<?php

	class Contact { 
	    protected $id;
	    protected $lastname; 
	    protected $firstname; 
	    protected $number; 
	     
	    public function __construct($id, $lastname, $firstname, $number) {
	    	if(!isset($id)) {
	    		$id=0;
	    	}
	    	$this->id = $id;
	    	$this->lastname = $lastname;
	    	$this->firstname = $firstname;
	    	$this->number = $number;
	    }
	    public function getFirstname() {
	    	return $this->firstname;
	    }
	    public function getLastname() {
	    	return $this->lastname;
	    }
	    public function getNumber() {
	    	return $this->number;
	    }
	    public function getId() {
	    	return $this->id;
	    }
	    public function setFirstname($firstname) {
	    	return $this->firstname=$firstname;
	    }
	    public function setLastname($lastname) {
	    	return $this->lastname=$lastname;
	    }
	    public function setNumber($number) {
	    	return $this->number=$number;
	    }
	    public function setId($id) {
	    	return $this->id=$id;
	    }
	} 

?>