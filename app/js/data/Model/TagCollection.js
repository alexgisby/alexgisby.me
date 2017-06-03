export default class TagCollection
{
    constructor(description)
    {
        this.tags = [];
        this.description = description;
    }

    getDescription() {
        return this.description.charAt(0).toUpperCase() + this.description.slice(1);
    }
}
