// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodsOutlineSvg from '@ant-design/icons-svg/lib/asn/AirpodsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodsOutline: AirpodsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodsOutlineSvg}></AntdIcon>;
};

AirpodsOutline.displayName = 'AirpodsOutline';
AirpodsOutline.inheritAttrs = false;
export default AirpodsOutline;