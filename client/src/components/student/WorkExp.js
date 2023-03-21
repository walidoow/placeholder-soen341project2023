import '../../styles/edit_student/WorkExp.css';
import React, { useState } from 'react';

function WorkExp() {
    const [showEdDiv, setShowEdDiv] = useState(true);

    const toggleDiv = () => { // toggle between static div and editable div
        setShowEdDiv(!showEdDiv);
    };

    const [formFields, setFormFields] = useState([
        {title: '', employer: '', fromDate: '', toDate: ''}
    ])
    
    const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value; // to add info to data array
    setFormFields(data); // to type in the box
    }

    const submit = (e) => {
    e.preventDefault(); // prevent the page from refreshing itself when remove button is clicked
    }

    const handleSave = (e) => {
        submit(e);
        toggleDiv();
    }

    const addFields = () => {
    let object = {
        title: '',
        employer: '',
        fromDate: '',
        toDate: ''
    }
    setFormFields([...formFields, object]) // iterate over formFields so that current object doesn't override previous object
    }

    const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
    }

    const editFields = () => {
    let x = document.getElementById('edDiv');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
    }

    return (
        <div className="App">
            {showEdDiv ? (
                <div className='show-static-work-exp-div'>
                    <table className='static-stud-prof-table'>
                        <tr>
                            <td><h2>Experience</h2> <hr /></td>
                            <td><button onClick={toggleDiv} className='btn'>Edit</button></td>
                        </tr>
                        <tr>
                            <th>Position</th>
                            <th>Company name</th>
                            <th>From (mm/yyyy)</th>
                            <th>To (mm/yyyy)</th>
                        </tr>
                        <tr>
                            <td>Software Developer</td>
                            <td>Google</td>
                            <td>05/2020</td>
                            <td>05/2022</td>
                        </tr>
                    </table>
                </div>
            ) : (
            <div className='show-edit-work-exp-div'>
            <table>
                <tr>
                    <td><h2>Experience</h2> <hr /></td>
                    <td><button onClick={editFields} className='btn'>Edit</button></td>
                </tr>
                <tr>
                    <td>
                        <div id='edDiv'>
                            <form onSubmit={submit}>
                                <button onClick={addFields} className='btn'>Add</button>
                                <button onClick={handleSave} className='btn'>Save</button>
                                <br />
                                {formFields.map((form, index) =>  {
                                return (
                                    <div key={index}>
                                        <input
                                            className='input-edit-stud-profile' 
                                            name='title'
                                            placeholder='Title'
                                            onChange={event => handleFormChange(event, index)}
                                            value={form.title}
                                        />
                                        <br />
                                        <input
                                            className='input-edit-stud-profile' 
                                            name='employer'
                                            placeholder='Company Name'
                                            onChange={event => handleFormChange(event, index)}
                                            value={form.employer}
                                        />
                                        <br />
                                        <input 
                                            className='input-edit-stud-profile' 
                                            name='fromDate'
                                            placeholder='From (mm/yyyy)'
                                            onChange={event => handleFormChange(event, index)}
                                            value={form.fromDate}
                                        />
                                        <br />
                                        <input 
                                            className='input-edit-stud-profile' 
                                            name='toDate'
                                            placeholder='To (mm/yyyy)'
                                            onChange={event => handleFormChange(event, index)}
                                            value={form.toDate}
                                        />
                                        <br />
                                        <button onClick={() => removeFields(index)} className='btn'>Remove</button>
                                    </div>
                                )
                                })}
                            </form>
                        </div>
                    </td>
                </tr>
            </table>
          </div>
            )}
        </div>
    );
}

export default WorkExp;