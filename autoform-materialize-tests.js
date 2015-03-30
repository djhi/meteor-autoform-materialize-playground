Schemas = {}

Schemas.Address = new SimpleSchema({
  street: {
    type: String
  },
  street2: {
    type: String,
    optional: true
  },
  city: {
    type: String
  },
  state: {
    type: String,
    allowedValues: ["AL","AK"],
    autoform: {
      afFieldInput: {
        type: 'select',
        firstOption: "(Select a State)"
      }
    }
  },
  postalCode: {
    type: String,
    label: "ZIP"
  },
  isPrimaryAddress: {
    type: Boolean
  }
});

Schemas.Contact = new SimpleSchema({
  name: {
    type: String
  },
  title: {
    type: String,
    allowedValues: ['Miss', 'Mrs', 'Mr'],
    autoform: {
      options: 'allowed'
    }
  },
  phone: {
    type: String
  },
  emails: {
    type: [String],
    regEx: SimpleSchema.RegEx.Email
  },
  language: {
    type: String,
    optional: true,
    allowedValues: ['en', 'es'],
    autoform: {
      options: function () {
        return [
          { label: 'English', value: 'en' },
          { label: 'Español', value: 'es' }
        ]
      }
    }
  }
});
Schemas.FieldsExamples = new SimpleSchema({
  name: {
    type: String
  },
  phone: {
    type: String,
    optional: true
  },
  dateOfBirth: {
    type: Date,
    autoform: {
      type: 'pickadate'
    }
  },
  title: {
    type: String,
    allowedValues: ['Miss', 'Mrs', 'Mr'],
    autoform: {
      options: 'allowed'
    }
  },
  address: {
    type: Schemas.Address
  },
  contacts: {
    type: [Schemas.Contact],
    optional: true
  }
});

Contacts = new Mongo.Collection('contacts');
Contacts.attachSchema(Schemas.Contact);

if (Meteor.isClient) {

  AutoForm.setDefaultTemplate('materialize');

  Template.registerHelper('Schemas', function() {
    return Schemas;
  });

  AutoForm.addHooks(null,  {
    formToDoc: function(doc) {
      console.log(doc);
      return doc;
    },
    onError: function(operation, error) {
      if(error){
        console.log(error);
        alert('Dang, error: ' + error.message);
      }
    },
    onSuccess: function(){
      alert('all good baby !');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
