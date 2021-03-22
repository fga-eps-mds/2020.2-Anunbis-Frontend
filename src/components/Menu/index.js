import React from 'react';
import './index.css'
import Name_Logo from "../../assets/Name_Logo.png";
import Input from '../Input';

export default function Menu() {
    const [teachers, setTeachers] = React.useState([{}])
    const [searchTxt, setSearch] = React.useState("")

    const onSubmit = (data) => {
        if(data.key === 'Enter' && data.target.value.trim().length > 0)
        setSearch(data.target.value.trim())}

    React.useEffect(() => {
        async function fetchData() {
          const url = process.env.REACT_APP_API_HOST + "/professor/" + searchTxt;
          const response = await fetch(url)
          const data = await response.json()
    
          setTeachers(data);
          
        }
        fetchData();
      }, [searchTxt]);
      console.log(teachers)

    return (
        <div className="Menu">
            <div className="Logo">
                <img src={Name_Logo} alt="logo"></img>
            </div>
                <Input type="text" placeholder="Informe o nome do professor" onkeydown={onSubmit}/>
            </div>
    );
}