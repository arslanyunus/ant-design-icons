// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortOutlineSvg from '@ant-design/icons-svg/lib/asn/SortOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortOutline: SortOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortOutlineSvg}></AntdIcon>;
};

SortOutline.displayName = 'SortOutline';
SortOutline.inheritAttrs = false;
export default SortOutline;