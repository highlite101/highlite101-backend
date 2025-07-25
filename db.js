const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://db_highlite101:db_Yemiybnl16@cluster0.czpf3aa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));