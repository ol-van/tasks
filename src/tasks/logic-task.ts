/**
 * Imagine you have an array of passengers,
 * your goal is to determine who is allowed to travel by plane based on the following conditions:
 *
 * 1. if a person is an adult (age 18 or more)
 * 2. if a person is a child whose age is in the range 14-17, and he has a representative person over 18 years old
 * 3. if a person has parents
 **/

interface Passenger {
  id: number;
  age: number;
  representativeId?: number;
  children?: number[];
}
