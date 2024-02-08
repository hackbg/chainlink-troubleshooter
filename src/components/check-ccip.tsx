'use client'

import React, { useState } from 'react'
import { useNetwork } from 'wagmi'
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
import { checks } from '@/lib/checks/ccip'

type CheckReport = {
  name: string
  status: string // status: 'pass' | 'fail'
  details: string
}

export function CheckCCIP() {
  const { chain } = useNetwork()
  const [requestTxHash, setRequestTxHash] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [report, setReport] = useState<CheckReport[]>([])

  const runChecks = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!requestTxHash) {
      return
    }
    setLoading(true)
    const report = await Promise.all(
      checks.map(async (check) => {
        const result = await check.fn(
          requestTxHash,
          chain?.rpcUrls.default.http[0],
        )
        return { ...result, name: check.name }
      }),
    )
    setReport(report)
    setLoading(false)
  }

  return (
    <>
      <form className="flex gap-4" onSubmit={runChecks}>
        <Input
          id="id"
          placeholder="Enter CCIP Request Tx Hash"
          type="text"
          value={requestTxHash}
          onChange={(e) => setRequestTxHash(e.target.value)}
        />
        <Button type="submit" className="w-1/4" disabled={loading}>
          {loading ? 'Running...' : 'Run Checks'}
        </Button>
      </form>
      {report.length > 0 && (
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
                {report.map((check) => (
                  <TableRow key={check.name}>
                    <TableCell className="font-medium">{check.name}</TableCell>
                    <TableCell
                      className={
                        check.status === 'Pass'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }
                    >
                      {check.status}
                    </TableCell>
                    <TableCell>{check.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  )
}
