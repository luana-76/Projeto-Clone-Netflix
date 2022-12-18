class GetSet{

    constructor(){

        this.video = this.document.querySelector('video');

    }

    get getVideo(){

        return this.video;

    }

    set setVideo(mudVideo){

        this.video = mudVideo;

    }

}