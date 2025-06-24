
// Esta es nuestra "base de datos" de rutinas predefinidas.

const ROUTINE_TEMPLATES = [
    // =========== OBJETIVO 1: BAJAR PORCENTAJE DE GRASA CORPORAL ===========
    {
        objective: "Bajar porcentaje grasa corporal",
        intensity: "Baja",
        name: "Circuito de Iniciación Quema Grasa",
        description: "Realizar como un circuito. Descansar 60-90 seg al final de cada ronda. Repetir 3 veces.",
        exercises: [
            { name: "Sentadillas con peso corporal", series: 3, reps: 15, rest: "0 seg", recommendations: "Mantén la espalda recta y baja hasta que tus muslos estén paralelos al suelo." },
            { name: "Flexiones sobre rodillas", series: 3, reps: "10-12", rest: "0 seg", recommendations: "Aprieta el abdomen y baja el pecho lo más cerca posible del suelo." },
            { name: "Zancadas alternas", series: 3, reps: "10 por pierna", rest: "0 seg", recommendations: "Da un paso largo y baja la rodilla trasera casi hasta el suelo. Mantén el torso erguido." },
            { name: "Plancha Frontal", series: 3, reps: "30-45 seg", rest: "0 seg", recommendations: "Mantén una línea recta desde la cabeza hasta los talones. No dejes caer la cadera." },
            { name: "Saltos de Tijera (Jumping Jacks)", series: 3, reps: "30 seg", rest: "60-90 seg", recommendations: "Úsalo como un 'cardio burst' para elevar el ritmo cardíaco." }
        ]
    },
    {
        objective: "Bajar porcentaje grasa corporal",
        intensity: "Moderado",
        name: "Plan de Fuerza Completo",
        description: "Este plan se divide en dos rutinas principales: Tren Superior e Inferior.",
        exercises: [
            { name: "Press de Banca con Mancuernas", series: 4, reps: "10-12", rest: "60 seg", recommendations: "Controla el movimiento en la bajada (fase excéntrica). RPE 7-8." },
            { name: "Remo con Barra", series: 4, reps: "10-12", rest: "60 seg", recommendations: "Inclina el torso a 45 grados y lleva la barra hacia la parte baja de tu abdomen." },
            { name: "Press Militar con Mancuernas", series: 3, reps: "10-12", rest: "60 seg", recommendations: "Sentado o de pie, empuja las mancuernas por encima de tu cabeza sin arquear la espalda." },
            { name: "Jalón al Pecho (Polea)", series: 3, reps: 12, rest: "45-60 seg", recommendations: "Concéntrate en usar los músculos de la espalda (dorsales) para jalar la barra." },
            { name: "Curl de Bíceps con Barra", series: 3, reps: 12, rest: "45 seg", recommendations: "Evita balancear el cuerpo. Mantén los codos pegados a los costados." },
            { name: "Extensiones de Tríceps en Polea", series: 3, reps: 12, rest: "45 seg", recommendations: "Mantén los codos fijos y extiende completamente los brazos." }
        ]
    },
    {
        objective: "Bajar porcentaje grasa corporal",
        intensity: "Intenso",
        name: "Día de Empuje (Push)",
        description: "Enfocado en Pecho, Hombros y Tríceps. Alta intensidad.",
        exercises: [
            { name: "Press de Banca con Barra", series: 4, reps: "8-10", rest: "90 seg", recommendations: "Utiliza un spotter si trabajas con cargas altas. RPE 8-9." },
            { name: "Press Inclinado con Mancuernas", series: 4, reps: 10, rest: "75 seg", recommendations: "Enfocado en la parte superior del pectoral. No dejes que las mancuernas choquen." },
            { name: "Press Militar de Pie con Barra", series: 3, reps: "8-10", rest: "75 seg", recommendations: "Aprieta glúteos y abdomen para estabilizar todo el cuerpo." },
            { name: "Elevaciones Laterales con Mancuernas", series: 4, reps: "12-15", rest: "60 seg", recommendations: "Levanta los brazos hasta la altura de los hombros, con una ligera flexión de codo." },
            { name: "Fondos en Paralelas (Dips)", series: 3, reps: "Al fallo", rest: "60 seg", recommendations: "Inclínate hacia adelante para enfocar el pecho; mantente vertical para enfocar tríceps." },
            { name: "Press Francés con Barra Z", series: 3, reps: "10-12", rest: "60 seg", recommendations: "Controla la bajada de la barra hacia tu frente sin mover los codos." }
        ]
    },

    // =========== OBJETIVO 2: GANAR MASA MUSCULAR (HIPERTROFIA) ===========
    {
        objective: "Ganar masa muscular",
        intensity: "Moderado",
        name: "Rutina de Torso",
        description: "Ideal para intermedios, enfocado en la hipertrofia del torso.",
        exercises: [
            { name: "Press de Banca con Barra", series: 4, reps: "8-10", rest: "90 seg", recommendations: "Concéntrate en la conexión mente-músculo con el pectoral. RPE 8." },
            { name: "Remo Pendlay", series: 4, reps: "8-10", rest: "90 seg", recommendations: "La barra parte del suelo en cada repetición. Explosivo en la subida." },
            { name: "Press Inclinado con Mancuernas", series: 3, reps: "10-12", rest: "75 seg", recommendations: "Un ángulo de 30-45 grados es ideal para el pectoral superior." },
            { name: "Dominadas (o Jalón al Pecho)", series: 3, reps: "8-12", rest: "75 seg", recommendations: "Si no llegas a 8 dominadas, hazlas asistidas o usa la polea." },
            { name: "Elevaciones Laterales", series: 4, reps: "12-15", rest: "60 seg", recommendations: "Controla el peso. Es un ejercicio de aislamiento, no de ego." },
            { name: "Curl con Barra Z", series: 3, reps: "10-12", rest: "60 seg", recommendations: "Contracción máxima en la subida, estiramiento completo." },
            { name: "Copa a dos manos (Tríceps)", series: 3, reps: "10-12", rest: "60 seg", recommendations: "Siente el estiramiento del tríceps al bajar la mancuerna." }
        ]
    },
    {
        objective: "Ganar masa muscular",
        intensity: "Intenso",
        name: "Rutina de Pierna Avanzada",
        description: "Enfocada en fuerza e hipertrofia para usuarios avanzados.",
        exercises: [
            { name: "Sentadilla Libre con Barra", series: 5, reps: "6-8", rest: "2-3 min", recommendations: "Enfócate en la fuerza. Usa un cinturón si manejas cargas muy altas. RPE 9." },
            { name: "Prensa de Piernas", series: 4, reps: "10-12", rest: "90 seg", recommendations: "Varía la posición de los pies para enfocar diferentes músculos." },
            { name: "Zancadas Búlgaras", series: 3, reps: "10 por pierna", rest: "75 seg", recommendations: "Ejercicio unilateral excelente para glúteos y cuádriceps." },
            { name: "Curl Femoral Tumbado", series: 4, reps: "12-15", rest: "60 seg", recommendations: "Aprieta fuerte en la contracción y controla la fase negativa." },
            { name: "Extensiones de Cuádriceps", series: 4, reps: "15-20", rest: "60 seg", recommendations: "Úsalo como 'finisher'. Aguanta 1 segundo en la contracción máxima." },
            { name: "Elevación de Gemelos sentado", series: 5, reps: "15-20", rest: "45 seg", recommendations: "Enfocado en el músculo sóleo. Rango de movimiento completo." }
        ]
    },

    // =========== OBJETIVO 3: AUMENTAR RESISTENCIA CARDIOVASCULAR ===========
    {
        objective: "Aumentar resistencia cardiovascular",
        intensity: "Moderado",
        name: "Entrenamiento de Intervalos Leves",
        description: "Ideal para realizar en cinta, elíptica o bicicleta.",
        exercises: [
            { name: "Calentamiento", series: 1, reps: "5-10 min", rest: "N/A", recommendations: "Aumenta gradualmente la intensidad hasta un trote muy suave." },
            { name: "Intervalo Rápido", series: 6, reps: "2 min", rest: "N/A", recommendations: "A un ritmo que te permita hablar con dificultad (RPE 7)." },
            { name: "Intervalo Lento (Recuperación)", series: 6, reps: "2 min", rest: "N/A", recommendations: "A un ritmo muy suave, que te permita recuperar el aliento (RPE 3-4)." },
            { name: "Enfriamiento", series: 1, reps: "5-10 min", rest: "N/A", recommendations: "Disminuye gradualmente la velocidad hasta caminar." }
        ]
    },
    {
        objective: "Aumentar resistencia cardiovascular",
        intensity: "Intenso",
        name: "HIIT en Pista de Atletismo",
        description: "Entrenamiento de alta intensidad por intervalos para máxima quema calórica.",
        exercises: [
            { name: "Calentamiento Dinámico", series: 1, reps: "10 min", rest: "N/A", recommendations: "Incluye trote ligero, movilidad articular y zancadas." },
            { name: "Sprints", series: 8, reps: "400 metros", rest: "90 seg", recommendations: "Corre a un ritmo alto y sostenible durante toda la distancia (RPE 8-9)." },
            { name: "Recuperación", series: 8, reps: "N/A", rest: "N/A", recommendations: "Camina o quédate parado durante los 90 segundos de descanso." },
            { name: "Enfriamiento", series: 1, reps: "10 min", rest: "N/A", recommendations: "Trote muy suave seguido de estiramientos estáticos para las piernas." }
        ]
    },

    // =========== OBJETIVO 4: AUMENTAR FUERZA ===========
    {
        objective: "Aumentar fuerza",
        intensity: "Moderado",
        name: "Entrenamiento de Fuerza 5x5 - Día A",
        description: "Basado en el principio 5x5 para ganancias de fuerza.",
        exercises: [
            { name: "Sentadilla con Barra", series: 5, reps: 5, rest: "2-3 min", recommendations: "Concéntrate en la profundidad y en una técnica perfecta." },
            { name: "Press de Banca con Barra", series: 5, reps: 5, rest: "2-3 min", recommendations: "Mantén los hombros retraídos y los pies firmes en el suelo. RPE 8-9." },
            { name: "Remo con Barra (Pendlay)", series: 5, reps: 5, rest: "2 min", recommendations: "Explosividad desde el suelo. La espalda debe mantenerse recta." },
            { name: "Fondos Asistidos (Opcional)", series: 2, reps: "8-10", rest: "60 seg", recommendations: "Como accesorio para pectoral y tríceps." },
            { name: "Plancha con peso (Opcional)", series: 3, reps: "45 seg", rest: "60 seg", recommendations: "Para fortalecer el core, crucial para levantamientos pesados." }
        ]
    },
    {
        objective: "Aumentar fuerza",
        intensity: "Intenso", 
        name: "Entrenamiento de Fuerza 5x5 - Día B",
        description: "La segunda parte del programa 5x5, alternando con el Día A.",
        exercises: [
            { name: "Sentadilla con Barra", series: 5, reps: 5, rest: "2-3 min", recommendations: "Intenta añadir 2.5kg (1.25kg por lado) respecto a la sesión anterior." },
            { name: "Press Militar de Pie", series: 5, reps: 5, rest: "2 min", recommendations: "El core debe estar muy tenso. Es un levantamiento de cuerpo completo." },
            { name: "Peso Muerto Convencional", series: 1, reps: 5, rest: "3-5 min", recommendations: "La única serie de trabajo. Haz series de calentamiento previas. Técnica impecable es la prioridad." },
            { name: "Dominadas con Lastre (Opcional)", series: 3, reps: "6-8", rest: "90 seg", recommendations: "Si puedes hacer más de 10-12 dominadas, añade peso." },
            { name: "Paseo del Granjero (Opcional)", series: 3, reps: "30 metros", rest: "90 seg", recommendations: "Excelente para la fuerza de agarre y la estabilidad del core." }
        ]
    },
];