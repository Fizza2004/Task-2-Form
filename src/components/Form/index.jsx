import './index.scss'

export const Form = ({handleInputMessage, handleInputName,handleInputEmail,handleSubmit,inputName,inputEmail,inputMessage})=>{
  return(
    <form action="#"  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
            Name:
            <input type="text" id="name" value={inputName}  onChange={handleInputName} />
        </label>
      </div>
      
      <div>
        <label htmlFor="email">
          Email Adress:
            <input type="text" id="email" value={inputEmail} onChange={handleInputEmail} />
        </label>
      </div>
      
      <div>
        <label htmlFor="message">
          Message:
            <textarea type="text" id="message" value={inputMessage} onChange={handleInputMessage} />
        </label>
      </div>
      
      <div>
        <label htmlFor="submit">
            <input type="submit" id="submit" />
        </label>
      </div>
  </form>
  )

}