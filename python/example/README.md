# Python Example Container
An example Container computing mean value and standard deviation.

## Build
```sh
$ docker build . -t examplecontainerpython
```

## Run
```sh
$ docker run -p 8080:8080 examplecontainerpython
```

## Test
```sh
$ curl -X POST http://localhost:8080/example-feature-extration \
    -H "Content-Type: application/json" \
    -d '{
                "data": [
                    3.14,
                    2.72,
                    42,
                    -1
                ]
    }'
```
returns
```
{
    "mean": 11.715,
    "std": 17.5591365106602
}
```

## Documentation
* http://localhost:8080/redoc
* http://localhost:8080/documentation

## Development
* Add required python modules to **requirements.txt**
* Add new modules to **src**
* Import modules to **main.py**
