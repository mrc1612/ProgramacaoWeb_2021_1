import React from 'react';
import './MultimediaScreen.scss';

export default function MultimediaScreen() {
    return (
        <div className="multimedia-container">
            <div className="content">
                <div id="youtube-item">
                    <iframe width="854"
                            height="480"
                            src="https://www.youtube.com/embed/Es8QSe48H3Y"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <hr/>
                <div className="mid-content">
                    <div id="video-item">
                        <video width="400" controls>
                            <source src="/media/sample-mp4-file.mp4" type="video/mp4"/>
                            Seu navegador não suporta a tag video.
                        </video>
                    </div>

                    <div id="audio-item">
                        <audio controls>
                            <source src="/media/file_example_MP3_700KB.mp3" type="audio/mp3"/>
                            Seu navegador não suporta a tag audio.
                        </audio>
                    </div>
                </div>
                <hr/>
                <div id="pdf-item">
                    <iframe title="PDF" src="/media/sample.pdf" width="800" height="500"/>
                </div>
            </div>
        </div>
    )
}