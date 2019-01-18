module.exports = {
    send: (err,req,res,cod = 400)=>{
        
        console.log(`error:${err}`);
        res.status(cod).json({
            erro:err
        });

    }
}