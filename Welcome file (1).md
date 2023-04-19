# What is a Method in js?

Методы JavaScript это действия, которые можно выполнить с объектами. Метод JavaScript это свойство, содержащее определение функции. Методы это функции, хранящиеся как свойства объекта.

***В чем разница между свойством и методом?***
Свойство - это пара «ключ: значение», где ключ - это строка, а значением может быть что угодно: число, строка, булево значение, массив или даже другой объект. **Если же значением ключа будет функция, то такое свойство будет называться методом**







# JAVA SCRIPT STRING METHOD.
*String length
*String slice()
*String substring()
*String substr()
*String replace()
*String replaceAll()
*String toUpperCase()
*String toLowerCase()
*String concat()
*String trim()
*String trimStart()
*String trimEnd()
*String padStart()
*String padEnd()
*String charAt()
*String charCodeAt()
*String split()
![Изображение](https://imgur.io/20FIxbB "Логотип Markdown")


**1. length() Method**
Он используется для подсчета количества символов в строке javascript.

**Пример**
`var str = "Hello Morioh";
var x = str.length;`
**Выход**
`// return
 12`

--------------

**2. toLocaleLowerCase()**
JavaScript toLocaleLowerCase() используется для преобразования строки в нижний регистр.
**Пример**
`var str = "Hello Morioh";
var res = str.toLocaleLowerCase();`
**Выход**
``// return
hello morioh``

-------
   



 



**3. toLocaleUpperCase() Method**
JavaScript toLocaleUpperCase() используется для преобразования строки в верхний регистр.
**Пример**
`var str = "Hello Morioh";
var res = str.toLocaleUpperCase();`
**Выход**
``// return
HELLO MORIOH``

-------
**4. Метод indexof()**
Метод indexof() возвращает первую позицию указанного значения в строке.

----------
**5. search() Method**

Метод javascript search() ищет в строке указанное значение и возвращает статус совпадения.

----------

**6. slice() Method**

Метод slice() удаляет части строки и возвращает извлеченные части в новую строку.
Используйте Start и End Ultimate, чтобы указать часть строки, которую вы хотите удалить.

-------

**7. substring() Method**
Метод Javascript substring() используется для удаления символов из одной строки между двумя указанными индексами и возврата новой подстроки.

-------

**8. substr() Method**
Строковый метод substr() начинается с символа в указанной позиции и возвращает указанное количество символов.

-------

**9. replace() Method**
Javascript replace() изменяет определенное значение на другое значение:

-----

**10. includes() Method**
Метод include() используется для определения того, содержит ли строка символы указанной строки или нет. Если существует, верните true или не верните false.

-----




-------
-------


# JavaScript Number      methods
**Math.floor()**
Статический Math.floor()метод всегда округляет в меньшую сторону и возвращает наибольшее целое число, меньшее или равное заданному числу

-------


**abs(x)**
	Returns the absolute value of x

------
**acos(x)**
	Returns the arccosine of x, in radians

----

**acosh(x)**
	Returns the hyperbolic arccosine of x 

------
**asin(x)**
	Returns the arcsine of x, in radians

-----
**asinh(x)**	
Returns the hyperbolic arcsine of x

-----
**atan(x)**
Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians

------
**JavaScript Number method isNaN()**
The isNaN() function checks if a value is NaN (Not-a-Number) or not.

-------
**Math.abs()**
Метод  **`Math.abs()`**  возвращает абсолютное значение числа. то есть

`Math.abs  (  x  )  =  |  x  |  =  {  xif  x  ≥  0-  xif  x  <  0`

Math.abs(x)

----------

 **Math.round()**
 
Метод **`Math.round()`** возвращает число, округлённое к ближайшему целому.
`// Вернёт значение 20
x = Math.round(20.49);'
`
