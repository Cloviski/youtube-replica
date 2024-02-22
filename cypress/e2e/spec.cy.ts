describe('Testa os passos para acessar as principais funcionalidades da aplicação', () => {
	const [name, email, password] = [
		'Zé da Gota',
		'teste@gmail.com',
		'123456789'
	];

	it('acessar home page', () => {
		cy.visit("/");
		cy.wait(3000);
		cy.get('.sc-beqWaB').children().should('have.length', 15);
	});

	it('pesquisa vídeos', () => {
		cy.visit("/");

		cy.get('.sc-blLsxD')
			.type('{selectAll}{selectAll}') // Limpa input
			.type('hardneja sertacore'); // Escreve na caixa de pesquisa

		cy.get('.sc-dKfzgJ').should('have.css', 'cursor'); // Confere se o cursor é alterado sobre o botão
		cy.get('.sc-dKfzgJ').click(); // Clica no botão de pesquisar

		cy.url().should('include', '/search'); // Confere se a rota termina em /search
		cy.wait(1000);
		
		// Redirect t home
		cy.get('.sc-brKeYL').should('have.css', 'cursor');
		cy.get('.sc-brKeYL').click(); // retorna à home
	});

	it('realiza cadastro', () => {
		cy.visit("/");

		cy.get('.sc-dnwKUv').click(); // Clica no botão de sign in
		cy.url().should('include', '/login'); // Confere se a url equivalea à URL base com final /login

		cy.get('.sc-ldFCYb span').click(); // Acessa página de cadastro
		cy.url().should('include', '/sign-up');

		cy.get('input[type=text]').type(name);
		cy.get('input[type=email]').type(email);
		cy.get('input[type=password]').type(password);

		cy.get('#show-password').check(); // Ativa visualização de senha

		cy.get('button').click(); // Tenta realizar cadastro
	});

	it('realiza login', () => {
		cy.visit("/");

		cy.get('.sc-dnwKUv').click(); // Clica no botão de sign in

		cy.url().should('include', '/login');

		Cypress.Promise.all([
			cy.get('.sc-iMfspA:first-of-type'),
			cy.get('.sc-iMfspA:last-of-type'),
			cy.get('#show-password'),
			cy.get('.sc-oQLfA'),
			cy.get('button')
		]).then((elements) => {
			const [emailField, passwordField, checkbox, errorMessage, button] = elements;

			emailField.type(email.replace('@', ''));
			passwordField.type(password + 8);
			button.click(); // Tenta logar

			errorMessage.should('have.css', 'display', 'flex'); // Confere se mensagem de error foi exibida

			emailField.type(`{selectAll}${email}`);
			button.click(); // Tenta logar

			checkbox.check(); // Ativa visualização de senha

			passwordField.should('have.attr', 'type', 'text');

			passwordField.type('{backspace}');
			button.click(); // Tenta logar
			const apiURL = '';

			Cypress.Promise.all([
				cy.request('POST', `${apiURL}/user/sign-in`, { email, password }),
				cy.getAllLocalStorage()
			]).then((result) => {
				const [reponse, localStorage] = result;

				expect(localStorage).to.deep.equal({
					'http://localhost:4000': {
					  token: reponse.token,
					},
				  });
			});
		});
	});
