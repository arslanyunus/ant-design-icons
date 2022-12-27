// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShipTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShipTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShipTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShipTwoTone: ShipTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipTwoToneSvg}></AntdIcon>;
};

ShipTwoTone.displayName = 'ShipTwoTone';
ShipTwoTone.inheritAttrs = false;
export default ShipTwoTone;