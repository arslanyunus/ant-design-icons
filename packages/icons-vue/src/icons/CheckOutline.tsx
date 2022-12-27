// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CheckOutlineSvg from '@ant-design/icons-svg/lib/asn/CheckOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CheckOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CheckOutline: CheckOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckOutlineSvg}></AntdIcon>;
};

CheckOutline.displayName = 'CheckOutline';
CheckOutline.inheritAttrs = false;
export default CheckOutline;