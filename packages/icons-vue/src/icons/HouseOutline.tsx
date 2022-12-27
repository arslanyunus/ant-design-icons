// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HouseOutlineSvg from '@ant-design/icons-svg/lib/asn/HouseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HouseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HouseOutline: HouseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HouseOutlineSvg}></AntdIcon>;
};

HouseOutline.displayName = 'HouseOutline';
HouseOutline.inheritAttrs = false;
export default HouseOutline;