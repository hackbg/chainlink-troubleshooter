import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { CheckUpkeep } from '@/components/check-upkeep'

export default function Page() {
  return (
    <>
      <section className="container relative space-y-6">
        <PageHeader className="pb-2">
          <PageHeaderHeading>Automation</PageHeaderHeading>
          <PageHeaderDescription>
            Find and resolve common issues with your Upkeep.
          </PageHeaderDescription>
        </PageHeader>
        <div className="w-full max-w-2xl px-4">
          <CheckUpkeep />
        </div>
      </section>
    </>
  )
}
