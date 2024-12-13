import morgan, { StreamOptions } from "morgan";
import config from "config";
import logger from "../../config/logges";

const stream: StreamOptions = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = config.get("env") || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  `:method :url :status :res[content-length] - :response-time ms`,
  { skip, stream }
);


export default morganMiddleware;
