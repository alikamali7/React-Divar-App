import styles from "./DescriptionDetailsPage.module.css";

function DescriptionDetailsPage({ post }) {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.title}>
          <h1>{post.options.title}</h1>
          <p>{post.options.city}</p>
        </div>
        <p className={styles.danger}>زنگ خطر های قبل از معامله</p>
        <button>اطلاعات تماس</button>
        <div className={styles.warning}>
          <p>درخواست بیعانه، از نشانه های کلاهبرداری</p>
          <p>
            برای هر نوع پرداخت(بیعانه یا کل مبلغ )، از «پرداخت امن» استفاده کنید
          </p>
        </div>
        <div className={styles.info}>
          <div>
            <span>وضعیت</span>
            <span>در حد نو</span>
          </div>
          <div>
            <span>قیمت</span>
            <span>{post.amount} تومان</span>
          </div>
          <div>
            <span>مایل به معاوضه</span>
            <span>نیستم/هستم</span>
          </div>
          <div>
            <span>نوع کالا</span>
            <span>کفش، ...</span>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.description}>
          <h3>توضیحات</h3>
          <p>{post.options.content}</p>
        </div>
      </section>
    </div>
  );
}

export default DescriptionDetailsPage;
