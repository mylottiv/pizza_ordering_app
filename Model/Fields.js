const BaseModel = require('./BaseModel');

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
                    from: 'fields.id',
                    to: 'product.fields_id'
                }
            },
            selectedChoices: {
                relation: BaseModel.HasManyRelation,
                modelClass: Choice,
                join: {
                    from: 'fields.id',
                    to: 'choice.fields_id'
                }
            },
            selectedToppings: {
                relation: BaseModel.HasManyRelation,
                modelClass: Topping,
                join: {
                    from: 'fields.id',
                    to: 'topping.topping_id'
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Fields.ref);

}

module.exports = Fields;