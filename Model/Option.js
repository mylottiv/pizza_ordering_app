const BaseModel = require('./BaseModel');

class Option extends BaseModel {

    static tableName = 'option';

    static get relationMappings() {
        const Choice = require('./Choice');

        return {
            usedInChoices: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: Choice,
                join: {
                    from: 'option.id',
                    through: {
                        from: 'option_set.option_id',
                        to: 'option_set.choice_id'
                    },
                    to: 'choice.id'
                }
            }
        }
    };

    static modifiers = this.baseModifiers(Option.ref);

}

module.exports = Option;