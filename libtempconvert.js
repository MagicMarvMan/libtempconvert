/*

  MIT License

  Copyright (c) 2019 Marvin Schopf

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/

function celsiusToFahrenheit(celsius) {
  return ((celsius * 1.8) + 32)
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) / 1.8)
}

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15)
}

function celsiusToKelvin(celsius) {
  return (celsius + 273.15)
}

function kelvinToFahrenheit(kelvin) {
  return (((kelvin - 273.15) * 1.8) + 32)
}

function fahrenheitToKelvin(fahrenheit) {
  return (((fahrenheit - 32) / 1.8) + 273.15)
}
