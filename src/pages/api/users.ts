import { NextApiRequest, NextApiResponse } from "next"


export default (req: NextApiRequest, res: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Kauan Gouveia' },
        { id: 2, name: 'Beatriz Gouveia' },
        { id: 3, name: 'Rosana Gouveia' },
        { id: 4, name: 'Railda Gouveia' },
        { id: 5, name: 'Carlos Gouveia' }
    ]

    return res.json(users)
}