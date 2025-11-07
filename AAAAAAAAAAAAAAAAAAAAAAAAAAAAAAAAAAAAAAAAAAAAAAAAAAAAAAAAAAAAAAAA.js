// ============================================
// PODSTAWY JAVASCRIPT - KLASA 1 TECHNIKUM
// ============================================

// 1. ZMIENNE - służą do przechowywania danych
// -------------------------------------------------------------------

// let - zmienna, kktórej wartość można zmienić
let imie = "Jan";

// const - stałą, której wartości NIE można zmienić
const nazwisko = "Kowalski";

//var - stary sposób (lepiej używać let i const)
var wiek - 16;

// 2. TYPY DANYCH
// ---------------------------------------------------------

// String - tekst (w cudzysłowie)
let miasto = "warszawa";

// number - liczba (bez cudzysłowu)
let liczba = 42;

// Boolean - prawda/fałsz
let czyUczen = true;

// 3. OPERACJE MATEMATYCZNE
// ----------------------------------------------------------

// Dodawanie
let suma = 10 + 5; // wynik: 15

// Odejmowanie
let roznica = 10 - 5; // wynik: 5

// Mnożenie
let iloczyn = 10 * 5; // wynik: 50

// Dzielenie
let iloraz = 10 / 5; // wynik: 2

// 4. WYŚWIETLANIE INFORMACJI
//----------------------------------------------------------------

// console.log() - wyświetla w konsoli przeglądarki (f12)
console.log("Witaj w konsoli!");
console.log("imię:", imie);
console.log("Suma:", suma);

// 5. FUNKCJE - bloki kodu, które można wielokrotnie używać
// -------------------------------------------------------------

// Funkcj bez parametrów
function powitanie() {
    // alert() - wyświetla okienko z komunikatem
    alert("Witaj w Swiecie JavaScript!");
}

// Funkcja z parametrami
function obliczSume(a, b) {
    // return - zwraca wynik z funkcji
    return a + b;
}

// Funkcja sprawdzająca wiek
function sprawdzWiek(wiek) {
    //if - instrukcja warunkowa (jeśli)
    if (wiek >=18) {
        return "Jesteś pełnoletni";
    } else {
        // else - przeciwnym wypadku
        return "Jesteś niepełnoletni";
    }
}

// 6. PĘTLA - powtarza kod określoną liczbę razy
// --------------------------------------------------------------

// Funkcja z pętlą for
function liczOdJednegoDoN(n) {
    // pusty string od przehowywania wyniku
    let wynik = "";

    // for - pętla: zaczyna od 1, kończy na n, zwiększa o 1
    for (let i = 1; i <= n; i++) {
        // += dodaje do istniejącego tekstu
        wynik += i + " ";
    }

    // Zwraca wynik
    return wynik;

}

// 7. INTERAKCJA Z HTML (DOM - Document Object Model

// Czekamy, aż cała strona się załaduje
document.addEventListener('DOMContentLoaded', () => {

    // querySelector() - znajduje element HTML po id
    const btnPowitanie = document.querySelector('#btnPowianie');
    const btnObliczenia = document.querySelector('#btnObliczenia');
    const btnwiek = document.queryselector('#btnWiek');
    const btnPetla = document.querySelector('#btnPetla');
    const divWynik = document.querySelector('#wynik');

    // addEventListener() - nasłuchuje na kliknięcie
    btnPowitanie.addEventListener('click', function() {
        // Zmienia zawartość html elementu
        divWynik.innerHTML = "<h3>Powitaice</h3><p>Witaj " + imie + " " + nazwisko + "</p>";+
    });

    // Obsługa przycisku obliczenia
    btnObliczenia.addEventListener('click', () => {
        //prompt() - wyświetla okienko do wpisania wartości
        let liczba1 = prompt("Podaj pierwszą liczbę:");
        let liczba2 = prompt("Podaj drugą liczbę");

        // parseInt() - zamienia tekt na liczbę całkowitą
        liczba1 = parseInt(liczba1);
        liczba2 = parseInt(liczba2);

        // wywołanie funkci obliczsume()
        let winikObliczen = obliczSume(liczba1, liczba2);

        //wyświetlenie wyniku
        divWynik.innerHTML = "<h3>Obliczenia</h3><p>" + liczba1 + " + " + liczba2 + " = "
        + winkObliczen + "</p>";
});

// ubsługa przycisku sprawdzenia wieku
btnwiek.addEventListener('click', function() {
    // pobieramy wiek od użytkownika
    let wiek€zytkownika = prompt("Ile masz lat?");

    // zamieniamy na liczbę
    wiekUzytkownika = parseInt(wiekUzytkownika);

    // wywołujemy funkcjęsprawdzWiek()
    let komunikat = sprawdzWiek(wiekUzytonika);

    // wyświetlamy wynik
    divWynik.innerHTML = "<h3>Sprawdzanie wieku</h3><p>Masz " + wiekUzytkownika +
    " lat. " + komunikat + ".</p>";
}):

// Obsługa przycisku z pętlą
btnPetla.addEventListener('click', function() {
    //pobieramy liczbę od użytkownika
    let ile = prompt("do jakiej liczby policzyć?")

    //Zamieniamy na liczbę
    ile = parseInt(ile):

    // wywołujemy funkcje z pętlą
    let liczby = liczOdJednegoDoN(ile);

    // wyświetlamy wynik




