<?php
	class DbController { 
	    protected $db;

	    public function __construct() { 
	    	$this->db = new PDO('mysql:host=localhost;dbname=wajam;charset=utf8', 'root', 'root');
	    }
	    public function addContact($contact) {
			$req = $this->db->prepare("INSERT INTO contacts(id,lastname,firstname,number) VALUES(0,:lastname,:firstname,:number)");
			$req->execute(array(':lastname' => $contact->getLastname(), ':firstname' => $contact->getFirstname(), ':number' => $contact->getNumber()));
			return $affected_rows = $req->rowCount();
		}
	    public function getContacts() {
		   $req = $this->db->query("SELECT * FROM contacts");
		   return $req->fetchAll(PDO::FETCH_ASSOC);
		}
	    public function updateContact($contact) {
	    	$req = $this->db->prepare("UPDATE contacts SET lastname=?, firstname=?, number=? WHERE id=?");
			$req->execute(array($contact->getLastname(),$contact->getFirstname(),$contact->getNumber(),$contact->getId()));
			return $affected_rows = $req->rowCount();
		}
	    public function deleteContact($id) {
	    	$req = $this->db->prepare("DELETE FROM contacts WHERE id=?");
			$req->execute(array($id));
			$affected_rows = $req->rowCount();
			return $affected_rows;
		}
	} 
?>