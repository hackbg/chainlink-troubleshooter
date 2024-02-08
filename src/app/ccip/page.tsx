import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { ClientOnly } from '@/components/client-only'
import { Connected } from '@/components/connected'
import { CheckCCIP } from '@/components/check-ccip'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Page() {
  return (
    <>
      <section className="container relative space-y-6">
        <PageHeader className="pb-2">
          <PageHeaderHeading>CCIP</PageHeaderHeading>
          <PageHeaderDescription>
            Find and resolve common issues with your CCIP requests.
          </PageHeaderDescription>
        </PageHeader>
        <div className="w-full max-w-2xl px-4">
          <ClientOnly>
            <Connected fallback={<ConnectButton />}>
              <CheckCCIP />
            </Connected>
          </ClientOnly>
        </div>
      </section>
    </>
  )
}
