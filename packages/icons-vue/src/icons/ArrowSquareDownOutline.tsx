// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareDownOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareDownOutline: ArrowSquareDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareDownOutlineSvg}></AntdIcon>;
};

ArrowSquareDownOutline.displayName = 'ArrowSquareDownOutline';
ArrowSquareDownOutline.inheritAttrs = false;
export default ArrowSquareDownOutline;