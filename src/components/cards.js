import React from "react";
import '../resources/cards.css'


const content ={ 
    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    buttonLabel: 'Click Here!',
    imageUrl: 'https://www.solidbackgrounds.com/images/2560x1600/2560x1600-dark-gray-solid-color-background.jpg'
}

const Cards = props => {
    return (
        <div className="card_container">
            <div className="row ">
                {/* card1 */}
                <div  className="col">
                    <div className="card">
                        <img src={content.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{content.title}</h5>
                            <p className="card-text">{content.description}</p>
                            <a href="#" className="btn btn-primary">{content.buttonLabel}</a>
                        </div>
                    </div>
                </div>

                 {/* card2 */}
                 <div  className="col">
                    <div className="card">
                        <img src={content.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{content.title}</h5>
                            <p className="card-text">{content.description}</p>
                            <a href="#" className="btn btn-primary">{content.buttonLabel}</a>
                        </div>
                    </div>
                </div>

                 {/* card3 */}
                 <div  className="col">
                    <div className="card">
                        <img src={content.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{content.title}</h5>
                            <p className="card-text">{content.description}</p>
                            <a href="#" className="btn btn-primary">{content.buttonLabel}</a>
                        </div>
                    </div>
                </div>

                 {/* card4 */}
                 <div  className="col">
                    <div className="card">
                        <img src={content.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{content.title}</h5>
                            <p className="card-text">{content.description}</p>
                            <a href="#" className="btn btn-primary">{content.buttonLabel}</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        

        );

};

export default Cards;