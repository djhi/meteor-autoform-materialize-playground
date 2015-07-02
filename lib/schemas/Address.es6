Schemas.Address = new SimpleSchema({
    street: {
        type: String,
    },
    street2: {
        type: String,
        optional: true,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
        allowedValues: ["AL", "AK"],
        autoform: {
            afFieldInput: {
                type: 'select',
                firstOption: "(Select a State)",
            },
        },
    },
    postalCode: {
        type: String,
        label: "ZIP",
    },
    isPrimaryAddress: {
        type: Boolean,
    },
});
