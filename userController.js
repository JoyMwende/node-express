const mssql = require('mssql')
const config = require('./config')


async function getAttachees (req, res){
  try{
    await mssql.connect(config);
    const results = await mssql.query("select * from attachee").recordset;
    res.json(results);
  }
  catch (err){
    console.log(err);
  }
}

async function getAttachee (req, res){
  const id = req.params.id
  try {
    let pool = await mssql.connect(config)
    let results = await pool.request()
    .query("select * from attachee where id = {id}")
    res.json(results)
  } catch (error) {
    console.log(err);
  }
}

async function insertAttachee (req, res){
  const {firstName, secondName, email, project, password} = req.body
  try {
    let pool = await mssql.connect(config)
    await pool.request()
    .query("INSERT INTO attachee(firstName, secondName, email, project, password) VALUES('${firstName}', '${secondName}', '${email}', '${project}', '${password}')")
    res.json("Attachee inserted successfuly!")
  } catch (error) {
    console.log(err);
  }
}

async function updateAttachee (req, res){
  const {firstName, secondName, email, project, password} = req.body
  const id = req.params.id
  try {
    let pool = await mssql.connect(config)
    await pool.request()
    .input('firstName', mssql.VarChar, firstName)
    .input('secondName', mssql.VarChar, secondName)
    .input('email', mssql.VarChar, email)
    .input('project', mssql.VarChar, project)
    .input('password', mssql.VarChar, password)
    .query("UPDATE attachee SET firstName = @firstName, secondName = @secondName, email = @email, project = @project, password = @password")
    res.json("Attachee updated successfuly!")
  } catch (error) {
    console.log(err);
  }
}

async function deleteAttachee (req, res){
  const id = req.params.id
  try {
    let pool = await mssql.connect(config)
    let answ = await pool.request()
    .query("DELETE * from attachee where id = {id}")
    res.json("Attachee deleted successfully!")
  } catch (error) {
    console.log(err);
  }
}

module.exports = {getAttachees, getAttachee, insertAttachee, updateAttachee, deleteAttachee}

