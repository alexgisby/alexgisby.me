import TagCollection from './Model/TagCollection';
import Tag from './Model/Tag';

export default class Repository
{
    constructor(data) {
        this.database = data;
        console.log(this.database);
    }

    fetchTagsGroupedByType() {
        const allGroups = [];
        let tagMap = {};
        let tagMapIndex = 0;
        let collection;
        this.database.tags.map(data => {
            if (!tagMap.hasOwnProperty(data.type)) {
                tagMap[data.type] = tagMapIndex;
                allGroups[tagMapIndex] = new TagCollection(data.type);
                collection = allGroups[tagMapIndex];

                tagMapIndex ++;
            } else {
                collection = allGroups[tagMap[data.type]];
            }

            collection.tags.push(new Tag(data));
        });
        return allGroups;
    }

    fetchTagByUrlKey(urlKey) {
        for (let i = 0; i < this.database.tags.length; i ++) {
            let t = new Tag(this.database.tags[i]);
            console.log(t.getUrl());
            console.log(urlKey);
            if (t.getUrl() === '/tag/'+urlKey) {
                return t;
            }
        }
        return false;
    }
}
