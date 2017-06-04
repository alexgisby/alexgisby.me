import Repository from '../../data/Repository';
import repoData from '../../../data/database';

export default class Project
{
    constructor(data) {
        this.title = data.title;
        this.type = data.type;
        this.dates = data.dates;
        this.description = data.description;
        this.tags = data.tags;
        this.externalLinks = data.external_links;

        // Handle icon:
        switch (data.type) {
            case 'work':
                this.icon = 'briefcase';
                break;

            default:
                this.icon = 'code';
                break;
        }

        // Handle tags:
        const repo = new Repository(repoData);
        this.tags = data.tags.map(tag => {
            console.log(tag);
            return repo.fetchTagByUrlKey(tag);
        });
    }
}
