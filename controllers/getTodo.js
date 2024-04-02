const Todo =require("../models/Todo")

// define route handle
exports.getTodo = async(req,res)=>{
    try{
        // fetch all todo items from database
        const todos = await Todo.find({});

        // response update
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched"
        })

    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
           data:"internal server error",
           message:err.message
        })
    }

}

// Now here we are accessing one item from data using its id
exports.getTodoById = async(req,res)=>{
    try{
        // extract todo items basis on id 
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with the given id"
            })
        }
        //data for given id FOUND
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
           data:"internal server error",
           message:err.message
        })
    }
}