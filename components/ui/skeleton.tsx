import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-muted/50", className)} />
}

export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
        <Skeleton className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700" />
        <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
        <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
        <Skeleton className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700" />
        <div className="space-y-2 mt-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
        <Skeleton className="h-10 w-full mt-4 bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  )
}

export function SkeletonImage({ className }: SkeletonProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Skeleton className="absolute inset-0" />
    </div>
  )
}

export function SkeletonTeamMember() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <Skeleton className="h-80 w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex justify-center space-x-4 pt-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonTestimonial() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex mb-4 space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-5 w-5" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center">
        <Skeleton className="h-12 w-12 rounded-full mr-4" />
        <div>
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonPortfolioItem() {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-[3/2]">
      <Skeleton className="absolute inset-0" />
    </div>
  )
}

export function SkeletonHero() {
  return (
    <div className="py-20 md:py-28 bg-burgundy/20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-12 w-48" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-[300px] w-[300px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

