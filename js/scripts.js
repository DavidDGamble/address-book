// Buisiness logic

// Object constructors
function AddressBook(contact) {
	this.contact = contact;
	this.currentId = 0;
}

function Contact(firstName, lastName, phone) {
	this.firstName = String(firstName);
	this.lastName = String(lastName);
	this.phone = Number(phone);
}

// prototype methods
AddressBook.prototype.addContact = function (contact) {
	contact.id = this.assignId();
	this.contact[contact.id] = contact;
};

AddressBook.prototype.assignId = function () {
	this.currentId += 1;
	return this.currentId;
};

AddressBook.prototype.findContact = function (id) {
	if (this.contact[id]) {
		return this.contact[id];
	}
	return false;
};

AddressBook.prototype.deleteContact = function (id) {
	let dContact = this.findContact(id);
	if (dContact) {
		delete dContact;
		return true;
	}
	return false;
};

Contact.prototype.fullName = function () {
	return this.firstName + " " + this.lastName;
};

AddressBook.prototype.findName = function (nameArray) {
	let searchContacts = [];
	const addrs = this;
	Object.keys(this.contact).forEach(function(nameIndex) {
		if (nameArray.includes(addrs.contact[nameIndex].firstName) || nameArray.includes(addrs.contact[nameIndex].lastName)) {
			searchContacts.push(addrs.contact[nameIndex]);
		}
	});
	return searchContacts;
};

// Ui logic
function handleAddForm(event) {
	event.preventDefault();
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const phoneNumber = document.getElementById('phoneNum').value;
	let contact = new Contact(firstName, lastName, phoneNumber);
	addressBook.addContact(contact);
	console.log(addressBook);
}

function handleSearchForm(event) {
	event.preventDefault();
	const search = document.getElementById("search").value;
	const words = search.split(" ");
	console.log(addressBook.findName(words));
}

function formSubmit() {
	const addForm = document.getElementById("add-form");
	addForm.addEventListener("submit", handleAddForm);
	const searchForm = document.getElementById("search-form");
	searchForm.addEventListener("submit", handleSearchForm);
}

// on load
addEventListener("load", function () {
	addressBook = new AddressBook({});
	formSubmit();
});