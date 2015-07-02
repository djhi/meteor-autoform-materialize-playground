Schemas.FieldsExamples = new SimpleSchema({
    name: {
        type: String,
    },
    phone: {
        type: String,
        optional: true,
    },
    dateOfBirth: {
        type: Date,
        autoform: {
            type: 'pickadate',
        },
    },
    title: {
        type: String,
        allowedValues: ['Miss', 'Mrs', 'Mr'],
        autoform: {
            options: 'allowed',
        },
    },
    address: {
        type: Schemas.Address,
    },
    contacts: {
        type: [Schemas.Contact],
        optional: true,
    },
});
