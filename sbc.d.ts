import { BlockDirection } from "./modules/primitives/block"

export type SBC = {
    blocks: {
        text: string
        asset?: string
        dir?: BlockDirection
        bg?: string
    }[]
    faq: [question: string, answer: string][]
    links: [title: string, url: string][]
}