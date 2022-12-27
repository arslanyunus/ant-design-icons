// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FatrowsOutlineSvg from '@ant-design/icons-svg/lib/asn/FatrowsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FatrowsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FatrowsOutline: FatrowsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FatrowsOutlineSvg}></AntdIcon>;
};

FatrowsOutline.displayName = 'FatrowsOutline';
FatrowsOutline.inheritAttrs = false;
export default FatrowsOutline;