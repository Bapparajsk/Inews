import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Articles = (props) => {
    const [articles, setArticles] = useState({
        article: [],
        totalResults: 0,
        totalFachData: 0,
        page: 1,
        next: true,
    });

    const fetchData = async (pageNumber) => {
        try {
            const url = `https://newsapi.org/v2/${props.newsName}?${props.country !== undefined ? `country=${props.country}&` : ''}apiKey=7bcc1f2095bd4fe0b60445c0ec26f9a6${props.q !== undefined ? `&q=${props.q}` : ''}&page=${pageNumber}&pageSize=10`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    const fetchMoreData = async () => {
        if (articles.next) {
            const nextPage = articles.page + 1;
            const data = await fetchData(nextPage);

            if (data) {
                setArticles(prevState => ({
                    article: prevState.article.concat(data.articles),
                    totalResults: data.totalResults,
                    totalFachData: prevState.totalFachData + 5,
                    page: nextPage,
                    next: prevState.totalFachData + 5 < data.totalResults
                }));
            }
        }
    }

    useEffect(() => {
        props.setprogress(40);

        // Fetch initial data
        fetchData(1).then(data => {
            if (data) {
                setArticles(prevState => ({
                    ...prevState,
                    article: data.articles,
                    totalResults: data.totalResults,
                }));
            }

            props.setprogress(100);
        });
    }, []);

    return (
        <div className={'flex flex-wrap justify-center'}>
            <InfiniteScroll
                dataLength={articles.article.length}
                next={fetchMoreData}
                hasMore={articles.next}
                loader={<h4 className={'text-blue-50'}>Loading...</h4>}
            >
                <div className={'flex flex-wrap justify-center'}>
                    {articles.article.map((e, index) => (
                        <Card
                            key={index}
                            urlToImage={e.urlToImage}
                            title={e.title}
                            description={e.description}
                            url={e.url}
                            author={e.author}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Articles;

Articles.defaultProps = {
    newsName: 'everything'
}
