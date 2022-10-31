// Buisiness logic

// Object constructors
function AddressBook(contact) {
  this.contact = contact;
  this.currentId = 0;
}
{}

function Contact(firstName, lastName, phone) {
	this.firstName = String(firstName);
	this.lastName = String(lastName);
	this.phone = Number(phone);
}

// prototype methods
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contact[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
	this.currentId += 1;
	return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
	if (this.contacts[id] !== undefined) {
		return this.contacts[id];
	} 
	return false;
};

AddressBook.prototype.deleteContact = function(id) {
	let dContact = this.findContact(id);
	if (dContact) {
		delete dContact;
		return true;
	}
	return false;
};

Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
};

// Ui logic
function handleForm(event) {
	event.preventDefault();
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const phoneNumber = document.getElementById('phoneNum').value;
	let contact = new Contact(firstName, lastName, phoneNumber);
	addressBook.addContact(contact);
	console.log(addressBook);
}

function formSubmit() {
	const form = document.querySelector("form");
	form.addEventListener("submit", handleForm);
}

// on load
addEventListener("load", function() {
	addressBook = new AddressBook({});
	formSubmit();
});