/// <reference types="cypress"/>


describe('Dynamic Table Test', () => {
    it('Compares Chrome CPU value with the yellow label', () => {
        cy.visit("/dynamic-table");

        // Find the index of the "CPU" column dynamically
        cy.get('table th').each((th, index) => {
            if (th.text().trim() === 'CPU') {
                cy.wrap(index).as('cpuIndex'); // Store CPU column index
            }
        });

        // Use the dynamically found CPU index to get the Chrome CPU value
        cy.get('@cpuIndex').then((cpuIndex) => {
            cy.get('td').contains('Chrome').parent().find('td').eq(cpuIndex).invoke('text').then((cpuload) => {
                cy.get("#chrome-cpu").invoke('text').then((labelvalue) => {
                    // Remove non-numeric characters (e.g., %, spaces)
                    const chromeCPU = parseFloat(cpuload.replace(/[^\d.-]/g, ''));
                    const labelNumber = parseFloat(labelvalue.replace(/[^\d.-]/g, ''));

                    // Debugging output to Cypress logs
                    cy.log(`Extracted Chrome CPU: ${chromeCPU}`);
                    cy.log(`Extracted Label Value: ${labelNumber}`);

                    // Ensure values are valid numbers before comparison
                    expect(chromeCPU, 'Chrome CPU should be a valid number').to.not.be.NaN;
                    expect(labelNumber, 'Label Value should be a valid number').to.not.be.NaN;

                    // Compare the extracted values
                    expect(chromeCPU).to.equal(labelNumber);
                });
            });
        });
    });
});
