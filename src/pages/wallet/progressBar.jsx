import './style.css'

const ProgressBar = ({ progress }) => {

    return (
        <>
            <div class="set-size charts-container">
                <div class="pie-wrapper progress-75 style-2">
                    <span class="label">$5,643,42</span>
                    <span class="label mt-5">Availble Balnce</span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                </div>


            </div>
        </>
    )
};
export default ProgressBar;