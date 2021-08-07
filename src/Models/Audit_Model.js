const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AuditSchema = new schema(
    {
        ID:{
            type:String,
            required:true
        },
        Date:{
            type:Date,
            required:true
        }
    }
);

module.exports = mongoose.model('Audit',AuditSchema);