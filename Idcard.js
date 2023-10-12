
import images from './images/photo.jpg'
export default function Idcard()
{
    return (
        <form>
<table align="center"  cellspacing="0">
<tr>
	<td align="center" style={{color:"red"}}><h2>KONERU LAKSHMAIAH EDUCATION FOUNDATION</h2></td>
</tr>
	<tr><td align="center" style={{color:"green"}}><h3>IDENTITY CARD</h3></td></tr>
<tr>
	<td align="center"><img src={photo} style={{height:"300px",witdh:"200px"}} /></td>
</tr>
<tr><br></br></tr>
<tr> <td align="center" style={{color:"blue"}}><b> STID : 30951 </b></td></tr>
<tr><td><br></br></td></tr>
<tr> <td align="center"><b> A NAGA GAYATHRI </b></td></tr>
<tr><td><br></br></td></tr>
<tr> <td align="center"><b> STUDENT </b></td></tr>

</table>
</form>
    )
}