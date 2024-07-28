import React, { useState } from 'react';
import modify from '../../assets/dashboard/Rectangle 65.png';
import del from '../../assets/dashboard/Rectangle 64.png';
import arrow from '../../assets/dashboard/Polygon 2.svg'

import upload from '../../assets/dashboard/upload.png';
import './styles.css';

function Dashboard() {
  const defaultProducts = [
    {
      img: 'https://via.placeholder.com/50', // A placeholder image
      typeOfUnit: 'Apartment',
      typeOfPayment: 'Rent',
      typeOfaddress: '1234 Elm Street',
      sizeOfUnit: '1000 sq ft',
      Bedrooms: '2',
      Bathrooms: '1.5',
    },
    {
      img: 'https://via.placeholder.com/50', // Another placeholder image
      typeOfUnit: 'Condo',
      typeOfPayment: 'Sale',
      typeOfaddress: '5678 Oak Street',
      sizeOfUnit: '1200 sq ft',
      Bedrooms: '3',
      Bathrooms: '2',
    },
    {
      img: 'https://via.placeholder.com/50', // A third placeholder image
      typeOfUnit: 'House',
      typeOfPayment: 'Rent',
      typeOfaddress: '9101 Pine Street',
      sizeOfUnit: '1500 sq ft',
      Bedrooms: '4',
      Bathrooms: '3',
    },
  ];
  const imgUploaded = document.getElementById('imgUploaded');
  const [editIndex, setEditIndex] = useState(null);
  const [tableData, setTabelData] = useState(defaultProducts);
  const [dropdownVisibility,setDropdownVisibility] = useState(false) ;
  const [formData, setFormData] = useState({
    img: upload,
    typeOfUnit: '',
    typeOfPayment: '',
    typeOfaddress: '',
    sizeOfUnit: '',
    Bedrooms: '',
    Bathrooms: '',
  });

  const toggleDropdown = (index) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle only for the specific row
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          img: e.target.result,
        }));
      };
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update the existing row in tableData
      const updatedTableData = [...tableData];
      updatedTableData[editIndex] = formData; // Modify the existing row
      setTabelData(updatedTableData);
      setEditIndex(null); // Reset the edit index after editing
      console.log(tableData);
      console.log(formData);
    } else {
      // Add a new row to tableData
      setTabelData([...tableData, formData]);
    }

    // Reset the form after submission
    setFormData({
      img: upload,
      typeOfUnit: '',
      typeOfPayment: '',
      typeOfaddress: '',
      sizeOfUnit: '',
      Bedrooms: '',
      Bathrooms: '',
    });
  };
  const handleDeleteRow = (index) => {
    setTabelData((prevState) => prevState.filter((_, i) => i !== index));
  };
  const handleModifyRow = (index) => {
    setEditIndex(index); // Set the index of the row to edit
    setFormData(tableData[index]); // Load the data of the row into the form
  };
  return (
    <>
      <section className="dataEnterContainer">
        <div className="importImg">
          <label htmlFor="uploadImg" className="uploadlabel">
            <img id="imgUploaded" src={formData.img} alt="" />
            <span>Upload img</span>
          </label>

          <input type="file" name="img" className="uploadImg" id="uploadImg" onChange={handleFileChange} />
        </div>

        <form className="dashboardForm" onSubmit={handleSubmit}>
          <div className="rowOne">
            <label>Type of unit</label>
            <input required type="text" name="typeOfUnit" value={formData.typeOfUnit} onChange={handleInputChange} />
            <label>Type of payment</label>
            <input required type="text" name="typeOfPayment" value={formData.typeOfPayment} onChange={handleInputChange} />
            <label>Type of address</label>
            <input required type="text" name="typeOfaddress" value={formData.typeOfaddress} onChange={handleInputChange} />
          </div>

          <div className="rowTwo">
            <label>Size of unit</label>
            <input required type="text" name="sizeOfUnit" value={formData.sizeOfUnit} onChange={handleInputChange} />
            <label>Bedrooms</label>
            <input required type="text" name="Bedrooms" value={formData.Bedrooms} onChange={handleInputChange} />
            <label>Bathrooms</label>
            <input required type="text" name="Bathrooms" value={formData.Bathrooms} onChange={handleInputChange} />
          </div>

          <div className="rowThree">
            <label>More details</label>
            <textarea name="" id="moreDetails" cols="30" rows="10"></textarea>
            <input type="submit" value="Save unit" />
          </div>
        </form>
      </section>

      <section className="table-container">
        <table>
          <colgroup>
            <col style={{ width: '5%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '6%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '7%' }} />
            <col style={{ width: '6%' }} />
          </colgroup>

          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Type of unit</th>
              <th>Type of payment</th>
              <th>Address</th>
              <th>Size of unit</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Control</th>
            </tr>
          </thead>

          <tbody>

            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={item.img} alt="img" /></td>
                <td>{item.typeOfUnit}</td>
                <td>{item.typeOfPayment}</td>
                <td>{item.typeOfaddress}</td>
                <td>{item.sizeOfUnit}</td>
                <td>{item.Bedrooms}</td>
                <td>{item.Bathrooms}</td>
                <td>
                <div
                  className="controlList"
                  onClick={() => toggleDropdown(index)} // Toggle visibility for this specific row
                  style={{ cursor: 'pointer' }}
                >
                  Control list <img src={arrow} alt="Arrow" />
                </div>

                {dropdownVisibility[index] && (
                  <div className="dropdown">
                    <img
                      src={del}
                      alt="Delete"
                      onClick={() => handleDeleteRow(index)}
                    />
                    <img
                      src={modify}
                      alt="Modify"
                      onClick={() => handleModifyRow(index)}
                    />
                  </div>
                )}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Dashboard;
