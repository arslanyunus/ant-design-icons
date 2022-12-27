// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiamondsBrokenSvg from '@ant-design/icons-svg/lib/asn/DiamondsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiamondsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiamondsBroken: DiamondsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiamondsBrokenSvg}></AntdIcon>;
};

DiamondsBroken.displayName = 'DiamondsBroken';
DiamondsBroken.inheritAttrs = false;
export default DiamondsBroken;