function analyzeCarMileage(arr) {
  const totalMileage = arr.reduce((mileage, car) => mileage + car.mileage, 0);
  const averageMileage = parseFloat((totalMileage / arr.length).toFixed(2));
  let highestMileage;
  let highestMileageCar;
  let lowestMileage;
  let lowestMileageCar;
  // const highestMileageCar = cars.reduce((highest, car) => (car.mileage > highest.mileage) ? car : highest), cars[0]);
  // const lowestMileageCar = cars.reduce((lowest, car) => (car.mileage < lowest.mileage) ? car : lowest), cars[0]);

  arr.forEach((car) => {
    if (car.mileage > highestMileage) {
      highestMileage = car.mileage;
      highestMileageCar = car;
    } else if (car.mileage < lowestMileage) {
      lowestMileage = car.mileage;
      lowestMileageCar = car;
    }
  });

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
