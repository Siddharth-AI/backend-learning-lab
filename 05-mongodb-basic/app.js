const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    // Connect to MongoDB using the connection string
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
}

// mongoose.connect(`${process.env.MONGO_URI}`).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Could not connect to MongoDB', err));

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Function to create a new user
async function runQueryExample() {
  try {
    //! Create a new document 
    // const newUser = await User.create({
    //   name: 'shubham',
    //   email: 'shubhamshah895@gmail.com',
    //   age: 28,
    //   isActive: false,
    //   tags: ['developer', 'javascript'],
    // })

    // //! Alternatively, you can create a new instance of the model
    // const newUser = new User({
    //   name: 'raj',
    //   email: 'rajshah895@gmail.com',
    //   age: 30,
    //   isActive: true,
    //   tags: ['developer', 'javascript'],
    // })
    // //! Save the new user to the database
    // await newUser.save();

    // console.log(`New user created: ${newUser}`)

    // const allUser = await User.find({ name: 'shubham' }).select('name email age isActive tags').sort({ age: -1 }).limit(1).lean();
    // console.log('All users:', allUser);

    // const skipUser = await User.find().skip(1).limit(5).sort({ age: 1 }).lean(); // ascending order by age, skip the first document, and limit to 5 documents
    // console.log('Skipped users:', skipUser);

    // const getUserOfAge = await User.findOne({ age: 28 });
    // console.log('User of age 28:', getUserOfAge);

    // const getUserById = await User.findById('64f0c8b2f1d4c3b8e8e8e8e8');
    // console.log('User by ID:', getUserById);

    // const updateUser = await User.updateOne({ name: 'shubham' }, { $set: { age: 29 } });
    // console.log('User updated:', updateUser);

    // const updateManyUsers = await User.updateMany(
    //   { age: { $eq: 31 } },
    //   { $set: { isActive: true }, $push: { tags: 'c++' } }
    // );
    // console.log('Users updated:', updateManyUsers);

    // const deleteUser = await User.deleteOne({ name: 'shubham' });
    // console.log('User deleted:', deleteUser);

    // const deleteManyUsers = await User.deleteMany({ age: { $lt: 30 } });
    // console.log('Users deleted:', deleteManyUsers);

    // const countUsers = await User.countDocuments({ age: { $eq: 30 } });
    // console.log('Count of active users:', countUsers);

    // const aggregateUsers = await User.aggregate([
    //   { $match: { isActive: true } },
    //   { $group: { _id: '$age', total: { $sum: 1 } } },
    //   { $sort: { total: -1 } }
    // ]);
    // console.log('Aggregated users:', aggregateUsers);

    // const distinctTags = await User.distinct('tags');
    // console.log('Distinct tags:', distinctTags);

    // const findOneAndUpdate = await User.findOneAndUpdate(
    //   { name: 'raj' },
    //   { $set: { age: 31 } },
    //   { new: true }) // new: true returns the updated document
    // console.log('User after findOneAndUpdate:', findOneAndUpdate);

    // const findOneAndDelete = await User.findOneAndDelete({ name: 'raj' });
    // console.log('User after findOneAndDelete:', findOneAndDelete);

    // const findByIdAndUpdate = await User.findByIdAndUpdate(
    //   '64f0c8b2f1d4c3b8e8e8e8e8',
    //   { $set: { isActive: false } },
    //   { new: true }
    // );
    // console.log('User after findByIdAndUpdate:', findByIdAndUpdate);

    // const findByIdAndDelete = await User.findByIdAndDelete('64f0c8b2f1d4c3b8e8e8e8e8');
    // console.log('User after findByIdAndDelete:', findByIdAndDelete);

    // const paginationUsers = await User.find()
    //   .skip(0) // Skip the first 0 documents
    //   .limit(10) // Limit to 10 documents
    //   .sort({ createdAt: -1 }) // Sort by createdAt in descending order
    //   .lean();
    // console.log('Paginated users:', paginationUsers);

    // const projectionUsers = await User.find({}, 'name email age') // Project only specific fields
    //   .sort({ age: 1 }) // Sort by age in ascending order
    //   .lean();
    // console.log('Projected users:', projectionUsers);

    // const textSearchUsers = await User.find({ $text: { $search: 'developer' } })
    //   .sort({ createdAt: -1 }) // Sort by createdAt in descending order
    //   .lean();
    // console.log('Text search users:', textSearchUsers);

    // const regexSearchUsers = await User.find({ name: { $regex: /^s/, $options: 'i' } }) // Case-insensitive search for names starting with 's'
    //   .sort({ name: 1 }) // Sort by name in ascending order
    //   .lean();
    // console.log('Regex search users:', regexSearchUsers);

    // const populateUsers = await User.find()
    //   .populate('tags') // Assuming tags is a reference to another collection
    //   .sort({ createdAt: -1 }) // Sort by createdAt in descending order
    //   .lean();
    // console.log('Populated users:', populateUsers);

    // const countActiveUsers = await User.countDocuments({ isActive: true });
    // console.log('Count of active users:', countActiveUsers);

  }

  catch (e) {
    console.log('error ->', e)
  }
  finally {
    // Close the connection to MongoDB
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  }
}

connectToMongoDB();
runQueryExample()