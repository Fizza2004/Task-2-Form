import './index.scss';
export const Text = ({submittedData})=>{
  return(
    <div>
      <p><span> Name:</span> {submittedData.name}</p>
      <p><span> Email:</span> {submittedData.email}</p>
      <p><span>Message:</span>{submittedData.message}</p>
    </div>
  );
  
}