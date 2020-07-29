const BaseModel = require('./BaseModel');

class SubCategory extends BaseModel {
    static tableName = 'subcategory';

    static get relationMappings() {
        const Category = require('./Category');
        const Product = require('./Product');
        const Fields = require('./Fields');

        return {
            category: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: 'subcategory.category_id',
                    to: 'category.id'
                }
            },
            products: {
                relation: BaseModel.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'subcategory.id',
                    to: 'product.subcategory_id'
                }
            },
            associatedFields: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Fields,
                join: {
                    from: 'subcategory.id',
                    through: {
                        from: 'product.subcategory_id',
                        to: 'product.fields_id'
                    },
                    to: 'fields.id'
                }
            }
        }
    }

    static modifiers = this.baseModifiers(SubCategory.ref);

}

module.exports = SubCategory;