// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareUpBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareUpBold: ArrowSquareUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareUpBoldSvg}></AntdIcon>;
};

ArrowSquareUpBold.displayName = 'ArrowSquareUpBold';
ArrowSquareUpBold.inheritAttrs = false;
export default ArrowSquareUpBold;