// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpOutline: ArrowUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpOutlineSvg}></AntdIcon>;
};

ArrowUpOutline.displayName = 'ArrowUpOutline';
ArrowUpOutline.inheritAttrs = false;
export default ArrowUpOutline;