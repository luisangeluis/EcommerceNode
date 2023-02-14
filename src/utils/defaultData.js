//Models
const Companies = require('../models/company.model');
const CompanyType = require('../models/companyType.model');

const generateData = async () => {
  await CompanyType.bulkCreate([
    { id: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b', name: 'distribuidor' },
    { id: 'a6ad6dbb-1441-4a15-9b20-9717cd081ec5', name: 'mayorista' },
    { id: 'be5093b4-3c1a-4288-bc72-ca4f6411ffd8', name: 'usuario final' }
  ], { validate: true })

  await Companies.bulkCreate([
    {
      id: '94ba3d55-2801-4596-8e02-6e45d150964e', name: 'bimbo', constitutionDate: '2022-10-10',
      typeId: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b', comments: 'empresa 1'
    },
    {
      id: 'dade542d-7c6e-443a-b952-8f0249445772', name: 'pepsi', constitutionDate: '2023-05-05',
      typeId: 'a6ad6dbb-1441-4a15-9b20-9717cd081ec5', commments: 'empresa 2'
    },
    {
      id: '4a3da81c-2e60-4515-b610-2b8137bfa139', name: 'unefon', constitutionDate: '2020-10-01',
      typeId: 'be5093b4-3c1a-4288-bc72-ca4f6411ffd8', comments: 'empresa 3'
    },
    {
      id: '30cfb96b-2bd3-49a3-8ea6-c735bcb1c0c0', name: 'soriana', constitutionDate: '2000-01-01',
      typeId: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b', comments: 'empresa 4', isActive: false
    }
  ], { validate: true })
}

module.exports = generateData;


