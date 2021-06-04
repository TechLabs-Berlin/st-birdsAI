import pandas as pd

state = ['AP', 'TO', 'RR', 'AC', 'MT', 'PA', 'MA', 'AM', 'RO']
areakm = [14.846693, 207.443139, 2076.651661
, 2149.471324, 2434.997979, 4581.706136, 4881.302067
, 4965.805711, 8561.256673]
area_by_state = pd.DataFrame({'State': state, 'Area_km': areakm})

