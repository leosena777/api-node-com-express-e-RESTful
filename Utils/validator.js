module.exports = {

    user:(app, req, res)=>{


        req.assert('nome','O nome é obrigatório').notEmpty();
        req.assert('email','O email é inválido').notEmpty();
    
        let errors = req.validationErrors();
        
        if(errors){
            app.utils.error.send(errors,req,res);
            return false;
        }else{
            return true;
        }
    }
};