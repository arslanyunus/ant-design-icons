// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckBoldSvg from '@ant-design/icons-svg/lib/asn/CheckBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckBold: CheckBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckBoldSvg}></AntdIcon>;
};

CheckBold.displayName = 'CheckBold';
CheckBold.inheritAttrs = false;
export default CheckBold;