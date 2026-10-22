import { CollectedData } from "../models/data";

export class DataServiceMock {
    getData(): Promise<CollectedData> {
        return Promise.resolve({
            locations: [],
            pictures: [],
            authors: [],
            works: [],
            legacies: [],
            lifeEvents: [],
        })
    }

    filterData(): CollectedData {
        return {
            locations: [],
            pictures: [],
            authors: [],
            works: [],
            legacies: [],
            lifeEvents: [],
        };
    }

    findAuthorById() {}
}
