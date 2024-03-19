console.log('Olá pessoas!'); 
console.log('#ContruindoCRUDS');

const miniTwitter = { 
    usuarios: [
        {
            username: 'lucasprado',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'lucasprado',
            content: 'Meu primeiro tweet'

        }
    ],

};
//CREATE

function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost( {owner: 'lucasprado', content: 'Segundo tweet'});
criaPost({ owner: 'lucasprado', content: 'Terceiro tweet'})
//console.log(miniTwitter.posts)

//READ

function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts())

//UPDATE

function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;

    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo

}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPosts())

//DELETE

function apagaPost(id) {
    const listaDePostAtualizada = pegaPosts().filter((postAtual) =>{
        return postAtual.id !== id;
    })

    console.log(listaDePostAtualizada);
}
apagaPost(2);

    