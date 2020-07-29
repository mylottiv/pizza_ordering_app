const Knex = require('knex');
const config = require('../knexfile');
const { Model } = require('objection');

const knexConnect = Knex(config['development']);

class BaseModel extends Model {
    static baseModifiers(scopeRef = BaseModel.ref, localModifiers = {}) {
        const modifiers = {
            selectIdAndName(builder) {
                builder.select(scopeRef('id'), scopeRef('name'))
            }
        }
        return {...localModifiers, ...modifiers};
    }

    static modifiers = this.baseModifiers(BaseModel.ref)
};

BaseModel.knex(knexConnect);

module.exports = BaseModel;