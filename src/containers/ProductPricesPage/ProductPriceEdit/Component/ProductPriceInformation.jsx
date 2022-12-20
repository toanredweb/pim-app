import { FORM_FIELD_TYPE } from 'constants/FormFieldType';
import { PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY } from 'library/Constant/PimConstant';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { renderingGroupFieldHandler } from 'utils/form';
import Spinner from 'components/Spinner';
import PAGE_STATUS from 'constants/PageStatus';
import { observer } from 'mobx-react';
import { withProductPriceViewModel } from 'containers/ProductPricesPage/ProductPriceViewModel/ProductPriceViewModelContextProvider';

const ProductPriceInformation = observer(
  class ProductPriceInformation extends Component {
    constructor(props) {
      super(props);
      this.viewModel = this.props.viewModel.productPriceDetailViewModel;
    }

    async componentDidMount() {}

    render() {
      const { t, validator } = this.props;
      const generateFormSetting = [
        {
          fields: [
            {
              label: 'txt_debtor_code',
              key: 'debtor_code',
              type: FORM_FIELD_TYPE.INPUT,
              getValueSelected:
                this.viewModel.productPriceDetailViewModel.formPropsData[
                  PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS
                ]?.code,
              className: 'col-lg-12',
              placeholder: t('txt_type'),
              handleChange: (event) => {
                this.viewModel.handleFormPropsData(
                  [PIM_DEBTOR_GROUP_DETAIL_FIELD_KEY.CUSTOM_FIELDS],
                  { code: event.target.value }
                );
              },
            },
          ],
        },
      ];
      return (
        <div>
          {this.props.viewModel.productPriceDetailViewModel.formStatus === PAGE_STATUS.LOADING && (
            <Spinner className="spinner-overlay" />
          )}
          {Object.keys(generateFormSetting)
            .map((groupIndex) => {
              return [...Array(generateFormSetting[groupIndex])].map((group) => {
                return renderingGroupFieldHandler(group, validator);
              });
            })
            .reduce((arr, el) => {
              return arr.concat(el);
            }, [])}
        </div>
      );
    }
  }
);
export default withTranslation('common')(withProductPriceViewModel(ProductPriceInformation));
