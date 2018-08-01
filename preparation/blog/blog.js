var articles = [
    {
        title: 'Article 1',
        link: 'test1.html'
    },
    {
        title: 'Article 2',
        link: 'test2.html'
    },
    {
        title: 'Artricle 3',
        link: 'test3.html'
    },
    {
        title: 'Article 4',
        link: 'test4.html'
    }
]
var blog = '<ul>',
    amountOfArticles = articles.length

    for(var article=0; article <  amountOfArticles; article++){
        blog+=`
        <li>
            <a href="articles/${articles[ article ].link}" class="article">
                <h3>${articles[ article ].title}</h3>
            </a>
        </li>`
    }
blog += '<ul>'
console.log(blog);

document.getElementById('root').innerHTML = blog;