Session.set("doc", {
    title: 'Miss',
    isHuman: true,
    checkboxes: 'Miss'
});

Template.registerHelper('Schemas', () => {
    return Schemas;
});

Template.template.helpers({
    doc: () => Session.get("doc")
})

AutoForm.addHooks(null, {
    formToDoc: (doc) => {
        return doc;
    },
    onError: (operation, error) => {
        if (error) {
            console.log(error);
        }
    },
    onSuccess: () => {
        alert('all good baby !');
    }
});
