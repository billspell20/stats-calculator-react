import React from "react";
import sd from "./population_standard_deviation.svg";
import geomean from "./geomean.svg";
import sv from "./sample_variance.svg";
import pv from "./populationVariance.svg";
import ssd from "./ssd1.svg";

function Info() {
  return (
    <div id="info">
        <h2>Calculation Definitions:</h2>
        <h3>Mean</h3>
        <p>The sum of a list of numbers, divided by the number of elements in the list. Usually synonymous with 'average.'</p>
        <h3>Median</h3>
        <p>The "middle value" of a list. The smallest number such that at least half the numbers in the list are no greater than it. If the list has an odd number of entries, the median is the middle entry in the list after sorting the list into increasing order. If the list has an even number of entries, the median is average of the two middle numbers after sorting.</p>
        <h3>Sum</h3>
        <p>The total of a list of numbers, added together.</p>
        <h3>Mode</h3>
        <p>The mode is a most common (frequent) value. A list can have more than one mode.</p>
        <h3>Count</h3>
        <p>The total count of items in a list.</p>
        <h3>Minimum</h3>
        <p>The smallest value in the list.</p>
        <h3>Maximum</h3>
        <p>The largest value in the list.</p>
        <h3>Range</h3>
        <p>The range of a set of numbers is the largest value in the set (maximum) minus the smallest value in the set (minimum). Note that as a statistical term, the range is a single number, not a range of numbers.</p>
        <h3>Geometric Mean</h3>
        <p>The geometric mean of n numbers x1, x2, x3, …, xn is the nth root of their product: </p>
        <img src={geomean} alt="geomeanimg"/>
        <h3>Standard Deviation</h3>
        <p>The standard deviation of a set of numbers is the rms (root mean squared - the square-root of the mean of the squares of the elements in the list. It is a measure of the average "size" of the elements of the list. To compute the RMS of a list, you square all the entries, average the numbers you get, and take the square-root of that average.) of the set of deviations between each element of the set and the mean of the set:</p>
        <img src={sd} alt="sdimg"/>
        <h3>Variance</h3>
        <p>The variance of a list is the square of the standard deviation of the list, that is, the average of the squares of the deviations of the numbers in the list from their mean:</p>
        <img src={pv} alt="popvariance"/>
        <h3>Sample Standard Deviation</h3>
        <p>The sample standard deviation S is an estimator of the standard deviation of a population based on a random sample from the population. The sample standard deviation is a statistic that measures how "spread out" the sample is around the sample mean. It is quite similar to the standard deviation of the sample, but instead of averaging the squared deviations (to get the rms of the deviations of the data from the sample mean) it divides the sum of the squared deviations by (number of data − 1) before taking the square-root:</p>
        <img src={ssd} alt="samplestandarddeviation"/>
        <h3>Sample Variance</h3>
        <p>The sample variance is the square of the sample standard deviation S. It is an unbiased estimator of the square of the population standard deviation, which is also called the variance of the population:</p>
        <img src={sv} alt="samplevariance"/>
    </div>
  );
}

export default Info;