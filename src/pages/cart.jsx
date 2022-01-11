import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"
import {
  table,
  wrap,
  totals,
  grandTotal,
  summary,
  checkoutButton,
  collapseColumn,
  labelColumn,
  imageHeader,
  productHeader,
  emptyStateContainer,
  emptyStateHeading,
  emptyStateLink,
  title,
} from "./cart.module.css"

export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <Layout>
      <div className={wrap}>
        {emptyCart ? (
          <div className={emptyStateContainer}>
            <h1 className={emptyStateHeading}>Shporta juaj është e thatë</h1>
            <p>
              Si duket ende nuk keni gjetur diçka që ju pëlqen. Këtu mund të shihni produktet më të kërkuara:
            </p>
            <Link to="/search?s=BEST_SELLING" className={emptyStateLink}>
              Shiko produktet në trend
            </Link>
          </div>
        ) : (
          <>
            <h1 className={title}>Shporta juaj</h1>
            <table className={table}>
              <thead>
                <tr>
                  <th className={imageHeader}>Foto</th>
                  <th className={productHeader}>Produkti</th>
                  <th className={collapseColumn}>Çmimi</th>
                  <th>Sasia</th>
                  <th className={[totals, collapseColumn].join(" ")}>Totali</th>
                </tr>
              </thead>
              <tbody>
                {checkout.lineItems.map((item) => (
                  <LineItem item={item} key={item.id} />
                ))}

                <tr className={summary}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Subtotali</td>
                  <td className={totals}>
                    {formatPrice(
                      checkout.subtotalPriceV2.currencyCode,
                      checkout.subtotalPriceV2.amount
                    )}
                  </td>
                </tr>
                <tr className={summary}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>TVSH</td>
                  <td className={totals}>
                    {formatPrice(
                      checkout.totalTaxV2.currencyCode,
                      checkout.totalTaxV2.amount
                    )}
                  </td>
                </tr>
                <tr className={summary}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Transporti</td>
                  <td className={totals}>Llogaritet në faqen tjetër</td>
                </tr>
                <tr className={grandTotal}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Çmimi total</td>
                  <td className={totals}>
                    {formatPrice(
                      checkout.totalPriceV2.currencyCode,
                      checkout.totalPriceV2.amount
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={checkoutButton}
            >
              Bleje produktin
            </button>
          </>
        )}
      </div>
    </Layout>
  )
}
