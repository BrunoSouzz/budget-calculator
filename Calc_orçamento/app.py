from flask import Flask, render_template, request

app = Flask(__name__, template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    servico = request.form['servico']
    horas = float(request.form['horas'])
    preco_hora = float(request.form['preco_hora'])
    

    total = horas * preco_hora

    return render_template('index.html', total=total, servico=servico, horas=horas, preco_hora=preco_hora)

if __name__ == "__main__":
    app.run(debug=True)