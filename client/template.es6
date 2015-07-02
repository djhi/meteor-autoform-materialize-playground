Template.registerHelper('Schemas', () => {
    return Schemas;
});

AutoForm.addHooks(null, {
    formToDoc: (doc) => {
        return doc;
    },
    onError: (operation, error) => {
        if (error) {
            console.log(error);
            alert('Dang, error: ' + error.message);
        }
    },
    onSuccess: () => {
        alert('all good baby !');
    }
});
