const getDb = require("./../utils/database").getDb;
const mongodb = require('mongodb')




//
//! ─── POST ─────────────────────────────────────────────────────────────────────
//

exports.postToCollection = async (collection, object) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .insertOne(object)
            .then(result => {
                const Result = result;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}




//
//! ─── GET ─────────────────────────────────────────────────────────────────────
//

exports.getFromCollection = async (collection) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .find()
            .toArray()
            .then(object => {
                return object;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}




//
//! ─── UPDATE ─────────────────────────────────────────────────────────────────────
//

exports.updateWithId = async (collection, object, id) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .updateOne(
                { _id: new mongodb.ObjectId(id) },
                {
                    $set: {
                        "title": object.title,
                        "type": object.type,
                        "description": object.description,
                        "tasks": object.tasks,
                        "examples": object.examples,
                        "clinets": object.clinets
                    }
                }
            )
            .then(result => {
                return result;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}





//
//! ─── DELETE ─────────────────────────────────────────────────────────────────────
//

exports.deleteWithId = async (collection, id) => {
    const db = await getDb();
    try {
        const result = await db
            .collection(collection)
            .deleteOne(
                { _id: new mongodb.ObjectId(id) },
            )
            .then(result => {
                return result;
            })
            .catch(err => {
                console.log(err);
            });

        return result;
    } catch (error) {
        console.log(error)
    }

}