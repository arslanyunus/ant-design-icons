// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxNotifLinearSvg from '@ant-design/icons-svg/lib/asn/DirectboxNotifLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxNotifLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxNotifLinear: DirectboxNotifLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxNotifLinearSvg}></AntdIcon>;
};

DirectboxNotifLinear.displayName = 'DirectboxNotifLinear';
DirectboxNotifLinear.inheritAttrs = false;
export default DirectboxNotifLinear;