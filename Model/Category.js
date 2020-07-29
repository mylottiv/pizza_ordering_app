const BaseModel = require('./BaseModel');

class Category extends BaseModel {
    static tableName = 'category'

    static get relationMappings()  {
        const SubCategory = require('./SubCategory');

        return {
            // menu: {
            //     relation: BaseModel.BelongsToOneRelation,
            //     modelClass: Menu,
            //     join: {
            //         from: 'category.menu_id',
            //         to: 'menu.id'
            //     }
            // }
            subcategories: {
                relation: BaseModel.HasManyRelation,
                modelClass: SubCategory,
                join: {
                    from: 'category.id',
                    to: 'subcategory.category_id'
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Category.ref);

};

module.exports = Category;