import { ExpoConfig, ConfigContext } from '@expo/config'

type environments = 'develop'

const data: { [key in environments]: Partial<ExpoConfig> } = {
  develop: {
    name: 'github-actions-develop',
  },
}

const environments: environments[] = ['develop']

const configuration = ({ config }: ConfigContext): Partial<ExpoConfig> => {
  return {
    ...config,
    ...(data?.[`${process.env.ENVIRONMENT}` as environments] ?? {}),
    extra: {
      test: 'TEST',
    },
  }
}

export default configuration
