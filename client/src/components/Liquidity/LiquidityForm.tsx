import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import { liquiditySchema, uniswapSchema } from '@/validators/transactions';
import { GiCoinsPile } from "react-icons/gi";

export default function LiquidityForm() {

    //define form
    const depositForm = useForm<z.infer<typeof liquiditySchema>>({
        resolver: zodResolver(liquiditySchema),
        defaultValues: {
            amount: 0
        },
    })
    const withdrawalForm = useForm<z.infer<typeof liquiditySchema>>({
        resolver: zodResolver(liquiditySchema),
        defaultValues: {
            amount: 0
        },
    })

    const onDeposit = (values: z.infer<typeof liquiditySchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    const onWithdraw = (values: z.infer<typeof liquiditySchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Card className="w-full max-w-[400px] shadow-md">
            <CardHeader>
                <CardTitle className='text-center flex items-center justify-center gap-x-3'>
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-black">
                        <GiCoinsPile size={30} />
                    </div>
                    Liquidity Pool
                </CardTitle>
                <CardDescription className='text-center'>Contribute to liquidity pool</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='h-10 grid grid-cols-2 mb-4'>
                    <div className='border-r'>
                        <div className='h-[50%] flex justify-center items-center text-xs font-semibold text-muted-foreground'>
                            Total
                        </div>
                        <div className='h-[50%] flex justify-center items-center text-md font-semibold'>
                            1.1023
                        </div>
                    </div>
                    <div className=''>
                        <div className='h-[50%] flex justify-center items-center text-xs font-semibold text-muted-foreground'>
                            Share
                        </div>
                        <div className='h-[50%] flex justify-center items-center text-md font-semibold'>
                            1.1023
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <Form {...depositForm}>
                        <form onSubmit={depositForm.handleSubmit(onDeposit)} className="space-y-4">

                            <div className=''>
                                <FormField

                                    control={depositForm.control}
                                    name="amount"
                                    render={({ field }: { field: any }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="enter amount to deposit" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                        Gas fee will be charged on the selected token

                                    </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex w-full justify-end'>
                                <Button type="submit" className='w-full'>Deposit</Button>
                            </div>
                        </form>
                    </Form>


                    <Form {...withdrawalForm}>
                        <form onSubmit={withdrawalForm.handleSubmit(onWithdraw)} className="space-y-4">

                            <div className=''>
                                <FormField

                                    control={withdrawalForm.control}
                                    name="amount"
                                    render={({ field }: { field: any }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="enter amount to withdraw" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                        Gas fee will be charged on the selected token

                                    </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex w-full justify-end'>
                                <Button variant={'secondary'} type="submit" className='w-full'>Withdraw</Button>
                            </div>
                        </form>
                    </Form>
                </div>

            </CardContent>
        </Card>
    )
}