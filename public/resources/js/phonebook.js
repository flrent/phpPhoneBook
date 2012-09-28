(function() {
	//closure globale 

	function PhoneBook() {

		this.init = function() {
			if(console && 'log' in console) console.log("Hi there. PhoneBook talking. I'm initialized.");
			this.setBindings();
			this.getAll();
		};
		this.setBindings = function() {
			$("h1 strong").click(this.showAddForm);
			$(".addForm").click(this.showAddForm);
		};
		this.getAll = function() {
			$.ajax({
				  url: "/index.php?action=all",
				  context:this
				}).done(function(data) { 
				  this.processGetAll(data);
			});
		};
		this.edit = function(li) {
			var contact = {
				id:$(li).data("id"),
				lastname:$(li).data("lastname"),
				firstname:$(li).data("firstname"),
				number:$(li).data("number"),
			};
			$(li).children(".contact").html(this.renderContact(contact, true));
			$(li).children("form").submit(function() {
				alert('toto');
				return false;
			});
		};
		this.showAddForm = function() {
			$("#addForm").slideDown(500);
		};
		this.processGetAll = function(contacts) {
			var listeTag = $('.phoneBook'),
				template="",
				$this=this;

			listeTag.slideUp('slow');

			$.each(contacts, function(i, contact) {
				template+=$this.renderContact(contact);
			});

			listeTag.html(template).slideDown("slow");
			$(".phoneBook li").click(function() {
				$this.edit(this);
			});
		};
		this.renderContact = function(contact, editing) {
			if(editing) {
			return '<li><form class="editContact"><div class="contact"><input type="hidden" name="id" value="'+contact.id+'" /><input type="text" name="lastname" value="'+contact.lastname+'" /><input type="text" name="firstname" value="'+contact.firstname+'" /><input type="text" name="number" value="'+contact.number+'" /><input type="submit" value="Modifier" /></div></form></li>';

			}
			return '<li data-id="'+contact.id+'" data-lastname="'+contact.lastname+'" data-firstname="'+contact.firstname+'" data-number="'+contact.number+'"><div class="contact">'+contact.lastname+' '+contact.firstname+' '+contact.number+'</div></li>';
		};

	};

	$(document).ready(function() {
		var phoneBook = new PhoneBook();
			phoneBook.init();
	});

})();