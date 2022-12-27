// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManBulkSvg from '@ant-design/icons-svg/lib/asn/ManBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManBulk: ManBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManBulkSvg}></AntdIcon>;
};

ManBulk.displayName = 'ManBulk';
ManBulk.inheritAttrs = false;
export default ManBulk;