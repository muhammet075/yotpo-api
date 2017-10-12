const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const yotpoConfig = require('../config.json');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/site', function (req,res) {

  axios.post('https://api.yotpo.com/oauth/token', yotpoConfig)
    .then(({ data }) => {

      axios.get(`https://api.yotpo.com/apps/${yotpoConfig.client_id}/bottom_lines?utoken=${data.access_token}`)
        .then(({ data }) => {
        const { bottomlines } = data.response;
        const siteReviews = bottomlines.filter(rev => rev.domain_key === "yotpo_site_reviews");
          res.send(siteReviews[0]);
        }).catch(e => res.status(200).send(e));

    })
    .catch(e => res.status(500).send(e));

});

module.exports = router;