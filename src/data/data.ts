interface ISchedule {
    dia: string
    start: string
    end: string
}

export const scheduleData: ISchedule[] = [
    {
        dia: 'Lunes',
        start: '07:00',
        end: '18:00'
    },
    {
        dia: 'Martes',
        start: '07:00',
        end: '18:00'
    }, {
        dia: 'Miercoles',
        start: '07:00',
        end: '18:00'
    }, {
        dia: 'Jueves',
        start: '07:00',
        end: '22:00'
    }, {
        dia: 'Viernes',
        start: '07:00',
        end: '22:00'
    }, {
        dia: 'Sabado',
        start: '07:00',
        end: '22:00'
    },
    {
        dia: 'Domingo',
        start: '',
        end: ''
    }
]

interface IProducts {
    title: string
    price: string
}

export const productsData: IProducts[] = [
    {
        title: 'Producto 01',
        price: '$50'
    }, {
        title: 'Producto 02',
        price: '$20'
    }, {
        title: 'Producto 03',
        price: '$34'
    }, {
        title: 'Producto 04',
        price: '$40'
    }
]