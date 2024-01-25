import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

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
          <div className="flex gap-4">
            <Input id="id" placeholder="Enter Upkeep ID" type="text" />
            <Button className='w-1/4'>Run Checks</Button>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Report</h2>
            <div className="mt-4 border rounded-lg w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Check Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Gas Limit</TableCell>
                    <TableCell className="text-green-500">Pass</TableCell>
                    <TableCell>No issues found</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Callback Function</TableCell>
                    <TableCell className="text-red-500">Fail</TableCell>
                    <TableCell>Function performUpkeep is reverting with error</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Balance</TableCell>
                    <TableCell className="text-green-500">Pass</TableCell>
                    <TableCell>No issues found</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
