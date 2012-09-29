(function() {
	//closure globale 

	function PhoneBook() {

		this.init = function() {
			if(console && 'log' in console) console.log("Hi there. PhoneBook talking. I'm initialized.");
			this.setBindings();
			this.getAll();
		};
		this.setBindings = function() {
			var $this = this;

			$("h1 strong").click(this.showAddForm);

			$(".addForm").click(this.showAddForm);
			$(".accueil").click(function() {
				$this.getAll();
				$("#addForm").slideUp("fast");
			});
			$("#addForm").find("input[type=button]").click(function(e) {
				var validation = $this.validateAddForm($(this).parent());

//Décommentez le if/else pour voir la validation côté client
//				if(validation.length==0) {
					$this.request("add", $(this).parent().serialize());
/*				}
				else {
					$("h3").html(validation);
				}*/
			});
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
			var $this = this;

			var contact = {
				id:$(li).data("id"),
				lastname:$(li).data("lastname"),
				firstname:$(li).data("firstname"),
				number:$(li).data("number"),
			};
			$(li).html(this.renderContact(contact, true));

			$(li).find('input[type=button].update').click(function(e) {
				$this.request("update",$(this).parent().parent().serialize());
			});
			$(li).find('input[type=button].delete').click(function(e) {
				$this.request("delete", $(this).parent().parent().serialize());
			});
		};
		this.request = function(action, values) {
			$.ajax({
				  url: "/index.php?action="+action+"&"+values,
				  context:this
				}).done(function(data) { 
					if(data=="1") {
						this.getAll();
					}
					else {
						$("h3").html(data);
					}
			});
		};
		this.showAddForm = function() {
			$("#addForm").slideDown(500);
		};
		this.validateAddForm = function(form) {
			var formValues = form.serializeArray(),
				errors     = "",
				newContact = {
					id:formValues[0].value,
					lastname:formValues[1].value,
					firstname:formValues[2].value,
					number:formValues[3].value,
				};

			$.each(newContact, function(k, v) {
				if(v.length==0) {
					errors += k + " ne peut pas être vide. ";
				}
			});

			return errors;
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
				if(!$(this).hasClass('editing')) {
					$this.edit(this);
					$(this).addClass('editing');
				}
			});
		};
		this.renderContact = function(contact, editing) {
			if(editing) {
				return '<li><form class="editContact" action=""><div class="contact"><input type="hidden" name="id" value="'+contact.id+'" /><input type="text" name="lastname" value="'+contact.lastname+'" /><input type="text" name="firstname" value="'+contact.firstname+'" /><input type="text" name="number" value="'+contact.number+'" /><input type="button" class="update" value="Modifier" /><input class="delete" type="button" value="Supprimer" /></div></form></li>';
			}
			return '<li data-id="'+contact.id+'" data-lastname="'+contact.lastname+'" data-firstname="'+contact.firstname+'" data-number="'+contact.number+'"><div class="contact">'+'<span>'+contact.lastname+'</span><span>'+contact.firstname+'</span><span class="number">'+contact.number+'</span></div></li>';
		};

	};

	$(document).ready(function() {
		var phoneBook = new PhoneBook();
			phoneBook.init();
	});

})();