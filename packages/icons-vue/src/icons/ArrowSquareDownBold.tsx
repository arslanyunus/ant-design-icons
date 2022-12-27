// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareDownBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareDownBold: ArrowSquareDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareDownBoldSvg}></AntdIcon>;
};

ArrowSquareDownBold.displayName = 'ArrowSquareDownBold';
ArrowSquareDownBold.inheritAttrs = false;
export default ArrowSquareDownBold;