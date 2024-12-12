import mongoose from "mongoose";

async function connect() {
  const uri = "mongodb://localhost:27017/apiRestFul";
  try {
    await mongoose.connect(uri);
    console.log("Conetado com banco de dados com sucesso");
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(
        `Algo deu errado ao conectar com banco de dados, error: ${e.message}`
      );
    }
  }
}


export default connect;
