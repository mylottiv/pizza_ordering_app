const BaseModel = require('./BaseModel');

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
                    from: 'product.subcategory_id',
                    to: 'subcategory.id'
                }
            },
            fields: {
                relation: BaseModel.HasOneRelation,
                modelClass: Fields,
                join: {
                    from: 'product.fields_id',
                    to: 'fields.id'
                }
            },
            selectedChoices: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Choice,
                join: {
                    from: 'product.fields_id',
                    through: {
                        from: 'choice_set.fields_id',
                        to: 'choice_set.choice_id'
                    },
                    to: 'choice.id'
                }
            },
            selectedToppings: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Topping,
                join: {
                    from: 'product.fields_id',
                    through: {
                        from: 'topping_set.fields_id',
                        to: 'topping_set.topping_id'
                    },
                    to: 'topping.id'
                }
            }
        }
    };

    static modifiers = this.baseModifiers(Product.ref);
}

module.exports = Product;