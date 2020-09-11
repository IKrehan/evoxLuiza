import React, { Component } from 'react';
import NewsCard from './NewsCard'

import Container from 'react-bootstrap/Container';


export default class News extends Component {
    render() {
        return (
            <div className="news mt-5">
                <NewsCard title="COVID-19 | Abandono entre doses pode levar vacina a não funcionar no Brasil - Canaltech" urlToImage="https://timeline.canaltech.com.br/356155.700/covid-19-abandono-entre-doses-pode-levar-vacina-a-nao-funcionar-no-brasil-171219.jpg" url="https://canaltech.com.br/saude/covid-19-abandono-entre-doses-pode-levar-vacina-a-nao-funcionar-no-brasil-171219/" publisher="Canaltech.com.br" publishedAt="2020-09-09" />
            </div>
            
        );
    }
}