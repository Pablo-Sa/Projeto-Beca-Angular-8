# BACK-END
Implementado Spring Data, Mockito, JUnit, AssertJ, Swagger, Tratamento de Exceções, Spring Security utilizando JWT, Validações Bean etc.

# Heroku
* Fiz o Deploy desta aplicação no Heroku, abaixo segue o Link de acesso a mesma, tal lhe redirecionará para a página de documentação da API Back-End da nossa POC, tal página foi construída utilizando o Framework Swagger, que através dela, poderá verificar todos os EndPoints disponíveis, bem como a utilização dos mesmos, assim caso queria testar o funcionamento da mesma sem precisar ambientar nada basta clicar no link abaixo, porém lembrando é somente o Back-End.

    * https://app-beca-angular.herokuapp.com/swagger-ui.html
    
   OBS: Esta é uma conta gratuita do Heroku, então ao tentar acessar a API pela primeira vez, bem provavelmente que irá demorar responder um pouco, pois por se tratar de conta gratuita o ambiente não fica disponível para acesso imediato, existirá um Delay, como uma inicialização do ambiente de onde a mesma está alocada, após aguardar uns instantes, a aplicação estará disponível e com funcionamento similar a uma em produção.
   Importante salientar que o Heroku em algumas redes corporativas é bloqueado, qualquer divergência acesse pela sua
   rede particular com sua máquina que não está ingressada em um domínio que possa ter restrições de acesso.
 

## Executando e testando o projeto (Back-End)

### Pré-requisitos
* PostgresSQL (O banco que foi testado).
* Java 8
* Sistema Operacional Windows Pois este tutorial não irá abordar instalação em outros SO.

#### 1 - Instalar o PostgresSQL:

A página oficial contém [links para download](https://www.postgresql.org/download/) do SGBD para diversas plataformas.


1.1 Instalar o PostgreSQL:

1.2 É bastante simples, basta dar um duplo clique no executável que foi baixado no passo acima e seguir os passos do instalador.

#### 2 - Configurar as propriedades da aplicação 

Caminho até o arquivo de propriedades da aplicação:
`src/main/resources/application.properties`

O usuário e a senha cadastrados durante a instalação do BD deveram ser informados neste arquivo.  

Por exemplo, a string de conexão com o banco de dados Postgres
seria `jdbc:postgresql://localhost:5432/agenda`. onde `agenda` representaria o Banco de Dados Para configurar usuário `postgres` e senha `postgres`
ou caso a sua própria, utilizar a configuração abaixo: 

`spring.datasource.username=postgres`
`spring.datasource.password=postgres`

#### 3 - Buildar e executar a aplicação

Dentro do diretório root da aplicação executar os passos abaixo.

3.1 Para rodar os testes:

##Obs para rodar os testes lembre-se que o maven precisa estar instalado. E certifique-se que o Postgres também esteja instalado com o Banco Criado que foi informado no arquivo
`src/main/resources/application.properties` pois os testes fazem acesso ao banco de dados.


`$ mvn test #Para executar os testes`

3.2 Para buildar a aplicação:
`$ mvn clean install #buildando o pacote da aplicação`

3.3 Para executar a aplicação:

O Maven através do `spring-boot-maven-plugin` gera o jar executável.
Então basta entrar no diretório `target/` e executar:

`$ java -jar "nomeDoJarGerado"`

OBS: Lembrando que deve informar todo o Diretório, então supondo que a pasta esteja em C:\
Logo o Comando Será : 
`$ java -jar "C:\pastadoprojeto\target\apirest-0.0.1-SNAPSHOT.jar"`

A partir deste ponto se tudo ocorrer corretamente a aplicação estará executando normalmente. 

É possível utilizar o client do swagger através da url [http://localhost:8080/swagger-ui.html]

## Principais tecnologias e frameworks utilizados (Back-End)

- Java 8
- Spring Boot 
- JUnit 5
- Spring Security
- Mockito
- Hibernate
- Swagger
- Lombook
- JWT

# Spring Security
Para Segurança da API foi implementado o Spring Security como método de Autenticação `STATELESS`, utilizado o JWT.
O Tempo de Expiração do Token configurei para 30 Minutos para que seja possível o teste mais facilmente por se tratar de uma POC.
