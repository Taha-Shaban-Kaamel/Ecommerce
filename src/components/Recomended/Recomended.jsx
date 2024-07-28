import React ,{useState} from 'react';
import './styles.css'; // Import your CSS styles
import topAreaImg from './../../assets/topArea/toparea.svg'
import AdviceImg from './../../assets/adviceForm/sideImg.svg'

const Recomended = () => {
  return (
    <div className='recomended'>


        <div className="section1">
          <div>
            <h2>Find Your New Home</h2>
            <h5>We can help you find your new home with the most reasonable price.</h5>
          </div>

          <form className="form1">
            <div>
              <label className="label-form1">Choose City:</label>
              <input type="text" placeholder="Choose..." className="input1" />
            </div>
            <div>
              <label className="label-form1">Bedrooms:</label>
              <input type="text" placeholder="3 Rooms..." className="input2" />
            </div>
            <div>
              <label className="label-form1">Price:</label>
              <input type="text" placeholder="3M..." className="input3" />
            </div>
            <div>
              <input type="submit" value="Search" className="input-search" />
            </div>
          </form>
        </div>

        <div className="section3">
          <h1>Top Areas</h1>
          <div className="topArea">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="area" key={index}>
                <img
                  src={topAreaImg}
                  alt="Area Image"
                />
                <h3>New Cairo</h3>
                <h6>155 Compounds</h6>
                <h6>1522 Properties Available</h6>
              </div>
            ))}
          </div>
        </div>

        <div className="section4">
          <img src={AdviceImg} alt="Advice Img" />
          <div className="form-img">
          <h1>Need Expert Advice?</h1>
            <div>
              <form className="form2">
                <label className="label-form2">Name:</label>
                <input type="text" className="input-form2" />

                <label className="label-form2">Phone:</label>
                <input type="text" className="input-form2" />

                <label className="label-form2">Email:</label>
                <input type="email" className="input-form2" />

                <label className="label-form2">Content:</label>
                <input type="text" className="content-form2" />

                <input type="submit" value="Send Advice" className="advice" />
              </form>
            </div>
          </div>
        </div>


    </div>
  );
};

export default Recomended;
