"""Example Container computing mean value and standard deviation."""

__version__ = '0.0.1'

from typing import List
from fastapi import FastAPI
from pydantic import BaseModel
import numpy

app = FastAPI(
    title='Example Container',
    docs_url='/documentation',
    redoc_url='/redoc',
    description='Example container computing mean value and standard deviation.',
    version=__version__
)


@app.get("/")
async def root():
    """Simply hello world."""
    return {"message": "Hello World"}


class RawData(BaseModel):
    """Example structure for raw data"""
    data: List[float] = [3.14, 2.72, 42, -1]


class Features(BaseModel):
    """Example structure for computed features"""
    mean: float
    std: float


@app.post('/example-feature-extration', response_model=Features)
async def feature_extraction(raw_data: RawData):
    """Compute the mean value and the standard deviation."""

    # compute features
    mean = numpy.mean(raw_data.data)
    std = numpy.std(raw_data.data)

    return Features(mean=mean, std=std)
