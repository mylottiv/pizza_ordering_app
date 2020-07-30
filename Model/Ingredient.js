const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

class Ingredient extends BaseModel {
    static tableName = 'ingredient';

    static get relationMappings() {
        const Topping = require('./Topping');

        return {
            usedInToppings: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Topping,
                join: {
                    from: `${tableNames.ingredient}.id`,
                    through: {
                        from: `${tableNames.optionSet}.ingredient_id`,
                        to: `${tableNames.optionSet}.topping_id`
                    },
                    to: `${tableNames.topping}.id`
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Ingredient.ref);

}

module.exports = Ingredient;