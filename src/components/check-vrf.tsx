'use client'

import React, { useState } from 'react'
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
import { SelectNetwork } from '@/components/select-network'
import { checks } from '@/lib/checks/vrf'
import { networks } from '@/config/networks'

type CheckReport = {
  name: string
  status: string // status: 'pass' | 'fail'
  details: string
}

export function CheckVRF() {
  const [requestTxHash, setRequestTxHash] = useState<string>('')
  const [networkId, setNetworkId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [report, setReport] = useState<CheckReport[]>([])

  const runChecks = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!requestTxHash || !networkId) {
      return
    }
    setLoading(true)
    const report = await Promise.all(
      checks.map(async (check) => {
        const result = await check.fn(requestTxHash, networks[networkId].rpcUrl)
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
          placeholder="Enter VRF Request Tx Hash"
          type="text"
          value={requestTxHash}
          onChange={(e) => setRequestTxHash(e.target.value)}
        />
        <SelectNetwork onChange={setNetworkId} />
        <Button type="submit" className="w-1/3" disabled={loading}>
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
