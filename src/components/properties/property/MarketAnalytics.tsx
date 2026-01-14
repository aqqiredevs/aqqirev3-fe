import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const MarketAnalytics = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between py-4">
        <h2 className="text-3xl font-bold">Market Analytics</h2>
        <Link href={"#"} className="text-primary">
          Click here to Access
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="border font-semibold p-4 rounded-md px-6">
          <p className="text-2xl">$99,999</p>
          <p className="text-gray-500">Asset Value</p>
        </div>

        <div className="border font-semibold p-4 rounded-md px-6">
          <p className="text-2xl">$99,999</p>
          <p className="text-gray-500">12 Month Sales Volume</p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <Table>
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>12 Month Sales Volume</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Lowest</TableHead>
                <TableHead>Highest</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Transactions</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Sales Volume</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Properties Sold</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Transacted SF</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Average SF</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="col-span-3">
          <Table>
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>12 Month Sales Volume</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Lowest</TableHead>
                <TableHead>Highest</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Transactions</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Sales Volume</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Properties Sold</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Transacted SF</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Average SF</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>$999</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalytics;
