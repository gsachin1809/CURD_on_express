var studentModules = require(__dirname + '/../modules/studentModules.js');

module.exports = {

  'index' : function(req, res){
    console.log("this is controller");
    // res.render('index');
    // var response = studentModules.fetch();
    // res.send(response);
    console.log("line 10");
      studentModules.fetch().then(function(response){
        console.log("oresponse of out");
        console.log(response);
        var data =JSON.stringify(response);
        res.render('index',{response:data,response_obj:response});
      },function(error){
        console.log("eror");
        console.log(error);
      });
  },
  'create' : function(req, res){
    res.render('create');

  },
  'store' : function(req, res){
    var data = req.body;
    console.log(data);
    console.log("this is store function");
    if(data.id.length){
      console.log("data.id found");
      studentModules.update(data).then(function(response){
        console.log("this is response");
        console.log(response);
        res.redirect('/');
      },function(error){
        res.send("error occure");
      });
    }
    else{
      console.log("data.id not found");
      studentModules.store(data).then(function(response){
        console.log("this is response");
        console.log(response);
        res.redirect('/');
      },function(error){
        res.send("error occure");
      });

    }

  },
  'delete' : function(req, res){
    var data = req.params;
    console.log(data);
    console.log("this is store function");
    studentModules.delete(data).then(function(response){
      console.log("this is response");
      console.log(response);
      // res.send("exectued")
      res.redirect('/');
    },function(error){
      res.send("error occure");
    });
  },
  'show' : function(req, res){
    var data = req.params;
    console.log(data);
    console.log("this is store function");
    studentModules.show(data).then(function(response){
      console.log("this is response");
      console.log(response);
      // res.send("exectued")
      res.render('create',{user_data:response});
    },function(error){
      res.send("error occure");
    });
  },

}
