// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home1BulkSvg from '@ant-design/icons-svg/lib/asn/Home1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home1Bulk: Home1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home1BulkSvg}></AntdIcon>;
};

Home1Bulk.displayName = 'Home1Bulk';
Home1Bulk.inheritAttrs = false;
export default Home1Bulk;