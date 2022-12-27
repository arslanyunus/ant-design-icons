// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowOutline: ArrowOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowOutlineSvg}></AntdIcon>;
};

ArrowOutline.displayName = 'ArrowOutline';
ArrowOutline.inheritAttrs = false;
export default ArrowOutline;