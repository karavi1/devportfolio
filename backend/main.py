from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import bloggen, seo

app = FastAPI(title="DevPortfolio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(bloggen.router, prefix="/bloggen", tags=["Blog Generator"])
app.include_router(seo.router, prefix="/seo", tags=["SEO Analyzer"])