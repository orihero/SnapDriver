import io from 'socket.io-client';

class Socket {

    public socket: any;

    constructor() {
        this.socket = io.connect('http://snap.vroom.uz:6060')
    }

}

export default Socket;
