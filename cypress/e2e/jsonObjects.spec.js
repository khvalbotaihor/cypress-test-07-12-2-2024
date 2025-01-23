describe('JSON Objects', () => {
  it('JSON objects', () => {
    cy.openHomePage()

    const simpleObject = {"key": "value"}
    const simpleArrayOfValues = ["one", "two", "three"]
    const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

  });
});
