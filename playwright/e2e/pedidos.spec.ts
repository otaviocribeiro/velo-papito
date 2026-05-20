import { test } from '@playwright/test'

import { generateOrderCode } from '../support/helpers'

import { Navbar } from '../support/components/Navbar'
import { LandingPage } from '../support/pages/LandingPage'
import { OrderLockupPage, OrderDetails } from '../support/pages/OrderLookupPage'

/// AAA - Arrange, Act, Assert

test.describe('Consulta de Pedido', () => {

  let orderLockupPage: OrderLockupPage

  test.beforeEach(async ({ page }) => {
    // Arrange
    await new LandingPage(page).goto()
    await new Navbar(page).orderLockupLink()

    orderLockupPage = new OrderLockupPage(page)
    orderLockupPage.validatePageLoaded()
  })

  test('deve consultar um pedido aprovado', async ({ page }) => {

    // Test Data
    // const order = {
    //   number: 'VLO-6E2J20',
    //   status: 'APROVADO' as const,
    //   color: 'Lunar White',
    //   wheels: 'aero Wheels',
    //   customer: {
    //     name: 'Fernando Papito',
    //     email: 'papito@velo.dev'
    //   },
    //   payment: 'À Vista'
    // }
    const order: OrderDetails = {
      number: 'VLO-T0PGRW',
      status: 'APROVADO',
      color: 'Lunar White',
      wheels: 'sport Wheels',
      customer: {
        name: 'Otávio Ribeiro',
        email: 'otavio@ribeiro.com',
      },
      payment: 'À Vista'
    };

    // Act
    await orderLockupPage.searchOrder(order.number)

    // Assert
    await orderLockupPage.validateOrderDetails(order)
    // await expect(page.getByTestId(`order-result-${order.number}`)).toMatchAriaSnapshot(`
    //   - img
    //   - paragraph: Pedido
    //   - paragraph: ${order.number}
    //   - status:
    //     - img
    //     - text: ${order.status}
    //   - img "Velô Sprint"
    //   - paragraph: Modelo
    //   - paragraph: Velô Sprint
    //   - paragraph: Cor
    //   - paragraph: ${order.color}
    //   - paragraph: Interior
    //   - paragraph: cream
    //   - paragraph: Rodas
    //   - paragraph: ${order.wheels}
    //   - heading "Dados do Cliente" [level=4]
    //   - paragraph: Nome
    //   - paragraph: ${order.customer.name}
    //   - paragraph: Email
    //   - paragraph: ${order.customer.email}
    //   - paragraph: Loja de Retirada
    //   - paragraph
    //   - paragraph: Data do Pedido
    //   - paragraph: /\\d+\\/\\d+\\/\\d+/
    //   - heading "Pagamento" [level=4]
    //   - paragraph: ${order.payment}
    //   - paragraph: /R\\$ \\d+\\.\\d+,\\d+/
    //   `);

    // Validação do badge de status encapsulada no Page Object
    await orderLockupPage.validateStatusBadge(order.status)

  })

  test('deve consultar um pedido reprovado', async ({ page }) => {

    // Test Data
    // const order = {
    //   number: 'VLO-0LNFEA',
    //   status: 'REPROVADO' as const,
    //   color: 'Midnight Black',
    //   wheels: 'sport Wheels',
    //   customer: {
    //     name: 'Steve Jobs',
    //     email: 'jobs@apple.com'
    //   },
    //   payment: 'À Vista'
    // }
    const order: OrderDetails = {
      number: 'VLO-IB9SNF',
      status: 'REPROVADO',
      color: 'Midnight Black',
      wheels: 'sport Wheels',
      customer: {
        name: 'Georgia Schmitz',
        email: 'georgiamschmitz@gmail.com',
      },
      payment: 'À Vista'
    };

    // Act
    await orderLockupPage.searchOrder(order.number)

    // Assert
    await orderLockupPage.validateOrderDetails(order)
    // await expect(page.getByTestId(`order-result-${order.number}`)).toMatchAriaSnapshot(`
    //   - img
    //   - paragraph: Pedido
    //   - paragraph: ${order.number}
    //   - status:
    //     - img
    //     - text: ${order.status}
    //   - img "Velô Sprint"
    //   - paragraph: Modelo
    //   - paragraph: Velô Sprint
    //   - paragraph: Cor
    //   - paragraph: ${order.color}
    //   - paragraph: Interior
    //   - paragraph: cream
    //   - paragraph: Rodas
    //   - paragraph: ${order.wheels}
    //   - heading "Dados do Cliente" [level=4]
    //   - paragraph: Nome
    //   - paragraph: ${order.customer.name}
    //   - paragraph: Email
    //   - paragraph: ${order.customer.email}
    //   - paragraph: Loja de Retirada
    //   - paragraph
    //   - paragraph: Data do Pedido
    //   - paragraph: /\\d+\\/\\d+\\/\\d+/
    //   - heading "Pagamento" [level=4]
    //   - paragraph: ${order.payment}
    //   - paragraph: /R\\$ \\d+\\.\\d+,\\d+/
    //   `);

    // Validação do badge de status encapsulada no Page Object
    await orderLockupPage.validateStatusBadge(order.status)
  })

  test('deve consultar um pedido em analise', async ({ page }) => {

    // Test Data
    // const order = {
    //   number: 'VLO-412O06',
    //   status: 'EM_ANALISE' as const,
    //   color: 'Lunar White',
    //   wheels: 'aero Wheels',
    //   customer: {
    //     name: 'João da Silva',
    //     email: 'joao@velo.dev'
    //   },
    //   payment: 'À Vista'
    // }
    const order: OrderDetails = {
      number: 'VLO-U3ZMEP',
      status: 'EM_ANALISE',
      color: 'Glacier Blue',
      wheels: 'aero Wheels',
      customer: {
        name: 'Orianos Efice',
        email: 'orianos@fc.com',
      },
      payment: 'À Vista'
    };

    // Act
    await orderLockupPage.searchOrder(order.number)

    // Assert
    await orderLockupPage.validateOrderDetails(order)
    // await expect(page.getByTestId(`order-result-${order.number}`)).toMatchAriaSnapshot(`
    //   - img
    //   - paragraph: Pedido
    //   - paragraph: ${order.number}
    //   - status:
    //     - img
    //     - text: ${order.status}
    //   - img "Velô Sprint"
    //   - paragraph: Modelo
    //   - paragraph: Velô Sprint
    //   - paragraph: Cor
    //   - paragraph: ${order.color}
    //   - paragraph: Interior
    //   - paragraph: cream
    //   - paragraph: Rodas
    //   - paragraph: ${order.wheels}
    //   - heading "Dados do Cliente" [level=4]
    //   - paragraph: Nome
    //   - paragraph: ${order.customer.name}
    //   - paragraph: Email
    //   - paragraph: ${order.customer.email}
    //   - paragraph: Loja de Retirada
    //   - paragraph
    //   - paragraph: Data do Pedido
    //   - paragraph: /\\d+\\/\\d+\\/\\d+/
    //   - heading "Pagamento" [level=4]
    //   - paragraph: ${order.payment}
    //   - paragraph: /R\\$ \\d+\\.\\d+,\\d+/
    //   `);

    // Validação do badge de status encapsulada no Page Object
    await orderLockupPage.validateStatusBadge(order.status)
  })

  test('deve exibir mensagem quando o pedido não é encontrado', async ({ page }) => {

    const order = generateOrderCode()

    await orderLockupPage.searchOrder(order)
    await orderLockupPage.validateOrderNotFound()
    // await expect(page.locator('#root')).toMatchAriaSnapshot(`
    //   - img
    //   - heading "Pedido não encontrado" [level=3]
    //   - paragraph: Verifique o número do pedido e tente novamente
    //   `)

  })

  test('deve exibir mensagem quando o código do pedido está fora do padrão', async ({ page }) => {
    const orderCode = 'XYZ-999-INVALIDO'

    await orderLockupPage.searchOrder(orderCode)
    await orderLockupPage.validateOrderNotFound()
  })
})