const BaseModel = require('./BaseModel');

class Ingredient extends BaseModel {
    static tableName = 'ingredient';

    static get relationMappings() {
        const Topping = require('./Topping');

        return {
            usedInToppings: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Topping,
                join: {
                    from: 'ingredient.id',
                    through: {
                        from: 'option_set.ingredient_id',
                        to: 'option_set.topping_id'
                    },
                    to: 'topping.id'
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Ingredient.ref);

}

module.exports = Ingredient;