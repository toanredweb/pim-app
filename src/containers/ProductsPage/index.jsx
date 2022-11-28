// import PieChart from 'components/PieChartComponent';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import Table from 'components/Table';
import SelectComponent from 'components/Select';

const ProductsPage = observer(
  class ProductsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loading: false };
    }

    render() {
      const { t } = this.props;
      const columnsTable = [
        {
          Header: () => {
            return (
              <div className="ps-2">
                <input type="checkbox" />
              </div>
            );
          },
          width: 30,
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase',
          accessor: 'stickAll',
          Cell: () => {
            return (
              <div className="ps-2">
                <input className="opacity-50" type="checkbox" />
              </div>
            );
          },
        },
        {
          Header: 'Id',
          accessor: 'id',
          width: 60,
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase fw-semi',
          Cell: ({ value }) => {
            return <div className="opacity-80">{value}</div>;
          },
        },
        {
          Header: 'Product name',
          accessor: 'productInfo',
          width: 300,
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase fw-semi',
          Cell: ({ value }) => {
            return (
              <div className="d-flex align-items-center">
                <img width={64} src={value.image} alt={value.name} />
                <div className="ms-2">
                  <div className="mb-1">{value.name}</div>
                  <div className="text-green">
                    <button className="p-0 border-0 bg-transparent d-inline-block text-green">
                      Edit
                    </button>{' '}
                    |{' '}
                    <button className="p-0 border-0 bg-transparent d-inline-block text-green">
                      Duplicate
                    </button>
                  </div>
                </div>
              </div>
            );
          },
        },
        {
          Header: 'Categories',
          accessor: 'categories',
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase fw-semi',
          Cell: ({ value }) => {
            return <>{value}</>;
          },
        },
        {
          Header: 'Type',
          accessor: 'type',
          width: 100,
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase fw-semi',
          Cell: ({ value }) => {
            return (
              <div
                className={`text-uppercase fw-semi ${
                  value === 'indoor' ? 'text-success' : 'text-danger'
                }`}
                role={`alert`}
              >
                <span
                  className="d-inline-block p-1 rounded"
                  style={{
                    backgroundColor: `${
                      value === 'indoor' ? 'rgba(50, 177, 151, 0.15)' : 'rgba(239, 55, 55, 0.15)'
                    }`,
                  }}
                >
                  {value}
                </span>
              </div>
            );
          },
        },
        {
          Header: 'Author',
          accessor: 'author',
          width: 100,
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase fw-semi',
          Cell: ({ value }) => {
            return <>{value}</>;
          },
        },
        {
          Header: () => {
            return (
              <div className="text-center pe-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2831 7.27584L13.3323 6.411L10.6722 1.01803C10.5995 0.87037 10.48 0.750839 10.3323 0.678183C9.96199 0.49537 9.51199 0.647714 9.32684 1.01803L6.66668 6.411L0.715901 7.27584C0.551838 7.29928 0.401838 7.37662 0.286995 7.49381C0.148155 7.63651 0.0716479 7.8285 0.0742847 8.02758C0.0769216 8.22666 0.158487 8.41655 0.301057 8.55553L4.60653 12.7532L3.58934 18.6805C3.56549 18.8184 3.58074 18.9602 3.63338 19.0899C3.68602 19.2195 3.77394 19.3318 3.88716 19.4141C4.00038 19.4963 4.13437 19.5452 4.27395 19.5551C4.41352 19.5651 4.5531 19.5357 4.67684 19.4704L9.99949 16.6719L15.3222 19.4704C15.4675 19.5477 15.6362 19.5735 15.7979 19.5454C16.2057 19.4751 16.48 19.0883 16.4097 18.6805L15.3925 12.7532L19.6979 8.55553C19.8151 8.44068 19.8925 8.29068 19.9159 8.12662C19.9792 7.71646 19.6932 7.33678 19.2831 7.27584Z"
                    fill="#1AB394"
                  />
                </svg>
              </div>
            );
          },
          width: 50,
          accessor: 'featured',
          className: 'py-2 border-bottom-1 text-center',
          Cell: ({ value }) => (
            <div className="text-center pe-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2831 7.27584L13.3323 6.411L10.6722 1.01803C10.5995 0.87037 10.48 0.750839 10.3323 0.678183C9.96199 0.49537 9.51199 0.647714 9.32684 1.01803L6.66668 6.411L0.715901 7.27584C0.551838 7.29928 0.401838 7.37662 0.286995 7.49381C0.148155 7.63651 0.0716479 7.8285 0.0742847 8.02758C0.0769216 8.22666 0.158487 8.41655 0.301057 8.55553L4.60653 12.7532L3.58934 18.6805C3.56549 18.8184 3.58074 18.9602 3.63338 19.0899C3.68602 19.2195 3.77394 19.3318 3.88716 19.4141C4.00038 19.4963 4.13437 19.5452 4.27395 19.5551C4.41352 19.5651 4.5531 19.5357 4.67684 19.4704L9.99949 16.6719L15.3222 19.4704C15.4675 19.5477 15.6362 19.5735 15.7979 19.5454C16.2057 19.4751 16.48 19.0883 16.4097 18.6805L15.3925 12.7532L19.6979 8.55553C19.8151 8.44068 19.8925 8.29068 19.9159 8.12662C19.9792 7.71646 19.6932 7.33678 19.2831 7.27584Z"
                  fill={`${value ? '#1AB394' : 'transparent'}`}
                  stroke={`${value ? 'transparent' : '#C0C0C0'}`}
                />
              </svg>
            </div>
          ),
        },
        {
          Header: 'Last modified',
          accessor: 'lastModified',
          width: 150,
          className: 'py-2 opacity-50 border-bottom-1 text-uppercase fw-semi',
          Cell: ({ value }) => {
            return (
              <div className="pe-2">
                <div className="mb-1">{value.status}</div>
                <div>
                  {value.dateTime} by {value.author}
                </div>
              </div>
            );
          },
        },
      ];
      const dataTable = [
        {
          id: 1,
          productInfo: {
            name: 'Dining Chair With Arm',
            image:
              'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          },
          categories: 'Chair',
          author: 'karina Tr',
          featured: false,
          type: 'indoor',
          lastModified: {
            status: 'Published',
            dateTime: '11:05 AM',
            author: 'by me',
          },
        },
        {
          id: 2,
          productInfo: {
            name: 'Dining Chair With Arm',
            image:
              'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          },
          categories: 'Chair',
          author: 'karina Tr',
          featured: true,
          type: 'outdoor',
          lastModified: {
            status: 'Published',
            dateTime: '11:05 AM',
            author: 'by me',
          },
        },
      ];

      return (
        <div className="px-3 py-4">
          <h2 className="fw-bold mb-4">{t('txt_title_product_management')}</h2>
          <div className="d-flex gap-3 border-bottom mb-3">
            <button className='p-0 text-color border-0 bg-transparent fw-bold py-1 border-bottom border-3' href="#">All Products</button>
            <button className='p-0 text-color border-0 bg-transparent opacity-50' href="#">All Products</button>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
            <SelectComponent
              defaultValue={`test`}
              options={[{ label: 'Test', value: 'test' }]}
              className={`fs-sm`}
              isBorder={true}
              placeholder={`Bulk Actions`}
              arrowColor={'#222328'}
            />
            <div className="d-flex align-items-center">
              <div className="opacity-50 me-2">Showing</div>
              <SelectComponent
                defaultValue={`test`}
                options={[{ label: 'Test', value: 'test' }]}
                className={`fs-sm`}
                isBorder={true}
                placeholder={`Bulk Actions`}
                arrowColor={'#222328'}
              />
            </div>
          </div>
          <div className="bg-white rounded">
            <Table columns={columnsTable} data={dataTable}></Table>
          </div>
        </div>
      );
    }
  }
);

export default withTranslation('common')(ProductsPage);
