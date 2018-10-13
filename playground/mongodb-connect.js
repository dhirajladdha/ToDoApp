const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('unable to conenct to MongoDB server');
    }
    console.log('connected to MongoDB server');
    db.collection('ToDos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('Users').insertOne({
        name:'Dhiraj Laddha',
        age:37,
        location:'Chikhli'
    },(err,result)=>{
        if(err){
            return console.log('unable to insert User Dhiraj',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('ToDos').find().toArray().then((docs) => {
       return console.log(docs);
    },(err)=>{
    console.log('unable to fetch the docs');
    };
    );
    db.close();
});