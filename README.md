# Plano de Teste

**Desafio Tecnico RPE**

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
01/04/2023 |  1.0   | Release incial | Nicolly Oliveira


## 1 - Introdução

Desafio proposto pela RPE com intuito de testar o nível técnico para uma vaga de estagio QA. Este documento descreve os requisitos a testar, os  tipos de testes definidos para cada iteração, cenários de teste, casos de teste, estratégia de teste e o cronograma dos testes ao longo do projeto. As seções servem para permitir que todos do projeto acompanhem a evolução dos testes.

Informações a respeito da aplicação:
- Nós da RPE trabalhamos para transformar a experiência de compra dos nossos clientes e nada melhor do que uma aplicação confiável. Para isso, devemos agilizar nossas entregas e garantir sempre a qualidade das aplicações através de soluções inovadoras e testes;

## 2 - Requisitos a Testar

Aqui conter os casos de uso e requisitos identificados como objetos dos testes ao longo do desenvolvimento do projeto.
Assim sendo, sempre que novos requisitos a testar, que não constem como requisitos do sistema, forem identificados ou, simplesmente, por questões de organização e clareza, esta seção deve ser atualizada.

Segue alguns do casos de uso e requisitos:

### Casos de uso:

Identificador do caso de uso | Nome do caso de uso
-----------------------------|----------------------------------------------------------------------------------------------------------------------
id UC1                       | Efetuar login
id UC2                       | Realizar um compra

### Requisitos:

Identificador do requisito   | Nome do requisito
-----------------------------|---------------------
id req1                      | Campos obrigatórios contêm o símbolo(*)
id req2                      | Para realizar uma venda, apenas deverá ser permitido caso o saldo do cliente for igual ou superior ao valor da compra
id req3                      | Autenticação do sistema deve ser realizada com as credenciais(Login/senha: admin/admin)


## 3 - Tipos de teste

Abaixo segue os tipos de testes escolhidos para cada iteração do projeto.

- Teste de interface de usuário;
- Teste funcionais;
- Teste exploratório;

Mais informações sobre os tipos de teste e abordagens utilizadas, ir para o seção Estratégia de Teste.

### 3.1 - Cenários de Teste 

Baseados nos teste de funcionalidade, este são alguns dos cenário que precisam ser validados no sistema.

 - Cenário de teste 01: 
 
![CETES1](https://user-images.githubusercontent.com/95318147/229340210-235d6ff1-3958-4225-9d9f-311ee7e84857.PNG)

 - Cenário de teste 02:
 
![CETES2](https://user-images.githubusercontent.com/95318147/229340208-bd466d72-5ce6-42ca-88e2-855e16e20276.PNG)

 - Cenário de teste 03:
 
![CETES3](https://user-images.githubusercontent.com/95318147/229340209-8ba8a2aa-ec58-4aeb-a969-307bce965bb0.PNG)

### 3.2 - Casos de Teste

Para os cenários de teste temos os casos de testes relacionados.
Segue o passo a passo de como é realizado o teste baseados nos casos de teste descritos abaixo.

 - Caso de teste 01 (Segundo a ISO-2119-3 e Gherkin):

![CT01](https://user-images.githubusercontent.com/95318147/229331890-8e3e9080-ab7b-4ca0-a31e-207315dc59e6.PNG)

 - Caso de teste 02 (Segundo a ISO-2119-3 e Gherkin):

![CT02](https://user-images.githubusercontent.com/95318147/229331891-34435d2b-2b88-4637-8a7f-9b8c6b13256a.PNG)

 - Caso de teste 03 (Segundo a ISO-2119-3 e Gherkin):

![CT03](https://user-images.githubusercontent.com/95318147/229331892-4bd2a08d-b79b-4b9c-b31c-1b6128d6436e.PNG)

 - Caso de teste 04 (Segundo a ISO-2119-3 e Gherkin):

![CT04](https://user-images.githubusercontent.com/95318147/229331893-a51e61d8-07a4-4c58-8a13-8927face6eae.PNG)

 - Caso de teste 05 (Segundo a ISO-2119-3 e Gherkin):

![CT05](https://user-images.githubusercontent.com/95318147/229331895-a9ccbd08-7779-4800-a71c-e9be33dab0dc.PNG)

 - Caso de teste 06 (Segundo a ISO-2119-3 e Gherkin):

![CT06](https://user-images.githubusercontent.com/95318147/229331896-02fdafdf-5eee-4c80-8d1f-eddea16932e7.PNG)

 - Caso de teste 07 (Segundo a ISO-2119-3 e Gherkin):

![CT07](https://user-images.githubusercontent.com/95318147/229331897-af23436e-d031-46fe-b478-69617b293c4b.PNG)

## 4 - Estratégia de Teste

![Desafio RPE - Estrategia de test](https://user-images.githubusercontent.com/95318147/229332438-03e80551-c11d-4883-b9ab-1e27de317d2f.png)


## 5 - Cronograma

Tipo de teste      | data de início | data de término
-------------------|----------------|-----------------
planejar teste     |   30/03/2023   | 30/03/2023
projetar teste     |   30/03/2023   | 30/03/2023
implementar teste  |   31/03/2023   | 31/03/2023
executar teste     |   01/04/2023   | 01/04/2023
avaliar teste      |   02/04/2023   | 02/04/2023
