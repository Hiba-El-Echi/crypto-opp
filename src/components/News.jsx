import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const {Text, Title} = Typography
const {Option} = Select
const News = ({simplified}) => {

  const {  cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });

  console.log(data," data news")
   return <div>News</div>;
};

export default News;
