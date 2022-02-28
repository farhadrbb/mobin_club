import React, { useState } from 'react'

export default function Index() {

    const [state] = useState([
        'گواهی سهام تنها برای اسناد خزانه اسلامی و یا برگه سهامی که توسط خود ناشر (و نه شرکت سپرده گذاری) منتشر گردیده، الزامیمی باشد',
        `با ثبت درخواست تغییر کارگزار ناظر می توانید سهام خود را از سایر کارگزاری ها به کارگزاری مبین سرمایه بدون نیاز به فروش، انتقال دهید
       همچنین اگر برگه سهامی را از قبل به صورت فیزیکی در دست دارید می توانید آن را به پرتفوی بورسی خود اضافه نمایید
       توجه : در صورت "بدهکار بودن" در کارگزار مبدأ تغییر ناظر انجام نمی پذیرد`,
        `برای مشاهده تمامی سهام تحت مالکیت خود و دریافت برگه سهام این دارایی ها می توانید به " درگاه یکپارچه ذینفعان بازار سرمایه " مراجعه نمایید
        (آموزش ویدئویی) `,
    ])

    return (
        <div>
            {
                state.map((item, index) => {
                    return (
                        <div key={index} className={'shadow around-lg mt-3 p-5 w-100'}>
                            <p>
                                {item}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}