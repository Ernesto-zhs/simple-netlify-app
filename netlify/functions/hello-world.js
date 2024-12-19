exports.handler = async (req) => {
  let clientIP = req.ip;

  // 检查 X-Forwarded-For 头
  if (req.headers['x-forwarded-for']) {
    const forwardedIps = req.headers['x-forwarded-for'].split(',');
    clientIP = forwardedIps[0].trim(); // 使用最左边的 IP 地址
  } else if (req.headers['x-real-ip']) {
    clientIP = req.headers['x-real-ip'];
  }
  return {
    statusCode: 200,
    body: clientIP
  };
};
