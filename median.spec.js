describe('Prime and Median Test Suite', function() {
    context('Median of primes', function() {
        //Before each function run in every it block
        beforeEach(() => {
        cy.visit('http://localhost:3000').contains('Submit')//Open the URL
         
        })

    it('Verify median for first 10 prime numbers', function() {
        cy.get('input').clear().type('10').wait(500).get('button').contains('Submit').click()
        cy.contains('[3,5]').wait(1000)
    })

    it('Display median until first 22 prime numbers', function() {
        cy.get('input').clear().type('22').wait(500).get('button').contains('Submit').click()
        cy.contains('[7]').wait(1000)
    })
    it('Display median until first 2000 prime numbers', function() {
        cy.get('input').clear().type('2000').wait(500).get('button').contains('Submit').click()
        cy.contains('[881]').wait(1000)
    })

})
})
