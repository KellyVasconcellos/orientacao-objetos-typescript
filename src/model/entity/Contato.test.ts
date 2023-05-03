import { Contato } from "./Contato"

describe("Testa o modelo de Contato", () => {

    test('Deve criar um novo objeto de contato com os atributos válidos', () => {
        const contato = new Contato(
            'Caio Sousa',
            '+55 (67) 7798-6594',
            'caio@email.com',
            new Date('1991-7-15')
        )
        expect(contato.nome).toBe('Caio Sousa')
        expect(contato.telefone).toBe('+55 (67) 7798-6594')
        expect(contato.email).toBe('caio@email.com')
        expect(contato.dataNascimento).toStrictEqual(new Date('1991-7-15'))
    })
})