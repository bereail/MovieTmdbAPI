import React from "react";
import PropTypes from "prop-types";
//styles
import {Wrapper, Content} from './MovieInfoBar.styles';
//helpers
import { calcTime, convertMoney } from "../../helpers";

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.prototypes = {
        time: PropTypes.number,
        budget: PropTypes.number,
        revenue: PropTypes.number
};

export default MovieInfoBar;