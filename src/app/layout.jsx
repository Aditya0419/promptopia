import '@/app/globals.css'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className=" w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
                        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}

                    </div>
                </div>

                <main className="text-white z-5 relative">
                    {children}
                </main>

            </body>
        </html>
    )
}

export default RootLayout