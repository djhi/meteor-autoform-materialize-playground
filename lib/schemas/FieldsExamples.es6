Schemas.FieldsExamples = new SimpleSchema({
    name: {
        type: String,
    },
    nameDisabled: {
        label: 'Test for issue #40',
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
    },
    title3: {
        label: 'Test for issue #23',
        type: String,
        allowedValues: ['Miss', 'Mrs', 'Mr'],
        autoform: {
            type: 'select-radio-inline',
        }
    },
    title2: {
        label: 'Test for issue #34',
        type: String,
        allowedValues: ['Miss', 'Mrs', 'Mr'],
        autoform: {
            firstOption: 'Choose a title',
            options: 'allowed',
        },
    },
    description: {
        type: String,
        autoform: {
            type: 'textarea',
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
