// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DevicesLinearSvg from '@ant-design/icons-svg/lib/asn/DevicesLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DevicesLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DevicesLinear: DevicesLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DevicesLinearSvg}></AntdIcon>;
};

DevicesLinear.displayName = 'DevicesLinear';
DevicesLinear.inheritAttrs = false;
export default DevicesLinear;