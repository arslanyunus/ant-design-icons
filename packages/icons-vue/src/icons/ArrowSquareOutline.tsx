// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareOutline: ArrowSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareOutlineSvg}></AntdIcon>;
};

ArrowSquareOutline.displayName = 'ArrowSquareOutline';
ArrowSquareOutline.inheritAttrs = false;
export default ArrowSquareOutline;