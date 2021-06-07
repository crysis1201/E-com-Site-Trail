import React from "react"
import MenuItem from "../menu-item/menu-item";
import "./Directory.scss"

class Directory extends React.Component {
    constructor() {
        super();

        this.state ={
            sections: [{
                title: "Hats",
                ImageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                id: 1
            },
            {
                title: "Jackets",
                ImageUrl: "https://i.ibb.co/cvpntL1/jackets.png",
                id: 2
            },
            {
                title: "sneakers",
                ImageUrl: "https://i.ibb.co/cvpntL1/sneakers.png",
                id: 3
            },
            {
                title: "mens",
                ImageUrl: "https://i.ibb.co/cvpntL1/mens.png",
                size: "large",
                id: 4,
                
            },
            {
                title: "womens",
                ImageUrl: "https://i.ibb.co/cvpntL1/womens.png",
                size: "large",
                id: 5,
                
            },        
        ]}

    }
    render() {
        return (
            <div className="directory-menu">
               { this.state.sections.map(sections => (
                   <MenuItem key={sections.id} title={sections.title} ImageUrl={sections.ImageUrl} size={sections.size}  />
               )) }
            </div>
        )
    }

}

export default Directory;