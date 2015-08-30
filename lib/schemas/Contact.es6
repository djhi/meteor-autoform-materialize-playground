Schemas.Contact = new SimpleSchema({
    name: {
        type: String,
    },
    isHuman: {
        type: Boolean,
        autoform: {
            label: false,
            type: 'boolean-radios',
            falseLabel: "not human",
            trueLabel: "human"
        },
    },
    title: {
        type: String,
        allowedValues: ['Miss', 'Mrs', 'Mr'],
        autoform: {
            options: 'allowed',
            skipLabel: true
        },
    },
    checkboxes: {
        label: 'Test for issue #49',
        type: String,
        allowedValues: ['Miss', 'Mrs', 'Mr'],
        autoform: {
            type: 'select-checkbox',
            options: 'allowed',
        }
    },

    description: {
        type: String,
        autoform: {
            type: "medium",
            mediumOptions: {
                //keepLabel: true,
            },
        },
    },
    phone: {
        type: String,
    },
    emails: {
        type: [String],
        regEx: SimpleSchema.RegEx.Email,
    },
    language: {
        type: String,
        optional: true,
        allowedValues: ['en', 'es'],
        autoform: {
            options: () => [{
                label: 'English',
                value: 'en',
            }, {
                label: 'Español',
                value: 'es',
            },]
        },
    },
});
