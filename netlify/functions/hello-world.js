exports.handler = async (req) => {
    console.log(req)
    return {
      statusCode: 200,
      body: "hello world!"
    };
  };
  