// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneBoldSvg from '@ant-design/icons-svg/lib/asn/AirplaneBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneBold: AirplaneBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneBoldSvg}></AntdIcon>;
};

AirplaneBold.displayName = 'AirplaneBold';
AirplaneBold.inheritAttrs = false;
export default AirplaneBold;