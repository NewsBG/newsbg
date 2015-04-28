
/**
 * A function that returns a connection to the database
 * 
 * @param db_name The name of the data base to which we would like to connect
 *
 */
function rdb(dbName) {
  r = require('rethinkdb');
  r.connect({ host: 'localhost', port: 28115 }, function(err, conn) {
    if(err) {
     throw err;
    }
  });

  return r;
}

