type Box = {
  id: string;
  name: string;
};

type BoxD = Box & {
  weight: string;
};

type Verify = (v: Response) => Response | never;
type Pick = <T extends keyof Box>(k: T) => (v: Box) => Box[T];
type Request_ = <T>(p: RequestInfo) => Promise<T | RequestError>;
type Ans = (v: BoxD[]) => void;
type AggregateR = { err: RequestError[]; success: BoxD[] };
type Aggregate = (v: Array<RequestError | BoxD>, r?: AggregateR) => AggregateR;

// --------------------------------------------------------------------
// テストするなら、fetchからむのでmockかな？ もしくは、fetchを引数にする

const url = "https://codegrid-drill-06.netlify.com";
const box = {
  fetch: () => request<Box[]>(`${url}/list.json`),
  fetchById: (id: BoxD["id"]) => request<BoxD>(`${url}/items/${id}.json`),
} as const;
const request: Request_ = <T>(p: RequestInfo) =>
  fetch(p) // このあたりのtestはmockかな
    .then(verify)
    .then<T>((v) => v.json())
    .catch((v) => v);

// --------------------------------------------------------------------
// 単体テストで良い

const put = console.log;
const verify: Verify = (v) => (v.ok ? v : RequestError.throwError(v));
const pick: Pick = (k) => (v) => v[k];
const ans: Ans = (v) =>
  v.forEach(({ name, weight }) => put(`${name}: ${weight}`));
const aggregate: Aggregate = (v, r = { err: [], success: [] }) =>
  v.reduce(
    (a, c) =>
      (RequestError.isInstanceof(c) ? a.err.push(c) : a.success.push(c)) ===
      undefined
        ? a
        : a,
    r,
  );
const yabai = (v: RequestError) => {
  put(v.message);
  put("箱さん...");
};

export class RequestError extends Error {
  private constructor(private response: Response) {
    super(`${response.status} for ${response.url}`);
    this.name = RequestError.name;
    this.response = response;
  }

  static isInstanceof(v: any): v is RequestError {
    return v instanceof Error && v?.name === RequestError.name;
  }

  static throwError(e: Response): never {
    throw new RequestError(e);
  }
}

// ---------------------------------------------------------------------------------------
// テスト時は、boxを渡せばテストしやそう。fetchを通したいならmock

/**
 * fetchが全て成功する前提 (闇)
 *
 * memo `.catch`すれば、道はひらけそう
 */
export const main = async (_box = box) => {
  // @ts-ignore
  // eslint-disable-next-line prettier/prettier
  // Promise.all((await _box.fetch()).map<Box[]>(pick('id')).map(_box.fetchById)).then<BoxD[]>(ans)
};

/**
 * async無し &&
 * fetchが全て成功する前提 (闇)
 *
 * memo `.catch`すれば、道はひらけそう
 */
export const main2 = (_box = box) => {
  // @ts-ignore
  // eslint-disable-next-line prettier/prettier
  // _box.fetch().then<Box[]>((v) => Promise.all(v.map(pick("id")).map(_box.fetchById))).then(ans);
};

/**
 * `yabai`を実装すればよさそう
 */
export const main3 = async (_box = box) => {
  const r = await _box.fetch();
  if (RequestError.isInstanceof(r)) {
    yabai(r);
    return;
  }

  Promise.all(r.map(pick("id")).map(_box.fetchById))
    .then(aggregate)
    // 以下手抜き
    .then((v) => (ans(v.success) !== undefined ? v : v))
    // 以下手抜き
    .then((v) => v.err.forEach(yabai));
};
