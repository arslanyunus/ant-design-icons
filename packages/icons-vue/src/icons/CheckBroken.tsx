// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckBrokenSvg from '@ant-design/icons-svg/lib/asn/CheckBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckBroken: CheckBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckBrokenSvg}></AntdIcon>;
};

CheckBroken.displayName = 'CheckBroken';
CheckBroken.inheritAttrs = false;
export default CheckBroken;