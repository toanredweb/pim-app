import { TypeApiService, TypeItemModel } from 'aesirx-lib';

class TypeStore {
  async getList(filters) {
    try {
      const getListAPIService = new TypeApiService();
      const respondedData = await getListAPIService.getList(filters);
      return { error: false, response: respondedData };
    } catch (error) {
      return { error: true, response: error?.response?.data };
    }
  }

  async getListWithoutPagination() {
    try {
      const getListAPIService = new TypeApiService();
      const respondedData = await getListAPIService.getList({ 'list[limit]': 9999 });

      return { error: false, response: respondedData };
    } catch (error) {
      return { error: true, response: error?.response?.data };
    }
  }

  async getDetail(id) {
    if (!id) return { error: false, response: false };

    try {
      const results = true;

      if (results) {
        const getDetailInfoAPIService = new TypeApiService();

        const respondedData = await getDetailInfoAPIService.getDetail(id);

        return { error: false, response: respondedData };
      }
    } catch (error) {
      return { error: true, response: error?.response?.data };
    }
  }

  async create(createFieldData) {
    try {
      const convertedUpdateGeneralData =
        TypeItemModel.__transformItemToApiOfCreation(createFieldData);
      let resultOnSave;
      const createOrganizationApiService = new TypeApiService();

      // eslint-disable-next-line prefer-const
      resultOnSave = await createOrganizationApiService.create(convertedUpdateGeneralData);
      return { error: false, response: resultOnSave?.result };
    } catch (error) {
      return { error: true, response: error?.response?.data };
    }
  }

  async update(updateFieldData) {
    try {
      const convertedUpdateGeneralData =
        TypeItemModel.__transformItemToApiOfUpdation(updateFieldData);

      let resultOnSave;
      const updateOrganizationApiService = new TypeApiService();
      // eslint-disable-next-line prefer-const
      resultOnSave = await updateOrganizationApiService.update(convertedUpdateGeneralData);
      return { error: false, response: resultOnSave?.result };
    } catch (error) {
      return { error: true, response: error?.response?.data };
    }
  }

  async delete(arr) {
    try {
      const aesirxOrganizationApiService = new TypeApiService();
      const respondedData = await aesirxOrganizationApiService.delete(arr);
      return { error: false, response: respondedData };
    } catch (error) {
      return { error: true, response: error?.response?.data };
    }
  }
}

export { TypeStore };
