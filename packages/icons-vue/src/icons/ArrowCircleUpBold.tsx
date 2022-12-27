// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleUpBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleUpBold: ArrowCircleUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleUpBoldSvg}></AntdIcon>;
};

ArrowCircleUpBold.displayName = 'ArrowCircleUpBold';
ArrowCircleUpBold.inheritAttrs = false;
export default ArrowCircleUpBold;