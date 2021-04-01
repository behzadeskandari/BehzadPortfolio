import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="ERROR">
    <p>
      {statusCode
        ? `Could Not load Your User data : status Code ${statusCode} `
        : `coludn't Get That Page Sorry!`}
      Couldn't get That Page , Sorry!!
    </p>
  </Layout>
);