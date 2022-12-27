// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard1BulkSvg from '@ant-design/icons-svg/lib/asn/Simcard1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard1Bulk: Simcard1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard1BulkSvg}></AntdIcon>;
};

Simcard1Bulk.displayName = 'Simcard1Bulk';
Simcard1Bulk.inheritAttrs = false;
export default Simcard1Bulk;