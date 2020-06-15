# Redux

状態管理に`Redux`を導入。  
`Next.js`との連携に`next-redux-wrapper`というパッケージを使用。

- [Redux](https://redux.js.org/)
- [Nextt.js with next-redux-wrapper](https://github.com/vercel/next.js/tree/canary/examples/with-redux-wrapper)

## store

`/app/store/index.ts`を親として置き  
各データはディレクトリを切って、 `action`,`reducer`を設置している。

store は、`/app/pages/_app.tsx`で wrap していて  
各コンポーネントにて  
`mapStateToProps`で`state`(値)の呼び出しを設定  
`mapDispatchToProps`で`dispatch`(挙動)の呼び出しを設定し  
`connect`に引数として渡すと、取り扱うことができる。

```
const mapStateToProps = state => ({
  price: state.stock.price,
  calc: state.stock.calc
})
```

```
const mapDispatchToProps = dispatch => {
  return {
    xxxXxx: bindActionCreators(xxxXxx, dispatch),
  };
};
```

```
export default connect(mapStateToProps, mapDispatchToProps)(Page);
```

### 項目の追加と編集

`store` の、株価情報に関わるグループ `stock`にある、カブ価の`price`は  
`/app/store/stock/reducer.ts`の`stockInitialState`で定義しています。

```
const stockInitialState = {
  price: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  calc: {},
};
```

`stock`配下で項目を追加するときは、ここに書き足します。
