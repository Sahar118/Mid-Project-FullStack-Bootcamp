
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


export default function Update() {
    let navigate = useNavigate();
    const [newId, setNewId] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [grade, setGrade] = useState('');
    const [school, setSchool] = useState('');
    const [address, setAddress] = useState('');
    const [letters, setLetters] = useState('');
    const [vowels, setVowels] = useState('');
    const [dottiedWord, setDottiedWord] = useState('');
    const [unDottiedWord, setUnDottiedWord] = useState('');
    const [dottiedText, setDottiedText] = useState('');
    const [unDottiedText, setUnDottiedText] = useState('');
    const [unworthyWord, setUnworthyWord] = useState('');

    const sendDataToAPI = () => {
        axios.post('https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph', {
            newId,
            name,
            birthDate,
            grade,
            school,
            address,
            letters,
            vowels,
            dottiedWord,
            unDottiedWord,
            dottiedText,
            unDottiedText,
            unworthyWord
        }).then(() => {
            navigate.push('/concludingParagraph/saveParagraphs')
        })
        alert('Successfully updated')

    }
    useEffect(() => {
        setNewId(localStorage.getItem('newId'))
        setName(localStorage.getItem('name'))
        setBirthDate(localStorage.getItem('birthDate'));
        setGrade(localStorage.getItem('grade'));
        setSchool(localStorage.getItem('school'));
        setAddress(localStorage.getItem('address'))
        setLetters(localStorage.getItem('letters'))
        setVowels(localStorage.getItem('vowels'));
        setDottiedWord(localStorage.getItem('dottiedWord'));
        setUnDottiedWord(localStorage.getItem('unDottiedWord'));
        setDottiedText(localStorage.getItem('dottiedText'));
        setUnDottiedText(localStorage.getItem('unDottiedText'));
        setUnworthyWord(localStorage.getItem('unworthyWord'));

    }, [])

    return (
        <div>
            <Form>
                <h1> ?????????? ???????????? </h1>
                <Form.Field>
                    <label><span> ???? ??????????/?? </span></label>
                    <input
                        placeholder='???? ???????? ????????????'
                        value={name}
                        name='name'
                        required="?????? ????????"
                        onChange={(e) => setName(e.target.value)}

                    />
                </Form.Field>

                <Form.Field>
                    <label><span> ??.??</span></label>
                    <input
                        placeholder='??.??'
                        name="Id"
                        type='number'
                        required="?????? ????????"
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span>?????????? ???????? : </span></label>
                    <input
                        placeholder='?????????? ????????:'
                        name='birthDate'
                        type='date'
                        required="?????? ????????"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> ????????:</span></label>
                    <input
                        placeholder='????????'
                        name='grade'
                        value={grade}
                        required="?????? ????????"
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> ?????? ??????:</span></label>
                    <input
                        placeholder="?????? ??????"
                        name='school'
                        value={school}
                        required="?????? ????????"
                        onChange={(e) => setSchool(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> ??????????:</span></label>
                    <input
                        placeholder='??????????'
                        name='address'
                        value={address}
                        required="?????? ????????"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Field>


                <h1> ?????????? ???????????? ????????????</h1>
                <Form.Field>
                    <label><span> ?????????? ????????????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        value={letters}
                        placeholder=" ?????????? ???????????? "
                        name='letters'
                        onChange={(e) => setLetters(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> ?????????? ????????????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" ?????????? ???????????? "
                        name='vowels'
                        value={vowels}
                        onChange={(e) => setVowels(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> ?????????? ??????????????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" ?????????? ?????????????? "
                        name='dottiedWord'
                        value={dottiedWord}

                        onChange={(e) => setDottiedWord(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> ?????????? ???? ??????????????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" ?????????? ???? ?????????????? "
                        name='unDottiedWord'
                        value={unDottiedWord}

                        onChange={(e) => setUnDottiedWord(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> ???????? ??????????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        value={dottiedText}

                        placeholder=" ???????? ??????????"
                        name='dottiedText'
                        onChange={(e) => setDottiedText(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> ???????? ???? ??????????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder="???????? ???? ??????????  "
                        name='unDottiedText'
                        value={unDottiedText}

                        onChange={(e) => setUnDottiedText(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> ?????????? ??????</span></label>
                    <textarea
                        rows={5}
                        cols={80}
                        placeholder=" ?????????? ??????"
                        name='letters'
                        type='text'
                        value={unworthyWord}

                        onChange={(e) => setLetters(e.target.value)}
                    />
                </Form.Field>

                <Link to='/concludingParagraph/saveParagraphs'>
                    <Button color='brown' type='submit' onClick={sendDataToAPI}>????????</Button>
                </Link>
            </Form>


        </div>
    )
}