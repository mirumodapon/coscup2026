import type { Collections } from '@nuxt/content'

export default async function useLocaleContent(
  path: MaybeRefOrGetter<string>,
  locale: Ref<string>,
  defaultLocale: string,
) {
  const { data: content } = await useAsyncData(`page-${locale.value}-${toValue(path)}`, async () => {
    // Build collection name based on current locale
    const collection = (`content_${locale.value}`) as keyof Collections
    const content = await queryCollection(collection).path(toValue(path)).first()

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== defaultLocale) {
      const fallbackCollection = (`content_${defaultLocale}`) as keyof Collections
      return await queryCollection(fallbackCollection).path(toValue(path)).first()
    }

    return content
  }, {
    watch: [locale], // Refetch when locale changes
  })

  return content
}
