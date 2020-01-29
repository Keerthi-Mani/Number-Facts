# Number-Facts

### Overview

We will create a vanilla JavaScript application using that fetches random facts on any number entered. We will use both XHR and the Fetch API to make requests to http://numbersapi.com.

<img width="505" alt="Screen Shot 2020-01-28 at 9 22 42 PM" src="https://user-images.githubusercontent.com/52920074/73323196-9c765000-4214-11ea-8995-f4b8efbd2109.png">

### Url Structure

Just hit http://numbersapi.com/number/type to get a plain text response, where

type is one of trivia, math, date, or year. Defaults to trivia if omitted.
number is
an integer, or
the keyword random, for which we will try to return a random available fact, or
a day of year in the form month/day (eg. 2/29, 1/09, 04/1), if type is date
ranges of numbers

```
http://numbersapi.com/42
⇒ 42 is the result given by Google and Bing for the query "the answer to life the universe and everything".

http://numbersapi.com/2/29/date
⇒ February 29 is the day in 1504 that Christopher Columbus uses his knowledge of a lunar eclipse to convince Native Americans to provide him with supplies.

http://numbersapi.com/random/year
⇒ 2013 is the year that China will attempt its first unmanned Moon landing.
```
