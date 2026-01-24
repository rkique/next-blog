SQLalchemy has 2 APIs, Core and ORM.

Core:
- connectivity
- database queries

ORM:
- allows Python classes to be mapped to db tables

SQLAlchemy applications start with an Engine. Use the API to connect and get a result. SQLAlchemy relies on a system of defining database schema constructs as Python objects. 

### The Engine 
> This object acts as a central source of connections to a particular database, providing both a factory as well as a holding space called a connection pool for these database connections.

This is a global object created once, and is configured using a URL string.
Guessing it is `db = SQLAlchemy()`. Then we also have `app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/new.db'`


In the tutorial, the URL string says `engine = create_engine("sqlite+pysqlite:///:memory:", echo=True, future=True)`

The `sqlite` tells SQLalchemy what kind of db we are connecting with. `pysqlite` is the DBAPI driver for a database (which can be omitted). Then we have `/:memory:` which is in memory only.

The create_engine seems to be a Core API thing and what the h&s tutorial uses is ORM. We have db.session.commit() and db.session.add() everywhere, where Session includes Engine.

There's something called textual SQL which is different than SQL expression language.

*The sole purpose of the Engine object is to provide a unit of connectivity to the database called the Connection*

In order to limit the scope of our use of the Connection object, we will use the "with" statement. 

```
from sqlalchemy import text
with engine.connect() as conn:
...     result = conn.execute(text("select 'hello world'"))
...     print(result.all())
```

```
BEGIN
select 'hello world'
()
[('hello world',)]
ROLLBACK
```
What does SELECT do here? It looks for a column of data called 'hello world' and finds nothing in it. Because nothing was committed we get ROLLBACK

### committing within "with block"
```	
with engine.connect() as conn:
	conn.execute(text("CREATE TABLE some_table (x int, y int)"))
	conn.execute(text("INSERT INTO some_table (x,y) VALUES (:x, :y)"), [{"x": 1, "y": 1}, {"x":2, "y": 4}])
	conn.commit()
```

I'm not familiar with the :x and :y notation but its probably just filler. We will see it further down the parametrization syntax.

We get

```
BEGIN
CREATE TABLE some_table (x int, y int)
INSERT INTO some_table (x,y) VALUES (?, ?)
((1,1), (2,4))
CursorResult
COMMIT
```

### committing with "begin"
with engine.begin() as conn:
	conn.execute(text("INSERT INTO some_table (x,y) VALUES (:x, :y)"), [{"x":6, "y": 8}, {"x": 9, "y": 10}])
	
We get

```
BEGIN
INSERT INTO some_table (x,y) VALUES (?, ?)
((6,8),(9,10))
CursorResult
COMMIT
```

The BEGIN(implicit) log line is SQLAlchemy providing us with a place to see where the DBAPI's transaction begins. It doesn't send any command to the database.

### fetch rows
There's no commit because this is a reading operation
```
with engine.connect() as conn:
		result = conn.execute(text("SELECT x,y FROM some_table"))
		for row in result:
				print(f"x: {row.x} y: {row.y}")
```
		
Ways to access rows:

```
for x, y in result:

for row in result:
	x = row[0]
	y = row[1]

for row in result:
	y = row.y

for dict_row in result.mappings():
	x = dict_row['x']
	y = dict_row['y']
```

```
with engine.connect() as conn:
	result = conn.execute(text("SELECT x, y FROM some_table WHERE y > :y"), {"y": 2})
	for row in result:
		print(f"x: {row.x} y: {row.y}")
		

