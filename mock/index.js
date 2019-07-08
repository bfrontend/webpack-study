const proxy = {
  'POST /v1/blog/login': (req, res) => {
    res.send({ status: 'ok', message: '删除成功！' })
  }
}

module.exports = proxy;
