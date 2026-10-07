# Simulador Didáctico de Backpropagation - Perceptrón Multicapa

Simulador interactivo para visualizar paso a paso el algoritmo de Backpropagation en una red neuronal tipo Perceptrón Multicapa (MLP).

## Características

- Visualización paso a paso del Forward Pass, cálculo de error, Backpropagation y actualización de pesos
- Soporte para Sigmoide, Tanh y ReLU
- Ejemplos didácticos: Estándar (2-2-2) y XOR (2-2-1)
- Modificación manual de pesos, biases, tasa de aprendizaje y velocidad de entrenamiento
- Inspector en tiempo real (z, a, δ, gradientes)
- Curva de pérdida (MSE)
- Exportar/Importar configuración en JSON
- Compartir estado por URL
- Atajos de teclado (← →, Espacio)

## Demo

Desplegado en [Streamlit Cloud](https://streamlit.io/cloud).

## Uso local

```bash
pip install -r requirements.txt
streamlit run app.py
```

## Desarrollo

- `index.html`: Interfaz y lógica completa del simulador
- `app.py`: Wrapper para ejecutar en Streamlit
- `requirements.txt`: Dependencias

---

Hecho con fines educativos para el aprendizaje del algoritmo de Backpropagation.
