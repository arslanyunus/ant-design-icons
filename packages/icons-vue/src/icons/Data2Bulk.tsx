// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Data2BulkSvg from '@ant-design/icons-svg/lib/asn/Data2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Data2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Data2Bulk: Data2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Data2BulkSvg}></AntdIcon>;
};

Data2Bulk.displayName = 'Data2Bulk';
Data2Bulk.inheritAttrs = false;
export default Data2Bulk;