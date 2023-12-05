import fastify, { FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

import { envToLogger } from './logger'
import { IConvertionQuery } from './interfaces'
import ytdl from 'ytdl-core'

const env = (process.env.NODE_ENV as 'production' | 'test') || 'development'
const server = fastify({ logger: envToLogger[env] ?? true })

server.register(cors, {
  origin: '*', // TODO: change
  credentials: true,
  optionsSuccessStatus: 200,
  exposedHeaders: '**',
})

server.addSchema({
  $id: 'convertion-query',
  type: 'object',
  required: ['url'],
  properties: { url: { type: 'string' } },
})

server.get(
  '/download',
  { schema: { querystring: { $ref: 'convertion-query#' } } },
  async (request: FastifyRequest<{ Querystring: IConvertionQuery }>, reply) => {
    try {
      const { url } = request.query

      const videoInfo = await ytdl.getInfo(url)
      const audioFormats = ytdl.filterFormats(videoInfo.formats, 'audioonly')

      // convertion
      return reply.code(200).send({ url: audioFormats.at(0)?.url })
    } catch (error) {
      server.log.error('Erro ao baixar o vídeo:', error)
      return reply.code(500).send({ error: 'Error while trying to download video' })
    }
  }
)

async function main() {
  await server.listen({ host: 'localhost', port: 8080 })
}

main()
