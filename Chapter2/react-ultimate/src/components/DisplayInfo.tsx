
type DisplayInfoProps = {
  name: string
  age: number
}

const DisplayInfo = ({name,age}: DisplayInfoProps) =>{
    return (
    <>
        <h5>Cảm ơn {name} với độ tuổi {age} đã đăng ký dịch vụ này</h5>
    </>
    )
}

export default DisplayInfo;