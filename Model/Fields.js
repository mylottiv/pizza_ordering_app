const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

class Fields extends BaseModel {
    static tableName = 'fields';

    static get relationMappings() {
        const Product = require('./Product');
        const Choice = require('./Choice');
        const Topping = require('./Topping');

        return {
            products: {
                relation: BaseModel.HasManyRelation,
                modelClass: Product,
                join: {
                    from: `${tableNames.fields}.id`,
                    to: `${tableNames.product}.fields_id`
                }
            },
            selectedChoices: {
                relation: BaseModel.HasManyRelation,
                modelClass: Choice,
                join: {
                    from: `${tableNames.fields}.id`,
                    to: `${tableNames.choice}.fields_id`
                }
            },
            selectedToppings: {
                relation: BaseModel.HasManyRelation,
                modelClass: Topping,
                join: {
                    from: `${tableNames.fields}.id`,
                    to: `${tableNames.topping}.topping_id`
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Fields.ref);

}

module.exports = Fields;