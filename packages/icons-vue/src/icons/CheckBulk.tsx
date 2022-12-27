// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckBulkSvg from '@ant-design/icons-svg/lib/asn/CheckBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckBulk: CheckBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckBulkSvg}></AntdIcon>;
};

CheckBulk.displayName = 'CheckBulk';
CheckBulk.inheritAttrs = false;
export default CheckBulk;