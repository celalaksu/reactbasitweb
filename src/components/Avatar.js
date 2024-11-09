
import resim from "../logo.svg"

function Avatar({kisi, boyut}) {
    return (
        <img
            className="avatar"
            src={resim}
            alt={kisi.isim}
            width={boyut}
            height={boyut}
        />
    )
}
export default Avatar;