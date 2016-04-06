# Meteor UUID `v.0.1.0`

UUID is a package created for adding a UUID (Universal Unique Identifier) on the fly. 

---


## Installation

*From the command line run the following code.*

```sh
$ meteor add rwatts:uuid
```

## Explanation of Use
There are often times when you simply want to create a unique id without using the mongo `_:id`. 

Situations where you want to have a unique ID for coding or session purposes on the client, 
but do not want to expose the mongo `_:id`

The UUID can also be stored and used as a foreign key for those whom are familiar with `sql` type databases.

The `uuid.new()` method is a 128-bit hash that returns a possibility of 340 *undecillion* combinations.

## Quick API
In your js file call the `uuid.new()` method to generate a UUID.

>To review the api visit the **[docs](https://github.com/rwatts3/meteor-packages/tree/master/uuid/docs)** directory and review the **api.md** file.

## Quick Example

**Generating a new UUID**
```js
var customerID = uuid.new();
```

**Checking the new UUID**
```js
var customerID = uuid.new();
console.log(customerID);
```

## Latest Updates
Version 0.1.0 Introduces a new method `uuid.tiny()`. 
This method generates a 4 character UUID with the possibility of 1.6 **million** combinations .


>For more information on advanced usage visit the repository , and review the **[docs](https://github.com/rwatts3/meteor-packages/tree/master/uuid/docs)** directory.
