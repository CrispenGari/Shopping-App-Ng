import pwd from "../keys/index.js";
const dbName = "Products";
const dbUrl = `mongodb+srv://crispen:${pwd}@cluster0.p9olk.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export default dbUrl;
