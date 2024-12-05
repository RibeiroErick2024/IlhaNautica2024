Ilha Náutica
Ilha Náutica é um projeto frontend do site de alugueis de embarcações desenvolvido em React. Ele oferece recursos para o cadastro, gerenciamento de perfis, cheking e checkout, com uma interface limpa e organizada.

🛠️ Tecnologias Utilizadas
React: Biblioteca principal para a construção do frontend.
Axios: Utilizado para a integração com a API backend.
React Router DOM: Para navegação entre as páginas do aplicativo.
CSS Modules: Para organização e estilização.

📁 Estrutura do Projeto
Componentes
Os componentes do projeto estão localizados na pasta components/ e incluem:

CaracteristicasEmbarcacao: Exibe informações técnicas sobre as embarcações.
Card_barco: Componente para representar individualmente cada barco na listagem.
CardInfoAluguel: Apresenta detalhes de preços e condições de aluguel.
EmbarcacaoGaleria: Galeria de imagens para embarcações.
Filtros: Ferramenta para aplicar filtros à listagem de embarcações.
Formularios: Formulários de cadastro, login e gerenciamento:
FormCadastro
FormCadastroEmbarcacao
FormCadastroEmbarcacaoContinua
FormCompletarCadastro
FormDescricao
FormLogin
FormPerfilEmbarcacao
FormPerfilMarinheiro
FormRecuperacaoSenha
FormUsuario
Header: Cabeçalho global do site.
Listagem_barcos: Apresenta a lista de embarcações disponíveis.
ProtectedRoute: Gerencia rotas protegidas no sistema.
Páginas
As páginas principais estão organizadas em pages/, incluindo:

Home: Página inicial com a listagem de embarcações.
EmbarcacaoPageAluguel: Página detalhada para exibição de informações sobre embarcações específicas.
Cadastro: Área para novos usuários se registrarem.
CadastroLocador: Seção para proprietários de embarcações.
Login: Página para autenticação.
PerfilMarinheiro: Exibe e gerencia os dados de marinheiros.
PerfilUsuario: Para gerenciar o perfil do usuário comum.
Checkout: Fluxo de pagamento e conclusão de reservas.

🌟 Funcionalidades
Listagem de embarcações com filtros avançados.
Visualização de características detalhadas e imagens de embarcações.
Área de gerenciamento para usuários e locadores.
Proteção de rotas com autenticação.
Checkout completo para aluguel de embarcações.
