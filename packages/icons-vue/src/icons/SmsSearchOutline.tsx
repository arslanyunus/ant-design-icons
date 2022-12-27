// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/SmsSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsSearchOutline: SmsSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsSearchOutlineSvg}></AntdIcon>;
};

SmsSearchOutline.displayName = 'SmsSearchOutline';
SmsSearchOutline.inheritAttrs = false;
export default SmsSearchOutline;