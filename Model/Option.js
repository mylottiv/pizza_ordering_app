const BaseModel = require('./BaseModel');
const tableNames = require('../constants/tablenames');

class Option extends BaseModel {

    static tableName = 'option';

    static get relationMappings() {
        const Choice = require('./Choice');

        return {
            usedInChoices: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Choice,
                join: {
                    from: `${tableNames.option}.id`,
                    through: {
                        from: `${tableNames.optionSet}.option_id`,
                        to: `${tableNames.optionSet}.choice_id`
                    },
                    to: `${tableNames.choice}.id`
                }
            }
        }
    };

    static modifiers = this.baseModifiers(Option.ref);

}

module.exports = Option;