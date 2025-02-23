import { checkOtp } from "../../services/Auth";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      console.log(response);
    }
    if (error) console.log(error.response.data.message);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره «{mobile}» راوارد کنید.</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
