"use strict";

const hello = async (event) => {
//module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "v2.0! Sua função foi executada com sucesso!",
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports = {
    handler:hello
}


