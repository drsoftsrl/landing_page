import ButtonMain from "@/components/common/buttonMain";

export default function PricingCard({ title, discount, unitPrice, total }) {
  return (
    <div className="card w-96 border border-primary shadow-xl">
      <div className="card-body gap-6">
        <span className="card-title justify-center text-2xl mb-10">{title}</span>

        <span className="text-center text-xl font-bold">Discount</span>
        <span className="text-center text-primary text-3xl">{discount}</span>

        <span className="text-center text-xl font-bold">Unit Price</span>
        <span className="text-center text-primary text-3xl">${unitPrice}</span>

        <span className="text-center text-xl font-bold">Total</span>
        <span className="text-center text-primary text-3xl">${total}</span>

        <div className="card-actions justify-center">
          <ButtonMain text="Buy Now" extraClass="mt-8 w-2/4" />
        </div>
      </div>
    </div>
  );
}
