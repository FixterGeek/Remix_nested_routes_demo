import { Outlet } from "@remix-run/react";

export default function Product() {
    return (
        <section className="rounded border-2 border-indigo-100 ml-2">
            <Outlet />
        </section>
    )
}