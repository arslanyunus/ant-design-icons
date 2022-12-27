// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownOutline: ArrowDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownOutlineSvg}></AntdIcon>;
};

ArrowDownOutline.displayName = 'ArrowDownOutline';
ArrowDownOutline.inheritAttrs = false;
export default ArrowDownOutline;