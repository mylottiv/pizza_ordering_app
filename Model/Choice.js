const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

class Choice extends BaseModel {
    static tableName = 'choice';

    static get relationMappings() {

        const Fields = require('./Fields');
        const Option = require('./Option');

        return {
            usedInFields: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Fields,
                join: {
                    from: `${tableNames.choice}.id`,
                    through: {
                        from: `${tableNames.choiceSet}.choice_id`,
                        to: `${tableNames.choiceSet}.fields_id`
                    },
                    to: `${tableNames.fields}.id`
                }
            },
            selectedOptions: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Option,
                join: {
                    from: `${tableNames.choice}.id`,
                    through: {
                        from: `${tableNames.optionSet}.choice_id`,
                        to: `${tableNames.optionSet}.option_id`
                    },
                    to: `${tableNames.option}.id`
                }
            }
        }
    }

    static modifiers = this.baseModifiers(Choice.ref);

}

module.exports = Choice;