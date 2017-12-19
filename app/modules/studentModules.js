var studentsModel = require(__dirname +'/../models').student;
var Q = require('q');
module.exports = {
  'fetch' : function(){
    var defer = Q.defer();
    console.log("line 6");
    studentsModel.findAll().then(function(response){
      console.log("line *");
      defer.resolve(response);
      // return response;
    },function(error){
      console.log("error_modul");
      defer.reject("error");
    });
    return defer.promise;
  },

  'store' : function(data){
    var defer = Q.defer();
    console.log("line 6");
    studentsModel.create({
      'first_name'  : data.first_name,
      'last_name'   : data.last_name,
      'email'       : data.email,
      'age'         : data.age
    }).then(function(response){
      console.log("value save in database");
      defer.resolve(response);

    }, function(error){
      console.log("error in saveing");
        defer.reject("error");
    });
    return defer.promise ;

  },

  'delete' : function(data){
    var defer = Q.defer();
    console.log("line 6");
    studentsModel.destroy({
      'where': {
        id : data.id
      }
    }).then(function(response){
      console.log("value save in database");
      defer.resolve(response);

    }, function(error){
      console.log("error in saveing");
        defer.reject("error");
    });
    return defer.promise ;

  },
  'show' : function(data){
    var defer = Q.defer();
    console.log("line 6");
    studentsModel.findOne({
      'where': {
        id : data.id
      }
    }).then(function(response){
      console.log("value save in database");
      defer.resolve(response);

    }, function(error){
      console.log("error in saveing");
        defer.reject("error");
    });
    return defer.promise ;

  },
  'update' : function(data){
    var defer = Q.defer();
    console.log("line 6");
    studentsModel.findOne({
      'where': {
        id : data.id
      }
    }).then(function(response){
      response.first_name = data.first_name;
      response.last_name = data.last_name;
      response.age = data.age;
      response.save().then(function(saveData){
        console.log("value update in database");
        defer.resolve(saveData);

      },function(error){
        defer.reject("error");
      });

    }, function(error){
      console.log("error in saveing");
        defer.reject("error");
    });
    return defer.promise ;

  },
}
