// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiamondsBoldSvg from '@ant-design/icons-svg/lib/asn/DiamondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiamondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiamondsBold: DiamondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiamondsBoldSvg}></AntdIcon>;
};

DiamondsBold.displayName = 'DiamondsBold';
DiamondsBold.inheritAttrs = false;
export default DiamondsBold;