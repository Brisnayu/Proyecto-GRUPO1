import "./PlanTrip.css";

export const PlanTrip = () => {
  return `
    <article class="plantrip-container">

        <section class="plantrip-img">
            <img src="./src/assets/img/tresfotos.png" alt="tresfotos"> 
            
        </section>

        <section class="plantrip-info">

            <div class="plantrip-main">
                <h2>Plan your perfect trip</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi eos repellat, qui sapiente a? Odio impedit explicabo, ut voluptate eligendi voluptatem incidunt praesentium at. Et deserunt exercitationem aut repellat?</p>
            </div>

            <div class="plantrip-statistics">
            <div>
                <h3>150+</h3>
                <p>Flight Destinations</p>
            </div>

            <div>
                <h3>250+</h3>
                <p>Hotels</p>
            </div>

            <div>
                <h3>80</h3>
                <p>Elite Transportation</p>
            </div>

            <div>
                <h3>40+</h3>
                <p>We help to find your dream place</p>
            </div>

            </div>

        </section>
    </article>
    `;
};

export default PlanTrip;