type CacheData = {
  data: any
  expiry: number
}

class SimpleCache {
  private cache: Map<string, CacheData> = new Map()
  private defaultTTL: number = 5 * 60 * 1000 // 5 minutes in milliseconds

  set(key: string, data: any, ttl: number = this.defaultTTL): void {
    const expiry = Date.now() + ttl
    this.cache.set(key, { data, expiry })
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key)

    if (!item) return null

    if (Date.now() > item.expiry) {
      this.cache.delete(key)
      return null
    }

    return item.data as T
  }

  invalidate(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }
}

// Create a singleton instance
const cache = new SimpleCache()

export default cache

