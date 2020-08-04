const Knex = require('knex');
const config = require('../knexfile');
const { Model } = require('objection');

const knexConnect = Knex(config['development']);

class BaseModel extends Model {
    static baseModifiers(scopeRef = BaseModel.ref, localModifiers = (ref) => {return {}}) {
        const modifiers = {
            selectName(builder) {
                builder.select(scopeRef('name'))
            },
            selectIdAndName(builder) {
                builder.select(scopeRef('id'), scopeRef('name'))
            }
        }
        return Object.assign(modifiers, localModifiers(scopeRef));
    }

    static modifiers = this.baseModifiers()
};

BaseModel.knex(knexConnect);

module.exports = BaseModel;