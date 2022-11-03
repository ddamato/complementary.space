

const url = process.env.ELEVENTY_ENV === 'dev'
? 'http://localhost:8080'
: 'https://complementary.space';

module.exports = {
  url,
  title: "Complementary Space",
  description: "A scalable semantic system to brilliantly curate space in web design",
}