import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

st.set_page_config(
    page_title="Simulador de Backpropagation - Perceptrón Multicapa",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed"
)

html_file = Path(__file__).parent / "index.html"
with open(html_file, "r", encoding="utf-8") as f:
    html_code = f.read()

components.html(html_code, height=950, scrolling=True)
