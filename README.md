# PrimeFlix

[Este projeto é uma aplicação React que permite aos usuários visualizar cartazes de filmes populares. Utiliza o conceito de Single Page Application (SPA) para proporcionar uma experiência de usuário suave sem recarregamentos de página.

A aplicação consome uma API de filmes para obter dados sobre os filmes e exibe seus cartazes. Os usuários podem explorar diferentes filmes e obter informações adicionais ao clicar nos cartazes, além de assistir seus trailers na plataforma "Youtube".]

API
Este projeto utiliza a API "https://www.themoviedb.org/" para obter informações sobre os filmes. Certifique-se de revisar a documentação da API para entender melhor como ela funciona.q


### `Exemplo da aplicação: `
Ao iniciar a página, uma requisição ocorre e é puxado os filmes atuais em cartazes nos cinemas.

![image](https://github.com/matheusabf/PrimeFlix/assets/48792317/95d82744-ec86-4ec9-ae89-a0aae844a4bb)


### `Após acessar`
Ao acessar algum filme, com auxilio da key conseguimos linkar o ID do filme com o seu conteúdo da requisição, mostrando informaçõs sobre somente aquele filme. (Onde na URL fica o ID de identificação do filme.)
![image](https://github.com/matheusabf/PrimeFlix/assets/48792317/a5d33c23-7186-4dcf-9ea9-86b81d2376a1)

### `Ao clicar em trailer`
Ao clicar em trailer o usuário é redirecionado para o trailer no youtube, ao clicar em salvar ele pede para aplicação salvar o filme no LocalStorage, onde aparece posteriormente em "Favoritos".
![image](https://github.com/matheusabf/PrimeFlix/assets/48792317/495d16c4-95c8-44fb-a383-d05cdad55d0f)

### `Página "Meus Filmes"`
Ao acessar a página "Meus Filmes", é mostrado todos os filmes que a pessoa salvou no LocalStorage, assim como permite também excluir e ver mais detalhes (Vendo mais detalhes ele é redirecionado novamente a página de acesso do filme contendo trailer e o botão para salvar.)
![image](https://github.com/matheusabf/PrimeFlix/assets/48792317/f562ff2e-210e-49c1-932f-b6a1aa3b26ae)


### `Excluir Filmes`
E por fim, ao excluir todos os filmes da lista é mostrado uma mensagem "Você não possui nenhum filme salvo :("
![image](https://github.com/matheusabf/PrimeFlix/assets/48792317/62f565e7-ba37-45e6-b24f-3feae56f29b3)
