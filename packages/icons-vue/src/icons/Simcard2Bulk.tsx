// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard2BulkSvg from '@ant-design/icons-svg/lib/asn/Simcard2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard2Bulk: Simcard2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard2BulkSvg}></AntdIcon>;
};

Simcard2Bulk.displayName = 'Simcard2Bulk';
Simcard2Bulk.inheritAttrs = false;
export default Simcard2Bulk;