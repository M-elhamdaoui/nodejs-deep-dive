function bufferToString(buffer){
	let res = "";
	for(const byte of buffer)
	{
		res += byte.toString(2).padStart(8,0) + " ";
	}
	return res;
}
 
module.exports = bufferToString;