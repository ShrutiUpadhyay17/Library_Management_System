import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";
import Book from "./models/Book.js";
import BookCategory from "./models/BookCategory.js";
import BookTransaction from "./models/BookTransaction.js";

// Load .env variables
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    console.log(" Clearing old data...");
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
    console.log(" Old data cleared.");

    const salt = await bcrypt.genSalt(10);
    const hashedAdminPassword = await bcrypt.hash("admin123", salt);
    const hashedStudentPassword = await bcrypt.hash("student123", salt);

    const fiction = await BookCategory.create({ categoryName: "Fiction" });
    const science = await BookCategory.create({ categoryName: "Science" });

    const book1 = await Book.create({
      bookName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      bookCountAvailable: 5,
      categories: [fiction._id],
    });

    const book2 = await Book.create({
      bookName: "Brief History of Time",
      author: "Stephen Hawking",
      bookCountAvailable: 3,
      categories: [science._id],
    });

    fiction.books.push(book1._id);
    science.books.push(book2._id);
    await fiction.save();
    await science.save();

    const adminUser = await User.create({
      userType: "Staff",
      userFullName: "Admin Librarian",
      employeeId: "EMP001",
      age: 35,
      gender: "Male",
      dob: "1990-01-01",
      mobileNumber: 9876543210,
      email: "admin@lms.com",
      password: hashedAdminPassword,
      isAdmin: true,
    });

    const studentUser = await User.create({
      userType: "Student",
      userFullName: "John Doe",
      admissionId: "ADM001",
      age: 21,
      gender: "Male",
      dob: "2004-05-10",
      mobileNumber: 9123456789,
      email: "student@lms.com",
      password: hashedStudentPassword,
      isAdmin: false,
    });

    const transaction = await BookTransaction.create({
      bookId: book1._id.toString(),
      borrowerId: studentUser.admissionId,
      bookName: book1.bookName,
      borrowerName: studentUser.userFullName,
      transactionType: "Issue",
      fromDate: "2025-09-20",
      toDate: "2025-10-10",
    });

    studentUser.activeTransactions.push(transaction._id);
    await studentUser.save();

    book1.transactions.push(transaction._id);
    await book1.save();

    console.log("Dummy data inserted successfully!");
  } catch (err) {
    console.error("Data Seeding Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log(" MongoDB Disconnected");
    process.exit(0);
  }
};

const run = async () => {
  await connectDB();
  await seedData();
};

run();
