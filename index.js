window.oRTCPeerConnection = 
    window.oRTCPeerConnection || window.RTCPeerConnection

window.RTCPeerConnection = function (...args) {
    const pc = new window.oRTCPeerConnection(...args)

    pc.oaddIceCandidate = pc.addIceCandidate;
    pc.addIceCandidate = function(iceCandidate, ...rest) {
        const fields = iceCandidate.candidate.split(" ");
        const ip = fields[4]
        console.log(ip)
        return pc.oaddIceCandidate(iceCandidate, ...rest);
    };
    return pc;
}