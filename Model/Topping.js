const BaseModel = require('./BaseModel');

class Topping extends BaseModel {
    static tableName = 'topping';

    static get relationMappings() {

        const Fields = require('./Fields');
        const Ingredient = require('./Ingredient');

        return {
            usedInFields: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Fields,
                join: {
                    from: 'topping.id',
                    through: {
                        from: 'topping_set.topping_id',
                        to: 'topping_set.fields_id'
                    },
                    to: 'fields.id'
                }
            },
            selectedIngredients: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Ingredient,
                join: {
                    from: 'topping.id',
                    through: {
                        from: 'ingredient_set.topping_id',
                        to: 'ingredient_set.ingredient_id'
                    },
                    to: 'ingredient.id'
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Topping.ref);

};

module.exports = Topping;