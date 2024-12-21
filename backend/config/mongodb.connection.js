const mongoose = require("mongoose");
const ConnectDB = async () => {
    try {
        const mongoUrl = "mongodb://localhost:27017/payit";
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected....");
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

ConnectDB();
