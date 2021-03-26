const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

class Product extends BaseModel {
    
    static tableName = 'product';

    static get relationMappings() {

        const SubCategory = require('./SubCategory');
        const Fields = require('./Fields');
        const Choice = require('./Choice');
        const Topping = require('./Topping');
        
        return {
            subcategory: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: SubCategory,
                join: {
                    from: `${tableNames.product}.subcategory_id`,
                    to: `${tableNames.subcategory}.id`
                }
            },
            fields: {
                relation: BaseModel.HasOneRelation,
                modelClass: Fields,
                join: {
                    from: `${tableNames.product}.fields_id`,
                    to: `${tableNames.fields}.id`
                }
            },
            selectedChoices: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Choice,
                join: {
                    from: `${tableNames.product}.fields_id`,
                    through: {
                        from: `${tableNames.choiceSet}.fields_id`,
                        to: `${tableNames.choiceSet}.choice_id`
                    },
                    to: `${tableNames.choice}.id`
                }
            },
            selectedToppings: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Topping,
                join: {
                    from: `${tableNames.product}.fields_id`,
                    through: {
                        from: `${tableNames.toppingSet}.fields_id`,
                        to: `${tableNames.toppingSet}.topping_id`
                    },
                    to: `${tableNames.topping}.id`
                }
            }
        }
    };

    static modifiers = this.baseModifiers(Product.ref, (ref) => {
        return {
            productListSelects(builder) {
                return builder.select(ref('id'), ref('name'), ref('description'))
            },
            productWizardSelects(builder) {
                return builder.select(ref('name'), ref('default_fields'))
            }
        };
    });
}

module.exports = Product;