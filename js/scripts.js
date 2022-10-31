function AddressBook(contact, id) {
  this.contact = contact;
  this.currentId = 0;
}

function Contact(firstName, lastName, phone) {
	this.firstName = String(firstName);
	this.lastName = String(lastName);
	this.phone = Number(phone);
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
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
	// if (this.contacts[id] === )
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