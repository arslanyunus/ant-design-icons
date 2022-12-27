// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MilkOutlineSvg from '@ant-design/icons-svg/lib/asn/MilkOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MilkOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MilkOutline: MilkOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MilkOutlineSvg}></AntdIcon>;
};

MilkOutline.displayName = 'MilkOutline';
MilkOutline.inheritAttrs = false;
export default MilkOutline;