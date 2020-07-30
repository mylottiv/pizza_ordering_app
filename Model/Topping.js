const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

class Topping extends BaseModel {
    static tableName = 'topping';

    static get relationMappings() {

        const Fields = require('./Fields');
        const Ingredient = require('./Ingredient');

        return {
            usedInFields: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Fields,
                join: {
                    from: `${tableNames.topping}.id`,
                    through: {
                        from: `${tableNames.toppingSet}.topping_id`,
                        to: `${tableNames.toppingSet}.fields_id`
                    },
                    to: `${tableNames.fields}.id`
                }
            },
            selectedIngredients: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Ingredient,
                join: {
                    from: `${tableNames.topping}.id`,
                    through: {
                        from: `${tableNames.ingredientSet}.topping_id`,
                        to: `${tableNames.ingredientSet}.ingredient_id`
                    },
                    to: `${tableNames.ingredient}.id`
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Topping.ref);

};

module.exports = Topping;