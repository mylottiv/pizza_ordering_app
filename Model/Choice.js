const BaseModel = require('./BaseModel');

class Choice extends BaseModel {
    static tableName = 'choice';

    static get relationMappings() {

        const Fields = require('./Fields');
        const Option = require('./Option');

        return {
            usedInFields: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Fields,
                join: {
                    from: 'choice.id',
                    through: {
                        from: 'choice_set.choice_id',
                        to: 'choice_set.fields_id'
                    },
                    to: 'fields.id'
                }
            },
            selectedOptions: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Option,
                join: {
                    from: 'choice.id',
                    through: {
                        from: 'option_set.choice_id',
                        to: 'option_set.option_id'
                    },
                    to: 'option.id'
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Choice.ref);

}

module.exports = Choice;