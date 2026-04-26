import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import OptionSelector from './OptionSelector';

const PostAdForm = () => {
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [furnishing, setFurnishing] = useState('');

  return (
    <div className="container mt-5 p-4 border rounded shadow-sm bg-white">
      <h1 className="text-center mb-4">POST YOUR AD</h1>

      <div className="mb-4">
        <h4>SELECTED CATEGORY aws ctaegory</h4>
        <p className="text-muted">Properties / For Sale: Houses & Apartments <a href="#">Change</a></p>
      </div>

      <hr />

      <div>
        <h4>INCLUDE SOME DETAILS</h4>
        <div className="mb-3">
          <label className="form-label fw-bold">Type *</label>
          <CategorySelector selectedType={propertyType} onSelect={setPropertyType} />
        </div>

        <OptionSelector label="BHK" options={['1', '2', '3', '4', '4+']} selected={bhk} onSelect={setBhk} />
        <OptionSelector label="Bathrooms" options={['1', '2', '3', '4', '4+']} selected={bathrooms} onSelect={setBathrooms} />
        <OptionSelector label="Furnishing" options={['Furnished', 'Semi-Furnished', 'Unfurnished']} selected={furnishing} onSelect={setFurnishing} />
      </div>
    </div>
  );
};

export default PostAdForm;
