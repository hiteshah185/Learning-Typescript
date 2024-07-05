interface Hike {
    name: string;
    distance: number; //in kilometer
    elevationGain: number; //in meters
    pace: number; //in minutes per kilometer
    restTime: number; //in minutes
    location: string;
  }
  
  interface Hiker {
    calculateHikeTime(hike: Hike): number;
    calculateCaloriesBurned(hike: Hike, weight: number);
  }
  
  class Person implements Hiker {
    hike: Hike;
    calculateHikeTime(hike: Hike): number {
      const distanceInMeters = hike.distance * 1000;
      const elevationInMeters = hike.elevationGain;
      const paceInMinutesInMeter = hike.pace / 1000;
      const restTimeInMinutes = hike.restTime;
  
      const totalElevationTime = elevationInMeters / paceInMinutesInMeter;
      const totalDistanceTime = distanceInMeters / paceInMinutesInMeter;
      const totalTime =
        totalDistanceTime + totalElevationTime + restTimeInMinutes;
      return totalTime;
    }
  
    calculateCaloriesBurned(hike: Hike, weight: number) {
      const distanceInKilometers = hike.distance;
      const elevationGainInMeters = hike.elevationGain;
      const weightInKilograms = weight / 2.20462;
  
      const caloriesPerKilometer = 1.5783 + 1.0377 * weightInKilograms;
      const caloriesPerMeter = 1.5783 + (1.0377 * weightInKilograms) / 1000;
  
      const totalCaloriesFromDistance =
        distanceInKilometers * caloriesPerKilometer;
      const totalCaloriesFromElevation = elevationGainInMeters * caloriesPerMeter;
      const totalCalories =
        totalCaloriesFromDistance + totalCaloriesFromElevation;
      return totalCalories;
    }
  }
  
  let roopkundTrek: Hike = {
    name: "Roopkund Lake Trek",
    distance: 22,
    elevationGain: 1700,
    pace: 7,
    restTime: 45,
    location: "Indian Himalayas",
  };
  
  let Customer: Person = new Person();
  let weight: number = 65;
  let hikeTime = Customer.calculateCaloriesBurned(roopkundTrek, weight);
  let caloriesBurned = Customer.calculateHikeTime(roopkundTrek);
  
  console.log(`**${roopkundTrek.name}**`);
  console.log(`Location: ${roopkundTrek.location}`);
  console.log(`Hike time: ${hikeTime} minutes`);
  console.log(`Calories burned: ${caloriesBurned} calories`);
  