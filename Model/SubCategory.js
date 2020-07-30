const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

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
                    from: `${tableNames.subcategory}.category_id`,
                    to: `${tableNames.category}.id`
                }
            },
            products: {
                relation: BaseModel.HasManyRelation,
                modelClass: Product,
                join: {
                    from: `${tableNames.subcategory}.id`,
                    to: `${tableNames.product}.subcategory_id`
                }
            },
            associatedFields: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Fields,
                join: {
                    from: `${tableNames.subcategory}.id`,
                    through: {
                        from: `${tableNames.product}.subcategory_id`,
                        to: `${tableNames.product}.fields_id`
                    },
                    to: `${tableNames.fields}.id`
                }
            }
        }
    }

    static modifiers = this.baseModifiers(SubCategory.ref);

}

module.exports = SubCategory;